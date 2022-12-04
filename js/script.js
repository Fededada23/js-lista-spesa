const list = ['cioccolata','guanciale','percorino','pasta','uova']
const list_container=document.querySelector('.shopping-list');
let text = "";


let i = 0;
while (i < list.length) {
  item = list[i];
  text += `<li class="list-item">${item}</li>`
  i++;
  list_container.innerHTML=text
  
}