import React from "react";
import "./home.css";
import ME from "../../assets/img/IMG_5096.jpeg";
import Typing from "../../Components/Typing/Typing";
<<<<<<< HEAD
import SwitcherColors from "../../Components/toggles/SwitcherColors";
import DarkMode from "../../Components/toggles/DarkMode";
=======
>>>>>>> 7f0cd5e (First commit)

const Home = () => {
  return (
    <div className="main-content">
      <section className="home section " id="home">
        <div className="container">
          <div className="row">
            <div className="home-info padd-15 mobile ">
              <h3 className="hello">
                Hello,my name is <span className="name">Felipe augusto</span>
              </h3>
              <h1 className="my-profession">
<<<<<<< HEAD
                I&apos;m a
=======
                I'm a
>>>>>>> 7f0cd5e (First commit)
                <span className="typing">
                  <Typing />
                </span>
              </h1>
              <p>
                I'm a web developer ,looking my first job as a web developer.
              </p>
              <a href="#contact" className="btn hire-me">
                Hire Me
              </a>
            </div>
            <div className="home-img padd-15">
              <img src={ME} alt="" />
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      <SwitcherColors />
      <DarkMode />
=======
>>>>>>> 7f0cd5e (First commit)
    </div>
  );
};

export default Home;
