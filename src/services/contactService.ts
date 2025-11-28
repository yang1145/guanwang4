// 联系表单服务
import config from '@/config/env';

const API_BASE_URL = config.API_BASE_URL;

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

/**
 * 提交联系表单
 * @param data 联系表单数据
 * @returns Promise
 */
export const submitContactForm = async (data: ContactFormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '提交失败');
    }

    return await response.json();
  } catch (error) {
    console.error('提交联系表单时出错:', error);
    throw error;
  }
};

/**
 * 获取所有联系信息（管理员接口）
 * @param token 管理员认证令牌
 * @returns Promise
 */
export const getAllContacts = async (token: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '获取联系信息失败');
    }

    return await response.json();
  } catch (error) {
    console.error('获取联系信息时出错:', error);
    throw error;
  }
};

/**
 * 获取特定联系信息（管理员接口）
 * @param id 联系信息ID
 * @param token 管理员认证令牌
 * @returns Promise
 */
export const getContactById = async (id: number, token: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '获取联系信息失败');
    }

    return await response.json();
  } catch (error) {
    console.error('获取联系信息时出错:', error);
    throw error;
  }
};