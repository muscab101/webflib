// app/admin/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, ShoppingCart, Globe, TrendingUp } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    { title: "total revenue", value: "$12,450", icon: <DollarSign />, color: "bg-green-500" },
    { title: "active orders", value: "24", icon: <ShoppingCart />, color: "bg-blue-500" },
    { title: "sites listed", value: "142", icon: <Globe />, color: "bg-purple-500" },
    { title: "monthly growth", value: "+12.5%", icon: <TrendingUp />, color: "bg-orange-500" },
  ]

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <Card key={s.title} className="rounded-none border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-bold opacity-60 uppercase tracking-tighter">{s.title}</CardTitle>
              <div className={`${s.color} p-1 text-white border-2 border-foreground`}>{s.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black italic">{s.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* RECENT ORDERS TABLE */}
      <div className="border-2 border-foreground bg-background p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="text-xl font-black mb-6 underline decoration-primary underline-offset-4">recent sales</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b-2 border-foreground/10 text-xs opacity-50 uppercase font-black">
              <th className="pb-3">site</th>
              <th className="pb-3">buyer</th>
              <th className="pb-3">amount</th>
              <th className="pb-3">status</th>
            </tr>
          </thead>
          <tbody className="text-sm font-bold">
            <tr className="border-b border-foreground/5">
              <td className="py-4">crypto-saas.com</td>
              <td className="py-4">user@example.com</td>
              <td className="py-4">$1,200</td>
              <td className="py-4 text-green-500">completed</td>
            </tr>
            <tr>
              <td className="py-4">fitness-app.net</td>
              <td className="py-4">buyer2@web.com</td>
              <td className="py-4">$850</td>
              <td className="py-4 text-orange-500">pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}