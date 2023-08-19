import "./styles.css";
import { useState } from "react";

const countries = [
  {
    name: "India",
    value: "In",
    cities: ["delhi", "mumbai"]
  },
  {
    name: "Pakistan",
    value: "Pk",
    cities: ["lahore", "karachi"]
  },
  {
    name: "USA",
    value: "Us",
    cities: ["washington", "newyork"]
  }
];

export default function App() {
  const [country, setCountry] = useState("India");

  console.log(country);

  let cntr = countries.filter((c) => c.name === country);
  console.log("cntr", cntr);

  let city = cntr[0].cities;

  console.log(city);

  return (
    <div className="App">
      <select onChange={(e) => setCountry(e.target.value)}>
        {countries.map((c) => (
          <option>{c.name}</option>
        ))}
      </select>

      <select>
        {city.map((c) => (
          <option>{c}</option>
        ))}
      </select>
    </div>
  );
}
