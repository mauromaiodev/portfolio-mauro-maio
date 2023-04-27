import InformationContainer from "../InformationContainer/InformationContainer";
import SocialNetWorks from "../SocialNetworks/SocialNetworks";
import Experience from "../Experience/Experience";

import Avatar from "../../assets/mauromaio1.jpeg";

import "./sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Imagem Mauro Maio"></img>
      <p className="title">Frontend Developer</p>
      <SocialNetWorks />
      <InformationContainer />
      <a
        href="https://drive.google.com/file/d/1easRyawynnP0M2qIX63hGtkPVzFZGeUL/view?usp=sharing"
        target="_blank"
        className="btn"
      >
        Visualizar Currículo
      </a>
      <Experience />
    </aside>
  );
};

export default Sidebar;
