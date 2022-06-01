const url = 'https://api.datos.gob.mx/v1/calidadAire';
fetch(url)
  .then(response => response.json())
 
  .then(data => {
//let element = document.getElementsByName()
//element.innerHTML = `
//<p>${data.results[`0`]._id}</p>   
console.log(data);
console.log(data.results);
console.log(data.pagination.page);
console.log(data.pagination.pageSize);
console.log(data.pagination.total);

let pg = document.querySelector(`#pag`);
    pg.innerHTML =  
`<p> ${data.pagination.page}</p>    
 `;
 let Tp = document.querySelector(`#Tpag`);
    Tp.innerHTML =  
`  
<p>  ${data.pagination.pageSize}</p> 
 `;
 let Topg = document.querySelector(`#Topag`);
    
 Topg.innerHTML =  
`
<p>  ${data.pagination.total}</p>  
 `;

 let resu = document.querySelector(`#resu`);
    resu.innerHTML =  
`
<p>  ${data.results[1]._id}</p> 
 
 `;
console.log(data.results[`7`]);
console.log(data.results[`0`]._id);

 //`
  })