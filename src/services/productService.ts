// 产品服务
import config from '@/config/env';

const API_BASE_URL = config.API_BASE_URL;

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image_url?: string;
  created_at: string;
}

/**
 * 获取所有产品
 * @param category 可选，按分类筛选产品
 * @returns Promise<Product[]>
 */
export const getAllProducts = async (category?: string): Promise<Product[]> => {
  try {
    const url = new URL(`${API_BASE_URL}/products`);
    if (category) {
      url.searchParams.append('category', category);
    }
    
    const response = await fetch(url.toString());
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '获取产品列表失败');
    }
    
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('获取产品列表时出错:', error);
    throw error;
  }
};

/**
 * 获取特定产品详情
 * @param id 产品ID
 * @returns Promise<Product>
 */
export const getProductById = async (id: number): Promise<Product> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '获取产品详情失败');
    }
    
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('获取产品详情时出错:', error);
    throw error;
  }
};

/**
 * 创建新产品
 * @param product 产品数据
 * @returns Promise<Product>
 */
export const createProduct = async (product: Omit<Product, 'id' | 'created_at'>): Promise<Product> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '创建产品失败');
    }
    
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('创建产品时出错:', error);
    throw error;
  }
};

/**
 * 更新产品
 * @param id 产品ID
 * @param product 产品数据
 * @returns Promise<Product>
 */
export const updateProduct = async (id: number, product: Partial<Omit<Product, 'id' | 'created_at'>>): Promise<Product> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '更新产品失败');
    }
    
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('更新产品时出错:', error);
    throw error;
  }
};

/**
 * 删除产品
 * @param id 产品ID
 * @returns Promise<void>
 */
export const deleteProduct = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '删除产品失败');
    }
    
    await response.json();
  } catch (error) {
    console.error('删除产品时出错:', error);
    throw error;
  }
};