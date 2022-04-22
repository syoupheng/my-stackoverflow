#Vous devez installer Python 3.9.7 , 
#pip 21.2.4 from /usr/local/lib/python3.9/site-packages/pip (python 3.9) ,
#et mysql-connector via la commande pip install mysql-connector(....)
# et docker derniere version 
# coding: utf-8

import mysql.connector
import time
import os
import sys
import subprocess
from django.contrib.auth.hashers import make_password
import bcrypt
from django.conf import settings

print("On se connecte a la base de données")
try:
    # conn = mysql.connector.connect(host="db", port="3306",
    #                                     user="root", password="root",
    #                                     database="PLI_db")
    conn = mysql.connector.connect(host="localhost", port="3306",
                                        user="root", password="",
                                        database="pli_db")

    cursor = conn.cursor()

    print("On remplie les tables de la base de données")
    #`forum_user`
    ####################

    settings.configure(PASSWORD_HASHERS = ['django.contrib.auth.hashers.BCryptSHA256PasswordHasher'])
    reference = [
            (None, make_password("test1", salt=bcrypt.gensalt()), 2, "2021-11-12 10:01:00", 1, "Michel", "Rodriguez", "Gonzales", "michoudu34@google.com", 1, 1, "2015-11-20 10:13:00"),
            (None, make_password("test2", salt=bcrypt.gensalt()), 1, "2021-11-12 10:01:00", 0, "HelloSandra", "Sandra", "Gonzales", "sand.rat@google.com", 0, 1, "2016-11-20 12:01:00"),
            (None, make_password("wakandaforever", salt=bcrypt.gensalt()), 1, "2021-11-12 10:01:00", 0, "Rabbit", "Quentin", "Ramirez", "ramimi@google.com", 0, 0, "2016-09-21 10:01:00"),
            (None, make_password("lionnel", salt=bcrypt.gensalt()), 1, "2021-11-12 10:01:00", 0, "WhiteRabbit", "White", "Rabbit", "neosauvetoi@google.com", 0, 1, "2019-04-29 10:01:00"),
            (None, make_password("bozoleclown", salt=bcrypt.gensalt()), 1, "2021-11-12 10:01:00", 0, "JackyEtMichel", "Jacky", "Michel", "attentionauentorse@google.com", 0, 0, "2019-07-23 10:01:00"),
            (None, make_password("coucou", salt=bcrypt.gensalt()), 1, "2021-11-12 10:01:00", 0, "Martineuu", "Martine", "TrompeDeFalope", "martineF@google.com", 0, 0, "2021-11-10 10:01:00"),
            (None, make_password("root", salt=bcrypt.gensalt()), 1, "2021-11-12 10:01:00", 0, "darksasuke", "miguele", "Lospoyos", "pouletfrit@google.com", 0, 1, "2021-11-12 10:01:00")
            ]
    modele = "INSERT INTO `PLI_db`.`forum_user` ( id, password, role, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    cursor.executemany( modele, reference)

    conn.commit()

    #`forum_topic`
    ####################
    
    reference = [
            ( None, "using org.eclipse.equinox.simpleconfigurator vs just putting all bundles into osgi.bundles", "I am upgrading our Equinox from 4.7.3a to 4.21 in our server application. I have learned the hard way that org.eclipse.update.configurator no longer does automatically install bundles on application startup (1). It seems my choices are either start using p2 repositories or start using SimpleConfigurator. SimpleConfigurator seems easier to implement in my case. One thing I do not understand, what does SimpleConfigurator offer me over just enumerating all bundles in osgi.bundles property? It requires bundles.info file anyway which is also a static list of bundles. I will have to generate the bundles list one way or another. Can I do away with any configurator?", "2021-12-09 15:31:32", None, "2021-12-09 15:31:32", "2"),
            ( None, "How to keep a Task executing when the app enter in background Xamarin Forms", "There's any way to keep a Task that already started to execute, keep executing if the app enter in background? Thanks for helping", "2021-12-09 15:31:32", None, "2021-12-09 15:31:32", "2"),
            ( None, "VBA / PROTECTED CELLS PREVENTING MACROS FUNCTIONNING", "I'm a beginner . Learnt a bit of VBA only for improving an xls file. I'm nearly finished but realize that protecting cells seems to be a problem for my macros to operate. So I have inserted a unprotect/protect function but still not working (i'm not confortable with where to place it). I copy/paste hereunder. Many thanks for your help.:-) Set myRange = Union(Range('C8'), Range('C10:C11'), Range('C13:C17'), Range('D16:D17'), Range('B22:D22'), Range('B30'), Range('B35')) For Each cell In myRange If IsEmpty(cell.Value) = True Then Cancel = True MsgBox ('Vérifiez les cellules non remplies') End If Next cell ActiveSheet.Protect '350+' ActiveWorkbook.Save End Sub ", "2021-12-26 15:31:32", None, "2021-12-26 15:31:32", "3"),
            ( None, "TextBox Zeichenanzahl überwachen, bei erreichen von Anzahl X Inhalt prüfen auf Übereinstimmung mit XY wenn falsch MsgBox anzeigen", "ich möchte eine TextBox in einer Powerpoint befüllen lassen. In die Box soll als Beispiel 123.456 oder 123456 eingegeben werden. Wenn die Menge an Zeichen erreicht ist als einmal 6 oder 7, dann soll der Inhalt überprüft werden. Wenn der Inhalt nicht 123.456 oder 123456 entspricht, dann MsgBox mit 'Bitte 123.456 eintragen) Bitte um Hilfe. ", "2021-12-21 15:31:32", None, "2021-12-21 15:31:32", "4"),
            ( None, "Filling a MultipleWidget from database", "I'm trying to get a list of weekday options into a PositiveSmallIntegerField in Django and back to the form. I found a very similar question from the year 2011 which covers the process of having a MultiSelect widget with weekday options, Representing a multi-select field for weekdays in a Django model. Also, there has been an additional question regarding the reverse process, Custo widget based on CheckBoxMultipleSelect for weekdays in Django by user gabn88, which sadly has been deleted since. I tried the approach with the BitChoices class in the first post, and the class itself seems to work. However, I fail to put the selection back to something I can fill the form with. At least that's what I think judging from the error message on my view: Select a valid choice. ['2', '16', '128'] is not one of the available choices. Can anybody help me out, please?", "2020-12-05 10:11:32", None, "2020-12-05 10:11:32", "5"),
            ( None, "How to select and copy the text from a textbox with Python + Selenium?", "I'm trying to select a web attribute with python via webdriver, specifically I want to copy the name that I entered to the recipent, but I can't do.", "2020-12-09 10:11:32", "2020-12-09 10:11:32", "2020-12-09 10:11:32", "6"),
            ( None, "React/RCTBridgeDelegate.h' file not found after using stripe react native", "after using library https://github.com/stripe/stripe-react-native. in my RN project. I use workspace button to build my project. For debug build on ios, works 100'%' fine. But For release build on ios, React/RCTBridgeDelegate.h not found. any ideas?", "2019-01-13 10:11:32", "2019-01-13 10:11:32", "2019-01-13 10:11:32", "7")
            ]
    modele = "INSERT INTO `PLI_db`.`forum_topic` ( id, title, content, created_at, deleted_at, modified_at, author_id) VALUES(%s, %s, %s, %s, %s, %s, %s)"
    cursor.executemany( modele, reference)

    conn.commit()

    #`forum_response`
    ####################

    reference = [
        ( None, "First", "2021-12-09 16:46:00", None, "2021-12-09 16:46:00", 2, 1),
        ( None, "First", "2021-12-09 16:46:00", None, "2021-12-09 16:46:00", 2, 2),
        ( None, "First", "2021-12-09 16:46:00", None, "2021-12-09 16:46:00", 2, 3),
        ( None, "First", "2021-12-09 16:46:00", None, "2021-12-09 16:46:00", 2, 4),
        ( None, "First", "2021-12-09 16:46:00", None, "2021-12-09 16:46:00", 2, 5),
        ( None, "First", "2021-12-09 16:46:00", None, "2021-12-09 16:46:00", 2, 6),
        ( None, "Franchement je pourrais pas dire...", "2021-12-09 16:46:00", None, "2021-12-09 16:46:00", 2, 1),
        ( None, "t'as essayer de reboot l'ordinateur ? ", "2021-12-09 16:46:00", None, "2021-12-09 16:47:00", 4, 1),
        ( None, "C’est pas faux", "2021-12-09 16:46:00", None, "2021-12-09 16:46:00", 7, 2),
        ( None, "L’humilité, c’est pas quand il y a des infiltrations ?", "2021-12-09 16:46:00", None, "2021-12-09 16:47:00", 6, 2),
        ( None, "Oué fo fer gaf o travo futture", "2021-12-09 16:46:00", None, "2021-12-09 16:48:00", 5, 2),
        ( None, "Il faut mettre son doigt dans le cul du coq", "2021-12-09 16:46:00", None, "2021-12-09 16:46:00", 5, 3),
        ( None, "Elle est où la poulette ?", "2021-12-09 16:46:00", None, "2021-12-09 16:47:00", 4, 3),
        ( None, "DTC !!!!!", "2021-12-09 16:46:00", None, "2021-12-09 16:47:00", 3, 3),
        ( None, "Quelqu'un comprends ce qu'y y'a écrit ? On pourrais l'aider le gars mes on comprends rien aussi ", "2021-12-09 16:46:00", None, "2021-12-09 16:47:00", 3, 4),
        ( None, "Vous avez parlé de votre amitié avec une truite ?", "2021-12-09 16:46:00", None, "2021-12-09 16:46:00", 2, 4),
        ( None, "First", "2021-12-09 16:46:00", None, "2021-12-09 16:46:00", 2, 5),
        ( None, "Qu’est-ce-qui est petit et marron ?", "2021-12-09 16:46:00", None, "2021-12-09 16:46:00", 2, 6),
        ( None, "UN MARRON !!", "2021-12-09 16:46:00", None, "2021-12-09 16:50:00", 1, 6),
        ( None, "mon papa a moi il ma di quil falé appuillé sur tou les boutons du clavier jusqu'a ce quil saitaigne et apres ca devrai démarré", "2021-12-09 22:46:00", None, "2021-12-09 16:46:00", 4, 7),
        ( None, "Je crois qu’il faut que vous arrêtiez d’essayer de dire des trucs", "2021-12-09 16:46:00", None, "2021-12-09 22:50:00", 5, 7),
        ( None, "Rhooo oui vas te couché !!", "2021-12-09 16:46:00", None, "2021-12-09 22:51:00", 2, 7)
        ]
    modele = "INSERT INTO `PLI_db`.`forum_response` ( id, content, created_at, deleted_at, modified_at, author_id, topic_id) VALUES(%s, %s, %s, %s, %s, %s, %s)"
    cursor.executemany( modele, reference)

    conn.commit()

    #`forum_comment`
    ####################

    reference = [
        ( None, "First", "2021-12-09 16:46:00", None, "2021-12-09 16:46:00", 2, None, 5),
        ( None, "Stupid question !", "2021-12-09 16:46:00", None, "2021-12-09 16:46:00", 5, 12, None),
        ( None, "That's so easy...", "2021-12-09 16:46:00", None, "2021-12-09 16:46:00", 3, 3, None),
        ( None, "I have the same problem", "2021-12-09 16:46:00", None, "2021-12-09 16:46:00", 7, None, 2),
        ( None, "Can you elaborate ?", "2021-12-09 16:46:00", None, "2021-12-09 16:46:00", 1, 5, None),
        ( None, "Your answer is not really helpful here", "2021-12-09 16:46:00", None, "2021-12-09 16:46:00", 6, 6, None),
        ]
    modele = "INSERT INTO `PLI_db`.`forum_comment` ( id, content, created_at, deleted_at, modified_at, author_id, response_id, topic_id) VALUES(%s, %s, %s, %s, %s, %s, %s, %s)"
    cursor.executemany( modele, reference)

    conn.commit()

    #`forum_badge`
    ####################

    reference = [
            ( None, "LA MEDAILLE", "Cette médaille est décerner au meilleur des meilleurs", 100, "2021-12-09 17:00:00", None, "2021-12-09 17:00:00"),
            ( None, "TEACHER", "Votre réponse à été élu meilleur réponse par la communauté sur un Topic", 10, "2021-12-09 17:00:00", None, "2021-12-09 17:00:00"),
            ( None, "LE PARRAIN", "Vous avez parrainez au moins une personne", 50, "2021-12-09 17:00:00", None, "2021-12-09 17:00:00")
            ]
    modele = "INSERT INTO `PLI_db`.`forum_badge` ( id, name, content, score, created_at, deleted_at, modified_at) VALUES(%s, %s, %s, %s, %s, %s, %s)"
    cursor.executemany( modele, reference)

    conn.commit()

    conn.close()

except mysql.connector.errors.InterfaceError as e:
    print("Error %d: %s" % (e.args[0],e.args[1]))
    sys.exit(1)

    
