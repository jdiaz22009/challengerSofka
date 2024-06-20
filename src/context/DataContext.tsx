import React, {createContext, useState, useEffect, useContext} from 'react';
import {IProduct} from '@/types/app';
import {
  addProduct,
  deleteProductById,
  getProducts,
  updateProduct,
} from '@/services/product';

interface ContextType {
  data: IProduct[];
  addData: (item: IProduct) => Promise<void>;
  removeData: (id: string) => Promise<void>;
  updateData: (id: string, updatedItem: IProduct) => Promise<void>;
}

const DataContext = createContext<ContextType | undefined>(undefined);

export const DataProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = async () => {
    try {
      const response = await getProducts();
      setData(response);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const addData = async (item: IProduct) => {
    try {
      await addProduct(item);
    } catch (error) {
      throw error;
    }
  };

  const removeData = async (id: string) => {
    try {
      await deleteProductById(id);
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      throw error;
    }
  };

  const updateData = async (id: string, updatedItem: IProduct) => {
    try {
      console.log({id});
      console.log({updatedItem});
      const response = await updateProduct(updatedItem, id);
      const updatedData = data.map(item => {
        if (item.id === id) {
          return response;
        }
        return item;
      });
      setData(updatedData as IProduct[]);
    } catch (error) {
      throw error;
    }
  };

  return (
    <DataContext.Provider value={{data, addData, removeData, updateData}}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData debe ser usado dentro de un DataProvider');
  }
  return context;
};
