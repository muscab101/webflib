"use client"

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "./_components/Navbar";
import ArrowsBg from "./_components/ArrowsBg";
import Hero from "./_components/Hero";

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
    <div>
      <Navbar/>
      <ArrowsBg/>
      <Hero/>
    </div>
  );
}