import Link from "next/link";
import Image from "next/image";
import { HomeIcon, UsersIcon, SwatchIcon, ShoopingBagIcon } from "../icons";

export default function Sidebar() {
  const menuItem = [
    { text: "Deshboard", url: "/", icon: <HomeIcon /> },
    { text: "Users", url: "/users", icon: <UsersIcon /> },
    { text: "Product Type", url: "/product-type", icon: <SwatchIcon /> },
    { text: "Products", url: "/products", icon: <ShoopingBagIcon /> },
  ];
  return (
    <div className="sidebar-main">
      <div className="p-4 m-4">
        <h1 className="text-3xl font-semibold">EStore</h1>
      </div>
      <ul className="mx-auto text-lg flex flex-col">
        {menuItem.map((menuItem, key) => (
          <li key={key}>
            <Link href={menuItem.url}>
              <div className="siebar-list-item">
                <span className="mx-2">{menuItem.icon}</span>
                {menuItem.text}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="sidebar-usercard">
        <div className="flex flex-row m-5 mb-8">
          <Image
            height={50}
            width={50}
            src="./image/file.svg"
            alt="User Avatar"
            className="border-gray-600 rounded-full border-2"
          />
          <div className="m-auto text-lg">John Joe</div>
        </div>
      </div>
    </div>
  );
}
