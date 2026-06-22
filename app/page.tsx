'use client';

// DESIGN DECISIONS:
// Layout Energy: editorial
// Depth Treatment: textured
// Divider Style: D-QUOTE
// Typography Personality: editorial

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  Truck, 
  Layers, 
  ShieldCheck, 
  Users, 
  Home as HomeIcon, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCheck, 
  Loader2, 
  Menu, 
  X, 
  ImageOff,
  ChevronRight,
  Instagram
} from 'lucide-react';

// SafeImage wrapper to prevent broken layouts from dead URLs
function SafeImage({ src, alt, fill, width, height, className, priority, fallbackClassName }: {
  src: string; alt: string; fill?: boolean; width?: number; height?: number;
  className?: string; priority?: boolean; fallbackClassName?: string;
}) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-[#2B1D15] to-[#783A1E]/30 ${fallbackClassName ?? className ?? ''}`}>
        <ImageOff size={28} className="text-white/20" />
      </div>
    );
  }
  return (
    <Image 
      src={src} 
      alt={alt} 
      fill={fill}
      width={!fill ? (width ?? 800) : undefined}
      height={!fill ? (height ?? 600) : undefined}
      className={className} 
      priority={priority}
      onError={() => setError(true)} 
    />
  );
}

// Custom hook for beautiful intersection-based scroll animations
const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
};

export default function Home() {
  const brand = {
    name: "Kezie Wholesale Furniture",
    tagline: "Complete Space Solutions",
    description: "Lagos' premier wholesale distributor of ultra-premium home, restaurant, and corporate office furniture, offering end-to-end interior finishing and structural styling.",
    industry: "services",
    region: "nigeria"
  };

  const contact = {
    whatsapp: "+2348104988143",
    instagram: "kezie_wholesales_furnitures",
    email: "",
    address: "5 and 6, along 142 olojo drive, alaba international market, Lagos, Nigeria"
  };

  const products = [
    {
      name: "The Executive Boardroom Suite",
      description: "Handcrafted minimalist mahogany conference table paired with premium ergonomic leather chairs.",
      price: "₦1,850,000",
      image_url: "https://images.unsplash.com/photo-1699621106755-4fe40ce95d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBleGVjdXRpdmUlMjBvZmZpY2UlMjBtYWhvZ2FueSUyMGRlc2slMjBsZWF0aGVyJTIwY2hhaXJfZW58MXwwfHx8MTc4MjE0MDk2MXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Chic Nordic Restaurant Set",
      description: "Ultra-durable, weather-resistant four-seater oak dining configurations designed for premium restaurants.",
      price: "₦450,000",
      image_url: "https://images.unsplash.com/photo-1706380469091-3bd9b7865b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29vZGVuJTIwcmVzdGF1cmFudCUyMGRpbmluZyUyMHRhYmxlJTIwY2hhaXJzJTIwc2V0dXBfZW58MXwwfHx8MTc4MjE0MDk2MXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Opulent Velvet Sectional",
      description: "Spacious deep-cushioned modular velvet living lounge set with custom gold accents.",
      price: "₦2,400,000",
      image_url: "https://images.unsplash.com/photo-1758448755778-90ebf4d0f1e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2ZWx2ZXQlMjBzZWN0aW9uYWwlMjBzb2ZhJTIwbGl2aW5nJTIwcm9vbSUyMG1vZGVybiUyMGRlc2lnbnxlbnwxfDB8fHwxNzgyMTQwOTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Bespoke 8-Seater Hardwood Dining",
      description: "Magnificent solid wood dining layout built to masterfully finish premium residential spaces.",
      price: "₦1,200,000",
      image_url: "https://images.unsplash.com/photo-1589863089941-51eddece5107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGFuZGNyYWZ0ZWQlMjBkaW5pbmclMjB0YWJsZSUyMHNldCUyMGhhcmR3b29kJTIwY2hhaXJzfGVufDF8MHx8fDE3ODIxNDA5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1582095127899-1dfb05e4e32d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1682617874028-dd26650f724e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1706074801692-65d1a1489068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1609347216387-ed87a2d18ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1624870701221-e61f079aad5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1656345129661-53a0177189ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  ];

  // Scroll header state
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form handling
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  // Sections scroll hook references
  const heroReveal = useScrollReveal(0.05);
  const featuresReveal = useScrollReveal(0.15);
  const productsReveal = useScrollReveal(0.1);
  const galleryReveal = useScrollReveal(0.1);
  const aboutReveal = useScrollReveal(0.15);
  const testimonialReveal = useScrollReveal(0.15);
  const contactReveal = useScrollReveal(0.15);

  return (
    <div className="relative min-h-screen bg-[#2B1D15] text-white">
      {/* Texture Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] z-50" />

      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
        scrolled ? 'bg-[#2B1D15]/95 backdrop-blur-xl py-4 border-white/10 shadow-2xl' : 'bg-transparent py-6 border-white/0'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Mark: L1 style */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#D4A373] flex items-center justify-center font-heading text-xl font-bold text-[#2B1D15] group-hover:rotate-6 transition-all duration-300">
              K
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-black tracking-wide text-white group-hover:text-[#D4A373] transition-colors">
                KEZIE
              </span>
              <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#D4A373]/80">
                WHOLESALE
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase font-semibold">
            <a href="#home" className="text-white hover:text-[#D4A373] transition-colors">Home</a>
            <a href="#features" className="text-white hover:text-[#D4A373] transition-colors">Value</a>
            <a href="#products" className="text-white hover:text-[#D4A373] transition-colors">Collections</a>
            <a href="#gallery" className="text-white hover:text-[#D4A373] transition-colors">Showcase</a>
            <a href="#about" className="text-white hover:text-[#D4A373] transition-colors">About Us</a>
            <a href="#contact" className="text-white hover:text-[#D4A373] transition-colors">Contact</a>
          </nav>

          {/* Desktop Nav CTA */}
          <div className="hidden md:flex items-center">
            <a href="#products" className="bg-[#D4A373] text-[#2B1D15] font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-full hover:brightness-110 transition duration-300">
              View Catalog
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-white hover:text-[#D4A373] transition"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`absolute right-0 top-0 h-full w-[75%] max-w-sm bg-[#2B1D15] p-8 flex flex-col justify-between border-l border-white/10 transition-transform duration-500 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div>
            <div className="flex justify-between items-center mb-12">
              <span className="font-heading text-2xl font-black tracking-wide">KEZIE</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/70 hover:text-white transition"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 text-sm tracking-widest uppercase font-semibold">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4A373] transition">Home</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4A373] transition">Value</a>
              <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4A373] transition">Collections</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4A373] transition">Showcase</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4A373] transition">About Us</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-[#D4A373] transition">Contact Showroom</a>
            </nav>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-xs text-white/40 mb-4 font-mono">CONNECT DIRECTLY</p>
            <a href={`https://wa.me/${contact.whatsapp}`} className="flex items-center gap-3 text-white/70 hover:text-white transition">
              <Phone size={16} />
              <span className="text-sm">{contact.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>

      {/* HERO SECTION - HR-A Pattern */}
      <section id="home" ref={heroReveal.ref} className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#2B1D15] via-[#2B1D15]/95 to-[#783A1E]/30 px-6 overflow-hidden pt-28">
        <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-[#783A1E]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-[#D4A373]/5 rounded-full blur-[80px] pointer-events-none" />
        
        {/* Floating Masked Hero Image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 max-w-4xl max-h-[60vh] rounded-[4rem] overflow-hidden rotate-3 pointer-events-none">
          <SafeImage 
            src="https://images.unsplash.com/photo-1757924461488-ef9ad0670978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
            alt={brand.name} 
            fill 
            className="object-cover" 
          />
        </div>

        <div className={`relative z-10 text-center max-w-5xl transition-all duration-1000 ${
          heroReveal.isVisible ? 'opacity-100 translate-y-0 animate-fadeIn' : 'opacity-0 translate-y-12'
        }`}>
          <h1 className="font-heading text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tight">
            Complete Space Solutions. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4A373] to-white">
              Masterfully Finished.
            </span>
          </h1>
          <p className="text-white/50 mt-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Direct wholesale distribution of luxury home, executive office, and commercial restaurant furniture from Alaba International to all of Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a href="#products" className="bg-[#D4A373] text-[#2B1D15] px-10 py-4 font-bold text-base hover:brightness-110 hover:scale-105 transition-all duration-300 rounded-full">
              Explore Showroom Catalog
            </a>
            <a href="#contact" className="border border-white/20 text-white px-10 py-4 font-medium text-base hover:bg-white/10 transition-all duration-300 rounded-full">
              Contact Specialists
            </a>
          </div>
        </div>
      </section>

      {/* DIVIDER: D-QUOTE */}
      <div className="py-24 px-8 text-center bg-[#783A1E]/8 border-y border-[#783A1E]/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-secondary)/5,transparent_70%)]" />
        <p className="relative font-heading text-3xl md:text-5xl font-black text-white max-w-3xl mx-auto leading-tight italic">
          &ldquo;Transforming raw architectural plans into completely furnished, luxury-grade ready-to-use environments.&rdquo;
        </p>
        <p className="relative text-[#D4A373]/40 mt-5 text-xs tracking-[0.5em] uppercase font-mono">
          {brand.name}
        </p>
      </div>

      {/* FEATURES SECTION - F-BENTO (Asymmetric Bento Grid) */}
      <section id="features" ref={featuresReveal.ref} className="py-28 px-6 bg-[#3D291F]/30 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center md:text-left">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white">
              Designed for Scalability
            </h2>
            <p className="text-[#D4A373]/60 mt-3 text-lg">
              Why top realtors and commercial developers choose Kezie for comprehensive projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Featured Bento Block */}
            <div className={`md:col-span-2 bg-[#783A1E]/10 rounded-3xl p-8 md:p-12 border border-[#783A1E]/20 hover:border-[#D4A373]/30 transition-all duration-500 flex flex-col justify-between group min-h-[320px] transition-all duration-700 ${
              featuresReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="w-14 h-14 rounded-2xl bg-[#783A1E]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-[#D4A373]">
                <Truck size={28} />
              </div>
              <div className="mt-8">
                <span className="font-mono text-xs tracking-widest text-[#D4A373] uppercase block mb-2">01 / CAPABILITY</span>
                <h3 className="font-heading text-3xl md:text-4xl font-black text-white">Wholesale Distribution</h3>
                <p className="text-white/50 mt-3 max-w-xl">
                  High-volume supply capabilities for real estate developments, corporate complexes, and hotel chains. Sorted with absolute precision.
                </p>
              </div>
            </div>

            {/* Standard Bento Block 1 */}
            <div className={`bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/8 hover:border-[#D4A373]/20 transition-all duration-300 flex flex-col justify-between min-h-[320px] transition-all duration-700 delay-150 ${
              featuresReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#D4A373]">
                <Layers size={24} />
              </div>
              <div className="mt-8">
                <span className="font-mono text-xs tracking-widest text-[#D4A373]/60 uppercase block mb-2">02 / INTERIORS</span>
                <h3 className="font-heading text-2xl font-bold text-white">Complete Space Finishing</h3>
                <p className="text-white/45 text-sm mt-2">
                  We don’t just deliver furniture—we execute comprehensive, cohesive space layouts and interior installations.
                </p>
              </div>
            </div>

            {/* Standard Bento Block 2 */}
            <div className={`bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/8 hover:border-[#D4A373]/20 transition-all duration-300 flex flex-col justify-between min-h-[320px] md:col-span-3 transition-all duration-700 delay-300 ${
              featuresReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#D4A373]">
                <ShieldCheck size={24} />
              </div>
              <div className="mt-8">
                <span className="font-mono text-xs tracking-widest text-[#D4A373]/60 uppercase block mb-2">03 / PREMIUM METRICS</span>
                <h3 className="font-heading text-2xl font-bold text-white">Artisanal Integrity</h3>
                <p className="text-white/45 text-sm mt-2">
                  Sourced from high-grade timbers and luxury fabrics designed to withstand intensive daily commercial use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION - P-STAGGER (Alternating Editorial Rows) */}
      <section id="products" ref={productsReveal.ref} className="py-28 px-6 bg-[#2B1D15] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white">
              Exquisite Collections
            </h2>
            <p className="text-[#D4A373]/60 text-lg mt-3">
              Handpicked wholesale configurations for ultimate luxury and durability.
            </p>
          </div>

          <div className="space-y-36">
            {products.map((p, i) => (
              <div 
                key={i} 
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20 transition-all duration-1000 ${
                  productsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Product Image Column */}
                <div className="w-full md:w-1/2 relative group">
                  <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                    <SafeImage 
                      src={p.image_url} 
                      alt={p.name} 
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  {/* Glowing dynamic background behind container */}
                  <div className={`absolute -bottom-6 ${i % 2 === 0 ? '-right-6' : '-left-6'} w-1/2 h-1/2 bg-[#783A1E]/10 rounded-3xl -z-10 blur-2xl group-hover:bg-[#783A1E]/20 transition-all`} />
                </div>

                {/* Product Info Column */}
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                  <span className="font-mono text-[#D4A373] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                    0{i + 1} — Premium Wholesale
                  </span>
                  <h3 className="font-heading text-3xl md:text-5xl font-black text-white leading-tight">
                    {p.name}
                  </h3>
                  <p className="text-white/50 mt-5 text-base md:text-lg leading-relaxed">
                    {p.description}
                  </p>
                  
                  <div className={`mt-8 flex flex-col ${i % 2 === 0 ? 'items-start' : 'items-start md:items-end'} gap-4`}>
                    <span className="text-3xl font-black text-white">{p.price}</span>
                    <a href="#contact" className="bg-[#D4A373] text-[#2B1D15] px-8 py-3.5 rounded-full font-black text-sm tracking-wider uppercase hover:brightness-110 hover:scale-105 transition-all">
                      Acquire Configuration
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWROOM GALLERY - Editorial Showcase Masonry style */}
      <section id="gallery" ref={galleryReveal.ref} className="py-28 px-6 bg-[#3D291F]/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A373] font-mono text-xs tracking-[0.4em] uppercase">Showroom Showcase</span>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white mt-3">Our Projects & Showroom</h2>
            <p className="text-white/40 mt-3 max-w-md mx-auto">A glimpse of premium finished residential, commercial, and restaurant spaces across Lagos.</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((src, i) => (
              <div 
                key={i} 
                className={`break-inside-avoid group relative rounded-3xl overflow-hidden border border-white/10 transition-all duration-700 ${
                  galleryReveal.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <SafeImage 
                  src={src} 
                  alt={`Gallery project finish ${i + 1}`} 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="font-heading text-xl text-white font-bold">Premium Layout Finish {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Horizontal Split layout */}
      <section id="about" ref={aboutReveal.ref} className="py-28 px-6 bg-[#2B1D15] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Asymmetric design aspect */}
            <div className={`transition-all duration-1000 ${aboutReveal.isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <span className="font-mono text-xs text-[#D4A373] tracking-[0.4em] uppercase block mb-4">THE TRADE FORCE</span>
              <h2 className="font-heading text-4xl md:text-6xl font-black text-white leading-none">
                Dominating Nigeria’s Luxury Furniture Trade
              </h2>
              <p className="text-white/50 mt-8 text-lg leading-relaxed">
                Based in the commercial heart of Lagos, Kezie Wholesale Furniture has spent over a decade transforming raw architectural plans into completely furnished, ready-to-use environments.
              </p>
              <p className="text-white/40 mt-4 leading-relaxed">
                From hotels in Abuja to high-end offices in Victoria Island, we specialize in bulk sourcing, premium structural customization, and precision delivery. Sharp delivery, nationwide.
              </p>

              {/* Stats Integration */}
              <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                {[
                  { number: "6k+", label: "Collectors" },
                  { number: "1,500+", label: "Projects" },
                  { number: "10+", label: "Years Trade" }
                ].map((s, idx) => (
                  <div key={idx}>
                    <p className="font-heading text-2xl md:text-3xl font-black text-[#D4A373]">{s.number}</p>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Decorative layers */}
            <div className={`relative transition-all duration-1000 delay-300 ${aboutReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <SafeImage 
                  src="https://images.unsplash.com/photo-1582095127899-1dfb05e4e32d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                  alt="Kezie Premium showroom floor" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#783A1E]/30 rounded-3xl -z-10 blur-3xl" />
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - T-MASONRY Column Layout */}
      <section id="testimonials" ref={testimonialReveal.ref} className="py-28 px-6 bg-[#3D291F]/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A373] font-mono text-xs tracking-[0.4em] uppercase">Client Testimonials</span>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white mt-3">Vouched By Architects & Developers</h2>
          </div>

          <div className="columns-1 md:columns-3 gap-6 space-y-6">
            {[
              {
                name: "Chief Emeka Nwachukwu",
                text: "Kezie furnished our entire hospitality suite in Abuja. The finishing is pristine, strong, and highly executive.",
                role: "Real Estate Developer"
              },
              {
                name: "Amara Okafor",
                text: "Absolute best wholesale prices in Alaba. The structural warranty they offer on their dining sets is unmatched.",
                role: "Lead Architect, ArchiStudio"
              },
              {
                name: "Tunde Folawiyo",
                text: "Their complete turn-key space finishing took away all our stress during the office revamp. Exquisite work.",
                role: "Managing Partner, TF Advisory"
              }
            ].map((t, i) => (
              <div 
                key={i} 
                className={`break-inside-avoid bg-gradient-to-br from-white/5 to-white/2 p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-[#D4A373]/25 transition-all duration-500 ${
                  testimonialReveal.isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-sm'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#783A1E]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white/80 text-lg leading-relaxed relative z-10 italic">&ldquo;{t.text}&rdquo;</p>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-5 mt-6 relative z-10">
                  <div>
                    <p className="font-heading font-bold text-white text-base">{t.name}</p>
                    <p className="text-[#D4A373]/50 text-xs mt-0.5">{t.role}</p>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3].map(n => <div key={n} className="w-1.5 h-1.5 rounded-full bg-[#D4A373]/60" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - C3 Minimal Centered */}
      <section id="contact" ref={contactReveal.ref} className="py-28 px-6 bg-[#2B1D15]">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-[#D4A373] font-mono text-xs tracking-[0.4em] uppercase mb-4 block">Visit Our Showroom</span>
          <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-4">Visit Our Alaba Showroom</h2>
          <p className="text-white/40 mb-12 text-base max-w-lg mx-auto">
            Ready to completely finialize your architectural projects? Secure direct Alaba wholesale furniture pricing with Kezie.
          </p>

          {/* Universal Contact Form implementation */}
          <div className={`text-left transition-all duration-1000 ${
            contactReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {sent ? (
              <div className="flex flex-col items-center justify-center p-12 text-center animate-scaleIn bg-[#1F140E] rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#783A1E]/10 to-transparent opacity-50" />
                <div className="w-20 h-20 rounded-full bg-[#D4A373]/20 flex items-center justify-center mb-6 border border-[#D4A373]/40 relative z-10 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <CheckCheck size={32} className="text-[#D4A373]" />
                </div>
                <h3 className="font-heading text-3xl font-black text-white mb-3 relative z-10">Message Sent Successfully</h3>
                <p className="text-white/60 max-w-sm text-base relative z-10">Thank you for contacting Kezie. Our distribution desk will review your requirements and call you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 bg-[#1F140E] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#783A1E]/10 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="relative z-10">
                  <h3 className="font-heading text-2xl font-bold text-white mb-8 text-center md:text-left">Send wholesale project details</h3>
                  <div className="space-y-4">
                    {(['name', 'email', 'phone'] as const).map(field => (
                      <div key={field} className="relative group">
                        <input
                          type={field === 'email' ? 'email' : 'text'}
                          placeholder={field.charAt(0).toUpperCase() + field.slice(1) + (field !== 'phone' ? ' *' : '')}
                          value={form[field]}
                          onChange={e => setForm(prev => ({ ...prev, [field]: e.target.value }))}
                          required={field !== 'phone'}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 text-sm outline-none transition-all duration-300 focus:bg-white/10 focus:border-[#D4A373] focus:ring-1 focus:ring-[#D4A373] group-hover:border-white/20"
                        />
                      </div>
                    ))}
                    <div className="relative group">
                      <textarea 
                        rows={4} 
                        placeholder="Project requirements (e.g. quantity, space size, design concept) *"
                        value={form.message}
                        onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 text-sm outline-none resize-none transition-all duration-300 focus:bg-white/10 focus:border-[#D4A373] focus:ring-1 focus:ring-[#D4A373] group-hover:border-white/20"
                      />
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full mt-8 bg-[#D4A373] text-[#2B1D15] py-4 rounded-xl font-bold text-base hover:brightness-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-3 group"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="animate-spin" size={20} /> Processing...
                      </span>
                    ) : (
                      <>
                        Send Inquiry <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Direct Address & Communication details */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left border-t border-white/10 pt-12">
            <div>
              <p className="font-mono text-xs text-[#D4A373] uppercase tracking-widest mb-3">Lagos Showroom & Warehouse</p>
              <div className="flex gap-3 text-white/60">
                <MapPin size={20} className="shrink-0 text-[#D4A373]" />
                <span className="text-sm leading-relaxed">{contact.address}</span>
              </div>
            </div>
            <div>
              <p className="font-mono text-xs text-[#D4A373] uppercase tracking-widest mb-3">Rapid Business Desk</p>
              <a href={`https://wa.me/${contact.whatsapp}`} className="flex items-center gap-3 text-white/60 hover:text-[#D4A373] transition-colors mb-3 group">
                <Phone size={18} className="group-hover:scale-110 transition-transform text-[#D4A373]" />
                <span className="text-sm">WhatsApp: {contact.whatsapp}</span>
              </a>
              {contact.instagram && (
                <a href={`https://instagram.com/${contact.instagram}`} className="flex items-center gap-3 text-white/60 hover:text-[#D4A373] transition-colors group">
                  <Instagram size={18} className="group-hover:scale-110 transition-transform text-[#D4A373]" />
                  <span className="text-sm">@{contact.instagram}</span>
                </a>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Col 1: Brand pitch */}
          <div className="md:col-span-2">
            <span className="font-heading text-3xl font-black text-white tracking-wide">KEZIE</span>
            <p className="text-white/40 mt-4 text-sm max-w-sm leading-relaxed">
              Lagos&apos; premier wholesale distributor of ultra-premium home, restaurant, and corporate office furniture, offering end-to-end interior finishing.
            </p>
            <p className="text-[#D4A373]/70 font-mono text-xs mt-6 tracking-wider italic">
              Sharp delivery, nationwide.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <p className="font-mono text-xs text-white uppercase tracking-widest mb-6">Navigation</p>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="text-white/50 hover:text-[#D4A373] transition-colors">Home</a></li>
              <li><a href="#features" className="text-white/50 hover:text-[#D4A373] transition-colors">Why Kezie</a></li>
              <li><a href="#products" className="text-white/50 hover:text-[#D4A373] transition-colors">Collections</a></li>
              <li><a href="#gallery" className="text-white/50 hover:text-[#D4A373] transition-colors">Showroom</a></li>
            </ul>
          </div>

          {/* Col 3: Support / Direct Contact */}
          <div>
            <p className="font-mono text-xs text-white uppercase tracking-widest mb-6">Trade Support</p>
            <ul className="space-y-3 text-sm text-white/50">
              <li>Alaba International Market</li>
              <li>Lagos, Nigeria</li>
              <li>Wholesale Logistics Available</li>
              <li>Custom Structural Styling</li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} {brand.name}. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <a href="#home" className="hover:text-white transition">Terms of Trade</a>
            <a href="#home" className="hover:text-white transition">Delivery Guidelines</a>
          </div>
        </div>
      </footer>

    </div>
  );
}