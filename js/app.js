const loadPhone = () => {
    const searchText = document.getElementById('search-input').value;
    document.getElementById('search-input').value = "";
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showPhone(data.data))
}
const showPhone = names => {
    //console.log(names);
    const searchResult = document.getElementById('search-result');
    document.getElementById('search-result').innerText = "";
    names.forEach(name => {
        //console.log(name);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
            <img src="${name.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${name.phone_name}</h5>
                    <p class="card-text">Brand: ${name.brand}</p>
                    <button onclick="showDetails('${name.slug}')">Details</button>
                </div>
        </div>
        `;

        searchResult.appendChild(div);
    });

}
const showDetails = (id) => {

    const url = ` https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDetailsInner(data.data))

}
const showDetailsInner = items => {
    console.log(items);
    const details = document.getElementById('details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
       
            <img src="${items.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${items.name}</h5>
                    <p class="card-text"><span>Release Date:</span>${items.releaseDate}</p>
                    
                </div>
        
        `;
    details.appendChild(div);
}

