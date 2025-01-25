import * as React from "react";
import { cn } from "../../lib/utils";

const Sidebar = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-screen flex-col border-r bg-background", className)}
    {...props}
  />
));
Sidebar.displayName = "Sidebar";

const SidebarHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-14 items-center border-b px-4", className)}
    {...props}
  />
));
SidebarHeader.displayName = "SidebarHeader";

const SidebarContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-auto py-2", className)}
    {...props}
  />
));
SidebarContent.displayName = "SidebarContent";

const SidebarFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center border-t p-4", className)}
    {...props}
  />
));
SidebarFooter.displayName = "SidebarFooter";

export { Sidebar, SidebarHeader, SidebarContent, SidebarFooter };
