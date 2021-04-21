const albums = [
    { name: "Album 1", price: 12.99, inCart: false }, 
    { name: "Album 2", price: 14.99, inCart: false }, 
    { name: "Album 3", price: 9.99, inCart: false }, 
    { name: "Album 4", price: 19.99, inCart: false }
  ];

function imgGetter(){
//     const images = document.getElementsByTagName('img')

//     for (image of images)
//         let id = image.id
//         document.getElementById(id).src = `Images/${id}.png`

    document.getElementById("Album1").src = "Images/Album1.png"
    document.getElementById("Album2").src = "Images/Album2.png"
    document.getElementById("Album3").src = "Images/Album3.png"
    document.getElementById("Album4").src = "Images/Album4.png"
}

imgGetter()

window.addEventListener('click', console.log('hello'))