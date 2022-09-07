import NavA from "components/navigation/nav/nav-a";
import NavSocialA from "components/navigation/nav/nav-social-a";
import { MenuItem } from "types/types";
import classNames from "classnames";
import styles from "./footer-a.module.scss";

type Props = {
  className?: String;
  footerMenu?: MenuItem[];
  socialMenu?: MenuItem[];
  noteElement?: string | React.ReactElement;
};

const FooterA = ({ className, footerMenu, socialMenu, noteElement }: Props) => {
  return (
    <footer className={classNames(className, styles.footerA)}>
      <div className={classNames(styles.footerContainer)}>
        <div className={classNames(styles.footerLine, "mb-3", "pb-3")}>
          <div className="row">
            <div className="col-12">
              <NavA menuItems={footerMenu} />
            </div>
          </div>
        </div>
        <div className={classNames(styles.footerLine)}>
          <div className="row">
            <div className="col-auto me-auto">{noteElement}</div>
            <div className="col-auto">
              <div className="nav-group">
                <NavSocialA menuItems={socialMenu} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterA;
