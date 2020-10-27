function hide(elementById) {
    var element = document.getElementById(elementById);
    element.style.display = "none";
}

// Wait until window is loaded to hide specials.
// Otherwise these elements can't be found.
window.onload = function hideSpecials() {
  hide('specials-tab');
  hide('specials');

  breakfast_tab = document.getElementById('breakfast-tab');
  breakfast = document.getElementById('breakfast');

  // selects the breakfast tab, making it appear white
  breakfast_tab.classList.add('active');

  // displays the breakfast menu
  breakfast.className = 'tab-pane fade in active';
}
