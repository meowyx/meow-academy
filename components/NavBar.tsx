import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar flex justify-start bg-base-100">
      <div className="flex-1 font-semibold px-12 py-4 text-5xl">
        <a href="./">🐱Academy</a>
      </div>
      <div className="flex-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="./devguide">Web3 Guides</a>
          </li>
          <li tabIndex={0}>
            <a>
              Lessons
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li>
                <a href="./lessons">Written Lessons</a>
              </li>
              <li>
                <a href="./videolessons">Video Lessons</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="./about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
