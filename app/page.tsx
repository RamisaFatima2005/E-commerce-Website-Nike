import BestOfAirMax from "@/components/BestOfAirMax";
import Featured from "@/components/Featured";
import HomePage from "./home/page";
import GearUp from "@/components/GearUp";
import DontMiss from "@/components/DontMiss";
import Essentials from "@/components/Essentials";

export default function Home() {
  return (
   <div>
    <HomePage/>
    <BestOfAirMax/>
    <Featured/>
    <GearUp/>
    <DontMiss/>
    <Essentials/>
   </div>
  );
}
