import { useState, useEffect } from "react";

import Location from "./components/Location";
import Today from "./components/Today";
import Forecast from "./components/Forecast";

export default function App() {
  const [timeoutID, setTimeoutID] = useState("");
  const [location, setLocation] = useState("Hamburg");
  const [data, setData] = useState({
    list: [{ main: {}, weather: [] }],
    city: {},
  });

  const { city, list } = data ?? "";
  const { name, country, sunrise, sunset } = city ?? "";
  const { description, icon } = list?.[0]?.weather?.[0] ?? "";
  const { temp, feels_like, humidity, temp_max, temp_min } =
    list?.[0]?.main ?? "";

  useEffect(() => {
    function fetchLocation(location) {
      const api_key = "98262674b9d64b5afd8cc0a789919977";
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&cnt=8&appid=${api_key}`;

      fetch(url)
        .then((response) => response.json())
        .then((actualData) => {
          setData(actualData);
          console.log(actualData);
        });
    }

    clearTimeout(timeoutID);
    setTimeoutID(setTimeout(() => fetchLocation(location), 1000));
  }, [location]);

  const forecastMap = [1, 2, 3, 4, 5].map((key, i) => {
    const { dt_txt, weather, main } = list?.[i] ?? {};
    if (!dt_txt || !weather || !main) return null;

    const { icon } = weather?.[0] ?? { icon: "02d" };
    const { temp } = main ?? "";

    const timeString = dt_txt ? dt_txt.split(" ")[1] : "";
    const [hrs, mins] = timeString ? timeString.split(":").slice(0, 2) : [""];
    const time = `${hrs}:${mins}` ?? "";

    return (
      <Forecast
        key={i}
        time={time ?? "- -"}
        icon={icon ?? "02d"}
        temp={temp ? Math.round(temp) + "°" : ""}
      />
    );
  });

  return (
    <div className="main mx-auto m-10 px-10 py-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-900 opacity-90 backdrop-blur-xl flex flex-col items-center text-white shadow-2xl">
      <Location
        location={location}
        handleChange={(event) => setLocation(event.target.value)}
        city={name ?? null}
        country={country ?? null}
      />
      <div className="w-full">
        <Today
          description={description ?? null}
          temperature={temp ? Math.round(temp) + "°" : null}
          humidity={humidity ? humidity + "%" : null}
          feel={feels_like ? Math.round(feels_like) + "°" : null}
          high={temp_max ? Math.round(temp_max) + "°" : null}
          low={temp_min ? Math.round(temp_min) + "°" : null}
          rise={sunrise ?? null}
          set={sunset ?? null}
          icon={icon ?? "02d"}
        />
        <div className="flex items-center justify-start mt-6">
          <p className="font-light">Hourly Forecast</p>
        </div>
        <hr className="my-2" />
        <div className="flex justify-around items-start pt-1">
          {forecastMap}
        </div>
      </div>
    </div>
  );
}
