const SingleNew = ({ title, urlToImage, description, url }) => {
  return (
    <>
      <div className="col-md-4">
        <div className="infoareawrap">
          <img src={urlToImage} alt={title} />
          <h1 className="text-center subtitle">{title}</h1>
          <p>{description}</p>
          <p className="text-center">
            <a href={url} target="_blank">
              - See details -
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleNew;
