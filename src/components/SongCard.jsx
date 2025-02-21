import { useDispatch, useSelector } from "react-redux";
import { setSelectedSong, toggleLikeSong } from "../redux/actions";
import { HeartFill, Heart } from "react-bootstrap-icons";

const SongCard = ({ song }) => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.likedSongs);
  const isLiked = likedSongs[song.id];

  const handleSongClick = () => {
    dispatch(setSelectedSong(song));
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    dispatch(toggleLikeSong(song.id));
  };

  return (
    <div className="col text-center" onClick={handleSongClick} style={{ cursor: "pointer" }}>
      <img className="img-fluid" src={song.album.cover_medium} alt="track" />
      <p>
        Track: &quot;{song.title}&quot;
        <br />
        Artist: {song.artist.name}
      </p>
      <button className="btn btn-link" onClick={handleLikeClick}>
        {isLiked ? <HeartFill color="green" /> : <Heart color="grey" />}
      </button>
    </div>
  );
};

export default SongCard;
