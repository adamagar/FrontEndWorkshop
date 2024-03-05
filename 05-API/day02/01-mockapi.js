import {BASE_URL} from "../assets/env.js"
const ulEl = document.querySelector(".users-container");

const fetchUsers = () => {
  fetch(`${BASE_URL}/users`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // this function will render the users inside the ul
      renderUsers(data);
    });
};

const renderUsers = (users) => {
  users.forEach((user) => {
    ulEl.innerHTML += `
        <li>
            <img 
                src="${user.avatar}" 
                alt="${user.name}" 
                title="${user.name}"
        />
        <h3>${user.name}</h3>
    </li>`;
  });
};

fetchUsers();
