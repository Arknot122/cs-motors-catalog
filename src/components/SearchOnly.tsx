import React, { useState, useMemo, useCallback } from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";

interface Motorcycle {
  id: number;
  name: string;
  km: string;
  price: string;
  installment12: string;
  installment18: string;
  image: string;
  whatsappText: string;
}

interface SearchOnlyProps {
  motorcycles: Motorcycle[];
  onFilteredResults: (filtered: Motorcycle[]) => void;
}

const SearchOnly = ({ motorcycles, onFilteredResults }: SearchOnlyProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Debounce search term to reduce processing
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredMotorcycles = useMemo(() => {
    let filtered = motorcycles;

    // Search filter only
    if (debouncedSearchTerm) {
      filtered = filtered.filter(moto =>
        moto.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [motorcycles, debouncedSearchTerm]);

  // Memoize the callback to prevent infinite re-renders
  const handleFilteredResults = useCallback(() => {
    onFilteredResults(filteredMotorcycles);
  }, [filteredMotorcycles, onFilteredResults]);

  React.useEffect(() => {
    handleFilteredResults();
  }, [handleFilteredResults]);

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Buscar motos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Results Counter */}
      <div className="mt-4 text-sm text-muted-foreground">
        {filteredMotorcycles.length} {filteredMotorcycles.length === 1 ? 'moto encontrada' : 'motos encontradas'}
        {debouncedSearchTerm && (
          <span> de {motorcycles.length} total</span>
        )}
      </div>
    </div>
  );
};

export default SearchOnly;