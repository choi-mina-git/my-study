"use client";
import React, { useState, useEffect } from "react";
import InputSelectBox from "../components/InputSelectBox";
import TextBox from "../components/TextBox";
import TextArea from "../components/TextArea";
import ItemLabel from "../components/ItemLabel";
import NoticeSection from "./notification";
import MyButton from "../components/MyButton";
import MyTitle from "../components/MyTitle";

interface Option {
  value: string;
  label: string;
}

const ordererOptions: Option[] = [
  { value: "", label: "발주처 선택" },
  { value: "orderer1", label: "잘 볶는 원두" },
  { value: "orderer2", label: "잘 굽는 베이커리" },
];

const productOptions: { [key: string]: Option[] } = {
  orderer1: [
    { value: "", label: "제품 선택" },
    { value: "product1", label: "산미있는 원두" },
    { value: "product2", label: "고소한 원두" },
    { value: "product3", label: "디카페인 원두" },
  ],
  orderer2: [
    { value: "", label: "제품 선택" },
    { value: "product4", label: "쿠키" },
    { value: "product5", label: "치아바타" },
    { value: "product6", label: "베이글" },
  ],
};

const Order = () => {
  const [selectedOrderer, setSelectedOrderer] = useState("");
  const [currentProductOptions, setCurrentProductOptions] = useState<Option[]>(
    []
  );
  const [orderQty, setOrderQty] = useState("");
  const [textList, setTextList] = useState("");

  useEffect(() => {
    setCurrentProductOptions(
      productOptions[selectedOrderer] || [{ value: "", label: "제품 선택" }]
    );
  }, [selectedOrderer]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextList(event.target.value);
  };

  return (
    <div className="min-h-screen flex justify-center items-start">
      <div className="w-full max-w-4xl p-3 min-h-screen">
        <MyTitle title="발주서 작성" />

        <div className="flex space-x-4 justify-between">
          <div className="h-96 w-full">
            <ItemLabel label="발주처" required={true} />
            <InputSelectBox
              value={selectedOrderer}
              onChange={(e) => setSelectedOrderer(e.target.value)}
              options={ordererOptions}
              margin="mb-4"
            />
            <ItemLabel label="주문수량" required={true} />
            <div className="flex space-x-1">
              <TextBox
                value={orderQty}
                onChange={(e) => setOrderQty(e.target.value)}
                placeholder="5"
                width="380px"
              />
              <p className="text-xs font-bold flex items-end mb-4 text-gray-500">
                박스
              </p>
            </div>
            <p className="h-10 text-xs flex items-start mb-4 text-gray-400">
              • 최대 20박스까지 입력가능합니다.
            </p>
            <ItemLabel label="배송지" required={true} />
            <TextBox value="" placeholder="" disabled={true} margin="mb-4" />
          </div>

          <div className="h-96 w-full">
            <ItemLabel label="제품명" required={true} />
            <InputSelectBox
              value={selectedOrderer}
              onChange={(e) => setSelectedOrderer(e.target.value)}
              options={currentProductOptions}
              margin="mb-4"
            />
            <ItemLabel label="담당자정보" required={true} />
            <TextBox value="" placeholder="" disabled={true} margin="mb-2" />
            <TextBox value="" placeholder="" disabled={true} margin="mb-4" />
            <ItemLabel label="추가요청사항" />
            <TextArea
              value={textList}
              onChange={handleChange}
              placeholder=""
              maxLength={1000}
            />
          </div>
        </div>
        <NoticeSection />
        <div className="flex justify-center">
          <MyButton className="mt-8 w-36 ">발주</MyButton>
        </div>
      </div>
    </div>
  );
};

export default Order;
