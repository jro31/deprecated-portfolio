const flex_panels = document.querySelectorAll('.flex_panel');

function toggleOpen() {
  console.log('tard');
  this.classList.toggle('open');
}

function toggleOpenActive(e) {
  // console.log(e)
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open_active')
  }
}

flex_panels.forEach(panel => panel.addEventListener('click', toggleOpen));
flex_panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive));
