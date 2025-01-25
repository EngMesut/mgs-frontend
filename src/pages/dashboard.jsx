import React from "react";
import { User, Users } from "lucide-react";
import StatsCard from "../components/StatsCard";
import FinancialCard from "../components/FinancialCard";

function Dashboard() {
  return (
    <div className="flex-1 space-y-6 p-4 md:p-6">
      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="All Property"
          value="293436"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          href="/property"
          buttonClassName="bg-orange-50 text-orange-600 hover:bg-orange-100 dark:bg-orange-900/50 dark:text-orange-300 dark:hover:bg-orange-900"
        />
        <StatsCard
          title="Owner Property"
          value="8215"
          icon={<User className="h-4 w-4 text-muted-foreground" />}
          href="/property/owner"
          buttonClassName="bg-emerald-50 text-emerald-600 hover:bg-emerald-100 dark:bg-emerald-900/50 dark:text-emerald-300 dark:hover:bg-emerald-900"
        />
        <StatsCard
          title="Property Updated"
          value="59009"
          icon={<User className="h-4 w-4 text-muted-foreground" />}
          href="/property/updated"
          buttonClassName="bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/50 dark:text-red-300 dark:hover:bg-red-900"
        />
        <StatsCard
          title="Posted Property"
          value="50775"
          icon={<User className="h-4 w-4 text-muted-foreground" />}
          href="/property/posted"
          buttonClassName="bg-cyan-50 text-cyan-600 hover:bg-cyan-100 dark:bg-cyan-900/50 dark:text-cyan-300 dark:hover:bg-cyan-900"
        />
      </div>

      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <FinancialCard
          title="Not Posted Property"
          value="8234"
          trend="up"
          trendValue="14%"
        />
        <FinancialCard
          title="Total Posted"
          value="$1877315.86"
          trend="up"
          trendValue="8%"
        />
        <FinancialCard
          title="Total Payment"
          value="$433408.65"
          trend="up"
          trendValue="12%"
        />
        <FinancialCard
          title="Total Current Balance"
          value="$1443907.21"
          trend="up"
          trendValue="10%"
        />
      </div>

      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <FinancialCard title="Total Posted Quarter" value="$1877315.86" />
        <FinancialCard title="Total Quarter Payments" value="$433408.65" />
        <FinancialCard title="Total Posted 2025" value="$1877362.36" />
        <FinancialCard title="Total Payment 2025" value="$433408.65" />
      </div>

    </div>
  );
}

export default Dashboard;
