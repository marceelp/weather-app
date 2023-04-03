import sunset from "./assets/sunset.png";
import sunrise from "./assets/sunrise.png";

export default function Today() {
  return (
    <section className="weather-section">
      <div className="weather-description">
        <p className="weather-description-text">
          {/* {stats.description} */}
          Description
        </p>
      </div>

      <div className="weather-icons">
        <img
          //   src={`https://openweathermap.org/img/wn/${stats.icon}@2x.png`}
          src={`https://openweathermap.org/img/wn/02d@2x.png`}
          alt="Current Weather Icon"
          className="weather-icon"
        />

        <p className="temperature">
          {/* {stats.temperature} */}
          30°
        </p>

        <div className="weather-data">
          <div className="weather-feel">
            <img src={sunrise} alt="Sunrise Icon" width="20px" height="20px" />
            <span className="weather-data-text">
              {/* {stats.feel} */}
              Real Feel
            </span>
          </div>

          <div className="weather-humidity">
            <img src={sunset} alt="Sunset Icon" width="20px" height="20px" />
            <span className="weather-data-text">
              {/* {stats.humidity} */}
              Humidity
            </span>
          </div>
        </div>
      </div>

      <div className="weather-info">
        <div className="weather-info-item">
          <img src={sunrise} alt="Sunrise Icon" width="20px" height="20px" />
          <span className="weather-data-text">
            {/* {sunrise} */}
            Sunrise
          </span>
        </div>

        <div className="weather-info-item">
          <img src={sunset} alt="Sunset Icon" width="20px" height="20px" />
          <span className="weather-data-text">
            {/* {sunset} */}
            Sunset
          </span>
        </div>

        <div className="weather-info-item">
          <i className="fa-solid fa-temperature-high"></i>
          <span className="weather-data-text">
            {/* {stats.high} */}
            High
          </span>
        </div>

        <div className="weather-info-item">
          <i className="fa-solid fa-temperature-quarter"></i>
          <span className="weather-data-text">
            {/* {stats.low} */}
            Low
          </span>
        </div>
      </div>
    </section>
  );
}
