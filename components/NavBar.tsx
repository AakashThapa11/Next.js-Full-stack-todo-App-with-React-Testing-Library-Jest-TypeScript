import Link from "next/link";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href="/">
        NextTodo..
      </Link>
      <Link className="bg-white p-2" href={"/addTopics"}>
        Add Topics
      </Link>
    </nav>
  );
};

export default NavBar;
