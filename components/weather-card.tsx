import Image from "next/image";

interface WeatherCardProps {
  city?: string;
  temp?: string;
  description?: string;
  icon?: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  temp,
  description,
  icon,
}) => {
  return (
    <div className="rounded-xl bg-white w-56 p-4 shadow-md">
      <h1 className="text-gray-600 uppercase font-bold text-2xl text-center">
        {city}
      </h1>
      {icon && (
        <Image
          src={icon}
          alt={`${city}-${description}`}
          width={120}
          height={120}
          className="mx-auto my-0"
        />
      )}
      <div className="capitalize text-slate-400 text-center pb-2">
        {description}
      </div>
      <div className="text-slate-400 text-sm text-center">
        Temperature:{" "}
        <span className="text-black text-4xl ml-1">{temp} &#8457;</span>
      </div>
    </div>
  );
};

export default WeatherCard;
