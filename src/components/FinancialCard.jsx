import React from "react";
import { ArrowUp } from "lucide-react";
import { Card } from "./ui/card";

function FinancialCard({ title, value, trend, trendValue }) {
  return (
    <Card className="p-4 sm:p-6 bg-white dark:bg-gray-800">
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </h3>
        {trend && (
          <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
            <ArrowUp className="h-3 w-3" />
            {trendValue}
          </div>
        )}
      </div>
      <div className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
        {value}
      </div>
    </Card>
  );
}

export default FinancialCard;
