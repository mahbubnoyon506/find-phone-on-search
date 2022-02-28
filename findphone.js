console.log('Link connected');
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
  // console.log(phones);
  const phoneDiv = document.getElementById('phone-wraper');
  phones.forEach(phone =>{
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
      <div class="card h-100">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>    
    
    `
    phoneDiv.appendChild(div);
  })
}