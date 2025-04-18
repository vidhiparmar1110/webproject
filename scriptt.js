document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const nav = document.querySelector('.navbar');
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle';
    themeBtn.textContent = '🌙';
    nav.appendChild(themeBtn);
  
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      themeBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });
  
    // Slider
    const trackWrapper = document.querySelector('.cards-track-wrapper');
    const track = document.querySelector('.cards-track');
    const prev = document.querySelector('.slider-btn.prev');
    const next = document.querySelector('.slider-btn.next');
  
    // Amount to scroll per click = card width + gap
    const card = document.querySelector('.card');
    const gap = parseInt(getComputedStyle(track).gap);
    const scrollAmount = card.offsetWidth + gap;
  
    next.addEventListener('click', () => {
      trackWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    prev.addEventListener('click', () => {
      trackWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  });
  



// // script.js
// document.addEventListener('DOMContentLoaded', () => {
//     // Inject theme toggle into navbar
//     const nav = document.querySelector('.navbar');
//     const btn = document.createElement('button');
//     btn.className = 'theme-toggle';
//     btn.textContent = '🌙';
//     nav.appendChild(btn);
  
//     btn.addEventListener('click', () => {
//       document.body.classList.toggle('dark-theme');
//       btn.textContent = document.body.classList.contains('dark-theme')
//         ? '☀️'
//         : '🌙';
//     });
//   });
  





// document.addEventListener('DOMContentLoaded', () => {
//     // ─── Theme Toggle ─────────────────────────────────────────
//     const nav = document.querySelector('.navbar');
//     const btn = document.createElement('button');
//     btn.className = 'theme-toggle';
//     btn.textContent = '🌙';
//     nav.appendChild(btn);
  
//     btn.addEventListener('click', () => {
//       document.body.classList.toggle('dark-theme');
//       btn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
//     });
  
//     // ─── Schedule Slider ──────────────────────────────────────
//     if (window.location.pathname.endsWith('schedule.html')) {
//       const rows = Array.from(document.querySelectorAll('.schedule table tr'));
//       if (rows.length > 1) {
//         // Remove header
//         const header = rows.shift();
//         let idx = 0;
//         // Show only first data row
//         rows.forEach((r,i) => r.style.display = i === 0 ? 'table-row' : 'none');
  
//         // Create Prev/Next buttons
//         const prev = document.createElement('button');
//         const next = document.createElement('button');
//         prev.className = 'slider-btn prev';
//         prev.textContent = '‹';
//         next.className = 'slider-btn next';
//         next.textContent = '›';
  
//         const scheduleSection = document.querySelector('.schedule');
//         scheduleSection.append(prev, next);
  
//         prev.addEventListener('click', () => {
//           rows[idx].style.display = 'none';
//           idx = (idx - 1 + rows.length) % rows.length;
//           rows[idx].style.display = 'table-row';
//         });
//         next.addEventListener('click', () => {
//           rows[idx].style.display = 'none';
//           idx = (idx + 1) % rows.length;
//           rows[idx].style.display = 'table-row';
//         });
//       }
//     }
//   });
  




// // // script.js
// // // Quick search (from index.html)
// // const searchForm = document.querySelector('.search-box');
// // if (searchForm) {
// //   searchForm.addEventListener('submit', function(e) {
// //     e.preventDefault();
// //     const from = this.querySelector('input[placeholder="From"]').value.trim();
// //     const to = this.querySelector('input[placeholder="To"]').value.trim();
// //     const date = this.querySelector('input[type="date"]').value;
// //     if (!from || !to || !date) {
// //       alert('Please fill in all fields.');
// //       return;
// //     }
// //     const params = new URLSearchParams({ from, to, date });
// //     window.location.href = `schedule.html?${params.toString()}`;
// //   });
// // }

// // // Theme toggle
// // const themeBtn = document.createElement('button');
// // themeBtn.className = 'theme-toggle';
// // themeBtn.textContent = '🌙';
// // document.querySelector('.navbar').appendChild(themeBtn);
// // themeBtn.addEventListener('click', () => {
// //   document.body.classList.toggle('dark-theme');
// //   themeBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
// // });

// // // Schedule slider
// // if (window.location.pathname.endsWith('schedule.html')) {
// //   const rows = Array.from(document.querySelectorAll('.schedule table tr'));
// //   if (rows.length > 1) {
// //     const header = rows.shift();
// //     let current = 0;
// //     rows.forEach((row, i) => row.style.display = i === 0 ? 'table-row' : 'none');
// //     const prevBtn = document.createElement('button');
// //     prevBtn.className = 'slider-btn prev';
// //     prevBtn.textContent = '<';
// //     const nextBtn = document.createElement('button');
// //     nextBtn.className = 'slider-btn next';
// //     nextBtn.textContent = '>';
// //     document.querySelector('.schedule').append(prevBtn, nextBtn);
// //     prevBtn.addEventListener('click', () => {
// //       rows[current].style.display = 'none';
// //       current = (current - 1 + rows.length) % rows.length;
// //       rows[current].style.display = 'table-row';
// //     });
// //     nextBtn.addEventListener('click', () => {
// //       rows[current].style.display = 'none';
// //       current = (current + 1) % rows.length;
// //       rows[current].style.display = 'table-row';
// //     });
// //   }
// // }
