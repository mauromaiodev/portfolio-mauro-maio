import * as Tabs from "@radix-ui/react-tabs";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdOutlineSchool } from "react-icons/md";
import { HiOutlineCode } from "react-icons/hi";

import "./experience.sass";

const Experiences = [
  {
    role: "Analista de Sistemas - WEB",
    company: "ACP Group - Avansys",
    date: "2022 - 2023",
  },
  {
    role: "Desenvolvedor Fullstack",
    company: "Kokua IT",
    date: "2020 - 2022",
  },
];

const Courses = [
  {
    role: "Análise e Desenvolvimento de Sistemas",
    company: "UNOPAR",
    date: "2021 - 2023",
  },
  {
    role: "React Profissional",
    company: "Udemy",
    date: "2022",
  },
  {
    role: "React e Typescript: desenvolvendo um Dashboard",
    company: "Udemy",
    date: "2022",
  },
  {
    role: "JavaScript do básico ao avançado",
    company: "Udemy",
    date: "2022",
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Experiências</h2>

      <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Profissionais
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            Acadêmicas
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
          <div className="experiences-list">
            {Experiences.map((experience) => {
              const { role, company, date } = experience;
              return (
                <div className="experience-item" key={company + role}>
                  <div className="circle"></div>
                  <h3>{role}</h3>
                  <span>
                    <HiOutlineCode className="icon-experiences" size={20} />
                    {company}
                  </span>
                  <p>
                    <AiOutlineCalendar className="icon-experiences" size={20} />
                    {date}
                  </p>
                </div>
              );
            })}
          </div>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab2">
          <div className="experiences-list">
            {Courses.map((experience) => {
              const { role, company, date } = experience;
              return (
                <div className="experience-item" key={company + role}>
                  <div className="circle"></div>
                  <h3>{role}</h3>
                  <span>
                    <MdOutlineSchool className="icon-experiences" size={20} />
                    {company}
                  </span>
                  <p>
                    <AiOutlineCalendar className="icon-experiences" size={20} />
                    {date}
                  </p>
                </div>
              );
            })}
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default Experience;
