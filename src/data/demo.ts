
export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
  unit: string;
  onSale: boolean;
  aiHint: string;
}

export const bestSellerProducts: Product[] = [
  {
    id: '1',
    name: 'Fresh Green Leaf Lettuce',
    price: '$2.64',
    originalPrice: '$2.74',
    imageUrl: 'https://placehold.co/300x300.png',
    unit: '1 each',
    onSale: true,
    aiHint: 'green lettuce',
  },
  {
    id: '2',
    name: 'Leafy Romaine Mixed Lettuce',
    price: '$2.50',
    originalPrice: '$2.74',
    imageUrl: 'https://placehold.co/300x300.png',
    unit: '1 each',
    onSale: true,
    aiHint: 'romaine lettuce mix',
  },
  {
    id: '3',
    name: 'Fresh Express Iceberg Garden Salad Blend',
    price: '$25.00 - $40.00',
    imageUrl: 'https://placehold.co/300x300.png',
    unit: '1 Bag',
    onSale: false,
    aiHint: 'iceberg salad bag',
  },
  {
    id: '4',
    name: 'Organic Girl Lettuce',
    price: '$1.50',
    imageUrl: 'https://placehold.co/300x300.png',
    unit: '1 Bag',
    onSale: false,
    aiHint: 'organic lettuce bag',
  },
  {
    id: '5',
    name: 'Organic Spring Mix',
    price: '$2.60',
    originalPrice: '$3.00',
    imageUrl: 'https://placehold.co/300x300.png',
    unit: '1 each',
    onSale: true,
    aiHint: 'spring mix greens',
  },
  {
    id: '6',
    name: 'Organic Firm Fresh White Lettuce',
    price: '$3.00 - $5.00',
    imageUrl: 'https://placehold.co/300x300.png',
    unit: '1 each',
    onSale: false,
    aiHint: 'white lettuce head',
  },
  {
    id: '7',
    name: 'Fresh Organic Broccoli',
    price: '$5.00 - $8.00',
    imageUrl: 'https://placehold.co/300x300.png',
    unit: '1 each',
    onSale: false,
    aiHint: 'broccoli organic',
  },
  {
    id: '8',
    name: 'Great Value Tortilla Chips, Cantina Style',
    price: '$5.00 - $15.00',
    imageUrl: 'https://placehold.co/300x300.png',
    unit: '1 each',
    onSale: false,
    aiHint: 'tortilla chips bag',
  },
  {
    id: '9',
    name: "Frito Lay's Family Fun Mix Snacks",
    price: '$6.20',
    originalPrice: '$6.98',
    imageUrl: 'https://placehold.co/300x300.png',
    unit: '1 each',
    onSale: true,
    aiHint: 'snack mix bag',
  },
  {
    id: '10',
    name: "Lay's Kettle Cooked Mesquite Potato Chips",
    price: '$5.00 - $15.00',
    imageUrl: 'https://placehold.co/300x300.png',
    unit: '1 each',
    onSale: false,
    aiHint: 'kettle chips bag',
  },
  {
    id: '11',
    name: "Lay's Bar-B-Que Potato Chips",
    price: '$5.00 - $15.00',
    imageUrl: 'https://placehold.co/300x300.png',
    unit: '1 each',
    onSale: false,
    aiHint: 'bbq chips bag',
  },
  {
    id: '12',
    name: "Chester's Fries Flamen Hot Corn Potato Snacks",
    price: '$5.00 - $15.00',
    imageUrl: 'https://placehold.co/300x300.png',
    unit: '1 each',
    onSale: false,
    aiHint: 'hot fries snacks',
  },
];
