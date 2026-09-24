import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { Product } from '../types/product';
import { initialProducts } from '../data/products';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

export const isSanityConfigured = Boolean(projectId && projectId !== 'your_project_id');

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      useCdn: true,
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
      return sanityProducts;
    }
    return initialProducts;
  } catch (error) {
    console.warn('Could not fetch products from Sanity, falling back to initial data:', error);
    return initialProducts;
  }
}
