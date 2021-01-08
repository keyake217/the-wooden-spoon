// run multiple funcs when the page loads
window.onload = function (event) {
  // schedule(showAnnouncement, '01-08-2021','01-09-2021', 'Test announcement message 2');
  hideSpecials();
}

function hide(elementById) {
    var element = document.getElementById(elementById);
    element.style.display = "none";
}

function show(elementById) {
    var element = document.getElementById(elementById);
    element.style.display = "block";
}

function showAnnouncement(message) {
    element = document.getElementById('announcement-message');
    element.innerHTML = message
    show('announcement');
}

// func: function that we want to run during specific dates
// dateFrom: YYYY-MM-DD formatted string
// dateTo: YYYY-MM-DD formatted string
// ...args: to pass arbitrary number of arguments to func
function schedule(func, dateFromStr, dateToStr, ...args) {
  let currDate = new Date();
  let dateFrom = new Date(dateFromStr);
  let dateTo = new Date(dateToStr);

  if (currDate >= dateFrom && currDate <= dateTo) {
    func(...args);
  }
}

function hideSpecials() {
  hide('specials-tab');
  hide('specials');

  breakfast_tab = document.getElementById('breakfast-tab');
  breakfast = document.getElementById('breakfast');

  // selects the breakfast tab, making it appear white
  breakfast_tab.classList.add('active');

  // displays the breakfast menu
  breakfast.className = 'tab-pane fade in active';
}
