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
