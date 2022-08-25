import NavA from "@components/navigation/nav/nav-a";
import NavSocialA from "@components/navigation/nav/nav-social-a";
import { MenuItem } from "@typescript/types";

type Props = {
  footerMenu?: MenuItem[];
  socialMenu?: MenuItem[];
  noteText?: string;
};

const FooterA = ({ footerMenu, socialMenu, noteText }: Props) => {
  return (
    <footer className="footer footer-page mb-4">
      <div className="footer-container container-fluid">
        <div className="row align-items-center">
          <div className="col-auto me-auto">
            <p className="mb-0">2021 Allseason Co. All rights reserved.</p>
          </div>
          <div className="col-auto">
            <div className="nav-group">
              <NavA menuItems={footerMenu} />
              <NavSocialA menuItems={socialMenu} />
              {/* <ul className="nav nav-social">
                <li className="nav-item">
                  <a className="btn btn-icon-a icon-only" href="#">
                    <span className="icon icon-lg">
                      <i className="ion ion-logo-instagram"></i>
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-icon-a icon-only" href="#">
                    <span className="icon icon-lg">
                      <i className="ion ion-logo-pinterest"></i>
                    </span>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterA;
