
const app = document.querySelector("#terminal");
const delay = ms => new Promise(res => setTimeout(res, ms));


 

const Terminal = new WinBox("guest@kali:~/hellomate", {
  title: "guest@kali:~/hellomate",
  index: 1,
  id: "my-window",
  root: document.body,
  class: ["my-theme"],
  header: 30,
  width: 700,
  height: 550,
  center: true,
  mount: document.getElementById("terminal"),
  onclose: function(force) {
    return !confirm("Close window?");
  },
  oncreate: function(options) {
    open_terminal();
  },
  onshow: addEventListener("keypress", async function(event) {
    if (event.key === "Enter") {
      await delay(150);
      getInputValue();
      removeInput();
      await delay(150);
      new_line();
    }
  }),
  onblur: function() {
    this.setBackground("#777");
  },
  onresize: function() {
    console.log("Window resized to " + this.width + "x" + this.height);
  },
});



Terminal.addControl({
  index: 5,
  class: "wb-like1",
  image: "titleIcon.png",
  click: function(event, winbox){
      // the winbox instance will be passed as 2nd parameter
      console.log(winbox.id);
      // "this" refers to the button which was clicked:
      this.classList.toggle("active");
  }
});


function resizeTerminalWinBox(winBox, newWidth, newHeight) {
  winBox.resize(newWidth, newHeight);
}

function handleScreenSizeChange() {
  const mediaQuery = window.matchMedia("(max-width: 510px)");
  const mediaQuery2 = window.matchMedia("(max-width: 840px)");
  const mediaQuery1 = window.matchMedia("(max-width: 700px)"); 
  const mediaQuery3 = window.matchMedia("(max-width: 940px)"); 
  if (mediaQuery.matches) {
    resizeTerminalWinBox(Terminal, 385, 510);
    Terminal.move("center", "center");
  } else if (mediaQuery1.matches){
    resizeTerminalWinBox(Terminal, 430, 520);
    Terminal.move("center", "center");
  }else if (mediaQuery2.matches){
    resizeTerminalWinBox(Terminal, 610, 530);
    Terminal.move("center", "center");
  }else if(mediaQuery3.matches){
    resizeTerminalWinBox(Terminal, 695, 540);
    Terminal.move("center", "center");
  }else{
    resizeTerminalWinBox(Terminal, 725, 590);
    Terminal.move("center", "center");
  }
}

handleScreenSizeChange();

window.addEventListener("resize", handleScreenSizeChange);

Terminal.move("center", "center");
Terminal.removeControl("wb-close"),
 

Terminal.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})

 
 

async function open_terminal(){
 
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  createText("<span style='font-size:20px; '>Hi mate! &#128516;</span>");
  await delay(100);

  createText("<br> <img src='img.png' id = 'image1' style ='border-radius: 3%;'width = '165'alt=''></img>")
  await delay(100);
  createText("<br>Starting the server...");

  await delay( 100);
  //createCode("home", "    For GUI Homepage");
  createCode("--inf", "All commands");
/*
  createCode("Resume", "Watch all Resume related commands");
  createCode("Download CV", "Watch all CV related commands");
  createCode("Projects", "For GUI Homepage");
  createCode("Contact", "Want to contact me?");
  createCode("Scrap", "Try out my web scrapping project");

  createCode("clean", "Clear the terminal");*/

  await delay(800);

  new_line();
  await delay(400);
}


async function new_line(){
  await delay(300);
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "#mate";
  span1.textContent = " in";
  span2.textContent = " ~/guest";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  text = 'guest@kali:~/hellomate$';
  i.textContent = text;
  
  
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "--inf"){
    trueValue(value);
   /* createCode("home", "For GUI homepage ;)");
    createCode("projects", "My projects ;)");
    createCode("about me", "Who am i and what do i do.");
    createCode("contact", "Want to contact me?.");
    createCode("clear", "Clean the terminal.");*/
    /*const p = document.createElement("p");
    p.innerHTML = `<table  border="1">
    </br>
    <tbody>
      <tr>
        <td> home  </td>
        <td>  For GUI homepage </td>
      </tr>
      <tr>
        <td> about me  </td>
        <td>  Who am i and what do i do.  </td>
      </tr>
      <tr>
      <td> contact  </td>
      <td> Contact Information  </td>
    </tr>
    <tr>
    <td> projects  </td>
    <td> My project </td>
  </tr>
  <tr>
  <td> clear </td>
  <td> Make Terminal Clean </td>
</tr
    </tbody>
  </table> `;*/

  createCode("resume", "&nbsp&nbspWatch all Resume related commands");
  createCode("d cv", "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDownload CV");
  createCode("projects", "&nbspAll my projects description");
  createCode("contact", "&nbsp&nbspContact Information?");
  createCode("solveBK", "&nbspSolveBK is my simple programming language, try it out right now! ");
  createCode("------------------------------------------------------------------------------------------------------------------------", "");
  createCode("clean", "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspClear the terminal");
  app.appendChild(p);
    
  }
  else if(value=== "resume"){
    trueValue(value);
    const p = document.createElement("p");
    p.innerHTML = `<table  border="1">
    </br>
    <tbody>
      <tr>
        <td>Web Development Skills  </td>
        <td>  HTML, CSS, JavaScript </td>
        <td>   7/10   </td>
      </tr>
      <tr>
        <td> Backend Development Skills  </td>
        <td>  Python(Django), Java, C#  </td> 
        <td>   7/10   </td>     
      </tr>
      <tr>
      <td> Python Framework and Libraries  </td>
      <td>  Django,Flask,TensorFlow, NumPy, SciPy, Pandas, Matplotlib, Keras </td>
      <td> 6.5/10 </td>
    </tr>
    <tr>
      <td>Operating systems  </td>
      <td> Windows, Linux </td>
      <td> 10/10 7/10 </td>
    </tr>
    <tr>
      <td>Java Framework and Libraries  </td>
      <td>  Spring, Kafka </td>
      <td> 5/10 </td>
    </tr>
      <tr>
      <td> Data Knowledge and Management  </td>
      <td> UML, Human-Computer Interaction, Git </td>
      <td> 8.5/10 </td>
    </tr>
    <tr>
    <td> Additional superficial knowledge  </td>
    <td> Docker, AWS, Machine Learning </td>
    <td>  float/10 </td>
  </tr>

    </tbody>
  </table> 
  </br>
<tbody >
<table style='background-color:#00ff9594;  '> 
  <tr>
  <td> Main Focus and <b>Interest</b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</td>
  <td> Web scrapping, Data Analysis, Data Science, Data Visualisation&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</td>
</tr>
</tbody>
</table> 
  `;
  app.appendChild(p);
    //createText("Click here For GUI <a href='https://kcashok.com.np/' target='_blank'>https://kcashok.com.np/</a>")
  }
  else if(value === "d cv"){
    trueValue(value);
    url = 'data.pdf';
    window.open(url, '_blank');
    //createText("<a href='https://kcashok.com.np/projects.php' target='_blank'><i class='fab fa-wrench '></i> Click the link to view projects and tool www.kcashok.com.np/projects.php</a>")
  }
  else if(value === "projects"){
    trueValue(value);

    createText("For more details visit this link <a href='https://github.com/BigDataBohdan' target='_blank'>https://github.com/BigDataBohdan</a>")
  }
  else if(value === "contact"){
    trueValue(value);
 
    const p = document.createElement("p");
    p.innerHTML = `
    <table style='background-color:#328e6c9a;  '> 
    <tbody 
      <tr>
      <td>   <b>Email</b> </td>
      <td> <strong style='color:#1496BB;'>bohdankvietka@gmail.com </strong></td>
    </tr>
    <tr>
    <td>  <b>LinkedIn:</b> </td>
    <td>  <strong > <a href='https://www.linkedin.com/in/bohdan-kvetka-107625200/' target='_blank' style='color:#1496BB;'>https://www.linkedin.com/in/bohdan-kvetka-107625200/</a></strong></td>
  </tr>
  <tr>
  <td>   <b>GitHub</b> </td>
  <td> <strong ><a href='https://github.com/BigDataBohdan' target='_blank' style='color:#1496BB;'>https://github.com/BigDataBohdan</a></strong> </td>
</tr>
<tr>
<td>   <b>LeetCode</b> </td>
<td> <strong ><a href='https://leetcode.com/BohdanTheFocused/' target='_blank' style='color:#1496BB;'>https://leetcode.com/BohdanTheFocused/</a></strong> </td>
</tr>
<tr>
<td>   <b>Play Market</b> </td>
<td> <strong ><a href='https://play.google.com/store/apps/details?id=com.DefaultCompany.MagicExile' target='_blank' style='color:#1496BB;'>https://play.google.com/store/apps/details?id=com.DefaultCompany.MagicExile</a></strong> </td>
</tr>
    </tbody>
    </table> `;

    app.appendChild(p);
    //createText("For more details visit this link <a href='https://kcashok.com.np/contact.php' target='_blank'>https://kcashok.com.np/contact.php</a>")
   }
  else if(value === "scrap"){
    trueValue(value);
    createText("Coming soon")
    //createText("Click  here <a href='https://kcashok.com.np/skills.php' target='_blank'>https://kcashok.com.np/skills.php</a>")
  }
  else if(value === "solveBK"){
    trueValue(value);
    createText("Coming soon")
    //createText("Click  here <a href='https://kcashok.com.np/skills.php' target='_blank'>https://kcashok.com.np/skills.php</a>")
  }
  else if(value === "clean"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`Unknown command: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  text = 'guest@kali:~/hellomate$';
  i.textContent = text;
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  text = 'guest@kali:~/hellomate$';
  i.textContent = text;
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `<span>${code}   <i>${text} </i> </span>`;
  app.appendChild(p);
 
   
}

 

