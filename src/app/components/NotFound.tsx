import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { EASE } from "../motion/siteMotion";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <motion.div
        className="text-center px-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <motion.h1
          className="text-9xl font-light text-black mb-6"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.08 }}
        >
          404
        </motion.h1>
        <h2 className="text-3xl font-light text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-12 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <motion.div whileHover={{ x: -3 }} transition={{ type: "spring", stiffness: 400, damping: 28 }}>
          <Link
            to="/"
            className="inline-flex items-center text-sm tracking-wider border-b-2 border-black pb-1 hover:border-gray-400 transition-colors duration-300 group"
          >
            <ArrowLeft className="mr-3 w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            RETURN HOME
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
