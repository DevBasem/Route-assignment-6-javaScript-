$("#navOpen").on("click", function (event) {
  event.stopPropagation();
  $("#Navbar").animate({ width: "show" });
  $(".navopen-btn").addClass("navopened");
});

$("#navClose").on("click", function () {
  $("#Navbar").animate({ width: "hide" });
  $(".navopen-btn").removeClass("navopened");
});

$(window).on("scroll", function () {
  $("#Navbar").animate({ width: "hide" });
  $(".navopen-btn").removeClass("navopened");
});

$(document).on("click", function (event) {
  let navbar = $("#Navbar");

  // Check if the clicked element is not inside the Navbar
  if (!navbar.is(event.target) && navbar.has(event.target).length === 0) {
    $("#Navbar").animate({ width: "hide" });
    $(".navopen-btn").removeClass("navopened");
  }
});

$("#Navbar .nav-links ul li a").on("click", function (event) {
  event.preventDefault();
  let targetSection = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(targetSection).offset().top,
    },
    1000
  ); // Adjust the duration as needed
});

$("#Accordion .accordion-wrapper .sector button").on("click", function () {
  let contentDiv = $(this).next("div");

  // Check if the content div is currently visible
  if (contentDiv.is(":visible")) {
    $("#Accordion .accordion-wrapper .sector:last-child button:first-child").css({
      "border-bottom-right-radius": "0.4rem",
      "border-bottom-left-radius": "0.4rem",
    });
    // If visible, slide up
    contentDiv.slideUp();
  } else {
    $("#Accordion .accordion-wrapper .sector:last-child button:first-child").css({
      "border-bottom-right-radius": "0rem",
      "border-bottom-left-radius": "0rem",
    });
    // If not visible, slide down
    $("#Accordion .accordion-wrapper .sector .content").slideUp();
    contentDiv.slideDown();
  }
});

$("#Accordion .accordion-wrapper .sector:last-child button:first-child").on("click", function () {});

$(document).ready(function () {
  let targetDate = new Date("March 1, 2024 00:00:00").getTime();

  let countdownInterval = setInterval(function () {
    let currentDate = new Date().getTime();
    let timeDifference = targetDate - currentDate;

    let days = Math.max(0, Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
    let hours = Math.max(0, Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    let minutes = Math.max(0, Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
    let seconds = Math.max(0, Math.floor((timeDifference % (1000 * 60)) / 1000));

    // If the countdown has expired
    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      $("#Counter .overlay .counter-wrapper .days").html(`0 days`);
      $("#Counter .overlay .counter-wrapper .hours").html(`0 hours`);
      $("#Counter .overlay .counter-wrapper .minutes").html(`0 minutes`);
      $("#Counter .overlay .counter-wrapper .seconds").html(`0 seconds`);
    } else {
      $("#Counter .overlay .counter-wrapper .days").html(`${days} days`);
      $("#Counter .overlay .counter-wrapper .hours").html(`${hours} hours`);
      $("#Counter .overlay .counter-wrapper .minutes").html(`${minutes} minutes`);
      $("#Counter .overlay .counter-wrapper .seconds").html(`${seconds} seconds`);
    }
  }, 1000); // Update every second
});

$(document).ready(function () {
  let maxChars = $("#myTextarea").attr("maxlength");
  let charCountElement = $("#charCount");

  charCountElement.text("Remaining characters: " + maxChars);

  $("#myTextarea").on("input", function () {
    let currentChars = $(this).val().length;
    let remainingChars = maxChars - currentChars;

    charCountElement.text("Remaining characters: " + remainingChars);

    // If you want to prevent entering more characters beyond the limit
    if (remainingChars < 0) {
      $(this).val($(this).val().slice(0, maxChars));
      charCountElement.text("Remaining characters: 0");
    }

    if (remainingChars <= (maxChars * 10) / 100) {
      charCountElement.css("color", "red");
    } else {
      charCountElement.css("color", "green");
    }
  });
});