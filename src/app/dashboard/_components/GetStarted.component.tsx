import { BluetoothConnectedIcon, HomeIcon, WalletIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";

const GET_STARTED_ITEMS = [
  {
    title: 'Link an External Wallet',
    desc: 'Connect a self hosted wallet to enable payments.',
    btn: 'Link',
    icon: WalletIcon,
    key: 'link-wallet'
  },
  {
    title: 'Create a Payment Wall',
    desc: 'Create a payment wall to collect payments.',
    btn: 'Create',
    icon: HomeIcon,
    key: 'payment-wall'
  },
  {
    title: 'Link an External Wallet',
    desc: 'Generate an API key to securely access the API.',
    btn: 'Create',
    icon: BluetoothConnectedIcon,
    key: 'api-key'
  }
]

export const GetStarted = () => {
  const renderGetStartedItems = () => {
    return GET_STARTED_ITEMS.map((item) => {
      return (
        <Card key={item.key}>
          <CardContent className="!p-6 max-w-96">
            <div className="flex items-center gap-x-4">
              <item.icon size={40}/>
              <div className="flex flex-col flex-start gap-y-4">
                <p className="font-semibold">{item.title}</p>
                <p>{item.desc}</p>
                <div>
                  <Button variant="outline">
                    {item.btn}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )
    })
  }

  return (
    <div id="dashboard-get-started" className="mb-8">
      <p className="font-semibold text-4xl mb-8">Get Started</p>
      <div className="flex justify-between gap-8 flex-wrap">
        {renderGetStartedItems()}
      </div>
    </div>
  )
}
