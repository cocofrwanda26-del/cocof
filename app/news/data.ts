export const announcements = [
  {
    id: "ann-1",
    title: "COCOF is Hiring!",
    date: "September 18, 2026",
    category: "Careers",
    excerpt: "We are currently looking for passionate individuals to join our team. If you are dedicated to making a positive impact in rural communities and driving sustainable change, we want to hear from you!",
    readTime: "2 min read",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
    content: "We are currently looking for passionate individuals to join our team. If you are dedicated to making a positive impact in rural communities and driving sustainable change, we want to hear from you!\n\nAt COCOF, we believe in empowering our employees to make a real difference. Open positions currently include:\n\n- Project Manager (Agriculture Initiatives)\n- Community Outreach Coordinator\n- Communications Specialist\n\nTo apply, please send your resume and a cover letter detailing your experience and passion for our mission."
  }
];

export const blogs = [
  {
    id: "blog-1",
    title: "Meet with COCOF",
    date: "September 15, 2026",
    category: "Community Impact",
    excerpt: "Join us for an exclusive meet and greet with the COCOF team. Discover our latest projects and learn how you can get involved in our upcoming initiatives.",
    readTime: "3 min read",
    imageUrl: "/wemen.webp",
    content: "Join us for an exclusive meet and greet with the COCOF team. Discover our latest projects and learn how you can get involved in our upcoming initiatives.\n\nDuring this event, you'll have the opportunity to speak directly with our program directors, hear success stories from the communities we serve, and network with other passionate supporters.\n\nWe look forward to seeing you there and building a stronger community together!"
  },
  {
    id: "blog-2",
    title: "Sustainable Water Practices for the Dry Season",
    date: "September 02, 2026",
    category: "Sustainability",
    excerpt: "As the dry season approaches, implementing efficient water management techniques becomes crucial for community resilience and food security.",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    content: "As the dry season approaches, implementing efficient water management techniques becomes crucial for community resilience and food security. Our latest workshops have focused on rainwater harvesting, drip irrigation, and soil moisture conservation techniques that significantly reduce water waste while maintaining crop yields."
  },
  {
    id: "blog-3",
    title: "Youth Leadership Summit 2026 Highlights",
    date: "August 28, 2026",
    category: "Events",
    excerpt: "A recap of our annual Youth Leadership Summit, where young minds gathered to discuss actionable solutions for climate change.",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop",
    content: "A recap of our annual Youth Leadership Summit, where young minds gathered to discuss actionable solutions for climate change. Over 200 participants from various regions came together for three days of intensive workshops, inspiring keynote speeches, and collaborative project planning sessions."
  }
];

export function getArticleById(id: string) {
  const ann = announcements.find((a) => a.id === id);
  if (ann) return { ...ann, type: 'announcement' };
  
  const blog = blogs.find((b) => b.id === id);
  if (blog) return { ...blog, type: 'blog' };
  
  return null;
}
