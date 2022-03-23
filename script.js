const text = document.querySelector('.text');
 text.innerHTML = text.innerText.split('').map(
  (char,i)=>`<span style="transform:rotate(${i * 10}deg)">${char}</span>`
).join('');

// $('.code-icon').split('').map(
//   (icon,i)=>`<span style="transform:translate(${100})px">${icon}</span>`
// ).join('')
