import { FaRobot, FaBolt, FaLightbulb, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    icon: <FaRobot className="text-4xl text-blue-500" />,
    title: "India's First AI Cooking Assistant",
    description:
      "upliance.ai simplifies & automates cooking, designed for beginners.",
  },
  {
    id: 2,
    icon: <FaLightbulb className="text-4xl text-yellow-500" />,
    title: "Revolutionizing Home Appliances",
    description:
      "We push the boundaries of AI-driven smart home appliances in India.",
  },
  {
    id: 3,
    icon: <FaBolt className="text-4xl text-red-500" />,
    title: "Disruptive AI-Powered Startup",
    description:
      "Blending hardware & AI for everyday utility with a tech-first approach.",
  },
  {
    id: 4,
    icon: <FaHandshake className="text-4xl text-green-500" />,
    title: "Collaboration with Industry Leaders",
    description:
      "Working closely with OpenAI and top leaders, innovating at lightning speed.",
  },
];

const FeatureCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {features.map((feature) => (
        <motion.div
          key={feature.id}
          className="w-72 p-6 bg-white rounded-2xl shadow-xl text-center flex flex-col items-center"
          whileHover={{
            scale: 1.08,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          whileTap={{
            scale: 0.96,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {feature.icon}
          <h2 className="text-xl text-black font-bold mt-4">{feature.title}</h2>
          <p className="text-gray-600 mt-2">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureCards;
