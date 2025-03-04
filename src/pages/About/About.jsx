import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="main-content">
      <section className="about section " id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            {/* <!-- row About Start  --> */}
            <div className="about-content padd-15">
              {/*<!-- row About-content start  --> */}
              <div className="row">
                <div className="about-text">
                  <p>
                    My name is Felipe Augusto, I'm a Brazilian currently living
                    in Portugal, looking for an opportunity in my area for
                    better learning. I graduated in systems analysis and
                    development in 2022, where I already had knowledge in the
                    area and worked in the area, using college to expand my
                    knowledge in other areas and for the completion diploma. I
                    consider myself a committed person and extremely dedicated
                    to my dreams and work.
                  </p>
                </div>
              </div>

              <div className="row">
                {/* <!-- row Personal Info  Start --> */}
                {/* <!-- Personal Info Start --> */}
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Birthday: <span> 16 mar 1998</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Age: <span> 27</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email: <span> felipe199892@live.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree: <span> Graduated</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Country: <span> Portugal </span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        freelancer: <span> Available </span>
                      </p>
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="buttons padd-15">
                      <a href="#" className="btn">
                        Download CV
                      </a>
                      <a href="#contact" className="btn hire-me">
                        Hire Me
                      </a>
                    </div>
                  </div> */}
                </div>
                {/* <!-- Personal Info End --> */}
                {/* <!-- Skills  Start --> */}
                <div className="skills padd-15">
                  <div className="row">
                    {/* HTML Skill */}
                    <div className="skill-item padd-15">
                      <h5>HTML</h5>
                      <div className="progress">
                        {/* Progress bar width is dynamically adjusted */}
                        <div
                          className="progress-in"
                          style={{ width: "90%" }}
                        ></div>
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>

                    {/* CSS Skill */}
                    <div className="skill-item padd-15">
                      <h5>CSS</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "90%" }}
                        ></div>
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>

                    {/* JavaScript Skill */}
                    <div className="skill-item padd-15">
                      <h5>JS</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "70%" }}
                        ></div>
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Skills  End --> */}
              </div>
              {/* <!-- row Personal Info  End --> */}

              <div className="row">
                {/* <!-- row Education and Experience Start  --> */}
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* <!-- TimeLine item education --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar "></i> 2019 - 2022
                          </h3>
                          <h4 className="timeline-title">
                            Analysis and systems development
                          </h4>
                          <p className="timeline-text">
                            I graduated in system analysis and development from
                            Uninassau in 2022, lasting 24 months, where it was
                            possible to learn about programming, databases,
                            networks, project management, software engineering,
                            etc.
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar "></i> 2020 - 2020
                          </h3>
                          <h4 className="timeline-title">
                            Introduction to Cybersecurity
                          </h4>
                          <p className="timeline-text">
                            The Cisco Introduction to Cybersecurity course,
                            offered by the Cisco Networking Academy platform, is
                            aimed at beginners and aims to provide a basic
                            understanding of fundamental cybersecurity concepts.
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar "></i> 2016 - 2016
                          </h3>
                          <h4 className="timeline-title">
                            Assembly and maintenance of computers and notebooks
                          </h4>
                          <p className="timeline-text">
                            My training provides practical and theoretical
                            knowledge to install, configure, diagnose and repair
                            hardware and software in computing devices.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Row Education End  --> */}
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/*<!-- TimeLine item education -->*/}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar "></i> 2017 - 2022
                          </h3>
                          <h4 className="timeline-title">Network technician</h4>
                          <p className="timeline-text">
                            I worked in the Brazilian army for 5 years as a
                            network technician and server manager.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- row Education and Experience End  --> */}
            </div>
            {/* <!-- row About-content end  --> */}
          </div>
          {/* <!-- row About end  --> */}
        </div>
      </section>
    </div>
  );
};

export default About;
