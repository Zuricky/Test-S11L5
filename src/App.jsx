import "./App.css";
import SideBar from "./components/SideBar";
import MusicSection from "./components/MusicSection";
import MusicPlayer from "./components/MusicPlayer";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />

        <main className="col-12 col-md-9 offset-md-3 mainPage">
          <SearchResults />

          <MusicSection />
          <MusicSection />
          <MusicSection />
        </main>
      </div>

      <MusicPlayer />
    </div>
  );
}

export default App;
