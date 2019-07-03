import { Injectable } from '@angular/core';

// Décorateur Injectable qui transforme notre classe
@Injectable({
  providedIn: 'root'
})
export class DivesService {
// States
//Dans cet exemple on imagine que le service web a déjà requêté le serveur web http
// et vient de récupérer les datas ci-dessous
stateDives= [
  {
    "id": 1,
    "name": "Trou Aux Biches - L'Epave du Stella Maru",
    "location": "Ile Maurice - Trou aux Biches - Nord/Ouest",
    "level": 2,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "latitude": -20.0363,
    "longitude": 57.544700000000034,
    "evaluation": [
        7,
        9,
        8
    ],
    "photo": "fond1.jpg",
    "photoB": "fondB1.jpg"
},
{
    "id": 2,
    "name": "Réserve COUSTEAU - KARUKERA",
    "location": "DOM GUADELOUPE - Basse Terre",
    "level": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "latitude": 16.1549167,
    "longitude": -61.7877314,
    "evaluation": [
        10,
        9,
        10
    ],
    "photo": "fond2.jpg",
    "photoB": "fondB2.jpg"
},
{
    "id": 3,
    "name": "Site magique",
    "location": "Saint Jean Cap Ferrat - 06",
    "level": 2,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "latitude": 43.68953,
    "longitude": 7.33298400000001,
    "evaluation": [
        7,
        9,
        8
    ],
    "photo": "fond3.jpg",
    "photoB": "fondB3.jpg"
},
{
    "id": 4,
    "name": "Site Agay",
    "location": "Agay - 83",
    "level": 3,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "latitude": 43.43501200000001,
    "longitude": 6.86294399999997,
    "evaluation": [
        10,
        9,
        10
    ],
    "photo": "fond4.jpg",
    "photoB": "fondB4.jpg"
},
{
    "id": 5,
    "name": "Ile de Cozumel",
    "location": "Cozumel - Mexique - Départ de Playa del VCarmen",
    "level": 2,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "latitude": 20.4317585,
    "longitude": -86.9202746,
    "evaluation": [
        7,
        9,
        8
    ],
    "photo": "fond5.jpg",
    "photoB":""
},
{
    "id": 6,
    "name": "Pink power diving",
    "location": "Cozumel - Mexique - Départ de Playa del VCarmen",
    "level": 8,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..",
    "latitude": 20.4317585,
    "longitude": -86.9202746,
    "evaluation": [
        7,
        9,
        8
    ],
    "photo": "fond6.jpg",
    "photoB": ""
}
]

// Méthodes === fonctionnalités

getDives(){
  return this.stateDives;
}

}
