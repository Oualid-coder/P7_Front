

à la racine du dossier  groupomaniaFront entrée la commande npm i pour installer les dépendances

Démarrer le server : cd backend + npm start

Démarrer le front : cd groupomaniaFront + npm start

_________________________________________


Back config :


Mettez vos informations de cluster dans /config/db.js
Créez le fichier .env dans /config/ dans les données suivantes
PORT=3000 ou 5000 votre port localhost
CLIENT_URL=http://localhost:3001 votre URL client
DB_USER_PASS=****** votre identifiant et mot de passe
TOKEN_SECRET= votre clé secrète aléatoire

___________________________________________

Front config :


Créez un fichier .env dans groupomaniaFront et créer l'URL du serveur :

REACT_APP_API_URL=http://localhost:3000/ l'url de votre serveur
