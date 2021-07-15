let uii = document.getElementById('users')

fetch ('https://randomuser.me/api/?results=19')
    .then((resp)=>{
       
        return resp.json()//converting the link output to a json format which sometimes is an array
    }).then((data)=>{
       
        let users= data.results;
        return users.map((user)=>{//the map is use to convert an array to an object

            const jsdiv = document.createElement('div'); //we use the create element to an html element and its a tag element that can be created with the createElement
            const img = document.createElement('img');
            const p = document.createElement('p');

            uii.appendChild(jsdiv); //the appendChild is to attach an elment to a parent element or another element
            let paragraph = jsdiv.appendChild(p)
            let image = jsdiv.appendChild(img)
            let firstName = user.name.first;
            let lastName = user.name.last;
            let email = user.email;
            let gender = user.gender;
            let city = user.location.city;
            let nationality = user.location.country;
            
            // image.src = user.picture.large; //to get an image we use the scr  and add the link of the image. in this case its an object that is why there is no link

         const profile =   ` <div class="card mb-3" style="max-width: 540px;">
         <div class="row g-0">
           <div class="col-md-4">
             <img src="..." class="img-fluid rounded-start" alt="...">
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h5 class="card-title">Card title</h5>
               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
             </div>
           </div>
         </div>
       </div>`;

         

            console.log(user)
            paragraph.innerHTML =` 
            
            <style>
            .card {
                margin-left: 30px;
                color: #f59e34;
                box-shadow: 0px 10px 10px #7a7671;
                font-family: 'Courier New', Courier, monospace;
            }
            .card-title{
                font-weight: 700;
            }
            img{
                margin:20px;
                height: 100px;
                
            }
        
            </style>
            
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4" >
                <img src="${user.picture.large}" class="rounded-circle" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${firstName}  ${lastName}</h5>
                  <p class="card-text"><strong>Email:</strong>  ${email}</p>
                  <p class="card-text"><strong>Gender:</strong>  ${gender}</p>
                  <p class="card-text"><strong>City:</strong>  ${city}</p>
                  <p class="card-text"><strong>Nationality:</strong>  ${nationality}</p>
                 
                </div>
              </div>
            </div>
          </div>`;
            
        })
    }).catch((error)=>{
       
    })