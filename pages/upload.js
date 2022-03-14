import { useRef, useState } from "react";
import styles from "../styles/Upload.module.css";
import * as tf from "@tensorflow/tfjs";
import Grid from "@mui/material/Grid";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState("./sample.jpg");
  const fileInputRef = useRef();
  const [predTemp, setPredTemp] = useState(16.26);

  async function handleChange(event) {
    // do something with event data
    let file = event.target.files[0];
    file = URL.createObjectURL(file);
    const model = await tf.loadLayersModel(
      "https://raw.githubusercontent.com/danyelkoca/weather_assets/main/model.json"
    );
    const im = new Image();
    im.src = file;
    im.setAttribute("crossOrigin", "anonymous");
    im.onload = async () => {
      // let a = tf.browser.fromPixels(im);
      let a = tf.browser
        .fromPixels(im)
        .resizeBilinear([192, 108])
        .div(tf.scalar(255));
      a = a.reshape([1, ...a.shape]);
      let prediction = await model.predict(a).data();
      prediction = Number(prediction).toFixed(2);
      setSelectedImage(file);
      setPredTemp(prediction);
    };
  }

  return (
    <>
      <img
        className={styles.img}
        src="https://raw.githubusercontent.com/danyelkoca/weather_assets/main/selected_images/2022-03-04-12-45-03.png"
      ></img>
      <div className={styles.container}>
        <div className={styles.grid}>
          <Grid container>
            <Grid
              item
              xs={12}
              style={{
                marginBottom: 20,
                paddingBottom: 20,
                borderBottom: "1px solid rgba(12,12,12,0.2)",
              }}
            >
              <p style={{ marginBottom: "5px" }}>
                Using the developed model, you can predict the temperature of a
                landscape image, right on the browser!
              </p>
              <p>
                Provided image will be handled on the browser and won't be saved
                anywhere.
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: 20,
                }}
              >
                <img
                  alt="not found"
                  className={styles.uploadedImage}
                  src={selectedImage}
                />
                <p
                  className={styles.button}
                  onClick={() => fileInputRef.current.click()}
                >
                  Upload
                  <input
                    onChange={handleChange}
                    multiple={false}
                    ref={fileInputRef}
                    type="file"
                    hidden
                  />
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div
                style={{
                  height: "100%",
                  marginLeft: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: 20,
                }}
              >
                <DeviceThermostatIcon
                  className={styles.thermostat}
                  style={{ fontSize: 72, marginBottom: 10 }}
                />
                <p style={{ fontSize: 24 }}>
                  Predicted temperature:{" "}
                  <span style={{ fontSize: 48 }}>{predTemp}</span>
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Upload;
