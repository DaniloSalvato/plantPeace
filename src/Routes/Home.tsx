import Discover from "../components/Home/Discover";
import PlantCare from "../components/Home/PlantCare";
import Promotion from "../components/Home/Promotion";

const Home = () => {
  return (
    <div className="bg-customWhite">
      <Discover />
      <PlantCare />
      <Promotion />
    </div>
  );
};

export default Home;
