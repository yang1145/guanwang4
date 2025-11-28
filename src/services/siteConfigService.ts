// 网站配置服务
import config from '@/config/env';

const API_BASE_URL = config.API_BASE_URL;

export interface SiteConfig {
  id: number;
  company_name: string;
  site_url: string;
  icp_number: string;
  police_number: string;
  copyright_info: string;
  company_description: string;
  seo_keywords: string;
  site_title: string;
  friend_links: Array<{ name: string; url: string }>;
  created_at: string;
  updated_at: string;
}

/**
 * 获取网站配置信息
 * @returns Promise<SiteConfig>
 */
export const getSiteConfig = async (): Promise<SiteConfig> => {
  try {
    const response = await fetch(`${API_BASE_URL}/site-config`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '获取网站配置信息失败');
    }
    
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('获取网站配置信息时出错:', error);
    throw error;
  }
};

/**
 * 更新网站配置信息（管理员接口）
 * @param configData 配置数据
 * @param token 管理员认证令牌
 * @returns Promise<SiteConfig>
 */
export const updateSiteConfig = async (configData: Partial<Omit<SiteConfig, 'id' | 'created_at' | 'updated_at'>>, token: string): Promise<SiteConfig> => {
  try {
    const response = await fetch(`${API_BASE_URL}/site-config`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(configData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '更新网站配置信息失败');
    }
    
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('更新网站配置信息时出错:', error);
    throw error;
  }
};