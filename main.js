// Respnsive menu (burger adn sticky menu)
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu_links");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active_burger");
  body.classList.toggle("js-mobile-menu-open");
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky_menu", window.scrollY > 0);
});

// Clicking on the picture (DESKTOP AND MOBILE)
const photo_1 = document.querySelector(".img1_container img");
const photo_2 = document.querySelector(".img2_container img");
const photo_3 = document.querySelector(".img3_container img");
const photo_4 = document.querySelector(".img4_container img");
const photo_5 = document.querySelector(".img5_container img");
const photo_6 = document.querySelector(".img6_container img");
const mobileImg1 = document.querySelector(".mobile_img1_container img");
const mobileImg2 = document.querySelector(".mobile_img2_container img");
const p1_container = document.querySelector(".img1_container div");
const p2_container = document.querySelector(".img2_container div");
const p3_container = document.querySelector(".img3_container div");
const p4_container = document.querySelector(".img4_container div");
const p5_container = document.querySelector(".img5_container div");
const p6_container = document.querySelector(".img6_container div");
const mi1_container = document.querySelector(".mobile_img1_container div");
const mi2_container = document.querySelector(".mobile_img2_container div");
const namesHtml = document.querySelector("#name");
const professionsHtml = document.querySelector("#profession");
const teamText1Html = document.querySelector("#team_text_1");
const teamText2Html = document.querySelector("#team_text_2");
const specializationsHtml = document.querySelector("#specialization");
const contactTelHtml = document.querySelector("#contact_tel");
const contactEmailHtml = document.querySelector("#contact_email");
const firstColumn = document.querySelector(".first_column");
let activeElement = 0;

const names = [
  "Marek Gerszendorf",
  "Marcin Dutkiewicz",
  "Elvira Hampton",
  "Jerome Berry",
  "Bill Rose",
  "Ryan Woodward",
];
const professions = [
  "Front end developer",
  "Backend developer",
  "Backend developer",
  "Webdesigner",
  "Webdesigner",
  "Front end developer",
];
const teamText1 = [
  "Donec accumsan et nulla id cursus. Curabitur feugiat aliquam tellus ut viverra. Proin dignissim nibh ac finibus aliquam.",
  "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
  "Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id.",
  "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae",
  "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
  "Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat",
];
const teamText2 = [
  "Pellentesque eu enim a justo elementum ullamcorper eget vel leo. Aliquam erat volutpat. Aliquam in sem fringilla, vehicula ligula sit amet, commodo purus.",
  "Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat",
  "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
  "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae",
  "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
  "Donec accumsan et nulla id cursus. Curabitur feugiat aliquam tellus ut viverra. Proin dignissim nibh ac finibus aliquam.",
];
const specializations = [
  "Aliquam erat volutpat. Aliquam in sem fringilla.",
  "Donec accumsan et nulla id cursus.",
  "Proin dignissim nibh ac finibus aliquam.",
  "Aliquam erat volutpat. Aliquam in sem fringilla.",
  "Donec accumsan et nulla id cursus.",
  "Proin dignissim nibh ac finibus aliquam.",
];
const contactTel = [
  "Tel: +48 724 234 101",
  "Tel: +48 736 945 735",
  "Tel: +48 269 653 098",
  "Tel: +48 39 853 546",
  "Tel: +48 857 968 425",
  "Tel: +48 782 458 666",
];
const contactEmail = [
  "E-mail: m.gerszendorf@o2.pl",
  "E-mail: v.designer@o2.pl",
  "E-mail: e.hampton@o2.pl",
  "E-mail: j.berry@o2.pl",
  "E-mail: b.rose@o2.pl",
  "E-mail: r.woodward@o2.pl",
];

// DESKTOP

photo_1.addEventListener("click", () => {
  photo_1.classList.add("active_photo");
  activeElement = 1;
  change_elements();
  if (photo_1.classList.contains("active_photo") == true) {
    photo_2.classList.remove("active_photo");
    photo_3.classList.remove("active_photo");
    photo_4.classList.remove("active_photo");
    photo_5.classList.remove("active_photo");
  }
});

photo_2.addEventListener("click", () => {
  photo_2.classList.add("active_photo");
  activeElement = 2;
  change_elements();
  if (photo_2.classList.contains("active_photo") == true) {
    photo_1.classList.remove("active_photo");
    photo_3.classList.remove("active_photo");
    photo_4.classList.remove("active_photo");
    photo_5.classList.remove("active_photo");
    photo_6.classList.remove("active_photo");
  }
});

photo_3.addEventListener("click", () => {
  photo_3.classList.add("active_photo");
  activeElement = 3;
  change_elements();
  if (photo_3.classList.contains("active_photo") == true) {
    photo_1.classList.remove("active_photo");
    photo_2.classList.remove("active_photo");
    photo_4.classList.remove("active_photo");
    photo_5.classList.remove("active_photo");
    photo_6.classList.remove("active_photo");
  }
});

photo_4.addEventListener("click", () => {
  photo_4.classList.add("active_photo");
  activeElement = 4;
  change_elements();
  if (photo_4.classList.contains("active_photo") == true) {
    photo_1.classList.remove("active_photo");
    photo_2.classList.remove("active_photo");
    photo_3.classList.remove("active_photo");
    photo_5.classList.remove("active_photo");
    photo_6.classList.remove("active_photo");
  }
});

photo_5.addEventListener("click", () => {
  photo_5.classList.add("active_photo");
  activeElement = 5;
  change_elements();
  if (photo_5.classList.contains("active_photo") == true) {
    photo_1.classList.remove("active_photo");
    photo_2.classList.remove("active_photo");
    photo_3.classList.remove("active_photo");
    photo_4.classList.remove("active_photo");
    photo_6.classList.remove("active_photo");
  }
});

photo_6.addEventListener("click", () => {
  photo_6.classList.add("active_photo");
  activeElement = 6;
  change_elements();
  if (photo_6.classList.contains("active_photo") == true) {
    photo_1.classList.remove("active_photo");
    photo_2.classList.remove("active_photo");
    photo_3.classList.remove("active_photo");
    photo_4.classList.remove("active_photo");
    photo_5.classList.remove("active_photo");
  }
});

function change_elements() {
  namesHtml.textContent = names[activeElement - 1];
  professionsHtml.textContent = professions[activeElement - 1];
  teamText1Html.textContent = teamText1[activeElement - 1];
  teamText2Html.textContent = teamText2[activeElement - 1];
  specializationsHtml.textContent = specializations[activeElement - 1];
  contactTelHtml.textContent = contactTel[activeElement - 1];
  contactEmailHtml.textContent = contactEmail[activeElement - 1];
}

// MOBILE

photo_1.addEventListener("click", () => {
  photo_1.classList.toggle("active_mobile_img");
  p1_container.classList.toggle("active_mobile_btn");
  p1_container.classList.toggle("inactive_mobile_btn");
});

photo_2.addEventListener("click", () => {
  photo_2.classList.toggle("active_mobile_img");
  p2_container.classList.toggle("active_mobile_btn");
  p2_container.classList.toggle("inactive_mobile_btn");
});

photo_3.addEventListener("click", () => {
  photo_3.classList.toggle("active_mobile_img");
  p3_container.classList.toggle("active_mobile_btn");
  p3_container.classList.toggle("inactive_mobile_btn");
  p3_container.classList.toggle("inactive_mobile_btn");
});

photo_4.addEventListener("click", () => {
  photo_4.classList.toggle("active_mobile_img");
  p4_container.classList.toggle("active_mobile_btn");
  p4_container.classList.toggle("inactive_mobile_btn");
});

photo_5.addEventListener("click", () => {
  photo_5.classList.toggle("active_mobile_img");
  p5_container.classList.toggle("active_mobile_btn");
  p5_container.classList.toggle("inactive_mobile_btn");
});

photo_6.addEventListener("click", () => {
  photo_6.classList.toggle("active_mobile_img");
  p6_container.classList.toggle("active_mobile_btn");
  p6_container.classList.toggle("inactive_mobile_btn");
});

mobileImg1.addEventListener("click", () => {
  mobileImg1.classList.toggle("active_mobile_img");
  mi1_container.classList.toggle("active_mobile_btn");
  mi1_container.classList.toggle("inactive_mobile_btn");
});

mobileImg2.addEventListener("click", () => {
  mobileImg2.classList.toggle("active_mobile_img");
  mi2_container.classList.toggle("active_mobile_btn");
  mi2_container.classList.toggle("inactive_mobile_btn");
});

// SCROLL PAGE (in jQuery)

$("a[href^='#'].page-scroll").on("click", function (e) {
  e.preventDefault();
  var hash = this.hash;
  $("html, body").animate(
    {
      scrollTop: $(hash).offset().top,
    },
    600,
    function () {
      window.location.hash = hash;
      history.replaceState(null, null, hash);
    }
  );
});
