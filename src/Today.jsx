import feel from "./assets/feel.png";
import humidity from "./assets/humidity.png";
import sunrise from "./assets/sunrise.png";
import sunset from "./assets/sunset.png";

export default function Today(props) {
  const { data } = props;

  return (
    <section>
      <div className="flex justify-center mt-6 mb-10">
        <p className="text-cyan-300 capitalize">
          {/* {stats.description} */}
          Description
        </p>
      </div>

      <div className="flex items-center justify-between font-extralight my-20">
        <img
          //   src={`https://openweathermap.org/img/wn/${stats.icon}@2x.png`}
          src={`https://openweathermap.org/img/wn/02d@2x.png`}
          alt="Current Weather Icon"
        />

        <p className="text-8xl font-normal">
          {/* {stats.temperature} */}
          30°
        </p>

        <div className="text-sm">
          <div className="flex items-center justify-center mb-2 px-3 py-1  rounded-full bg-black bg-opacity-30">
            <img src={feel} alt="Real Feel" className="mr-1 w-4" />
            <span className="font-light">
              {/* {stats.feel} */}
              Real Feel
            </span>
          </div>

          <div className="flex items-center justify-center px-3 py-1 rounded-full bg-black bg-opacity-30">
            <img src={humidity} alt="Humidity" className="mr-1 w-4" />
            <span className="font-light">
              {/* {stats.humidity} */}
              Humidity
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-around my-5 font-extralight text-sm">
        <div className="flex items-center justify-center mr-2">
          <img src={sunrise} alt="Sunrise" className="mr-2 w-5" />
          <span className="font-medium">
            {/* {sunrise} */}
            Sunrise
          </span>
        </div>

        <div className="flex items-center justify-center mr-2">
          <img src={sunset} alt="Sunset" className="mr-2 w-5" />
          <span className="font-medium">
            {/* {sunset} */}
            Sunset
          </span>
        </div>

        <div className="flex items-center justify-center mr-2">
          <i className="fa-solid fa-temperature-high mr-2"></i>
          <span className="font-medium">
            {/* {stats.high} */}
            High
          </span>
        </div>

        <div className="flex items-center justify-center">
          <i className="fa-solid fa-temperature-quarter"></i>
          <span className="font-medium">
            {/* {stats.low} */}
            Low
          </span>
        </div>
      </div>
    </section>
  );
}
