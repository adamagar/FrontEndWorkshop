import { BASE_URL } from "../assets/env.js";

// DOM ELEMENTS
const list = document.getElementById("list");
const btnGetUsers = document.getElementById("btnGetUsers");
const btnCreateUser = document.getElementById("btnCreateUser");
const btnUpdateUser = document.getElementById("btnUpdateUser");
const inputEl = document.getElementById("userId");

//EVENT LISTENERS
btnGetUsers.addEventListener("click", () => {
  fetchUsers();
});

btnCreateUser.addEventListener("click", () => {
  console.log("Create User");
  createUser();
});

btnUpdateUser.addEventListener("click", () => {
  const userId = inputEl.value;
  updateUser(userId);
});

// FUNCTIONS
const createUser = () => {
  const user = {
    createdAt: new Date(),
    name: "Adam Agar",
    avatar: "https://i.pravatar.cc/300",
    email: "adam@adam.com",
    password: "123456",
    roles: ["USER"],
  };
  fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      // content type is the type of data we are sending to the server,
      // if we are using POST methmod we must specify the content type
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      fetchUsers();
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateUser = (id) => {
  const user = {
    name: "Test Test",
  };

  fetch(`${BASE_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) =>
    response.json().then((data) => {
      fetchUsers()
    })
  );
};

const fetchUsers = () => {
  const fetchOptions = {
    method: "GET",
  };
  fetch(`${BASE_URL}/users`, fetchOptions)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      renderUsers(data);
    });
};

const renderUsers = (users) => {
  list.innerHTML = "";

  if (!users || users.length === 0 || users === "Not found") {
    return (list.innerHTML = "<li>No users found</li>");
  }

  users.forEach((user) => {
    list.innerHTML += `
            <li>
                <img src ="${user.avatar}" alt="${user.name}" title="${user.name}"/>
                <h3>${user.name}</h3>
                </li>`;
  });
};
