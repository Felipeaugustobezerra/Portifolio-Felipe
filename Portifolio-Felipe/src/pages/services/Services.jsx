import React from "react";
import "./services.css";
import { FaNetworkWired } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="main-content">
      <section className="service section" id="services">
        <div className="container">
          {/*<!-- Container Service Start  -->*/}
          <div className="row">
            <div className="section-title padd-15">
              <h2>Services</h2>
            </div>
          </div>
          <div className="row">
            {/*<!-- row Service Start  -->*/}
            {/*<!--  Service item Start  -->*/}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa">
                    <FaLaptop />
                  </i>
                </div>
                <h4>Web Development</h4>
                <p></p>
              </div>
            </div>
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa">
                    <FaMobileAlt />
                  </i>
                </div>
                <h4>Mobile Development</h4>
                <p></p>
              </div>
            </div>
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa">
                    <FaSuitcase />
                  </i>
                </div>
                <h4>Assembly and maintenance of computers </h4>
                <p></p>
              </div>
            </div>
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa">
                    <FaNetworkWired />
                  </i>
                </div>
                <h4>Network technician</h4>
                <p></p>
              </div>
            </div>
            {/* <!--  Service item End  --> */}
          </div>
          {/* <!-- row Service End  --> */}
        </div>
        {/*<!-- Container Service End  -->*/}
      </section>
    </div>
  );
};

export default Services;
