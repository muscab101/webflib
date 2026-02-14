"use client"

import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { GalleryVerticalEnd, Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const Navbar = () => {
  const items = [
    { name: "home", id: 1, url: '/' },
    { name: "how it works", id: 2, url: '#' },
    { name: "FAQs", id: 3, url: '#' },
    { name: "support", id: 4, url: '#' }
  ]

  return (
    <nav className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <div className="flex items-center justify-between w-full max-w-5xl h-16 px-6 
                      rounded-xl border shadow-sm
                      bg-background/60 backdrop-blur-md transition-colors duration-300 relative z-[60]">
        
        {/* 1. Logo Section */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-md transition-transform group-hover:rotate-12">
              <GalleryVerticalEnd className="size-5" />
            </div>
            <span className="font-bold text-lg tracking-tight text-foreground">
              WebFlip
            </span>
          </Link>
        </div>

        {/* 2. Desktop Navigation (Dhexda) */}
        <div className="hidden md:flex items-center gap-6">
          {items.map((item) => (
            <Link 
              href={item.url} 
              key={item.id} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors capitalize"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* 3. Right Section: Flex Container (ModeToggle + Menu) */}
        <div className="flex items-center gap-2 md:gap-3">
          
          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <Button variant="ghost" size="sm" className="font-medium">Login</Button>
            <Button size="sm" className="bg-primary text-primary-foreground rounded-full px-5">Sign Up</Button>
            <div className="w-[1px] h-6 bg-border mx-1" />
          </div>

          {/* ModeToggle - Had iyo jeer wuu muuqdaa */}
          <ModeToggle />

          {/* Mobile Menu - Wuxuu ka soo baxayaa RIGHT */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-transparent">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              
              <SheetContent 
                side="right" 
                className="w-full p-4 bg-background/95 backdrop-blur-xl border-l"
              >
                <SheetHeader className="text-left border-b pb-4">
                  <SheetTitle className="flex items-center gap-2">
                    <GalleryVerticalEnd className="size-5 text-primary" />
                    WebFlip
                  </SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col gap-5 mt-8">
                  {items.map((item) => (
                    <SheetClose asChild key={item.id}>
                      <Link 
                        href={item.url} 
                        className="text-lg font-medium hover:text-primary transition-all capitalize"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                  
                  <hr className="my-2 border-border" />
                  
                  <div className="flex flex-col gap-3">
                    <Button variant="outline" className="w-full justify-start px-4 h-11">Login</Button>
                    <Button className="w-full justify-start px-4 h-11 bg-primary text-primary-foreground">Sign Up</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar