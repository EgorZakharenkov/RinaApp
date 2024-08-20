"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

interface Props {
  className?: string;
}
const cats = ["Новинки", "Романтика", "Ужасы", "Историческое"];

export const Categories: React.FC<Props> = ({ className }) => {
  const { setActiveId, activeId } = useCategoryStore();
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map((cat, index) => (
        <a
          key={index}
          href={`/#${cat}`}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeId === index + 1 &&
              "bg-white shadow-md shadow-gray-200 text-purple-400 transition duration-300 ease-in-out",
          )}
          onClick={() => {
            setActiveId(index + 1);
          }}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};
