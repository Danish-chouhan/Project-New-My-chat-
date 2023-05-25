// date and time

// time
const time = new Date();
const options1 = { hour: "numeric", minute: "numeric", hour12: true };
document.querySelector(".currentTime").innerText = time.toLocaleTimeString(
  "en-US",
  options1
);
// week
const week = new Date();
const options2 = { weekday: "short" };
document.querySelector(".currentWeek").innerText = week.toLocaleDateString(
  "en-US",
  options2
);

// date-month
const m_d = new Date();
const options3 = { month: "short", day: "numeric" };
document.querySelector(".currentMonth").innerText = m_d.toLocaleDateString(
  "en-US",
  options3
);

//   image slider

// selector
const LeftArrow = document.getElementById("leftArrow");
const RightArrow = document.getElementById("rightArrow");
const Image1 = document.getElementById("img1");
const Image2 = document.getElementById("img2");
const H1 = document.getElementById("h1Fotter");
const P = document.getElementById("pOfFooterOfRightPortion");
RightArrow.addEventListener("click", () => {
  if ((H1.innerText = "Get a link you can share")) {
    Image1.classList.add("img1OfRightPortion");
    Image2.classList.remove("img2OfRightPortion");
    H1.innerText = "Plan ahead";
    P.innerText =
      " to schedule meetings in Google Calendar and send invites to participants";
  }
});
LeftArrow.addEventListener("click", () => {
  if ((H1.innerText = "Plan ahead")) {
    Image1.classList.remove("img1OfRightPortion");
    Image2.classList.add("img2OfRightPortion");
    H1.innerText = "Get a link you can share";
    P.innerText =
      "click New meeting to get a link you can send to people you want to meet with";
  }
});

// Support button container

const supportBtn = document.getElementById("supportBtn");
const supportContainer = document.getElementById("MainContainerOfSupport");
const exitSupport = document.getElementById("exitSupport");

supportBtn.addEventListener("click", () => {
  supportContainer.classList.remove("ActiveSupport");
  mainContainerOfSetting.classList.add("active");
  reportContainer.classList.add("activeReport");
});

exitSupport.addEventListener("click", () => {
  supportContainer.classList.add("ActiveSupport");
});

// report button container

const reportBtn = document.getElementById("ReportBtn");
const reportContainer = document.getElementById("containerOfReportaProblem");
const exitReport = document.getElementById("exitReport");

reportBtn.addEventListener("click", () => {
  reportContainer.classList.remove("activeReport");
  supportContainer.classList.add("ActiveSupport");
  mainContainerOfSetting.classList.add("active");
});
exitReport.addEventListener("click", () => {
  reportContainer.classList.add("activeReport");
});

// report an issue

const btnrAi = document.getElementById("btnOfReport");
const rAiContainer = document.getElementById("rAi");
const backArrow = document.getElementById("backArrowrAi");
const exitrAi = document.getElementById("exitrAi");

btnrAi.addEventListener("click", () => {
  rAiContainer.classList.remove("ActiverAi");
});
backArrow.addEventListener("click", () => {
  rAiContainer.classList.add("ActiverAi");
  reportContainer.classList.remove("activeReport");
});
exitrAi.addEventListener("click", () => {
  rAiContainer.classList.add("ActiverAi");
  reportContainer.classList.add("activeReport");
});

// options of rAi

const btnOfOption = document.getElementById("firstInput");
const boxOfOption = document.getElementById("boxOfOptionrAi");
const h1OfOption = document.getElementById("h1OfOption");
const option1 = document.getElementById("btnOfOptionrAi1");
const option2 = document.getElementById("btnOfOptionrAi2");
const option3 = document.getElementById("btnOfOptionrAi3");
const option4 = document.getElementById("btnOfOptionrAi4");
const option5 = document.getElementById("btnOfOptionrAi5");
const option6 = document.getElementById("btnOfOptionrAi6");
const Send = document.getElementById("SendBox");
const texArea = document.getElementById("texting");
const selecter = document.getElementById("h1OfOption");


btnOfOption.addEventListener("mouseenter", () => {
  boxOfOption.classList.remove("activeBoxOfOption");
});
btnOfOption.addEventListener("click", () => {
  boxOfOption.classList.add("activeBoxOfOption");
});
option1.addEventListener("click", () => {
  h1OfOption.innerText = "Join a Meeting";
});
option2.addEventListener("click", () => {
  h1OfOption.innerText = "Speak or hear";
});
option3.addEventListener("click", () => {
  h1OfOption.innerText = "View participate Video";
});
option4.addEventListener("click", () => {
  h1OfOption.innerText = "Present Contant";
});
option5.addEventListener("click", () => {
  h1OfOption.innerText = "View content";
});
option6.addEventListener("click", () => {
  h1OfOption.innerText = "Other";
});

// Suggest an idea to Mychat

const btnSaI = document.getElementById("btnOfSuggestion");
const SaIContainer = document.getElementById("SaI");
const backArrowofSaI = document.getElementById("backArrowSaI");
const exitSaI = document.getElementById("exitSaI");

btnSaI.addEventListener("click", () => {
  SaIContainer.classList.remove("ActiveSaI");
  boxOfOption.classList.add("activeBoxOfOption");
});
backArrowofSaI.addEventListener("click", () => {
  SaIContainer.classList.add("ActiveSaI");
  reportContainer.classList.remove("activeReport");
  boxOfOption.classList.add("activeBoxOfOption");

});
exitSaI.addEventListener("click", () => {
  SaIContainer.classList.add("ActiveSaI");
  reportContainer.classList.add("activeReport");
  boxOfOption.classList.add("activeBoxOfOption");
});

// setting button container

const setting = document.getElementById("settings");
const mainContainerOfSetting = document.getElementById("containerSetting");
const exit = document.getElementById("exit");
const MainContainer = document.getElementById("Main-container");

setting.addEventListener("click", () => {
  mainContainerOfSetting.classList.remove("active");
  // MainContainer.style.filter = "blur(4px) brightness(1)";
  // mainContainerOfSetting.ontransitionrun("0.9 ease")
  supportContainer.classList.add("ActiveSupport");
  reportContainer.classList.add("activeReport");
  boxOfOption.classList.add("activeBoxOfOption");
});
exit.addEventListener("click", () => {
  mainContainerOfSetting.classList.add("active");
  // MainContainer.style.filter = "blur(0px) brightness(1)";
  boxOfOption.classList.add("activeBoxOfOption");

});
