import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
  iconColor: string;
}

export default function StatCard({ title, value, change, isPositive, icon: Icon, iconColor }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
          <p className={`text-sm mt-2 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? '↑' : '↓'} {change}
          </p>
        </div>
        <div className={`p-3 ${iconColor} bg-opacity-10 rounded-lg`}>
          <Icon className={`h-6 w-6 ${iconColor.replace('bg-', 'text-')}`} />
        </div>
      </div>
    </div>
  );
}
