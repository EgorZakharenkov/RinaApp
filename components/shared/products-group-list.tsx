"use client";

import React from "react";
import { useIntersection } from "react-use";
import { cn } from "@/lib/utils";
import { Title } from "@/components/shared/title";
import { ProductCard } from "@/components/shared/product-card";
import { useCategoryStore } from "@/store/category";

interface Props {
  title: string;
  products: any[];
  listClassName?: string;
  categoryId: number;
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  className,
  title,
  products,
  listClassName,
  categoryId,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting]);
  return (
    <div className={cn("", className)} ref={intersectionRef} id={title}>
      <Title text={title} size={"lg"} className={"font-extrabold mb-5"} />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {products.map((product, index) => (
          <ProductCard
            author={product.author}
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
