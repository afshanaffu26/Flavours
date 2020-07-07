
function initializeCalls() {
    document.getElementById("menuCloseIcon").src = "resources/menu.png";
    document.getElementById("cartImage").onclick = function() {
        window.location.href = "cart.html";
    };
    if (localStorage.getItem("isUserLoggedIn") == "true") {
        document.getElementById("loginMessage").style.visibility = "hidden";
        document.getElementById("loggedInMessage").style.visibility = "visible";
        document.getElementById("logout").style.visibility = "visible";
    }else{
        document.getElementById("loginMessage").style.visibility = "visible";
        document.getElementById("loggedInMessage").style.visibility = "hidden";
        document.getElementById("logout").style.visibility = "hidden";
    }
    showTimeAndDate();

}

function showTimeAndDate() {
    var today = new Date();
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timeAndDate').innerHTML =
    today.toLocaleDateString("en-US", options) + ", " + h + ":" + m + ":" + s;
    var t = setTimeout(showTimeAndDate, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}

function playAudio(audioElement) {
    audioElement.play();
}

function getButtonAudioElement() {
    return document.getElementById("buttonAudio");
}

function changeImg(x, url) {
    document.getElementById(x.children[0].id).src = url;
}

function changeColor(x, color) {
    document.getElementById(x.children[0].id).style.color = color;
}

function onClickOfOrderNow() {
    var audio_element = getButtonAudioElement();
    audio_element.addEventListener("ended", function() {
        window.location.href = "quickview.html";
    });
    playAudio(audio_element);
}

function login() {
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    if(localStorage.getItem(username) && localStorage.getItem(username) == password){
        localStorage.setItem("isUserLoggedIn", true);
        var element = document.getElementById("loginMessage");
        var loggedInUserElemnt = document.getElementById("loggedInMessage");
        var logoutelement = document.getElementById("logout");
        element.style.visibility = "hidden";
        loggedInUserElemnt.style.visibility = "visible";
        logoutelement.style.visibility = "visible";
        window.location.href = "flavours.html";
    }
    else{
        alert("Username/password entered is wrong");
    }

}

function logout(){
  var confirmLogout = confirm("Are you sure you want to Logout?");
  if (confirmLogout == true) {
    localStorage.setItem("isUserLoggedIn", false);
    var element = document.getElementById("loginMessage");
    var loggedInUserElemnt = document.getElementById("loggedInMessage");
    var logoutelement = document.getElementById("logout");
    element.style.visibility = "visible";
    loggedInUserElemnt.style.visibility = "hidden";
    logoutelement.style.visibility = "hidden";
    window.location.href="flavours.html";
}
}

function register() {
    var firstName = document.getElementById("rfname").value;
    var lastName = document.getElementById("rlname").value;
    var userName = document.getElementById("runame").value;
    var password = document.getElementById("rpassword").value;
    var confirmPassword = document.getElementById("rcpassword").value;

    if(localStorage.getItem(userName)){
        alert("Usrname is already registered");
        return;
    }
    if(firstName == "" || lastName == "" || userName == "" || password == "" || confirmPassword == ""){
        return;
    }
    else if(password != confirmPassword){
        alert("Your passwords do not match");
    }else{
        localStorage.setItem(userName, password);
        window.location.href = "flavours.html";
    }

}

function showHideMenu() {
    if (document.getElementById("menuCloseIcon").src.indexOf("resources/menu.png") != -1) {
        document.getElementById("menuContainer").style.transform = "translatex(100%)";
        document.getElementById("menuContainer").style.transition = "transform 1s";
        document.getElementById("menuCloseIcon").src = "resources/close.png";
        document.getElementById("menuCloseIcon").style.width = "50px";
        document.getElementById("menuCloseIcon").style.height = "50px";
    } else if (document.getElementById("menuCloseIcon").src.indexOf("resources/close.png") != -1) {
        document.getElementById("menuContainer").style.transform = "translatex(-100%)";
        document.getElementById("menuContainer").style.transition = "transform 1s";
        document.getElementById("menuCloseIcon").src = "resources/menu.png"
        document.getElementById("menuCloseIcon").style.width = "30px";
        document.getElementById("menuCloseIcon").style.height = "30px";
    }
}

function goToLoginScreen() {

    var audio_element = getButtonAudioElement();
    audio_element.addEventListener("ended", function() {
        window.location.href = "login.html";
    });
    playAudio(audio_element);
}

function goToHomePage() {
    window.location.href = "flavours.html";
}

function goToContactPage() {
    window.location.href = "contact.html";
}

function showHideCollapsible() {
    var content = document.getElementById("contentCollapsible");
    if (content.style.display === "block") {
        content.style.display = "none";
        document.getElementById("arrow").style.transform = "rotate(0deg)"
    } else {
        content.style.display = "block";
        document.getElementById("arrow").style.transform = "rotate(270deg)"
    }

}

function goToAboutUs() {
    window.location.href = "aboutus.html";
}

function showProducts() {
    window.location.href = "quickview.html";
}

function initQuickView() {
    initializeCalls();
    var init = function() {
        popup();
    };


    var popup = function() {
        $('.btn-view').on('click', function() {
            $('#quick-view-pop-up').fadeToggle();
            $('#quick-view-pop-up').css({
                "top": "28%",
                "left": "314px"
            });
            $('.mask').fadeToggle();
        });
        $('.mask').on('click', function() {
            $('.mask').fadeOut();
            $('#quick-view-pop-up').fadeOut();
        });
        $('.quick-view-close').on('click', function() {
            $('.mask').fadeOut();
            $('#quick-view-pop-up').fadeOut();
        });
        $('.add-to-bag').on('click', function() {
            $('.mask').fadeOut();
            $('#quick-view-pop-up').fadeOut();
        });
        $('.save-for-later').on('click', function() {
            $('.mask').fadeOut();
            $('#quick-view-pop-up').fadeOut();
        });
    };
    init();
}