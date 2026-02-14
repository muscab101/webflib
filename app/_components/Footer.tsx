"use client"

import React from 'react'
import Link from 'next/link'
import { GalleryVerticalEnd, Github, Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* 1. Logo & About */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-md transition-transform group-hover:rotate-12">
                <GalleryVerticalEnd className="size-5" />
              </div>
              <span className="font-bold text-xl tracking-tighter font-mono">WebFlip</span>
            </Link>
            <p className="text-muted-foreground text-sm font-mono leading-relaxed max-w-xs">
              The premier marketplace for buying and selling digital assets. 
              Simplify your flip with our secure platform.
            </p>
          </div>

          {/* 2. Platform Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold font-mono text-sm">Platform</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">How it works</Link></li>
              <li><Link href="/browse" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">Browse assets</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">Pricing</Link></li>
            </ul>
          </div>

          {/* 3. Support & Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold font-mono text-sm">Support</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="#faqs" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">FAQs</Link></li>
              <li><Link href="#support" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">Contact us</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">Terms of service</Link></li>
            </ul>
          </div>

          {/* 4. Social & Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold font-mono text-sm">Connect</h3>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-full border hover:bg-primary/10 hover:border-primary/50 transition-all">
                <Twitter className="size-4" />
              </Link>
              <Link href="#" className="p-2 rounded-full border hover:bg-primary/10 hover:border-primary/50 transition-all">
                <Github className="size-4" />
              </Link>
              <Link href="#" className="p-2 rounded-full border hover:bg-primary/10 hover:border-primary/50 transition-all">
                <Linkedin className="size-4" />
              </Link>
              <Link href="mailto:hello@webflip.com" className="p-2 rounded-full border hover:bg-primary/10 hover:border-primary/50 transition-all">
                <Mail className="size-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © {currentYear} WebFlip Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono">Privacy policy</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono">Cookie settings</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer