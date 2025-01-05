'use client'
import React from "react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { GroupIcon, Home, Inbox, Search, Settings, WalletIcon } from "lucide-react"
import Link from "next/link"
import { ISidebarItem } from "./types"
import { HeaderSidebar } from "./header-sidebar"
import { usePathname } from "next/navigation"

const items: ISidebarItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon:  Home,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: GroupIcon,
  },
  {
    title: "Accounts",
    url: "/accounts",
    icon: Inbox,
  },
  {
    title: "Events",
    url: "/events",
    icon: Search,
  },
  {
    title: "Wallets",
    url: "/wallets",
    icon: WalletIcon,
  },
]

const items_second: ISidebarItem[] = [
  {
    title: "Configurations",
    url: "configurations",
    icon: Settings
  }
]

const GROUPS = [
  items,
  items_second
]

export const AppSidebar = () => {
  const pathname = usePathname()

  const renderGroup = () => {
    return GROUPS.map((groupItems, index) => {
      return (
        <SidebarGroup key={"group-items-"+ index}>
          <SidebarGroupContent>
            <SidebarMenu>
              {groupItems.map((item) => {
                const isActive = pathname.includes(item.url)

                return (
                  <SidebarMenuItem className="my-2" key={item.title}>
                    <SidebarMenuButton className="" isActive={isActive} asChild>
                      <Link href={item.url}>
                        <item.icon className="text-xl" size={40}/>
                        <span className="text-xl">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      )
    })
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <HeaderSidebar/>
      </SidebarHeader>

      <SidebarContent>
        {renderGroup()}
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroupLabel>Logout</SidebarGroupLabel>
      </SidebarFooter>
    </Sidebar>
  )
}