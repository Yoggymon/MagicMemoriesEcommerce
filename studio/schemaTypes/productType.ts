import { defineField, defineType } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Producto',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (Identificador único en URL)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortName',
      title: 'Nombre Corto (ej. Rose Gold, Kit Deluxe)',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Subtítulo destacado (Tagline)',
      type: 'string',
    }),
    defineField({
      name: 'badge',
      title: 'Etiqueta / Badge (ej. MÁS VENDIDO)',
      type: 'string',
    }),
    defineField({
      name: 'badgeColor',
      title: 'Color del Badge (clases Tailwind)',
      type: 'string',
      initialValue: 'bg-[#B8860B] text-white',
    }),
    defineField({
      name: 'discount',
      title: 'Descuento (ej. 28% OFF)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Imagen del Producto',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Texto Alternativo para Accesibilidad / SEO',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'price',
      title: 'Precio Formateado (ej. S/. 129.00)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'numericPrice',
      title: 'Precio Numérico (para el carrito, ej. 129)',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'regularPrice',
      title: 'Precio Regular Tachado (ej. S/. 179.00)',
      type: 'string',
    }),
    defineField({
      name: 'savings',
      title: 'Texto de Ahorro (ej. Ahorras S/. 50.00 con envío gratis)',
      type: 'string',
    }),
    defineField({
      name: 'features',
      title: 'Características Destacadas',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      media: 'image',
    },
  },
});
