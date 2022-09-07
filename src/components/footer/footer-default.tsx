import IconA from "components/general/icon/icon-a";
import { MenuItem } from "types/types";
import FooterA from "./footer-a";

const FooterDefault = ({}) => {
  const footerMenu: MenuItem[] = [
    {
      title: "Blog",
      href: "#blog",
    },
    {
      title: "Contact",
      href: "#contact",
    },
    {
      title: "Support",
      href: "#support",
    },
    {
      title: "Products",
      href: "#products",
    },
    {
      title: "About",
      href: "#about",
    },
  ];
  const socialMenu: MenuItem[] = [
    {
      title: "Facebook",
      href: "//facebook.com/ourpage",
      element: (
        <IconA
          size="small"
          imageElement={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56.002"
              height="55.656"
              viewBox="0 0 56.002 55.656"
            >
              <g id="logo-facebook" transform="translate(-295.239 -1077.675)">
                <g id="Group_132" data-name="Group 132">
                  <path
                    id="Path_208"
                    data-name="Path 208"
                    d="M351.241,1105.67a28,28,0,1,0-32.375,27.661v-19.565h-7.112v-8.1h7.112V1099.5c0-7.016,4.181-10.9,10.576-10.9a43.1,43.1,0,0,1,6.269.547v6.892h-3.533c-3.476,0-4.564,2.157-4.564,4.375v5.25h7.765l-1.24,8.1h-6.523v19.567a28.008,28.008,0,0,0,23.625-27.663Z"
                    fillRule="evenodd"
                  />
                </g>
              </g>
            </svg>
          }
        />
      ),
    },
    {
      title: "Twitter",
      href: "//twitter.com/ourpage",
      element: (
        <IconA
          size="small"
          imageElement={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60.002"
              height="48.001"
              viewBox="0 0 60.002 48.001"
            >
              <g id="logo-twitter" transform="translate(-162.79 -1409.501)">
                <g id="Group_183" data-name="Group 183">
                  <path
                    id="Path_276"
                    data-name="Path 276"
                    d="M222.792,1415.19a25.25,25.25,0,0,1-7.069,1.912,12.192,12.192,0,0,0,5.416-6.7,24.718,24.718,0,0,1-7.82,2.938,12.4,12.4,0,0,0-8.988-3.838,12.209,12.209,0,0,0-12.308,12.112,11.629,11.629,0,0,0,.318,2.763,35.1,35.1,0,0,1-25.375-12.663,11.959,11.959,0,0,0-1.674,6.088,12.081,12.081,0,0,0,5.5,10.087,12.184,12.184,0,0,1-5.6-1.512v.15a12.171,12.171,0,0,0,9.875,11.875,12.579,12.579,0,0,1-3.242.425,11.838,11.838,0,0,1-2.314-.225,12.3,12.3,0,0,0,11.506,8.412,24.952,24.952,0,0,1-15.29,5.188,25.5,25.5,0,0,1-2.937-.175,34.841,34.841,0,0,0,18.842,5.475c22.67,0,35.055-18.463,35.055-34.475,0-.525-.013-1.05-.038-1.563a24.782,24.782,0,0,0,6.141-6.275Z"
                  />
                </g>
              </g>
            </svg>
          }
        />
      ),
    },
  ];
  return (
    <FooterA
      noteElement={<p>Copyright cutekit.net</p>}
      socialMenu={socialMenu}
      footerMenu={footerMenu}
    />
  );
};

export default FooterDefault;
