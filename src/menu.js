import "./menu.css";
import chocoImg  from "./choco.jpg"
function menu(element){
    
    const parentDiv = document. createElement('div');
    parentDiv.classList.add('parent');

    const div1 = document.createElement('div');
    const img1 = document.createElement('img');
    img1.src = chocoImg;
    const p1 = document.createElement('p');
    p1.textContent = "Rum Flavored candy (14$)"
    div1.append(img1);
    div1.append(p1);
    div1.classList.add('menu');
    parentDiv.append(div1);

    const div2 = document.createElement('div');
    const img2 = document.createElement('img');
    img2.src = chocoImg;
    const p2 = document.createElement('p');
    p2.textContent = "Strawberry Flavored Candy (20$)";
    div2.append(img2);
    div2.append(p2);
    div2.classList.add('menu');
    parentDiv.append(div2);

    const div3 = document.createElement('div');
    const img3 = document.createElement('img');
    img3.src = chocoImg;
    const p3 = document.createElement('p');
    p3.textContent = "Almond Based Chocolate Bar (18$)"
    div3.append(img3);
    div3.append(p3);
    div3.classList.add('menu');
    parentDiv.append(div3);

    const div4 = document.createElement('div');
    const img4 = document.createElement('img');
    img4.src = chocoImg;
    const p4 = document.createElement('p');
    p4.textContent = "Vanilla Flavored Chocolate Bar (12$)";
    div4.append(img4);
    div4.append(p4);
    div4.classList.add('menu');
    parentDiv.append(div4);

    element.append(parentDiv);
}

export {menu};