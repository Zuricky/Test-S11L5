import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchResults } from "../redux/actions";

const SideBar = () => {
  const [artist, setArtist] = useState("");
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setSearchResults(data));
      } else {
        console.error("Errore nella fetch dei risultati");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  return (
    <aside className="col col-2">
      <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <a className="navbar-brand" href="#">
            <img src="assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </a>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input type="text" className="form-control" placeholder="Search" value={artist} onChange={(e) => setArtist(e.target.value)} />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary btn-sm h-100" onClick={handleSearch}>
                        GO
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <br />
          <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
