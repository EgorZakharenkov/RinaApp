"use client";

import React from "react";
import {
  FilterCheckbox,
  FilterCheckboxProps,
} from "@/components/shared/filter-checkbox";
import { Input } from "@/components/ui";

interface Props {
  title: string;
  items: FilterCheckboxProps[];
  defaultItems: FilterCheckboxProps[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (value: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  onChange,
  defaultValue,
  className,
}) => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const viewItems = open
    ? items.filter((item) =>
        item.text.toLowerCase().includes(search.toLowerCase()),
      )
    : defaultItems.slice(0, limit);
  return (
    <div className={className}>
      <p className={"font-bold mb-3"}>{title}</p>
      {open && (
        <div className={"mb-5"}>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={searchInputPlaceholder}
            className={"bg-gray-50 border-none"}
          />
        </div>
      )}
      <div
        className={"flex flex-col gap-4 max-h-60 pr-2 overflow-auto scrollbar"}
      >
        {viewItems.map((item, index) => (
          <FilterCheckbox
            key={index}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
            onCheckedChange={(checked: boolean) => {}}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={open ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setOpen(!open)}
            className={"text-primary mt-3"}
          >
            {open ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
