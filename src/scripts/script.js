const mode = document.querySelector(".mode");
const modeIcon = document.querySelector("#mode-icon");
const loginBtn = document.querySelector("#btn-login");
const login = document.querySelector(".login");
const form_exit = document.querySelector(".form_exit");
const iconEye = document.querySelector(".icon-eye");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const form = document.querySelector(".form");

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
  modeIcon.removeAttribute("src");
  modeIcon.setAttribute("src", "./images/Iconsun.svg");
} else {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
  modeIcon.removeAttribute("src");
  modeIcon.setAttribute("src", "./images/Icon.svg");
}

//  Whenever the user explicitly chooses light mode

//  ! CHoose mode theme
mode.addEventListener("click", (e) => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    modeIcon.removeAttribute("src");
    modeIcon.setAttribute("src", "./images/Icon.svg");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    modeIcon.removeAttribute("src");
    modeIcon.setAttribute("src", "./images/Iconsun.svg");
  }
});

// !----login modal
loginBtn.addEventListener("click", (e) => {
  login.classList.remove("hidden");
  login.classList.add("flex");
});

login.addEventListener("click", (e) => {
  if (e.target.classList.contains("login")) {
    login.classList.add("hidden");
    login.classList.remove("flex");
    password.value = "";
    email.value = "";
  }
});

form_exit.addEventListener("click", (e) => {
  login.classList.add("hidden");
  login.classList.remove("flex");
  password.value = "";
  email.value = "";
});

iconEye.addEventListener("click", (e) => {
  if (e.target.classList.contains("bxs-show")) {
    iconEye.classList.remove("bxs-show");
    iconEye.classList.add("bxs-hide");
    password.type = "text";
  } else {
    iconEye.classList.remove("bxs-hide");
    iconEye.classList.add("bxs-show");
    password.type = "password";
  }
});

// !--slider-------------------
const swiperWrap = document.querySelector(".swiper-wrapper");
const pagin = document.querySelector(".pagin");
let cars = [
  {
    id: 1,
    title: "Compact cars",
    info: "Rent cars as you are comfortable and where you are comfortable.",
    img: "./img/Car.png",
  },
  {
    id: 2,
    title: "Sports cars",
    info: "Rent cars as you are comfortable and where you are comfortable.",
    img: "./img/jeep.png",
  },
  {
    id: 3,
    title: "Vans ",
    info: "Rent cars as you are comfortable and where you are comfortable.",
    img: "./img/Rectangle 671.png",
  },
];

cars.forEach((item) => {
  const element = createElement(
    "div",
    "swiper-slide w-full h-[500px] bg-cover bg-no-repeat bg-center rounded-2xl duration-300",
    `
  
  <div class="bg_linear w-full h-full pt-[60px] text-center">
  <h1
    class="font-semibold text-[36px] leading-[44px] text-center text-white"
  >
    ${item.title}
  </h1>
  <p
    class="font-normal w-[416px] text-[16px] leading-[20px] text-center text-white mx-auto mt-[10px]"
  >
   ${item.info}
  </p>
</div>
  `
  );
  const paginElem = createElement("div", "swiper-pagination", "");
  element.style.backgroundImage = `url('${item.img}')`;
  swiperWrap.append(element);
  pagin.append(paginElem);
});


const filter__buttons = document.querySelector(".filter__buttons");
filter__buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("fill-btn")) {
    document
      .querySelector(".filter__buttons-active")
      .classList.remove("filter__buttons-active");

    e.target.classList.add("filter__buttons-active");
  }
}); 


// do dynamic cards

const dynamicCards = [
    {
      id: 1,
      name: "Ford Fiesta",
      type: "Economy Car",
      img: "./img/ford.png",
      seats: "5 Seats",
      type_role: "Automatic",
      fuel: "1-lit / 2.5 km",
    },
    {
      id: 2,
      name: "Nissan Versa",
      type: "Compact Car",
      img: "./img/nissan.png",
      seats: "5 Seats",
      type_role: "Automatic",
      fuel: "1-lit / 2.5 km",
    },
    {
      id: 3,
      name: "Toyota Corolla",
      type: "Mid-size Car",
      img: "./img/toyota.png",
      seats: "5 Seats",
      type_role: "Automatic",
      fuel: "1-lit / 2.5 km",
    },
    {
      id: 4,
      name: "Nissan Rogue",
      type: "Mid-size SUV",
      img: "./img/nissan rogue.png",
      seats: "5 Seats",
      type_role: "Automatic",
      fuel: "1-lit / 2.5 km",
    },
    {
      id: 5,
      name: "Chevy Traverse",
      type: "Full-size SUV ",
      img: "./img/traverse.png",
      seats: "5 Seats",
      type_role: "Automatic",
      fuel: "1-lit / 2.5 km",
    },
    {
      id: 6,
      name: "Nissan Altima",
      type: "Full-size Car",
      img: "./img/Nissan altima.png",
      seats: "5 Seats",
      type_role: "Automatic",
      fuel: "1-lit / 2.5 km",
    },
  ];
  const card_wrapper = document.querySelector(".car__cards");
  
  dynamicCards.forEach((item) => {
    const element = createElement(
      "div",
      "w-[387px] group h-[433px] duration-300 py-[30px] hover:text-black bg-[#F5F5F5] dark:bg-[#272727] rounded-2xl hover:bg-[#febe10] cursor-pointer",
      `
      
      <h1 class="font-semibold text-[24px] leading-[29px] mx-6">
      ${item.name}
    </h1>
    <p
      class="font-medium text-[#555555] dark:text-white duration-300 mt-2 group-hover:text-[#555555] text-[16px] leading-[20px] mx-6"
    >
    ${item.type}
    </p>
    <img src="${item.img}" class="mt-4" alt="car" />
    <div
      class="grid grid-cols-2 grid-rows-2 ml-[27px] mr-[89px] gap-6"
    >
      <div class="flex justify-start items-center">
        <i class="bx bxs-user"></i>
        <span class="ml-[13px]">${item.seats}</span>
      </div>
      <div class="flex justify-start items-center">
        <div
          class="bg-[url('./img/Vector.png')] dark:bg-[url('./img/Vector.png')] duration-300 group-hover:bg-[url('./img/Vector.png')] bg-center bg-cover w-3 h-3 inline-block"
        ></div>
        <span class="ml-[17px]">${item.type_role}</span>
      </div>
      <div class="flex justify-start items-center">
        <div
          class="bg-[url('./img/icon.png')] dark:bg-[url('./img/icon.png')] duration-300 group-hover:bg-[url('./img/icon.png')] bg-center bg-cover w-3 h-3 inline-block"
        ></div>
        <span class="ml-[13px]">${'21+ Years'}</span>
      </div>
      <div class="flex justify-start items-center">
        <i class="bx bxs-droplet"></i>
        <span class="ml-[13px]">${item.fuel}</span>
      </div>
    </div>
      `
    );
    card_wrapper.append(element);
  });