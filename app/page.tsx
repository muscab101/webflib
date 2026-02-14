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
import HowItWorks from "./_components/HowItWorks";
import FAQ from "./_components/FAQ";
import Support from "./_components/Support";
import Footer from "./_components/Footer";

export default function Home() {


 return (
  <div>
    <Navbar />
    <ArrowsBg />
    
    {/* Qaybta Hero had iyo jeer waa bilowga boga */}
    <div id="home">
      <Hero />
    </div>

    {/* Qaybta How It Works */}
    <div id="how-it-works">
      <HowItWorks />
    </div>

    {/* Qaybta FAQ */}
    <div id="faqs">
      <FAQ />
    </div>

    <div id="support">
      <Support/>
    </div>
    <Footer/>
  </div>
);
}