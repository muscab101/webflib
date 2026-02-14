"use client"

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  const faqData = [
    {
      question: "How does WebFlip differ from traditional marketplaces?",
      answer: "WebFlip is subscription-based and centrally hosted. Users pay a recurring fee to access the software over the internet, eliminating the need for upfront costs and ongoing maintenance."
    },
    {
      question: "How customizable is the platform?",
      answer: "The platform is highly flexible, allowing you to tailor your listings and profile to match your branding perfectly."
    },
    {
      question: "What happens to my data if I cancel my subscription?",
      answer: "Your data remains secure for 30 days, during which you can export everything before the account is permanently closed."
    },
    {
      question: "What are the benefits of using WebFlip?",
      answer: "We offer lower commission fees, verified traffic data, and a secure escrow service for all transactions."
    },
    {
      question: "How does pricing work for sellers?",
      answer: "Sellers can choose between a flat fee per listing or a small percentage commission upon a successful sale."
    }
  ]

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-24 items-center">
        
        {/* 1. Accordion Section */}
        <div className="lg:w-2/3 w-full flex flex-col gap-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-2xl px-6 bg-card/40 backdrop-blur-sm data-[state=open]:border-primary/50 transition-all duration-300"
              >
                {/* Shadcn AccordionTrigger wuxuu si otomaatig ah u leeyahay ChevronDown icon */}
                <AccordionTrigger className="hover:no-underline py-6 text-left text-lg font-medium group font-mono tracking-tight group-data-[state=open]:text-primary transition-colors">
                  <span className="max-w-[90%]">
                    {item.question}
                  </span>
                </AccordionTrigger>
                
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed font-sans">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* 2. Heading Section (FAQs) */}
        <div className="lg:w-1/3 w-full flex justify-center lg:justify-end">
          <h2 className="text-[7rem] md:text-[10rem] font-bold leading-none tracking-tighter font-mono select-none">
            FAQ<span className='text-primary'>s</span>
          </h2>
        </div>

      </div>
    </section>
  )
}

export default FAQ