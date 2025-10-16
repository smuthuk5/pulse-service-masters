// small helper for year and simple form UX
document.getElementById('year')?.textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    // simple native behavior: let Formspree handle submit
    // optionally show a quick message (no AJAX here)
    const btn = form.querySelector('button[type="submit"]');
    if(btn){
      btn.disabled = true;
      btn.textContent = 'Sending...';
    }
    // after submission the page will reload / redirect depending on Formspree settings
    setTimeout(()=>{ if(btn){ btn.disabled=false; btn.textContent='Send Message' } }, 4000);
  });
}
