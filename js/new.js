`
       
<img src="${items.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h4 class="card-title">${items.name}</h4>
        <p class="card-text"><span >Release Date: </span>${items.releaseDate ? items.releaseDate : 'No release date found'}</p>
        <p class="card-text"><span>Storage: </span>${items.mainFeatures.storage}</p>
        <p class="card-text"><span>Chip set: </span>${items.mainFeatures.chipSet}</p>
        <p class="card-text"><span>Sensors: </span>${items.mainFeatures.sensors.slice(0, 7)}</p>
        <p class="card-text"><span>Bluetooth: </span>${items.others.Bluetooth}</p>
        
    </div>

`;