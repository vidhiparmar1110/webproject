// script.js
// Handles quick search form submission
const searchForm = document.querySelector('.search-box');
searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const from = this.querySelector('input[placeholder="From"]').value.trim();
  const to = this.querySelector('input[placeholder="To"]').value.trim();
  const date = this.querySelector('input[type="date"]').value;
  if (!from || !to || !date) {
    alert('Please fill in all fields.');
    return;
  }
  // Redirect to schedule page with query parameters
  const params = new URLSearchParams({ from, to, date });
  window.location.href = `schedule.html?${params.toString()}`;
});


// // script.js
// // Handles quick search form submission
// const searchForm = document.querySelector('.search-box');
// searchForm.addEventListener('submit', function(e) {
//   e.preventDefault();
//   const from = this.querySelector('input[placeholder="From"]').value.trim();
//   const to = this.querySelector('input[placeholder="To"]').value.trim();
//   const date = this.querySelector('input[type="date"]').value;
//   if (!from || !to || !date) {
//     alert('Please fill in all fields.');
//     return;
//   }
//   // Redirect to schedule page with query parameters
//   const params = new URLSearchParams({ from, to, date });
//   window.location.href = `schedule.html?${params.toString()}`;
// });
