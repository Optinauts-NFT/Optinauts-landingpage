import { useEffect } from "react";
import { About2 } from "../src/components/About";
import Collection from "../src/components/Collection";
import Contact from "../src/components/Contact";
import Faq from "../src/components/Faq";
import News from "../src/components/News";
import RoadMapSlider from "../src/components/RoadMapStep";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import { ParticlesDotBg } from "../src/ParticlesBackground";
import { heroSlider2 } from "../src/utilits";
const Index2 = () => {
  // useEffect(() => {
  //   function Star(x, y, length, opacity) {
  //     this.x = parseInt(x);
  //     this.y = parseInt(y);
  //     this.length = parseInt(length);
  //     this.opacity = opacity;
  //     this.factor = 1;
  //     this.increment = Math.random() * 0.03;
  //   }

  //   if (!document.querySelectorAll("#space").length) {
  //     return false;
  //   }
  //   let screenH = document.querySelector(".canvas_bg").clientHeight,
  //     screenW = window.outerWidth,
  //     canvas = document.querySelector("#space");
  //   canvas.setAttribute("height", screenH);
  //   canvas.setAttribute("width", screenW);
  //   let context = canvas.getContext("2d");
  //   var stars = [];

  //   function animate() {
  //     context.clearRect(0, 0, screenW, screenH);
  //     stars.forEach(function (st) {
  //       // this.draw(context);
  //       console.log(st);
  //       context.clearRect(0, 0, canvas.width, canvas.height);
  //       context.beginPath();
  //       context.fillRect(st.x, st.y, st.length, st.factor);
  //       context.fillStyle = "#ffff";
  //       context.fill();
  //       context.closePath();
  //     });
  //   }
  //   for (var i = 0; i < 2000; i++) {
  //     var x = Math.round(Math.random() * screenW);
  //     var y = Math.round(Math.random() * screenH);
  //     var length = 1 + Math.random() * 2;
  //     var opacity = Math.random();

  //     // Create a new star and draw
  //     var star = new Star(x, y, length, opacity);

  //     // Add the the stars array
  //     stars.push(star);
  //   }
  //   animate();
  //   // setInterval(animate, 1000 / 50);
  // }, []);

  useEffect(() => {
    return () => {
      heroSlider2();
    };
  }, []);

  return (
    <Layout pageTitle={"Home #2"}>
      <section id="home2">
        {/* BG */}
        <div className="canvas_bg">
          <ParticlesDotBg />
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
export default Index2;
