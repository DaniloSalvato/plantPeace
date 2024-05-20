import Discover from "../components/Home/Discover";
import PlantCare from "../components/Home/PlantCare";
import Promotion from "../components/Home/Promotion";
import Sales from "../components/Home/Sales";

const Home = () => {
  return (
    <div className="bg-customWhite">
      <Discover />
      <PlantCare />
      <Sales />
      <Promotion />
     </div>
  );
};

export default Home;
