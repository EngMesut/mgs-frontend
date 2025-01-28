import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  Home,
  Building2,
  LineChart,
  CircleDollarSign,
  GitBranch,
  Calculator,
  Users,
  FileText,
  Settings,
  ChevronRight,
  X,
  LogOut,
} from "lucide-react";
import { cn } from "../lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";
import {
  Sidebar as UISidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "./ui/sidebar";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  {
    icon: Building2,
    label: "Property",
    submenu: [
      { label: "Create Property", href: "/property/create" },
      { label: "Manage Property", href: "/property/manage" },
      { label: "Property Care List", href: "/property/care-list" },
      { label: "Property Registered", href: "/property/registered" },
      { label: "List Updated Property", href: "/property/updated" },
      { label: "Pending Property", href: "/property/pending" },
      { label: "Property Daily Report", href: "/property/daily-report" },
    ],
  },
  {
    icon: LineChart,
    label: "Monitoring",
    submenu: [
      { label: "Property Monitoring", href: "/monitoring/property" },
      { label: "Print Invoice", href: "/monitoring/invoice" },
      { label: "Property Daily Report", href: "/monitoring/daily-report" },
      { label: "HUBIN KIREESTE", href: "/monitoring/hubin-kireeste" },
      { label: "HUBIN MILKIILE", href: "/monitoring/hubin-milkiile" },
      { label: "Appointment Report", href: "/monitoring/appointment" },
    ],
  },
  {
    icon: CircleDollarSign,
    label: "Pilling",
    submenu: [
      { label: "Post Property", href: "/pilling/post" },
      { label: "Property Payment", href: "/pilling/payment" },
      { label: "Property Statement", href: "/pilling/statement" },
      { label: "Update Receipt Voucher", href: "/pilling/receipt" },
    ],
  },
  {
    icon: GitBranch,
    label: "Branch/Zone",
    submenu: [
      { label: "Branch Daily Data", href: "/branch/daily-data" },
      { label: "Collector Daily Data", href: "/branch/collector-data" },
      { label: "Create new Branch", href: "/branch/create" },
      { label: "Manage Branch", href: "/branch/manage" },
      { label: "District Report", href: "/branch/district-report" },
      { label: "Manage District", href: "/branch/manage-district" },
      { label: "Create New Zone", href: "/branch/create-zone" },
      { label: "Manage Zones", href: "/branch/manage-zones" },
      { label: "Import Branches", href: "/branch/import" },
      { label: "Import Zones", href: "/branch/import-zones" },
      { label: "Assign User Zones", href: "/branch/assign-zones" },
      { label: "User Zone List", href: "/branch/zone-list" },
      { label: "Assign Supervisor Cashier", href: "/branch/assign-supervisor" },
      { label: "Assign User District", href: "/branch/assign-district" },
    ],
  },
  {
    icon: Calculator,
    label: "Accounting",
    submenu: [
      { label: "Merchant Data", href: "/accounting/merchant" },
      { label: "District Base Target", href: "/accounting/district-target" },
      { label: "Post Dist Other Target", href: "/accounting/post-target" },
      { label: "Expense", href: "/accounting/expense" },
      { label: "Car Fuel", href: "/accounting/car-fuel" },
      { label: "Vendors", href: "/accounting/vendors" },
      { label: "Journal", href: "/accounting/journal" },
      { label: "Post Cashier Transaction", href: "/accounting/cashier" },
      { label: "Chart of Accounts", href: "/accounting/chart" },
      { label: "District Accounts", href: "/accounting/district" },
      { label: "Add Manual Income", href: "/accounting/manual-income" },
      { label: "Add District Income", href: "/accounting/district-income" },
      { label: "Transfer Fund", href: "/accounting/transfer" },
      { label: "Account Statement", href: "/accounting/statement" },
      { label: "Balance Sheet", href: "/accounting/balance" },
    ],
  },
  {
    icon: Users,
    label: "HRM",
    submenu: [
      { label: "Employee List", href: "/hrm/list" },
      { label: "Employee Report", href: "/hrm/report" },
      { label: "Employee Termination", href: "/hrm/termination" },
      { label: "New Employee", href: "/hrm/new" },
      { label: "Import Employee", href: "/hrm/import" },
      { label: "Turubataarlya", href: "/hrm/turubataarlya" },
      { label: "Employee Title", href: "/hrm/title" },
      { label: "Employee Daily Task", href: "/hrm/daily-task" },
      { label: "Collector Salary", href: "/hrm/collector-salary" },
      { label: "Update BM/OP Salary", href: "/hrm/update-salary" },
      { label: "Departments Salary Report", href: "/hrm/department-salary" },
    ],
  },
  {
    icon: FileText,
    label: "Reports",
    submenu: [
      { label: "Monthly Reports", href: "/reports/monthly" },
      { label: "Daily Revenue Report", href: "/reports/daily-revenue" },
      { label: "Revenue Classes Report", href: "/reports/revenue-classes" },
      { label: "Daily Payments Report", href: "/reports/daily-payments" },
      { label: "Daily Printed Report", href: "/reports/daily-printed" },
      { label: "Daily Invoice Report", href: "/reports/daily-invoice" },
      { label: "District Revenue Report", href: "/reports/district-revenue" },
      {
        label: "Collector Summary By District",
        href: "/reports/collector-summary",
      },
      { label: "Payments Report", href: "/reports/payments" },
      { label: "Coll/TT Commission", href: "/reports/commission" },
      { label: "OPD Property Report", href: "/reports/opd-property" },
      { label: "Property Summary", href: "/reports/property-summary" },
    ],
  },
  {
    icon: Settings,
    label: "Admin",
    submenu: [
      { label: "View Users", href: "/admin/users" },
      { label: "Add User", href: "/admin/add-user" },
      { label: "User Access", href: "/admin/access" },
      { label: "Disable/Enable Users", href: "/admin/toggle-users" },
      { label: "Setting", href: "/admin/settings" },
      { label: "Welcoming SMS", href: "/admin/welcome-sms" },
      { label: "SMS Updated Prop", href: "/admin/sms-updated" },
      { label: "SMS Pending Prop", href: "/admin/sms-pending" },
      { label: "Post SMS", href: "/admin/post-sms" },
      { label: "Collector SMS", href: "/admin/collector-sms" },
      { label: "Employees SMS", href: "/admin/employee-sms" },
      { label: "Send Property Balance SMS", href: "/admin/balance-sms" },
      { label: "Transaction Logsheet", href: "/admin/transaction-log" },
    ],
  },
];

function Sidebar({ onClose, searchQuery }) {
  const navigate = useNavigate();
   const { logout} = useAuth();
    const handleLogout = () => {
      logout();
      navigate("/login");
  };
  
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (label) => {
    setOpenItems((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    );
  };

  const filteredMenuItems = useMemo(() => {
    if (!searchQuery) return menuItems;

    const lowercaseQuery = searchQuery.toLowerCase();

    return menuItems
      .map((item) => {
        if (item.submenu) {
          const filteredSubmenu = item.submenu.filter((subItem) =>
            subItem.label.toLowerCase().includes(lowercaseQuery)
          );
          if (
            filteredSubmenu.length > 0 ||
            item.label.toLowerCase().includes(lowercaseQuery)
          ) {
            return { ...item, submenu: filteredSubmenu };
          }
          return null;
        }
        return item.label.toLowerCase().includes(lowercaseQuery) ? item : null;
      })
      .filter(Boolean);
  }, [searchQuery]);

  return (
    <UISidebar className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <SidebarHeader>
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2 ">
            <img src="/img/logo-dark.png" alt="MOF Logo" className="h-8 w-16" />

            <h1 className="text-base font-semibold sm:text-sm text-gray-900 dark:text-white">
              WASAARADA <br /> MAALIYADA JFS.
            </h1>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <nav className="space-y-1">
          {filteredMenuItems.map((item) => (
            <div key={item.label}>
              {item.submenu ? (
                <Collapsible
                  open={openItems.includes(item.label) || searchQuery}
                  onOpenChange={() => toggleItem(item.label)}
                >
                  <CollapsibleTrigger
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      openItems.includes(item.label) || searchQuery
                        ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                    )}
                  >
                    <div className="flex items-center">
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </div>
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        (openItems.includes(item.label) || searchQuery) &&
                          "rotate-90"
                      )}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="ml-6 mt-1 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          to={subitem.href}
                          className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                          onClick={() => onClose?.()}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link
                  to={item.href}
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => onClose?.()}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                  <ChevronRight className="ml-auto h-4 w-4" />
                </Link>
              )}
            </div>
          ))}
        </nav>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-3 py-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={handleLogout}> <LogOut className="mr-2 h-4 w-4" />
            LogOut
          </Button>
          <p className="px-3 py-2 text-xs text-gray-500 dark:text-gray-400">
            © 2025 MOF. All rights reserved.
          </p>
        </div>
      </SidebarFooter>
    </UISidebar>
  );
}

export default Sidebar;
