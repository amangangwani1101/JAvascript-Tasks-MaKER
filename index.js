function getAnUpdate()
{
    console.log("Updating List...");
    tit=document.getElementById('title').value;
    desc=document.getElementById('description').value;
    if(localStorage.getItem('itemJSON')==null)
    {
        itemJSONarray=[];
        itemJSONarray.push([tit,desc]);
        localStorage.setItem('itemJSON',JSON.stringify(itemJSONarray));
    }
    else
    {
        itemJSONstr=localStorage.getItem('itemJSON');
        itemJSONarray=JSON.parse(itemJSONstr);
        itemJSONarray.push([tit,desc]);
        localStorage.setItem('itemJSON',JSON.stringify(itemJSONarray));
    }
    update();
}
    function update()
    {
        if(localStorage.getItem('itemJSON')==null)
        {
            itemJSONarray=[];
            localStorage.setItem('itemJSON',JSON.stringify(itemJSONarray));
        }
        else
        {
            itemJSONstr=localStorage.getItem('itemJSON');
            itemJSONarray=JSON.parse(itemJSONstr);
        }   
    //populate table 
    let tableBody=document.getElementById("tableBody");
    let string="";
    itemJSONarray.forEach((element,index) => {
        string+=`
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>              
        <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
      </tr>  
        `;
    });
    tableBody.innerHTML=string;
}
add=document.getElementById("add");
add.addEventListener("click",getAnUpdate);
update();
function deleted(itemIndex)
{
    console.log("Deleting:-",itemIndex);
    itemJSONstr=localStorage.getItem('itemJSON');
    itemJSONarray=JSON.parse(itemJSONstr);
    itemJSONarray.splice(itemIndex,1);
    localStorage.setItem('itemJSON',JSON.stringify(itemJSONarray));
    update();        
}

function clearStorage()
{
    if(confirm("Your Task Will Be cleared"))
    {
        console.log("Storage Is Being Clearing:-")
        localStorage.clear();
        update();
    }
}