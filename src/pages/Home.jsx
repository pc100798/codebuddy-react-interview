import { Icon } from "@iconify/react";
import FormWrapper from "../components/FormWrapper";
import "../Styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">
        <Icon icon="mdi:home" className="icon" />
        Home
      </h1>
      <FormWrapper />
    </div>
  );
};

export default Home;
