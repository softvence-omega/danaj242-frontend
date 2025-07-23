import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { locationData } from "@/lib/demoForm";

export function FeaturedLocationsCarousel() {
  return (
    <section
      className=" xl:max-w-[1760px] xl:my-auto xl:pl-20  lg:max-w-full lg:mx-auto xl:mx-0
xl:ml-auto   "
    >
      <div className="xl:px-0 md:px-10 ">
        <Carousel className="w-full ">
          <CarouselContent className="flex   xl:gap-12 md: gap-6 ">
            {locationData.map((location) => (
              <CarouselItem
                key={location.id}
                className="2xl:basis-1/4 xl:basis-1/3 lg:basis-1/2 md:basis-1/2 sm:basis-1/1 "
              >
                <div className="">
                  <Card
                    className="xl:w-[420px] xl:h-[420px] lg:w-[450px] lg:h-[500px]  md:w-[350px] md:h-[400px]  h-[350px] my-6 mx-4 md:mx-10 p-0 rounded-[30px] border-1 border-[#2FABF9]
                 transition-all duration-300 hover:shadow-[0px_0px_20px_0px_rgba(47,171,249,0.90)] cursor-pointer bg-transparent card"
                  >
                    <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                      <div className="w-full rounded-[15px] soverflow-hidden">
                        <img
                          src={location.image}
                          alt={location.title}
                          className="w-[400px]  lg:h-[200px]object-contain rounded-xl "
                        />
                      </div>
                      <h3 className="text-white text-base md:text-xl  md:font-semibold">
                        {location.title}
                      </h3>
                      <p className="text-white/80 text-xs md:text-[14px]">
                        {location.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
