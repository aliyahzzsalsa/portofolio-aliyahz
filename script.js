document.addEventListener('DOMContentLoaded', function() {
  var navbar = document.querySelector('.navbar');
  
  if (navbar) {
    window.addEventListener('scroll', function() {
      // Saat di-scroll lebih dari 20px
      if (window.scrollY > 20) { 
        navbar.style.setProperty('background-color', '#1E1E1E', 'important');
        navbar.style.setProperty('padding', '10px 0', 'important');
      } else {
        // SAAT MENTOK ATAS: Ubah 'transparent' jadi '#1E1E1E' agar tetap hitam
        navbar.style.setProperty('background-color', '#1E1E1E', 'important');
        navbar.style.setProperty('padding', '20px 0', 'important');
      }
    });

    // Tambahkan ini agar saat halaman baru dibuka (mentok atas), langsung hitam
    navbar.style.setProperty('background-color', '#1E1E1E', 'important');
  }
});