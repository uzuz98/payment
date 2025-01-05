import React from "react";
import { GetStarted } from "./_components/GetStarted.component";
import { Info } from "./_components/Info.component";
import { Transactions } from "./_components/Transactions.component";
import { RecentTransactions } from "./_components/RecentTransactions.component";

const Page = () => {
  return (
    <div>
      <p className="mb-12 font-semibold text-5xl">Dashboard</p>
      <GetStarted />
      <Info />
      <Transactions />
      <RecentTransactions/>
    </div>
  )
}

export default Page