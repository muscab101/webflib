"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const options = [
    { name: "light", value: "light", icon: Sun },
    { name: "dark", value: "dark", icon: Moon },
    { name: "sys", value: "system", icon: Monitor },
  ]

  return (
    <div className="flex w-full border-2 border-foreground/10 bg-muted/20 p-1 rounded-none">
      {options.map((opt) => {
        const Icon = opt.icon
        const isActive = theme === opt.value

        return (
          <button
            key={opt.value}
            onClick={() => setTheme(opt.value)}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 px-2 py-1.5 text-[10px] font-bold transition-all rounded-none lowercase",
              isActive 
                ? "bg-primary text-primary-foreground" // Waa "ON"
                : "hover:bg-foreground/5 text-muted-foreground" // Waa "OFF"
            )}
          >
            <Icon className="size-3" />
            {opt.name}
          </button>
        )
      })}
    </div>
  )
}