console.log("Axios: ", axios);

const container = document.querySelector("#container")

const fetchData = async()=>{

    try{
        const response = await customAxios.get("/users", {
            headers:{
                "Content-Type":"application/json",
                custom: "header"
            }
        });
        console.log("Data: ",response.data);
        return response.data;
    }
    catch(err) {console.log(err)}

}
const displayData = async ()=>{
    data = await fetchData();
    let headers = Object.keys(data[0]);
    const tableHead = document.querySelector("thead tr");

    const tableBody = document.querySelector("tbody");

    headers.forEach((col)=>{
        const column = document.createElement("th");
        column.innerText=col;
        tableHead.appendChild(column);
    })

    data.forEach((usr) => {
        let userValues = Object.values(usr)
        
        const tableRow = document.createElement("tr")
        userValues.forEach((row)=>{
            const rowValue = document.createElement("td");
            rowValue.innerText=row;
            tableRow.appendChild(rowValue);
            
        })
        tableBody.appendChild(tableRow);

    });
}

displayData();

const formulario = document.querySelector("form");
const titulo = document.querySelector("#title")
const corpo = document.querySelector("#body")
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();

    customAxios.post("/users",{
        title:corpo.value, body:corpo.value, userId:1
    }
    );
})