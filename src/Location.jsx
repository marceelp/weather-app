export default function Location(props) {
  return (
    <section className="location-section">
      <div className="location-input-container">
        <input
          type="text"
          name="name"
          placeholder="Enter City.."
          className="location-input-field"
          onChange={props.handleChange}
        />
      </div>

      <div className="location-header">
        <h1 className="location-title">
          {props.location}
          {/* {stats.country ? ", " : "-"}
          {stats.country} */}
        </h1>
      </div>
    </section>
  );
}
