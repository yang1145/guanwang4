"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { submitContactForm } from "@/services/contactService";

export default function ContactPage() {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: string, text: string} | null>(null);

  // 页面切换时的刷新机制
  useEffect(() => {
    // 当路由改变时重置页面状态
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 基本验证
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage({ type: "error", text: "请填写必填字段" });
      return;
    }

    // 简单邮箱格式验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage({ type: "error", text: "请输入有效的邮箱地址" });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const result = await submitContactForm(formData);
      setSubmitMessage({ type: "success", text: "消息发送成功！我们会尽快与您联系。" });
      // 重置表单
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error: any) {
      setSubmitMessage({ type: "error", text: error.message || "发送失败，请稍后再试" });
    } finally {
      setIsSubmitting(false);
    }
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
              联系我们
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              如有任何疑问或合作意向，请随时与我们联系
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              data-animate="active"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                联系信息
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex">
                  <div className="flex-shrink-0 text-blue-800 text-2xl mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">公司地址</h3>
                    <p className="text-gray-600">北京市朝阳区某某街道123号</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 text-blue-800 text-2xl mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">联系电话</h3>
                    <p className="text-gray-600">010-12345678</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 text-blue-800 text-2xl mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">电子邮箱</h3>
                    <p className="text-gray-600">info@example.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 text-blue-800 text-2xl mr-4">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">工作时间</h3>
                    <p className="text-gray-600">周一至周五 9:00-18:00</p>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                data-animate="active"
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full aspect-video flex items-center justify-center text-gray-500">
                  公司位置地图
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              data-animate="active"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                发送消息
              </h2>
              
              {submitMessage && (
                <div className={`mb-6 p-4 rounded-md ${submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitMessage.text}
                </div>
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="请输入您的姓名"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    邮箱 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="请输入您的邮箱"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    电话
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="请输入您的电话"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    消息内容 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="请输入您的消息内容"
                    required
                  ></textarea>
                </div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-md transition duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-800 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {isSubmitting ? '发送中...' : '发送消息'}
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}