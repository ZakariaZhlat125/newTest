import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

const LangSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
    document.dir = lang === "ar" ? "rtl" : "ltr";
    setOpen(false);
  };

  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 text-sm md:text-base lg:text-lg font-medium px-3 py-1 rounded-md"
      >
        {i18n.language === "ar" ? "اختر اللغة" : "Choose Language"}{" "}
        <ChevronDown size={16} />
        {i18n.language === "ar" ? "Ar" : "En"}
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-40 bg-white border rounded-md shadow-lg">
          {languages.map((lang) => {
            const isActive = i18n.language === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => handleChangeLang(lang.code)}
                className={`w-full text-left px-4 py-2 text-sm md:text-base  transition ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-black hover:bg-gray-900 hover:text-white"
                }`}
              >
                {lang.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
