const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('#myLinks');

// Dark Mode
let darkmode = document.querySelector('#darkmode');

// check if user preference is already saved in local storage
let isDarkMode = localStorage.getItem('isDarkMode');

// if user preference is saved, update the UI accordingly
if (isDarkMode) {
  if (isDarkMode === 'true') {
    darkmode.classList.replace('bx-moon','bx-sun');
    document.body.classList.add('active');
  } else {
    darkmode.classList.replace('bx-sun','bx-moon');
    document.body.classList.remove('active');
  }
}

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
        // save the user's preference in local storage
        localStorage.setItem('isDarkMode', 'true');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
        // save the user's preference in local storage
        localStorage.setItem('isDarkMode', 'false');
    }
}


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

$(document).ready(function() {
  $('#menu-icon').click(function() {
    $('#myLinks').toggleClass('active');
    $('#menu-icon').toggleClass('active');
  });

  $('#myLinks a').click(function() {
    $('#myLinks').removeClass('active');
    $('#menu-icon').removeClass('active');
  });
});

function closeMenu() {
  $('#myLinks').removeClass('active');
  $('#menu-icon').removeClass('active');
}

$(document).ready(function() {
  // Open the menu when the hamburger icon is clicked
  $("#menu-icon").click(function() {
    $("#myLinks").toggleClass("active");
    $("#menu-icon").toggleClass("active");
  });

  // Close the menu when a link is clicked
  $("#myLinks a").click(function() {
    $("#myLinks").removeClass("active");
    $("#menu-icon").removeClass("active");
  });

  // Close the menu when the user clicks outside of it
  $(document).click(function(event) {
    if (!$(event.target).closest("#menu-icon").length && !$(event.target).closest("#myLinks").length) {
      $("#myLinks").removeClass("active");
      $("#menu-icon").removeClass("active");
    }
  });
});


