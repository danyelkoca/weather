import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const [hover, setHover] = useState([false, false, false]);

  return (
    <>
      <div className={styles.main}>
        <div
          className={`${styles.panel} ${styles.left} ${
            hover[0] ? styles.hoveredPanel : ""
          }`}
        >
          <img
            alt="Rainbow bridge"
            src="https://raw.githubusercontent.com/danyelkoca/weather_assets/main/selected_images/2022-03-04-16-46-50.png"
          ></img>

          <a
            href="https://danyelkoca.github.io/home/"
            target="_blank"
            rel="noreferrer"
          >
            <p
              className={`${hover[0] ? styles.hoveredP : ""}`}
              onMouseEnter={() => setHover([true, false, false])}
              onMouseLeave={() => setHover([false, false, false])}
            >
              Read the article
            </p>
          </a>
        </div>
        <div
          className={`${styles.panel} ${styles.mid} ${
            hover[1] ? styles.hoveredPanel : ""
          }`}
        >
          <img
            alt="Rainbow bridge"
            src="https://raw.githubusercontent.com/danyelkoca/weather_assets/main/selected_images/2022-03-04-06-50-30.png"
          ></img>
          <Link href="/upload">
            <a>
              <p
                className={`${hover[2] ? styles.hoveredP : ""}`}
                onMouseEnter={() => setHover([false, true, false])}
                onMouseLeave={() => setHover([false, false, false])}
              >
                Test the model
              </p>
            </a>
          </Link>
        </div>
        <div
          className={`${styles.panel} ${styles.right} ${
            hover[2] ? styles.hoveredPanel : ""
          }`}
        >
          <img
            alt="Rainbow bridge"
            src="https://raw.githubusercontent.com/danyelkoca/weather_assets/main/selected_images/2022-03-03-17-52-15.png"
          ></img>
          <Link href="/timelapse">
            <a>
              <p
                className={`${hover[2] ? styles.hoveredP : ""}`}
                onMouseEnter={() => setHover([false, false, true])}
                onMouseLeave={() => setHover([false, false, false])}
              >
                Watch the timelapse
              </p>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
