import Layout from "../src/layout/Layout";
const NoResults = () => {
  return (
    <Layout pageTitle={"No Result"}>
      <div className="metaportal_fn_404">
        <div className="container small">
          <div className="message_holder">
            <span className="icon">
              <img src="/svg/browser.svg" alt="" className="fn__svg" />
            </span>
            <h4
              className="fn__maintitle"
              data-text="Nothing Found"
              data-align="center"
            >
              Nothing Found
            </h4>
            <p>
              Sorry, no content matched your criteria. Try searching something
              else.
            </p>
            <div className="container-custom">
              <form>
                <input name="s" type="text" placeholder="Search here..." />
                <a href="#" className="metaportal_fn_button">
                  <img src="/svg/loupe.svg" alt="" className="fn__svg" />
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default NoResults;
