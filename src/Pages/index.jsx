import React from "react";
import { countries } from "../constants/data";
import BackgroundWrapper from "../components/ui/BackgroundWrapper";
import FreeZoneBanner from "../components/Home/FreeZoneBanner";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <BackgroundWrapper imageUrl="/earth-background.jpg">
        <div className="pt-2">
          {" "}
          <FreeZoneBanner />
        </div>

        {/* Flags Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 items-center justify-center gap-2 mt-6 px-2 ">
          {countries.map((country, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 w-10  md:w-28 lg:w-32"
            >
              <motion.img
                src={country.flag}
                alt={country.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ scale: 1.2 }}
                className="w-28 h-9 md:w-20 md:h-12 lg:w-24 lg:h-14 object-cover border cursor-pointer rounded-sm shadow"
              />

              <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-center">
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </BackgroundWrapper>
    </>
  );
};

export default Home;
