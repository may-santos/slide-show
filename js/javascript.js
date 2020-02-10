// users

//var users = ["https://robohash.org/abasperioresut.bmp?size=200x200&set=set1", "https://robohash.org/estdignissimostemporibus.bmp?size=200x200&set=set1", "https://robohash.org/liberoametillo.png?size=200x200&set=set1"]

var users = [
    {
        "email": "bzumfelde0@time.com",
        "first_name": "Benjamin",
        "gender": "Male",
        "id": 1,
        "ip_address": null,
        "last_name": "Zum Felde",
        "photo": "https://robohash.org/abasperioresut.bmp?size=200x200&set=set1"
    },
    {
        "email": "rdarrigrand1@soup.io",
        "first_name": "Randolf",
        "gender": "Male",
        "id": 2,
        "ip_address": null,
        "last_name": "Darrigrand",
        "photo": "https://robohash.org/estdignissimostemporibus.bmp?size=200x200&set=set1"
    },
    {
        "email": "rgason2@qq.com",
        "first_name": "Rad",
        "gender": "Male",
        "id": 3,
        "ip_address": "20.63.40.137",
        "last_name": "Gason",
        "photo": "https://robohash.org/liberoametillo.png?size=200x200&set=set1"
    },
    {
        "email": "lmonier3@blogspot.com",
        "first_name": "Lynnet",
        "gender": "Female",
        "id": 4,
        "ip_address": null,
        "last_name": "Monier",
        "photo": "https://robohash.org/consecteturquaeratrepudiandae.png?size=200x200&set=set1"
    },
    {
        "email": "rhradsky4@cargocollective.com",
        "first_name": "Ringo",
        "gender": "Male",
        "id": 5,
        "ip_address": null,
        "last_name": "Hradsky",
        "photo": "https://robohash.org/explicaborationemagnam.png?size=200x200&set=set1"
    },
    {
        "email": "jsissland5@amazonaws.com",
        "first_name": "Jecho",
        "gender": "Male",
        "id": 6,
        "ip_address": "122.53.56.15",
        "last_name": "Sissland",
        "photo": null
    },
    {
        "email": "gkerford6@spiegel.de",
        "first_name": "Gwynne",
        "gender": "Female",
        "id": 7,
        "ip_address": null,
        "last_name": "Kerford",
        "photo": "https://robohash.org/aututvelit.jpg?size=200x200&set=set1"
    },
    {
        "email": "taxtonne7@free.fr",
        "first_name": "Tulley",
        "gender": "Male",
        "id": 8,
        "ip_address": null,
        "last_name": "Axtonne",
        "photo": "https://robohash.org/suscipitreiciendisa.png?size=200x200&set=set1"
    }
]

var pos = 0
var pos_perfil = 0

const slideShow = () => {
    var img = document.getElementById("foto")
    if (users[pos].photo == null) img.src = "https://interfacetreinamentos.com.br/wp-content/uploads/2016/04/img-profile-default.jpg"
    else img.src = users[pos].photo
    email.innerText = users[pos]["email"]
    nome.innerText = users[pos]["first_name"]
    sobrenome.innerText = users[pos]["last_name"]
    genero.innerText = users[pos]["gender"]
}

const proximo = () => {

    if (pos + 1 == users.length) {
        pos = 0
    } else {
        pos++
    }

    slideShow()
   
}

const anterior = () => {
    if (pos == 0) {
        pos = users.length - 1
    } else {
        pos--
    }
    slideShow()
}

const start = () => {
    intervalo = setInterval(() => {
        proximo()
    }, 2000);
}

const stop = () => {
    if (intervalo) {
        clearInterval(intervalo)
    }
}

const proximoPerfil = () => {
    if(pos_perfil + 1 == users.length) {
        alert("não há mais usuários");
    } else {
        var div_perfil = document.createElement("div")
        var imagem = document.createElement("img")
        div_perfil.id = "info-perfis"
        imagem.className = "img"

        var info_perfis = document.getElementById("card");
        info_perfis.appendChild(div_perfil)
        div_perfil.appendChild(imagem)

        var email = document.createElement("p")
        var nome = document.createElement("p")
        var genero = document.createElement("p")
        var sobrenome = document.createElement("p")

        div_perfil.appendChild(email)
        div_perfil.appendChild(nome)
        div_perfil.appendChild(genero)
        div_perfil.appendChild(sobrenome)

        if (users[pos_perfil+1].photo == null) imagem.src = "https://interfacetreinamentos.com.br/wp-content/uploads/2016/04/img-profile-default.jpg"
        else imagem.src = users[pos_perfil+1].photo

        email.innerText = users[pos_perfil+1]["email"]
        nome.innerText = users[pos_perfil+1]["first_name"]
        sobrenome.innerText = users[pos_perfil+1]["last_name"]
        genero.innerText = users[pos_perfil+1]["gender"]

        pos_perfil++
    }
}

document.body.onload = slideShow

document.getElementById("foto").onmouseenter = stop
document.getElementById("foto").onmouseleave = start

document.getElementById("botao-anterior").onclick = anterior
document.getElementById("botao-proximo").onclick = proximo
document.getElementById("proximo-perfil").onclick = proximoPerfil
document.getElementById("start").onclick = start
document.getElementById("stop").onclick = stop
