import { doSomethingWithData } from './fetch-use-data'

export function fetchExample() {
  fetch('http://hp-api.herokuapp.com/api/characters')
    .then((response) => response.json())
    .then((allData) => {
      console.log('Datanabruf hat funktioniert')
      doSomethingWithData(allData)
      dosomethingelse(allData)
    })
}

function dosomethingelse(data) {
  console.log('the other one')
  console.table(data)
}
