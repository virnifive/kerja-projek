<?php
  include "config.php";
  if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $sql = "INSERT INTO komen VALUES (NULL, '$name', '$email', '$message', NOW())";
    $result = $db->query($sql);

    if ($result) {
      header("Refresh: 0");
    }
  }
  

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>YAMAHA</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">
</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <div class="logo">
        <h1><a href="index.html">PT YAMAHA INDONESIA</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Product</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a class="nav-link scrollto" href="#feedback">Feedback</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          
          <link href="assets/img/foto yamaha.jpg" rel="apple-touch-icon">

          <h1 data-aos="fade-up">SELAMAT DATANG DI PT.YAMAHA INDONESIA</h1>
          <h2 data-aos="fade-up" data-aos-delay="400">Kami membuka kesempatan yang luas bagi Anda untuk berkembang bersama kami.</h2>
          <div data-aos="fade-up" data-aos-delay="800">
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
          <img src="assets/img/829813812.jpg" class="img-fluid animated" alt="">
        </div>
      </div>
    </div>
  </section><!-- End Hero -->

  <main id="main">

    <!-- ======= Clients Section ======= -->
    <section id="clients" class="clients clients">
      <div class="container">

        <div class="row">

          <div class="col-lg-2 col-md-4 col-6">
            <img src="assets/img/fb.png" class="img-fluid" alt="" data-aos="zoom-in">
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src="assets/img/download.jpeg" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="10">
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src="assets/img/line.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="10">
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src="assets/img/wha.jpeg" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="10">
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src="assets/img/twit.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="10">
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src="assets/img/tele.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="10">
          </div>

        </div>

      </div>
    </section><!-- End Clients Section -->

    <!-- ======= About Us Section ======= -->
    <section id="about" class="about">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>About Us</h2>
        </div>

        <div class="row content">
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="150">
            <p>
              Sejak pendiri kami, Genichi Kawakami, mendirikan Yamaha Motor pada tahun 1955, adalah misi kami untuk memberikan KANDO kepada SEMUA pelanggan kami. Dan tidak hanya dengan produk kami.
            </p>
            
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <p>
              KANDO adalah istilah Jepang untuk menggambarkan perasaan kepuasan dan kegembiraan yang luar biasa yang dirasakan seseorang ketika memiliki sesuatu dengan nilai, kualitas, dan kinerja yang luar biasa. Ini adalah emosi yang menggembirakan yang menambahkan bumbu ke dalam hidup Anda dan membuat jantung Anda berdebar kencang! Produk dan layanan kami telah dirancang dan dikembangkan oleh orang-orang yang benar-benar mencintai pekerjaan mereka, dan yang tujuannya adalah untuk menawarkan pengalaman terbaik kepada Anda.
            </p>
          </div>
        </div>

      </div>
    </section><!-- End About Us Section -->

    <!-- ======= Counts Section ======= -->
    <section id="counts" class="counts">
      <div class="container">

        <div class="row">
          <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
            <img src="assets/img/counts-img.svg" alt="" class="img-fluid">
          </div>

          <div class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
            <div class="content d-flex flex-column justify-content-center">
              <div class="row">
                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="bi bi-emoji-smile"></i>
                    <span data-purecounter-start="0" data-purecounter-end="1887" data-purecounter-duration="1" class="purecounter"></span>
                    <p><strong>Berdirinya Yamaha</strong> Nippon Gakki didirikan oleh Torakusu Yamaha.</p>
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="bi bi-journal-richtext"></i>
                    <span data-purecounter-start="0" data-purecounter-end="1954" data-purecounter-duration="1" class="purecounter"></span>
                    <p><strong>Yamaha Music School</strong> Yamaha membuka pertama kali kelas music organ.</p>
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="bi bi-clock"></i>
                    <span data-purecounter-start="0" data-purecounter-end="1955" data-purecounter-duration="1" class="purecounter"></span>
                    <p><strong>Terbentuknya Yamaha Motor</strong> Terbentuknya Yamaha Motor, YA-1 merupakan produk pertama yang di produksi dan menjuarai balapan di Fuji & Assen.</p>
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="bi bi-award"></i>
                    <span data-purecounter-start="0" data-purecounter-end="1975" data-purecounter-duration="1" class="purecounter"></span>
                    <p><strong>Berdirinya Yamaha Motor di Indonesia</strong> PT. Yamaha Indonesia Motor Manufacturing (YIMM) didirikan di Indonesia sebagai pembuat suku cadang sepeda motor.</p>
                  </div>
                </div>
              </div>
            </div><!-- End .content-->
          </div>
        </div>

      </div>
      <section id="more-services" class="more-services">
        <div class="container">
  
          <div class="row">
            <div class="col-md-6 d-flex align-items-stretch">
              <div class="card" style='background-image: url("assets/img/foto1.jpg");' data-aos="fade-up" data-aos-delay="100">
                <div class="card-body">
                  <h5 class="card-title"><a href="">Global Factory Yamaha Indonesia Dipilih Jadi Basis Produksi MT-07</a></h5>
                  <p class="card-text">Manufaktur Berkualitas Global Berkiprah hampir 50 tahun di Indonesia, PT. Yamaha Indonesia Motor Manufacturing (YIMM) telah berkembang menjadi manufaktur berkualitas standar global dengan memiliki 2 lokasi pabrik yaitu di Pulogadung Jakarta Timur dan Karawang Jawa Barat..</p>
                  
                </div>
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div class="card" style='background-image: url("assets/img/foto2.jpg");' data-aos="fade-up" data-aos-delay="200">
                <div class="card-body">
                  <h5 class="card-title"><a href="">Wujudkan Pencapaian Carbon Neutral, Yamaha Lakukan Aktivitas Ramah Lingkungan Berkelanjutan</a></h5>
                  <p class="card-text">Jakarta – Upaya Yamaha dalam mencapai Carbon Neutral untuk menjaga keberlangsungan lingkungan hidup, kembali ditunjukkan melalui aktivitas penanaman ribuan pohon mangrove yang dilakukan di Kawasan Ekowisata Mangrove, Pantai Indah Kapuk Jakarta Utara. Seremoni.</p>
                  
                </div>
              </div>
  
            </div>
            <div class="col-md-6 d-flex align-items-stretch mt-4">
              <div class="card" style='background-image: url("assets/img/foto3.png");' data-aos="fade-up" data-aos-delay="100">
                <div class="card-body">
                  <h5 class="card-title"><a href="">Gebyar Yamaha Day Masih Berlangsung, Ayo Ikuti Beragam Aktivitas dan Dapatkan Hadiah Menarik di Bulan Juli Ini</a></h5>
                  <p class="card-text">Gebyar Yamaha Day di bulan Juli 2023 ini masih berlangsung untuk merayakan Hari Ulang Tahun (HUT) Yamaha Motor Company (YMC) ke-68 tahun pada t  anggal 1 Juli, dan Yamaha Indonesia Motor Manufacturing (YIMM) yang ke-49 tahun pada tanggal 6 Juli. Tema yang diusung adalah.</p>
                  
                </div>
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-stretch mt-4">
              <div class="card" style='background-image: url("assets/img/foto4.jpg");' data-aos="fade-up" data-aos-delay="200">
                <div class="card-body">
                  <h5 class="card-title"><a href="">Restart & Rev Up” Yamaha Day 2023, Sebarkan Semangat Kembali Normal dan Terus Maju Bersama</a></h5>
                  <p class="card-text">Yamaha merayakan hari Ulang Tahunnya di bulan Juli ini. Dan di tahun 2023 ini tema yang diusung adalah “Restart & Rev Up”, untuk memulai kembali era baru kehidupan normal setelah pandemi dan terus bersemangat dalam melanjutkan kehidupan yang lebih baik dan tetap produktif.</p>
                  
                </div>
              </div>
            </div>
          </div>
  
        </div>
    </section><!-- End Counts Section -->

    <!-- ======= Services Section ======= -->
    <section id="services" class="services">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Product</h2>
          <p>Nama-nama motor matic</p>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <img src="assets/img/download (1).jpeg">
              <h4 class="title">LEXi 125</h4>
              <p class="description">Rp.23.000.000</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <img src="assets/img/aerox155.jpeg">
              <h4 class="title">AEROX 155</h4>
              <p class="description">Rp.30.000.000</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <img src="assets/img/X-RIDE 125.png">
              <h4 class="title">X-RIDE 125</h4>
              <p class="description">Rp.29.000.000</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
              <img src="assets/img/nmaz.jpeg">
              <h4 class="title">XMAX 250</h4>
              <p class="description">Rp.25.000.000</p>
            </div>
          </div>
        </div>
      </div>

        

      <section id="services" class="services">
        <div class="container">
  
          <div class="section-title" data-aos="fade-up">
            <h2>Product</h2>
            <p>Nama-nama motor Sport </p>
          </div>
  
          <div class="row">
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                <img src="assets/img/sport1.jpeg">
                <h4 class="title">XSR 155</h4>
                <p class="description">Rp.29.000.000</p>
              </div>
            </div>
  
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                <img src="assets/img/sport2.jpeg">
                <h4 class="title">MT-15</h4>
                <p class="description">Rp.38.525.000</p>
              </div>
            </div>
  
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                <img src="assets/img/sport3.jpeg">
                <h4 class="title">R 15</h4>
                <p class="description">Rp.39.875.000</p>
              </div>
            </div>
  
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                <img src="assets/img/sport4.jpeg">
                <h4 class="title">R 25</h4>
                <p class="description">Rp.63.450.000</p>
              </div>
            </div>


            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                <img src="assets/img/vixion 155.png">
                <h4 class="title">Vision 155</h4>
                <p class="description">Rp 33.000.000</p>
              </div>
            </div>


  
          </div>
  
        </div>
      
    </section><!-- End Services Section -->
    </section><!-- End More Services Section -->

   <div class="container-box-detail-motor">
    <div class="box">
      <!-- <div class="container-img-motor">
        <img src="assets/img/X-RIDE 125.png" alt="" srcset="">
      </div>
      <div class="container-detail-motor">
        <h1>X-RIDE 125</h1>
        <div class="container-spesifikasi">
            
        </div>
      </div> -->
    </div>
   </div>
  

      
   <!--contact section starts-->
<section class="contact" id="contact">
  <h1 class="heading"><span>contact</span> us</h1>
  <div class="box">
    <div class="container-contact">
      <div class="col-4">
          <h4>Address</h4>
          <p>Ruko Cordoba, Jl. Pantai Indah Kapuk No.3, RT.7/RW.2, Kamal Muara, Kec. Penjaringan, Jkt Utara, Daerah Khusus Ibukota Jakarta 14470</p>
      </div>
      <div class="col-4">
          <h4>Line ID</h4>
          <p>@madameflorist,@madameflorist1</p>
      </div>
      <div class="col-4">
          <h4>Telp.</h4>
          <p>(021) 56945795</p>
      </div>
      <div class="col-4">
          <h4> No.Hp</h4>
          <p>087879038018</p>
      </div>
      </div>
      <div class="maps">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.159828498328!2d106.73591478885497!3d-6.109171499999983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d35e798158b%3A0x9739374692637605!2sRuko%20Cordoba!5e0!3m2!1sid!2sid!4v1701236559311!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
  </div>
     
    </section>





          <div class="col-lg-5 col-md-12 " data-aos="fade-up" data-aos-delay="300" id="feedback">
            <h1>Feedback</h1>
            <form action="index.php" method="post" class="php-email-form">
              <div class="form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <!-- <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div> -->
              <div class="text-center"><button type="submit" name="submit" id="submit">Send Message</button></div>
            </form>
          </div>
    <!-- End Contact Section -->

    <div class="content">
		<p class="list">List Comment<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
				class="bi bi-caret-down-fill" viewBox="0 0 16 16">
				<path
					d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
			</svg></p>
		<?php
		date_default_timezone_set('Asia/Jakarta');


		$sql = "SELECT * FROM komen";
		$result = $db->query($sql);
		$waktu_sekarang = time();

		if ($result) {
			// output data of each row
			while ($row = $result->fetch_array()) {
				$timestamp_unix = strtotime($row['timestamp']);

				$selisih_detik = $waktu_sekarang - $timestamp_unix;


				if ($selisih_detik < 60) {
					$teks_waktu = $selisih_detik . " sec" . ($selisih_detik > 1 ? "s" : "") . " ago";
				} elseif ($selisih_detik < 3600) {
					$menit = floor($selisih_detik / 60);
					$teks_waktu = $menit . " min" . ($menit > 1 ? "s" : "") . " ago";
				} elseif ($selisih_detik < 86400) {
					$jam = floor($selisih_detik / 3600);
					$teks_waktu = $jam . " hour" . ($jam > 1 ? "s" : "") . " ago";
				} elseif ($selisih_detik < 2592000) {
					$hari = floor($selisih_detik / 86400);
					$teks_waktu = $hari . " day" . ($hari > 1 ? "s" : "") . " ago";
				} elseif ($selisih_detik < 31536000) {
					$bulan = floor($selisih_detik / 2592000);
					$teks_waktu = $bulan . " month" . ($bulan > 1 ? "s" : "") . " ago";
				} else {
					$tahun = floor($selisih_detik / 31536000);
					$teks_waktu = $tahun . " year" . ($tahun > 1 ? "s" : "") . " ago";
				}

				$tanggal = date('d-m-Y', strtotime($row['timestamp']));
				?>
				<h3 id="name">
					<?php echo $row['name']; ?>
				</h3>
				<h4 id="email" class="sensor">
					<?php echo $row['email']; ?>
				</h4>

				<div style="display: flex; justify-content: space-between; margin-right: -75px;">
					<p id="message">
						<?php echo $row['message']; ?>
					</p>
					<p>
						<?php echo $tanggal ?>
						<?php echo $teks_waktu ?>
					</p>
				</div>

			<?php }
		} ?>
	</div>




	<script>

     const resultm = document.querySelectorAll(".sensor");
     

		//PESAN
		var sensor = ["bot", "cuki", "anjing", "jelek", "kemem", "bangsat", "kontol", 
		"peler", "pler", "meki", "memek", "ngentot", "babi", "ayam", "jenglot", 
		"kimak", "ngentot", "goblok", "titid"]


		// function replaceTextInElements(elements) {
		// 	elements.forEach(function (element) {

		// 		var originalText = element.textContent;


		// 		var newText = originalText.replace(new RegExp(sensor.join('|'), 'gi'), function (match) {

		// 			return '*'.repeat(match.length);
		// 		});


		// 		element.textContent = newText;
		// 	});
		// }



    function a() {
        let result;
        for (let i = 0; i < resultm.length; i++) {
            if (resultm[i].innerHTML.indexOf("titid") > -1) {
               result = "*".repeat(resultm[i].innerHTML.length);
               resultm[i].innerHTML = result;
            }
        }
    }

    a();


	


		replaceTextInElements(messageElements);

		//NAMA
		var sensor = ["anjing", "jelek", "kemem", "bangsat", 
		"kontol", "peler", "pler", "memek", "ngentot", "babi", 
		"ayam", "jenglot"]
		function replaceTextInElements(elements) {
			elements.forEach(function (element) {

				var originalText = element.textContent;


				var newText = originalText.replace(new RegExp(sensor.join('|'), 'gi'), function (match) {

					return '*'.repeat(match.length);
				});


				element.textContent = newText;
			});
		}


		var messageElements = document.querySelectorAll('h3#name');


		replaceTextInElements(messageElements);
	</script>

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-lg-6 text-lg-left text-center">
          <div class="copyright">
            &copy; Copyright <strong>PT.YAMAHA INDONESIA</strong>. All Rights Reserved
          </div>
          <div class="credits">
            <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/vesperr-free-bootstrap-template/ -->
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
        <div class="col-lg-6">
          <nav class="footer-links text-lg-right text-center pt-2 pt-lg-0">
            <a href="#intro" class="scrollto">Home</a>
            <a href="#about" class="scrollto">About</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </nav>
        </div>
      </div>
    </div>
  </footer><!-- End Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <!-- <script src="assets/vendor/php-email-form/validate.js"></script> -->

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>
</html>