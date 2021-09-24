/*
chrome.tabs.executeScript(browser.tabs.getCurrent(), {
  code: 'document.body.getElementById("secondary").style.display="none"'
}, () => {
  console.log("done")
});



document.addEventListener('yt-navigate-finish', () => {
  console.log("style changed");
  document.getElementById("secondary").setAttribute('style', 'display:none !important');
  sessionStorage.setItem("reloadDone", "no");
  reloadOnce();
});

function reloadOnce() {
  if (sessionStorage.getItem("reloadDone") == "no") {
    sessionStorage.setItem("reloadDone", "yes");
    window.location.reload();
  }
}
*/



document.addEventListener('yt-navigate-start', () => {
  console.log("hello");
  document.getElementById("secondary").style.display = "none";
  if (!("reloadDone" in sessionStorage)) {
    sessionStorage.setItem("reloadDone", "no");
  }
  if (sessionStorage.getItem("reloadDone") == "no") {
    sessionStorage.setItem("reloadDone", "yes");
    window.location.reload();
  }

})


/*
var elem = document.getElementsByClassName("video-stream html5-main-video")[0];

if (elem != "null" && typeof (elem) != "undefined") {
  var para = document.createElement("P");
  para.class = randomElement;
  document.body.appendChild(para);
}
if (document.classList.contains("randomElement")) {
  elem.style.display = "none";
  para.remove();
  window.location.reload();
}
/*
/*


var elem = document.getElementsByClassName("video-stream html5-main-video")[0];

if (elem != "null" && typeof (elem) != "undefined") {
  elem.style.display = "none";
  window.location.reload();
}

/*
console.log("started");
setInterval(function () {
  console.log("go");

  if (!(getElementByClassname("video-stream html5-main-video").style.width == "hidden")) {
    console.log("workplz")
    document.getElementById("secondary").style.display = "none";
    if (!("reloadDone" in sessionStorage)) {
      console.log("storagecreated")
      sessionStorage.setItem("reloadDone", "no");
    }
    if (sessionStorage.getItem("reloadDone") == "no") {
      console.log("comeon")
      sessionStorage.setItem("reloadDone", "yes");
      window.location.reload();
    }
  }

}, 2000);


/*

var elem = document.getElementById("secondary");
if (JSON.stringify(elem) != "null") {
  elem.style.display = "none";
  window.location.reload();
}

/*
document.getElementById("secondary").style.display = "none";
counter = 0
if (counter)
{
  window.location.reload();
  counter++;
}
  */
//setTimeout(() => { document.getElementById("secondary").style.display = "none" });