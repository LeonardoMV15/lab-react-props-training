function Random ({min,max}){

const maxNum = max - min
const result = Math.floor(Math.random()* maxNum)

return(
<h2>Random value between {min} and {max} = {result} </h2>

)

}

export default Random