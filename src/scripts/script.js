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
  modeIcon.setAttribute("src", "./img/Sun.png");
} else {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
  modeIcon.removeAttribute("src");
  modeIcon.setAttribute("src", "./img/Moon.png");
}

//  Whenever the user explicitly chooses light mode

//  ! CHoose mode theme
mode.addEventListener("click", (e) => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    modeIcon.removeAttribute("src");
    modeIcon.setAttribute("src", "./img/Moon.svg");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    modeIcon.removeAttribute("src");
    modeIcon.setAttribute("src", "./img/Sun.png");
  }
});

// !----login modal
loginBtn.addEventListener("click", (e) => {
  login.classList.remove("hidden");
  login.classList.add("z-20");
  login.classList.add("fixed");
  login.classList.add("backdrop-blur")
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

const sportsCar = [
  {
    id: 7,
    name: "Royse Rolls ghost",
    type: "Full-size car",
    img: "./img/rollse-royce.png",
    seats: "5 Seats",
    type_role: "Automatic",
    fuel: "1-lit / 2.5 km",
  },
  {
    id: 8,
    name: "Mersedes s class",
    type: "Full-size car",
    img: "./img/mersedes c class.png",
    seats: "5 Seats",
    type_role: "Automatic",
    fuel: "1-lit / 2.5 km",
  },
  {
    id: 9,
    name: "Lamborghini urus",
    type: "Mid-size car",
    img: "./img/lamborghini urus.png",
    seats: "5 Seats",
    type_role: "Automatic",
    fuel: "1-lit / 2.5 km",
  },
  {
    id: 10,
    name: "Mercedes g63 amg",
    type: "Mid-size SUV",
    img: "./img/mercedes g63 amg.png",
    seats: "5 Seats",
    type_role: "Automatic",
    fuel: "1-lit / 2.5 km",
  }
]

const vanscar = [
  {
    id: 11,
    name: "15-passenger Ford transit",
    type: "Full-size car",
    img: "./img/ford-transit.png",
    seats: "5 Seats",
    type_role: "Automatic",
    fuel: "1-lit / 2.5 km",
  },
  {
    id: 12,
    name: "15-passenger Ford transit",
    type: "Chrysler Pacifica",
    img: "./img/chrysler.png",
    seats: "5 Seats",
    type_role: "Automatic",
    fuel: "1-lit / 2.5 km",
  },
  {
    id: 13,
    name: "Chevy Silderado 4500HD",
    type: "Mid-size car",
    img: "./img/chevy silderado.png",
    seats: "5 Seats",
    type_role: "Automatic",
    fuel: "1-lit / 2.5 km",
  },
  {
    id: 14,
    name: "12-passenger Ford transit",
    type: "Mid-size SUV",
    img: "./img/12-passenger-ford-transit.png",
    seats: "5 Seats",
    type_role: "Automatic",
    fuel: "1-lit / 2.5 km",
  },
  {
    id: 15,
    name: "15-passenger Ford transit",
    type: "Mid-size SUV",
    img: "./img/15-passenger-ford-transit.png",
    seats: "5 Seats",
    type_role: "Automatic",
    fuel: "1-lit / 2.5 km",
  },
  {
    id: 16,
    name: "Mercedes-Benz Sprinter",
    type: "Mid-size SUV",
    img: "./img/mercedes-benz-sprinter.png",
    seats: "5 Seats",
    type_role: "Automatic",
    fuel: "1-lit / 2.5 km",
  }
  
]
  const card_wrapper = document.querySelector(".car__cards");
  const sportcarbutton  = document.querySelector('.sportcar');
  const compactcar = document.querySelector('.compactcar');
  const vanscarbutton = document.querySelector('.vanscar');
  function dynamicCardFunction() {
  dynamicCards.forEach((item) => {
    const element = createElement(
      "div",
      "w-[387px] group h-[433px] duration-300 py-[30px] hover:text-black bg-[#F5F5F5] dark:bg-[#272727] rounded-2xl hover:bg-green-500 cursor-pointer",
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
}
dynamicCardFunction()

sportcarbutton.addEventListener('click',()=>{
  card_wrapper.innerHTML = ``
  sportsCar.forEach((item) => {
    const element = createElement(
      "div",
      "w-[387px] group h-[433px] duration-300 py-[30px] hover:text-black bg-[#F5F5F5] dark:bg-[#272727] rounded-2xl hover:bg-green-500 cursor-pointer",
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
});

compactcar.addEventListener('click',() => {
  card_wrapper.innerHTML = ``
  dynamicCardFunction()
})

vanscarbutton.addEventListener('click',() => {
  card_wrapper.innerHTML = ``
  vanscar.forEach((item) => {
    const element = createElement(
      "div",
      "w-[387px] group h-[433px] duration-300 py-[30px] hover:text-black bg-[#F5F5F5] dark:bg-[#272727] rounded-2xl hover:bg-green-500 cursor-pointer",
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
})



const comments = [
  {
    id: 1,
    avatar: "./img/savannah nguyen.png",
    name: "Savannah Nguyen",
    email: "savannahnguyen@gmail.com",
    comment: `Sagittis sed tortor, elementum vitae varius sodales
    consectetur. Vitae arcu ut morbi bibendum ullamcorper
    feugiat. Venenatis hendrerit cursus egestas sit ornare nunc
    vulputate aliquam sapien. Pulvinar nunc consectetur nibh
    consectetur mollis mauris est mauris amet. Sed hac vehicula
    id et dui morbi quam pulvinar condimentum. Senectus sed
    varius interdum nunc, arcu vulputate massa.`,
    rating: "./img/Frame 5292.svg",
  },
  {
    id: 2,
    avatar: "./img/ronald richards.png",
    name: "Ronald Richards",
    email: "ronaldrichards@gmail.com",
    comment: `Placerat pulvinar in amet sem id gravida nisi leo. A dignissim est pellentesque mi quisque vel mi ut. Porttitor blandit auctor odio a ornare felis tortor bibendum molestie. `,
    rating: "./img/Frame 5292 (1).svg",
  },
  {
    id: 3,
    avatar: "./img/kristan watson.png",
    name: "Kristin Watson",
    email: "kristinwatson@gmail.com",
    comment: `Id adipiscing vulputate arcu pretium dignissim. Felis vulputate tellus velit consectetur. Congue convallis aliquam eget ullamcorper quam pellentesque cursus. Dictumst mauris ac, quis orci morbi ultrices faucibus volutpat mauris. Bibendum sed ut lectus facilisi amet orci. Interdum massa orci urna id ac cras arcu.`,
    rating: "./img/Frame 5292.svg",
  },
];
const comment_list = document.querySelector(".comment_list");
const scrollbar = document.querySelector(".scrollbar");
comments.forEach((el) => {
  const element = createElement(
    "li",
    "comment__item w-[420px] h-[333px] rounded-2xl bg-white dark:bg-[#1C1C1C] p-6",
    `
  <div class="flex justify-between items-center">
                    <div class="flex">
                      <img src="${el.avatar}" alt="ava" />
                      <div class="ml-4">
                        <h1 class="font-semibold text-4 left-5">
                        ${el.name}
                        </h1>
                        <h2
                          class="font-normal text-[14px] left-[17px] text-[#555555] dark:text-white"
                        >
                        ${el.email}
                        </h2>
                      </div>
                    </div>
                    <img src="./img/gphoto.svg" alt="google" class="" />
                  </div>
                  <p
                    class="w-[372px] h-[160px] font-normal text-[14px] left-[20px] mt-[14px]"
                  >
                  ${el.comment}
                  </p>
                  <div class="mt-[25px] h-[1.5px] bg-[#E5E7EA]"></div>
                  <div class="flex items-center mt-[14px]">
                    <h4
                      class="font-medium text-[14px] inline-block left-[17px]"
                    >
                      Star rating:
                    </h4>
                    <img
                      src="${el.rating}"
                      alt="stars"
                      class="ml-[17px]"
                    />
                  </div>
  `
  );
  comment_list.append(element);
  const scrbr = createElement(
    "div",
    `scrbr-item w-[${546 / comments.length}px] h-1 bg-white opacity-[0.4]`,
    ""
  );
  scrollbar.append(scrbr);
});
document.querySelector(".scrbr-item").classList.add("active-scroll");

count = 0;
const slider__right = document.querySelector(".slider__right");
const slider__left = document.querySelector(".slider__left");

slider__right.addEventListener("click", (e) => {
  document.querySelector(".active-scroll").classList.remove("active-scroll");
  if (count === comments.length - 1) {
    count = -1;
  }
  comment_list.style.transform = `translateX(-${++count * 420}px)`;
  const scr = document.querySelectorAll(".scrbr-item");
  scr[count].classList.add("active-scroll");
});
slider__left.addEventListener("click", (e) => {
  document.querySelector(".active-scroll").classList.remove("active-scroll");

  if (count === 0) {
    count = comments.length;
  }
  comment_list.style.transform = `translateX(-${--count * 420}px)`;
  const scr = document.querySelectorAll(".scrbr-item");
  scr[count].classList.add("active-scroll");
});


//  to top with btn
const mybutton = document.querySelector('#toTopBtn')
mybutton.addEventListener("click", (e) => {
  topFunction();
});
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}