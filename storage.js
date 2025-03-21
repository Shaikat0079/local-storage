const handleAddToStorage=()=>{
    // console.log("Added to storage!")
  const person = {
    pName :'Shaikat',
    age: 40,
    friends : ['Arafat',"Sayed"]
  }

//   localStorage.setItem('shaikat',person)
  const convertedToString = JSON.stringify(person);
//   console.log(convertedToString.pName)
  localStorage.setItem('shaikat',convertedToString)
  const backToObject = JSON.parse(convertedToString);
//   console.log(backToObject)
//   console.log(backToObject.pName)
}

const data = localStorage.getItem("shaikat");
console.log(data)
const dataLocal = JSON.parse(data)
console.log(dataLocal)
console.log(dataLocal.pName)
console.log(dataLocal.age)