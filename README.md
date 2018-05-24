# visuel-Yser
html et css sur la base des mockups de nicolas


CHEMIN DE LA DEMO:

1.
vue: dashboard-user, non connecté
attention:

actions -> click sur l'onglet 'mes droits
besoin:

2.
vue: page 'mes droits'
attention: le texte de la page n'est pas fait !

actions -> click sur l'onglet 'permission hub'
besoin:

3.
vue: page 'en construction'
attention:

actions -> click sur l'onglet 'les entreprises qui ...'
besoin:

4.
vue: page des entreprises NON CONNECTE
attention: non connecté

actions -> click sur l'onglet la miniature YSER (en haut à gauche)
besoin:

5.
vue: dashboard_user deconnecté
attention:

actions -> click sur 's'identifier', puis créer un copmte
besoin:

6.
vue: popup créer un compte
attention:

actions -> remplir les champs et valider
besoin: attention aux champs, on mets quel nom/prenom/mail... ?
        lien vers le dashboard_user CONNECTE a rajouter

7.
vue: dashboard_user CONNECTE
attention: CONNECTE

actions -> click sur l'onglet 'les entreprises qui ...'
besoin: 

8.
vue: page des entreprises
attention: enlever les entreprises 'deja en interactions avec vous'

actions -> click sur l'entreprise [???] (laquelle ?)
besoin:

9.
vue: User_companies_data
attention: pas de demandes en cours

actions -> click sur exercer mes droits, puis recuperer mes donnees chez une entreprise
besoin: creation du lien vers User_data_modify_2

10.
vue: User_data_modify2
attention: changer l'entreprise si il faut
            changer le header (acces a la place de rectification)

actions -> ecrire un mesage (lequel), puis clique sur envoyer, redirection vers le dashboard
besoin: 
	numero client: 1234
	Message: test

11.
vue: dashboard_user connecté
attention: 

actions -> deconnexion
besoin:

12.
vue: dashboard_user deconnecté
attention: 

actions -> connexion compte DPO, redirection vers son dashboard
besoin: attention au lien

13.
vue: dashboard_DPO
attention: 1 demande dans le tableau du dashboard

actions -> clique sur onglet 'demande'
besoin:

14.
vue: page 'demande', tableau 'demande non traitee' avec une demande
attention: onglet demande traite present mais on ne clique pas dessus

actions -> on clique sur la demande
besoin: lien

15.
vue: ficheDemandeDpo
attention: memes infos que celle de la creation (nom du demandeur, date/heure de la creation a cacher ?) ...

actions -> on drag and drop un document, on clique sur valider, redirection vers le dashboard_DPO
besoin: preparer un document a l'avance

16.
vue: dashboard_DPO sans aucune demande non lue
attention: ca doit etre un 'nouveau' dashboard

actions -> on se deconnecte, redirection vers dashboard_user NON CONNECTE
besoin: 'nouveau' dashboard car la prochaine connexion renvoie vers le profil user du debut

17.
vue: dashboard_user NON CONNECTE
attention: 

actions -> click sur s'identifier et on se connecte
besoin: creer un nouveau dashboard pour gerer la redirection du bouton 'se connecter'

18.
vue: dashboard_user CONNECTE
attention: pas le meme qu'au debut pour la gestion des liens

actions -> click sur l'inglet 'mes demandes'
besoin: 

19.
vue: page 'mes demandes' avec une seule demande
attention: attention aux infos de la demande affichée

actions -> click sur la demande
besoin: lien

20.
vue: ficheDemandeUser
attention: attention aux infos affichée

A FAIRE:
6. quoi mettre dans les champs
6. lien vers dashboard_user CONNECTE

8. on clique sur quelle entreprise
8. vider la liste des entreprises qui ont deja interagis avec nous

9. lien vers la bonne entreprise
9. infos de l'entreprise correctes (logo, nom...)
9. pas de demandes en cours
9. lien de 'recuperer mes donnees chez une entreprise' vers User_data_modify2

10. changer les infos de l'entreprise si necessaire (logo, nom...)
10. changer le header
10. on ecrit quel message ?
10. lien vers le dashboard_user CONNECTE

11. lien de deconexxion vers dashboard_user NON CONNECTE

12. lien de 'connexion' vers dashboard_dpo
12. quel identifiant pour le dpo (en vrai osef, ca apparait nulle part)

13. vider le dashboard pour n'avoir qu'une seule demande, avec les infos qui concorde (nom, mail...)
13. faire la page dashboard_dpo

14. faire la page 'demandes', avec le meme tableau, plus un lien de la demande vers 'ficheDemandeDPO'

15. faire la page 'ficheDemandeDPO' avec les bonnes infos (nom, mail...), comment faire pour les dates/heures ?
15. preparer un doc à drag&drop
15. lien du bouton valider vers un nouveau dashboard_dpo avec un tableau vide de demandes

16. faire un lien du bouton deconnecte vers un nouveau dashboard_user NON CONNECTE

17. faire un lien de ce nouveau dashboard de 'connexion' vers un nouveau dashboard_user CONNECTE

18. faire un lien de l'onglet 'mes demandes' vers la liste des demandes

19. vider le tableau pour ne faire apparaitre qu'une seule demande (avec les bonnes infos)
19. fair eun lien de la demande vers 'ficheDemandeUser'

20. faire la page ficheDemandeUser(copie de ficheDemandeDPO a qq point pres), avec les infos appropriées.
