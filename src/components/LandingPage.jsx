import { motion } from "framer-motion";
import upliance from "../assets/uplianceai.webp";
import FeatureCards from "./FeatureCards";

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <>
      <motion.div
        className="text-white flex items-center justify-center mt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="m-3 mt-20 flex flex-col gap-12 justify-center items-center w-1/2">
          <motion.h1 className="text-center" variants={textVariants}>
            <span className="text-blue-800 font-extrabold">Now, everyone can</span>{" "}
            <span className="font-bold" style={{ color: "rgb(255, 120, 0)" }}>
              cook everything!!!
            </span>
          </motion.h1>
          <div className="flex gap-2 justify-between">
            <button
              onClick={() => window.open("https://upliance.ai/products/ordernow", "_blank")}
            >
              View Product
            </button>
            <button
              onClick={() => window.open("https://widget01.popin.to/share/12237", "_blank")}
            >
              Live Demo
            </button>
          </div>
        </div>
        <motion.div className="flex justify-center items-center" variants={imageVariants}>
          <img height="300px" width="300px" src={upliance} alt="upliance" />
        </motion.div>
      </motion.div>
      <FeatureCards />
    </>
  );
};

export default LandingPage;