import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useApp } from '../context/AppContext';

export interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { navigate } = useApp();

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 font-medium">
        <li>
          <button
            onClick={() => navigate('/inicio')}
            className="flex items-center gap-1 hover:text-emerald-700 transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Inicio</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              {isLast || !item.url ? (
                <span className="text-slate-800 font-bold truncate max-w-[200px] sm:max-w-md">
                  {item.name}
                </span>
              ) : (
                <button
                  onClick={() => navigate(item.url!)}
                  className="hover:text-emerald-700 transition-colors cursor-pointer truncate max-w-[150px] sm:max-w-xs"
                >
                  {item.name}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
