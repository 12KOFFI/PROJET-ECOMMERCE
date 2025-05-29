# ECOMMERCE

Ce projet est une application e-commerce complète développée avec React pour le frontend et Node.js/Express pour le backend. Elle permet aux utilisateurs de parcourir des produits, de les ajouter au panier, de s’inscrire, de se connecter et de passer commande.

## Fonctionnalités

- Parcours et recherche de produits
- Affichage détaillé des produits avec gestion des tailles et images
- Ajout au panier et gestion du panier
- Authentification (inscription et connexion)
- Passage de commande
- Interface utilisateur responsive

## Technologies utilisées

- **Frontend** : React, React Router, Context API, Axios, Tailwind CSS
- **Backend** : Node.js, Express, MongoDB (à adapter selon votre stack)
- **Notifications** : react-toastify

## Installation

1. **Cloner le dépôt**
   ```bash
   git clone <url-du-repo>
   cd ECOMMERCE
   ```

2. **Configurer les variables d’environnement**
   - Créez un fichier `.env` dans le dossier `frontend` et ajoutez :
     ```
     VITE_BACKEND_URL=http://localhost:5000
     ```

3. **Installer les dépendances**
   - Frontend :
     ```bash
     cd frontend
     npm install
     ```
   - Backend :
     ```bash
     cd ../backend
     npm install
     ```

4. **Lancer le projet**
   - Backend :
     ```bash
     npm start
     ```
   - Frontend :
     ```bash
     cd ../frontend
     npm run dev
     ```

## Structure du projet

```
ECOMMERCE/
├── backend/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── context/
│   └── public/
└── README.md
```

## Personnalisation

- Ajoutez vos produits dans la base de données ou modifiez les endpoints selon vos besoins.
- Personnalisez le style avec Tailwind CSS ou votre framework préféré.

## Auteurs

- [Votre nom ou pseudo]

## Licence

Ce projet est open-source et disponible sous licence MIT.
