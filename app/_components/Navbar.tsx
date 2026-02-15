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
  Tag,
  HelpCircle,
  MessageSquare
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
  SheetClose,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

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
      console.error("Logout error:", error);
    }
  };

  // Hubi haddii la joogo Dashboard
  const isDashboard = pathname.startsWith('/dashboard');

  // Links-ka Landing Page
  const LANDING_LINKS = [
    { name: "home", href: "/", icon: <Globe className="size-4" /> },
    { name: "how it works", href: "#how-it-works", icon: <Tag className="size-4" /> },
    { name: "FAQs", href: "#faqs", icon: <HelpCircle className="size-4" /> },
    { name: "support", href: "#support", icon: <MessageSquare className="size-4" /> },
  ];

  // Links-ka Dashboard
  const DASHBOARD_LINKS = [
    { name: "overview", href: "/dashboard", icon: <LayoutDashboard className="size-4" /> },
    { name: "websites", href: "/websites", icon: <ShoppingBag className="size-4" /> },
    { name: "settings", href: "/settings", icon: <Settings className="size-4" /> },
  ];

  const activeLinks = isDashboard ? DASHBOARD_LINKS : LANDING_LINKS;

  return (
    <nav className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 font-mono">
      <div className="flex items-center justify-between w-full max-w-6xl h-16 px-6 
                      rounded-none border-2 border-foreground/10 shadow-sm 
                      bg-background/60 backdrop-blur-md transition-all relative z-[60]"> 
        
        {/* LEFT SECTION: Logo & Desktop Navigation */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-bold group lowercase">
            <div className="bg-primary text-primary-foreground p-1 rounded-none transition-transform group-hover:rotate-6">
              <GalleryVerticalEnd className="size-5" />
            </div>
            <span className="hidden sm:inline-block text-xl tracking-tighter">webflip</span>
          </Link>

          {/* DESKTOP NAV ITEMS */}
          <div className="hidden md:flex items-center gap-6">
            {activeLinks.map((link) => (
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

        {/* RIGHT SECTION: Search, Auth, Bell, User, Mobile Menu */}
        <div className="flex items-center gap-3">
          
          {/* SEARCH (Dashboard-ka kaliya ka muuqda) */}
          {isDashboard && (
            <div className="hidden lg:flex relative w-40 xl:w-60 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                placeholder="search..."
                className="w-full pl-9 bg-muted/40 border-2 border-foreground/5 focus:border-primary/50 outline-none rounded-none font-mono lowercase h-8 text-xs transition-all"
              />
            </div>
          )}

          <div className="flex items-center gap-1.5">
            {/* Login/Signup haddii aan la login ahayn (Landing Page) */}
            {!loading && !currentUser && !isDashboard && (
              <div className="hidden sm:flex items-center gap-2">
                <Link href="/login"><Button variant="ghost" className="rounded-none lowercase text-xs font-bold">login</Button></Link>
                <Link href="/signup">
                  <Button className="rounded-none bg-primary text-primary-foreground px-5 lowercase text-xs font-bold border-2 border-primary hover:bg-transparent hover:text-primary transition-all">
                    sign up
                  </Button>
                </Link>
              </div>
            )}

            {/* Bell Icon (LoggedIn Users kaliya) */}
            {currentUser && (
              <Button variant="ghost" size="icon" className="relative rounded-none hidden sm:flex border-2 border-transparent hover:border-foreground/10">
                <Bell className="size-4" />
                <span className="absolute top-2 right-2 size-1.5 bg-primary rounded-none" />
              </Button>
            )}

            {/* USER PROFILE DROPDOWN */}
            {currentUser && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-none border-2 border-foreground/10 p-0 hover:bg-transparent hover:border-primary transition-all">
                    <Avatar className="h-full w-full rounded-none">
                      <AvatarImage src={currentUser.photoURL || ""} className="rounded-none" />
                      <AvatarFallback className="bg-primary/10 text-primary text-[10px] uppercase rounded-none font-bold">
                        {currentUser.email?.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-64 mt-2 p-0 rounded-none font-mono lowercase shadow-xl border-2 border-foreground/10" align="end">
                  <DropdownMenuLabel className="font-normal p-4 border-b-2 border-foreground/5 bg-muted/20">
                    <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">account</p>
                    <p className="text-xs font-bold truncate">{currentUser.email}</p>
                  </DropdownMenuLabel>

                  <div className="p-1">
                    <DropdownMenuItem asChild className="gap-3 p-3 cursor-pointer rounded-none focus:bg-primary focus:text-primary-foreground">
                      <Link href="/dashboard"><LayoutDashboard className="size-4" /> dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="gap-3 p-3 cursor-pointer rounded-none focus:bg-primary focus:text-primary-foreground">
                      <Link href="/settings"><Settings className="size-4" /> settings</Link>
                    </DropdownMenuItem>
                  </div>

                  <DropdownMenuSeparator className="m-0 h-[2px] bg-foreground/5" />

                  {/* APPEARANCE SECTION WITH MODETOGGLE */}
                  <div className="p-1">
                    <div className="px-3 py-2 text-[10px] uppercase tracking-widest opacity-50">appearance</div>
                    <div className="px-2 pb-2">
                       <ModeToggle />
                    </div>
                  </div>

                  <DropdownMenuSeparator className="m-0 h-[2px] bg-foreground/5" />

                  <DropdownMenuItem 
                    onClick={handleLogout} 
                    className="gap-3 p-4 cursor-pointer rounded-none text-destructive font-bold focus:bg-destructive focus:text-destructive-foreground transition-colors"
                  >
                    <LogOut className="size-4" /> log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* MOBILE MENU */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden rounded-none border-2 border-foreground/10 h-9 w-9">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full p-4 rounded-none font-mono lowercase border-l-2 bg-background">
                <SheetHeader className="text-left border-b-2 pb-4">
                  <SheetTitle className="flex items-center gap-2 lowercase font-black tracking-tighter">
                    <GalleryVerticalEnd className="size-5 text-primary" /> webflip
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 mt-6">
                  {activeLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link href={link.href}>
                        <Button
                          className={cn(
                            "w-full justify-start gap-3 rounded-none lowercase h-12 border-2 border-transparent",
                            pathname === link.href ? "bg-primary text-primary-foreground font-bold" : "hover:border-foreground/10"
                          )}
                          variant={pathname === link.href ? "default" : "ghost"}
                        >
                          {link.icon} {link.name}
                        </Button>
                      </Link>
                    </SheetClose>
                  ))}
                  
                  {!currentUser && (
                    <div className="flex flex-col gap-3 mt-4 border-t-2 pt-6 border-foreground/5">
                      <SheetClose asChild><Link href="/login"><Button variant="outline" className="w-full rounded-none h-12 border-2 font-bold">login</Button></Link></SheetClose>
                      <SheetClose asChild><Link href="/signup"><Button className="w-full rounded-none h-12 bg-primary text-primary-foreground border-2 border-primary font-bold">sign up</Button></Link></SheetClose>
                    </div>
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