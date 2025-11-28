import Link from "next/link";
import { FaWeixin, FaWeibo } from "react-icons/fa";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const footerLinks = [
  {
    title: "产品服务",
    links: [
      { name: "产品中心", href: "#" },
      { name: "解决方案", href: "#" },
      { name: "技术服务", href: "#" },
    ],
  },
  {
    title: "关于我们",
    links: [
      { name: "公司简介", href: "#" },
      { name: "企业文化", href: "#" },
      { name: "资质荣誉", href: "#" },
    ],
  },
  {
    title: "新闻资讯",
    links: [
      { name: "公司新闻", href: "#" },
      { name: "行业动态", href: "#" },
      { name: "媒体报道", href: "#" },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();

  // 页面切换时的刷新机制
  useEffect(() => {
    // 当路由改变时重置页面状态
  }, [pathname]);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            className="col-span-1 md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            data-animate="active"
          >
            <h3 className="text-2xl font-bold mb-4">企业名称</h3>
            <p className="text-gray-400 mb-4">
              专注行业多年，致力于为客户提供优质的产品和服务。
            </p>
            <div className="flex space-x-4">
              <motion.div whileHover={{ y: -5 }}>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">微信</span>
                  <FaWeixin className="h-6 w-6" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -5 }}>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">微博</span>
                  <FaWeibo className="h-6 w-6" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {footerLinks.map((column, columnIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
              viewport={{ once: true }}
              data-animate="active"
            >
              <h4 className="text-lg font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.name}
                    whileHover={{ x: 5 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            data-animate="active"
          >
            <h4 className="text-lg font-semibold mb-4">联系方式</h4>
            <ul className="space-y-2 text-gray-400">
              <li>电话: 010-12345678</li>
              <li>邮箱: info@example.com</li>
              <li>地址: 北京市朝阳区某某街道123号</li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          data-animate="active"
        >
          <p>&copy; {new Date().getFullYear()} 企业名称. 保留所有权利.</p>
        </motion.div>
      </div>
    </footer>
  );
}