import { IProduct } from '../../src/dtos'

export const allProducts: IProduct[] = [
  {
    url: 'https://marketplate.com/product-1',
    price: 10,
    marketplace: 'marketplace',
    location: 'City',
    image: 'https://marketplate.com/product-1.png',
    title: 'product',
    variations: [
      {
        name: 'variation',
        options: ['option']
      }
    ]
  },
  {
    url: 'https://marketplate.com/product-2',
    price: 20,
    marketplace: 'marketplace',
    location: 'City',
    image: 'https://marketplate.com/product-2.png',
    title: 'product',
    variations: [
      {
        name: 'variation',
        options: ['option']
      }
    ]

  },
  {
    url: 'https://marketplate.com/product-3',
    price: 30,
    marketplace: 'marketplace',
    location: 'City',
    image: 'https://marketplate.com/product-3.png',
    title: 'product',
    variations: [
      {
        name: 'variation',
        options: ['option']
      }
    ]
  },
  {
    url: 'https://marketplate.com/product-4',
    price: 40,
    marketplace: 'marketplace',
    location: 'City',
    image: 'https://marketplate.com/product-4.png',
    title: 'product',
    variations: [
      {
        name: 'variation',
        options: ['option']
      }
    ]
  },
  {
    url: 'https://marketplate.com/product-5',
    price: 5,
    marketplace: 'marketplace',
    location: 'City',
    image: 'https://marketplate.com/product-5.png',
    title: 'product',
    variations: [
      {
        name: 'variation',
        options: ['option']
      }
    ]
  }
]
