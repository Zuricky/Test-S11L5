import { useEffect, useState } from "react";
import SongCard from "./SongCard";
import { Card } from "react-bootstrap";

const MusicSection = ({ title, query, sectionId }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
        if (response.ok) {
          const { data } = await response.json();
          setSongs(data.slice(0, 4));
        }
      } catch (error) {
        console.error("Errore nel recupero delle canzoni:", error);
      }
    };
    fetchSongs();
  }, [query]);

  return (
    <Card className="col-10 bg-transparent border-0">
      <div id={sectionId}>
        <Card.Title>{title}</Card.Title>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
          {songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default MusicSection;
