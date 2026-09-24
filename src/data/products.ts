import type { Product } from '../types/product';

export const initialProducts: Product[] = [
  {
    id: "prod-1",
    name: "Maletín Rose Gold con Espejo LED",
    shortName: "Rose Gold",
    tagline: "Tono Rosa Pastel con Herrajes Dorados & Espejo LED HD",
    badge: "MÁS VENDIDO",
    badgeColor: "bg-[#B8860B] text-white",
    discount: "28% OFF",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
    alt: "Maletín Rose Gold con espejo LED encendido y cosméticos organizados",
    description: "Tono rosa pastel con herrajes dorados. Incluye espejo LED recargable de 3 tonos, cable USB-C y separadores acolchados desmontables.",
    price: "S/. 129.00",
    numericPrice: 129,
    regularPrice: "S/. 179.00",
    savings: "Ahorras S/. 50.00 con envío gratis",
    features: [
      "Espejo táctil con brillo graduable en 3 tonos",
      "Batería 2000 mAh recargable por USB-C",
      "Separadores acolchados desmontables de EVA",
      "Cuero vegano impermeable con herrajes dorados"
    ]
  },
  {
    id: "prod-2",
    name: "Maletín Black Diamond con Espejo LED",
    shortName: "Black Diamond",
    tagline: "Acabado Negro Profundo Texturado Anti-Rayaduras",
    badge: "EDICIÓN ELEGANTE",
    badgeColor: "bg-[#0F172A] text-white border border-[#B8860B]",
    discount: "28% OFF",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85",
    alt: "Maletín Black Diamond con cierres dorados de alta resistencia",
    description: "Acabado negro profundo con texturado anti-rayaduras y cierres dorados de alta resistencia. El favorito para viajes, sesiones y estudio profesional.",
    price: "S/. 129.00",
    numericPrice: 129,
    regularPrice: "S/. 179.00",
    savings: "Ahorras S/. 50.00 con envío gratis",
    features: [
      "Look profesional sobrio y distinguido",
      "Compartimentos de tamaño personalizable",
      "Limpieza ultra rápida con paño húmedo",
      "Espejo táctil HD con 3 temperaturas de luz"
    ]
  },
  {
    id: "prod-3",
    name: "Kit Deluxe: Maletín + 12 Brochas Profesionales",
    shortName: "Kit Deluxe",
    tagline: "Maletín Completo + Juego Exclusivo de 12 Brochas Ultra Suaves",
    badge: "MEJOR VALOR",
    badgeColor: "bg-[#059669] text-white",
    discount: "31% OFF",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=85",
    alt: "Kit Deluxe con Maletín y 12 brochas profesionales de cerdas suaves",
    description: "El maletín completo con espejo LED más un juego exclusivo de 12 brochas profesionales de cerdas ultra suaves para base, ojos, rubor y contorno.",
    price: "S/. 159.00",
    numericPrice: 159,
    regularPrice: "S/. 229.00",
    savings: "Ahorras S/. 70.00 con envío gratis",
    features: [
      "Incluye set exclusivo de 12 brochas premium",
      "Estuche con tapa protectora para brochas",
      "Espejo táctil con 3 tonos de luz regulables",
      "Regalo de lujo listo para obsequiar"
    ]
  },
  {
    id: "prod-4",
    name: "Pack Dúo: 2 Maletines Premium con Espejo LED",
    shortName: "Pack Dúo (2x)",
    tagline: "2 Maletines Completos (Colores a tu Elección)",
    badge: "MÁXIMO AHORRO",
    badgeColor: "bg-[#B8860B] text-white",
    discount: "39% OFF",
    image: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&w=1200&q=85",
    alt: "Pack Dúo con 2 maletines con espejo LED recargable",
    description: "Llevate dos maletines completos (combiná colores Rose Gold y Black a tu elección). El combo perfecto para compartir con mamá, hermana o amiga.",
    price: "S/. 219.00",
    numericPrice: 219,
    regularPrice: "S/. 358.00",
    savings: "Ahorras S/. 139.00 con envío gratis",
    features: [
      "2 maletines con sus espejos LED y cables USB-C",
      "Elegís los colores que prefieras al confirmar por WhatsApp",
      "Envío prioritario express incluido",
      "El mayor descuento de toda la temporada"
    ]
  }
];
