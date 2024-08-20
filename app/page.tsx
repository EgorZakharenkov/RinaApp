import { Container, Filters, Title, TopBar } from "@/components/shared";
import React from "react";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className={"mt-10"}>
        <Title text={"Все книги"} size={"lg"} className={"font-extrabold"} />
      </Container>
      <TopBar />
      <Container className={"pb-14 mt-9"}>
        <div className={"flex gap-[60px]"}>
          <span></span>
          <div className={"w-[250px]"}>
            <Filters />
          </div>
          <div className={"flex-1"}>
            <div className={"flex flex-col gap-12"}>
              <ProductsGroupList
                categoryId={1}
                products={[
                  {
                    id: 1,
                    name: "Сестра ночи",
                    price: 349,
                    author: "Мара Вульф",
                    items: [{ price: 500 }, { price: 750 }, { price: 1000 }],
                    imageUrl:
                      "https://cv6.litres.ru/pub/c/cover_330/65490862.webp",
                  },
                  {
                    id: 2,
                    name: "Сестра звезд",
                    price: 349,
                    author: "Мара Вульф",
                    items: [{ price: 500 }, { price: 750 }, { price: 1000 }],
                    imageUrl:
                      "https://cv8.litres.ru/pub/c/cover_330/64395787.webp",
                  },
                  {
                    id: 3,
                    name: "Сестра луны",
                    price: 349,
                    author: "Мара Вульф",
                    items: [{ price: 500 }, { price: 750 }, { price: 1000 }],
                    imageUrl:
                      "https://cv8.litres.ru/pub/c/cover_330/64879087.webp",
                  },
                  {
                    id: 3,
                    name: "Сестра ночи",
                    price: 349,
                    author: "Мара Вульф",
                    items: [{ price: 500 }, { price: 750 }, { price: 1000 }],
                    imageUrl:
                      "https://cv6.litres.ru/pub/c/cover_330/65490862.webp",
                  },
                ]}
                title={"Новинки"}
              />
              <ProductsGroupList
                categoryId={2}
                products={[
                  {
                    id: 1,
                    name: "Пицца четыре сыра",
                    price: 450,
                    items: [{ price: 500 }, { price: 750 }, { price: 1000 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:366x366/11EE7D5F1CAFF28DA90FF5EC463FAF0F.avif",
                  },
                  {
                    id: 2,
                    name: "Пицца четыре сыра",
                    price: 450,
                    items: [{ price: 500 }, { price: 750 }, { price: 1000 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:366x366/11EE7D5F1CAFF28DA90FF5EC463FAF0F.avif",
                  },
                  {
                    id: 3,
                    name: "Пицца четыре сыра",
                    price: 450,
                    items: [{ price: 500 }, { price: 750 }, { price: 1000 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:366x366/11EE7D5F1CAFF28DA90FF5EC463FAF0F.avif",
                  },
                  {
                    id: 4,
                    name: "Пицца четыре сыра",
                    price: 450,
                    items: [{ price: 500 }, { price: 750 }, { price: 1000 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:366x366/11EE7D5F1CAFF28DA90FF5EC463FAF0F.avif",
                  },
                  {
                    id: 5,
                    name: "Пицца четыре сыра",
                    price: 450,
                    items: [{ price: 500 }, { price: 750 }, { price: 1000 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:366x366/11EE7D5F1CAFF28DA90FF5EC463FAF0F.avif",
                  },
                  {
                    id: 6,
                    name: "Пицца четыре сыра",
                    price: 450,
                    items: [{ price: 500 }, { price: 750 }, { price: 1000 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:366x366/11EE7D5F1CAFF28DA90FF5EC463FAF0F.avif",
                  },
                  {
                    id: 7,
                    name: "Пицца четыре сыра",
                    price: 450,
                    items: [{ price: 500 }, { price: 750 }, { price: 1000 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:366x366/11EE7D5F1CAFF28DA90FF5EC463FAF0F.avif",
                  },
                ]}
                title={"Романтика"}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
