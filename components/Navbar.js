import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.home}>
          <DeviceThermostatIcon style={{ fontSize: 24 }} />
          Home | Weather Prediction
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
