import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 font-mono lowercase">
          <SidebarTrigger />
          <h1 className="font-black italic">webflip control panel</h1>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}