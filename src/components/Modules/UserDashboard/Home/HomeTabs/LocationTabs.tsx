import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { favourites, newArrivals, topSellers } from "..";
import { LocationCard } from "./LocationCard";

export default function LocationTabs() {
  const [favs, setFavs] = useState<Set<string>>(new Set());
  const [tab, setTab] = useState("new");

  const dataMap = {
    new: newArrivals,
    top: topSellers,
    favs: favourites,
  };

  function toggleFav(id: string) {
    setFavs((prev) =>
      prev.has(id)
        ? new Set([...prev].filter((favId) => favId !== id))
        : new Set(prev).add(id)
    );
  }

  return (
    <Tabs value={tab} onValueChange={setTab} className="w-full mt-20">
      <TabsList className="bg-transparent mb-8">
        <TabsTrigger
          value="new"
          className={`text-white cursor-pointer text-sm font-semibold ${
            tab === "new" ? "font-semibold" : "font-normal"
          }`}
        >
          NEW ARRIVALS
        </TabsTrigger>
        <TabsTrigger
          value="top"
          className={`text-white cursor-pointer text-sm font-semibold ${
            tab === "top" ? "font-semibold" : "font-normal"
          }`}
        >
          TOP SELLERS
        </TabsTrigger>
        <TabsTrigger
          value="favs"
          className={`text-white cursor-pointer text-sm font-semibold ${
            tab === "favs" ? "font-semibold" : "font-normal"
          }`}
        >
          FAVOURITES
        </TabsTrigger>
      </TabsList>

      <TabsContent value="new">
        <LocationCard
          locations={dataMap["new"]}
          favs={favs}
          onToggleFav={toggleFav}
        />
      </TabsContent>
      <TabsContent value="top">
        <LocationCard
          locations={dataMap["top"]}
          favs={favs}
          onToggleFav={toggleFav}
        />
      </TabsContent>
      <TabsContent value="favs">
        <LocationCard
          locations={dataMap["favs"]}
          favs={favs}
          onToggleFav={toggleFav}
        />
      </TabsContent>
    </Tabs>
  );
}
