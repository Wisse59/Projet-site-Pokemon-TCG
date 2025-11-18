document.addEventListener('DOMContentLoaded', () => {
    //recuperation du nom anglais (dans la page html)
    const en_name = document.getElementById("en_name").innerHTML;
    //recuperation du numero "actuel" ex:1 pour bulbizarre

    fetch(`https://pokeapi.co/api/v2/pokemon/${en_name}`)
    .then(response => response.json())
    .then(data => {
        const numero = data.id;
      

        //remplissage du lien vers precedent
        if(numero == 1){
            const link_place = document.getElementById("precedent");
            link_place.innerHTML = "<a></a>";
        }
        else{
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${numero-1}`)
            .then(response => response.json())
            .then(data => {
                const link_place = document.getElementById("precedent");
                const language = data.names;
                link_place.innerHTML = `<a class="link" href="${data.name}.html">${language[4].name}</a>`            })
            .catch(erreur =>{
                const content = document.getElementById("precedent");
                suivant.innerHTML = `<a>lien indisponible</a>`
            })
        }

        //remplissage du lien vers suivant
        if(numero == 1025){
            const link_place = document.getElementById("suivant");
            link_place.innerHTML = "<a></a>";
        }
        else{
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${numero+1}`)
            .then(response => response.json())
            .then(data => {
                const link_place = document.getElementById("suivant");
                const language = data.names;
                link_place.innerHTML = `<a class="link" href="${data.name}.html">${language[4].name}</a>`
            })
            .catch(erreur =>{
                const content = document.getElementById("suivant");
                suivant.innerHTML = `<a>lien indisponible</a>`
            })
        }
        //recuperation des sprites

        const sprite_f = document.getElementById('front');
        const sprite_b = document.getElementById('back');
        if (data.sprites.back_default == "null"){
            sprite_b.innerHTML = `<img src="../pictures/erreur.png"></img>`;
        }else{
            sprite_b.innerHTML = `<img class="sprite_picture" src=${data.sprites.back_default}></img>`
        }
        sprite_f.innerHTML = `<img class="sprite_picture" src=${data.sprites.front_default}></img>`

    
        //couleur de fond
        const type = data.types

        if (type[0].type.name == "grass"){
            
            document.body.style.background = 'green';
        }
        if (type[0].type.name == "fire"){
            document.body.style.background = 'red';
        }
        if (type[0].type.name == "normal"){
            document.body.style.background = 'lightgrey';
        }
        if (type[0].type.name == "rock"){
            document.body.style.background = 'chocolate';
        }
        if (type[0].type.name == "electric"){
            document.body.style.background = 'yellow';
        }
        if (type[0].type.name == "bug"){
            document.body.style.background = 'lightgreen';
        }
        if (type[0].type.name == "dark"){
            document.body.style.background = 'darkslategray';
        }
        if (type[0].type.name == "fairy"){
            document.body.style.background = 'lightpink';
        }
        if (type[0].type.name == "flying"){
            document.body.style.background = 'aqua';
        }
        if (type[0].type.name == "ground"){
            document.body.style.background = 'sandybrown';
        }
        if (type[0].type.name == "poison"){
            document.body.style.background = 'purple';
        }
        if (type[0].type.name == "steel"){
            document.body.style.background = 'grey';
        }
        if (type[0].type.name == "water"){
            document.body.style.background = 'blue';
        }
        if (type[0].type.name == "psychic"){
            document.body.style.background = 'deeppink';
        }
        if (type[0].type.name == "ice"){
            document.body.style.background = 'cyan';
        }
        if (type[0].type.name == "ghost"){
            document.body.style.background = 'blueviolet';
        }
        if (type[0].type.name == "fighting"){
            document.body.style.background = 'brown';
        }
        if (type[0].type.name == "dragon"){
            document.body.style.background = 'darkblue';
        }


    })
    .catch(error => {
        const content = document.getElementById('erreur');
        content.innerHTML = `<img src="../pictures/erreur.png"></img>`;
        const bouton = document.getElementById("cri");
        bouton.innerHTML = ``
        document.body.style.background = "lightgrey"

    });
    


    //test
    
});