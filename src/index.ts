import '../css/index.css';

const buttonAccept = document.getElementById('btn-accept');
const buttonDecline = document.getElementById('btn-decline');

buttonAccept?.addEventListener('click', () => {
  console.log('confirmed');
});

buttonDecline?.addEventListener('click', () => {
  console.log('declined');
});
