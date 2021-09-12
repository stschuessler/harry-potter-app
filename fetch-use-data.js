export function doSomethingWithData(data) {
  const body = document.querySelector('body')
  const box = document.createElement('div')
  box.innerHTML = `Lasst mich euch Ron vorstellen
  <img src="http://hp-api.herokuapp.com/images/ron.jpg" alt="Picture of Ron">`
  body.appendChild(box)

  console.log(data)
  data.forEach((character) => {
    console.table(character)
    //   //console.table(character.image)
    //   // console.log(character.name)
    //   //console.log()
  })
}
