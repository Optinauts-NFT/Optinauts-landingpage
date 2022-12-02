import { useEffect } from "react";
import { About2 } from "../src/components/About";
import Collection from "../src/components/Collection";
import Contact from "../src/components/Contact";
import Faq from "../src/components/Faq";
import News from "../src/components/News";
import RoadMapSlider from "../src/components/RoadMapStep";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import { heroSlider2 } from "../src/utilits";
const Index3 = () => {
  useEffect(() => {
    return () => {
      heroSlider2();
    };
  }, []);
  return (
    <Layout pageTitle={"Home #3"}>
      {/* Home Section #2 */}
      <section id="home2">
        {/* BG */}
        <div className="video_bg">
          <video src="/img/bg.mp4" autoPlay loop muted />
        </div>
        {/* !BG */}
        <div className="container">
          <h3
            className="fn__maintitle big"
            data-text="Meta Legends"
            data-align="center"
          >
            Meta Legends
          </h3>
          <div className="fn_cs_desc">
            <p>
              Meta Legends represent a collection of 17,000 legends categorized
              by level of rarity and generated with hundreds of elements. The
              Legends are stored as ERC-721 tokens on the Ethereum blockchain
              and hosted on IPFS.
            </p>
          </div>
        </div>
        {/* Card Slider */}
        <div
          className="frenify_cards_gallery"
          data-initial-width={540}
          data-ratio="0.925"
        >
          <ul>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/10.jpg" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/11.jpg" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/1.jpg" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/2.jpg" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/3.jpg" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/5.jpg" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/6.jpg" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/7.jpg" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/8.jpg" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/9.jpg" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* !Card Slider */}
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
export default Index3;
