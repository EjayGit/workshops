"use client";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Spinner() {
  return (
    <div className="flex h-screen w-full justify-center pt-20">
      <PacmanLoader loading={true} color="#111111" />
      <p>Test</p>
    </div>
  );
}