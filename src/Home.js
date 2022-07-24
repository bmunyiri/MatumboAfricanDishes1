import ChapoMix  from "./Components/images/ChapoMix.jpg";
import UgaliMix  from "./Components//images/UgaliMix.jpg";
import Githeri_Rice_Liver_Cabbage from "./Components/images/Githeri_Rice_Liver_Cabbage.jpg";
import Nyama_Choma  from "./Components/images/Nyama_Choma.jpg";
import kuku  from "./Components/images/Kuku.jpg";
import Nyama_Choma_Chapati  from "./Components/images/Nyama_choma_Chapati.jpg";
import Kachumbari1  from "./Components/images/Kachumbari1.jpg";
import Kachumbari_salads  from "./Components/images/Kachumbari_salads.jpg";
import Fried_Tilapia_Ugali from "./Components/images/Fried_Tilapia_Ugali.jpg";


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
    <div>
       <h1>Matumbo Food Kitchen {'\n'}</h1>
       <h6 className="menu">All iamges are from wikimedia.</h6>
    </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><><h2><img src={ Fried_Tilapia_Ugali } alt="Fried_Tilapia_Ugali" className="World-Map" />Fried_Tilapia_Ugali</h2> </></SwiperSlide> 
        <SwiperSlide><><h2><img src={ Kachumbari_salads } alt="Kachumbari_salads" className="World-Map" />Kachumbari_salads</h2> </></SwiperSlide>
        <SwiperSlide><><h2><img src={Githeri_Rice_Liver_Cabbage } alt="Ugali Mix" className="World-Map" />Githeri_Rice_Liver_Cabbage</h2> </></SwiperSlide>
       <SwiperSlide><><h2><img src={Nyama_Choma  } alt="Nyama_Choma " className="World-Map" />Nyama_Choma </h2> </></SwiperSlide>
       <SwiperSlide><><h2><img src={kuku } alt="Chapoo Mix" className="World-Map" />Kuku</h2> </></SwiperSlide>
       <SwiperSlide><><h2><img src={Nyama_Choma_Chapati} alt="Nyama_Choma_Chapati" className="World-Map" />Nyama_Choma_Chapati</h2> </></SwiperSlide>
       <SwiperSlide><><h2><img src={ Kachumbari1 } alt="Kachumbari1" className="World-Map" />Kachumbari1</h2> </></SwiperSlide>
       <SwiperSlide><><h2><img src={UgaliMix } alt="Ugali Mix" className="World-Map" />Ugali & Mix Veg</h2> </></SwiperSlide>
       <SwiperSlide><><h2><img src={Githeri_Rice_Liver_Cabbage } alt="Githeri_Rice_Liver_Cabbage" className="World-Map" />Githeri_Rice_Liver_Cabbage</h2> </></SwiperSlide>
        <SwiperSlide><><h2><img src={ChapoMix} alt="Chapoo Mix" className="World-Map" />Chapati & Mix Veg</h2> </></SwiperSlide>
         
         </Swiper>
    </>
  );
}
