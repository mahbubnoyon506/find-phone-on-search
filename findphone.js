
const showPhone = () =>{
    const searchInput = document.getElementById('search-input');
    const getInput = searchInput.value;
    searchInput.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${getInput}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showSearchPhone(data.data));
}
// showPhone();

const showSearchPhone = phones =>{
  const phoneDiv = document.getElementById('phone-wraper');
  phoneDiv.textContent = '';
    phones.forEach(phone =>{
      // console.log(phone);
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
      <div class="card p-3">
      <img src="${phone.image}" class="card-img-top img-fluid" alt="...">
      <div class="card-body">
        <h4 class="card-title text-center text-success">${phone.phone_name}</h4>
        <h6 class="card-sub-title text-center text-success">${phone.brand}</h6>
        <button onclick="moreDetails('${phone.slug}')" class="d-grid col-4 mx-auto btn btn-primary btn-sm">View Details</button>
      </div>
    </div>   
      `;
      phoneDiv.appendChild(div);
      
    })
  }

 const moreDetails = id =>{
   const url = `https://openapi.programming-hero.com/api/phone/${id}`;
   fetch(url)
   .then(res => res.json())
   .then(data => showMoreDetails(data.data))

}

const showMoreDetails = details =>{
   const detailDiv = document.getElementById('detail-id');
   detailDiv.textContent = '';
  //  console.log(details);
     const div = document.createElement('div');
     div.classList.add('wrap');
     div.innerHTML = `
        <div class="row justifycontent-between w-50 mx-auto shadow p-3 mb-5 bg-body rounded">
          <div class="col-md-5">
              <img src="${details.image}" class="card-img-top img-fluid p-3" alt="...">
          </div>
          <div class="col-md-7">
              <p class="card-title text-success">Release Date: ${details.releaseDate}</p>         
              <p class="card-sub-title text-success">Main feature:</br>
              a. ${details.mainFeatures.chipSet}&nbsp;</br>     
              b. ${details.mainFeatures.displaySize}&nbsp;</br>  
              c. ${details.mainFeatures.memory}</p>
              <p class="card-sub-title text-success">Sensor:${details.mainFeatures.sensors[0]}</p>
              <p class="card-sub-title text-success">Others Info:<span class="text-success">${details.others.Bluetooth}</p>
          </div> 
        </div>
     `;
     detailDiv.appendChild(div);
}



