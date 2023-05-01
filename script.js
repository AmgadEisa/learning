let navBar = document.createElement("div");
navBar.className = "navBar";
document.body.prepend(navBar);
let logo = document.createElement("div");
let logoT = document.createTextNode("elzero");
logo.className = "logo";
logo.append(logoT);
logo.style.color = "green";
logo.style.fontSize = "20px";
logo.style.textTransform = "capitalize";
logo.style.textTransform = "capitalize";

navBar.append(logo);
let ulList = document.createElement("ul");
navBar.append(ulList);
ulList.className = "ulNav";
let home = document.createElement("li");
let homeT = document.createTextNode("Home");
home.className = "homeT";
home.appendChild(homeT);
let about = document.createElement("li");
let aboutT = document.createTextNode("about");
about.className = "aboutT";
about.appendChild(aboutT);
let service = document.createElement("li");
let serviceT = document.createTextNode("service");
service.className = "serviceT";
service.appendChild(serviceT);
let contact = document.createElement("li");
let contactT = document.createTextNode("contact");
contact.classList.add("contactT");
contact.appendChild(contactT);
ulList.append(home, about, service, contact);
console.log(contact.classList);
// styling#######################
navBar.style.cssText = `  
margin-top: 20px;
margin-bottom: 20px;
padding: 10px;
flex-wrap: wrap`;
navBar.style.display = "flex";
navBar.style.backgroundColor = "#eee";
navBar.style.justifyContent = "space-between";
ulList.style.listStyle = "none";
ulList.style.cssText = `    list-style: none;
display: flex;
justify-content: space-around;
width: 30%;
margin: 10px`;
// #####################################
// HTML
let parentDiv = document.createElement("div");
parentDiv.className = "parent-div";
let sonBox = document.createElement("div");
sonBox.classList.add("son-box");
let number = document.createTextNode("1");
let paragraph = document.createElement("p");
paragraph.className = "number";
let text = document.createTextNode("product");
// sonBox.append(paragraph);
paragraph.append(number);
paragraph.after(text);
// parentDiv.append(sonBox);
navBar.after(parentDiv);
//#####################################
//styling
// document.getElementsByClassName("son-box").style.textAlign = "center";
parentDiv.style.display = "grid";
parentDiv.style.textAlign = "center";
parentDiv.style.backgroundColor = "#c6c6d6";
parentDiv.style.padding = "20px";
sonBox.style.backgroundColor = "white";
parentDiv.style.height = "1vm";
parentDiv.style.gridTemplateColumns = "repeat(4, 1fr)";
parentDiv.style.gridTemplateRows = "repeat(1fr)";
parentDiv.style.gridGap = "20px";
sonBox.style.padding = "10px";
paragraph.style.fontFamily = "sans-serif";
paragraph.style.fontSize = "20px";

for (i = 0; i <= 11; i++) {
  const clonedBox = sonBox.cloneNode(false);
  parentDiv.append(clonedBox);
  clonedBox.innerHTML = `${i + 1} <br> <br> Product`;
  clonedBox.classList.add(`cloned-box-${i + 1}`);
}
let footer = document.createElement("div");
let footerContent = document.createTextNode("copyrights 2023");
footer.append(footerContent);
document.body.append(footer);
footer.className = "footer";
footer.style.textAlign = "center";
footer.style.padding = "20px";
footer.style.backgroundColor = "#9393c6";
footer.style.fontSize = "20px";
footer.style.fontWeight = "400px";
footer.style.textTransform = "capitalize";
footer.style.color = "white";
let sonBoxes = document.getElementsByClassName("son-box");
// redClassed.style.backgroundColor = `red`;
for (let i = 0; i < sonBoxes.length; i++) {
  sonBoxes[i].addEventListener("click", function (e) {
    e.target.classList.add("red-class");
    for (let i = 0; i < sonBoxes.length; i++) {
      let redClassed = document.getElementsByClassName("red-class")[i];
      redClassed.style.backgroundColor = `red`;
    }
  });
}
