import React, { useState, useMemo } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, X, SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

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

interface SearchAndFilterProps {
  motorcycles: Motorcycle[];
  onFilteredResults: (filtered: Motorcycle[]) => void;
}

const SearchAndFilter = ({ motorcycles, onFilteredResults }: SearchAndFilterProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [brandFilter, setBrandFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [kmFilter, setKmFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Extract unique brands
  const brands = useMemo(() => {
    const brandSet = new Set(
      motorcycles.map(moto => moto.name.split(' ')[0].toLowerCase())
    );
    return Array.from(brandSet);
  }, [motorcycles]);

  const filteredMotorcycles = useMemo(() => {
    let filtered = motorcycles;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(moto =>
        moto.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Brand filter
    if (brandFilter !== 'all') {
      filtered = filtered.filter(moto =>
        moto.name.toLowerCase().startsWith(brandFilter.toLowerCase())
      );
    }

    // Price filter
    if (priceFilter !== 'all') {
      filtered = filtered.filter(moto => {
        const price = parseFloat(moto.price.replace(/\./g, '').replace(',', '.'));
        switch (priceFilter) {
          case 'low': return price < 15000;
          case 'medium': return price >= 15000 && price < 20000;
          case 'high': return price >= 20000;
          default: return true;
        }
      });
    }

    // KM filter
    if (kmFilter !== 'all') {
      filtered = filtered.filter(moto => {
        const km = parseInt(moto.km.replace(/\./g, ''));
        switch (kmFilter) {
          case 'low': return km < 15000;
          case 'medium': return km >= 15000 && km < 30000;
          case 'high': return km >= 30000;
          default: return true;
        }
      });
    }

    return filtered;
  }, [motorcycles, searchTerm, brandFilter, priceFilter, kmFilter]);

  React.useEffect(() => {
    onFilteredResults(filteredMotorcycles);
  }, [filteredMotorcycles, onFilteredResults]);

  const clearFilters = () => {
    setSearchTerm('');
    setBrandFilter('all');
    setPriceFilter('all');
    setKmFilter('all');
  };

  const activeFiltersCount = [brandFilter, priceFilter, kmFilter].filter(f => f !== 'all').length;

  const FilterContent = () => (
    <div className="space-y-4">
      {/* Brand Filter */}
      <div>
        <label className="text-sm font-medium mb-2 block">Marca</label>
        <Select value={brandFilter} onValueChange={setBrandFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Todas as marcas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as marcas</SelectItem>
            {brands.map(brand => (
              <SelectItem key={brand} value={brand}>
                {brand.charAt(0).toUpperCase() + brand.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Filter */}
      <div>
        <label className="text-sm font-medium mb-2 block">Faixa de Preço</label>
        <Select value={priceFilter} onValueChange={setPriceFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Todos os preços" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os preços</SelectItem>
            <SelectItem value="low">Até R$ 15.000</SelectItem>
            <SelectItem value="medium">R$ 15.000 - R$ 20.000</SelectItem>
            <SelectItem value="high">Acima de R$ 20.000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* KM Filter */}
      <div>
        <label className="text-sm font-medium mb-2 block">Quilometragem</label>
        <Select value={kmFilter} onValueChange={setKmFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Todas as quilometragens" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as quilometragens</SelectItem>
            <SelectItem value="low">Até 15.000 KM</SelectItem>
            <SelectItem value="medium">15.000 - 30.000 KM</SelectItem>
            <SelectItem value="high">Acima de 30.000 KM</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {(activeFiltersCount > 0 || searchTerm) && (
        <Button 
          onClick={clearFilters} 
          variant="outline" 
          className="w-full"
        >
          <X className="w-4 h-4 mr-2" />
          Limpar Filtros
        </Button>
      )}
    </div>
  );

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

        {/* Desktop Filters */}
        <div className="hidden md:flex gap-2">
          <Select value={brandFilter} onValueChange={setBrandFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Marca" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              {brands.map(brand => (
                <SelectItem key={brand} value={brand}>
                  {brand.charAt(0).toUpperCase() + brand.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={priceFilter} onValueChange={setPriceFilter}>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Preço" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="low">Até R$ 15k</SelectItem>
              <SelectItem value="medium">R$ 15k - 20k</SelectItem>
              <SelectItem value="high">Acima R$ 20k</SelectItem>
            </SelectContent>
          </Select>

          <Select value={kmFilter} onValueChange={setKmFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="KM" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="low">Até 15k</SelectItem>
              <SelectItem value="medium">15k - 30k</SelectItem>
              <SelectItem value="high">Acima 30k</SelectItem>
            </SelectContent>
          </Select>

          {(activeFiltersCount > 0 || searchTerm) && (
            <Button onClick={clearFilters} variant="outline" size="icon">
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Mobile Filter Button */}
        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden relative">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filtros
              {activeFiltersCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle>Filtros de Busca</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Active Filters Display */}
      {(activeFiltersCount > 0 || searchTerm) && (
        <div className="flex flex-wrap gap-2 mt-4">
          {searchTerm && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Busca: "{searchTerm}"
              <button 
                onClick={() => setSearchTerm('')}
                className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
          {brandFilter !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {brandFilter.charAt(0).toUpperCase() + brandFilter.slice(1)}
              <button 
                onClick={() => setBrandFilter('all')}
                className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
          {priceFilter !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {priceFilter === 'low' ? 'Até R$ 15k' : 
               priceFilter === 'medium' ? 'R$ 15k-20k' : 'Acima R$ 20k'}
              <button 
                onClick={() => setPriceFilter('all')}
                className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
          {kmFilter !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {kmFilter === 'low' ? 'Até 15k KM' : 
               kmFilter === 'medium' ? '15k-30k KM' : 'Acima 30k KM'}
              <button 
                onClick={() => setKmFilter('all')}
                className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
        </div>
      )}

      {/* Results Counter */}
      <div className="mt-4 text-sm text-muted-foreground">
        {filteredMotorcycles.length} {filteredMotorcycles.length === 1 ? 'moto encontrada' : 'motos encontradas'}
        {(searchTerm || activeFiltersCount > 0) && (
          <span> de {motorcycles.length} total</span>
        )}
      </div>
    </div>
  );
};

export default SearchAndFilter;