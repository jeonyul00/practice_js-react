import React from "react";

function Str() {
  const str = "my name is yul";
  const str1 = "5";
  console.log(str1.padEnd(25, "."));
  console.log(str1.padStart(2, "0"));
  const stringObj = new String("foo");

  console.log(stringObj);
  // Expected output: String { "foo" }

  console.log(stringObj.toString());
  // Expected output: "foo"

  return (
    <>
      <div>{str}</div>
      <div>at: {str.charAt(1)}</div>
      <div>concat: {str.concat("!")}</div>
      <div>repeat: {str.repeat(2)}</div>
      <div>includes: {String(str.includes("m"))}</div>
      <div>indexOf: {str.indexOf("y")}</div>
      <div>replace: {str.replace("my", "oh my")}</div>
      <div>slice: {str.slice(str.length / 2, str.length)}</div>
      <div>split: {str.split(" ")}</div>
    </>
  );
}

export default Str;
