import data from "../pages/api/data.json";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";

const Timelapse = () => {
  const [actTemp, setActTemp] = useState(0);
  const [predTemp, setPredTemp] = useState(0);
  const [time, setTime] = useState(0);
  const [src, setSrc] = useState("");

  async function update(date, actTemp, predTemp, index) {
    let file = `https://raw.githubusercontent.com/danyelkoca/weather_assets/main/selected_images/${date}.png`;
    setTimeout(async function () {
      const im = new Image();
      im.src = file;
      im.setAttribute("crossOrigin", "anonymous");
      im.onload = async () => {
        setSrc(file);
        setPredTemp(predTemp);
        setActTemp(actTemp);
        let time = date.split("-")[3] + ":" + date.split("-")[4];
        setTime(time);
      };
    }, index * 1000);
  }

  useEffect(() => {
    let data_array = Object.keys(data.time).map((k) => Number(k));
    data_array.sort((a, b) => a - b);
    data_array.map(async (i, index) => {
      let date = data.time[i];
      let actTemp = Number(data.trues[i]).toFixed(1);
      let predTemp = Number(data.preds[i]).toFixed(1);

      update(date, actTemp, predTemp, index);
    });
  }, []);
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          lef: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <img
          alt="Rainbow bridge"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          src={src}
        ></img>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", paddingTop: 100 }}
      >
        <div
          style={{
            fontSize: 24,
            textAlign: "center",
            padding: "10px 20px",
            boxShadow: "0px 0px 10px 0.5px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              fontSize: 16,
            }}
          >
            Time
          </div>
          <div
            style={{
              fontSize: 36,
            }}
          >
            {time}
          </div>
        </div>
        {/* </div> */}
      </div>
      <Grid container style={{ padding: "100px 0px" }}>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <div
            style={{
              padding: "10px 20px",
              boxShadow: "0px 0px 10px 0.5px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
            }}
          >
            <div style={{ fontSize: 24, textAlign: "center" }}>
              Actual Temperature (°C)
            </div>
            <div style={{ fontSize: 72, textAlign: "center" }}>{actTemp}</div>
          </div>
          {/* </div> */}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <div
            style={{
              padding: "10px 20px",
              boxShadow: "0px 0px 10px 0.5px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
            }}
          >
            <div style={{ fontSize: 24, textAlign: "center" }}>
              Predicted Temperature (°C)
            </div>
            <div style={{ textAlign: "center", fontSize: 72 }}>{predTemp} </div>
          </div>
          {/* </div> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Timelapse;
