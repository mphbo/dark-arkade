import { useEffect, useRef, useState } from "react";
import Visualizer from "./components/Visualizer/Visualizer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import styles from "./home.module.scss";
import SoundCloudWidget from "./components/SoundCloudWidget";
import Bio from "./components/Bio/Bio";
import Email from "./components/Email";
import { Container } from "@mui/material";
import Socials from "./components/Socials";
import BottomNavbar from "./components/BottomNavbar";
import { motion } from "framer-motion";
import SideScroll from "./components/SideScroll";

function Home() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const audio = useRef<null | HTMLAudioElement>(null);

  const visualizerRef = useRef<null | HTMLDivElement>(null);
  const bioRef = useRef<null | HTMLDivElement>(null);
  const soundcloudRef = useRef<null | HTMLDivElement>(null);
  const emailRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    audio.current = new Audio("/id-v4.mp3");
  }, []);

  return (
    <div className={styles.page}>
      <Container disableGutters>
        <Navbar refs={{ visualizerRef, bioRef, soundcloudRef, emailRef }} />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <div ref={visualizerRef} className={styles.visualizerSection}>
            <Visualizer audio={audio} />
          </div>
          <div ref={bioRef} className={styles.bioSection}>
            <video className={styles.video} muted autoPlay loop>
              <source src="/cyberdelia-video.mp4" type="video/mp4" />
            </video>
            <Bio />
          </div>
          <div className={styles.socialsSection}>
            <Socials footer={false} />
          </div>
          <div ref={soundcloudRef} className={styles.soundcloudSection}>
            <SoundCloudWidget
              audio={audio}
              pauseMusic={() => setIsPlaying(false)}
            />
          </div>
          <div className={styles.sideScrollSection}>
            <SideScroll />
          </div>
          <div ref={emailRef} className={styles.emailSection}>
            <video className={styles.video} muted autoPlay loop>
              <source src="/visual.mp4" type="video/mp4" />
            </video>
            <Email />
          </div>
          <div ref={emailRef} className={styles.contactSection}>
            <Contact />
          </div>
        </motion.main>
        <BottomNavbar
          audio={audio}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </Container>
    </div>
  );
}

export default Home;
