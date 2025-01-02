fetch("api/state",{
    method: "GET"
}).then(response=>response.json()).then(data=>{
    if(data.state==true){
        document.querySelector(".open").style.display="inline";
    }else{
        document.querySelector(".closed").style.display="inline";
    }
})