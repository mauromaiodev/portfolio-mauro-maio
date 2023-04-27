import "./carousel.sass";

import adminDashboard from "../../assets/projects/adminDashboard.png";

export const baseUrl = "../assets/projects";

const projects = [
  {
    title: "Dashboard de Admin",
    image: adminDashboard,
    github: "react-admin-dashboard",
  },
];

const Carousel = () => {
  return (
    <div className="carousel-container">
      {projects.map((project) => {
        const { title, image, github } = project;
        return (
          <div
            className="carousel-item"
            key={title}
            style={{
              background: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="info-item">
              <h3>{title}</h3>
              <a
                href={`https://github.com/mauromaiodev/${github}`}
                className="btn btnProject"
                target={"_blank"}
              >
                Acessar
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
