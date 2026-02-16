import { Product, Order, OrderStatus, CartItem } from "./types";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Fresh Organic Apples",
    description: "Crisp, sweet organic apples sourced from local farms. Perfect for snacking or baking.",
    price: 299,
    originalPrice: 399,
    imageUrl: "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Fruits",
    inStock: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "Premium Bananas",
    description: "Ripe, yellow bananas packed with potassium. Imported from Ecuador.",
    price: 89,
    originalPrice: 120,
    imageUrl: "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Fruits",
    inStock: true,
    rating: 4.6
  },
  {
    id: 3,
    name: "Fresh Carrots",
    description: "Crunchy orange carrots, rich in beta-carotene. Farm-fresh and organic.",
    price: 149,
    imageUrl: "https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Vegetables",
    inStock: true,
    rating: 4.7
  },
  {
    id: 4,
    name: "Organic Spinach",
    description: "Fresh leafy spinach, perfect for salads and smoothies. Packed with iron.",
    price: 199,
    imageUrl: "https://images.pexels.com/photos/1300976/pexels-photo-1300976.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Vegetables",
    inStock: true,
    rating: 4.5
  },
  {
    id: 5,
    name: "Fresh Milk",
    description: "Pure, pasteurized whole milk. Delivered cold-chain protected.",
    price: 89,
    originalPrice: 110,
    imageUrl: "https://images.pexels.com/photos/416471/pexels-photo-416471.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Dairy",
    inStock: true,
    rating: 4.9
  },
  {
    id: 6,
    name: "Farm Fresh Eggs",
    description: "Free-range eggs from happy hens. Pack of 12.",
    price: 179,
    imageUrl: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Dairy",
    inStock: true,
    rating: 4.8
  },
  {
    id: 7,
    name: "Artisan Sourdough Bread",
    description: "Freshly baked sourdough with a crispy crust. Made daily.",
    price: 249,
    imageUrl: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Bakery",
    inStock: true,
    rating: 4.9
  },
  {
    id: 8,
    name: "Croissants",
    description: "Buttery, flaky French croissants. Perfect for breakfast.",
    price: 199,
    originalPrice: 249,
    imageUrl: "https://images.pexels.com/photos/209201/pexels-photo-209201.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Bakery",
    inStock: true,
    rating: 4.7
  },
  {
    id: 9,
    name: "Strawberries",
    description: "Sweet, juicy strawberries. Perfect for desserts.",
    price: 349,
    imageUrl: "https://images.pexels.com/photos/1300973/pexels-photo-1300973.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Fruits",
    inStock: true,
    rating: 4.8
  },
  {
    id: 10,
    name: "Broccoli",
    description: "Fresh green broccoli, rich in vitamins and fiber.",
    price: 179,
    imageUrl: "https://images.pexels.com/photos/1300974/pexels-photo-1300974.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Vegetables",
    inStock: true,
    rating: 4.6
  },
  {
    id: 11,
    name: "Greek Yogurt",
    description: "Creamy Greek yogurt, high in protein. 500g tub.",
    price: 199,
    imageUrl: "https://images.pexels.com/photos/5945568/pexels-photo-5945568.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Dairy",
    inStock: true,
    rating: 4.7
  },
  {
    id: 12,
    name: "Whole Wheat Bread",
    description: "Healthy whole wheat bread, fiber-rich and nutritious.",
    price: 149,
    imageUrl: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Bakery",
    inStock: true,
    rating: 4.5
  }
];

let mockOrders: Order[] = [];
let orderIdCounter = 1000;

export const createMockOrder = (
  items: CartItem[],
  address: any,
  paymentMethod: string
): Order => {
  const total = items.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  );
  
  const order: Order = {
    id: orderIdCounter++,
    items,
    total,
    status: "PLACED",
    createdAt: new Date().toISOString(),
    address,
    paymentMethod: paymentMethod as any
  };
  
  mockOrders.push(order);
  return order;
};

export const getMockOrders = (): Order[] => {
  return [...mockOrders];
};

export const updateOrderStatus = (orderId: number, status: OrderStatus): Order | null => {
  const order = mockOrders.find(o => o.id === orderId);
  if (order) {
    order.status = status;
    return order;
  }
  return null;
};
