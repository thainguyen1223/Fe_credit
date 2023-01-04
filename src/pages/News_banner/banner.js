import React, { useState, useEffect } from "react";
import request from "../../utils/Request";
import "./banner.scss";
import IMG_VCB from "../../image/VCB.jpg";
import News from "../News/News";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

function Banner() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [show, setShow] = useState(false);
  const [staff, setStaff] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  useEffect(() => {
    const getdata = async () => {
      const response = await request.get(`news/?limit=${limit}&page=${page}`);
      setStaff(response.data.data);
      console.log(response);

    };
    getdata();
  }, []);
  return (
    <div className="wrapper-banner">
      <div className="banner-group">
        <Slider className="silder" {...settings}>
          {staff.map((newss, index) => (
            <div className="banner" key={index}>
              <img src={IMG_VCB} alt="IMG_VCB" className="IMG_VCB" />
              <div className="banner-text">
                <h3>{newss.title}</h3>
                <p>{newss.detailWork}</p>
           
                <button className="btn-show">HIỂN THỊ</button>
         
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div>
        <News />
      </div>
    </div>
  );
}

export default Banner;
