import translate from "@utils/translate";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsQuestionSquareFill } from "react-icons/bs";
export default function HelpButton() {
  return (
    <Link to={"/help"}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="fixed bottom-10 left-10 flex items-center justify-center gap-5 bg-amber-50 p-3 rounded-4xl"
      >
        <p>{translate("key_have_questions")}</p>
        <BsQuestionSquareFill size={50} color="rgb(14, 116, 144)" />
      </motion.div>
    </Link>
  );
}
