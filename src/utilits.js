export const imgToSVG = () => {
  document.querySelectorAll("img.fn__svg").forEach((el) => {
    const imgID = el.getAttribute("id");
    const imgClass = el.getAttribute("class");
    const imgURL = el.getAttribute("src");

    fetch(imgURL)
      .then((data) => data.text())
      .then((response) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, "text/html");
        let svg = xmlDoc.querySelector("svg");

        setTimeout(() => {
          if (svg !== null) {
            if (typeof imgID !== "undefined") {
              svg.setAttribute("id", imgID);
            }

            if (typeof imgClass !== "undefined") {
              svg.setAttribute("class", imgClass + " replaced-svg");
            }

            svg.removeAttribute("xmlns:a");

            el.parentNode && el.parentNode.replaceChild(svg, el);
          }
        }, 500);
      });
  });
};

// Data image
export const dataBgImg = () => {
  let d = document.querySelectorAll("[data-bg-img]");
  for (let i = 0; i < d.length; i++) {
    const element = d[i];
    element.style.backgroundImage = `url(${element.getAttribute(
      "data-bg-img"
    )})`;
  }
};

// Header
export const stickyNav = () => {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    if (offset > 10) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
};
// Hold
export const holdSection = () => {
  const social = document.querySelector("#social");
  const metaportal_fn_search = document.querySelector(".metaportal_fn_search");

  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    if (offset < 2000) {
      metaportal_fn_search.classList.add("hold");
      social.classList.add("hold");
    } else {
      social.classList.remove("hold");
      metaportal_fn_search.classList.remove("hold");
    }
  });
};

// scroll to top
export const scrollTop = () => {
  const body = document.querySelector("body");

  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    if (offset > 300) {
      body.classList.add("totop-active");
    } else {
      body.classList.remove("totop-active");
    }
  });
};

export const heroSlider2 = () => {
  const flow_calc = (element) => {
    let w = element.clientWidth,
      initial_width = element.getAttribute("data-initial-width"),
      ratio = element.getAttribute("data-ratio"),
      padding = 20;
    padding *= 2;
    let width =
        (w - padding) / 2 > initial_width ? initial_width : (w - padding) / 2,
      height = width * ratio + padding,
      ul = element.getElementsByTagName("ul")[0],
      children_ = ul.getElementsByTagName("li");
    ul.style.height = `${height}px`;
    for (let i = 0; i < children_.length; i++) {
      const children = children_[i],
        img = children.getElementsByTagName("img")[0];
      img.style.width = `${width}px`;
      img.style.height = `${height}px`;
      children.style.left = `50%`;
      children.style.transform = `scale(0)`;
    }
    let current_left = w / 2 - width / 2,
      next1_left = current_left + width / 2.5,
      next2_left = next1_left + width / 2.5,
      next3_left = next2_left + width / 2.5,
      prev1_left = current_left - width / 2.5,
      prev2_left = prev1_left - width / 2.5,
      prev3_left = prev1_left - width / 2.5;
    let current = ul.getElementsByClassName("current")[0],
      next1 = ul.getElementsByClassName("next1")[0],
      next2 = ul.getElementsByClassName("next2")[0],
      prev1 = ul.getElementsByClassName("prev1")[0],
      prev2 = ul.getElementsByClassName("prev2")[0];
    current.style.left = current_left + "px";
    current.style.top = 0;
    current.style.transform = "scale(1) translateZ(0) rotate(0)";
    next1.style.left = next1_left + "px";
    next1.style.top = `90px`;
    next1.style.transform = "scale(1) translateZ(0) rotate(15deg)";
    next2.style.left = next2_left + "px";
    next2.style.top = `240px`;
    next2.style.transform = "scale(1) translateZ(0) rotate(30deg)";
    prev1.style.left = prev1_left + "px";
    prev1.style.top = `30px`;
    prev1.style.transform = "scale(1) translateZ(0) rotate(-15deg)";
    prev2.style.left = prev2_left + "px";
    prev2.style.top = `240px`;
    prev2.style.transform = "scale(1) translateZ(0) rotate(-30deg)";
  };
  const floww_start_autoplay = (element) => {
    let length = element.getElementsByTagName("li").length;
    let i = 0;
    const interval = setInterval(() => {
      i = i === length ? 0 : i + 1;
      floww_change_slide(i, element);
    }, 5000);
    return () => clearInterval(interval);
  };

  const floww_change_slide = (index, element) => {
    let ul = element.getElementsByTagName("ul")[0],
      children_ = ul.getElementsByTagName("li"),
      length = children_.length;
    index = (index + length) % length;
    let el = children_[indexNumber(index, length)];
    if (!el.classList.contains("current")) {
      for (let i = 0; i < children_.length; i++) {
        const children = children_[i];
        children.classList.remove(
          "current",
          "next1",
          "next2",
          "prev1",
          "prev2",
          "next3",
          "prev3"
        );
      }
      el.classList.add("current");
      let next1_index = (index + 1) % length;
      let next2_index = (index + 2) % length;
      let next3_index = (index + 3) % length;
      let prev1_index = (index - 1 + length) % length;
      let prev2_index = (index - 2 + length) % length;
      let prev3_index = (index - 3 + length) % length;
      children_[indexNumber(next1_index, length)].classList.add("next1");
      children_[indexNumber(next2_index, length)].classList.add("next2");
      children_[indexNumber(prev1_index, length)].classList.add("prev1");
      children_[indexNumber(prev2_index, length)].classList.add("prev2");
      if (length > 6) {
        children_[indexNumber(next3_index, length)].classList.add("next3");
        children_[indexNumber(prev3_index, length)].classList.add("prev3");
      }
      floww_calc_call(element);
    }
  };
  const floww_calc_call = (element) => {
    if (typeof element === "undefined") {
      document.getElementByClassName("frenify_cards_gallery").each(function () {
        element = this;
        flow_calc(element);
      });
    } else {
      flow_calc(element);
    }
  };

  const indexNumber = (index, length) => {
    return index == 0 ? length - 1 : index - 1;
  };

  const frenify_cards_gallery = document.querySelectorAll(
    ".frenify_cards_gallery"
  );
  frenify_cards_gallery.forEach((element, i) => {
    floww_change_slide(i, element);
    floww_start_autoplay(element);
  });
};
