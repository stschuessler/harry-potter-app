export function fetchExample() {
  fetch('http://hp-api.herokuapp.com/api/characters')
    .then((response) => response.json())
    .then((allData) => {
      console.log('Datanabruf hat funktioniert')
      console.table(allData)
    })
}