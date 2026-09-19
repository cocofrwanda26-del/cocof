"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ChevronRight, FileText, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "../../lib/airtable";

interface ArticleClientProps {
  article: Article | null;
}

export default function ArticleClient({ article }: ArticleClientProps) {
  if (!article) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-24 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">Article Not Found</h1>
        <Link href="/news" className="text-[#1B4B8F] hover:underline font-medium">
          Return to News
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 md:pt-32 pb-16 md:pb-24">
      <article className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm md:text-base font-medium text-[#1B4B8F] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight size={14} />
            <Link href="/news" className="hover:underline">News & Updates</Link>
            <ChevronRight size={14} />
            <span className="text-[#5A5A5A] truncate">{article.title}</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-[#F3F7FC] text-[#1B4B8F] text-xs font-bold rounded-full uppercase tracking-wider mb-4 border border-[#1B4B8F]/20">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight" style={{ fontFamily: "var(--font-fraunces)" }}>
              {article.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm md:text-base text-[#5A5A5A] pb-8 border-b border-black/10">
              <div className="flex items-center gap-1.5">
                <Calendar size={18} />
                <span>{article.date}</span>
              </div>
              {article.type === 'announcement' && (
                <div className="flex items-center gap-1.5 border-l border-black/10 pl-4">
                  <Clock size={18} />
                  <span>{article.readTime}</span>
                </div>
              )}
            </div>
          </div>

          {/* Featured Image - Hidden for publications based on user request */}
          {article.type !== 'publication' && (
            <div className="relative w-full h-[300px] md:h-[500px] rounded-[16px] overflow-hidden mb-12 shadow-md">
              <Image 
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className={`mb-12 ${
            article.type === 'publication' 
              ? 'relative bg-white p-8 md:p-14 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(27,75,143,0.06)] overflow-hidden' 
              : 'prose prose-lg max-w-none text-[#4A5568]'
          }`}>
            {article.type === 'publication' && (
              <>
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none transform rotate-12 scale-150 -translate-y-10 translate-x-10">
                  <FileText size={300} />
                </div>
                <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-[#1B4B8F] to-[#4299E1]"></div>
              </>
            )}
            
            <div className={article.type === 'publication' ? 'relative z-10 prose prose-lg max-w-none text-[#4A5568]' : ''}>
              {article.content.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className={`mb-6 leading-relaxed ${
                    article.type === 'publication' && index === 0 
                      ? 'text-xl md:text-2xl text-[#1A1A1A] font-medium leading-relaxed drop-cap' 
                      : ''
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {article.documentUrl && (
            <div className="mb-12 flex justify-center">
              <a 
                href={article.documentUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                download
                className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1B4B8F] text-white text-lg font-bold rounded-full transition-all duration-300 hover:bg-[#153a70] hover:shadow-[0_12px_24px_rgba(27,75,143,0.3)] hover:-translate-y-1"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-72 group-hover:h-72 opacity-10"></span>
                <Download size={24} className="group-hover:animate-bounce relative z-10" />
                <span className="relative z-10 tracking-wide">Download Full Document</span>
              </a>
            </div>
          )}

          {/* Footer Navigation */}
          <div className="mt-16 pt-8 border-t border-black/10">
            <Link 
              href="/news"
              className="inline-flex items-center gap-2 text-[#1B4B8F] font-bold hover:gap-3 transition-all"
            >
              <ArrowLeft size={18} /> Back to News & Updates
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
