"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Send,
  ArrowRight,
  Twitter,
  Github,
  Linkedin
} from 'lucide-react'

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // halkan logic-ga dhalinta foomka geli
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 font-mono">
      
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter lowercase leading-none mb-6">
          get in <br /> <span className="text-primary">touch</span>.
        </h1>
        <p className="text-xl text-muted-foreground lowercase max-w-xl">
          have a question about an asset? or want to list your website? we are here to help.
        </p>
      </div>

      <Separator className="mb-16 bg-foreground/10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* LEFT SIDE: Contact Form */}
        <div className="space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold lowercase">your name</label>
                <Input 
                  placeholder="john doe" 
                  className="rounded-none border-2 border-foreground/10 focus:border-primary h-14 lowercase"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold lowercase">email address</label>
                <Input 
                  type="email" 
                  placeholder="hello@example.com" 
                  className="rounded-none border-2 border-foreground/10 focus:border-primary h-14 lowercase"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold lowercase">subject</label>
              <Input 
                placeholder="buying an asset" 
                className="rounded-none border-2 border-foreground/10 focus:border-primary h-14 lowercase"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold lowercase">message</label>
              <Textarea 
                placeholder="how can we help you?" 
                className="rounded-none border-2 border-foreground/10 focus:border-primary min-h-[200px] lowercase resize-none"
                required
              />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full h-16 rounded-none bg-primary text-primary-foreground font-black text-xl lowercase gap-3 hover:bg-foreground transition-all"
            >
              {isSubmitting ? "sending..." : "send message"}
              <Send className="size-5" />
            </Button>
          </form>
        </div>

        {/* RIGHT SIDE: Contact Info */}
        <div className="space-y-12">
          
          {/* Info Blocks */}
          <div className="grid grid-cols-1 gap-8">
            <div className="p-8 border-2 border-foreground/10 space-y-4">
              <Mail className="size-8 text-primary" />
              <h3 className="text-xl font-black lowercase">email us</h3>
              <p className="text-muted-foreground lowercase">our team is ready to assist you via email.</p>
              <p className="font-bold">support@webflip.com</p>
            </div>

            <div className="p-8 border-2 border-foreground/10 space-y-4">
              <MessageSquare className="size-8 text-primary" />
              <h3 className="text-xl font-black lowercase">live chat</h3>
              <p className="text-muted-foreground lowercase">available monday to friday, 9am - 5pm.</p>
              <Button variant="link" className="p-0 h-auto font-black lowercase text-primary group">
                start a conversation <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest">follow us</h3>
            <div className="flex gap-4">
              {[
                { icon: <Twitter />, link: "#" },
                { icon: <Github />, link: "#" },
                { icon: <Linkedin />, link: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  className="size-14 border-2 border-foreground/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Office Location (Optional) */}
          <div className="pt-8 border-t-2 border-foreground/10">
            <div className="flex items-start gap-4">
              <MapPin className="size-6 text-primary mt-1" />
              <div>
                <h4 className="font-bold lowercase">digital headquarters</h4>
                <p className="text-sm text-muted-foreground lowercase">123 innovation street, tech city, tc 54321</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ContactPage