"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, ChevronRight, Download, FileText, Megaphone, Newspaper } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "../lib/airtable";

interface NewsClientProps {
  announcements: Article[];
  blogs: Article[];
  publications: Article[];
}

export default function NewsClient({ announcements, blogs, publications }: NewsClientProps) {
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
            {announcements.length === 0 && (
              <p className="text-[#5A5A5A]">No announcements at this time.</p>
            )}
            {announcements.map((ann) => (
              <div 
                key={ann.id} 
                className="group relative flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border-2 border-transparent hover:border-[#1B4B8F]/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500"
              >
                {/* Subtle animated background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B4B8F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="md:w-1/2 relative min-h-[300px] md:min-h-[450px]">
                  <Image 
                    src={ann.imageUrl} 
                    alt={ann.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                    <span className="flex items-center gap-1.5 px-4 py-2 bg-[#1B4B8F] text-white text-[10px] md:text-xs font-bold rounded-full uppercase tracking-widest shadow-lg shadow-[#1B4B8F]/30 backdrop-blur-md">
                      <Megaphone size={14} className="animate-pulse" />
                      {ann.category}
                    </span>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative z-10">
                  <div className="flex items-center gap-4 text-xs font-semibold text-[#5A5A5A] mb-6 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-[#1B4B8F]" />
                      <span>{ann.date}</span>
                    </div>
                    <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
                      <Clock size={16} className="text-[#1B4B8F]" />
                      <span>{ann.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 group-hover:text-[#1B4B8F] transition-colors leading-tight" style={{ fontFamily: "var(--font-fraunces)" }}>
                    {ann.title}
                  </h3>
                  
                  <p className="text-[#4A5568] text-base md:text-lg mb-10 leading-relaxed line-clamp-4">
                    {ann.excerpt}
                  </p>
                  
                  <Link 
                    href={`/news/${ann.id}`}
                    className="group/link inline-flex items-center gap-3 text-white bg-[#1A1A1A] hover:bg-[#1B4B8F] px-8 py-4 rounded-full font-bold transition-all duration-300 w-max shadow-md hover:shadow-xl hover:-translate-y-1"
                  >
                    Read Full Story <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
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
            {blogs.length === 0 && (
              <p className="text-[#5A5A5A] col-span-full">No articles at this time.</p>
            )}
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(27,75,143,0.12)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/95 text-[#1A1A1A] text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider shadow-sm backdrop-blur-md transition-colors group-hover:bg-[#1B4B8F] group-hover:text-white">
                      <Newspaper size={12} />
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#5A5A5A] mb-4 uppercase tracking-wider">
                    <Calendar size={14} className="text-gray-400" />
                    <span>{blog.date}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#1B4B8F] transition-colors line-clamp-2 leading-tight" style={{ fontFamily: "var(--font-fraunces)" }}>
                    {blog.title}
                  </h3>

                  <p className="text-[#4A5568] text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link 
                      href={`/news/${blog.id}`}
                      className="inline-flex items-center gap-2 text-sm text-[#1A1A1A] font-bold group-hover:text-[#1B4B8F] transition-colors"
                    >
                      Read Article 
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#1B4B8F]/10 transition-colors">
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Publications (Below) */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mt-16 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]" style={{ fontFamily: "var(--font-fraunces)" }}>
              Recent Publications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.length === 0 && (
              <p className="text-[#5A5A5A] col-span-full">No publications at this time.</p>
            )}
            {publications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Decorative top gradient */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#1B4B8F] to-[#4299E1] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white">
                  {/* Watermark Icon */}
                  <div className="absolute right-0 top-0 p-6 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 duration-500">
                    <FileText size={120} />
                  </div>

                  <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-[#1B4B8F] mb-4 uppercase tracking-wider">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1B4B8F]/10">
                      <FileText size={12} />
                    </span>
                    Publication
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#1B4B8F] transition-colors leading-tight line-clamp-2" style={{ fontFamily: "var(--font-fraunces)" }}>
                    {pub.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-[#5A5A5A] mb-4 font-medium">
                    <Calendar size={14} className="text-[#1B4B8F]" />
                    <span>Published: {pub.date}</span>
                  </div>

                  <p className="text-[#4A5568] text-sm mb-8 flex-grow line-clamp-3 leading-relaxed">
                    {pub.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100 relative z-10">
                    <Link 
                      href={`/news/${pub.id}`}
                      className="inline-flex items-center gap-1.5 text-sm text-[#5A5A5A] font-medium hover:text-[#1B4B8F] transition-colors"
                    >
                      View details
                    </Link>
                    {pub.documentUrl ? (
                      <a
                        href={pub.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1B4B8F] text-white text-sm font-bold rounded-full transition-all duration-300 hover:bg-[#153a70] hover:shadow-[0_8px_16px_rgba(27,75,143,0.2)] hover:-translate-y-0.5"
                      >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover/btn:w-56 group-hover/btn:h-56 opacity-10"></span>
                        <Download size={16} className="group-hover/btn:animate-bounce relative z-10" />
                        <span className="relative z-10">Download</span>
                      </a>
                    ) : (
                      <Link 
                        href={`/news/${pub.id}`}
                        className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#F3F7FC] text-[#1B4B8F] text-sm font-bold rounded-full transition-all duration-300 hover:bg-[#1B4B8F] hover:text-white"
                      >
                        Read Online <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
