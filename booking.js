document.addEventListener('DOMContentLoaded', () => {
    // Inject theme toggle button
    const nav = document.querySelector('.navbar');
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle';
    themeBtn.textContent = '🌙';
    nav.appendChild(themeBtn);
  
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      themeBtn.textContent = document.body.classList.contains('dark-theme')
        ? '☀️'
        : '🌙';
    });
  
    // Form submission handling
    const form = document.getElementById('bookingForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {
        from: form.from.value.trim(),
        to: form.to.value.trim(),
        date: form.date.value,
        bus: form.bus.value,
        seats: form.seats.value
      };
  
      // Basic validation
      if (!data.from || !data.to || !data.date || !data.bus || !data.seats) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Success feedback (could be replaced with real booking logic)
      alert(
        `Ticket booked!\n\nFrom: ${data.from}\nTo: ${data.to}\nDate: ${data.date}\nBus: ${data.bus}\nSeats: ${data.seats}`
      );
      form.reset();
    });
  });
  