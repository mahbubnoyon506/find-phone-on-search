
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
  phones.forEach(phone =>{
    console.log(phone);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card p-3">
    <img src="${phone.image}" class="card-img-top img-fluid shadow mb-5 bg-body rounded" alt="...">
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
   console.log(details);
     const div = document.createElement('div');
     div.classList.add('wrap');
     div.innerHTML = `
        <div class="row justifycontent-between w-50 mx-auto shadow p-3 mb-5 bg-body rounded">
          <div class="col-sm-5">
              <img src="${details.image}" class="card-img-top img-fluid p-3" alt="...">
          </div>
          <div class="col-sm-7 my-5">
              <h6 class="card-title text-primary lh-lg">Release Date: <span>${details.releaseDate}</span></h6>         
              <h6 class="card-sub-title text-primary lh-lg">Main feature: 
              1.${details.mainFeatures.chipSet}, 
              2.${details.mainFeatures.displaySize}, 
              3.${details.mainFeatures.memory}</h6>
              <h6 class="card-sub-title text-primary lh-lg">Sensor:${details.mainFeatures.sensors[0]}</h6>
              <h6 class="card-sub-title text-primary lh-lg">Others Info:</h6>
          </div> 
        </div>
     `;
     detailDiv.appendChild(div);
}



