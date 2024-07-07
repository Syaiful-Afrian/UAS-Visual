$(document).ready(function () {
  /*=============== TAMPILKAN MENU ===============*/
  const $navMenu = $("#nav-menu"),
    $navToggle = $("#nav-toggle"),
    $navClose = $("#nav-close");

  /* Tampilkan menu */
  if ($navToggle.length) {
    $navToggle.on("click", function () {
      $navMenu.addClass("show-menu");
    });
  }

  /* Sembunyikan menu */
  if ($navClose.length) {
    $navClose.on("click", function () {
      $navMenu.removeClass("show-menu");
    });
  }

  /*=============== HAPUS MENU MOBILE ===============*/
  const $navLink = $(".nav__link");

  const linkAction = () => {
    $navMenu.removeClass("show-menu");
  };
  $navLink.each(function () {
    $(this).on("click", linkAction);
  });

  /*=============== UBAH LATAR HEADER ===============*/
  const scrollHeader = () => {
    const $header = $("#header");
    if ($(window).scrollTop() >= 50) {
      $header.addClass("scroll-header");
    } else {
      $header.removeClass("scroll-header");
    }
  };
  $(window).on("scroll", scrollHeader);

  /*=============== SWIPER TESTIMONIAL ===============*/
  let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*=============== SWIPER BARU ===============*/
  let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: true,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  /*=============== TAUTAN AKTIF PADA BAGIAN SCROLL ===============*/
  const $sections = $("section[id]");

  const scrollActive = () => {
    const scrollDown = $(window).scrollTop();
    $sections.each(function () {
      const $current = $(this);
      const sectionHeight = $current.outerHeight(),
        sectionTop = $current.offset().top - 58,
        sectionId = $current.attr("id"),
        $sectionsClass = $(".nav__menu a[href*=" + sectionId + "]");

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        $sectionsClass.addClass("active-link");
      } else {
        $sectionsClass.removeClass("active-link");
      }
    });
  };
  $(window).on("scroll", scrollActive);

  /*=============== TAMPILKAN SCROLL UP ===============*/
  const scrollUp = () => {
    const $scrollUp = $("#scroll-up");
    if ($(window).scrollTop() >= 350) {
      $scrollUp.addClass("show-scroll");
    } else {
      $scrollUp.removeClass("show-scroll");
    }
  };
  $(window).on("scroll", scrollUp);

  /*=============== TAMPILKAN KERANJANG ===============*/
  const $cart = $("#cart"),
    $cartShop = $("#cart-shop"),
    $cartClose = $("#cart-close");

  /*===== TAMPILKAN KERANJANG =====*/
  if ($cartShop.length) {
    $cartShop.on("click", function () {
      $cart.addClass("show-cart");
    });
  }

  /*===== SEMBUNYIKAN KERANJANG =====*/
  if ($cartClose.length) {
    $cartClose.on("click", function () {
      $cart.removeClass("show-cart");
    });
  }

  /*=============== TEMA GELAP TERANG ===============*/
  const $themeButton = $("#theme-button"),
    darkTheme = "dark-theme",
    iconTheme = "bx-sun";

  // Topik yang dipilih sebelumnya (jika pengguna memilih)
  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");

  // Kami mendapatkan tema saat ini yang dimiliki antarmuka dengan memvalidasi kelas dark-theme
  const getCurrentTheme = () => ($("body").hasClass(darkTheme) ? "dark" : "light");
  const getCurrentIcon = () => ($themeButton.hasClass(iconTheme) ? "bx bx-moon" : "bx bx-sun");

  // Kami memvalidasi jika pengguna sebelumnya memilih topik
  if (selectedTheme) {
    // Jika validasi terpenuhi, kami menanyakan apa masalahnya untuk mengetahui apakah kami mengaktifkan atau menonaktifkan tema gelap
    $("body").toggleClass(darkTheme, selectedTheme === "dark");
    $themeButton.toggleClass(iconTheme, selectedIcon === "bx bx-moon");
  }

  // Aktifkan / nonaktifkan tema secara manual dengan tombol
  $themeButton.on("click", function () {
    // Tambahkan atau hapus tema gelap / ikon
    $("body").toggleClass(darkTheme);
    $themeButton.toggleClass(iconTheme);
    // Kami menyimpan tema dan ikon saat ini yang dipilih pengguna
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });
});
