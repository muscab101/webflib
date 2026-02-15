import React from 'react'
import { ArrowRight, Search, ShieldCheck, Globe, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const HeroPage = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 md:px-6 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent -z-10" />

      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 flex-1 flex flex-col justify-center py-12">
        
        {/* Trust Badge - Responsive text size */}
        <div className="flex justify-center animate-in fade-in slide-in-from-top-4 duration-1000">
          <Badge variant="outline" className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary/5 border-primary/20 text-primary font-mono text-[10px] md:text-xs font-medium flex gap-2 items-center">
            <ShieldCheck className="size-3 md:size-3.5" />
            The Most Trusted Marketplace for Digital Assets
          </Badge>
        </div>

        {/* Main Heading - Responsive Font Sizes */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold font-mono tracking-tighter leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Skip the Build. <br />
          <span className="text-primary">Buy a Proven Business.</span>
        </h1>

        {/* Description - Responsive width and text */}
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-mono max-w-[280px] sm:max-w-md md:max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          Welcome to WebFlip. Discover and acquire high-quality, pre-built websites and premium domains.
        </p>

        {/* Search & Buttons - Responsive Layout (Stack on mobile, row on desktop) */}
        <div className="flex items-center justify-center pt-4 w-full animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
  <div className="w-full max-w-[400px] mx-auto">
    <Button 
      className="w-full flex items-center justify-center gap-2 px-10  transition-all hover:scale-105 group"
    >
      Explore Market
      <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
    </Button>
  </div>
</div>

        {/* Trust Markers - Responsive spacing and hidden on extra small screens */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-4 md:gap-12 opacity-50 font-mono text-[10px] md:text-xs -in fade-in duration-1000 delay-700">
          <div className="flex items-center gap-2">
            <Globe className="size-3.5 md:size-4" /> Global Inventory
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-3.5 md:size-4" /> Secure Transfers
          </div>
        </div>
      </div>

      {/* --- ANIMATED DOWN ARROW --- */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce cursor-pointer hover:text-primary transition-colors group">
        <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] font-bold">Scroll Down</span>
        <ChevronDown className="size-5 md:size-6" />
      </div>

    </section>
  )
}

export default HeroPage