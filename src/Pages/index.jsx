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
        <div className="grid grid-cols-8 gap-4 mt-6 px-4">
          {countries.map((country, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              {/* <img
                src={country.flag}
                alt={country.name}
                className="w-16 h-10 object-cover border"
              /> */}
              <motion.img
                src={country.flag}
                alt={country.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }} // staggered
                whileHover={{ scale: 1.2 }}
                className="w-16 h-10 object-cover border cursor-pointer rounded-sm shadow"
              />

              <span className="text-sm">{country.name}</span>
            </div>
          ))}
        </div>
      </BackgroundWrapper>
    </>
  );
};

export default Home;
