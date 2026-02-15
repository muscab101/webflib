import React from 'react'
import Link from 'next/link' // Waxaan ku darnay Link
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ExternalLink, Globe, Layout, Tag } from 'lucide-react'

// Xogta website-yada (Updated with your images)
const MARKET_ITEMS = [
  {
    id: 1,
    title: "Modern Real Estate Listing Portal",
    category: "Property & Real Estate",
    price: "$950",
    image: "/realstate.png",
    description: "A premium property listing platform with advanced map search, property filters, and agent management system."
  },
  {
    id: 2,
    title: "E-commerce Fashion Store",
    category: "E-commerce",
    price: "$1,200",
    image: "/e-commerce.png", 
    description: "Complete clothing brand website with payment integration and CMS."
  },
  {
    id: 3,
    title: "Premium Barber Shop Website",
    category: "Service Business",
    price: "$850",
    image: "/barber.png",
    description: "Modern booking system for barbers, including stylist profiles, service menu, and online appointment scheduling."
  }
];

const Items = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div className="text-left space-y-2">
          <Badge variant="secondary" className="font-mono uppercase tracking-widest text-[10px]">
            Marketplace
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tighter">
            Featured Listings
          </h2>
          <p className="text-muted-foreground font-mono text-sm max-w-md">
            Hand-picked premium websites and domains verified for quality.
          </p>
        </div>
        <Button variant="outline" className="font-mono text-xs">
          View All Assets
        </Button>
      </div>

      {/* Grid of Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MARKET_ITEMS.map((item) => (
          <Card key={item.id} className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 group">
            
            {/* Clickable Image */}
            <Link href={`/item/${item.id}`}>
              <CardHeader className="p-0 relative aspect-video overflow-hidden cursor-pointer">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-3 right-3 bg-background/80 backdrop-blur-md text-foreground border-none">
                  {item.category}
                </Badge>
              </CardHeader>
            </Link>

            {/* Content */}
            <CardContent className="p-5 space-y-3">
              <div className="flex justify-between items-start">
                {/* Clickable Title */}
                <Link href={`/item/${item.id}`}>
                  <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors cursor-pointer">
                    {item.title}
                  </h3>
                </Link>
                <span className="font-mono font-bold text-primary">{item.price}</span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 font-mono">
                {item.description}
              </p>
            </CardContent>

            {/* Footer Buttons */}
            <CardFooter className="p-5 pt-0 flex gap-2">
              <Link href={`/item/${item.id}`} className="flex-1">
                <Button className="w-full font-mono text-xs gap-2">
                  <Tag className="size-3" /> Buy Now
                </Button>
              </Link>
              
              <Button variant="outline" size="icon" className="shrink-0">
                <ExternalLink className="size-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Items