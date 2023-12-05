/**
* Template Name: Vesperr
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/vesperr-free-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

const buttonBox = document.querySelectorAll(".services .container .row .col-md-6 .icon-box");
const containerBox = document.querySelector(".container-box-detail-motor");
const containerBoxdetail = document.querySelector(".container-box-detail-motor .box");



(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();




})()



for (let i = 0; i < buttonBox.length; i++) {
  buttonBox[i].addEventListener("click", (e) => {
    // Mencegah peristiwa klik untuk merambat ke jendela
    e.stopPropagation();
    containerBox.classList.add("activeBox");
    // Menambahkan event listener ke jendela untuk menutup kotak jika diklik di luar
    const closeBoxListener = (e) => {
      if (e.target !== buttonBox[i]) {
        containerBox.classList.remove("activeBox");
        window.removeEventListener("click", closeBoxListener);
      }
    };

    window.addEventListener("click", closeBoxListener);
     
      updateUi(i);
  });
}


 function updateUi(i) {
   const {img, nama,spesifikasi}= detailMotor()[i];
   containerBoxdetail.innerHTML = `
   <div class="container-img-motor">
   <img src="${img}" alt="" srcset="">
 </div>
  <div class="container-detail-motor">
   <h1>${nama}</h1>
   <div class="container-spesifikasi">
        ${spesifikasi}
   </div>
 </div>  
   `
 } 




function detailMotor() {
  const DetailMotor = [
    {
      img: "assets/img/motor max 4.png",
      nama: "LEXI 125",
      spesifikasi: `

      <div class="container-mesin"> 
      <h1>Mesin</h1>
      Tipe Kopling	:	Dry, Centrifugal Automatic </br>
      Tipe Transmisi	:	V-belt Automatic </br>
      Tipe Mesin	:	Liquid Cooled 4-stroke, SOHC </br>
      Susunan Silinder	:	Single Cylinder </br>
      Diameter x Langkah	:	52 x 58.7 mm </br>
      Perbandingan Kompresi	:	11.2±0.4 </br>
      Volume Silinder	:	124.7 cc </br>
      Daya Maksimum	:	8.75 kW / 8000 rpm </br>
      Torsi Maksimum	:	11.3 Nm / 7000 rpm </br>
      Sistem Starter	:	Electric Starter </br>
      Sistem Pelumasan	:	Wet Sump </br>
      Kapasitas Oli Mesin	:	Total = 1.00 L ; Berkala = 0.90 L </br>
      Sistem Bahan Bakar	:	Fuel Injection </br>
      </div>
      
      <div class="container-rangka">
      <h1>Rangka</h1>
      Tipe Rangka	:	Underbone </br>
      Suspensi Depan	:	Telescopic Fork </br>
      Tipe Suspensi Belakang	:	Unit Swing </br>
      Tipe Ban	:	Tubeless </br>
      Ban Depan	:	90/90-14M/C 46P </br>
      Ban Belakang	:	100/90-14M/C 57P </br>
      Rem Depan	:	Disc ABS (S ABS Version), Disc (S & Standard Version) </br>
      Rem Belakang	:	Drum </br>
      </div>

      <div class="container-dimensi">
      <h1>Dimensi</h1>
      P X L X T	:	1970 mm x 720 mm x 1135 mm </br>
      Jarak Sumbu Roda	:	1350 mm </br>
      Jarak Terendah Ke Tanah	:	133 mm </br> 
      Tinggi Tempat Duduk	:	785 mm </br>
      Berat Isi	:	114 kg (S ABS, S Version), 112 Kg (Standard Version) </br>
      Kapasitas Tanki Bensin	:	4,2 L </br>
      </div> 
        
      <div class="container-kelistrikan">
      <h1>Kelistrikan</h1>
      Sistem Pengapian	:	TCI </br>
      Tipe Battery	:	YTZ7V </br>
      Tipe Busi	:	CPR8EA-9/U24EPR-9 </br>
      </div>
      `
      
    },
    {
      img: "assets/img/aerox155.jpeg",
      nama: "AEROX 155",
      spesifikasi: `

      <div class="container-mesin"> 
      <h1>Mesin</h1>
      Jumlah/Posisi Silinder	:	Single Cylinder </br>
      Kapasitas Mesin	:	155cc </br>
      Diameter x Langkah	:	58,0 mm x 58.7 mm </br>
      Perbandingan Kompresi	:	11.6 : 1 </br>
      Daya Maksimum	:	11.3 kW / 8000 rpm </br>
      Torsi Maksimum	:	13.9Nm / 6500rpm </br> 
      Sistem Starter	:	Electric Starter </br>
      Sistem Pelumasan	:	Basah </br>
      Kapasitas Oli Mesin	:	Total – 1,00 L ; Berkala 0,90 L </br>
      Sistem Bahan Bakar	:	FI (Fuel Injection) </br>
      Tipe Kopling	:	Kering, Centrifugal Automatic </br>
      Tipe Transmisi	:	V-belt Automatic </br>
      Tipe Mesin	:	Liquid cooled 4-stroke, SOHC </br>
      </div>
      
      <div class="container-rangka">
      <h1>Rangka</h1>
      Rem Depan	:	Disc </br>
      Ban Belakang	:	140/70-14M/C 62P </br>
      Rem Belakang	:	Drum </br>
      Tipe Rangka	:	Underbone </br>
      Suspensi Depan	:	Teleskopik </br>
      Suspensi Belakang	:	Unit Swing </br>
      Ban Depan	:	110/80-14M/C 53P </br>
      </div>

      <div class="container-dimensi">
      <h1>Dimensi</h1>
      P x L x T	:	1980mm X 700mm X 1150mm </br> 
      Jarak sumbu roda	:	1350 mm </br>
      Jarak terendah ke tanah	:	143 mm </br>
      Tinggi tempat duduk	:	790 mm </br>
      Berat isi	:	125 kg (ABS Version), 122 Kg (Standard Version) </br>
      Kapasitas tangki bensin	:	5.5 L </br>
      </div> 
        
      <div class="container-kelistrikan">
      <h1>Kelistrikan</h1>
      Sistem pengapian	:	TCI </br>
      Battery	:	YTZ7V (ABS Version), NTZ6V (Standard Version) </br>
      Tipe Busi	:	NGK/CPR8EA-9 </br>
      </div>
      `
    },
    {
      img: "assets/img/X-RIDE 125.png",
      nama: "X-RIDE 125",
      spesifikasi: `

      <div class="container-mesin"> 
      <h1>Mesin</h1>
      Tipe Mesin	:	4 Langkah, 2 Valve SOHC, Berpendingin Udara, BlueCore </br>
      Susunan Silinder	:	Single Cylinder </br>
      Diameter x Langkah	:	52,4 x 57,9 mm </br>
      Perbandingan Kompresi	:	9,5 : 1 </br>
      Volume Silinder	:	125 cc </br>
      Daya Maksimum	:	7,0 Kw / 8000 rpm </br>
      Torsi Maksimum	:	9,6 N.m / 5500 rpm </br>
      Sistem Starter	:	Electric Starter dan Kick Starter </br>
      Sistem Pelumasan	:	Wet Sump </br>
      Kapasitas Oli Mesin	:	Total: 0,84 L / Penggantian Berkala: 0,80 L / Ganti Filter Oli: 0,80 L </br>
      Sistem Bahan Bakar	:	Fuel Injection (FI) </br>
      Tipe Kopling	:	Dry Centrifugal, Automatic </br>
      Tipe Transisi	:	V-Belt Automatic </br>
      </div>
      
      <div class="container-rangka">
      <h1>Rangka</h1>
      Tipe Rangka	:	Underbone </br>
      Suspensi Depan	:	Teleskopik </br>
      Ban Depan	:	80/80-14MC 43P Tubeless </br>
      Ban Belakang	:	100/70-14MC 51P Tubeless </br> 
      Rem Depan	:	Single Disc Brake </br>
      Rem Belakang	:	Drum Brake </br>
      Suspensi Belakang	:	Unit Swing </br>
      </div>

      <div class="container-dimensi">
      <h1>Dimensi</h1>
      P X L X T	:	1.860 mm x 740 mm x 1.070 mm </br>
      Jarak Sumbu Roda	:	1.260 mm </br>
      Jarak Terendah Ke Tanah	:	135 mm </br>
      Tinggi Tempat Duduk	:	760 mm </br>
      Berat Isi	:	98 kg </br>
      Kapasitas Tangki Bensin	:	4,2 L </br>
      </div> 
        
      <div class="container-kelistrikan">
      <h1>Kelistrikan</h1>
      Sistem Pengapian	:	TCI (Transistor Control Ignition) </br>
      Tipe Battery	:	YTZ4V / GTZ4V </br>
      Tipe Busi	:	NGK / CR6HSA </br>
      </div>
      `
    },
    {
      img: "assets/img/nmaz.jpeg",
      nama: "XMAX 250",
      spesifikasi: `

      <div class="container-mesin"> 
      <h1>Mesin</h1>
      Tipe Mesin	:	Liquid Cooled, 4-Stroke, SOHC, 4 Valves </br>
      Jumlah / Posisi Silinder	:	Single Cylinder </br>
      Isi Silinder	:	249.8 cc </br>
      Diameter X Langkah	:	70.0 mm X 64.9 mm </br>
      Perbandingan Kompresi	:	10.5 : 1 </br>
      Daya Maksimum	:	16.8kW / 7000 rpm </br>
      Torsi Maksimum	:	24.3 Nm / 5500 rpm </br>
      Sistem Starter	:	Electric Starter </br>
      Sistem Pelumasan	:	Wet Sump </br>
      Kapasitas Oli Mesin	:	Total = 1.7 L ; Berkala = 1.5 L </br>
      Sistem Bahan Bakar	:	Fuel Injection </br>
      Tipe Kopling	:	Dry, Centrifugal Automatic </br>
      Tipe Transmisi	:	V-belt Automatic </br>
      </div>
      
      <div class="container-rangka">
      <h1>Rangka</h1>
      Tipe Rangka	:	Backbone </br>
      Suspensi Depan	:	Telescopic Fork </br>
      Suspensi Belakang	:	Unit Swing </br>
      Ban Depan	:	120/70-15M/C 56P </br>
      Ban Belakang	:	140/70-14M/C 62P </br>
      Rem Depan	:	Disc Brake </br>
      Rem Belakang	:	Disc Brake </br>
      </div>

      <div class="container-dimensi">
      <h1>Dimensi</h1>
      P X L X T	:	2180 mm x 795 mm x 1460 mm </br>
      Jarak Sumbu Roda	:	1540 mm </br>
      Jarak Terendah Ke Tanah	:	135 mm </br>
      Tinggi Tempat Duduk	:	795 mm </br>
      Berat isi	:	181 kg </br>
      Kapasitas Tangki Bensin	:	13 L </br>
      </div> 
        
      <div class="container-kelistrikan">
      <h1>Kelistrikan</h1>
      Sistem Pengapian	:	TCI </br>
      Battery	:	GTZ8V </br>
      Tipe Busi	:	NGK/ LMAR8A-9 </br>
      </div>
      `
    },
    {
      img: "assets/img/sport1.jpeg",
      nama:"XSR 155",
      spesifikasi: `

      <div class="container-mesin"> 
      <h1>Mesin</h1>
      Tipe Mesin	:	Liquid cooled, 4-Stroke, SOHC, 4 Valves, VVA </br>
      Jumlah/Posisi Silinder	:	Silinder Tunggal </br>
      Diameter x Langkah	:	58,0 x 58,7 mm </br>
      Perbandingan Kompresi	:	11,6 : 1 </br>
      Daya Maksimum	:	14.2 kW/ 10000 rpm </br>
      Torsi Maksimum	:	14.7 Nm/ 8500 rpm </br>
      Sistem Starter	:	Elektrik Starter </br>
      Sistem Pelumasan	:	Basah </br>
      Kapasitas Oli Mesin	:	Total = 1,50 L ; Berkala = 0,85 L ; Ganti Filter oli = 0,95 L </br>
      Sistem Bahan Bakar	:	Fuel Injection </br>
      Volume Silinder	:	155 cc </br>
      Tipe Kopling	:	Wet Type Multi-Plate Clutch; Assist & Slipper Clutch </br>
      Tipe Transmisi	:	Manual </br>
      Pola Pengoperasian Transmisi	:	1-N-2-3-4-5-6 </br>
      </div>
      
      <div class="container-rangka">
      <h1>Rangka</h1>
        Tipe Rangka	:	Deltabox </br>
        Suspensi Depan	:	Telescopic Fork (Inverted) </br>
        Suspensi Belakang	:	Link Monoshock </br>
        Ban Depan	:	110/70-17M/C (54S) </br>
        Ban Belakang	:	140/70-17M/C (66S) </br>
        Rem Depan	:	Disc Brake </br>
        Rem Belakang	:	Disc Brake </br>
      </div>

      <div class="container-dimensi">
      <h1>Dimensi</h1>
      P X L X T	:	2007 X 804 X 1080 </br>
      Jarak sumbu roda	:	1330 mm </br>
      Jarak Terendah Ke Tanah	:	170 mm </br>
      Tinggi Tempat Duduk	:	810 mm </br>
      Berat Isi	:	134 kg </br>
      Kapasitas Tangki Bensin	:	10.4 Liter </br>
      </div> 
        
      <div class="container-kelistrikan">
      <h1>Kelistrikan</h1>
      Sistem Pengapian	:	TCI/Transistor </br>
      Battery	:	YTZ4V </br>
      Tipe Busi	:	MR8E9 </br>
      </div>
      `
    },
    {
      img: "assets/img/sport2.jpeg",
      nama: "MT-15",
     spesifikasi: `

      <div class="container-mesin"> 
      <h1>Mesin</h1>
      Kapasitas Oli Mesin	:	Total = 1,50 L ; Berkala = 0,85 L ; Ganti Filter oli = 0,95 L </br>
      Sistem Bahan Bakar	:	Fuel Injection </br>
      Volume Silinder	:	155 cc </br>
      Tipe Kopling	:	Wet Type Multi-Plate Clutch; Assist & Slipper Clutch </br>
      Tipe Transmisi	:	Manual </br>
      Pola Pengoperasian Transmisi	:	1-N-2-3-4-5-6 </br>
      Tipe mesin	:	Liquid cooled, 4-Stroke, SOHC, 4 Valves, VVA </br>
      Jumlah/Posisi Silinder	:	Silinder Tunggal </br>
      Diameter x Langkah	:	58,0 x 58,7 mm </br>
      Perbandingan Kompresi	:	11,6 : 1 </br>
      Daya Maksimum	:	14.2 kW/ 10000 rpm </br>
      Torsi Maksimum	:	14.7 Nm/ 8500 rpm </br>
      Sistem Starter	:	Elektrik Starter </br>
      Sistem Pelumasan	:	Basah </br>
      </div>
      
      <div class="container-rangka">
      <h1>Rangka</h1>
      Tipe Rangka	:	Deltabox </br>
      Suspensi Depan	:	Telescopic Form ( Inverted ) </br>
      Suspensi Belakang	:	Link Monoshock </br>
      Ban Depan	:	110/70-17M/C (54S) </br>
      Ban Belakang	:	140/70-17M/C (66S) </br>
      Rem Depan	:	Disc Brake </br>
      Rem Belakang	:	Disc Brake </br>
      </div>

      <div class="container-dimensi">
      <h1>Dimensi</h1>
      P x L x T	:	1965 X 800 X 1065 mm </br>
      Jarak Sumbu Roda	:	1335 mm </br>
      Jarak Terendah Ke Tanah	:	155 mm </br>
      Tinggi Tempat Duduk	:	810 mm </br>
      Berat Isi	:	133 kg </br>
      Kapasitas Tangki Besin	:	10.4 Liter </br>
      </div> 
        
      <div class="container-kelistrikan">
      <h1>Kelistrikan</h1>
      Sistem Pengapian	:	CDI/Transistor </br>
      Battery	:	YTZ4V </br>
      Tipe Busi	:	MR8E9 </br>
      </div> `
    },
    {
      img: "assets/img/sport3.jpeg",
      nama: "R 15",
      spesifikasi: `
      <div class="container-mesin"> 
      <h1>Mesin</h1>
        Tipe Mesin	:	Liquid Cooled, 4-Stroke, SOHC, 4 Valve, VVA </br>
        Jumlah/Posisi Silinder	:	Single Cylinder </br>
        Isi Silinder (CC)	:	155.09 cc </br>
        Diameter x Langkah	:	58.0 x 58.7 mm </br>
        Perbandingan Kompresi	:	11.6 ± 0.4 : 1 </br>
        Daya Maksimum	:	14.2 kW / 10000 rpm </br>
        Torsi Maksimum	:	14.7 Nm / 8500 rpm </br>
        Sistem Starter	:	Elektrik Starter </br>
        Sistem Pelumasan	:	Wet Sump </br>
        Kapasitas Oli Mesin	:	Total =1.15L; Berkala = 0.85L; Ganti Filter Oli = 0.95L L </br>
        Sistem Bahan Bakar	:	Fuel Injection </br>
        Tipe Kopling	:	Multi Wet Clutch </br>
        Tipe Transmisi	:	Manual </br>
        Pola Pengoperasian Transmisi	:	1-N-2-3-4-5-6 </br>
      </div>
      
      <div class="container-rangka">
      <h1>Rangka</h1>
      Tipe Rangka	:	Deltabox </br>
      Suspensi Depan	:	Telescopic Fork (Inverted) </br>
      Suspensi Belakang	:	Link Monoshock </br>
      Ban Depan	:	100/80-17M/C 52P </br>
      Ban Belakang	:	140/70-17M/C 66S </br>
      Rem Depan	:	Disc Brake </br>
      Rem Belakang	:	Disc Brake </br>
      </div>

      <div class="container-dimensi">
      <h1>Dimensi</h1>
      P X L X T (Length x Width x Height)	:	1990 x 725 x 1135 mm </br>
      Jarak Sumbu Roda	:	1325 mm </br>
      Jarak Terendah Ke Tanah	:	170 mm </br>
      Tinggi Tempat Duduk	:	815 mm </br>
      Berat Isi	:	137 Kg (All New R15), 140 Kg (All New R15M) </br>
      Kapasitas Tangki Bensin	:	11 L </br>
      </div> 
        
      <div class="container-kelistrikan">
      <h1>Kelistrikan</h1>
      Sistem Pengapian	:	TCI </br> 
      Battery	:	GTZ4V/YTZ4V (All New R15), YTZ6V (All New R15M) </br>
      Tipe Busi	:	MR8E9 </br>
      </div> `
    },
    {
      img: "assets/img/sport4.jpeg",
      nama: "R 25",
      spesifikasi: `
      <div class="container-mesin"> 
      <h1>Mesin</h1>
      TIPE MESIN	:	Liquid cooled 4-stroke, DOHC </br>
      SISTEM BAHAN BAKAR	:	Fuel Injection </br>
      TIPE KOPLING	:	Basah, Kopling manual , Multiplat </br>
      TIPE TRANSMISI	:	Constant mesh 6-kecepatan </br>
      JUMLAH / POSISI SILINDER	:	Inline 2-cylinder </br>
      DIAMETER X LANGKAH	:	60,0 x 44,1 mm </br>
      PERBANDINGAN KOMPRESI	:	11,6 : 1 </br>
      DAYA MAKSIMUM	:	26,5kW/12000rpm </br>
      TORSI MAKSIMUM	:	23.6Nm/10000rpm </br>
      SISTEM STARTER	:	Elektrik starter </br>
      SISTEM PELUMASAN	:	Basah </br>
      KAPASITAS OLI MESIN	:	Total = 2,40 L ; Berkala = 1,80 L ; Ganti filter oli = 2,10 L </br>
      </div>
      
      <div class="container-rangka">
      <h1>Rangka</h1>
      TIPE RANGKA	:	Diamond </br>
      SUSPENSI DEPAN	:	Teleskopik </br>
      SUSPENSI BELAKANG	:	Swing Arm </br>
      BAN DEPAN	:	110/70-17M/C (54S) </br>
      BAN BELAKANG	:	140/70-17M/C (66S) </br>
      REM DEPAN	:	Cakram Hidraulic , Piston Ganda </br>
      REM BELAKANG	:	Cakram Hidraulic, Piston Tunggal </br>
      </div>

      <div class="container-dimensi">
      <h1>Dimensi</h1>
        P X L X T	:	2090mm X 720mm X 1135mm </br>
        JARAK SUMBU RODA	:	1380mm </br> 
        JARAK TERENDAH KE TANAH	:	160mm </br>
        TINGGI TEMPAT DUDUK	:	780mm </br>
        BERAT ISI	:	166 kg </br>
        KAPASITAS TANGKI BENSIN	:	14 Liter </br>
      </div> 
        
      <div class="container-kelistrikan">
      <h1>Kelistrikan</h1>
      SISTEM PENGAPIAN	:	TCI </br>
      BATTERY	:	GTZ8V  </br>
      TIPE BUSI	:	NGK/CR9E </br>
      </div> `
    },
    {
    img: "assets/img/vixion 155.png",
    nama: "VIXION 155",
    spesifikasi: `
    <div class="container-mesin"> 
    <h1>Mesin</h1>
    SISTEM BAHAN BAKAR	:	Fuel Injection </br>
    TIPE KOPLING	:	Wet Type Multi-Plate Clutch ; Assist & Slipper Clutch </br>
    TIPE TRANSMISI	:	Manual </br>
    TIPE MESIN	:	Liquid Cooled 4-Stroke, SOHC, 4 Valve, VVA (Vixion R), Liquid Cooled 4-stroke, SOHC (Vixion) </br>
    SUSUNAN SILINDER	:	Single Cylinder </br>
    DIAMETER X LANGKAH	:	58 x 58.7 mm (Vixion R), 57 x 58.7 mm (Vixion) </br>
    PERBANDINGAN KOMPRESI	:	11.6±0.4 : 1 (Vixion R), 10.4 : 1 (Vixion) </br>
    VOLUME SILINDER	:	155.1 cc (Vixion R), 149.8 cc (Vixion) </br>
    DAYA MAKSIMUM	:	14.2 kW / 10000 rpm (Vixion R), 12.2 kW / 8500 rpm (Vixion) </br>
    TORSI MAKSIMUM	:	14.7 Nm / 8500 rpm (Vixion R), 14.5 Nm / 7500 rpm (Vixion) </br>
    SISTEM STARTER	:	Electric Starter </br>
    SISTEM PELUMASAN	:	Wet Sump </br>
    </div>
    
    <div class="container-rangka">
    <h1>Rangka</h1>
    SUSPENSI DEPAN	:	Teleskopic </br>
    SUSPENSI BELAKANG	:	Swing Arm </br>
    TIPE BAN	:	Tubeless </br> 
    BAN DEPAN	:	90/80-17M/C 46P </br>
    BAN BELAKANG	:	130/70-17M/C 62P (Vixion R), 120/70-17M/C 58P (Vixion) </br>
    REM DEPAN	:	Disc Brake </br>
    REM BELAKANG	:	Disc Brake </br>
    TIPE RANGKA	:	Deltabox </br>
    </div>

    <div class="container-dimensi">
    <h1>Dimensi</h1>
      P X L X T (Length x Width x Height)	:	1950 x 720 x 1025 mm (Vixion R), 1955 x 720 x 1025 mm (Vixion) </br>
      JARAK SUMBU RODA	:	1320 mm (Vixion R), 1295 mm (Vixion) </br>
      JARAK TERENDAH KE TANAH	:	165 mm </br>
      TINGGI TEMPAT DUDUK	:	795 mm </br> 
      BERAT ISI	:	131 kg (Vixion R), 132 Kg (Vixion) </br>
      KAPASITAS TANGKI BENSIN	:	11 L (Vixion R), 12 L (Vixion) </br>
    </div> 
      
    <div class="container-kelistrikan">
    <h1>Kelistrikan</h1>
    SISTEM PENGAPIAN	:	TCI </br>
    BATTERY	:	GTZ8V  </br>
    TIPE BUSI	:	NGK/CR9E </br>
    </div> `
  },
  ]
 return DetailMotor;
}
