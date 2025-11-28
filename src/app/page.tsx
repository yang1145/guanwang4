"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaUsers, FaCogs, FaSyncAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  const pathname = usePathname();

  // 页面切换时的刷新机制
  useEffect(() => {
    // 当路由改变时重置页面状态
    window.scrollTo(0, 0);
    
    // 强制重新渲染动画
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => {
      el.setAttribute('data-animate', 'reset');
      setTimeout(() => {
        el.setAttribute('data-animate', 'active');
      }, 10);
    });
  }, [pathname]);

  return (
    <>
      <Header />
      
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            data-animate="active"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              我们的服务优势
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              多年行业经验积累，为您提供专业、可靠的服务支持
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "专业团队",
                description: "拥有经验丰富的专家团队，深入了解各行业发展特点和需求。",
                icon: <FaUsers className="text-4xl text-blue-800 mx-auto" />
              },
              {
                title: "定制方案",
                description: "根据客户实际情况量身定制解决方案，确保最佳实施效果。",
                icon: <FaCogs className="text-4xl text-blue-800 mx-auto" />
              },
              {
                title: "持续服务",
                description: "提供全周期服务支持，从咨询到实施再到运维保障。",
                icon: <FaSyncAlt className="text-4xl text-blue-800 mx-auto" />
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="card text-center hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                data-animate="active"
              >
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              data-animate="active"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full aspect-video flex items-center justify-center text-gray-500">
                公司介绍图片
              </div>
            </motion.div>
            <motion.div
              className="mt-10 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              data-animate="active"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                关于我们
              </h2>
              <p className="text-gray-600 mb-6">
                我们是一家专注于传统行业数字化转型的服务提供商，致力于帮助企业提升运营效率，
                优化管理流程，实现可持续发展。
              </p>
              <p className="text-gray-600 mb-8">
                成立以来，已为众多知名企业提供专业的解决方案，在行业内树立了良好的口碑。
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Link href="/about" className="btn-primary inline-block">
                  了解更多
                </Link>
              </motion.div>
            </motion.div>
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
              准备开始您的数字化转型之旅？
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              联系我们的专家团队，获取专属解决方案建议
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white text-blue-800 hover:bg-gray-100 font-medium py-3 px-8 rounded transition duration-300 text-center">
                  立即咨询
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-blue-700 font-medium py-3 px-8 rounded transition duration-300 text-center">
                  查看服务
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}