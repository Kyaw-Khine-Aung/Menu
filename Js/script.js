const barOneTag = document.querySelector(".barOne");
const barTwoTag = document.querySelector(".barTwo");
const barThreeTag = document.querySelector(".barThree");
const menuBarContainerTag = document.querySelector(".menuBarContainer");
const showDocumentColorTag = document.querySelector(".showDocumentColor");

menuBarContainerTag.addEventListener("click", () => {
  barTwoTag.classList.toggle("deleteBarTwo");
  barOneTag.classList.toggle("plusDeg");
  barThreeTag.classList.toggle("minusDeg");
  showDocumentColorTag.classList.toggle("changeDocumentColor");
  // if (menuBarContainerTag.classList.contains("isClosed")) {
  //     barTwoTag.classList.remove('deleteBarTwo');
  //     barOneTag.classList.remove("plusDeg");
  //     barThreeTag.classList.remove("minusDeg")
  //     showDocumentColorTag.classList.remove("changeDocumentColor")
  //     menuBarContainerTag.classList.remove("isClosed")
  // }else {
  //     barTwoTag.classList.add('deleteBarTwo');
  //     barOneTag.classList.add("plusDeg");
  //     barThreeTag.classList.add("minusDeg");
  //     showDocumentColorTag.classList.add("changeDocumentColor")
  //     menuBarContainerTag.classList.add("isClosed");
  // }
});
