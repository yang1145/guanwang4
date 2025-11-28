# 服务层说明

本目录包含前端与后端API交互的服务函数。

## 目录结构

```
services/
├── contactService.ts     # 联系表单相关服务
├── productService.ts     # 产品相关服务
├── newsService.ts        # 新闻相关服务
└── README.md            # 服务层说明文档
```

## 使用说明

### 联系表单服务

```typescript
import { submitContactForm } from '@/services/contactService';

// 提交联系表单
const formData = {
  name: '张三',
  email: 'zhangsan@example.com',
  phone: '13800138000',
  message: '我想了解你们的产品'
};

try {
  const result = await submitContactForm(formData);
  console.log('提交成功', result);
} catch (error) {
  console.error('提交失败', error);
}
```

### 产品服务

```typescript
import { getAllProducts, getProductById } from '@/services/productService';

// 获取所有产品
try {
  const products = await getAllProducts();
  console.log('产品列表', products);
} catch (error) {
  console.error('获取产品列表失败', error);
}

// 获取特定产品
try {
  const product = await getProductById(1);
  console.log('产品详情', product);
} catch (error) {
  console.error('获取产品详情失败', error);
}
```

### 新闻服务

```typescript
import { getAllNews, getNewsById, getPopularNews } from '@/services/newsService';

// 获取所有新闻（分页）
try {
  const response = await getAllNews(1, 10); // 第1页，每页10条
  console.log('新闻列表', response.data);
  console.log('分页信息', response.pagination);
} catch (error) {
  console.error('获取新闻列表失败', error);
}

// 获取特定新闻
try {
  const news = await getNewsById(1);
  console.log('新闻详情', news);
} catch (error) {
  console.error('获取新闻详情失败', error);
}

// 获取热门新闻
try {
  const popularNews = await getPopularNews(5); // 获取前5条热门新闻
  console.log('热门新闻', popularNews);
} catch (error) {
  console.error('获取热门新闻失败', error);
}
```

## 环境配置

API的基础URL可以通过环境变量进行配置：

- `NEXT_PUBLIC_API_BASE_URL`: API基础URL，默认为 `http://localhost:3001/api`

在 `.env.local` 文件中配置：
```
NEXT_PUBLIC_API_BASE_URL=http://your-api-server.com/api
```

### 环境变量文件说明

- `.env`: 默认环境变量文件，会被提交到版本控制系统
- `.env.local`: 本地环境变量文件，不会被提交到版本控制系统，优先级最高
- `.env.example`: 环境变量示例文件，供团队成员参考

要配置本地环境变量，请复制 `.env.example` 文件为 `.env.local` 并根据需要修改值。