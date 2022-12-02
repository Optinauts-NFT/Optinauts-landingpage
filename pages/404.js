import Layout from "../src/layout/Layout";
const E404 = () => {
  return (
    <Layout pageTitle={"404 Not Found"}>
      <div className="metaportal_fn_404">
        <div className="container small">
          <div className="message_holder">
            <h3 className="fn__gradient_title">404</h3>
            <h4
              className="fn__maintitle"
              data-text="Page Not Found"
              data-align="center"
            >
              Page Not Found
            </h4>
            <p>
              Sorry, but the page you are looking for was moved, removed,
              renamed or might never existed...
            </p>
            <div className="container-custom">
              <form>
                <input name="s" type="text" />
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
export default E404;
