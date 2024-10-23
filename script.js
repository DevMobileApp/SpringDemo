// Sample JSON data
const jsonData = [
    { "id": 1, "name": "John Doe", "age": 30, "image": "https://cdn.prod.website-files.com/65943d23dc44e6ce92eb6b67/65fc9f534c1398dac499304d_commercial_search-p-1600.jpg" },
    { "id": 2, "name": "Jane Smith", "age": 25, "image": "https://via.placeholder.com/150" },
    { "id": 2, "name": "Jane Smith", "age": 25, "image": "https://via.placeholder.com/150" },
    { "id": 2, "name": "Jane Smith", "age": 25, "image": "https://via.placeholder.com/150" },
    { "id": 2, "name": "Jane Smith", "age": 25, "image": "https://via.placeholder.com/150" },
    { "id": 2, "name": "Jane Smith", "age": 25, "image": "https://via.placeholder.com/150" },
    { "id": 2, "name": "Jane Smith", "age": 25, "image": "https://via.placeholder.com/150" },
    { "id": 2, "name": "Jane Smith", "age": 25, "image": "https://via.placeholder.com/150" },
    { "id": 2, "name": "Jane Smith", "age": 25, "image": "https://via.placeholder.com/150" },
    { "id": 2, "name": "Jane Smith", "age": 25, "image": "https://via.placeholder.com/150" },
    { "id": 2, "name": "Jane Smith", "age": 25, "image": "https://via.placeholder.com/150" },
    { "id": 3, "name": "Sam Green", "age": 28, "image": "https://cdn.prod.website-files.com/65943d23dc44e6ce92eb6b67/65fc9f534c1398dac499304d_commercial_search-p-1600.jpg" }
];

// Function to bind JSON data to the user list
function bindDataToList(data) {
    const userList = document.getElementById('userList');

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'user-card';

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>ID: ${item.id}</p>
            <p>Age: ${item.age}</p>
        `;

        userList.appendChild(card);
    });
}

// Call the function to bind data on page load
bindDataToList(jsonData);
