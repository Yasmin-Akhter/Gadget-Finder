const loadPhone = () => {
    const searchText = document.getElementById('search-input').value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showPhone(data.data))
}
const showPhone = name => {
    console.log(name);

}