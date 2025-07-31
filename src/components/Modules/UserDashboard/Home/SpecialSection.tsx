import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "../../../../assets/Dashboard/card1.jpg";
import img2 from "../../../../assets/Dashboard/card2.jpg";
import img3 from "../../../../assets/Dashboard/card3.jpg";
import SpecialCard from "./SpecialCard";
const cardData = [
  {
    title: "Digital Billboard near SpaceX 1, PxAdkom-zyyg7hts-048",
    bundleTitle: "Power 5 Bundle",
    bundleIcon: "⚡",
    image: img1,
    description: "✔ 5 Screen ✔ 30 Days ✔ 3 Creatives",
    price: "$5,995 BSD",

    id: "/details/1",
  },
  {
    title: "Digital Billboard near SpaceX 1, PxAdkom-zyyg7hts-048",
    bundleTitle: "Burst Bundle",
    bundleIcon: "⚡",
    image: img2,
    description: "✔ 5 Screen ✔ 30 Days ✔ 3 Creatives",
    price: "$5,995 BSD",

    id: "/details/2",
  },
  {
    title: "Digital Billboard near SpaceX 1, PxAdkom-zyyg7hts-048",
    bundleTitle: "Brand Builder Bundle",
    bundleIcon: "🔥",
    image: img2,
    description: "✔ 5 Screen ✔ 30 Days ✔ 3 Creatives",
    price: "$5,995 BSD",

    id: "/details/3",
  },
  {
    title: "Digital Billboard near SpaceX 1, PxAdkom-zyyg7hts-048",
    bundleTitle: "Creative Master Bundle",
    bundleIcon: "💡",
    image: img1,
    description: "✔ 5 Screen ✔ 45 Days ✔ 5 Creatives",
    price: "$7,995 BSD",

    id: "/details/4",
  },
  {
    title: "Digital Billboard near SpaceX 2, PxAdkom-zyyg7hts-049",
    bundleTitle: "Advanced Bundle",
    bundleIcon: "🔧", // Wrench icon for the bundle
    image: img3,
    description: "✔ 10 Screen ✔ 60 Days ✔ 10 Creatives",
    price: "$10,995 BSD",

    id: "/details/5",
  },
  {
    title: "Digital Billboard near SpaceX 1, PxAdkom-zyyg7hts-048",
    bundleTitle: "Starter Bundle",
    bundleIcon: "🚀",
    image: img1,
    description: "✔ 3 Screen ✔ 15 Days ✔ 2 Creatives",
    price: "$2,995 BSD",

    id: "/details/6",
  },
  {
    title: "Digital Billboard near SpaceX 1, PxAdkom-zyyg7hts-048",
    bundleTitle: "Elite Bundle",
    bundleIcon: "🏆", // Trophy icon for the bundle
    image: img2,
    description: "✔ 10 Screen ✔ 90 Days ✔ 15 Creatives",
    price: "$12,995 BSD",

    id: "/details/7",
  },
  {
    title: "Digital Billboard near SpaceX 1, PxAdkom-zyyg7hts-048",
    bundleTitle: "Premium Bundle",
    bundleIcon: "💎", // Diamond icon for the bundle
    image: img3,
    description: "✔ 15 Screen ✔ 120 Days ✔ 20 Creatives",
    price: "$15,995 BSD",

    id: "/details/8",
  },
  {
    title: "Digital Billboard near SpaceX 1, PxAdkom-zyyg7hts-048",
    bundleTitle: "Super Bundle",
    bundleIcon: "✨", // Sparkles icon for the bundle
    image: img1,
    description: "✔ 20 Screen ✔ 150 Days ✔ 25 Creatives",
    price: "$19,995 BSD",

    id: "/details/9",
  },
];

const SpecialSection = () => {
  return (
    <div className="mt-10 relative">
      <Carousel className="w-full ">
        <CarouselContent>
          {cardData.map((card, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <SpecialCard key={index} {...card} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default SpecialSection;
