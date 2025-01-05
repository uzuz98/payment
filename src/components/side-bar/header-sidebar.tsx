import { SidebarGroup, SidebarMenu, SidebarMenuButton } from "../ui/sidebar"

export const HeaderSidebar = () => {
  return (
    <SidebarMenu>
      <SidebarGroup>
        <SidebarMenuButton className="!py-8">
          <div className="flex my-4 flex-col w-full justify-between items-center text-center">
            <p>Welcome</p>
            <p>email@example.com</p>
          </div>
        </SidebarMenuButton>
      </SidebarGroup>
      
      <SidebarGroup>
          <SidebarMenuButton>
          Payment App
        </SidebarMenuButton>
      </SidebarGroup>
    </SidebarMenu>
  )
}