"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { auth } from "@/lib/firebase"
import { onAuthStateChanged, User, signOut } from "firebase/auth"
import { 
  GalleryVerticalEnd, 
  Search, 
  Bell, 
  LogOut, 
  LayoutDashboard, 
  ShoppingBag, 
  Settings,
  Menu,
  Globe,
  Tag
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const DashboardNavbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const NAV_LINKS = [
    { name: "home", href: "/dashboard", icon: <LayoutDashboard className="size-4" /> },
    { name: "websites", href: "/websites", icon: <ShoppingBag className="size-4" /> },
    { name: "about", href: "/about", icon: <Tag className="size-4" /> },
    { name: "contact", href: "/contact", icon: <Globe className="size-4" /> },
  ];

  return (
    <nav className="sticky top-4 z-50 w-full px-4 mt-5 font-mono">
      <div className="flex items-center justify-between w-full max-w-6xl h-16 px-6 mx-auto rounded-none border border-foreground/10 shadow-sm bg-background/60 backdrop-blur-md transition-all duration-300 relative z-[60]"> 
        
        {/* LEFT SECTION: Logo & Desktop Navigation */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-bold group lowercase">
            <div className="bg-primary text-primary-foreground p-1 rounded-none transition-transform group-hover:rotate-6">
              <GalleryVerticalEnd className="size-5" />
            </div>
            <span className="hidden sm:inline-block text-xl tracking-tighter">webflip</span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[13px] lowercase transition-colors duration-200",
                  pathname === link.href
                    ? "text-primary font-bold underline underline-offset-4"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION: Actions (Search, Mode, Bell, User, Mobile Menu) */}
        <div className="flex items-center gap-3">
          
          {/* DESKTOP SEARCH */}
          <div className="hidden lg:flex relative w-40 xl:w-60 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input
              placeholder="search..."
              className="w-full pl-9 bg-muted/40 border border-foreground/5 focus:border-primary/50 outline-none rounded-none font-mono lowercase h-8 text-xs transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <div className="hidden sm:block">
              <ModeToggle />
            </div>

            <Button variant="ghost" size="icon" className="relative rounded-none hidden sm:flex">
              <Bell className="size-4" />
              <span className="absolute top-2 right-2 size-1.5 bg-primary rounded-none" />
            </Button>

            {/* USER PROFILE */}
            {user && (
              <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" className="relative h-9 w-9 rounded-none border-2 border-foreground/10 p-0 hover:bg-transparent hover:border-primary transition-all">
      <Avatar className="h-full w-full rounded-none">
        <AvatarImage src={user?.photoURL || ""} className="rounded-none" />
        <AvatarFallback className="bg-primary/10 text-primary text-[10px] uppercase rounded-none font-bold">
          {user?.email?.substring(0, 2)}
        </AvatarFallback>
      </Avatar>
    </Button>
  </DropdownMenuTrigger>

  <DropdownMenuContent className="w-64 mt-2 p-0 rounded-none font-mono lowercase shadow-xl border-2 border-foreground/10" align="end">
    <DropdownMenuLabel className="font-normal p-4 border-b-2 border-foreground/5 bg-muted/20">
      <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">account</p>
      <p className="text-xs font-bold truncate">{user?.email}</p>
    </DropdownMenuLabel>

    <div className="p-1">
      <DropdownMenuItem className="gap-3 p-3 cursor-pointer rounded-none focus:bg-primary focus:text-primary-foreground">
        <LayoutDashboard className="size-4" /> dashboard
      </DropdownMenuItem>
      <DropdownMenuItem className="gap-3 p-3 cursor-pointer rounded-none focus:bg-primary focus:text-primary-foreground">
        <Settings className="size-4" /> settings
      </DropdownMenuItem>
    </div>

    <DropdownMenuSeparator className="m-0 h-[2px] bg-foreground/5" />

    {/* MODE TOGGLE SECTION */}
    <div className="p-1">
      <div className="px-3 py-2 text-[10px] uppercase tracking-widest opacity-50">appearance</div>
      <DropdownMenuItem asChild>
        {/* Halkan waxaan ku dhex ridnay ModeToggle-kaagii */}
        <div className="flex items-center justify-between w-full px-1">
          <ModeToggle />
        </div>
      </DropdownMenuItem>
    </div>

    <DropdownMenuSeparator className="m-0 h-[2px] bg-foreground/5" />

    <DropdownMenuItem 
      onClick={handleLogout} 
      className="gap-3 p-4 cursor-pointer rounded-none text-destructive font-bold focus:bg-destructive focus:text-destructive-foreground"
    >
      <LogOut className="size-4" /> log out
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
            )}

            {/* MOBILE MENU: RIGHT SIDE */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden rounded-none border border-foreground/10 ml-1">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] rounded-none font-mono lowercase border-l-2">
                <SheetHeader className="text-left border-b pb-4">
                  <SheetTitle className="flex items-center gap-2 lowercase">
                    <GalleryVerticalEnd className="size-5 text-primary" />
                    webflip
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 mt-6">
                  {NAV_LINKS.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <Button
                        className={cn(
                          "w-full justify-start gap-3 rounded-none lowercase h-12",
                          pathname === link.href ? "bg-primary text-primary-foreground font-bold" : ""
                        )}
                        variant={pathname === link.href ? "default" : "ghost"}
                      >
                        {link.icon} {link.name}
                      </Button>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default DashboardNavbar