import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { Product } from '../types/product';
import { initialProducts } from '../data/products';

const projectId =
  import.meta.env.PUBLIC_SANITY_PROJECT_ID ||
  import.meta.env.SANITY_PROJECT_ID ||
  (typeof process !== 'undefined' && (process.env?.PUBLIC_SANITY_PROJECT_ID || process.env?.SANITY_PROJECT_ID));

const dataset =
  import.meta.env.PUBLIC_SANITY_DATASET ||
  import.meta.env.SANITY_DATASET ||
  (typeof process !== 'undefined' && (process.env?.PUBLIC_SANITY_DATASET || process.env?.SANITY_DATASET)) ||
  'production';

export const isSanityConfigured = Boolean(projectId && projectId !== 'your_project_id');

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      useCdn: false, // false garantiza datos frescos inmediatos sin esperar la caché del CDN
      apiVersion: '2024-01-01',
    })
  : null;

const imageBuilder = sanityClient ? createImageUrlBuilder(sanityClient) : null;

export function urlForImage(source: any) {
  if (!imageBuilder || !source) return '';
  return imageBuilder.image(source).auto('format').fit('max').url();
}

export async function getProducts(): Promise<Product[]> {
  if (!sanityClient) {
    return initialProducts;
  }

  try {
    const query = `*[_type == "product"] | order(_createdAt asc) {
      "id": coalesce(slug.current, _id),
      name,
      shortName,
      tagline,
      badge,
      badgeColor,
      discount,
      "image": image.asset->url,
      alt,
      description,
      price,
      numericPrice,
      regularPrice,
      savings,
      features
    }`;

    const sanityProducts = await sanityClient.fetch<Product[]>(query);
    if (sanityProducts && sanityProducts.length > 0) {
      console.log(`[Sanity] Cargados exitosamente ${sanityProducts.length} productos desde Sanity Cloud.`);
      return sanityProducts.map(p => {
        // Si el precio de texto cambió (ej. "S/. 359.00"), asegurar que numericPrice sea 359
        if (p.price) {
          const match = p.price.replace(/,/g, '').match(/\d+(\.\d+)?/);
          if (match) {
            const parsed = parseFloat(match[0]);
            if (!isNaN(parsed) && parsed > 0) {
              return { ...p, numericPrice: parsed };
            }
          }
        }
        return p;
      });
    }
    console.warn('[Sanity] El dataset está vacío, usando datos fallback.');
    return initialProducts;
  } catch (error) {
    console.warn('[Sanity] Error consultando Sanity, usando datos fallback:', error);
    return initialProducts;
  }
}
