// Maquette de test : les films sont des exemples fixes, sans appel à l'IA.
const HUMEURS = ["Bonne humeur", "Fatigué·e", "Triste", "Envie de frissons", "Romantique", "Envie de réfléchir", "Envie de rire"];
const TEMPS = ["< 90 min", "90-120 min", "> 2 h", "Peu importe"];
const GENRES = ["Comédie", "Drame", "Thriller", "Romance"];
const CONTEXTES = ["Seul·e", "Couple", "Entre amis", "Famille"];
const FILMS = [
  { titre: "Intouchables", infos: "2011 · 112 min · Comédie dramatique", resume: "Un aristocrate tétraplégique engage comme aide à domicile un jeune homme de banlieue, et leur rencontre change leurs deux vies.", pourquoi: "Une histoire touchante et drôle, facile à suivre après une longue journée." },
  { titre: "La Famille Bélier", infos: "2014 · 105 min · Comédie dramatique", resume: "Seule entendante d'une famille sourde, Paula découvre un talent pour le chant qui pourrait l'éloigner des siens.", pourquoi: "Un récit chaleureux, assez court pour finir avant 23 h." },
  { titre: "Paddington 2", infos: "2017 · 103 min · Comédie", resume: "L'ours Paddington cherche à offrir un livre rare à sa tante, mais il est accusé à tort de l'avoir volé.", pourquoi: "Un film doux et plein d'humour, à partager entre amis." },
  { titre: "Le Dîner de cons", infos: "1998 · 80 min · Comédie", resume: "Un éditeur invite un homme naïf à un dîner moqueur, mais la soirée tourne à la catastrophe pour lui.", pourquoi: "Une comédie courte et rythmée, qui demande peu d'effort." },
  { titre: "Le Prénom", infos: "2012 · 109 min · Comédie", resume: "Un dîner entre proches dégénère lorsqu'un futur père annonce le prénom choisi pour son enfant.", pourquoi: "Des dialogues vifs, parfaits pour rire ensemble." },
  { titre: "Les Émotifs anonymes", infos: "2010 · 80 min · Comédie romantique", resume: "Deux grands timides, réunis par leur passion du chocolat, tentent de s'avouer leurs sentiments.", pourquoi: "Une histoire légère et tendre pour finir la journée en douceur." },
];

const $ = id => document.getElementById(id);
const etat = { humeur: null, genres: new Set(), temps: "90-120 min", contexte: "Entre amis", refuses: new Set(), debut: 0, film: null };

function afficher(ecran, cible) {
  for (const id of ["ecran-accueil", "ecran-filtres", "ecran-fiche"]) $(id).hidden = id !== ecran;
  (cible || document.querySelector(`#${ecran} h1`)).focus();
}

function creerBoutons(conteneur, valeurs, classe, estActif, auClic) {
  const boite = $(conteneur);
  boite.replaceChildren();
  for (const valeur of valeurs) {
    const bouton = document.createElement("button");
    bouton.type = "button";
    bouton.className = classe;
    bouton.textContent = valeur;
    bouton.setAttribute("aria-pressed", estActif(valeur));
    bouton.addEventListener("click", () => {
      auClic(valeur);
      for (const b of boite.children) b.setAttribute("aria-pressed", estActif(b.textContent));
    });
    boite.append(bouton);
  }
}

function filmsVisibles() {
  return FILMS.filter(f => !etat.refuses.has(f.titre)).slice(etat.debut, etat.debut + 3);
}

function afficherFilms() {
  const liste = filmsVisibles();
  $("titre-resultats").textContent = `${liste.length} film${liste.length > 1 ? "s" : ""} pour toi`;
  $("films").replaceChildren(...liste.map(film => {
    const carte = document.createElement("article");
    carte.className = "film";
    carte.innerHTML = '<div class="affiche" aria-hidden="true">Affiche</div><div class="texte"><h3></h3><p class="infos"></p><p><strong>Pourquoi ce film :</strong> <span></span></p><button class="ouvrir" type="button"></button></div>';
    carte.querySelector("h3").textContent = film.titre;
    carte.querySelector(".infos").textContent = film.infos;
    carte.querySelector("span").textContent = film.pourquoi;
    const ouvrir = carte.querySelector(".ouvrir");
    ouvrir.textContent = "Voir la fiche";
    ouvrir.setAttribute("aria-label", `Voir la fiche de ${film.titre}`);
    ouvrir.addEventListener("click", () => ouvrirFiche(film));
    return carte;
  }));
}

function ouvrirFiche(film) {
  etat.film = film;
  $("fiche-titre").textContent = film.titre;
  $("fiche-infos").textContent = film.infos;
  $("fiche-resume").textContent = film.resume;
  $("fiche-pourquoi").textContent = film.pourquoi;
  $("confirmation").textContent = "";
  afficher("ecran-fiche");
}

function autreProposition() {
  const restants = FILMS.filter(f => !etat.refuses.has(f.titre)).length;
  etat.debut = etat.debut + 3 < restants ? etat.debut + 3 : 0;
  afficherFilms();
  afficher("ecran-filtres", $("titre-resultats"));
}

creerBoutons("humeurs", HUMEURS, "humeur", v => etat.humeur === v, v => {
  etat.humeur = v;
  $("erreur-humeur").textContent = "";
});
creerBoutons("puces-temps", TEMPS, "puce", v => etat.temps === v, v => { etat.temps = v; });
creerBoutons("puces-contexte", CONTEXTES, "puce", v => etat.contexte === v, v => { etat.contexte = v; });
creerBoutons("puces-genres", GENRES, "puce", v => etat.genres.has(v), v => {
  if (etat.genres.has(v)) etat.genres.delete(v);
  else if (etat.genres.size < 3) etat.genres.add(v);
  $("erreur-genres").textContent = "";
});

$("trouver").addEventListener("click", () => {
  if (!etat.humeur) {
    $("erreur-humeur").textContent = "Choisis d'abord une humeur dans la liste.";
    return;
  }
  $("rappel-humeur").textContent = etat.humeur;
  afficher("ecran-filtres");
});

let analyse;
$("voir").addEventListener("click", () => {
  clearTimeout(analyse);
  $("statut").textContent = "";
  if (etat.genres.size === 0) {
    $("resultats").hidden = true;
    $("erreur-genres").textContent = "Choisis au moins un genre.";
    return;
  }
  $("resultats").hidden = true;
  $("statut").textContent = "Analyse de tes choix…";
  analyse = setTimeout(() => {
    $("statut").textContent = "";
    afficherFilms();
    $("resultats").hidden = false;
    $("titre-resultats").focus();
  }, 1000);
});

$("retour-accueil").addEventListener("click", () => afficher("ecran-accueil"));
$("retour-films").addEventListener("click", () => afficher("ecran-filtres", $("titre-resultats")));
$("autre").addEventListener("click", autreProposition);
$("autre-fiche").addEventListener("click", autreProposition);
$("jaime").addEventListener("click", () => {
  $("confirmation").textContent = "Bon film ! Ce choix est noté pour ce soir.";
});
$("refuser").addEventListener("click", () => {
  etat.refuses.add(etat.film.titre);
  etat.debut = 0;
  afficherFilms();
  afficher("ecran-filtres", $("titre-resultats"));
});
