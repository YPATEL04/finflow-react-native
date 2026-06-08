import { apiClient } from '../api/client';

export const transactionService = {
  getTransactions: async () => {
    const response = await apiClient.get(
      'https://jsonplaceholder.typicode.com/posts',
    );

    return response.data;
  },

  getUsers: async () => {
    const response = await apiClient.get(
      'https://jsonplaceholder.typicode.com/users',
    );

    return response.data;
  },
};