"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { announcements, blogs } from "./data";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-sm md:text-base font-medium text-[#1B4B8F] mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#5A5A5A]">News & Updates</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-4 md:mb-6" style={{ fontFamily: "var(--font-fraunces)" }}>
            News & Updates
          </h1>
          <p className="text-base md:text-xl text-[#4A5568] max-w-2xl">
            Stay informed with the latest announcements, impact stories, and community updates from COCOF.
          </p>
        </motion.div>
      </section>

      {/* Announcements (Top) */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]" style={{ fontFamily: "var(--font-fraunces)" }}>
              Latest Announcement
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {announcements.map((ann) => (
              <div 
                key={ann.id} 
                className="group relative flex flex-col md:flex-row bg-white rounded-[16px] overflow-hidden border border-black/5 shadow-[0_1px_3px_0_rgba(26,26,26,0.05),_0_1px_2px_0_rgba(26,26,26,0.03)] hover:shadow-[0_4px_12px_0_rgba(26,26,26,0.08)] transition-all duration-300"
              >
                <div className="md:w-1/2 relative min-h-[250px] sm:min-h-[300px] md:min-h-[400px]">
                  <Image 
                    src={ann.imageUrl} 
                    alt={ann.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6">
                    <span className="px-3 py-1 bg-[#1B4B8F] text-white text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider shadow-md">
                      {ann.category}
                    </span>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-[#F3F7FC]/40">
                  <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-[#5A5A5A] mb-3 md:mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={16} />
                      <span>{ann.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={16} />
                      <span>{ann.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3 md:mb-4 group-hover:text-[#1B4B8F] transition-colors" style={{ fontFamily: "var(--font-fraunces)" }}>
                    {ann.title}
                  </h3>
                  
                  <p className="text-[#4A5568] text-sm md:text-lg mb-6 md:mb-8 leading-relaxed line-clamp-4 md:line-clamp-none">
                    {ann.excerpt}
                  </p>
                  
                  <Link 
                    href={`/news/${ann.id}`}
                    className="inline-flex items-center gap-2 text-[#1B4B8F] font-bold hover:gap-3 transition-all"
                  >
                    Read Full Announcement <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Blogs (Below) */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]" style={{ fontFamily: "var(--font-fraunces)" }}>
              Recent Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group flex flex-col bg-white rounded-[16px] overflow-hidden border border-black/5 shadow-[0_1px_3px_0_rgba(26,26,26,0.05),_0_1px_2px_0_rgba(26,26,26,0.03)] hover:shadow-[0_4px_12px_0_rgba(26,26,26,0.08)] transition-all duration-300"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-white/95 text-[#1B4B8F] text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider shadow-sm backdrop-blur-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-1.5 text-[11px] md:text-xs text-[#5A5A5A] mb-3">
                    <Calendar size={14} />
                    <span>{blog.date}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2 md:mb-3 group-hover:text-[#1B4B8F] transition-colors line-clamp-2" style={{ fontFamily: "var(--font-fraunces)" }}>
                    {blog.title}
                  </h3>

                  <p className="text-[#4A5568] text-sm mb-5 md:mb-6 flex-grow line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <Link 
                    href={`/news/${blog.id}`}
                    className="inline-flex items-center gap-1.5 text-sm text-[#1B4B8F] font-bold hover:gap-2 transition-all mt-auto"
                  >
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
