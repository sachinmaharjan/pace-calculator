"use client";

import { useState } from "react";

const PRESETS = [
  { label: "6:00 mile", minutes: 6, seconds: 0 },
  { label: "7:30 mile", minutes: 7, seconds: 30 },
  { label: "9:00 mile", minutes: 9, seconds: 0 }
];

export default function PaceCalculator() {
  const [minutes, setMinutes] = useState(9);
  const [seconds, setSeconds] = useState(30);
  const [direction, setDirection] = useState("mileToKm");

  const totalSeconds = minutes * 60 + seconds;
  const baseSeconds = direction === "mileToKm" ? totalSeconds / 1.609 : totalSeconds * 1.609;

  const format = (s: number) =>
    `${Math.floor(s / 60)}:${Math.round(s % 60)
      .toString()
      .padStart(2, "0")}`;

  const splits = {
    "200m": baseSeconds * 0.2,
    "400m": baseSeconds * 0.4,
    "800m": baseSeconds * 0.8
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="bg-zinc-900 rounded-3xl shadow-xl p-6 max-w-sm w-full space-y-5">
        <h1 className="text-xl font-semibold text-center">Pace Calculator</h1>

        {/* Presets */}
        <div className="flex justify-center gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.label}
              onClick={() => {
                setMinutes(p.minutes);
                setSeconds(p.seconds);
                setDirection("mileToKm");
              }}
              className="px-3 py-1 bg-zinc-700 rounded-full text-sm"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-2 justify-center text-2xl">
          <input type="number" value={minutes} onChange={(e) => setMinutes(+e.target.value)} className="w-16 bg-black border-b text-center" />
          :
          <input type="number" value={seconds} onChange={(e) => setSeconds(+e.target.value)} className="w-16 bg-black border-b text-center" />
        </div>

        {/* Direction */}
        <div className="flex justify-center gap-4 text-sm">
          <label><input type="radio" checked={direction === "mileToKm"} onChange={() => setDirection("mileToKm")} /> Mile → KM</label>
          <label><input type="radio" checked={direction === "kmToMile"} onChange={() => setDirection("kmToMile")} /> KM → Mile</label>
        </div>

        {/* Result */}
        <div className="text-center">
          <div className="text-3xl font-bold">{format(baseSeconds)}</div>
          <div className="text-xs text-zinc-400">per {direction === "mileToKm" ? "km" : "mile"}</div>
        </div>

        {/* Splits */}
        <div className="bg-zinc-800 rounded-2xl p-4">
          <h2 className="text-sm mb-2">Track Splits</h2>
          {Object.entries(splits).map(([k, v]) => (
            <div key={k} className="flex justify-between text-sm">
              <span>{k}</span>
              <span>{format(v)}</span>
            </div>
          ))}
        </div>
        <div className="hang-right">
            <span className="text-xs text-zinc-500">Created by Sachin Maharjan</span>
        </div>
      </div>
    </div>
  );
}