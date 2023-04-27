import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "./informationcontainer.sass";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Contato</h3>
          <p>(71) 99234-9706</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>mauromaio.dev@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
