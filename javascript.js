const flex_panel_container = document.getElementById('flex_panels');
const every_flex_panel = document.querySelectorAll('.flex_panel');
const profile_panel = document.getElementById('profile_panel');
const profile_column = document.getElementById('profile_column');
const profile_picture_div = document.querySelectorAll('.profile_picture');
const profile_titles = document.querySelectorAll('.profile_titles');
const profile_info = document.querySelectorAll('.profile_info');
const flex_panel1 = document.getElementById('flex_panel1');
const flex_panel2 = document.getElementById('flex_panel2');
const flex_panel3 = document.getElementById('flex_panel3');

// For <800 screens
function toggleFullScreenProfile() {
  flex_panel_container.classList.toggle('hide');
  profile_panel.classList.toggle('info_appear');
}

// For <800 screens


// For >1200 screens
function toggleProfileWidth(e) {
  if(e.target.parentElement.target !== '_blank') {
    this.classList.toggle('wide');
    flex_panel_container.classList.toggle('hide');
    profile_column.classList.toggle('info_appear');
    profile_column.classList.toggle('arrow_be_seeing_ya');
    profile_column.classList.toggle('small_face');
  };
};

// For >1200 screens
function toggleFlexPanelSize(e) {
  if(e.target.parentElement.target !== '_blank') {
    this.classList.toggle('open');
    this.classList.toggle('open_active');

    // profile_panel.classLis

    const this_id = this.id;

    every_flex_panel.forEach(function(panel) {
      if(panel.id !== this_id) {
        panel.classList.remove('open');
        panel.classList.remove('open_active');
      };
    });
  };
};

function addContent() {
  profile_picture_div.forEach(function(div) {
    div.innerHTML = `<img id="profile_picture" src="images/profile_picture.jpg" alt="Profile picture" title="" />`
  });

  profile_titles.forEach(function(titles) {
    titles.innerHTML = `
      <h1>Jethro Williams</h1>
      <h3>Fullstack Web Developer</h3>
    `
  })

  profile_info.forEach(function(info) {
    info.innerHTML = `
  <p>
    My interest in coding spawned from a frustration of wanting apps that just didn&#39;t exist, where I eventually got to the point of saying... well I&#39;ll just learn how to create them myself then.
  </p>
  <p>
    I've always had a high aptitude for and got a lot of enjoyment from problem-solving&#59; things like Sudoku. And when I started learning to code I was instantly hooked. It was almost like a drug to have a vision of something that I wanted to create, and then to have to figure-out how to do so.
  </p>
  <p>
    I quickly realised that my previous career of teaching, although still rewarding in other ways, had stagnated in the challenge it could provide me, which was why I decided to expand coding from being a free-time hobby, to a full-time passion.
  </p>
  <p>
    If you find something that you love, then you'll never work another day in your life, which is what drove me to doing a bootcamp. It was the quickest route that I could take to turn this passion and natural proficiency into skills that would be useful to an employer.
  </p>
  <p>
    Now I'm looking for a project that I'm passionate about, to which I can dedicate myself as I continue to grow, and that allows me to be expressive through coding.
  </p>
  `
  });

  flex_panel1.innerHTML = `
  <div>
    <a href="https://www.plantasusual.com/" target="_blank">
      <h3>Plant as Usual</h3>
      <p>
        A solo Ruby on Rails project that allows signed-in users to add recipes, comment on and favourite other users' recipes, report innapproriate recipes and comments, and send instant messages to one another. Includes full admin panel and privileges.
      </p>
    </a>
  </div>
  <h2>Key Projects</h2>
  <div>
    <a href="https://github.com/jro31/buidl" target="_blank">
      <h3>BUIDL</h3>
      <p>
        A four-person collaborative Ruby on Rails project that allowed people do visualize their GitHub profile in presentable data in a single click.
      </p>
    </a>
  </div>
  `

  flex_panel2.innerHTML = `
  <div>
    <h3>Technical skills</h3>
    <p>
      A working knowledge of Ruby, Ruby on Rails, HTML, CSS, the command line, Heroku, PostgreSQL, and version control using GitHub.
    </p>
    <p>
      A developing knowledge of JavaScript and Swift, with Python and PHP to follow.
    </p>
  </div>
  <h2>Skills</h2>
  <div>
    <h3>Other skills</h3>
    <p>
      Extensive experience and understanding of what is required to work in teams, obsessive organisation skills, and comfort in making presentations developed through years of teaching.
    </p>
  </div>
  `

  flex_panel3.innerHTML = `
  <div>
    <h3>Le Wagon</h3>
    <p>
      A nine-week full-stack web developement bootcamp which technically focussed on the necessary skills needed to build fully-functional Ruby on Rails projects, but also stressed the importance of team-work and collaboration.
    </p>
  </div>
  <h3>Education</h3>
  <div>
    <h3>Further Education</h3>
    <p>
      My self-taught technical education includes HTML &amp; CSS, JavaScript 30, CodeWars and Hacking with Swift.
    </p>
    <p>
      Other education includes a bachelor's degree in business and the Cambridge University Certificate in English Language Teaching to Adults.
    </p>
  </div>
  `
};

profile_panel.addEventListener('click', toggleFullScreenProfile);
every_flex_panel.forEach(panel => panel.addEventListener('click', toggleFlexPanelSize));
profile_column.addEventListener('click', toggleProfileWidth);

document.addEventListener("DOMContentLoaded", addContent);


