const FooterTemplate = () => {
  return (
    <div className="footer text-center">
      <div className="container">
        <div className="row">
          <p className="footernote">Connect with Tech Storm</p>
          <ul className="social-iconsfooter">
            <li>
              <a href="#">
                <i className="fa fa-phone"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-pinterest"></i>
              </a>
            </li>
          </ul>
          <p>
            &copy; 2023 Tech Storm - Emin Apturaim
            <br />
            My official{" "}
            <a href="https://github.com/eminn-a" target="_blank">
              GitHub Profile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTemplate;
