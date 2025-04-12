import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Footer from '../components/landing/Footer';
import { format } from 'date-fns';

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Your Energy Usage at Home",
    excerpt: "Discover how to track and optimize your home energy consumption with these simple tips.",
    image: "/images/content/kwattz-brain.jpg",
    date: new Date(2025, 0, 15),
    category: "Tips & Tricks",
    slug: "understanding-energy-usage"
  },
  {
    id: 2,
    title: "The Future of Smart Energy Management",
    excerpt: "Learn how AI is revolutionizing the way we manage and conserve energy in our homes.",
    image: "/images/content/the-wall.jpeg",
    date: new Date(2025, 1, 3),
    category: "Technology",
    slug: "smart-energy-management"
  },
  {
    id: 3,
    title: "Reducing Your Carbon Footprint",
    excerpt: "Simple ways to reduce your energy consumption and help the environment.",
    image: "/placeholder.svg",
    date: new Date(2025, 1, 20),
    category: "Sustainability",
    slug: "reducing-carbon-footprint"
  },
  {
    id: 4,
    title: "Smart Home Devices for Energy Savings",
    excerpt: "The best smart home devices to help you save energy and money.",
    image: "/placeholder.svg",
    date: new Date(2025, 2, 5),
    category: "Products",
    slug: "smart-home-devices"
  },
  {
    id: 5,
    title: "Understanding Energy Bills",
    excerpt: "A comprehensive guide to reading and understanding your energy bills.",
    image: "/placeholder.svg",
    date: new Date(2025, 2, 18),
    category: "Education",
    slug: "understanding-energy-bills"
  },
  {
    id: 6,
    title: "Renewable Energy for Homeowners",
    excerpt: "How to integrate renewable energy sources in your home.",
    image: "/images/content/IMG_5166 Small.jpeg",
    date: new Date(2025, 3, 2),
    category: "Sustainability",
    slug: "renewable-energy-homeowners"
  },
  {
    id: 7,
    title: "Energy Saving Tips for Summer",
    excerpt: "Keep your home cool without breaking the bank with these energy-saving tips.",
    image: "/images/content/IMG_5164 Small.jpeg",
    date: new Date(2025, 3, 15),
    category: "Seasonal",
    slug: "summer-energy-tips"
  },
  {
    id: 8,
    title: "The Impact of AI on Energy Conservation",
    excerpt: "How artificial intelligence is helping homeowners conserve energy and save money.",
    image: "/placeholder.svg",
    date: new Date(2025, 4, 1),
    category: "Technology",
    slug: "ai-energy-conservation"
  },
  {
    id: 9,
    title: "kWattz Success Stories",
    excerpt: "Real-life stories of how kWattz has helped homeowners save energy and money.",
    image: "/placeholder.svg",
    date: new Date(2025, 4, 20),
    category: "Case Studies",
    slug: "kwattz-success-stories"
  }
];

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => {
  return (
    <div className="bg-[#C3FF44]/10 backdrop-blur-sm rounded-xl border border-[#C3FF44]/30 overflow-hidden transition-all duration-300 hover:border-[#C3FF44]/50 hover:translate-y-[-5px] card-glow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-[#C3FF44] text-[#111F54] text-xs font-bold px-3 py-1 rounded-bl-lg">
          {post.category}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center text-[#C3FF44]/80 text-sm mb-2">
          <Calendar className="mr-1 h-4 w-4" />
          {format(post.date, 'MMMM d, yyyy')}
        </div>
        <h3 className="text-lg font-bold mb-2 text-[#C3FF44] text-glow">{post.title}</h3>
        <p className="text-white/80 text-sm mb-4">{post.excerpt}</p>
        <Button 
          variant="outline" 
          className="text-[#111F54] bg-[#1EAEDB] hover:bg-[#1EAEDB]/90 border-[#1EAEDB] text-white"
          asChild
        >
          <Link to={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#111F54] text-white">
      <header className="container mx-auto px-4 py-8">
        <div className="flex justify-end items-center">
        </div>
      </header>

      <div className="container mx-auto px-4 mb-6">
        <Button 
          className="bg-[#111F54] text-[#C3FF44] hover:bg-[#1EAEDB]/10"
          variant="outline"
          asChild
        >
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>

      <main className="container mx-auto px-4 py-6">
        <section className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-glow" style={{ color: '#C3FF44' }}>
            Latest Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
