import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import React from "react";
import { SelectAccount } from "./_components/SelectAccount.component";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page = () => {
  return (
    <div>
      <p className="mb-12 font-semibold text-5xl">Add a Wallet</p>
      <Card>
        <CardHeader />
        <CardContent>
          <Tabs defaultValue="account">
            <TabsList aria-orientation="vertical">
              <TabsTrigger disabled value="account">Account</TabsTrigger>
              <TabsTrigger disabled value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <SelectAccount />
            </TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter />
      </Card>
    </div>
  )
}

export default Page