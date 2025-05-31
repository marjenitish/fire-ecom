
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
    price: 'Rs. 2.64',
    originalPrice: 'Rs. 2.74',
    imageUrl: 'https://chinabazaar.silkinv.com/storage/v1/object/sign/tasteme/p-20.png?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0YXN0ZW1lL3AtMjAucG5nIiwiaWF0IjoxNzQ4NzIxNDU1LCJleHAiOjE3ODAyNTc0NTV9.6gwhLn_n4luBfoFgYoEhaC4D9ZQwRt9yV7z6wlqNh-Y',
    unit: '1 each',
    onSale: true,
    aiHint: 'green lettuce',
  },
  {
    id: '2',
    name: 'Leafy Romaine Mixed Lettuce',
    price: 'Rs. 2.50',
    originalPrice: 'Rs. 2.74',
    imageUrl: 'https://chinabazaar.silkinv.com/storage/v1/object/sign/tasteme/p-8.webp?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0YXN0ZW1lL3AtOC53ZWJwIiwiaWF0IjoxNzQ4NzIxNTMwLCJleHAiOjE3ODAyNTc1MzB9.2HEhduDrqXSOHTo5aqjzNlgOWCCTsTmZi0qLcnBgViQ',
    unit: '1 each',
    onSale: true,
    aiHint: 'romaine lettuce mix',
  },
  {
    id: '3',
    name: 'Fresh Express Iceberg Garden Salad Blend',
    price: 'Rs. 25.00 - $40.00',
    imageUrl: 'https://chinabazaar.silkinv.com/storage/v1/object/sign/tasteme/p-10.webp?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0YXN0ZW1lL3AtMTAud2VicCIsImlhdCI6MTc0ODcyMTU5MSwiZXhwIjoxNzgwMjU3NTkxfQ.bIFzt8Xm1nMgblGHHvmp6LGa4ukW-Nv_Zs2LhE43OEs',
    unit: '1 Bag',
    onSale: false,
    aiHint: 'iceberg salad bag',
  },
  {
    id: '4',
    name: 'Organic Girl Lettuce',
    price: 'Rs. 1.50',
    imageUrl: 'https://chinabazaar.silkinv.com/storage/v1/object/sign/tasteme/p-3.webp?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0YXN0ZW1lL3AtMy53ZWJwIiwiaWF0IjoxNzQ4NzIxNjIzLCJleHAiOjE3ODAyNTc2MjN9.uB31UP_6_sM_P5SHq8DZJsoCOjxfXjT4FRKnSsJsCAk',
    unit: '1 Bag',
    onSale: false,
    aiHint: 'organic lettuce bag',
  },
  {
    id: '5',
    name: 'Organic Spring Mix',
    price: 'Rs. 2.60',
    originalPrice: 'Rs. 3.00',
    imageUrl: 'https://chinabazaar.silkinv.com/storage/v1/object/sign/tasteme/p-12.png?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0YXN0ZW1lL3AtMTIucG5nIiwiaWF0IjoxNzQ4NzIxNjg2LCJleHAiOjE3ODAyNTc2ODZ9.tTNlmWNKyWxmZqkUEa3reoQeZp1O4-X1KnYBiRXXfhs',
    unit: '1 each',
    onSale: true,
    aiHint: 'spring mix greens',
  },
  {
    id: '6',
    name: 'Organic Spring Mix',
    price: 'Rs. 2.60',
    originalPrice: 'Rs. 3.00',
    imageUrl: 'https://chinabazaar.silkinv.com/storage/v1/object/sign/tasteme/p-9.webp?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0YXN0ZW1lL3AtOS53ZWJwIiwiaWF0IjoxNzQ4NzIxNzU3LCJleHAiOjE3ODAyNTc3NTd9.MbAeJPPJq7pA50RBpwovd_q1CjdQ-QjPTGKLCeSpb-s',
    unit: '1 each',
    onSale: true,
    aiHint: 'spring mix greens',
  },
];
