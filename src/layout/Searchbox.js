import { Fragment } from "react";
import { connect } from "react-redux";
import { searchToggle } from "../redux/actions/siteSettings";
const Searchbox = ({ searchToggle, search }) => {
  return (
    <Fragment>
      <div
        className={`metaportal_fn_search_closer ${search ? "active" : ""}`}
        onClick={() => searchToggle(false)}
      />
      <div className={`metaportal_fn_searchbox ${search ? "active" : ""}`}>
        <div className="container small">
          <div className="searchbox">
            <input type="text" placeholder="Search here..." />
            <a href="#">
              <img src="/svg/loupe.svg" alt="" className="fn__svg" />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  search: state.site.search,
});

export default connect(mapStateToProps, { searchToggle })(Searchbox);
