const LatestNewsTemp = () => {
  return (
    <div className="item content">
      <div className="container">
        <div className="row">
          <h1 className="text-center latestitems">Latest News</h1>
          <div className="wow-hr type_short">
            <span className="wow-hr-h">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
          </div>

          <div className="col-md-4">
            <div className="infoareawrap">
              <img
                src="/images/Intel-Core-14th-Gen-Desktop-Lineup.jpg"
                alt=""
              />
              <h1 className="text-center subtitle">
                New Inter 14th generation
              </h1>
              <p>
                If you wish to change an element to look or function differently
                than shown in the demo, we will be glad to assist you. This is a
                paid service due to theme support requests solved with priority.
              </p>
              <p className="text-center">
                <a href="#">- See details -</a>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="infoareawrap">
              <img src="/images/3060vs4060.png" alt="" />
              <h1 className="text-center subtitle">
                3060vs4060 Which one you chose?
              </h1>
              <p>
                If you wish to change an element to look or function differently
                than shown in the demo, we will be glad to assist you. This is a
                paid service due to theme support requests solved with priority.
              </p>
              <p className="text-center">
                <a href="#">- See details -</a>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="infoareawrap">
              <img src="/images/test.jpg" alt="" />
              <h1 className="text-center subtitle">Hire Us</h1>
              <p>
                If you wish to change an element to look or function differently
                than shown in the demo, we will be glad to assist you. This is a
                paid service due to theme support requests solved with priority.
              </p>
              <p className="text-center">
                <a href="#">- See details -</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsTemp;
