"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation" // Waxaan soo dhex marnay usePathname
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
  PlusCircle,
  Menu,
  Globe,
  Tag
} from "lucide-react"
import { Input } from "@/components/ui/input"
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
import { cn } from "@/lib/utils" // Hubi inuu utility-gan kuu jiro

const DashboardNavbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname(); // Helitaanka link-ga hadda furan

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

  // Liiska Link-yada si loogu soo saaro loop
  const NAV_LINKS = [
    { name: "home", href: "/dashboard", icon: <LayoutDashboard className="size-4" /> },
    { name: "websites", href: "/websites", icon: <ShoppingBag className="size-4" /> },
    { name: "about", href: "/about", icon: <Tag className="size-4" /> },
    { name: "contact", href: "/contact", icon: <Globe className="size-4" /> },
  ];

  return (
    <nav className="sticky top-4 z-50 w-full px-4 mt-5 font-mono">
      <div className="flex items-center justify-between w-full max-w-6xl h-16 px-6 mx-auto rounded-none border border-foreground/10 shadow-sm bg-background/60 backdrop-blur-md transition-colors duration-300 relative z-[60]"> 
        
        {/* LEFT: Logo & Mobile Menu */}
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-none">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] rounded-none font-mono lowercase">
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
                        "w-full justify-start gap-2 rounded-none lowercase",
                        pathname === link.href ? "bg-primary text-primary-foreground" : "variant-ghost"
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

          <Link href="/" className="flex items-center gap-2 font-bold group lowercase">
            <div className="bg-primary text-primary-foreground p-1 rounded-none transition-transform group-hover:rotate-6">
              <GalleryVerticalEnd className="size-5" />
            </div>
            <span className="hidden sm:inline-block text-xl tracking-tighter">webflip</span>
          </Link>

          {/* DESKTOP NAV: Active State (Text Only) */}
<div className="hidden md:flex items-center gap-8 px-4"> 
  {NAV_LINKS.map((link) => (
    <Link 
      key={link.href} 
      href={link.href}
      className={cn(
        "text-[13px] font-mono lowercase transition-colors duration-200",
        pathname === link.href 
          ? "text-primary font-bold" 
          : "text-muted-foreground hover:text-primary"
      )}
    >
      {link.name}
    </Link>
  ))}
</div>
        </div>

        {/* MIDDLE: Search */}
        <div className="flex-1 flex justify-center px-4 hidden lg:flex">
          <div className="relative w-full max-w-sm group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              placeholder="search websites..." 
              className="w-full pl-10 bg-muted/50 border-none focus:ring-1 focus:ring-primary outline-none rounded-none font-mono lowercase h-9 text-sm"
            />
          </div>
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-2 ml-auto">
          <div className="hidden sm:block">
            <ModeToggle />
          </div>

          <Button variant="ghost" size="icon" className="relative rounded-none">
            <Bell className="size-5" />
            <span className="absolute top-2 right-2 size-2 bg-primary rounded-none border border-background" />
          </Button>

          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-none border p-0 hover:bg-transparent">
                <Avatar className="h-full w-full rounded-none">
                  <AvatarImage src={user?.photoURL || ""} className="rounded-none" />
                  <AvatarFallback className="bg-primary/10 text-primary font-mono text-xs lowercase rounded-none border-none">
                    {user?.email?.substring(0, 2) || "wf"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent className="w-64 mt-2 p-0 rounded-none font-mono lowercase" align="end">
              <DropdownMenuLabel className="font-normal p-4">
                <div className="flex flex-col space-y-1 py-1 text-left">
                  <p className="text-sm font-semibold truncate">{user?.displayName || "member"}</p>
                  <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="m-0" />
              <DropdownMenuItem className="gap-2 cursor-pointer rounded-none p-3">
                <LayoutDashboard className="size-4" /> dashboard
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 cursor-pointer rounded-none p-3">
                <Settings className="size-4" /> settings
              </DropdownMenuItem>
              <DropdownMenuSeparator className="m-0" />
              <DropdownMenuItem 
                onClick={handleLogout} 
                className="gap-2 cursor-pointer rounded-none p-3 text-destructive focus:bg-destructive/10"
              >
                <LogOut className="size-4" /> log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      </div>
    </nav>
  )
}

export default DashboardNavbar