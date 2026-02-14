"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, StarHalf } from 'lucide-react'
import { 
  Avatar, 
  AvatarFallback, 
  AvatarGroup, 
  AvatarGroupCount, 
  AvatarImage 
} from "@/components/ui/avatar"
import ArrowsBg from './ArrowsBg' 

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-start overflow-hidden px-6 md:px-16 lg:px-24 pt-20">
      {/* 1. Background Bars (Arrows) - Waxay ku jiraan midigta hoose */}
      <ArrowsBg />

      {/* 2. Content Section - Bidixda laga soo bilaabay */}
      <div className="z-10 max-w-3xl w-full text-left flex flex-col items-start gap-6 animate-in fade-in slide-in-from-left-8 duration-1000">
        
        {/* Badge */}
        <Badge 
          variant="outline" 
          className="px-4 py-1 border-primary/20 bg-primary/5 text-primary animate-pulse"
        >
          🚀 New: Build your portfolio faster
        </Badge>

        {/* Main Title */}
        <h1 className="geist-mono-uniquifier text-5xl md:text-7xl  tracking-tight text-foreground leading-[1.1]">
          Buy and Sell <br /> 
          <span className="text-primary">Websites</span> <br />
          with Confidence.
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-lg md:text-xl text-muted-foreground">
          Join the largest marketplace for buying and selling digital assets. 
          Everything you need to flip your next big project.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-2">
          <Button size="lg" className=" font-bold  shadow-lg shadow-primary/20 active:scale-95 transition-transform">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className=" font-bold  hover:bg-primary/5">
            Browse Listings
          </Button>
        </div>

        {/* Trust Pilot Section - Shadcn Avatars & Primary Stars */}
        <div className="mt-8 flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/30 backdrop-blur-sm shadow-sm">
          {/* Shadcn Avatar Stack */}
          <AvatarGroup>
            <Avatar className="border-2 border-background">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <AvatarGroupCount className="bg-primary/10 text-primary border-2 border-background">+</AvatarGroupCount>
          </AvatarGroup>

          {/* Stars & Text */}
          <div className="flex flex-col items-start">
            <div className="flex gap-0.5">
              {[...Array(4)].map((_, i) => (
                <Star 
                  key={i} 
                  className="size-4 text-primary fill-primary" 
                />
                
              ))}
              <StarHalf className='size-4 text-primary fill-primary' />
            </div>
            <p className="text-xs font-semibold text-muted-foreground mt-1">
              Trusted by 10,000+ flippers worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero