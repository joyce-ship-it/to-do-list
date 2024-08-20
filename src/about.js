function about(element){
    const article =  document.createElement('article');
    article.textContent = `Chocolate factory was founded in 2024 by a job seeker named Zai Whitaker
    due to his love for dark, unadulterated chocolate. The company intends on producing high quality affordable 
    chocolate to the masses at affordable prices.`;
    element.append(article);
}

export {about};