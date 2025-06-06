document.querySelector('.resultado').addEventListener('click', function() {
  const nome = document.getElementById('heroName').value;
  const xp = parseInt(document.getElementById('heroXp').value, 10);

  let nivel = '';

  if (xp < 1000) nivel = 'Ferro';
  else if (xp <= 2000) nivel = 'Bronze';
  else if (xp <= 5000) nivel = 'Prata';
  else if (xp <= 7000) nivel = 'Ouro';
  else if (xp <= 8000) nivel = 'Platina';
  else if (xp <= 9000) nivel = 'Ascendente';
  else if (xp <= 10000) nivel = 'Imortal';
  else nivel = 'Radiante';

  document.getElementById('resultado').textContent = `O Herói ${nome} está no nível ${nivel}`;
});
