export default function Location(props) {
  return (
    <section className="w-full">
      <div className="flex justify-center px-10 mb-10 w-full">
        <input
          type="text"
          placeholder="Enter City.."
          className="py-2 pl-1 w-full rounded-sm text-gray-500 outline-none"
          onChange={props.handleChange}
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-normal">
          {props.location}
          {/* {stats.country ? ", " : "-"}
          {stats.country} */}
        </h1>
      </div>
    </section>
  );
}
