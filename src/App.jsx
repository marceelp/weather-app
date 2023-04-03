import { useState, useEffect } from "react";

import Location from "./Location";
import Today from "./Today";
import Forecast from "./Forecast";

export default function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("Hamburg");
  const [timeoutID, setTimeoutID] = useState("");

  useEffect(() => {
    function fetchLocation(location) {
      const api_key = "98262674b9d64b5afd8cc0a789919977";
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&cnt=8&appid=${api_key}`;

      fetch(url)
        .then((response) => response.json())
        .then((actualData) => {
          setData(actualData);
        });
    }

    setTimeoutID(setTimeout(() => fetchLocation(location), 1000));
    return () => clearTimeout(timeoutID);
  }, [location]);

  function handleInput(event) {
    setLocation(event.target.value);
  }

  const forecastDataMap = data?.list?.map((obj, i) => (
    <Forecast key={i} obj={obj} />
  ));

  return (
    <div className="mx-auto m-10 px-10 py-10 w-16 bg-gradient-to-r from-cyan-500 to-blue-900 opacity-90 backdrop-blur-xl flex flex-col items-center text-white shadow-2xl rounded-lg">
      <Location location={location} handleChange={handleInput} data={data} />
      <div className="w-full">
        <Today data={data} />
        <div className="flex items-center justify-start mt-6">
          <p className="font-light">Hourly Forecast</p>
        </div>
        <hr className="my-2" />
        <div className="flex justify-around items-start pt-1">
          {forecastDataMap}
        </div>
      </div>
    </div>
  );
}
