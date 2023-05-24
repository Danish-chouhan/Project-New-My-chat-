// date and time

// time
const time = new Date();
const options1 = { hour: "numeric", minute: "numeric", hour12: true };
document.querySelector(".currentTime").textContent = time.toLocaleTimeString(
  "en-US",
  options1
);
// week
const week = new Date();
const options2 = { weekday: "short" };
document.querySelector(".currentWeek").textContent = week.toLocaleDateString(
  "en-US",
  options2
);

// date-month
const m_d = new Date();
const options3 = { month: "short", day: "numeric" };
document.querySelector(".currentMonth").textContent = m_d.toLocaleDateString(
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
  if ((H1.textContent = "Get a link you can share")) {
    Image1.classList.add("img1OfRightPortion");
    Image2.classList.remove("img2OfRightPortion");
    H1.innerText = "Plan ahead";
    P.innerText =
      " to schedule meetings in Google Calendar and send invites to participants";
  }
});
LeftArrow.addEventListener("click", () => {
  if ((H1.textContent = "Plan ahead")) {
    Image1.classList.remove("img1OfRightPortion");
    Image2.classList.add("img2OfRightPortion");
    H1.innerText = "Get a link you can share";
    P.innerText = "click New meeting to get a link you can send to people you want to meet with";
  }
});









// Support button container

const supportBtn = document.getElementById("supportBtn");
const supportContainer = document.getElementById("MainContainerOfSupport");
const exitSupport = document.getElementById("exitSupport");


supportBtn.addEventListener("click", () => {
  supportContainer.classList.remove("ActiveSupport");
  mainContainerOfSetting.classList.add("active");
  reportContainer.classList.add("activeReport")
});

exitSupport.addEventListener("click", () => {
  supportContainer.classList.add("ActiveSupport");
});


// report button container

const reportBtn = document.getElementById("ReportBtn")
const reportContainer = document.getElementById("containerOfReportaProblem")
const exitReport = document.getElementById("exitReport")

reportBtn.addEventListener("click",()=>{
  reportContainer.classList.remove("activeReport")
  supportContainer.classList.add("ActiveSupport");
  mainContainerOfSetting.classList.add("active");
})
exitReport.addEventListener('click',()=>{
  reportContainer.classList.add("activeReport")
})








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
  reportContainer.classList.add("activeReport")
});
exit.addEventListener("click", () => {
  mainContainerOfSetting.classList.add("active");
  // MainContainer.style.filter = "blur(0px) brightness(1)";
});
