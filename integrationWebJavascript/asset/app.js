const body = document.querySelector('body');
body.style.display ='flex';
body.style.flexDirection ='column';
body.style.alignItems = 'center';
body.style.justifyContent ='center';
body.style.backgroundColor ='blue';
body.style.width ='100vw';

let wrapper = document.createElement('div');
wrapper.style.backgroundColor ='orange';
wrapper.style.display ='flex';
wrapper.style.flexDirection ='column';
wrapper.style.alignItems = 'center';
wrapper.style.justifyContent ='center';
wrapper.style.boxShadow ='1px 2px 40 grey';
wrapper.style.width = '70%';
wrapper.style.padding = '20px';
body.appendChild(wrapper);
let header = document.createElement('header');
wrapper.appendChild(header);
let titre = document.createElement('h1');
header.appendChild(titre);
titre.textContent =' Mozilla is cool, chris';
titre.style.color = 'blue';



let renard = document.createElement('img');
renard.src ='/asset/image/fox-g2e5aac176_640.jpg';
header.appendChild(renard);


let sect1 = document.createElement('section');
wrapper.appendChild(sect1);
let paragraphe1 = document.createElement('p');
paragraphe1.textContent = "at mozilla, we're a global community of";
sect1.appendChild(paragraphe1);
sect1.style.display ='flex';
sect1.style.flexDirection ='column';
sect1.style.alignItems ='flex-start'
sect1.style.justifyContent ='center';
 let liste = document.createElement('ul');
 let ElementListe1 = document.createElement('li');
 let ElementListe2 = document.createElement('li');
 let ElementListe3 = document.createElement('li');
 sect1.appendChild(liste);
 liste.appendChild(ElementListe1);
 liste.appendChild(ElementListe2);
 liste.appendChild(ElementListe3);
 ElementListe1.textContent = 'technologist';
 ElementListe2.textContent = 'thinkers';
 ElementListe3.textContent = 'builders';
 
 let sect2 = document.createElement('section');
 wrapper.appendChild(sect2);
 let paragraphe2 = document.createElement('p');
 sect2.appendChild(paragraphe2);
 paragraphe2.textContent ='working together to keep the internet alive and accessible, so people worlwide can be informed contributors and creators of the web. We believe this act of human collaboration across an open platform is essential to individual growth and our collective future.';
 

 let sect3 = document.createElement('section');
 wrapper.appendChild(sect3);
 let paragraphe3 = document.createElement('p');
  let lien = document.createElement('a') 

 
 sect3.appendChild(paragraphe3);
 paragraphe3.appendChild(lien);
 
 lien.href = 'https://www.mozilla.org/fr/';
 lien.textContent = 'mozilla manifesto';
 
//  paragraphe3.textContent ='Read the '+ lien +   ' to learn even more about the values and principles that guide the pursuit of our mission.';
// Mon texte mozilla manifesto n'apparaissait pas, tchat gpt me propose de remplacer textContent par la proprité innerHTML pour ajouter du contenuHTML au paragraphe, et la propriéte outerHTML de l'élément 'a' pour inclure le lien complet (avec le texte et l'url) dans le paragraphe.
 paragraphe3.innerHTML = 'Read the ' + lien.outerHTML + ' to learn even more about the values and principles that guide the pursuit of our mission.';
let button = document.createElement('button');
 sect3.appendChild(button);
 button.textContent ='Change user';
 button.style.backgroundColor = 'white';
 button.style.color = 'black';
 button.style.padding = '10px';
 button.style.boxShadow ='1px 2px 40 grey';

 
 


