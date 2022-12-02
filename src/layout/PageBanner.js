import Link from "next/link";
import { Fragment } from "react";

const PageBanner = ({ pageName }) => {
  return (
    <Fragment>
      <div className="metaportal_fn_pagetitle">
        <div className="container small">
          <div className="pagetitle">
            <h3
              className="fn__maintitle big"
              data-text={pageName}
              data-align="center"
            >
              {pageName}
            </h3>
            <p>
              <Link href="/">Home</Link>
              <span className="divider">/</span>
              <span className="text">{pageName}</span>
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="fn_cs_section_divider">
        <div className="divider">
          <span className="short" />
          <span className="long" />
          <span className="short" />
        </div>
      </div>
    </Fragment>
  );
};
export default PageBanner;
