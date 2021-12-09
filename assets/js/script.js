 // Afficher  les valeurs.
let heure;
let minute;
let seconde;
let valeurchange;
let bouton = document.getElementById('bouton');
let message = document.getElementById('message');

function afficherheure(){
    // récupération des valeur des heures , minutes et secondes saisis avec la fonction .value.

    heure = parseInt(document.getElementById("valeur-heure").value);
    minute = parseInt(document.getElementById("valeur-minute").value);
    seconde = parseInt(document.getElementById("valeur-seconde").value);

    // Notre condition de rajouter une seconde à l'heure saisi.

    seconde = seconde +1;
    if(seconde == 60){
        seconde = 00;
        minute = minute + 1;
    }
    if(minute == 60){
        minute = 00;
        heure = heure + 1;
    }
    if(heure == 24){
        heure = 00;
    }
    
    valeurchange = heure + 'H ' + minute +'min '+ seconde + 'sec '; 
    message.innerHTML = "Il sera " + valeurchange 
}


    // Ajout d'un écouteur d'événement sur le bouton qui quand on clique  affichera l'heure qu'il sera dans une seconde ();
    bouton.addEventListener('click', afficherheure, false);