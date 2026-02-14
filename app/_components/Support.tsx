"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MessageSquare, Send } from 'lucide-react'

const Support = () => {
  return (
    <section id="support" className="py-24 px-6 md:px-16 lg:px-24 bg-background border-t">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter">
            Need <span className="text-primary">help?</span>
          </h2>
          <p className="text-muted-foreground text-lg font-mono">
            Our team is here to support you. Reach out through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Bidix: Macluumaadka Xiriirka */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl border bg-card/50 space-y-3">
                <Mail className="size-6 text-primary" />
                <h3 className="font-bold font-mono">Email us</h3>
                <p className="text-sm text-muted-foreground">support@webflip.com</p>
              </div>
              <div className="p-6 rounded-2xl border bg-card/50 space-y-3">
                <MessageSquare className="size-6 text-primary" />
                <h3 className="font-bold font-mono">Live chat</h3>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border-2 border-dashed border-primary/20 bg-primary/5">
              <h3 className="text-xl font-bold font-mono mb-2">Office hours</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Monday - Friday: 9:00 am - 6:00 pm (EAT)<br />
                Weekends: Emergency support only
              </p>
            </div>
          </div>

          {/* Midig: Foomka Xiriirka (Contact Form) */}
          <div className="p-8 rounded-3xl border bg-card shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-mono font-bold tracking-tight pl-1">Name</label>
                <Input placeholder="Your name" className="h-12 rounded-xl focus-visible:ring-primary" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-mono font-bold tracking-tight pl-1">Email</label>
                <Input type="email" placeholder="email@example.com" className="h-12 rounded-xl focus-visible:ring-primary" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-mono font-bold tracking-tight pl-1">Message</label>
                <Textarea placeholder="How can we help you?" className="min-h-[150px] rounded-xl focus-visible:ring-primary" />
              </div>

              <Button className="w-full h-12 rounded-xl font-mono text-lg gap-2 group">
                Send message
                <Send className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Support