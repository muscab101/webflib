// components/admin/OrderStats.tsx
"use client"
import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function OrderStats() {
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [orderCount, setOrderCount] = useState(0)

  useEffect(() => {
    const fetchOrders = async () => {
      const querySnapshot = await getDocs(collection(db, "orders"))
      let total = 0
      querySnapshot.forEach((doc) => {
        total += doc.data().amount // Hubi in field-ka "amount" uu jiro
      })
      setTotalRevenue(total)
      setOrderCount(querySnapshot.size)
    }
    fetchOrders()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono lowercase">
      <div className="border-4 border-foreground p-6 bg-primary text-primary-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <p className="text-sm font-bold">total revenue</p>
        <h2 className="text-4xl font-black">${totalRevenue}</h2>
      </div>
      <div className="border-4 border-foreground p-6 bg-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <p className="text-sm font-bold text-muted-foreground">total orders</p>
        <h2 className="text-4xl font-black">{orderCount}</h2>
      </div>
    </div>
  )
}