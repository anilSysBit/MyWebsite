import React from "react";

const AboutPage = () => {
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
              <h1>1+</h1>
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
        <div className="personal_project_listing"></div>
      </div>
    </div>
  );
};

export default AboutPage;
