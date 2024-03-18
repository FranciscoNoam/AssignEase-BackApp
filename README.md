# README de la structure du  Back office Node js

# I. Voici la structure du projet BackOffice Nodejs 
    
    Projet /
   
    .   src 
        .   . / controllers/
        .   . / database/
        .   . / models/
    .   / views/
    .   server.js
    .   .env
    .   .env.example
    .   .gitignore
    .   package.json
    .   README.md


###  Explication de la structure du projet 

 
 ###### 7.  projet/src/:

    """
        C'est la gestion des fonctionnements de l'ensemble du projet
    """    

# II. +++++++++++++++++++++++++++ Explication des sous dossiers dans le projet/src/ ++++++++++++++++:


 ###### 1. projet/ src/ controllers

    """
        C'est la gestion des fonctionnalités qui seront appeler dans l'API dans 'projet/ src/ route et dans projet/ server.js'
    """

  ###### 2. projet/ src/ database

    """
         C'est la gestion de connection à la base de donnée MongoDB
    """

  ###### 3. projet/ src/ models

    """
      C'est la gestion des collections à la base de donnée MongoDB

    """




# III. +++++++++++++++++++++++++++ Liste des commandes pour lancer le projet +++++++++++++++++++++++++++


  #  1. Configuration du fichier .env:
    
        Veuillez remplir tous les champs dans le fichier (voir un exemplaire dans '.env.example') pour la configuration de la base de donnée

 #  2. Installation des environement:

        Pour installer les dépendances du projet, veuillez lancer cette commande pour la première fois :

     ==>   npm install  

 #  2. Lancement de l'application local:

        Pour lancer l'application, veuillez lancer cette commande :

    ==>    npm start ou 
    ==>    node server.js
