import React, { useEffect, useState } from "react";
import PodcastContainer from "./Components/PodcastContainer";
import { openModal, setupModalListeners } from "./Modal.js";
import "./index.css";

function App() {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/")
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        setPodcasts(data);
      })
      .catch((err) => console.error("Failed to fetch podcasts:", err));
  }, []);

  useEffect(() => {
    setupModalListeners();
  }, []);

  return (
    <div>
      <header className="app-header">
        <h1>🎙️ Podcast App</h1>
      </header>
      <PodcastContainer podcasts={podcasts} onSelect={openModal} />
    </div>
  );
}

export default App;
