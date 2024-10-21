"use client";
import Link from "next/link";
import { countries } from "../countryData";

export default function Country() {
  return (
    <div className="p-5 text-2xl text-center rounded-lg max-w-xl mx-auto shadow-md">
      <h1 className="text-4xl font-bold text-gray-800 mb-5">Country List</h1>
      <ul className="list-none p-0">
        {Object.keys(countries).map((countryKey) => (
          <li key={countryKey} className="my-2">
            <Link href={`/country/${countryKey}`} passHref>
              <span className="inline-block px-5 py-3 bg-purple-100 border-2 border-white rounded-md text-gray-800 transition-transform duration-300 hover:bg-purple-300 hover:text-white hover:shadow-lg hover:-translate-y-1">
                {countries[countryKey].name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
