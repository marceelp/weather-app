export default function Forecast(props) {
  return (
    <div className="flex flex-row items-center justify-between text-white w-10 mx-2">
      <div className="flex flex-col items-center justify-center font-light text-sm">
        <p>{props.time}</p>
        <img
          src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt="Current Weather Icon"
          className="w-12 my-1"
        />
        <p>{props.temp}</p>
      </div>
    </div>
  );
}
