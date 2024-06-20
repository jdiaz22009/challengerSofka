import {IProduct} from '@/types/app';
import {PRODUCTS_ENDPOINT} from '@/utils/config';
import {request} from '@/utils/request';

export const addProduct = async (data: IProduct) => {
  const headers = {
    authorId: '122',
    'Content-Type': 'application/json',
  };

  try {
    await request('POST', PRODUCTS_ENDPOINT, data, headers);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateProduct = async (data: IProduct, id: string) => {
  const headers = {
    authorId: '122',
    'Content-Type': 'application/json',
  };

  try {
    await request('PUT', `${PRODUCTS_ENDPOINT}/${id}`, data, headers);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getProducts = async (): Promise<IProduct[]> => {
  const headers = {
    authorId: '122',
    'Content-Type': 'application/json',
  };

  try {
    const response = await request<any, {data: IProduct[]}>(
      'GET',
      PRODUCTS_ENDPOINT,
      undefined,
      headers,
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const geProductById = async (id: string): Promise<IProduct> => {
  const headers = {
    authorId: '122',
    'Content-Type': 'application/json',
  };

  try {
    const response = await request<any, IProduct>(
      'GET',
      `${PRODUCTS_ENDPOINT}/${id}`,
      undefined,
      headers,
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteProductById = async (id: string): Promise<IProduct> => {
  const headers = {
    authorId: '122',
    'Content-Type': 'application/json',
  };

  try {
    const response = await request<any, IProduct>(
      'DELETE',
      `${PRODUCTS_ENDPOINT}/${id}`,
      undefined,
      headers,
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
