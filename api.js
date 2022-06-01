const url = 'https://api.datos.gob.mx/v1/calidadAire';
fetch(url)
  .then(response => response.json())
 
  .then(data => {
  
    let element = document.getElementById("cve")
    
    element.innerHTML =  
    `<p>${data.id}</p>   
    <p>${data.name}</p> 
   
     `;

    
    console.log(data)

  })