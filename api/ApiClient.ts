import { APIRequestContext } from '@playwright/test';

export class ApiClient {
  readonly request: APIRequestContext;
  readonly baseURL = process.env.API_BASE_URL;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

async getCart(id: number) {
  return await this.request.get(`${this.baseURL}/carts/${id}`);
};

  async createCart(userId: number, productId: number, quantity: number) {
  return await this.request.post(`${this.baseURL}/carts/add`, {
    data: {
      userId: userId,
      products: [
        {
          id: productId,
          quantity: quantity
        }
      ]
    }
  });
};

async deleteCart(id: number) {
  return await this.request.delete(`${this.baseURL}/carts/${id}`);
}
}