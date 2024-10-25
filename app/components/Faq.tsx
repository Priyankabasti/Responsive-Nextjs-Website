"use client";
import React from "react";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import Plus from "../../public/assets/Plus.svg";

const items = [
  {
    question: "ut enin minima veniam, quis nostrum exercitation",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maxime repellat veritatis dolorum suscipit nesciunt illum quae similique voluptates, sed quos! Incidunt inventore, dolore natus illum esse neque necessitatibus ex expedita adipisci! Unde aut enim quos maxime, voluptates necessitatibus inventore? Excepturi saepe reiciendis molestias.",
  },
  {
    question: "ut enin minima veniam, quis nostrum exercitation",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maxime repellat veritatis dolorum suscipit nesciunt illum quae similique voluptates, sed quos! Incidunt inventore, dolore natus illum esse neque necessitatibus ex expedita adipisci! Unde aut enim quos maxime, voluptates necessitatibus inventore? Excepturi saepe reiciendis molestias.",
  },
  {
    question: "ut enin minima veniam, quis nostrum exercitation",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maxime repellat veritatis dolorum suscipit nesciunt illum quae similique voluptates, sed quos! Incidunt inventore, dolore natus illum esse neque necessitatibus ex expedita adipisci! Unde aut enim quos maxime, voluptates necessitatibus inventore? Excepturi saepe reiciendis molestias.",
  },
  {
    question: "ut enin minima veniam, quis nostrum exercitation",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maxime repellat veritatis dolorum suscipit nesciunt illum quae similique voluptates, sed quos! Incidunt inventore, dolore natus illum esse neque necessitatibus ex expedita adipisci! Unde aut enim quos maxime, voluptates necessitatibus inventore? Excepturi saepe reiciendis molestias.",
  },
  {
    question: "ut enin minima veniam, quis nostrum exercitation",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maxime repellat veritatis dolorum suscipit nesciunt illum quae similique voluptates, sed quos! Incidunt inventore, dolore natus illum esse neque necessitatibus ex expedita adipisci! Unde aut enim quos maxime, voluptates necessitatibus inventore? Excepturi saepe reiciendis molestias.",
  },
];

const Faq = () => {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-pink-500 text-[14px] font-medium lg:text-base">
          Frequently asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium lg:text-[42px] lg:leading-[58px]">
          Lets clarify some of your Questions
        </h1>
        <p className="pb-[24px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          repellat cum aliquid accusamus quos, saepe nulla est pariatur commodi,
          suscipit alias.
        </p>
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-sky-100 p-[16px] rounded-[8px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium lg:text-[18px]">{item.question}</p>
                    <span>
                      <Image src={Plus} alt='See More' className="h-10 w-8 lg:w-6 lg:h-6"/>
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <p className="pt-2">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
};

export default Faq;
