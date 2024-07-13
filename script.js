const darkModeSlider = document.getElementById("toggler-button");
const circleButton = document.getElementById("toggler-circle");
const mainContainer = document.getElementById("main-container");
const mainHeader = document.getElementById("header");
const boxDarkMode = document.getElementById("box-one");
const boxDarkModeTwo = document.getElementById("box-two");
const boxDarkModeThree = document.getElementById("box-three");
const boxDarkModeFour = document.getElementById("box-four");
const colorNumber = document.getElementById("number-one");
const colorNumberTwo = document.getElementById("number-two");
const colorNumberThree = document.getElementById("number-three");
const colorNumberFour = document.getElementById("number-four");
const secondContainer = document.getElementsByClassName(
  "overview-box-one-style"
);
const secondContainerNumbers = document.getElementById("num-style");

let checkBoxStatus = false;

darkModeSlider.addEventListener("click", () => {
  if (checkBoxStatus) {
    mainContainer.classList.remove("dark-theme");
    mainHeader.style.color = "black";
    darkModeSlider.style.background = "#AEB3CB";
    boxDarkMode.style.background = " #F1F3FA ";
    colorNumber.style.color = "black";
    boxDarkModeTwo.style.background = " #F1F3FA";
    colorNumberTwo.style.color = "black";
    boxDarkModeThree.style.background = " #F1F3FA";
    colorNumberThree.style.color = "black";
    boxDarkModeFour.style.background = " #F1F3FA";
    colorNumberFour.style.color = "black";
    secondContainerNumbers.style.color = "black";
    for (let i = 0; i < secondContainer.length; i++) {
      secondContainer[i].style.background = " #F1F3FA";
    }
    circleButton.style.marginLeft = "4px";
    checkBoxStatus = false;
  } else {
    mainContainer.classList.add("dark-theme");
    mainHeader.style.color = "white";
    darkModeSlider.style.background =
      " linear-gradient(225deg, #40DB82 0%, #388FE7 98.02%)";
    boxDarkMode.style.background = " #252B42";
    colorNumber.style.color = "white";
    boxDarkModeTwo.style.background = " #252B42";
    colorNumberTwo.style.color = "white";
    boxDarkModeThree.style.background = " #252B42";
    colorNumberThree.style.color = "white";
    boxDarkModeFour.style.background = " #252B42";
    colorNumberFour.style.color = "white";
    secondContainerNumbers.style.color = "white";
    circleButton.style.marginLeft = "22px";
    checkBoxStatus = true;
    for (let i = 0; i < secondContainer.length; i++) {
      secondContainer[i].style.background = " #252B42";
    }
  }
});
