"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  Search, 
  Handshake, 
  ShieldCheck, 
  TrendingUp 
} from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      title: "Discover Assets",
      description: "Browse through our curated marketplace of verified websites and digital projects.",
      icon: <Search className="size-6 text-primary" />,
      badge: "Step 01"
    },
    {
      title: "Secure Negotiation",
      description: "Chat directly with sellers and negotiate terms through our encrypted platform.",
      icon: <Handshake className="size-6 text-primary" />,
      badge: "Step 02"
    },
    {
      title: "Safe Transfer",
      description: "Our escrow service ensures funds are only released when you have full control.",
      icon: <ShieldCheck className="size-6 text-primary" />,
      badge: "Step 03"
    },
    {
      title: "Scale & Flip",
      description: "Grow your new asset and relist it later for a higher profit on WebFlip.",
      icon: <TrendingUp className="size-6 text-primary" />,
      badge: "Step 04"
    }
  ]

  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-background overflow-hidden">
      {/* 1. Header Section */}
      <div className="max-w-3xl flex flex-col items-start gap-6 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <Badge variant="outline" className="px-4 py-1 border-primary/20 bg-primary/5 text-primary font-mono">
          Process
        </Badge>
        
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground font-mono leading-tight">
          How <span className="text-primary ">WebFlip</span> Works.
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
          We've simplified the process of buying and selling digital businesses. 
          From discovery to transfer, we are with you every step of the way.
        </p>
      </div>

      {/* 2. Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="group relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
          >
            {/* Step Number Background */}
            <div className="absolute top-4 right-6 text-5xl font-black text-primary/5 font-mono group-hover:text-primary/10 transition-colors">
              0{index + 1}
            </div>

            <div className="flex flex-col gap-4">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold font-mono tracking-tight text-foreground">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>

              <div className="pt-4 flex items-center gap-2 text-primary font-mono text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="size-3" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Bottom Decorative Line (Optional) */}
      <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}

export default HowItWorks