function devicechecker()
  {

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href="socialmobile.html";
    }
    else {
      window.location.href="socialwindows.html";
    }
  }
