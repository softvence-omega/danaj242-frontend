import { motion } from "framer-motion";

interface CardProps {
  title: string;
  bundleTitle: string;
  bundleIcon: string;
  image: string;
  description: string;
  price: string;

  id: string;
}

const SpecialCard = ({
  title,
  bundleTitle,
  bundleIcon,
  image,
  description,
  price,

  id,
}: CardProps) => {
  return (
    <motion.div
      className="rounded-lg shadow-lg  w-full "
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-blue-600">{bundleIcon}</span>
          <span className="text-sm font-medium text-gray-600">
            {bundleTitle}
          </span>
        </div>
        <p className="text-sm text-gray-600 my-2">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-blue-600">{price}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SpecialCard;
