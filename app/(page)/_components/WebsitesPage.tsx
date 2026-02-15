"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Search, 
  ArrowRight, 
  Globe, 
  CheckCircle2 
} from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// Xogta websites-ka
const WEBSITES = [
  {
    id: 1,
    title: "modern real estate listing portal",
    category: "property",
    price: "$950",
    image: "/realstate.png",
    status: "verified"
  },
  {
    id: 2,
    title: "e-commerce fashion store",
    category: "shopping",
    price: "$1,200",
    image: "/e-commerce.png",
    status: "premium"
  },
  {
    id: 3,
    title: "premium barber shop website",
    category: "services",
    price: "$850",
    image: "/barber.png",
    status: "verified"
  }
];

const WebsitesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-mono">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter lowercase leading-none">
            available <br /> assets
          </h1>
          <p className="text-muted-foreground lowercase max-w-sm">
            browse through our verified collection of digital assets ready for transfer.
          </p>
        </div>
        
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input 
            placeholder="search by name or tech..." 
            className="pl-12 rounded-none border-2 border-foreground/10 focus:border-primary focus-visible:ring-0 lowercase h-14 bg-transparent transition-all"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Separator className="mb-8 bg-foreground/10" />

      {/* Categories / Filters - NO ROUNDED */}
      <div className="flex flex-wrap gap-2 mb-12">
        {['all assets', 'e-commerce', 'saas', 'real estate', 'portfolio'].map((cat) => (
          <button 
            key={cat}
            className="text-[11px] font-bold lowercase border-2 border-foreground/10 px-5 py-2 hover:bg-foreground hover:text-background transition-all rounded-none outline-none focus:border-primary"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {WEBSITES.map((item) => (
          <div key={item.id} className="group flex flex-col border-2 border-foreground/10 rounded-none overflow-hidden hover:border-primary transition-colors bg-card">
            
            {/* Image Container - Grayscale to Color */}
            <div className="aspect-video relative overflow-hidden bg-muted border-b-2 border-foreground/10">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0">
                <Badge className="rounded-none bg-primary text-primary-foreground border-none lowercase px-4 py-1 font-bold">
                  {item.status}
                </Badge>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex-1 flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground font-bold tracking-widest lowercase border-b border-muted-foreground/30">{item.category}</span>
                <span className="text-2xl font-black text-primary tracking-tighter">{item.price}</span>
              </div>
              
              <h3 className="text-xl font-bold leading-tight lowercase min-h-[3rem]">
                {item.title}
              </h3>

              <div className="flex items-center gap-4 py-2 border-y border-foreground/5">
                 <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground lowercase">
                    <CheckCircle2 className="size-3 text-primary" /> safe transfer
                 </div>
                 <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground lowercase">
                    <Globe className="size-3 text-primary" /> responsive
                 </div>
              </div>

              <Link href={`/item/${item.id}`} className="block pt-2">
                <Button 
                  className="w-full rounded-none h-14 lowercase font-black text-lg border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all group/btn"
                >
                  view details 
                  <ArrowRight className="size-5 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-24 p-12 border-2 border-dashed border-foreground/10 text-center bg-muted/20">
        <h2 className="text-2xl font-bold lowercase mb-4">can't find what you need?</h2>
        <p className="text-sm text-muted-foreground lowercase mb-6 max-w-md mx-auto">
          we specialize in custom builds tailored to your specific business requirements.
        </p>
        <Link href="/contact">
            <Button variant="outline" className="rounded-none border-2 border-foreground hover:bg-foreground hover:text-background lowercase font-bold px-8 h-12">
                contact us for custom work
            </Button>
        </Link>
      </div>
    </div>
  )
}

export default WebsitesPage