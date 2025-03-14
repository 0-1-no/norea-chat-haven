
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type SearchInputProps = {
  onSearch?: (query: string) => void;
  className?: string;
  placeholder?: string;
};

export const SearchInput: React.FC<SearchInputProps> = ({ 
  onSearch, 
  className,
  placeholder = "Søk..."
}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const handleClear = () => {
    setQuery("");
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <div className={cn(
      "flex items-center border border-input rounded-md bg-background",
      "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
      className
    )}>
      <div className="flex-shrink-0 pl-3">
        <Search className="h-4 w-4 text-muted-foreground" />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="flex-1 border-0 bg-transparent py-2 px-3 text-sm outline-none"
      />
      {query && (
        <button 
          onClick={handleClear}
          className="flex-shrink-0 pr-3 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};
