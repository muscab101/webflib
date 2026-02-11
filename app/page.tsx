"use client"

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This tracks the authentication state (Logged in/out)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe(); 
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoaderCircle className="animate-spin size-10 text-primary" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4">
      {/* Theme Toggle Positioned Top Right */}
      <div className="fixed top-5 right-5">
        <ModeToggle />
      </div>

      <div className="text-center w-full max-w-md">
        {user ? (
          <div className="p-8 border rounded-xl border-primary/20 shadow-lg bg-card flex flex-col items-center gap-6">
            {user.photoURL && (
              <img 
                src={user.photoURL} 
                alt="Profile Avatar" 
                className="w-20 h-20 rounded-full border-2 border-primary object-cover" 
              />
            )}
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight">
                Welcome back, {user.displayName || "User"}!
              </h1>
              <p className="text-muted-foreground text-sm">
                {user.email}
              </p>
            </div>
            
            <Button 
              variant="destructive" 
              onClick={handleLogout} 
              className="w-full font-semibold transition-all hover:opacity-90"
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-medium text-primary tracking-tighter">
                WebFlip Marketplace
              </h1>
              <p className="text-muted-foreground text-balance max-w-sm mx-auto">
                Join the world&apos;s leading platform for buying and selling established websites. Log in to your account or create a new one to start.
              </p>
            </div>
            
            <div className="flex gap-4 mt-4">
              {/* Login Button */}
              <Link href="/login" passHref>
                <Button variant="outline" className="w-32 border-primary/30 hover:bg-primary/5">
                  Login
                </Button>
              </Link>

              {/* Sign Up Button */}
              <Link href="/signup" passHref>
                <Button className="w-32 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}