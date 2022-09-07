import classNames from "classnames";
import FooterDefault from "components/footer/footer-default";
import HeaderDefault from "components/header/header-default";
import Head from "next/head";
import React, { ReactNode, useState } from "react";
import styles from "./layout-default.module.scss";

type Props = {
  className?: string;
  children?: ReactNode;
  title?: string;
  description?: string;
};
const LayoutDefault = ({ className, children, title, description }: Props) => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  // On scroll behaviors
  const [pageScrolled, setPageScrolled] = useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setPageScrolled(true);
      } else {
        setPageScrolled(false);
      }
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={classNames(className, styles.layout, pageScrolled && styles.scrolled)}
      >
        <HeaderDefault
          isMenuVisible={isMenuVisible}
          onMenuToggler={setIsMenuVisible}
          scrolled={pageScrolled}
        />
        {children}
        <FooterDefault />
      </div>
    </React.Fragment>
  );
};
export default LayoutDefault;
