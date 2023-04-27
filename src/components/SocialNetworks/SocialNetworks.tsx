import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import "./socialnetworks.sass";

const socialNetworks = [
  {
    name: "whatsapp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/5571992349706",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/mauromaioficial/",
  },
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/mauro-maio-594251163/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    url: "https://github.com/mauromaiodev",
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.url}
          className="social-btn"
          id={network.name}
          key={network.name}
          target="_blank"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
