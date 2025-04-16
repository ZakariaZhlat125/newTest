import React from "react";
import { Globe2, ChevronDown } from "lucide-react";
import Button from "../ui/Button";
import ImageComponent from "./../ui/ImageComponent ";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="w-full bg-[#E7F5FF] flex justify-between items-center px-4 py-2 text-white">
      <div className="flex items-center gap-2">
        <ImageComponent
          src="/middelEast.png"
          alt="Hero Banner"
          width="40%"
          height="auto"
          className="rounded-full shadow-md"
        />
        <span className="font-semibold text-[#373737] ">{t('MiddleEast')}</span>
      </div>
      <div className="flex items-center gap-3">
        <Button
          unstyled={true}
          className="border border-2 border-blue-500 text-blue-500 px-3 py-1 rounded-full text-md hover:bg-white"
          href="https://example.com"
          target="_blank"
        >
          {t('ShowMore')}
        </Button>
        <Button
          unstyled={true}
          className="text-gray-700 text-lg font-medium text-right hover:text-blue-500"
          href="https://example.com"
          target="_blank"
        >
          {t('PeopleCourt')}
        </Button>
      </div>
    </header>
  );
};
