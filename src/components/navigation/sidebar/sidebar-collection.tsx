import { useRouter } from "next/router";
import { MenuItem } from "types/types";
import SidebarNavA from "./sidebar-nav-a";

const SidebarCollection = ({}) => {
  const menuItems: MenuItem[] = [
    {
      title: "Bags",
      slug: "bags",
      subMenuItems: [
        {
          title: "Handbags",
          slug: "handbags",
        },
        {
          title: "Backpacks",
          slug: "backpacks",
        },
      ],
    },
    {
      title: "Women",
      slug: "women",
      subMenuItems: [
        {
          title: "Dress",
          slug: "dress",
        },
        {
          title: "Shoes",
          slug: "shoes",
        },
        {
          title: "Pant",
          slug: "pant",
        },
        {
          title: "Cloth",
          slug: "cloth",
        },
        {
          title: "T Shirt",
          slug: "tshirt",
        },
      ],
    },
    {
      title: "Men",
      slug: "men",
      subMenuItems: [
        {
          title: "Dress",
          slug: "dress",
        },
        {
          title: "Shoes",
          slug: "shoes",
        },
        {
          title: "Pant",
          slug: "pant",
        },
        {
          title: "Cloth",
          slug: "cloth",
        },
        {
          title: "T Shirt",
          slug: "tshirt",
        },
      ],
    },
    {
      title: "Dress",
      slug: "dress",
    },
    {
      title: "Shoes",
      slug: "shoes",
      subMenuItems: [
        {
          title: "All",
          slug: "",
        },
        {
          title: "Leather",
          slug: "leather",
        },
      ],
    },
  ];
  const router = useRouter();
  const leftOpenedActivePath = router.asPath.replace("/collections/", "");
  return (
    <>
      <SidebarNavA
        parentPath="/collections"
        menuItems={menuItems}
        openedActivePath={leftOpenedActivePath}
      />
    </>
  );
};
export default SidebarCollection;
