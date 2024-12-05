import React from "react";

const Arr = () => {
  const answer: (number | string | boolean)[] = [1, "2", false];
  const arr: string[] = Array.from("foo", (value) => value + " ");
  const arr2: string[] = Array.of("foo");
  const arr3: number[] = [1, 2, 3, 4, 5, 6];

  const getEntries = () => {
    for (const [index, value] of arr.entries()) {
      return index + value;
    }
  };

  return (
    <div>
      <div>from: {arr}</div>
      <div>default: {answer}</div>
      <div>isArray: {Array.isArray(arr) ? "y" : "n"}</div>
      <div>of: {arr2}</div>
      <div>concat: {arr.concat(arr2)}</div>
      <div>entries: {getEntries()} </div>
      <div>every: {arr3.every((v) => v > 0) ? "y" : "n"}</div>
      <div>filter: {arr3.filter((value) => value % 2 === 0)}</div>
      <div>fill: {arr3.fill(0, 0, arr3.length)}</div>
      <div>find: {answer.find((value) => typeof value == typeof "")}</div>
      <div>findIndex: {answer.findIndex((v) => typeof v == typeof "")}</div>
      <div>flat: {[1, 2, 3, [1, 2]].flat()}</div>
      <div>includes: {String(answer.includes(false))}</div>
      <div>indexOf: {answer.indexOf(false)}</div>
      {/* 지정된 구분 문자열로 구분하여 연결한 새 문자열을 만들어 반환합니다. */}
      <div>join: {[1, 2, 3].join("")}</div>
      <div>join: {typeof [1, 2, 3].join("")}</div>
      <div>pop: {[1, 2, 3].pop()}</div>
      <div>shift: {[1, 2, 3].shift()}</div>
      <div>slice: {[1, 2, 3].slice(1)}</div>
      <div>slice: {[1, 2, 3].slice(-1)}</div>
      <div>sort: {[1, 10, 2, 20, 3, 30].sort((a, b) => a - b)}</div>
      {/* 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다. */}
      <div>splice: {["Jan", "March", "April", "June"].splice(1, 0, "Feb")}</div>
      {/*  ["Jan", "Feb", "March", "April", "June"] */}
    </div>
  );
};

export default Arr;
