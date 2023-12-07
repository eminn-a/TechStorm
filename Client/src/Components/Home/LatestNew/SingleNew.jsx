const SingleNew = ({ title, urlToImage, description, url }) => {
  return (
    <>
      <div className="col-md-4">
        <div className="infoareawrap">
          {urlToImage ? (
            <img src={urlToImage} alt={title} />
          ) : (
            <img
              src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
              alt={title}
            />
          )}
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
