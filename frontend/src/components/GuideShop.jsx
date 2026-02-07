import React from "react";
import { FaListUl, FaShoppingCart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlinePayment, MdOutlineHourglassEmpty } from "react-icons/md";

const steps = [
  {
    icon: FaListUl,
    label: "BROWSE",
  },
  {
    icon: FaShoppingCart,
    label: "ADD TO CART",
  },
  {
    icon: AiOutlineShoppingCart,
    label: "CHECKOUT",
  },
  {
    icon: MdOutlinePayment,
    label: "PAYMENT",
  },
  {
    icon: MdOutlineHourglassEmpty,
    label: "THEN WAIT",
  },
];

const GuideShop = () => {
  return (
    <section className="bg-[#0d235a] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          ONE STOP ONE SHOP
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-300 max-w-2xl mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white text-[#0d235a] rounded-lg py-6 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform duration-300"
              >
                <Icon size={32} className="mb-3" />
                <p className="text-xs font-semibold tracking-wide">
                  {step.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GuideShop;
