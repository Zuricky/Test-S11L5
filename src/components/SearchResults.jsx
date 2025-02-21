import { useSelector } from "react-redux";
import SongCard from "./SongCard";

const SearchResults = () => {
  const searchResults = useSelector((state) => state.searchResults);

  if (!searchResults || searchResults.length === 0) return null;

  return (
    <div className="col-10">
      <div id="searchResults">
        <h2>Risultati della ricerca</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
          {searchResults.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
