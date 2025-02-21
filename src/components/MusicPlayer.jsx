import { useSelector } from "react-redux";
import shuffle from "../assets/img/shuffle.png";
import prev from "../assets/img/prev.png";
import play from "../assets/img/play.png";
import next from "../assets/img/next.png";
import repeat from "../assets/img/repeat.png";

const MusicPlayer = () => {
  const selectedSong = useSelector((state) => state.selectedSong);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row">
        <div className="col-lg-10 offset-lg-2">
          {selectedSong ? (
            <div>
              <p>
                Now Playing: {selectedSong.title} - {selectedSong.artist.name}
              </p>
            </div>
          ) : (
            <p>Seleziona una canzone per riprodurre</p>
          )}
          <div className="row flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
