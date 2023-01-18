import { useState, useRef } from "react";
import CityWeather from "../components/city-weather-refactor";

export default function IndexPage() {
  const [city, setCity] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="py-2 bg-sky-50 h-screen w-screen pt-20">
      <form
        className="flex items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          const formdata = new FormData(e.currentTarget);
          setCity(formdata.get("city").toString());
        }}
      >
        <span className="text-xl" onClick={() => inputRef?.current?.focus()}>
          Weather Search:
        </span>{" "}
        <input
          data-testid="weather-input"
          className="ml-2 border p-2 h-[50px] border-gray-400 border-r-none rounded-l-lg"
          type="text"
          name="city"
          ref={inputRef}
        />
        <button
          className="-ml-1 text-sm rounded-r-lg p-2 h-[50px] bg-blue-500 text-white border-none font-bold"
          type="submit"
        >
          SUBMIT
        </button>
      </form>

      {city && (
        <div className="mt-14 flex justify-center">
          <CityWeather city={city} />
        </div>
      )}
    </div>
  );
}
