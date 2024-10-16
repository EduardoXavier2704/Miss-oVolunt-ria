if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "./login.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));
        
let logado = document.querySelector("#logado"); 
Logado.innerHTML = Olá `${userLogado.nome}`;

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "signin.html"
}

// ---------- VALIDAÇÃO FORMULÁRIO CONTATO ---------- //
let nomeInput = document.getElementById("nome");
let nomeCampo = document.querySelector('label[for="nome"]');
let nomeAjuda = document.getElementById("nome-ajuda");

let emailInput = document.getElementById("email");
let emailCampo = document.querySelector('label[for="email"]');
let emailAjuda = document.getElementById("email-ajuda");

let telefoneInput = document.getElementById("telefone");
let telefoneCampo = document.querySelector('label[for="telefone"]');
let telAjuda = document.getElementById("tel-ajuda");

if (nomeInput) {
    nomeInput.addEventListener("input", () => {
        const usuario = nomeInput.value;
        if (usuario.length >= 3) {
            nomeInput.classList.remove("error");
            nomeInput.classList.add("correct");
            nomeAjuda.style.display = "none";
        } else if (usuario.length === 0) {
            nomeInput.classList.remove("correct");
            nomeInput.classList.remove("error");
            nomeAjuda.style.display = "none";
        } else {
            nomeInput.classList.remove("correct");
            nomeInput.classList.add("error");
            nomeAjuda.style.display = "block";
        }
    });
}

emailInput.addEventListener("input", () => {
    const usuarioEmail = emailInput.value;
    if (usuarioEmail.includes('@')) {
        emailInput.classList.remove("error");
        emailInput.classList.add("correct");
        emailAjuda.style.display = "none";
    } else if (usuarioEmail.length === 0) {
        emailInput.classList.remove("correct");
        emailInput.classList.remove("error");
        emailAjuda.style.display = "none";
    } else {
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailAjuda.style.display = "block";
    }
});

telefoneInput.addEventListener("input", () => {
    const usuarioTel = telefoneInput.value;
    if (/^\d+$/.test(usuarioTel) && (usuarioTel.length === 11)) {
        telefoneInput.classList.remove("error");
        telefoneInput.classList.add("correct");
        telAjuda.style.display = "none";
    } else if (usuarioTel.length === 0) {
        telefoneInput.classList.remove("correct");
        telefoneInput.classList.remove("error");
        telAjuda.style.display = "none";
    } else {
        telefoneInput.classList.remove("correct");
        telefoneInput.classList.add("error");
        telAjuda.style.display = "block";
    }
});

// Mostrar popup de campo obrigatório no campo input
nomeInput.addEventListener('focus', () => {
    nomeCampo.classList.add('required-popup');
});

emailInput.addEventListener('focus', () => {
    emailCampo.classList.add('required-popup');
});

telefoneInput.addEventListener('focus', () => {
    telefoneCampo.classList.add('required-popup');
});

// Ocultar popup de campo obrigatório
nomeInput.addEventListener('blur', () => {
    nomeCampo.classList.remove('required-popup');
});

emailInput.addEventListener('blur', () => {
    emailCampo.classList.remove('required-popup');
});

telefoneInput.addEventListener('blur', () => {
    telefoneCampo.classList.remove('required-popup');
});

// Código envio do formulário
const contacts = document.querySelector('.contacts');
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio do formulário e a recarga da página

    const nome = document.getElementById('nome').value;
    const sobreNome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    if (nome.length < 3) {
        alert('Por favor, insira um nome com pelo menos 3 caracteres.');
        return;
    }

    if (!/^\d{11}$/.test(telefone)) {
        alert('Por favor, insira um telefone válido com 11 dígitos.');
        return;
    }

    // Validação do email: verifica se o formato está correto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    contactDiv.innerHTML = `
        <h3>Informações de Contato:</h3>
        <p>Nome: ${nome} ${sobreNome}</p>
        <p>Email: ${email}</p>
        <p>Telefone: ${telefone}</p>
        <p>Mensagem: ${mensagem}</p>
    `;

    // Adiciona o elemento de contato à seção de contatos
    contacts.appendChild(contactDiv);

    // Limpa os campos de entrada após o envio do formulário
    form.reset();
});