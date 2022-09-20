import React from "react";
import { useGetWeatherForecastQuery } from "./weatherSlice";

interface IWeatherData {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string
}

const Weather = () => {
  const { data, isLoading, isError } = useGetWeatherForecastQuery<{data:IWeatherData[];isLoading:boolean;isError:boolean}>('');
  const getImageForFun = (summary: string) => {
    switch (summary) {
      case "Scorching": {
        return "https://img.freepik.com/premium-vector/scorching-sun-summer-simple-ray-outline-illustration-image-isolated-white-background_81894-5754.jpg?w=2000";
      }
      case "Warm": {
        return "https://c8.alamy.com/comp/JH9AX9/temperature-icon-clip-art-narrow-range-mercury-thermometer-shows-warm-JH9AX9.jpg";
      }
      case "Cool": {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem-extra-cool.svg/2048px-Emblem-extra-cool.svg.png";
      }
      case "Balmy": {
        return "https://static.lsm.lv/media/2016/02/large/0/5a1t.jpg";
      }
      case "Mild": {
        return "https://www.independent.ie/news/92cd8/41584538.ece/AUTOCROP/w1240h700/p8sun.jpg";
      }
      case "Chilly": {
        return "https://banner2.cleanpng.com/20200510/jbb/transparent-cartoon-cold-snow-common-cold-weather-5eb7bd6ddacf98.6891192315890998858963.jpg";
      }
      default: {
        return "https://rightweather.com/wp-content/uploads/2018/07/14-km-EPS-Global-undefined-undefined-360.png";
      }
    }
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr",
        gap: "2px 2px",
        gridTemplateAreas: ". . . .",
      }}
    >
      {!isLoading &&
        !isError &&
        data.map((w: any) => (
          <div
            style={{
              padding: "2px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
            key={w.date}
          >
            <img
              src={getImageForFun(w.summary)}
              width={100}
              height={100}
              alt={w.summary}
            />
            <div>{w.summary}</div>
            <div>{w.temperatureC}</div>
            <div>
              {new Date(w.date).toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Weather;