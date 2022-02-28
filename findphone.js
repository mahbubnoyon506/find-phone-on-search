
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
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card p-3">
    <img src="${phone.image}" class="card-img-top img-fluid shadow mb-5 bg-body rounded" alt="...">
    <div class="card-body">
      <h4 class="card-title text-center text-success">${phone.phone_name}</h4>
      <h6 class="card-sub-title text-center text-success">${phone.brand}</h6>
      <button onclick="moreDetails()" class="d-grid col-4 mx-auto btn btn-primary btn-sm">View Details</button>
    </div>
  </div>   
    `;
    phoneDiv.appendChild(div);
  })
}

 const moreDetails = phoneId =>{
   const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
   fetch(url)
   .then(res =>res.json())
   .then(data => showMoreDetails(data))
 }
const showMoreDetails = details =>{
  console.log(details)
}




