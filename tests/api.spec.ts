import { test, expect } from '@playwright/test';
import { ApiClient } from '../api/ApiClient';

let apiClient: ApiClient;

test.beforeEach(async ({ request }) => {
  apiClient = new ApiClient(request);
});

test('Get cart by ID', async () => {
 

  const response = await apiClient.getCart(1);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);
  expect(body.totalProducts).toBe(4);

  const firstProduct = body.products[0];
  expect(firstProduct.title).toBe('Blue Frock');
});

test('Create a new cart', async () => {
 

  const response = await apiClient.createCart(1, 162, 1);

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.userId).toBe(1);
});

test('Delete cart', async () => {


  const response = await apiClient.deleteCart(1);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);
  expect(body.isDeleted).toBe(true);
});