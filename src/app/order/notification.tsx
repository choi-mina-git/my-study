import React from "react";

const NoticeSection = () => {
  return (
    <div className="p-4 bg-engel-50 rounded text-sm">
      <h2 className="font-bold mb-2">안내사항</h2>
      <h3 className="font-semibold">
        1. 원두는 발주일로부터 5일내 발송합니다. (평일, 주말은 택배운영안함.)
      </h3>
      <h4 className="mb-4 text-xs font-bold text-gray-400">
        <p>• 월요일 낮 12시 ~ 화요일 낮 12시 ▶ -목요일까지 입고</p>
        <p>• 화요일 낮 12시 ~ 수요일 낮 12시 ▶ -금요일까지 입고</p>
        <p>• 수요일 낮 12시 ~ 목요일 낮 12시 ▶ -토요일까지 입고</p>
        <p>• 목요일 낮 12시 ~ 금요일 낮 12시 ▶ -다음주 월요일까지 입고</p>
        <p>• 금요일 낮 12시 ~ 월요일 낮 12시 ▶ -다음주 화요일까지 입고</p>
      </h4>
      <h3 className="font-semibold">
        2. 베이커리 발주 (최소 7일전 발주, 매주 수요일 12시 마감)
      </h3>
      <h4 className="mb-4 text-xs font-bold text-gray-400">
        <p>
          • [발주] 매주 수요일(낮12시) 전산 발주 (미리 발주 해주시는 분들은
          추가요청사항에 받고싶은 일자 적어주시면 그날에 맞춰서 보내드립니다.)
        </p>
        <p>• [입고] 다음주 목요일 또는 금요일 택배 입고</p>
        <p>• 택배업체(CJ대한통운) 사정으로 지연 될 수 있습니다.</p>
        <p>• 목요일 발주하시면 입고시까지 최대 14일 소요됩니다.</p>
        <p>• 수요일이 공휴일인 경우 화요일에 택배 발송됩니다.</p>
        <p>
          • 베이커리 유통기한 안내 : 제품 전면에 표기 → 유통기한 관리에 각별한
          관심바랍니다.
        </p>
      </h4>
      <h3 className="font-semibold">3. 매 월 정산</h3>
      <h4 className="text-xs font-bold text-gray-400">
        <p>• -24일까지 신청분 해당 월정산 ▶ 25일 거래명세서 발송</p>
        <p>• 25일부터 신청분 익월 정상 ▶ 익월 포함 정산</p>
        <p>• 25일 이후 추가, 변경은 세금거래명세서 승인 전까지 가능합니다.</p>
        <p>
          • 기타 전반 문의사항: (주)롯데지알에스 엔제리너스 구민준 책임
          02-709-0000 / 이승용 02-709-0000 / 함수야 02-2090-0000
        </p>
      </h4>
    </div>
  );
};

export default NoticeSection;
