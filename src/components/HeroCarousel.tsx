"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "欢迎访问企业名称",
    description: "我们专注于为传统行业提供创新的解决方案，助力企业数字化转型，提升业务效率与竞争力。",
    image: "/banner1.jpg"
  },
  {
    id: 2,
    title: "专业服务团队",
    description: "拥有经验丰富的专家团队，深入了解各行业发展特点和需求，为您提供定制化解决方案。",
    image: "/banner2.jpg"
  },
  {
    id: 3,
    title: "创新驱动发展",
    description: "紧跟技术发展趋势，不断研发创新产品和服务，帮助企业在市场竞争中保持领先地位。",
    image: "/banner3.jpg"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // 自动播放
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 每5秒切换一次

    return () => clearInterval(interval);
  }, []);

  // 切换幻灯片的动画变体
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="absolute inset-0"
            >
              {/* 背景图片 */}
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* 遮罩层 */}
                <div className="absolute inset-0 bg-black/40"></div>
                
                {/* 内容区域 */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-2xl text-white">
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                      >
                        {slide.title.split("企业名称")[0]}
                        <span className="text-blue-400">
                          {slide.title.includes("企业名称") ? "企业名称" : ""}
                        </span>
                        {slide.title.includes("企业名称") 
                          ? slide.title.split("企业名称")[1] 
                          : ""}
                      </motion.h1>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl mb-8 text-gray-200"
                      >
                        {slide.description}
                      </motion.p>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                      >
                        <Link 
                          href="/services" 
                          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded transition duration-300 text-center"
                        >
                          了解我们的服务
                        </Link>
                        <Link 
                          href="/contact" 
                          className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded transition duration-300 text-center"
                        >
                          联系我们
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* 左右切换按钮 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 shadow-md transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 shadow-md transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 底部指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}