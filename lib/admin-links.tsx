// lib/admin-links.tsx
import { LayoutDashboard, PlusCircle, ShoppingCart, DollarSign } from 'lucide-react'

export const ADMIN_LINKS = [
  { name: "stats", href: "/admin", icon: <LayoutDashboard className="size-4" /> },
  { name: "add website", href: "/admin/add-site", icon: <PlusCircle className="size-4" /> },
  { name: "all orders", href: "/admin/orders", icon: <ShoppingCart className="size-4" /> },
  { name: "revenue", href: "/admin/revenue", icon: <DollarSign className="size-4" /> },
];
