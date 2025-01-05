import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

const INFO_ITEMS = [
  {
    title: "Transactions",
    totalValue: 0,
    todayValue: 0
  },
  {
    title: "Paying Users",
    totalValue: 0,
    todayValue: 0
  },
  {
    title: "Returning Buyers",
    totalValue: 0,
    todayValue: 0
  },
  {
    title: "Refunds",
    totalValue: 0,
    todayValue: 0,
    isLast: true
  }
]

export const Info = () => {
  const renderInfoItems = () => {
    return INFO_ITEMS.map((item) => {
      return (
        <>
          <div key={item.title} className="flex h-full justify-between items-center gap-x-8">
            <div className="flex h-full flex-col justify-between gap-y-2">
              <p className="text-4xl font-semibold">{item.title}</p>
              <p className="text-4xl font-semibold">{item.totalValue}</p>
              {/* <p>{item.todayValue} today</p> */}
            </div>
          </div>
          {!item.isLast && <Separator color="#000" orientation="vertical" />}
          
        </>
      )
    })
  }
  
  return (
    <div id="dashboard-info">
      <Card>
        <CardHeader/>
        <CardContent>
          <div className="flex h-28 justify-between items-center">
            {renderInfoItems()}
          </div>
        </CardContent>
        <CardFooter/>
      </Card>
    </div>
  )
}