import { Carousel } from "./components/Carousel";
import { ExploreTopCards } from "./components/ExploreTopCards";
import { Heros } from "./components/Heros";
import { WantedServices } from "./components/WantedServices";

export const HomePage = () => {
  return (
    <>
      <ExploreTopCards />
      <Carousel />
      <Heros />
      <WantedServices />
    </>
  );
};
