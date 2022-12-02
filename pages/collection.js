import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import { getNfts } from "../src/redux/actions/nfts";
const Collection = ({ getNfts, nfts }) => {
  useEffect(() => {
    getNfts();
  }, []);
  const getSplitData = (type) => {
    return type.split(" ").join("-");
  };
  return (
    <Layout pageTitle={"Collection"}>
      <PageBanner pageName={"Collection"} />

      {/* Collection Page */}
      <div className="metaportal_fn_collectionpage">
        <div className="container">
          <div className="metaportal_fn_collection">
            {/* Filters */}

            {/* !Filters */}
            <div className="metaportal_fn_clist">
              {/* Result Box */}

              {/* !Result Box */}
              {/* Result List */}
              <div className="metaportal_fn_result_list">
                <div className="metaportal_fn_drops">
                  <ul className="grid">
                    {nfts &&
                      nfts.map((nft, i) => (
                        <li
                          className={
                            getSplitData(nft.type) +
                            " " +
                            getSplitData(nft.special) +
                            " " +
                            getSplitData(nft.clothing)
                          }
                          key={i}
                        >
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src={nft.image} alt="" />
                              <Link href={`/nft/${nft.id}`}>
                                <a className="full_link" />
                              </Link>
                            </div>
                            <div className="title_holder">
                              <h3 className="fn_title">
                                <Link href={`/nft/${nft.id}`}>{nft.title}</Link>
                              </h3>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              {/* !Result List */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  nfts: state.nfts.data,
});

export default connect(mapStateToProps, { getNfts })(Collection);
