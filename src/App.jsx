import { useState, useEffect } from "react";

import Location from "./Location";
import Today from "./Today";
import Forecast from "./Forecast";

export default function App() {
  // const [data, setData] = useState(null);
  // const [location, setLocation] = useState("Hamburg");
  // const [timeoutID, setTimeoutID] = useState("");

  // useEffect(() => {
  //   function fetchLocation(location) {
  //     const api_key = "98262674b9d64b5afd8cc0a789919977";
  //     const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&cnt=8&appid=${api_key}`;

  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((actualData) => {
  //         setData(actualData);
  //       });
  //   }

  //   const timeout = setTimeout(() => fetchLocation(location), 1000);

  //   setTimeoutID(timeout);

  //   return () => {
  //     clearTimeout(timeoutID);
  //   };
  // }, [location]);

  // function handleInput(event) {
  //   setLocation(event.target.value);
  // }

  // const forecastDataMap = data?.list?.map((obj, i) => (
  //   <Forecast key={i} obj={obj} />
  // ));

  return (
    <div className="main">
      {/* <Location location={location} handleChange={handleInput} /> */}
      <div className="today-and-forecast">
        {/* <Today /> */}
        <div className="forecast-section">
          <p className="hourlyforecast-heading">Hourly Forecast</p>
        </div>
        <hr className="hr" />
        {/* <div className="forecast-map">{forecastDataMap}</div> */}
      </div>
    </div>
  );
}
