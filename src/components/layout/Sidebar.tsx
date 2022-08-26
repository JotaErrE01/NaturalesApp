import { useState } from "react";
import { Drawer } from "@mui/material";
import { SidebarItems } from './';

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  

  return (
    <div className="font-bold text-white lg:min-w-[18.5rem]">

      <i
        onClick={() => setShowSidebar(!showSidebar)}
        className="fas fa-bars text-orange-500 text-2xl ml-5 mt-5 absolute lg:hidden"
      ></i>

      <SidebarItems className="hidden lg:block max-h-screen overflow-y-auto" />

      <Drawer
        open={showSidebar}
        onClose={() => setShowSidebar(false)}
        sx={{ color: "white" }}
        className="lg:hidden"
      >
        <SidebarItems />
      </Drawer>
    </div>
  )
};
