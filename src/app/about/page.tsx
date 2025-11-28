"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AboutPage() {
  const pathname = usePathname();

  // 页面切换时的刷新机制
  useEffect(() => {
    // 当路由改变时重置页面状态
    window.scrollTo(0, 0);
  }, [pathname]);

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
              关于我们
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              深耕行业多年，致力于为客户提供最优质的服务和解决方案
            </p>
          </motion.div>
        </div>
      </div>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              data-animate="active"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                公司简介
              </h2>
              <p className="text-gray-600 mb-6">
                我们成立于20XX年，是一家专注于为传统行业提供数字化解决方案的科技公司。
                凭借多年的行业经验和专业技术团队，我们已经成功服务了数百家企业客户。
              </p>
              <p className="text-gray-600 mb-6">
                我们的使命是通过技术创新帮助传统企业实现转型升级，提高运营效率，
                在激烈的市场竞争中保持领先地位。
              </p>
              <p className="text-gray-600">
                我们始终坚持客户至上的原则，以专业的态度和卓越的技术能力，
                为每一位客户提供量身定制的解决方案。
              </p>
            </motion.div>
            <motion.div
              className="mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              data-animate="active"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full aspect-video flex items-center justify-center text-gray-500">
                公司形象图
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "服务客户" },
              { number: "1000+", label: "成功项目" },
              { number: "50+", label: "专业团队" },
              { number: "10+", label: "行业经验" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                data-animate="active"
              >
                <div className="text-4xl font-bold text-blue-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
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
              核心团队
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              汇聚行业精英，打造专业服务团队
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: item * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                data-animate="active"
              >
                <div className="mx-auto bg-gray-200 border-2 border-dashed rounded-full w-32 h-32 flex items-center justify-center text-gray-500 mb-4" />
                <h3 className="text-xl font-semibold mb-1">姓名 {item}</h3>
                <p className="text-gray-600 mb-2">职位 {item}</p>
                <p className="text-gray-500 text-sm">
                  行业经验丰富的专业人士，专注于为客户提供优质服务。
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}