import {describe, expect, test} from '@jest/globals';
import { getProductIndexFromCart } from '../utils';

test('return true when the product is in the cart', () => {
  const cart = [
    {id: 1, imageUrl: "https://media.famillemary.fr/media/catalog/product/cache/ab108d34ae64fe8e0dffcb4c479290ce/m/i/miel_fleurs_anjou_1.png",title: 'Miel de fleurs', description: "Toutes les fleurs", price:25, quantity: 1, stocked: true},
  ];
  const productId = 1;
  const productIndex = getProductIndexFromCart(cart, productId);

  expect(productIndex).toBe(0);
});