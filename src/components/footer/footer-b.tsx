import classNames from "classnames";
import React from "react";
import styles from "./footer-b.module.css";

type Props = {
  notePrimaryElement?: React.ReactElement;
  noteSecondaryElement?: React.ReactElement;
  socialInviteText?: string;
  navingationLinks?: {
    name: string;
    url: string;
  }[];
  socialLinks?: {
    name: string;
    url: string;
    icon?: React.ReactSVGElement;
  }[];
};
const FooterB = ({
  navingationLinks,
  socialLinks,
  socialInviteText,
  notePrimaryElement,
  noteSecondaryElement,
}: Props) => {
  return (
    <div className={classNames(styles.footerA)}>
      <div className={classNames(styles.wrapper, "container-fluid")}>
        <div className={classNames(styles.footerPrimary)}>
          <div className="row">
            <div className="col col-12 col-lg-6">
              {navingationLinks && (
                <ul className={classNames(styles.navFooter)}>
                  {navingationLinks.map((navigationLink) => {
                    return (
                      <li key={navigationLink.name} className={classNames(styles.navItem)}>
                        <a className={classNames(styles.navLink)} href={navigationLink.url}>
                          {navigationLink.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className="col col-12 col-lg-6 d-lg-flex justify-content-lg-end mt-3 mt-lg-0">
              {socialLinks && (
                <div className={classNames(styles.social)}>
                  {socialInviteText && <p className={classNames(styles.inviteText)}>{socialInviteText}</p>}
                  <ul className={classNames(styles.navFooter, styles.navSocial)}>
                    {socialLinks.map((socialLink) => {
                      return (
                        <li key={socialLink.name} className={classNames(styles.navItem)}>
                          <a className={classNames(styles.navSocialIcon)} href={socialLink.url}>
                            {socialLink.name}
                          </a>
                          {/* <a className="icon-md" href="">
                            <i className="icon ion-logo-instagram"></i>
                            </a> */}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={classNames(styles.footerSecondary)}>
          <div className="row">
            <div className="col-md col-12">{notePrimaryElement}</div>
            <div className="col-md-auto">{noteSecondaryElement}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterB;
