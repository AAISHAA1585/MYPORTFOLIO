
// Simple JS for menu toggle and form handling
document.getElementById('menuToggle')?.addEventListener('click', ()=>{
  const nav = document.querySelector('.nav');
  if(nav.style.display === 'flex') nav.style.display = 'none';
  else nav.style.display = 'flex';
});

function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  alert('Thanks, ' + name + '! Your message has been noted. (This demo does not send emails.)');
  document.getElementById('contactForm').reset();
}
