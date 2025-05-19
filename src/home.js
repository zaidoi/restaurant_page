 export function home(){
    const divContent = document.querySelector('#content');
const divLeft = document.createElement('div')
const divRight = document.createElement('div')
const header = document.createElement("h1")
header.innerText = "Flavour Full Restaurant"
divContent.appendChild(divLeft)
divContent.appendChild(divRight)

const divImg = document.createElement("img")
divImg.width = 400;
divImg.src = "https://images.unsplash.com/photo-1651440204227-a9a5b9d19712?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
divLeft.appendChild(header)
divLeft.appendChild(divImg);

const rightContent = document.createElement("h4")
rightContent.innerHTML = "Flavour Full Restaurant is a modern and vibrant restaurant website designed to showcase delicious cuisines with a stylish and user-friendly interface. Built with JavaScript and Webpack, the site highlights the restaurant’s menu, atmosphere, and unique flavor philosophy. It offers a smooth browsing experience and reflects a professional presentation of a real-world dining brand."

divRight.appendChild(rightContent)
}