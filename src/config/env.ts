// 环境配置文件
// Next.js会自动加载.env.local等环境变量文件
// 浏览器环境变量需要以NEXT_PUBLIC_为前缀

const config = {
  // API基础URL，可以通过NEXT_PUBLIC_API_BASE_URL环境变量配置
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api',
  
  // 其他可能的配置项
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || '企业官网',
  APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION || '适用于传统行业的简洁化企业官网模板',
};

export default config;