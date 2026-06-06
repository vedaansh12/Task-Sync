import { LayoutList, Circle, CheckCircle2 } from 'lucide-react';

function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = [
    { name: 'All', icon: LayoutList, color: 'from-gray-700 to-gray-800' },
    { name: 'Active', icon: Circle, color: 'from-purple-600 to-purple-500' },
    { name: 'Completed', icon: CheckCircle2, color: 'from-purple-700 to-purple-600' }
  ];
  
  return (
    <div className="flex gap-3 justify-center flex-wrap">
      {filters.map((filter) => {
        const Icon = filter.icon;
        return (
          <button
            key={filter.name}
            onClick={() => onFilterChange(filter.name)}
            className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 transform flex items-center gap-2
              ${currentFilter === filter.name 
                ? `bg-gradient-to-r ${filter.color} text-white shadow-lg shadow-purple-500/30 scale-105` 
                : 'glass-card text-purple-400 hover:text-purple-300 hover:scale-105'}`}
          >
            <Icon className="w-4 h-4"/>
            {filter.name}
          </button>
        );
      })}
    </div>
  );
}

export default FilterButtons;