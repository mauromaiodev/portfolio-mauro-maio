import styles from "../../styles/abstracts/styles.module.css";
import "./homecontainer.sass";

import arrow from "../../assets/arrow.svg";
import { Link } from "react-scroll";

const HomeContainer = () => {
  return (
    <div className="mainDiv">
      <div className="mainItem">
        <h1 className="typewriter">Mauro Maio</h1>
        <span className="typewriter">Frontend Developer</span>
      </div>
      <Link
        className="arrow"
        to={innerWidth > 1000 ? "main-content" : "sidebar"}
        spy={true}
        smooth={true}
        offset={-90}
        duration={700}
      >
        <img src={arrow} alt="Seta" />
      </Link>
    </div>
  );
};

export default HomeContainer;
