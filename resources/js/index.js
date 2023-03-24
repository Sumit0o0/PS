$(document).ready(function () {
  $("#offcanvasWithBothOptions").on("shown.bs.offcanvas", function () {
    $(".humburger-icon").addClass("change");
  });

  $("#offcanvasWithBothOptions").on("hidden.bs.offcanvas", function () {
    $(".humburger-icon").removeClass("change");
  });


  var projects = $(".projects");

  var touchTime = 0;
  var delay = 200; // set the delay time for double click in milliseconds

  projects.on("click", function (event) {
    var link = $(this).find("a");
    if (link.length) {
      // prevent default link behavior on single-click
      event.preventDefault();
      // add hover effect
      $(this).addClass("touchscreen");
      // set a timeout to allow for double-click action
      setTimeout(function () {
        $(this).removeClass("touchscreen");
      }, delay);
    } else {
      // no child link element - do nothing
    }
  });

  projects.on("dblclick", function (event) {
    event.preventDefault(); // prevent the default behavior of double-clicking (e.g. selecting text)
    var link = $(this).find("a");
    if (link.length) {
      // redirect to project link
      window.location.href = link.attr("href");
    } else {
      // no child link element - do nothing
    }
  });
});

const homebtn = document.getElementById("home");
const aboutMebtn = document.getElementById("aboutMe");
const resumebtn = document.getElementById("resume");
const contactMEbtn = document.getElementById("contactME");
const firstformsec = document.querySelector(".firstformsec");
let inputs = firstformsec.querySelectorAll("input");
let labels = firstformsec.querySelectorAll("label");
const lastformsec = document.querySelector(".lastformsec");
let textArea = lastformsec.querySelectorAll("textarea")[0];
let textAreaLabel = lastformsec.querySelectorAll("label")[0];

for (let i = 0; i < labels.length; i++) {
  textmoveup(i);
}

function textmoveup(no) {
  inputs[no].addEventListener("focusin", function (i) {
    labels[no].classList.add("moveup");
  });
}

textArea.addEventListener("focusin", function () {
  textAreaLabel.classList.add("moveup");
});

/******************************************************************************/
let projects = document.querySelectorAll(".projects");
let projectsLabels = document.querySelectorAll(".projectsLabel");
let showcodelinks = document.querySelectorAll(".showcodelink");

for (let i = 0; i < labels.length; i++) {
  projectmousefun(i);
}

function projectmousefun(no) {
  projects[no].addEventListener("mouseover", () => {
    projectsLabels[no].style.opacity = "1";
    projectsLabels[no].style.transition = "opacity 1s";
    showcodelinks[no].style.opacity = "1";
    showcodelinks[no].style.transition = "opacity 1s";
  });

  projects[no].addEventListener("mouseout", () => {
    projectsLabels[no].style.opacity = "0";
    projectsLabels[no].style.transition = "opacity 1s";
    showcodelinks[no].style.opacity = "0";
    showcodelinks[no].style.transition = "opacity 1s";
  });
}

/******************************Contact Form validation*************************/

const contactform = document.getElementById("contactform");
const fullname = document.getElementById("fullname");
const mail = document.getElementById("mail");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
let errorspan = document.querySelectorAll("#contactform span");
const formfeedback = document.querySelector(".formfeedback");

contactform.addEventListener("submit", function (event) {
  // your code here
  formvalidation();
  if (formvalidation() == true) {
    setTimeout(() => {
      formfeedback.classList.add("feedbackvisible");
      setTimeout(()=>{
        formfeedback.classList.remove("feedbackvisible");
        contactform.querySelector("button").classList.remove('submitaction');
      },2000);
    }, 400);
  } else {
    formfeedback.classList.remove("feedbackvisible");
  }
  event.preventDefault();
});

function formvalidation() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (fullname.value == "") {
    errorspan[0].classList.add("errdisplay");
    return false;
  } else {
    errorspan[0].classList.remove("errdisplay");
  }

  if (mail.value == "") {
    errorspan[1].classList.add("errdisplay");
    return false;
  } else {
    errorspan[1].classList.remove("errdisplay");
  }

  if (mail.value.match(mailformat)) {
    errorspan[1].classList.remove("errdisplay");
    errorspan[1].innerText = "Email is Not Vaild";
  } else {
    errorspan[1].classList.add("errdisplay");
    errorspan[1].innerText = "@ and .com is missing";
    return false;
  }

  if (subject.value == "") {
    errorspan[2].classList.add("errdisplay");
    return false;
  } else {
    errorspan[2].classList.remove("errdisplay");
  }

  if (textArea.value == "") {
    errorspan[3].classList.add("errdisplay");
    return false;
  } else {
    errorspan[3].classList.remove("errdisplay");
  }

  contactform.querySelector("button").classList.add('submitaction');
    
  return true;
}

$(document).ready(function () {
  // show the home div by default
  $("#div1").addClass("active");

  // detect when a link is clicked
  $(".menu-links").click(function () {
    // get the id of the div to show
    var id = $(this).attr("href");

    // hide the currently visible div and show the new one with animation
    $(".sidepage.active").fadeOut(500, function () {
      $(this).removeClass("active");
      $(id).fadeIn(500, function () {
        $(this).addClass("active");
      });
    });

    // prevent the link from being followed
    return false;
  });

  //TYPING EFECT
  var typed = new Typed("#typed-strings", {
    /**
     * @property {array} strings strings to be typed
     * @property {string} stringsElement ID of element containing string children
     */
    strings: ["Sumit Kumar", "Web Developer","Sumit Kumar", "Web Developer"],
    stringsElement: null,

    /**
     * @property {number} typeSpeed type speed in milliseconds
     */
    typeSpeed: 100,

    /**
     * @property {number} startDelay time before typing starts in milliseconds
     */
    startDelay: 170,

    /**
     * @property {number} backSpeed backspacing speed in milliseconds
     */
    backSpeed: 150,

    /**
     * @property {boolean} smartBackspace only backspace what doesn't match the previous string
     */
    smartBackspace: false,

    /**
     * @property {boolean} shuffle shuffle the strings
     */
    shuffle: false,

    /**
     * @property {number} backDelay time before backspacing in milliseconds
     */
    backDelay: 150,

    /**
     * @property {boolean} fadeOut Fade out instead of backspace
     * @property {string} fadeOutClass css class for fade animation
     * @property {boolean} fadeOutDelay Fade out delay in milliseconds
     */
    fadeOut: false,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 400,

    /**
     * @property {boolean} loop loop strings
     * @property {number} loopCount amount of loops
     */
    loop: true,
    loopCount: Infinity,

    /**
     * @property {boolean} showCursor show cursor
     * @property {string} cursorChar character for cursor
     * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
     */
    showCursor: false,
    cursorChar: "|",
    autoInsertCss: true,

    /**
     * @property {string} attr attribute for typing
     * Ex: input placeholder, value, or just HTML text
     */
    attr: null,

    /**
     * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
     */
    bindInputFocusEvents: false,

    /**
     * @property {string} contentType 'html' or 'null' for plaintext
     */
    contentType: "html",
  });
});


// Get the canvas node and the drawing context
const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

// set the width and height of the canvas
const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;

// draw a black rectangle of width and height same as that of the canvas
ctx.fillStyle = '#fff';
ctx.fillRect(0, 0, w, h);

const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

function matrix () {
  // Draw a semitransparent black rectangle on top of previous drawing
  ctx.fillStyle = '#fff1';
  ctx.fillRect(0, 0, w, h);

  // Set color to green and font to 15pt monospace in the drawing context
  ctx.fillStyle = '#b3ffb3';
  ctx.font = '15pt monospace';

  // for each column put a random character at the end
  ypos.forEach((y, ind) => {
    // generate a random character
    const text = String.fromCharCode(Math.random() * 128);

    // x coordinate of the column, y coordinate is already given
    const x = ind * 20;
    // render the character at (x, y)
    ctx.fillText(text, x, y);

    // randomly reset the end of the column if it's at least 100px high
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    // otherwise just move the y coordinate for the column 20px down,
    else ypos[ind] = y + 20;
  });
}

// render the animation at 20 FPS.
setInterval(matrix, 50);


  