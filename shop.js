document.addEventListener("DOMContentLoaded", function () {
  const main = document.getElementById("main");
  const registerLink = document.querySelector(".register");
  const loginLink = document.querySelector(".login");
  const registerForm = document.getElementById("form-1");
  const loginForm = document.getElementById("form-2");
  const logoImg = document.querySelector(".logo-img");
  const contentId = document.getElementById("content");

  registerLink.addEventListener("click", function (event) {
    event.preventDefault();
    registerForm.style.display = "block";
    loginForm.style.display = "none";
    main.style.display = "flex";
    contentId.style.display = "none";
  });
  loginLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    main.style.display = "flex";
    contentId.style.display = "none";
  });
  logoImg.addEventListener("click", function () {
    main.style.display = "none";
    contentId.style.display = "block";
  });




  const namRow = document.querySelector(".nam-row");
  const nuRow = document.querySelector(".nu-row");
  const treRow = document.querySelector(".tre-row");

  // Lấy các phần tử chọn
  const namChoose = document.getElementById("nam-choose");
  const nuChoose = document.getElementById("nu-choose");
  const treChoose = document.getElementById("tre-choose");

  // Ẩn ban đầu các dòng nữ và trẻ em
  nuRow.style.display = "none";
  treRow.style.display = "none";

  // Thêm sự kiện click vào phần tử "nu-choose"
  nuChoose.addEventListener("click", function () {
    nuRow.style.display = "flex"; // Hiện dòng cho nữ
    namRow.style.display = "none"; // Ẩn dòng cho nam
    treRow.style.display = "none"; // Ẩn dòng cho trẻ em
    treChoose.style.color = "gray";
    treChoose.style.borderBottomColor = "gray";
    nuChoose.style.color = "orange";
    nuChoose.style.borderBottomColor = "orange";
    namChoose.style.color = "gray";
    namChoose.style.borderBottomColor = "gray";
  });

  // Thêm sự kiện click vào phần tử "nam-choose"
  namChoose.addEventListener("click", function () {
    nuRow.style.display = "none"; // Ẩn dòng cho nữ
    namRow.style.display = "flex"; // Hiện dòng cho nam
    treRow.style.display = "none";
    treChoose.style.color = "gray";
    treChoose.style.borderBottomColor = "gray";
    nuChoose.style.color = "gray";
    nuChoose.style.borderBottomColor = "gray";
    namChoose.style.color = "orange";
    namChoose.style.borderBottomColor = "orange";
  });

  // Thêm sự kiện click vào phần tử "tre-choose"
  treChoose.addEventListener("click", function () {
    nuRow.style.display = "none"; // Ẩn dòng cho nữ
    namRow.style.display = "none"; // Ẩn dòng cho nam
    treRow.style.display = "flex"; // Hiện dòng cho trẻ em
    treChoose.style.color = "orange";
    treChoose.style.borderBottomColor = "orange";
    nuChoose.style.color = "gray";
    nuChoose.style.borderBottomColor = "gray";
    namChoose.style.color = "gray";
    namChoose.style.borderBottomColor = "gray";
  });


  $("#BST-row").owlCarousel({
    loop: false,
    margin: 30, // Khoảng cách giữa các mục (tuỳ chỉnh theo ý của bạn)
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },

      1400: {
        items: 3,
      },
    },
  });


  $("#goi-y-row").owlCarousel({
    loop: false,
    margin: 30, // Khoảng cách giữa các mục (tuỳ chỉnh theo ý của bạn)
    nav: false,
    responsive: {
      0: {
        items: 3,
      },
      768: {
        items: 3,
      },
      1024: {
        items: 3,
      },

      1440: {
        items: 4,
      },
    },
  });

  $("#moi-ve-row").owlCarousel({
    loop: false,
    margin: 30, // Khoảng cách giữa các mục (tuỳ chỉnh theo ý của bạn)
    nav: false,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },

      1400: {
        items: 4,
      },
    },
  });

  $("#yody-sport-row").owlCarousel({
    loop: false,
    margin: 30, // Khoảng cách giữa các mục (tuỳ chỉnh theo ý của bạn)
    nav: false,
    responsive: {
      0: {
        items: 3,
      },
      768: {
        items: 3,
      },
      1024: {
        items: 3,
      },

      1440: {
        items: 4,
      },
    },
  });

  $("#cong-so-row").owlCarousel({
    loop: false,
    margin: 30, // Khoảng cách giữa các mục (tuỳ chỉnh theo ý của bạn)
    nav: false,
    
    responsive: {
      0: {
        items: 3,
      },
      768: {
        items: 3,
      },
      1024: {
        items: 3,
      },

      1440: {
        items: 4,
      },
    },
  });
});

//hiện menu (mobile)
document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.getElementById("menu-button");
  const menuList = document.getElementById("menu-list");

  menuButton.addEventListener("click", function() {
    menuList.classList.toggle("show-menu");
  });
});



let mybutton = document.getElementById("btn-to-top");
        
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
        
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }

// // hiện đăng nhập/ đăng kí (mobile)
// document.addEventListener("DOMContentLoaded", function() {
//   const miniUserButton = document.querySelector(".mini-user-button");
//   const mobileUser = document.querySelector(".mobile-user");

//   miniUserButton.addEventListener("click", function() {
//     mobileUser.classList.toggle("d-none");
//   });
// });

// // hiện thanh tìm kiếm (mobile)
// document.addEventListener("DOMContentLoaded", function() {
//   const miniBtnSearch = document.querySelector(".mini-btn-search");
//   const searchBarMobile = document.querySelector(".search-bar-mobile");

//   miniBtnSearch.addEventListener("click", function() {
//     searchBarMobile.classList.toggle("d-none");
//   });
// });
