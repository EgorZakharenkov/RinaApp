import React from "react";
import { cn } from "@/lib/utils";
import {
  CheckboxFiltersGroup,
  FilterCheckbox,
  RangeSlider,
  Title,
} from "@/components/shared";
import { Input } from "@/components/ui";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title text={"Фильтрация"} size={"sm"} className={"mb-5 font-bold"} />
      <div className={"flex flex-col gap-4"}>
        <FilterCheckbox text={"Можно собирать"} value={"1"} />
        <FilterCheckbox text={"Новинки"} value={"2"} />
      </div>
      <div className={"mt-5 border-y border-y-neutral-100 py-6 pb-7"}>
        <p className={"font-bold mb-3"}>Цена от и до:</p>
        <div className={"flex gap-3 mb-5"}>
          <Input
            type={"number"}
            placeholder={"0"}
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type={"number"} placeholder={"500"} min={500} max={1000} />
        </div>
        <RangeSlider min={0} max={1000} step={10} />
      </div>
      <CheckboxFiltersGroup
        className={"mt-5"}
        title={"Ингридиенты"}
        items={[
          {
            text: "Сырный соус",
            value: "3",
          },
          {
            text: "Сыр",
            value: "4",
          },
          {
            text: "Огурцы",
            value: "5",
          },
          {
            text: "Помидорка",
            value: "6",
          },
          {
            text: "Писька",
            value: "7",
          },
          {
            text: "Сырный соус",
            value: "8",
          },
          {
            text: "Сыр",
            value: "9",
          },
          {
            text: "Огурцы",
            value: "10",
          },
          {
            text: "Помидорка",
            value: "11",
          },
          {
            text: "Писька",
            value: "12",
          },
        ]}
        defaultItems={[
          {
            text: "Сырный соус",
            value: "3",
          },
          {
            text: "Сыр",
            value: "4",
          },
          {
            text: "Огурцы",
            value: "5",
          },
          {
            text: "Помидорка",
            value: "6",
          },
          {
            text: "Писька",
            value: "7",
          },
        ]}
      />
    </div>
  );
};
