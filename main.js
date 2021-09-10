function fetchExample() {
  console.log('Hallo Welt')

  fetch('http://hp-api.herokuapp.com/api/characters')
    .then((response) => response.json())
    .then((allData) => {
      console.log('Datanabruf hat funktioniert')
      console.log(allData)
    })
}

fetchExample()
