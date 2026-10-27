function BoxColor({r,g,b}){

const styles = {
 backgroundColor: `rgb(${r}, ${g}, ${b})`,
  width: "150px",
    height: "150px",
    border: "1px solid black",
}



return (<div style={styles}> <h1>rgb({r}, {g}, {b})</h1></div>)

}
export default BoxColor