const flex_panel_container = document.querySelector('#flex_panels');
const every_flex_panel = document.querySelectorAll('.flex_panel');
const profile_column = document.querySelector('.profile');

function toggleSize() {
  this.classList.toggle('open');
  this.classList.toggle('open_active');

  const this_id = this.id;

  every_flex_panel.forEach(function(panel) {
    if(panel.id !== this_id) {
      panel.classList.remove('open');
      panel.classList.remove('open_active');
    };
  });
};

// function toggleOpenActive(e) {
//   if(e.propertyName.includes('flex')) {
//     this.classList.toggle('open_active');
//   };
// };

function toggleWidth() {
  this.classList.toggle('wide');
  flex_panel_container.classList.toggle('hide');
  profile_column.classList.toggle('wide_active');
};

every_flex_panel.forEach(panel => panel.addEventListener('click', toggleSize));
// every_flex_panel.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive));

profile_column.addEventListener('click', toggleWidth);

