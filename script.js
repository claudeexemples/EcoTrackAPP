const API_URL = "https://ecotrackapi.onrender.com";

async function registerUser() {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: "teste64bits",
            email: "teste64@example.com",
            password: "123456"
        })
    });
    const data = await response.json();
    document.getElementById("output").innerText = JSON.stringify(data, null, 2);
}

async function loginUser() {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "teste64@example.com",
            password: "123456"
        })
    });
    const data = await response.json();
    localStorage.setItem("token", data.token);
    document.getElementById("output").innerText = JSON.stringify(data, null, 2);
}

async function getActions() {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/actions`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` }
    });
    const data = await response.json();
    document.getElementById("output").innerText = JSON.stringify(data, null, 2);
}

async function createAction() {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/actions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            title: "Economizei energia",
            description: "Apaguei todas as luzes ao sair",
            category: "Energia",
            points: 10
        })
    });
    const data = await response.json();
    document.getElementById("output").innerText = JSON.stringify(data, null, 2);
}