import { useState } from "react";

const Faq = () => {
  const faqs1 = [
    {
      title: "What is Meta Legends?",
      dec: "A handcrafted collection of 10,000 characters developed by artist Frenify. In its purest form, RENGA is art and the art of storytelling.",
    },
    {
      title: "WHAT IS THE ART OF SEASONS?      ",
      dec: "A handcrafted collection of 10,000 characters developed by artist Frenify. In its purest form, RENGA is art and the art of storytelling.",
    },
    {
      title: "HOW DO I STAY UPDATED AND SAFE?",
      dec: "A handcrafted collection of 10,000 characters developed by artist Frenify. In its purest form, RENGA is art and the art of storytelling.",
    },
    {
      title: "WHAT IS META LEGENDS?",
      dec: "A handcrafted collection of 10,000 characters developed by artist Frenify. In its purest form, RENGA is art and the art of storytelling.",
    },
  ];
  const faqs2 = [
    {
      title: "How can I mint my character?",
      dec: "A handcrafted collection of 10,000 characters developed by artist Frenify. In its purest form, RENGA is art and the art of storytelling.",
    },
    {
      title: "HOW MANY LEGENDS IS ISSUED?",
      dec: "A handcrafted collection of 10,000 characters developed by artist Frenify. In its purest form, RENGA is art and the art of storytelling.",
    },
    {
      title: "WHEN IS THE SALE DATE?",
      dec: "A handcrafted collection of 10,000 characters developed by artist Frenify. In its purest form, RENGA is art and the art of storytelling.",
    },
    {
      title: "WHAT ABOUT BLOCKCHAIN?",
      dec: "A handcrafted collection of 10,000 characters developed by artist Frenify. In its purest form, RENGA is art and the art of storytelling.",
    },
  ];
  const [active, setActive] = useState(`a0`);
  const faqMap = (arr, index) => {
    return arr.map((data, i) => (
      <div className="fn_cs_accordion" key={i}>
        <div className={`acc_item ${index + i === active ? "active" : ""}`}>
          <div
            className="acc_header"
            onClick={() =>
              setActive(`${index + i}` === active ? null : `${index + i}`)
            }
          >
            <h3 className="fn__maintitle" data-text={data.title}>
              {data.title}
            </h3>
            <span className="icon">
              <span />
            </span>
          </div>
          <div
            className="acc_content"
            style={{
              display: `${index + i === active ? "block" : "none"}`,
            }}
          >
            <p>{data.dec}</p>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <section id="faq">
      <div className="container">
        <div className="fn_cs_faq">
          <div className="faq_col">
            <h3 className="fn__maintitle" data-text="FAQ">
              FAQ
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Pellentesque eu ex iaculis, tempus ex eu, consectetur lectus.
                Aenean nec iaculis est, a mattis turpis. Morbi posuere lorem id
                risus luctus, luctus tristique enim luctus. Vivamus ut tincidunt
                erat.
              </p>
              <p>
                Nunc nec sollicitudin elit, ut pretium dui. Nulla facilisis
                pulvinar odio ac suscipit. Quisque pretium, est id facilisis
                luctus, magna lorem posuere velit.
              </p>
            </div>
          </div>
          <div className="faq_col">
            <div className="fn_cs_accordion">{faqMap(faqs1, "a")}</div>
          </div>
          <div className="faq_col">
            <div className="fn_cs_accordion">{faqMap(faqs2, "b")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
