import React from "react";
import { useGetWeatherForecastQuery } from "./weatherSlice";

const Weather = () => {
  // @ts-ignore
  const { data, isLoading, isError } = useGetWeatherForecastQuery();
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr",
        gap: "2px 2px",
        gridTemplateAreas: ". . . . .",
      }}
    >
      {!isLoading &&
        !isError &&
        data?.results &&
        data.results.map((p: any) => (
          <div
            style={{
              padding: "2px",
            }}
            key={p.url}
          >
            {p.name}
            {/*<img src={p.sprites.front_default} />*/}
          </div>
        ))}
    </div>
  );
};

export default Weather;
