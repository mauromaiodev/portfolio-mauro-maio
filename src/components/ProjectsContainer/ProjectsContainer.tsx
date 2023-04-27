import Carousel from "../Carousel/Carousel";

import "./projectscontainer.sass";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Tenho experiência em desenvolvimento e manutenção de sistemas web,
        trabalhei em projetos de diferentes segmentos, como saúde, educação e
        marketing. Atualmente, utilizo React, Next.js e Context API, para criar
        projetos escaláveis.
      </p>
      <Carousel />

      <a
        href="https://github.com/mauromaiodev"
        className="btn btnGithub"
        target={"_blank"}
      >
        Acessar Github
      </a>
    </section>
  );
};

export default ProjectsContainer;
