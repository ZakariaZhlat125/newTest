import React from "react";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";

const FreeZoneBanner = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#E0F8E0] rounded-[10px] border border-green-300 mx-5 md:mx-10 p-4 flex justify-between items-center shadow-sm relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('/patterns1.svg')] bg-repeat animate-background-move" />

      {/* Left button */}
      <Button
        unstyled={true}
        className="z-10 bg-gradient-to-r from-blue-500 to-sky-400 text-white text-sm md:text-base lg:text-lg font-semibold px-2  py-2 rounded-full shadow-md"
        href="https://example.com"
        target="_blank"
      >
        {t("FreeZone")}
      </Button>

      <Button
        unstyled={true}
        className="z-10 text-gray-700 text-sm md:text-base lg:text-lg font-medium text-right hover:text-blue-500"
        href="https://example.com"
        target="_blank"
      >
        {t("browseFreeZone")}
      </Button>
    </div>
  );
};

export default FreeZoneBanner;
