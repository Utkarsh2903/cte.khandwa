function loadHeader() {
  fetch('/components/header.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('header-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading header:', error));
}

document.addEventListener("DOMContentLoaded", loadHeader);
