export default function Forecast(props) {
  return (
    <div className="forecast-wrapper">
      <div className="forecast">
        <p>
          {/* {props.time} */}
          Time
        </p>
        <img
          //   src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
          src={`https://openweathermap.org/img/wn/02d@2x.png`}
          alt="Current Weather Icon"
          className="little-images"
        />
        <p>
          {/* {props.temp} */}
          Temp
        </p>
      </div>
    </div>
  );
}
