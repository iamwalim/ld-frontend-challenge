import { useCallback, useEffect, useMemo, useState } from 'react';
import { Search, Heart } from "lucide-react";
import DataTable from '../../../components/DataTable';
import { findMinMaxPower, filterByName, filterByPower } from '../utils/functions';
import { TextInput } from '../../../components/TextInput';
import usePagination from '../../../hooks/usePagination';
import { PokemonService } from '../../../services/pokemon.service';
import { debounce } from '../../../common/helpers';

const TableHeader = ({ data, handleFilterChange }) => {

  const { min, max } = findMinMaxPower(data);

  return (
    <>
      <div className="w-full px-4 py-4 shadow-xl shadow-gray-200/20 rounded-t-md rounded-b-md overflow-y-hidden">
        <div className="flex flex-row gap-2">
          <div className="flex-1">
            <TextInput
              placeholder="Search..."
              name="searchTerm"
              onChange={handleFilterChange}
              icon={<Search size={16} strokeWidth={2.5} className="text-gray-400" />}
            />
          </div>
          <div className="flex-1">
            <TextInput
              placeholder="Power threshold"
              name="threshold"
              onChange={handleFilterChange}
              icon={<Heart size={16} strokeWidth={2.5} className="text-gray-400" />}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6">
          <p className="text-sm">Min power: {min}</p>
          <p className="text-sm">Max power: {max}</p>
        </div>
      </div>
    </>
  )
}

export default function List() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ searchTerm: "", threshold: "" });

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "name" },
    { key: "type", label: "type" },
    { key: "hp", label: "health" },
    { key: "attack", label: "attack" },
    { key: "defense", label: "defense" },
    { key: "special_attack", label: "special_attack" },
    { key: "special_defense", label: "special_defense" },
    { key: "speed", label: "speed" },
    { key: "power", label: "power" },
  ];

  const pokemonService = new PokemonService();

  useEffect(() => {
    pokemonService.getPokemons(setData, setLoading, setError);
  }, []);

  const filteredData = useMemo(() => {
    return (
      data
        ?.filter((data) => filterByName(data, filters.searchTerm))
        ?.filter((data) => filterByPower(data, filters.threshold)) || []
    );
  }, [data, filters.searchTerm, filters.threshold]);

  const pagination = usePagination(filteredData);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    pagination.goToFirstPage();
  };

  const debouncedHandleFilter = useCallback(debounce(handleFilterChange, 300), []);

  return (
    <>
      <div className="overflow-x-auto">
        <div className="md:w-5/6 md:mx-auto my-4">
          <TableHeader handleFilterChange={debouncedHandleFilter} data={pagination?.paginatedData} />
          <DataTable loading={loading} columns={columns} pagination={pagination} error={error} />
        </div>
      </div>
    </>
  );
}