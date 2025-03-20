import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "la galerie", "/pages/galerie.html"),
    new Route("/signin","Connexion","/pages/auth/signin.html"),
    new Route("/signup","inscription","/pages/auth/signup.html"),
    new Route("/account","mon compte","/pages/auth/account.html"),
    new Route("/editPassworld","changement de mdp","/pages/auth/editPassworld.html"),
    new Route("/allResa","Reservation","/pages/reservations/allResa.html"),
    new Route("/reserver","Reserver","/pages/reservations/reserver.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";