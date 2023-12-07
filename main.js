let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #800080;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #732962;">Soy bióloga molecular y me gusta estudiar el cáncer.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
