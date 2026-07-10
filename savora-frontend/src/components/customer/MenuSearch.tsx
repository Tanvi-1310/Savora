import { Search } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

function MenuSearch({ search, setSearch }: Props) {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="relative">

        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search dishes..."
          className="w-full rounded-xl border border-gray-300 py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

      </div>
    </div>
  );
}

export default MenuSearch;