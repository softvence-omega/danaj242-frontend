import { motion } from "framer-motion";
import { Calendar, MapPin, Upload } from "lucide-react";

interface StepCardProps {
  stepNumber: string;
  title: string;
  description: string;
  icon: string;
  index: number;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "location":
      return MapPin;
    case "calendar":
      return Calendar;
    case "upload":
      return Upload;
    default:
      return MapPin;
  }
};

export default function StepCard({
  stepNumber,
  title,
  description,
  icon,
  index,
}: StepCardProps) {
  const IconComponent = getIcon(icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-8 rounded-[30px] border border-[#2FABF9] h-full"
      style={{
        background: "rgba(47, 171, 249, 0.12)",
        backdropFilter: "blur(30px)",
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        viewport={{ once: true }}
        className="w-20 h-20 rounded-full bg-[#47B5FF] flex items-center justify-center mb-8"
      >
        <IconComponent className="w-10 h-10 text-white" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h3 className="text-white text-xl font-semibold">
          {stepNumber} {title}
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
}
