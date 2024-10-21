import Link from "next/link";
import { countries } from "../../countryData";

export default function CountryDetail({ params }: { params: { country_name: string } }) {
  const country = countries[params.country_name];

  if (!country) {
    return (
      <div className="p-5 font-georgia">
        <h1 className="text-2xl">Country Not Found</h1>
        <h1 className="text-lg mt-2">
          The country you are trying to find is not in our records.
        </h1>
        <Link href="/country" className="text-blue-500 underline">
          Go back to country list.
        </Link>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-5 text-2xl text-center h-[380px] w-[370px] bg-lavender shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className="container">
          <h1 className="text-3xl mb-2">{country.name}</h1>
          <p className="text-xl">
            <strong>Population:</strong> {country.population}
          </p>
          <p className="text-xl mt-1">
            <strong>Capital:</strong> {country.capital}
          </p>
          <Link href="/country" className="text-purple-500 underline mt-5">
            Go back to country list.
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(countries).map((country_name) => ({
    country_name,
  }));
}
