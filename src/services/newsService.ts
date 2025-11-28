// 新闻服务
import config from '@/config/env';

const API_BASE_URL = config.API_BASE_URL;

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  author: string;
  image_url?: string;
  views: number;
  created_at: string;
  excerpt?: string;
  category?: string;
}

export interface NewsPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface NewsResponse {
  data: NewsItem[];
  pagination: NewsPagination;
}

/**
 * 获取所有新闻（分页）
 * @param page 页码，默认为1
 * @param limit 每页数量，默认为10
 * @returns Promise<NewsResponse>
 */
export const getAllNews = async (page: number = 1, limit: number = 10): Promise<NewsResponse> => {
  try {
    const url = new URL(`${API_BASE_URL}/news`);
    url.searchParams.append('page', page.toString());
    url.searchParams.append('limit', limit.toString());
    
    const response = await fetch(url.toString());
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '获取新闻列表失败');
    }
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('获取新闻列表时出错:', error);
    throw error;
  }
};

/**
 * 获取热门新闻
 * @param limit 返回的新闻数量，默认为5
 * @returns Promise<NewsItem[]>
 */
export const getPopularNews = async (limit: number = 5): Promise<NewsItem[]> => {
  try {
    const url = new URL(`${API_BASE_URL}/news/popular`);
    
    const response = await fetch(url.toString());
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '获取热门新闻失败');
    }
    
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('获取热门新闻时出错:', error);
    throw error;
  }
};

/**
 * 获取特定新闻详情
 * @param id 新闻ID
 * @returns Promise<NewsItem>
 */
export const getNewsById = async (id: number): Promise<NewsItem> => {
  try {
    const response = await fetch(`${API_BASE_URL}/news/${id}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '获取新闻详情失败');
    }
    
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('获取新闻详情时出错:', error);
    throw error;
  }
};

/**
 * 创建新闻
 * @param news 新闻数据
 * @returns Promise<NewsItem>
 */
export const createNews = async (news: Omit<NewsItem, 'id' | 'views' | 'created_at'>): Promise<NewsItem> => {
  try {
    const response = await fetch(`${API_BASE_URL}/news`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(news),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '创建新闻失败');
    }
    
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('创建新闻时出错:', error);
    throw error;
  }
};

/**
 * 更新新闻
 * @param id 新闻ID
 * @param news 新闻数据
 * @returns Promise<NewsItem>
 */
export const updateNews = async (id: number, news: Partial<Omit<NewsItem, 'id' | 'views' | 'created_at'>>): Promise<NewsItem> => {
  try {
    const response = await fetch(`${API_BASE_URL}/news/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(news),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '更新新闻失败');
    }
    
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('更新新闻时出错:', error);
    throw error;
  }
};

/**
 * 删除新闻
 * @param id 新闻ID
 * @returns Promise<void>
 */
export const deleteNews = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/news/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '删除新闻失败');
    }
    
    await response.json();
  } catch (error) {
    console.error('删除新闻时出错:', error);
    throw error;
  }
};