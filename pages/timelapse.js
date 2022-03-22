import data from "../pages/api/data.json";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";


const Timelapse = () => {
  const [actTemp, setActTemp] = useState(0);
  const [predTemp, setPredTemp] = useState(0);
  const [time, setTime] = useState(0);
  const [src, setSrc] = useState("");
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(0);

  async function update(date, actTemp, predTemp, index) {
    let file = `https://raw.githubusercontent.com/danyelkoca/weather_assets/main/selected_images/${date}.png`;
    let time = date.split("-")[3] + ":" + date.split("-")[4];
    let result = await setTimeout(() => {
      setSrc(file);
      setPredTemp(predTemp);
      setActTemp(actTemp);
      setTime(time);
    }, index * 1000);
  }



  const preloadImage = (src) =>

    new Promise((r) => {
      const image = new Image();
      image.onload = r;
      image.onerror = r;
      image.src = src;
    });



  function loop(data, data_array) {
    data_array.map(async (i, index) => {
      let date = data.time[i];
      let actTemp = Number(data.trues[i]).toFixed(1);
      let predTemp = Number(data.preds[i]).toFixed(1);
      update(date, actTemp, predTemp, index);
    });
  }
  
   
  useEffect(async () => {
  let data_array = Object.keys(data.time).map((k) => Number(k));
  data_array.sort((a, b) => a - b);
    await Promise.all(
      data_array.map(function (i, index) {
        preloadImage(`https://raw.githubusercontent.com/danyelkoca/weather_assets/main/selected_images/${data.time[i]}.png`);
      }
      )
    );

  setLoading(false)
  await loop(data, data_array);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            zIndex: 100,
            background: "white",
            width: "100vw",
            height: "100vh",
            minHeight: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <HashLoader
            color={"#4682B4"}
          />
          <p style={{ marginTop: 20 }}>Loading the best experience for you {` ${loaded}` }</p>
        </div>
      ) : (
        ""
      )}
      {!loading ? (
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
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 100,
              position: "relative",
            }}
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
                <div style={{ fontSize: 72, textAlign: "center" }}>
                  {actTemp}
                </div>
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
                <div style={{ textAlign: "center", fontSize: 72 }}>
                  {predTemp}{" "}
                </div>
              </div>
              {/* </div> */}
            </Grid>
          </Grid>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Timelapse;
