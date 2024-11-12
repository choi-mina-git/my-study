"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import imgLogo from "../../../public/engel_bzmall.png";

const MyLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "admin" && password === "1111") {
      router.push("/order");
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col flex-grow items-center justify-center">
        <Image src={imgLogo} alt="엔젤리너스" width={300} height={20}></Image>
        <p className="h-14 flex flex-col font-bold mt-4">주문시스템 로그인 </p>
        <input
          type="text"
          value={username}
          placeholder="아이디 입력"
          className="p-3 border border-engel-200 rounded focus:outline-none focus:ring-1 focus:ring-red-500 text-sm m-1 w-96"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="비밀번호 입력"
          className="p-3 border border-engel-200 rounded focus:outline-none focus:ring-1 focus:ring-red-500 text-sm m-1 w-96"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-engel-700 text-white font-bold py-3 px-4 rounded hover:bg-customColor-100 text-sm m-2 w-96"
        >
          로그인
        </button>

        <div className="text-xs text-gray-400 ">
          <p className="m-2 ">
            • 아이디, 비밀번호 분실 시 GRS 본사 관리자에게 문의해 주시기
            바랍니다.
          </p>
          <p className="m-2 ">
            • 비밀번호는 영문 대소문자 구별해 주시기 바랍니다.
          </p>
        </div>
      </div>

      <div className="h-16 bg-engel-50 flex-col justify-center items-center flex text-xs text-engel-400">
        Copyright ©2014. ANGELINUS COM ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default MyLogin;
