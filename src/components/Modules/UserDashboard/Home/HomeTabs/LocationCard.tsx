import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

export interface Location {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface LocationCardProps {
  locations: Location[];
  favs: Set<string>;
  onToggleFav: (id: string) => void;
}

export function LocationCard({
  locations,
  favs,
  onToggleFav,
}: LocationCardProps) {
  const handleBookmark = (id: string) => {
    if (favs.has(id)) {
      onToggleFav(id);
      toast.error("Item removed from favorites!");
    } else {
      onToggleFav(id);
      toast.success("Location bookmarked successfully!");
    }
  };
  return (
    <div className="w-full">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {locations.map((location) => (
          <div key={location.id} className="flex">
            <div className="relative flex-grow">
              <Card
                className="md:w-full border-none h-[380px] card md:h-[350px] 
               mx-0 p-0 rounded-[30px]  transition-all duration-300 hover:shadow-[0px_0px_20px_0px_rgba(47,171,249,0.90)]  bg-transparent"
              >
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <div className="w-full rounded-[15px] overflow-hidden">
                    <img
                      src={location.image}
                      alt={location.title}
                      className="object-cover rounded-xl w-full h-40"
                    />
                  </div>
                  <h3 className="text-white text-base md:text-xl md:font-semibold">
                    {location.title}
                  </h3>
                  <p className="text-white/80 text-xs md:text-[14px]">
                    {location.description}
                  </p>
                </CardContent>
                <motion.button
                  className="absolute right-5 bottom-5 bg-transparent"
                  onClick={() => handleBookmark(location.id)}
                  tabIndex={-1}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  type="button"
                >
                  <Heart
                    className={`h-6 w-6 cursor-pointer ${
                      favs.has(location.id)
                        ? "fill-[#2FABF9] stroke-[#2FABF9]"
                        : "stroke-[#2FABF9]"
                    }`}
                  />
                </motion.button>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
