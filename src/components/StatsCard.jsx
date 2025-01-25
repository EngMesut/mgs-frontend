import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { Card } from "./ui/card";

function StatsCard({ title, value, icon, href, className, buttonClassName }) {
  return (
    <Card className="relative overflow-hidden bg-white dark:bg-gray-800">
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </h3>
          {icon}
        </div>
        <div className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
          {value}
        </div>
      </div>
      <Link
        to={href}
        className={cn(
          "flex items-center justify-between border-t p-3 sm:p-4 text-sm font-medium dark:border-gray-700",
          buttonClassName
        )}
      >
        View Details
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </Card>
  );
}

export default StatsCard;
