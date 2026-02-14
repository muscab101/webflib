"use client"

import React, { useEffect, useState } from 'react'
import { auth } from '@/lib/firebase' 
import { onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { GalleryVerticalEnd, Menu, LogOut, LayoutDashboard, User } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose,
} from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const items = [
    { name: "home", id: 1, url: '/' },
    { name: "how it works", id: 2, url: '#' },
    { name: "support", id: 4, url: '#' }
  ];

  return (
    <nav className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 font-mono">
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
            <Link key={item.id} href={item.url} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors capitalize">
              {item.name}
            </Link>
          ))}
        </div>

        {/* 3. Right Section: Flex Container (Auth + ModeToggle + Menu) */}
        <div className="flex items-center gap-2 md:gap-3">
          
          {/* Auth Logic (Desktop & Tablet) */}
          {!loading && (
            <div className="hidden sm:flex items-center gap-2">
              {!currentUser ? (
                <>
                  <Link href="/login"><Button variant="ghost" size="sm" className="font-medium">Login</Button></Link>
                  <Link href="/signup"><Button size="sm" className="bg-primary text-primary-foreground rounded-full px-5">Sign Up</Button></Link>
                </>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="size-9 border-2 border-background cursor-pointer hover:ring-2 ring-primary/20 transition-all">
                      <AvatarImage src={currentUser.photoURL || ""} />
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {currentUser.email?.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mt-2" align="end">
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none truncate">{currentUser.email}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="cursor-pointer w-full flex items-center">
                        <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="text-destructive cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" /> Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
              <div className="w-[1px] h-6 bg-border mx-1" />
            </div>
          )}

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
          {!currentUser ? (
            /* Haddii qofku uusan jirin - Guest */
            <>
              <SheetClose asChild>
                <Link href="/login">
                  <Button variant="outline" className="w-full justify-start px-4 h-11">Login</Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/signup">
                  <Button className="w-full justify-start px-4 h-11 bg-primary text-primary-foreground">Sign Up</Button>
                </Link>
              </SheetClose>
            </>
          ) : (
            /* Haddii qofku login yahay - User Info & Logout */
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 px-2 py-1">
                <Avatar className="size-10 border">
                  <AvatarImage src={currentUser.photoURL || ""} alt="User" />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">
                    {currentUser.email?.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-semibold truncate">
                    {currentUser.displayName || "User"}
                  </span>
                  <span className="text-xs text-muted-foreground truncate">
                    {currentUser.email}
                  </span>
                </div>
              </div>
              
              <Button 
                variant="destructive" 
                onClick={handleLogout} 
                className="w-full justify-start px-4 h-11 gap-2"
              >
                <LogOut className="size-4" />
                Log out
              </Button>
            </div>
          )}
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