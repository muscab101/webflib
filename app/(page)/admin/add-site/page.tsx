// app/admin/add-site/page.tsx
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function AddSite() {
  return (
    <div className="max-w-2xl border-2 border-foreground p-8 bg-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <h2 className="text-2xl font-black mb-8 italic uppercase tracking-tighter">list new digital asset</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-black uppercase">website name</label>
          <Input className="rounded-none border-2 border-foreground h-12" placeholder="e.g. Portfolio Builder" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase">price ($)</label>
            <Input type="number" className="rounded-none border-2 border-foreground h-12" placeholder="99" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase">category</label>
            <select className="w-full h-12 border-2 border-foreground bg-background px-3 outline-none">
              <option>saas</option>
              <option>ecommerce</option>
              <option>blog</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase">description</label>
          <Textarea className="rounded-none border-2 border-foreground min-h-[120px]" placeholder="write about the tech stack, traffic, revenue..." />
        </div>

        <Button className="w-full rounded-none h-14 text-xl font-black uppercase border-2 border-foreground hover:bg-primary transition-all">
          publish to marketplace
        </Button>
      </div>
    </div>
  )
}