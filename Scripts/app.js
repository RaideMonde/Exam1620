function imgGetter(){
    const images = document.getElementsByTagName('img')

    for (image of images)
        let id = image.id
        document.getElementById(id).src = `Images/${id}.png`

    // document.getElementById("Album1").src = "Images/Album1.png"
    // document.getElementById("Album2").src = "Images/Album2.png"
    // document.getElementById("Album3").src = "Images/Album3.png"
    // document.getElementById("Album4").src = "Images/Album4.png"
}

imgGetter()

function imgGetter(){
    const images = document.getElementsByTagName('img')

    for (image of images)
        let id = image.id
        image.src = `Images/${id}.png`
}

imgGetter()