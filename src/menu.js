export function menuContent(){
    const divContent = document.querySelector('#content')

    const divOne = document.createElement("div");
    const divTwo = document.createElement("div");
    const divThree = document.createElement("div");
    const divFour = document.createElement("div");

    const imageOne = document.createElement("img")
    const imageTwo = document.createElement("img")
    const imageThree = document.createElement("img")
    const imageFour = document.createElement("img")


    imageOne.src = "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    imageTwo.src = "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    imageThree.src = "https://media.istockphoto.com/id/1444922691/photo/bombay-vada-pav-isolated-on-wooden-board-side-view-of-indian-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=DnGrlAxWlL1Su2lXYRetzW7yN4--Rlp-BI_3pziHT1M="

    imageFour.src = "https://images.unsplash.com/photo-1622715395488-71045e2a4990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Ftb3NhfGVufDB8fDB8fHww"
    imageone.width = 400;
    divOne.appendChild(imageone)
    divContent.appendChild(divOne)
}