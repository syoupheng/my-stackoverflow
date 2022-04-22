# Groupe de manora_m 866332

## 1) Lancement de l'environnement Docker

Vous pouvez lancer docker avec cette commande :

`docker-compose up`

Une fois que les containers sont lancés vous pouvez accéder au front sur le port 3000 et à la base de données sur le port 3307. Pour le lancement du back-end il faut se connecter au container pli_back avec cette commande :

`docker exec -it pli_back bash`

Maintenant que vous êtes connecté au container vous allez pouvoir construire la base de données en lançant les migrations avec :

`python3 mysite/manage.py migrate`

Puis peupler les tables en executant le script **main_copy.py** :

`python3 main_copy.py`

Nous pouvons enfin lancer le serveur de développement Django avec :

`python3 mysite/manage.py runserver 0.0.0.0:8000`