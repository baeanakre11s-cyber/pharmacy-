document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let pharmacyName = document.getElementById('pharmacyName').value;
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  // نحفظ البيانات بالمتصفح
  localStorage.setItem('pharmacyName', pharmacyName);
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  localStorage.setItem('isLoggedIn', 'true');

  // نحول على صفحة النظام
  window.location.href = 'dashboard.html';
});

// اذا مسجل دخول من قبل يدخل مباشرة
window.onload = function() {
  if(localStorage.getItem('isLoggedIn') === 'true'){
    window.location.href = 'dashboard.html';
  }
}
