import React from "react";

export default function Footer() {
  return (
    <div className="p-[40px] flex justify-between bg-[#0a2c42] text-white">
      <p>&copy; 2025 Jonel Tech</p>

      <div className="flex gap-4 justify-between">
        <a href="">About Me</a>
        <a href="">Tech Stack</a>
        <a href="">Experience</a>
        <a href="">Projects</a>
      </div>
    </div>
  );
}
