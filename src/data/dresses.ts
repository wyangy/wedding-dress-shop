import type { Dress } from "../types/dress";

export const dresses: Dress[] = [
  {
    id: 1,
    name: "Lace Garden Gown",
    size: "8",
    bust: 84,
    waist: 66,
    hip: 92,
    hollowToHem: 150,
    description: "Romantic lace wedding dress with a soft flowing shape.",
    images: {
      main: "/images/dresses/dress-1-front.jpg",
      front: "/images/dresses/dress-1-front.jpg",
      back: "/images/dresses/dress-1-back.jpg",
    },
  },
  {
    id: 2,
    name: "Timeless Satin Dress",
    size: "8",
    bust: 86,
    waist: 68,
    hip: 94,
    hollowToHem: 152,
    description: "Elegant satin bridal dress with a refined designer look.",
    images: {
      main: "/images/dresses/dress-2-front.jpg",
      front: "/images/dresses/dress-2-front.jpg",
      back: "/images/dresses/dress-2-back.jpg",
    },
  },
  {
    id: 3,
    name: "Classic Tulle Gown",
    size: "8",
    bust: 84,
    waist: 66,
    hip: 92,
    hollowToHem: 150,
    description: "Light tulle wedding dress with delicate movement.",
    images: {
      main: "/images/dresses/dress-3-front.jpg",
      front: "/images/dresses/dress-3-front.jpg",
      back: "/images/dresses/dress-3-back.jpg",
    },
  },
];

export const featuredDresses = dresses.slice(0, 3);
