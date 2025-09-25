function showAnimation() {
  const btn = document.getElementById('loginBtn');
  const btnText = btn.querySelector('.btn-text');
  const btnSpinner = btn.querySelector('.btn-spinner');
  const btnCheck = btn.querySelector('.btn-check');

  const clickSound = document.getElementById('clickSound');
  const dingSound = document.getElementById('dingSound');

  if (clickSound) clickSound.play();
  btn.disabled = true;

  btnText.textContent = 'Жүктелуде...';
  btnSpinner.style.display = 'inline-block';
  btn.classList.add('loading');

  setTimeout(() => {
    btnSpinner.style.display = 'none';
    btnCheck.style.display = 'inline-block';
    btnText.textContent = 'Қош келдіңіз!';
    if (dingSound) dingSound.play();
  }, 1500);

  setTimeout(() => {
    window.location.href = 'платформа/index.html';
  }, 2500);
}
