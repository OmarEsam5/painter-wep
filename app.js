let barHeader = document.getElementById("headerBar")
let linksHeader = document.getElementById("links")

// bar on click open links Heder
barHeader.onclick = () => {
    linksHeader.classList.toggle("open")
}

// focu for images
let images = document.querySelectorAll(".galary .images img")

images.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        let container = document.createElement("div")
        container.className = "container-image"

        let overLay = document.createElement("div")
        overLay.className = "overlay"

        let close = document.createElement("span")
        close.className = "close"
        close.textContent = "x"

        let contentImage = document.createElement("div")
        contentImage.className = "content-image"

        let image = document.createElement("img")
        image.src = e.target.src

        contentImage.appendChild(image)

        let awsmI1 = document.createElement("i")
        awsmI1.className = "fa-solid fa-circle-chevron-right"
        let awsmI2 = document.createElement("i")
        awsmI2.className = "fa-solid fa-circle-chevron-left"

        container.appendChild(overLay)
        container.appendChild(close)
        container.appendChild(contentImage)
        container.appendChild(awsmI1)
        container.appendChild(awsmI2)

        document.body.appendChild(container)

        close.onclick = () => {
            container.remove()
        }

        awsmI1.onclick = () => {
            let imgSrc = image.src
            let num = imgSrc.lastIndexOf("e")
            let num2 = imgSrc.lastIndexOf(".")
            let number = Number(imgSrc.slice(num+1, num2))
            if (number < images.length) {
                awsmI1.classList.remove("notfound")
                awsmI2.classList.remove("notfound")
                image.src = `./images/galary/image${++number}.jpg`
            }else {
                awsmI1.classList.add("notfound")
            }
        }
        awsmI2.onclick = () => {
            let imgSrc = image.src
            let num = imgSrc.lastIndexOf("e")
            let num2 = imgSrc.lastIndexOf(".")
            let number = Number(imgSrc.slice(num+1, num2))
            if (number > 1) {
                awsmI2.classList.remove("notfound")
                awsmI1.classList.remove("notfound")
                image.src = `./images/galary/image${--number}.jpg`
            }else {
                awsmI2.classList.add("notfound")
            }
        }
    })
})


// scroll icon
let eleScroll = document.querySelector(".scroll")

window.onscroll = () => {
    if (window.scrollY > 475) {
        eleScroll.style.display = "block"
    }else {
        eleScroll.style.display = "none"
    }
}

eleScroll.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// send for form massege

let inpName = document.getElementById("name").value
let inpPhone = document.getElementById("phone").value
let inpEmail = document.getElementById("email").value;
let inpSupject = document.getElementById("supject").value
let inpMaessage = document.getElementById("message").value
// let submit = document.getElementById("submit")


function sendMessage() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "oesam094@gmail.com",
        Password : "OMaREsAm17509423698323",
        To : 'oesam094@gmail.com',
        From : inpEmail,
        Subject : inpSupject,
        Body : `Name: ${inpName} <br/> 
                Email: ${inpEmail} <br/> 
                Phone: ${inpPhone} <br/>
                Message: ${inpMaessage}`
    }).then(
        message => alert(message)
    );
}