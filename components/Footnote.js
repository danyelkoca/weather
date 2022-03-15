import styles from "../styles/Footnote.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import LanguageIcon from '@mui/icons-material/Language';

const Footnote = () => {
  return (
    <div className={styles.footnote}>
      Made with{" "}
      <span
        style={{
          color: "transparent",
          textShadow: "0 0 0 white",
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        ❤️
      </span>
      in Tokyo
      <p
        style={{
          margin: "0px 15px",
          fontWeight: "bold",
          color: "rgba(100,100,100,0.5)",
        }}
      >
        |
      </p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ textAlign: "center" }}>
                    <Link
            href="https://danyelkoca.github.io/home/"
            target="_blank"
            style={{ marginRight: 15 }}
          >
            <IconButton aria-label="Website" style={{ padding: 0 }}>
              <LanguageIcon style={{ fill: "white" }} />
            </IconButton>
          </Link>
          <Link
            href="https://www.linkedin.com/in/danyelkoca"
            target="_blank"
            style={{ marginRight: 15 }}
          >
            <IconButton aria-label="LinkedIn" style={{ padding: 0 }}>
              <LinkedInIcon style={{ fill: "white" }} />
            </IconButton>
          </Link>
          <Link
            href="https://github.com/danyelkoca"
            target="_blank"
            style={{ marginRight: 15 }}
          >
            <IconButton aria-label="GitHub" style={{ padding: 0 }}>
              <GitHubIcon style={{ fill: "white" }} />
            </IconButton>
          </Link>
          <Link
            href="https://www.facebook.com/danyelkoca/"
            target="_blank"
            style={{ marginRight: 15 }}
          >
            <IconButton aria-label="Facebook" style={{ padding: 0 }}>
              <FacebookIcon style={{ fill: "white" }} />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footnote;
