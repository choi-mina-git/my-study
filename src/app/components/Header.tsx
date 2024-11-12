import React from "react";
import Link from "next/link";
import Image from "next/image";
import { headerMenuStyles } from "../utils/styles";
import imgLogo from "../../../public/engel_bzmall.png";

const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-engel-200">
      <div className="max-w-4xl mx-auto flex items-center justify-between mb-2 p-4">
        <div className="flex items-center ">
          <Image src={imgLogo} alt="ANGELINUS" width={250} height={80} />
        </div>
        <nav className="flex space-x-4 ">
          <Link href="/order" className={`${headerMenuStyles}`}>
            발주서 작성
          </Link>
          <Link href="/order" className={`${headerMenuStyles}`}>
            발주서 내역
          </Link>
          <Link href="/login" className={`${headerMenuStyles}`}>
            로그아웃
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
