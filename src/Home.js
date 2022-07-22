import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB4286684220_.jpg"
          alt="logo"
        />
      </div>

      <div className="home_row">
        <Product
          id="1234"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />
        <Product
          id="1235"
          title="Problems and Solutions in Inorganic Chemistry for JEE (Main & Advanced) Paperback – 1 July 2019"
          price={19.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51lwoe9aUzL._SX384_BO1,204,203,200_.jpg"
          rating={5}
        />
      </div>

      <div className="home_row">
        <Product
          id="1236"
          title="Before You Start Up: How to Prepare to Make Your Startup Dream a Reality Paperback – 24 November 2017
          "
          price={19.99}
          image="https://images-eu.ssl-images-amazon.com/images/I/51cnUtjC5lS._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
          rating={5}
        />
        <Product
          id="1237"
          title="India Today English Jan 03 , 2022 (Anniversary Special) Paperback Bunko – 25 January 2021"
          price={19.99}
          image="https://images-eu.ssl-images-amazon.com/images/I/51SICavnBKL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          rating={5}
        />
        <Product
          id="1238"
          title="India Today English 06 June , 2022 Paperback Shinsho – 26 May 2022
          by India Today Group (Author), ,Special Issue : an in depth assesment of modi government's performance, 3 years of Modi 2.0 (Foreword)"
          price={19.99}
          image="https://images-eu.ssl-images-amazon.com/images/I/61LHrL68orL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
          rating={5}
        />
      </div>

      <div className="home_row">
        <Product
          id="1239"
          title="Problems and Solutions in Inorganic Chemistry for JEE (Main & Advanced) Paperback – 1 July 2019"
          price={19.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51lwoe9aUzL._SX384_BO1,204,203,200_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
