import feel from "../assets/feel.png";
import humidity from "../assets/humidity.png";
import rise from "../assets/sunrise.png";
import set from "../assets/sunset.png";

export default function Today(props) {
  const timestampArray = [props.rise, props.set];
  let [sunrise, sunset] = [];

  timestampArray.forEach((timestamp, index) => {
    const date = new Date(timestamp * 1000);
    const timeString = date.toLocaleTimeString("en-GB", { timeStyle: "short" });
    if (index === 0) sunrise = timeString;
    else sunset = timeString;
  });

  return (
    <section>
      <div className="flex justify-center mt-6 mb-10">
        <p className="text-cyan-300 capitalize">{props.description}</p>
      </div>

      <div className="flex items-center justify-between font-extralight my-20">
        <img
          src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt="Current Weather Icon"
        />

        <p className="text-8xl font-normal">{props.temperature}</p>

        <div className="text-sm">
          <div className="flex items-center justify-center mb-2 px-3 py-1  rounded-full bg-black bg-opacity-30">
            <img src={feel} alt="Real Feel" className="mr-1 w-4" />
            <span className="font-light">{props.feel}</span>
          </div>

          <div className="flex items-center justify-center px-3 py-1 rounded-full bg-black bg-opacity-30">
            <img src={humidity} alt="Humidity" className="mr-1 w-4" />
            <span className="font-light">{props.humidity}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-around my-5 font-extralight text-sm">
        <div className="flex items-center justify-center mr-2">
          <img src={rise} alt="Sunrise" className="mr-2 w-5" />
          <span className="font-medium">{sunrise}</span>
        </div>

        <div className="flex items-center justify-center mr-2">
          <img src={set} alt="Sunset" className="mr-2 w-5" />
          <span className="font-medium">{sunset}</span>
        </div>

        <div className="flex items-center justify-center mr-2">
          <i className="fa-solid fa-temperature-high mr-2"></i>
          <span className="font-medium">{props.high}</span>
        </div>

        <div className="flex items-center justify-center">
          <i className="fa-solid fa-temperature-quarter mr-2"></i>
          <span className="font-medium">{props.low}</span>
        </div>
      </div>
    </section>
  );
}
