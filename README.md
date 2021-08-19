# PokemonSellingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Lancer le projet

Run npm i

then,

Run ng serve

## À l'attention des personnes vérifiant ce projet

Je n'ai pas réussi à utiliser les Ngrx comme je l'entendais. J'ai bloqué à la récupération des données au cours de
l'ajout des carts au panier. Malheureusement, je me suis retouvé avec cette erreur : ERROR TypeError: n is undefined
lorsqu'on clique sur le bouton Add dans la liste des cartes

J'ai cependant souhaité vous envoyer ce code afin d'avoir des pistes de reflexion/compréhension autour de celui-ci.
N'étant pas familier avec Ngrx, cela a été un bon apprentissage, mais j'ai peur que l'apprendre seul à ses limites (
sachant que j'ai fait peu de Réact dans le passé).

### Pistes d'améliorations possibles

Outre avec un système fonctionnel, j'ai constaté plusieurs soucis qui me dérangent.

#### Chargement des images

J'ai constaté lorsque j'alimentais ma liste que le chargement des images était assez laborieux et envoyais beaucoup de
requêtes (Logique en soit). L'idée d'amélioration possible autour de ça serait d'avoir la liste des Pokémons présent en
LazyLoading, ce qui permettrait de ne charger que les images en cours de visionnage. Cela peut poser des problèmes sur
une connectivité relativement limité, l'utilisateur ne verrais pas d'images à priori

#### Panier en mode bandeau

À l'origine, je souhaitais avoir un bandeau déroulant qui permettrait d'accéder au panier quelque soit l'endroit ou nous
nous trouvons sur l'appli. Cependant, les problèmes que j'ai eu avec l'implémentation de la récupération des données du
panier m'ont arréter dans cet ajout



