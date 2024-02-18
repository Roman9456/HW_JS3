const rotatorCases = document.querySelectorAll('.rotator__case');

function rotate() {
  const activeCase = document.querySelector('.rotator__case_active');
  const activeCaseIndex = Array.from(rotatorCases).indexOf(activeCase);
  
  activeCase.classList.remove('rotator__case_active');


  const nextCase = rotatorCases[(activeCaseIndex + 1) % rotatorCases.length];
  nextCase.classList.add('rotator__case_active');

 
  const color = nextCase.dataset.color;
  const speed = nextCase.dataset.speed || 1000;

  nextCase.style.color = color;

  
  setTimeout(rotate, speed);
}

rotate();
