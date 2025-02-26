
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser/lib/index";

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="w-full flex flex-col gap-4 justify-center items-center mt-14"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <JoditEditor
        className="w-10/12 shadow-custom"
        ref={editor}
        value={content}
        tabIndex={1}
        onChange={(newContent) => setContent(newContent)}
      />
      <motion.div
        className="w-10/12 p-4 border rounded-lg shadow-custom h-[200px] text-blue-800 font-medium mt-14"
        variants={containerVariants}
      >
        {HTMLReactParser(content)}
      </motion.div>
    </motion.div>
  );
};

export default TextEditor;
