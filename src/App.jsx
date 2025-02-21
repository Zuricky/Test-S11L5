import "./App.css";
import SideBar from "./components/SideBar";
import MusicSection from "./components/MusicSection";
import MusicPlayer from "./components/MusicPlayer";
import SearchResults from "./components/SearchResults";
import TopBar from "./components/TopBar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="container-fluid">
      <div className="row">
        <SideBar />

        <main className="col-12 col-md-9 offset-md-3 mainPage">
          <TopBar />

          <SearchResults />

          <MusicSection title="Rock Classics" query="Rammstein" sectionId="rockSection" />
          <MusicSection title="Pop Culture" query="Ado" sectionId="popSection" />
          <MusicSection title="#HipHop" query="eminem" sectionId="hipHopSection" />
        </main>
      </div>

      <MusicPlayer />
    </Container>
  );
}

export default App;
