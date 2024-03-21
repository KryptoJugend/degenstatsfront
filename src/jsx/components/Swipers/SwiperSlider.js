import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperSlideCard from "./SwiperSlideCard";
import { useEffect } from "react";
import axios from "axios";

const SwiperSlider = ({
  bxgavailable,
  bxgstacked,
  referralBonus,
  stakingreferralBonus,
  totalEarning,
  RewardMEMES,
  rewardBonus,
  todayEarning,
  todayProfit,
  weeklyProfit,
  monthlyProfit,
  solPrice
}) => {

  
 

  return (
    <div className="col-xl-12">
      <Swiper
        className="mySwiper"
        speed={1500}
        slidesPerView={3}
        spaceBetween={20}
        loop={false}
        //autoplay= {{
        //delay: 1200,
        //}}
        //modules={[ Autoplay ]}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          416: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },

          1500: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1788: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <SwiperSlideCard
            amount={isNaN(parseFloat(bxgavailable)) ? 0 : parseFloat(bxgavailable).toFixed(2)}
            translateKey="dashboard_card_1"
            currency="SOL"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideCard
            amount={isNaN(parseFloat(todayProfit)) ? 0: parseFloat(todayProfit).toFixed(2)}
            translateKey="dashboard_card_3"
            currency=" SOL"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideCard
            amount={isNaN(parseFloat(weeklyProfit)) ? 0 : parseFloat(weeklyProfit).toFixed(2)}
            translateKey="dashboard_card_4"
            currency=" SOL"
          />
        </SwiperSlide>
   
      </Swiper>
      <Swiper
        className="mySwiper"
        speed={1500}
        slidesPerView={3}
        spaceBetween={20}
        loop={false}
        //autoplay= {{
        //delay: 1200,
        //}}
        //modules={[ Autoplay ]}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          416: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },

          1500: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1788: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <SwiperSlideCard
            amount={isNaN(parseFloat(monthlyProfit)) ? 0 : parseFloat(monthlyProfit).toFixed(2)}
            translateKey="dashboard_card_5"
            currency="SOL"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideCard
            amount={isNaN(parseFloat(bxgavailable*solPrice)) ? 0 : parseFloat(bxgavailable*solPrice).toFixed(2)}
            translateKey="Total Holdings in USD ($)"
            currency="$ USD"
          />
        </SwiperSlide>
       
   
      </Swiper>
   
    </div>
  );
};

export default SwiperSlider;
