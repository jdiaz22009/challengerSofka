import {IProduct} from '@/types/app';
import {PRODUCTS_ENDPOINT} from '@/utils/config';
import {request} from '@/utils/request';

export const addProduct = async (data: IProduct) => {
  const headers = {
    authorId: '122',
    'Content-Type': 'application/json',
  };

  try {
    const response = await request('POST', PRODUCTS_ENDPOINT, data, headers);
    console.log(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const geProducts = async (): Promise<IProduct[]> => {
  const headers = {
    authorId: '122',
    'Content-Type': 'application/json',
  };

  try {
    const response = await request<any, IProduct[]>(
      'GET',
      PRODUCTS_ENDPOINT,
      undefined,
      headers,
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
