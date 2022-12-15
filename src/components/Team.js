const Team = () => {

  const nfts = [
    {
      "id": 1,
      "image": "/img/team/2.png",
      "name": "Zach aztro",
      "title": "Head/Founder"
    },
    {
      "id": 2,
      "image": "/img/team/5.png",
      "name": "MareMartian",
      "title": "Artist"
    },
    {
      "id": 3,
      "image": "/img/team/1.png",
      "name": "Flexcent",
      "title": "Community Manager/Admin"
    },
    {
      "id": 4,
      "image": "/img/team/3.png",
      "name": "Jason Factor",
      "title": "Engineer"
    }
  ];

  const getSplitData = (type) => {
    return type.split(" ").join("-");
  };

  return (
    <section id="collection">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Our Team"
          data-align="center"
        >
          Our Team
        </h3>
      

      {/* Team Page */}
          <div className="metaportal_fn_collection">
            <div className="metaportal_fn_drops">
                <ul className="grid">
                  {nfts &&
                    nfts.map((nft, i) => (
                      <li key={i}>
                        <div className="nft__item">
                          <div className="img_holder">
                            <img src={nft.image} alt="" />
                          </div>
                          <div className="title_holder">
                            <h3 className="fn_desc">
                              {nft.name}
                            </h3>
                            <h4 className="fn_title">
                              {nft.title}
                            </h4>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
            </div>
          </div>
        </div>

    </section>
  );
};
export default Team;
