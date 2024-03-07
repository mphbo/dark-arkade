import React, { useEffect, useState } from "react";
import Visualizer from "./components/Visualizer";
import Navbar from "./components/Navbar";
import styles from "../Landing/page.module.scss";

function Home() {
  const [audio, setAudio] = useState<null | HTMLAudioElement>(null);

  useEffect(() => {
    setAudio(new Audio("/back-to-the-matrix.mp3"));
  }, []);

  useEffect(() => {
    audio?.play();
  }, [audio]);

  return (
    <div className="App">
      <Navbar />
      <div className={styles.main}>
        <Visualizer audioUrl="/back-to-the-matrix.mp3" />
      </div>
    </div>
  );
}

export default Home;
