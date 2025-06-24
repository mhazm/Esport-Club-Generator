document.addEventListener('DOMContentLoaded', function() {
  // Set bahasa dari localStorage atau default ke 'en'
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
  changeLanguage(savedLanguage);
  
  // Event listener untuk dropdown bahasa
  document.getElementById('language-selector').addEventListener('change', function() {
    changeLanguage(this.value);
  });
});