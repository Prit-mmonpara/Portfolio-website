import React from "react";
import Typical from "react-typical";
import profileImg from "../../assets/profile.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>Hy I am</h1>
        <h2 className="fullname">Prit Manishbhai Monpara</h2>
        <h2>
          I'm a {""}
          <Typical
            steps={[
              "full stack developer 💙",
              100,
              "Frontend developer 🚀",
              100,
              "Backend Developer 🏆",
              100,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          lorem ipsum dolor sit amet, consectetur adip wrapper, sed diam nonum
          vulputate adip non pro id el aspect et just eu fugiat nulla pariatur
          et ullamcorper ullamcorper
        </p>

        {/* payment links  */}
        <div className="header-payment-container">
          <button>Hire me</button>
          <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-amex"></i>
        </div>
      </div>

      <div className="profile-img-container">
        <img src={profileImg} alt=""></img>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
