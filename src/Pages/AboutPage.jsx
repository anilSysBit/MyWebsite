import React, { useState } from "react";
const AboutPage = () => {
  const [selectedId, setSelectedId] = useState(null);
  const items = [
    {
      date: "-2021 - Present",
      company: "- No Work Yet",
      title: "Web Developer",
      description:
        "I am currently working as a Web Developer making the Interactive Website.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum vitae consequuntur dolores odio quasi? Voluptas asperiores ullam distinctio corporis iste ab rem eveniet libero omnis incidunt, beatae, nisi totam animi?",
    },
    {
      date: "-2021 - Present",
      company: "- No Work Yet",
      title: "Digital Marketing",
      description:
        "I am currently working as a Web Developer making the Interactive Website.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum vitae consequuntur dolores odio quasi? Voluptas asperiores ullam distinctio corporis iste ab rem eveniet libero omnis incidunt, beatae, nisi totam animi?",
    },
    {
      date: "-2021 - Present",
      company: "- No Work Yet",
      title: "Backend Developer",
      description:
        "I am currently working as a Web Developer making the Interactive Website.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum vitae consequuntur dolores odio quasi? Voluptas asperiores ullam distinctio corporis iste ab rem eveniet libero omnis incidunt, beatae, nisi totam animi?",
    }
  ];

  const handleExperienceClick =()=>{

  }
  return (
    <div className="about_page_container">
      <div className="size_manager">
        <div className="about_aw_biography">
          <div className="left">
            <p>-NICE TO MEET YOU!</p>
            <h2>Anil Wagle</h2>
            <p>Full stack Web Developer</p>
            <button className="global_button_fill">Got a Project?</button>
          </div>
          <div className="right">
            <p>
              Hello there! My name is <span>Anil Wagle</span>. I am a Full Stack
              Web Developer with Sufficient Training Skills, and I'm very
              passionate and dedicated to my work.
              <br /> <br /> With sufficient training skills and knowledge, I
              have acquired the proficiency necessary to make your project a
              success. I enjoy every step of the development process, from
              discussion and collaboration to bringing the final product to
              life.
            </p>

            <br />
            <ul>
              <li>
                <span>age</span>
                <span>25</span>
              </li>
              <li>
                <span>born in</span>
                <span>Kathmandu, Nepal</span>
              </li>
              <li>
                <span>MAIL</span>
                <span>anil.wagle808@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="anil_aw_counter">
          <ul>
            <li>
              <h1>2+</h1>
              <p>years of experience</p>
            </li>
            <li>
              <h1>10+</h1>
              <p>projects completed</p>
            </li>
            <li>
              <h1>10+</h1>
              <p>happy clients</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="anil_aw_experience">
        <div className="size_manager">
          <div className="header">
            <p>-EXPERIENCE</p>
            <h1>Everything about me!</h1>
          </div>
          <div className="aw_experience_listing">
            <ul>
                {items.map((elem, index) => {
                  return (
                    <li key={index}>
                    <div>
                      <p className="title">
                        <span>{elem.date}</span> <span>{elem.company}</span>
                      </p>
                      <h3>{elem.title}</h3>
                      <p className="description">{elem.description.slice(0,100).concat("...")}</p>
                    </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
