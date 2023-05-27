// global
const Header = document.getElementById("Header-container")
const Main = document.getElementById("Main-container")
const DefaultLI = document.getElementById("firstLi")
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

// new Meeting

const btnOfMeet = document.getElementById("leftBtnOfMain")
const container = document.getElementById("NewMeetingContainer")
const bodyOfMeet = document.querySelector("body")
const exitFromMeet = document.getElementById("exitMeet")


btnOfMeet.addEventListener('click',()=>{
 container.classList.remove("activeNewMeetingContainer")
 supportContainer.classList.add("ActiveSupport");
 reportContainer.classList.add("activeReport");
 rAiContainer.classList.add("ActiverAi");
 SaIContainer.classList.add("ActiveSaI");
 mainContainerOfSetting.classList.add("active");
})
exitFromMeet.addEventListener('click',()=>{
  container.classList.add("activeNewMeetingContainer")
})
//   image slider
const LeftArrow = document.getElementById("leftArrow");
const RightArrow = document.getElementById("rightArrow");
const imgs1 = document.getElementById("image1st");
const imgs2 = document.getElementById("image2nd");
const H1Image = document.getElementById("H1OfImages");
const PImage = document.getElementById("pOfImages");
const Li1 = document.getElementById("firstLi");
const Li2 = document.getElementById("secondLi");
Li1.classList.add("defaultLi")
Li1.classList.remove("RightLi")
RightArrow.addEventListener("click", () => {
  imgs1.classList.add("visible1");
  imgs2.classList.remove("visible2");
  container.classList.add("activeNewMeetingContainer")
  H1Image.innerText = "Plan ahead";
  PImage.innerHTML =
    "<p>Click <span>New meeting</span> to schedule meetings in Google Calendar and send invites to participants</p>";
  Li1.classList.remove("LeftLi")
  Li2.classList.add("RightLi")
  Li1.classList.remove("defaultLi")
});
LeftArrow.addEventListener("click", () => {
  imgs1.classList.remove("visible1");
  imgs2.classList.add("visible2");
  container.classList.add("activeNewMeetingContainer")
  H1Image.innerText = "Get a link you can share";
  PImage.innerHTML =
    "<p>Click <span>New meeting</span> to get a link you can send to people you want to meet with</p>";
   Li2.classList.remove("RightLi")
   Li1.classList.add("LeftLi")
});


// Support button container

const supportBtn = document.getElementById("supportBtn");
const supportContainer = document.getElementById("MainContainerOfSupport");
const exitSupport = document.getElementById("exitSupport");

supportBtn.addEventListener("click", () => {
  supportContainer.classList.remove("ActiveSupport");
  mainContainerOfSetting.classList.add("active");
  reportContainer.classList.add("activeReport");
  container.classList.add("activeNewMeetingContainer")
  Main.classList.add("brightingMain")
  Header.classList.add("brightingHeader")
});

exitSupport.addEventListener("click", () => {
  supportContainer.classList.add("ActiveSupport");
  Main.classList.remove("brightingMain")
  Header.classList.remove("brightingHeader")
});

// report button container

const reportBtn = document.getElementById("ReportBtn");
const reportContainer = document.getElementById("containerOfReportaProblem");
const exitReport = document.getElementById("exitReport");

reportBtn.addEventListener("click", () => {
  reportContainer.classList.remove("activeReport");
  supportContainer.classList.add("ActiveSupport");
  mainContainerOfSetting.classList.add("active");
  container.classList.add("activeNewMeetingContainer")
  Main.classList.add("brightingMain")
  Header.classList.add("brightingHeader")
});
exitReport.addEventListener("click", () => {
  reportContainer.classList.add("activeReport");
  Main.classList.remove("brightingMain")
  Header.classList.remove("brightingHeader")
});

// report an issue

const btnrAi = document.getElementById("btnOfReport");
const rAiContainer = document.getElementById("rAi");
const backArrow = document.getElementById("backArrowrAi");
const exitrAi = document.getElementById("exitrAi");

btnrAi.addEventListener("click", () => {
  rAiContainer.classList.remove("ActiverAi");
  container.classList.add("activeNewMeetingContainer")
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
  container.classList.add("activeNewMeetingContainer")
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
  container.classList.add("activeNewMeetingContainer")
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
  supportContainer.classList.add("ActiveSupport");
  reportContainer.classList.add("activeReport");
  boxOfOption.classList.add("activeBoxOfOption");
  container.classList.add("activeNewMeetingContainer")
  Main.classList.add("brightingMain")
  Header.classList.add("brightingHeader")
});
exit.addEventListener("click", () => {
  mainContainerOfSetting.classList.add("active");
  boxOfOption.classList.add("activeBoxOfOption");
  Main.classList.remove("brightingMain")
  Header.classList.remove("brightingHeader")
});