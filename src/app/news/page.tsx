"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllNews, type NewsItem } from "@/services/newsService";

export default function NewsPage() {
  const pathname = usePathname();
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // 页面切换时的刷新机制
  useEffect(() => {
    // 当路由改变时重置页面状态
    window.scrollTo(0, 0);
  }, [pathname]);

  // 获取新闻数据
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await getAllNews(currentPage, 6);
        setNewsItems(response.data);
        setTotalPages(response.pagination.totalPages);
      } catch (err) {
        setError(err instanceof Error ? err.message : '获取新闻数据失败');
        // 如果API调用失败，使用默认数据
        setNewsItems([
          {
            id: 1,
            title: "公司荣获2024年度优秀服务商称号",
            content: "在近日举办的行业峰会上，我公司凭借卓越的服务质量和创新能力荣获年度优秀服务商称号。",
            excerpt: "在近日举办的行业峰会上，我公司凭借卓越的服务质量和创新能力荣获年度优秀服务商称号。",
            author: "管理员",
            views: 128,
            created_at: "2024-06-15",
            category: "公司新闻"
          },
          {
            id: 2,
            title: "数字化转型解决方案助力制造业升级",
            content: "我们为某大型制造企业提供的数字化转型解决方案成功上线，显著提升了生产效率。",
            excerpt: "我们为某大型制造企业提供的数字化转型解决方案成功上线，显著提升了生产效率。",
            author: "管理员",
            views: 96,
            created_at: "2024-05-28",
            category: "行业动态"
          },
          {
            id: 3,
            title: "公司参与制定行业标准",
            content: "作为行业领先企业，我们受邀参与制定相关行业技术标准，推动行业规范化发展。",
            excerpt: "作为行业领先企业，我们受邀参与制定相关行业技术标准，推动行业规范化发展。",
            author: "管理员",
            views: 87,
            created_at: "2024-05-10",
            category: "公司新闻"
          },
          {
            id: 4,
            title: "人工智能技术在传统行业的应用前景",
            content: "随着AI技术的发展，越来越多的传统行业开始探索智能化转型路径。",
            excerpt: "随着AI技术的发展，越来越多的传统行业开始探索智能化转型路径。",
            author: "管理员",
            views: 142,
            created_at: "2024-04-22",
            category: "行业观察"
          },
          {
            id: 5,
            title: "公司扩大研发团队，加强技术创新能力",
            content: "为进一步提升技术实力，公司近期新增50名研发人员，强化核心技术团队。",
            excerpt: "为进一步提升技术实力，公司近期新增50名研发人员，强化核心技术团队。",
            author: "管理员",
            views: 76,
            created_at: "2024-04-05",
            category: "公司新闻"
          },
          {
            id: 6,
            title: "云计算服务市场需求持续增长",
            content: "根据最新市场调研报告，企业对云计算服务的需求呈现快速增长趋势。",
            excerpt: "根据最新市场调研报告，企业对云计算服务的需求呈现快速增长趋势。",
            author: "管理员",
            views: 103,
            created_at: "2024-03-18",
            category: "行业动态"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 生成分页数组
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <div className="pt-32 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            data-animate="active"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              新闻资讯
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              了解公司最新动态和行业发展趋势
            </p>
          </motion.div>
        </div>
      </div>

      {/* News List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              错误: {error}
            </div>
          )}
          
          {loading ? (
            <div className="text-center py-10">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              <p className="mt-2 text-gray-600">加载中...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((news, index) => (
                  <motion.div
                    key={news.id}
                    className="card hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    data-animate="active"
                  >
                    {news.category && (
                      <div className="mb-4">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                          {news.category}
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-semibold mb-3">{news.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {news.excerpt || news.content.substring(0, 100) + '...'}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {new Date(news.created_at).toLocaleDateString('zh-CN')}
                      </span>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href={`/news/${news.id}`} className="text-blue-700 hover:text-blue-800 font-medium text-sm">
                          阅读更多 →
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded ${
                      currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    上一页
                  </button>
                  
                  {getPageNumbers().map((page, index) => (
                    <button
                      key={index}
                      onClick={() => typeof page === 'number' && handlePageChange(page)}
                      disabled={page === '...'}
                      className={`px-3 py-1 rounded ${
                        page === currentPage
                          ? 'bg-blue-800 text-white'
                          : page === '...'
                          ? 'text-gray-500 cursor-default'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded ${
                      currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    下一页
                  </button>
                </nav>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}