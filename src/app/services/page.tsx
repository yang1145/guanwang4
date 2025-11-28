"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllProducts, type Product } from "@/services/productService";

export default function ServicesPage() {
  const pathname = usePathname();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 页面切换时的刷新机制
  useEffect(() => {
    // 当路由改变时重置页面状态
    window.scrollTo(0, 0);
  }, [pathname]);

  // 获取产品数据
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : '获取产品数据失败');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // 如果没有产品数据，使用默认数据
  const displayProducts = products.length > 0 ? products : [
    {
      id: 1,
      name: "数字化转型咨询",
      description: "为企业提供全面的数字化转型战略规划和咨询服务，帮助企业在数字经济时代保持竞争优势。",
      category: "咨询服务"
    },
    {
      id: 2,
      name: "系统集成服务",
      description: "整合各类软硬件系统，实现数据互通和业务协同，提升企业整体运营效率。",
      category: "技术服务"
    },
    {
      id: 3,
      name: "定制软件开发",
      description: "根据企业特定需求，开发定制化软件解决方案，满足个性化业务场景。",
      category: "开发服务"
    },
    {
      id: 4,
      name: "云服务解决方案",
      description: "提供安全可靠的云计算服务，帮助企业降低IT成本，提高业务灵活性。",
      category: "云服务"
    },
    {
      id: 5,
      name: "数据分析服务",
      description: "利用大数据技术，深度挖掘企业数据价值，为决策提供科学依据。",
      category: "数据分析"
    },
    {
      id: 6,
      name: "技术支持与维护",
      description: "提供7x24小时技术支持服务，确保系统稳定运行，及时解决问题。",
      category: "支持服务"
    }
  ];

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
              产品与服务
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              提供全方位的解决方案，满足不同行业客户的多样化需求
            </p>
          </motion.div>
        </div>
      </div>

      {/* Service Categories */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {displayProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="card hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  data-animate="active"
                >
                  <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <motion.button 
                    className="text-blue-700 font-medium hover:text-blue-800 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    了解更多 →
                  </motion.button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            data-animate="active"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              服务流程
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              规范化的服务流程，确保项目高质量交付
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "需求沟通", description: "深入了解客户需求和业务痛点" },
              { step: "02", title: "方案设计", description: "制定个性化解决方案" },
              { step: "03", title: "项目实施", description: "严格按照计划执行项目" },
              { step: "04", title: "验收交付", description: "确保项目成果符合预期" }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                data-animate="active"
              >
                <div className="w-16 h-16 rounded-full bg-blue-800 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            data-animate="active"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              寻求定制化解决方案？
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              我们的专业团队随时准备为您提供专属服务
            </p>
            <motion.button
              className="bg-white text-blue-800 hover:bg-gray-100 font-medium py-3 px-8 rounded transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              立即咨询
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}