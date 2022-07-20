import React from 'react';

// document.body.onload = function () {
//   setTimeout(function () {
//     const preloader = document.getElementById("page-preloader");
//     // const alarm = document.getElementById("alarm");
//     if (!preloader.classList.contains("done")) {
//       preloader.classList.add("done")
//       // if (!alarm.classList.contains("alarm-is")) {
//       //   alarm.classList.add("alarm-is")
//       // }
//     }
//   }, 500);
// }
export default function Preloader() {
  return (
      <div className="preloader" id="page-preloader">
        <div className="loader" id="loader">
          <img
            src="buk.webp"
            className="buk"
          alt="buk"
          />
          <img
            src="dum1.webp"
            className="dum1"
          alt="Dum1"
          />
          <img
            src="dum2.webp"
            className="dum2"
           alt="Dum2"
        />
        {/* <p className="alarm">Якщо бичок не зник - обнови сторінку ще раз</p> */}
        </div>
      </div>
  );
}