var slide3=document.querySelector(".slide3"),slide3Button=document.querySelector(".slide3-btn");slide3Button.addEventListener("click",function(){slide3.classList.remove("active");localStorage.setItem("slide3BannerDisplayed","true")});setTimeout(function(){localStorage.getItem("slide3BannerDisplayed")||slide3.classList.add("active")},300);