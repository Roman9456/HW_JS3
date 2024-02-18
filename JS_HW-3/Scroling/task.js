const revealBlocks = document.querySelectorAll('.reveal');

function checkReveal() {
  revealBlocks.forEach(block => {
    const blockTop = block.getBoundingClientRect().top;
    
    if (blockTop < window.innerHeight) {
      block.classList.add('reveal_active');
    } else {
      block.classList.remove('reveal_active');
    }
  });
}

window.addEventListener('scroll', checkReveal);
checkReveal();