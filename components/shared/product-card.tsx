import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Title } from "@/components/shared/title";
import { Button } from "@/components/ui";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  className?: string;
  imageUrl: string;
  author: string;
}

export const ProductCard: React.FC<Props> = ({
  className,
  id,
  name,
  price,
  imageUrl,
  author,
}) => {
  return (
    <div className={cn("", className)}>
      <Link href={`/product/${id}`}>
        <div
          className={
            "flex justify-center p-6 bg-secondary rounded-lg h-[350px] hover:border-purple-400 border-2 transition duration-300"
          }
        >
          <img className={"w-[210px] h-[300px]"} src={imageUrl} alt={name} />
        </div>
        <Title text={name} size={"sm"} className={"mb-1 mt-3 font-bold"} />
        <Title
          text={author}
          size={"xs"}
          className={"mb-1 mt-1 font-bold text-gray-400"}
        />
        <p className={"text-sm text-gray-480"}>
          {" "}
          Вианне и ее сестрам удалось вырваться из плена верховного короля, но
          опасность, которая угрожает миру людей, не миновала. Месть демона
          будет страшна, новый удар должен быть предотвращен незамедлительно.
        </p>
        <div className={"flex justify-between items-center mt-4"}>
          <span className={"text-[20px]"}>
            от <b>{price} р</b>
          </span>
          <Button variant={"secondary"} className={"text-base font-bold"}>
            <Plus className={"mr-1"} size={20} />
            Желаемое
          </Button>
        </div>
      </Link>
    </div>
  );
};
