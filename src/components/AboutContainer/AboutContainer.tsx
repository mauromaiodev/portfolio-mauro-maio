import NumberAnimation from "../NumberAnimation/NumberAnimation";
import { GoPlusSmall } from "react-icons/go";

import "./aboutcontainer.sass";

const Informations = [
  { title: "Projetos Pessoais", value: 14 },
  { title: "Commits", value: 730 },
  { title: "Certificados", value: 5 },
];

const AboutContainer = () => {
  return (
    <section className="about-container">
      <h2>Sobre</h2>
      <p>
        Sou muito focado e determinado em tudo o que faço. Busco inovação em meu
        trabalho e isso me motiva a alcançar metas e objetivos para aprimorar
        minhas habilidades e conhecimentos.
      </p>
      <p>
        Se você procura um desenvolvedor comprometido com a qualidade e a
        melhoria contínua, estou à disposição para conversar.
      </p>
      <div className="projects-grid">
        {Informations.map((info) => {
          return (
            <div className="projects-card" key={info.title}>
              <div className="projects-info">
                <GoPlusSmall />
                <NumberAnimation value={info.value} />
              </div>
              <h3>{info.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutContainer;
