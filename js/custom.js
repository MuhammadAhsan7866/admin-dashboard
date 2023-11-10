(function ($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function () {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };

    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function (e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict


// Ahsan Js Start

// script.js
$(document).ready(function () {
  // Initial screen (screen1) is shown
  $('#screen1').show();

  // Button click event to switch to screen2
  $('#switchButton').click(function () {
    $('#screen1').hide();
    $('#screen2').show();
  });
  $('#switchButton2').click(function () {
    $('#screen1').hide();
    $('#demo').show();
  });
  $('#switchButton3').click(function () {
    $('#screen1').hide();
    $('#screen2').hide();
    $('#KYC').hide();
    $('#trading').show();
  });
  $('#switchButton4').click(function () {
    $('#screen1').hide();
    $('#trading').hide();
    $('#KYC').hide();
    $('#withdraw').hide();
    $('#Deposits').show();
  });
  $('#switchButton5').click(function () {
    $('#screen1').hide();
    $('#Deposits').hide();
    $('#KYC').hide();
    $('#withdraw').show();
  });
  $('#switchButton7').click(function () {
    $('#screen2').hide();
    $('#screen1').hide();
    $('#trading').hide();
    $('#Deposits').hide();
    $('#withdraw').hide();
    $('#Analysis').hide();
    $('#KYC').show();

  });
  $('#switchButton8').click(function () {
    $('#screen2').hide();
    $('#screen1').hide();
    $('#trading').hide();
    $('#Deposits').hide();
    $('#withdraw').hide();
    $('#KYC').hide();
    $('#Analysis').show();

  });
  $('#switchButton55').click(function () {
    $('#screen2').hide();
    $('#screen1').hide();
    $('#trading').hide();
    $('#Deposits').hide();
    $('#withdraw').hide();
    $('#KYC').hide();
    $('#Live_Memmbers').hide();
    $('#all_users').hide();
    $('#depohis').hide();
    $('#Blance').show();

  });
  $('#switchButton56').click(function () {
    $('#screen2').hide();
    $('#screen1').hide();
    $('#trading').hide();
    $('#Deposits').hide();
    $('#withdraw').hide();
    $('#KYC').hide();
   
    $('#all_users').hide();
    $('#Live_Memmbers').hide();
    $('#Blance').hide();
    $('#Subtract').show();
    

  });
  $('#switchButton57').click(function () {
    $('#screen2').hide();
    $('#screen1').hide();
    $('#trading').hide();
    $('#Deposits').hide();
    $('#withdraw').hide();
    $('#KYC').hide();
    $('#Blance').hide();
    $('#Subtract').hide();
    $('#all_users').hide();
    $('#Demo_Memmbers').hide();
    $('#Live_Memmbers').show();

  });
  $('#switchButton58').click(function () {
    $('#screen2').hide();
    $('#screen1').hide();
    $('#trading').hide();
    $('#Deposits').hide();
    $('#withdraw').hide();
    $('#KYC').hide();
    $('#Blance').hide();
    $('#Subtract').hide();
    $('#Live_Memmbers').hide();
    $('#all_users').hide();
    $('#Demo_Memmbers').show();

  });
  $('#switchButton60').click(function () {
    $('#screen2').hide();
    $('#screen1').hide();
    $('#trading').hide();
    $('#Deposits').hide();
    $('#withdraw').hide();
    $('#KYC').hide();
    $('#Blance').hide();
    $('#Subtract').hide();
    $('#Live_Memmbers').hide();
    $('#Demo_Memmbers').hide();
    $('#all_users').show();

  });
  $('#switchButton77').click(function () {
    $('#screen2').hide();
    $('#screen1').hide();
    $('#trading').hide();
    $('#Deposits').hide();
    $('#withdraw').hide();
    $('#KYC').hide();
    $('#Blance').hide();
    $('#Subtract').hide();
    $('#Live_Memmbers').hide();
    $('#Demo_Memmbers').hide();
    $('#all_users').hide();
    $('#depohis').show();

  });
  $('#switchButton78').click(function () {
    $('#screen2').hide();
    $('#screen1').hide();
    $('#trading').hide();
    $('#Deposits').hide();
    $('#withdraw').hide();
    $('#KYC').hide();
    $('#Blance').hide();
    $('#Subtract').hide();
    $('#Live_Memmbers').hide();
    $('#Demo_Memmbers').hide();
    $('#all_users').hide();
    $('#depohis').hide();
    $('#widhis').show();

  });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function startLoading() {
  const button = document.getElementById('loading-button');
  const spinner = document.createElement('div');
  spinner.id = 'loading-spinner';
  button.classList.add('loading');
  button.innerHTML = 'Loading...';
  button.appendChild(spinner);

  // Simulate a delay (you can replace this with your actual loading logic)
  setTimeout(() => {
    // Remove the loading state
    button.classList.remove('loading');
    button.innerHTML = 'Get Now';
    spinner.remove();
  }, 3000); // Simulated 3-second loading time
}

// Wait for the document to be ready
$(document).ready(function () {
  // When the checkbox is clicked
  $("#myCheckbox").on("change", function () {
    // Check if the checkbox is checked
    if ($(this).is(":checked")) {
      // Enable the button
      $("#loading-button").prop("disabled", false);
      $("#loading-button").css({
        "background-color": "#198754",
        "color": "#fff",
        "cursor": "pointer"
      });
    } else {
      // Disable the button
      $("#loading-button").prop("disabled", true);
      $("#loading-button").css({
        "background-color": "#ccc",
        "color": "#666",
        "cursor": "not-allowed"
      });
    }
  });
});


// KYC Js

var isAdvancedUpload = function () {
  var div = document.createElement('div');
  return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
}();

let draggableFileArea = document.querySelector(".drag-file-area");
let browseFileText = document.querySelector(".browse-files");
let uploadIcon = document.querySelector(".upload-icon");
let dragDropText = document.querySelector(".dynamic-message");
let fileInput = document.querySelector(".default-file-input");
let cannotUploadMessage = document.querySelector(".cannot-upload-message");
let cancelAlertButton = document.querySelector(".cancel-alert-button");
let uploadedFile = document.querySelector(".file-block");
let fileName = document.querySelector(".file-name");
let fileSize = document.querySelector(".file-size");
let progressBar = document.querySelector(".progress-bar");
let removeFileButton = document.querySelector(".remove-file-icon");
let uploadButton = document.querySelector(".upload-button");
let fileFlag = 0;

fileInput.addEventListener("click", () => {
  fileInput.value = '';
  console.log(fileInput.value);
});

fileInput.addEventListener("change", e => {
  console.log(" > " + fileInput.value)
  uploadIcon.innerHTML = 'File Attched ';
  dragDropText.innerHTML = 'File Dropped Successfully!';
  document.querySelector(".label").innerHTML = ``;
  uploadButton.innerHTML = `Upload`;
  fileName.innerHTML = fileInput.files[0].name;
  fileSize.innerHTML = (fileInput.files[0].size / 1024).toFixed(1) + " KB";
  uploadedFile.style.cssText = "display: flex;";
  progressBar.style.width = 0;
  fileFlag = 0;
});

uploadButton.addEventListener("click", () => {
  let isFileUploaded = fileInput.value;
  if (isFileUploaded != '') {
    if (fileFlag == 0) {
      fileFlag = 1;
      var width = 0;
      var id = setInterval(frame, 50);

      function frame() {
        if (width >= 390) {
          clearInterval(id);
          uploadButton.innerHTML = `<span class="material-icons-outlined upload-button-icon"> file </span> Uploaded`;
        } else {
          width += 5;
          progressBar.style.width = width + "px";
        }
      }
    }
  } else {
    cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
  }
});

cancelAlertButton.addEventListener("click", () => {
  cannotUploadMessage.style.cssText = "display: none;";
});

if (isAdvancedUpload) {
  ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach(evt =>
    draggableFileArea.addEventListener(evt, e => {
      e.preventDefault();
      e.stopPropagation();
    })
  );

  ["dragover", "dragenter"].forEach(evt => {
    draggableFileArea.addEventListener(evt, e => {
      e.preventDefault();
      e.stopPropagation();
      uploadIcon.innerHTML = 'file_download';
      dragDropText.innerHTML = 'Drop your file here!';
    });
  });

  draggableFileArea.addEventListener("drop", e => {
    uploadIcon.innerHTML = 'check_circle';
    dragDropText.innerHTML = 'File Dropped Successfully!';
    document.querySelector(".label").innerHTML = ` <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: -23px; left: -20px;"> browse file</span> </span>`;
    uploadButton.innerHTML = `Upload`;

    let files = e.dataTransfer.files;
    fileInput.files = files;
    console.log(files[0].name + " " + files[0].size);
    console.log(document.querySelector(".default-file-input").value);
    fileName.innerHTML = files[0].name;
    fileSize.innerHTML = (files[0].size / 1024).toFixed(1) + " KB";
    uploadedFile.style.cssText = "display: flex;";
    progressBar.style.width = 0;
    fileFlag = 0;
  });
}

removeFileButton.addEventListener("click", () => {
  uploadedFile.style.cssText = "display: none;";
  fileInput.value = '';
  uploadIcon.innerHTML = 'file_upload';
  dragDropText.innerHTML = 'Drag & drop any file here';
  document.querySelector(".label").innerHTML = `or <span class="browse-files"> <input type="file" class="default-file-input"/> <span class="browse-files-text">browse file</span> <span>from device</span> </span>`;
  uploadButton.innerHTML = `Upload`;
});

// MArgin Calculate

function calculateProfitLossPips(closePrice, openPrice, buySell) {
  "use strict";
  console.log(buySell);
  var profitLossPips;
  // Check order type
  if (buySell === "Buy") {
    // Calculate pips value
    profitLossPips = (closePrice - openPrice) / 0.0001;

  } else if (buySell === "Sell") {
    // Calculate pips value
    profitLossPips = (openPrice - closePrice) / 0.0001;
  }
  // Check answer
  console.log(profitLossPips);
  var result = profitLossPips.toFixed(4);
  return result;
}

function calculateProfitLossCcy(closePrice, openPrice, quote, lotSize, buySell) {
  "use strict";
  var profitLossCcy;
  // Check order type
  if (buySell === "Buy") {
    // Calculate currency value
    profitLossCcy = (closePrice - openPrice) * (quote) * (lotSize * 100000);
  } else if (buySell === "Sell") {
    // Calculate currency value
    profitLossCcy = (openPrice - closePrice) * (quote) * (lotSize * 100000);
  }
  // Check answer
  console.log(profitLossCcy);
  //Send to round
  var result = profitLossCcy.toFixed(2);
  return result;
}



function profitLoss(event) {
  "use strict";
  // Stop page reload
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
  // Get values from boxes
  var closePrice = document.getElementById("closing-price").value,
    openPrice = document.getElementById("opening-price").value,
    quote = document.getElementById("quote").value,
    lotSize = document.getElementById("lot-size").value,
    buySell = document.getElementById("buy-sell").value,
    resultPips,
    resultCcy,
    resultPipsTest,
    resultCcyTest;


  console.log(quote);

  // Send values to calculation functions
  resultPips = calculateProfitLossPips(closePrice, openPrice, buySell),
    resultCcy = calculateProfitLossCcy(closePrice, openPrice, quote, lotSize, buySell),

    resultPipsTest = isNaN(resultPips);
  resultCcyTest = isNaN(resultCcy);

  // Set results to 0 if input is invalid, if not, calculate!
  if (resultPipsTest == true && resultCcyTest == true) {
    document.getElementById("profit-loss-pips").value = 0;
    document.getElementById("profit-loss-acc-ccy").value = 0;
  } else if (resultPipsTest == false && resultCcyTest == true) {
    document.getElementById("profit-loss-pips").value = resultPips;
    document.getElementById("profit-loss-acc-ccy").value = 0;
  } else if (resultPipsTest == true && resultCcyTest == false) {
    document.getElementById("profit-loss-pips").value = 0;
    document.getElementById("profit-loss-acc-ccy").value = resultCcy;
  } else {
    document.getElementById("profit-loss-pips").value = resultPips;
    document.getElementById("profit-loss-acc-ccy").value = resultCcy;
  }

}

// This is where the feed would sit.

$(document).ready(function () {

  // Change currency symbol when the account currency changes
  $(".calculator--pl #acct-ccy").change(function () {
    var currencySymbol,
      currency = $(this).val();

    console.log(currency);

    $(".calculator--pl #profit-loss-acc-ccy").removeAttr("style");

    switch (currency) {
      case "USD":
        currencySymbol = "$";
        break;
      case "EUR":
        currencySymbol = "€";
        break;
      case "GBP":
        currencySymbol = "£";
        break;
      case "CHF":
        currencySymbol = "Fr.";
        $(".calculator--pl #profit-loss-acc-ccy").width("75px");
        break;
      case "AUD":
        currencySymbol = "$";
        break;
    }

    console.log(currencySymbol);

    $(".calculator--pl .currencySymbol").text(currencySymbol);

  });

  //Restrict opening and closing fields to 3 decimal places if the quote currency is JPY
  $("#closing-price, #opening-price").bind("keyup change", function () {

    var value = $(this).val();
    var numericRegThree = /^\d+\.?\d?\d?\d?$/; //Regex for 3 dp
    var numericRegFour = /^\d+\.?\d?\d?\d?\d?$/; //Regex for 4 dp
    var numericRegFive = /^\d+\.?\d?\d?\d?\d?\d?$/; //Regex for 5 dp

    var currencyPair = $("#currency-pair").val();
    var quoteCurrency = currencyPair.substring(3, 6); //get quote currency

    if ((currencyPair == "HKDJPY") && (!numericRegFour.test(value))) {
      value = value.replace(/^(\d+\.?\d?\d?\d?\d?)?.*/, '$1');
      $(this).val(value);
    } else if ((quoteCurrency == "JPY") && (!numericRegThree.test(value)) && (currencyPair !== "HKDJPY")) {
      value = value.replace(/^(\d+\.?\d?\d?\d?)?.*/, '$1');
      $(this).val(value);
    } else if ((quoteCurrency !== "JPY") && (currencyPair !== "HKDJPY") && (!numericRegFive.test(value))) {
      value = value.replace(/^(\d+\.?\d?\d?\d?\d?\d?)?.*/, '$1');
      $(this).val(value);
    }


  });

});


// Trasfer Amount js 


function showLoading(event, button) {
  event.preventDefault(); // Prevent form submission

  button.innerHTML = "Processing Payment...";

  setTimeout(function() {
    button.innerHTML = "Payment Transfer.";
  }, 3000); // Change to the desired duration in milliseconds
}

function showLoadingsubs(event, button) {
  event.preventDefault(); // Prevent form submission

  button.innerHTML = "Processing Substract Payment...";

  setTimeout(function() {
    button.innerHTML = "Payment Substract.";
  }, 3000); // Change to the desired duration in milliseconds
}


// Tabs Discovery

// Documentation
$(".rgbss").on("click", function () {

  $(".rgbss").removeClass("active");
  
  $(this).addClass("active");
  
  });

