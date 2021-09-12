//const body = document.querySelector('body')
//const box = document.createElement('div')
// box.innerHTML = `Lasst mich euch Ron vorstellen
//   <img src="http://hp-api.herokuapp.com/images/ron.jpg" alt="Picture of Ron">`
// body.appendChild(box)

export function doSomethingWithData(data) {
  //console.table(data)
  const body = document.querySelector('body')
  const nameArray = data.map((allNames) => allNames.name)
  const imageArray = data.map((allImages) => allImages.image)

  console.log(nameArray)
  console.log(imageArray)

  const box = document.createElement('div')

  body.appendChild(box)

  nameArray.forEach((element) => {
    const paragraph = document.createElement('p')
    paragraph.innerHTML = `Let me introduce you to ${element}`
    box.appendChild(paragraph)
  })

  imageArray.forEach((element) => {
    const images = document.createElement('img')
    images.setAttribute('src', `${element}`)
    images.setAttribute('width', '200')
    images.setAttribute('alt', 'A picture of XX')
    box.appendChild(images)
  })
}
