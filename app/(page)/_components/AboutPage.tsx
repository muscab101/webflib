"use client"

import React from 'react'
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Target, 
  Users, 
  Zap, 
  ShieldCheck 
} from 'lucide-react'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 font-mono">
      
      {/* Hero Section */}
      <section className="mb-24">
        <div className="max-w-4xl space-y-6">
          <Badge className="rounded-none px-4 py-1 bg-primary/10 text-primary border-none lowercase">
            since 2024
          </Badge>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter lowercase leading-none">
            we flip the <br /> 
            <span className="text-primary italic">digital</span> script.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground lowercase leading-tight max-w-2xl">
            webflip is a boutique marketplace for high-performance websites and digital assets. we bridge the gap between creators and investors.
          </p>
        </div>
      </section>

      <Separator className="bg-foreground/10 mb-24" />

      {/* Core Values Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
        {[
          { icon: <Target className="size-6" />, title: "precision", desc: "every asset is vetted for code quality and performance." },
          { icon: <ShieldCheck className="size-6" />, title: "security", desc: "safe transfers and escrowed payments are our priority." },
          { icon: <Zap className="size-6" />, title: "speed", desc: "lightning fast deployment from purchase to production." },
          { icon: <Users className="size-6" />, title: "community", desc: "built for the next generation of digital entrepreneurs." }
        ].map((value, i) => (
          <div key={i} className="p-8 border-2 border-foreground/10 hover:border-primary transition-colors group">
            <div className="mb-4 text-primary group-hover:scale-110 transition-transform origin-left">
              {value.icon}
            </div>
            <h3 className="text-xl font-bold lowercase mb-2">{value.title}</h3>
            <p className="text-sm text-muted-foreground lowercase leading-relaxed">
              {value.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Philosophy / Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="aspect-square bg-muted border-2 border-foreground/10 relative overflow-hidden">
           <img 
            src="/api/placeholder/800/800" 
            alt="office" 
            className="w-full h-full object-cover grayscale opacity-50"
           />
           <div className="absolute inset-0 flex items-center justify-center p-12">
              <h2 className="text-4xl font-black lowercase tracking-tighter text-center">
                we believe <br /> quality over <br /> quantity.
              </h2>
           </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-4xl font-black lowercase tracking-tighter">our philosophy</h2>
          <div className="space-y-4 text-lg text-muted-foreground lowercase">
            <p>
              the internet is cluttered with template-based, slow, and uninspired digital products. we started webflip to curate only the best.
            </p>
            <p>
              every website listed on our platform undergoes a rigorous manual review process to ensure it meets our strict standards for design, seo, and scalability.
            </p>
          </div>
          <div className="pt-4">
             <Link href="/marketplace">
                <Button className="h-16 px-10 rounded-none lowercase font-black text-xl gap-4 bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all">
                  explore the collection <ArrowRight className="size-6" />
                </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32 border-y-2 border-foreground/10 py-12">
        {[
          { label: "assets sold", value: "250+" },
          { label: "happy clients", value: "180+" },
          { label: "avg. roi", value: "45%" },
          { label: "vetted code", value: "100%" }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl md:text-5xl font-black tracking-tighter lowercase text-primary">{stat.value}</div>
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Contact CTA */}
      <section className="bg-primary p-12 text-primary-foreground text-center">
        <h2 className="text-3xl md:text-5xl font-black lowercase tracking-tighter mb-6">
          ready to own your piece <br /> of the internet?
        </h2>
        <Link href="/contact">
          <Button variant="outline" className="h-14 px-8 rounded-none border-2 border-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary lowercase font-black text-lg transition-all">
            get in touch with us
          </Button>
        </Link>
      </section>

    </div>
  )
}

// Reusable Badge component since it might not be in your UI folder
const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={`inline-block text-[10px] font-bold tracking-widest border border-foreground/20 ${className}`}>
    {children}
  </span>
)

export default AboutPage