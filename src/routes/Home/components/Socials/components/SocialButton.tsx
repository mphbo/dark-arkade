import styles from "../socials.module.scss";

interface SocialButtonProps {
  title: string;
  url: string;
  image: string;
  footer: boolean;
}

function SocialButton({ title, url, image, footer }: SocialButtonProps) {
  return (
    <a
      href={url}
      className={footer ? styles.footerListItem : styles.listItem}
      target="_blank"
      rel="noreferrer"
    >
      <img alt={image.split(".")[0]} src={`/${image}`} />
      {!footer && <p>{title}</p>}
    </a>
  );
}

export default SocialButton;
