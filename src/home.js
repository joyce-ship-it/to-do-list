import chocoImg from "./choco.jpg"
function home(element){
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Chocolate Factory! ';
    element.append(h1);

    const img = document.createElement('img');
    img.src = chocoImg;
    element.append(img);

    const h2 = document.createElement('h2');
    h2.textContent = "Opening Hours";
    element.append(h2);

    const p = document.createElement('p');
    p.textContent = "24 x 7 | 9:00 AM to 10:00 PM";
    element.append(p);
    
}

export {home};

