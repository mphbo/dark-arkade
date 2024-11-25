import styles from "./bio.module.scss";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";

function Bio() {
  return (
    <div className={styles.bio}>
      <div className={styles.container}>
        <ChangeHistoryIcon
          sx={{
            fontSize: 70,
          }}
        />
        <img alt="small logo" src="/logo-small.svg" className={styles.logo} />
        <span className={styles.bioText}>
          Have you ever felt like the world you live in isn't real? Have you
          ever questioned the fabric of this reality? Is it real? Are you real?
          What is reality? <br /> <br /> The Dark Arkade is not a person, it is
          not a being. The Dark Arkade is the walls around us, the floor we
          stand on, the sky above us and the earth below. It is the world we
          live in whether you believe it or not... Welcome to THE DARK ARKADE 🕹
        </span>
      </div>
    </div>
  );
}

export default Bio;
