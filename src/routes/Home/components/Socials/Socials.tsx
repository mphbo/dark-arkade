import styles from "./socials.module.scss";
import SocialButton from "./components/SocialButton";

const socials = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/dark.arkade/",
    image: "instagram.svg",
  },
  {
    title: "Spotify",
    url: "https://open.spotify.com/artist/2HmJ9J0hLsMp81HvQj7B1l?si=ExqUWDjmRSSm-sZ0TKTUtw",
    image: "spotify.svg",
  },
  {
    title: "SoundCloud",
    url: "https://soundcloud.com/dark-arkade",
    image: "soundcloud.svg",
  },
  {
    title: "TikTok",
    url: "https://www.tiktok.com/@dark.arkade",
    image: "tiktok.svg",
  },
];

function Socials({ footer = false }: { footer?: boolean }) {
  const socialButtons = socials.map((social) => (
    <SocialButton {...social} footer={footer} />
  ));

  return (
    <ul className={footer ? styles.footer : styles.list}>{socialButtons}</ul>
  );
}

export default Socials;
