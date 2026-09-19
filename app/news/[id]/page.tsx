"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getArticleById } from "../data";

export default function ArticlePage() {
  const params = useParams();
  const id = params.id as string;
  const article = getArticleById(id);

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

          {/* Featured Image */}
          <div className="relative w-full h-[300px] md:h-[500px] rounded-[16px] overflow-hidden mb-12 shadow-md">
            <Image 
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-[#4A5568]">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

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
