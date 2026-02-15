"use client"

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  ShieldCheck, 
  Globe, 
  ShoppingCart, 
  ChevronLeft, 
  CheckCircle2,
  ExternalLink 
} from 'lucide-react'
import Link from 'next/link'

const MARKET_ITEMS = [
  {
    id: 1,
    title: "modern real estate listing portal",
    category: "property & real estate",
    price: "$950",
    image: "/realstate.png",
    // Waxaan ku daray thumbnails (sawirro yaryar)
    thumbnails: ["/realstate.png", "/realstate1.png"],
    description: "a premium property listing platform with advanced map search, property filters, and agent management system. this website is built with next.js 14 and integrated with a high-performance backend.",
    features: ["advanced search", "map integration", "admin dashboard", "seo optimized"]
  },
  {
    id: 2,
    title: "e-commerce fashion store",
    category: "e-commerce",
    price: "$1,200",
    image: "/e-commerce.png",
    thumbnails: ["/e-commerce.png", "/e-commerce1.png"],
    description: "complete clothing brand website with payment integration and cms. perfectly designed for modern fashion retailers looking to scale their online presence.",
    features: ["stripe payment", "mobile ready", "inventory management", "custom themes"]
  },
  {
    id: 3,
    title: "premium barber shop website",
    category: "service business",
    price: "$850",
    image: "/barber.png",
    thumbnails: ["/barber.png"],
    description: "modern booking system for barbers, including stylist profiles, service menu, and online appointment scheduling. user-friendly and fast.",
    features: ["booking system", "stylist profiles", "sms notifications", "customer reviews"]
  }
];

const ItemDetailPage = () => {
  const params = useParams();
  const id = Number(params.id);
  const item = MARKET_ITEMS.find((item) => item.id === id);

  // State loogu talagalay in sawirka la beddelo marka thumbnail la riixo
  const [mainImage, setMainImage] = useState(item?.image);

  if (!item) {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center space-y-4 font-mono">
        <h2 className="text-2xl font-bold lowercase">item not found</h2>
        <Link href="/dashboard">
            <Button variant="outline" className="rounded-none h-12 lowercase">go back home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-mono">
      {/* Back Button */}
      <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors group lowercase">
        <ChevronLeft className="size-4 group-hover:-translate-x-1 transition-transform" /> back to marketplace
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT SIDE: Image Section */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-video rounded-none overflow-hidden border bg-muted shadow-none border-foreground/10">
            <img 
              src={mainImage || item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700"
            />
          </div>

          {/* Thumbnails Grid - CUSUB */}
          <div className="grid grid-cols-4 gap-4">
            {item.thumbnails?.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setMainImage(img)}
                className={`aspect-square border overflow-hidden rounded-none transition-all ${mainImage === img ? 'border-primary border-2' : 'border-foreground/10 opacity-70 hover:opacity-100'}`}
              >
                <img src={img} alt="preview" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
             <div className="p-4 rounded-none bg-muted/30 border border-foreground/10 flex items-center gap-3">
                <Globe className="size-4 text-primary" />
                <span className="text-[10px] md:text-xs font-bold lowercase">verified domain</span>
             </div>
             <div className="p-4 rounded-none bg-muted/30 border border-foreground/10 flex items-center gap-3">
                <ShieldCheck className="size-4 text-primary" />
                <span className="text-[10px] md:text-xs font-bold lowercase">safe transfer</span>
             </div>
          </div>
        </div>

        {/* RIGHT SIDE: Details Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="px-4 py-1 rounded-none lowercase text-[10px] tracking-tight border-foreground/10">
                {item.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight lowercase">
              {item.title}
            </h1>
            <div className="text-4xl font-bold text-primary tracking-tighter">
                {item.price}
            </div>
          </div>

          <Separator className="bg-foreground/10" />

          <div className="space-y-4">
            <h3 className="font-bold text-sm tracking-widest text-muted-foreground lowercase">product description</h3>
            <p className="text-lg text-foreground/80 leading-relaxed lowercase">
              {item.description}
            </p>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
            {item.features?.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-sm font-medium lowercase">
                <CheckCircle2 className="size-4 text-primary" />
                {feature}
              </div>
            ))}
          </div>

          <Separator className="bg-foreground/10" />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
                 
                className="flex-1  text-md gap-3 shadow-none lowercase bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <ShoppingCart className="size-4" /> buy this asset
            </Button>
            
            <Button 
                
                variant="outline" 
                className="flex-1  text-md gap-3 border-2 border-foreground/10 hover:bg-muted lowercase"
            >
              <ExternalLink className="size-4" /> live preview
            </Button>
          </div>
          
          <p className="text-[10px] text-center text-muted-foreground tracking-[0.1em] lowercase">
            payments are secured and held in escrow until transfer is complete.
          </p>
        </div>

      </div>
    </div>
  )
}

export default ItemDetailPage