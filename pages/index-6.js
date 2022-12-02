import { Swiper, SwiperSlide } from "swiper/react";
import { About2 } from "../src/components/About";
import Collection from "../src/components/Collection";
import Contact from "../src/components/Contact";
import Faq from "../src/components/Faq";
import News from "../src/components/News";
import RoadMapSlider from "../src/components/RoadMapStep";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import { hero6Slider } from "../src/sliderProps";
const Index6 = () => {
  return (
    <Layout pageTitle={"Home #6"}>
      <section id="full_slider">
        <div className="fn_cs_full_slider">
          <Swiper {...hero6Slider} className="swiper-container">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="bg_overlay" />
                <div className="abs_img" data-bg-img="/img/full_slider/1.jpg" />
                <h3 className="fn__maintitle big" data-text="Meta Legend #4354">
                  Meta Legend #4354
                </h3>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="bg_overlay" />
                <div className="abs_img" data-bg-img="/img/full_slider/2.jpg" />
                <h3 className="fn__maintitle big" data-text="Meta Legend #4355">
                  Meta Legend #4355
                </h3>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="bg_overlay" />
                <div className="abs_img" data-bg-img="/img/full_slider/3.jpg" />
                <h3 className="fn__maintitle big" data-text="Meta Legend #4356">
                  Meta Legend #4356
                </h3>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="bg_overlay" />
                <div className="abs_img" data-bg-img="/img/full_slider/4.jpg" />
                <h3 className="fn__maintitle big" data-text="Meta Legend #4357">
                  Meta Legend #4357
                </h3>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="bg_overlay" />
                <div className="abs_img" data-bg-img="/img/full_slider/5.jpg" />
                <h3 className="fn__maintitle big" data-text="Meta Legend #4358">
                  Meta Legend #4358
                </h3>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="slider_nav">
            <a href="#" className="prev">
              <span className="circle" />
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
            <a href="#" className="next">
              <span className="circle" />
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
          </div>
        </div>
      </section>
      {/* !Home Section #2 */}
      {/* Section About #2 */}
      <About2 />
      {/* !Section About #2 */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Collection Section */}
      <Collection />
      {/* !Collection Section */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section FAQ */}
      <Faq />
      {/* !Section FAQ */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section RoadMap */}
      <RoadMapSlider />
      {/* !Section RoadMap */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section News */}
      <News />
      {/* !Section News */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section */}
      <Contact />
    </Layout>
  );
};
export default Index6;
