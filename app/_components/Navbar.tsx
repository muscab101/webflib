"use client"

import React, { useEffect, useState } from 'react'
import { auth } from '@/lib/firebase' // Hubi in jidkani sax yahay
import { onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { GalleryVerticalEnd, Menu, LogOut, Settings, LayoutDashboard, User } from 'lucide-react'
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

  // 1. Maqal (Listen) xaaladda user-ka ee Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // 2. Shaqada Log Out-ka
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
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-md transition-transform group-hover:rotate-12 text-foreground">
              <GalleryVerticalEnd className="size-5" />
            </div>
            <span className="font-bold text-lg tracking-tight">WebFlip</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {items.map((item) => (
            <Link key={item.id} href={item.url} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors capitalize">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side: Auth Logic */}
        <div className="flex items-center gap-2 md:gap-3">
          {!loading && (
            <div className="hidden sm:flex items-center gap-2">
              {!currentUser ? (
                <>
                  <Link href="/login"><Button variant="ghost" size="sm">Login</Button></Link>
                  <Link href="/signup"><Button size="sm" className="rounded-full px-5">Sign Up</Button></Link>
                </>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="size-9 border-2 border-background cursor-pointer hover:ring-2 ring-primary/20 transition-all">
                      <AvatarImage src={currentUser.photoURL || ""} />
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {currentUser.displayName?.substring(0, 2) || currentUser.email?.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mt-2" align="end">
                    <DropdownMenuLabel>
                      <p className="text-sm font-medium leading-none">{currentUser.displayName || "User"}</p>
                      <p className="text-xs text-muted-foreground mt-1 truncate">{currentUser.email}</p>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard" className="cursor-pointer flex w-full">
                          <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/profile" className="cursor-pointer flex w-full">
                          <User className="mr-2 h-4 w-4" /> Profile
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
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

          <ModeToggle />

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon"><Menu className="size-6" /></Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[350px] bg-background/95 backdrop-blur-xl border-l flex flex-col pt-12">
                {currentUser && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border mb-6">
                    <Avatar className="size-12 border-2 border-background">
                      <AvatarImage src={currentUser.photoURL || ""} />
                      <AvatarFallback>{currentUser.email?.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col text-left">
                      <span className="font-bold">{currentUser.displayName || "Welcome"}</span>
                      <span className="text-xs text-muted-foreground truncate w-40">{currentUser.email}</span>
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <SheetClose asChild key={item.id}>
                      <Link href={item.url} className="text-lg font-medium capitalize text-left">
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="mt-auto pb-6 flex flex-col gap-3">
                  {!currentUser ? (
                    <>
                      <SheetClose asChild>
                        <Link href="/login" className="w-full">
                          <Button variant="outline" className="w-full h-12">Login</Button>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/signup" className="w-full">
                          <Button className="w-full h-12">Sign Up</Button>
                        </Link>
                      </SheetClose>
                    </>
                  ) : (
                    <Button variant="destructive" onClick={handleLogout} className="w-full h-11 justify-start gap-2">
                      <LogOut className="size-4" /> Log out
                    </Button>
                  )}
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