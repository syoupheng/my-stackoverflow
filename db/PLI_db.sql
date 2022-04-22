-- MySQL dump 10.13  Distrib 8.0.24, for Linux (x86_64)
--
-- Host: localhost    Database: PLI_db
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `PLI_db`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `PLI_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `PLI_db`;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
INSERT INTO `auth_group` VALUES (1,'Professional'),(2,'Student');
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
INSERT INTO `auth_group_permissions` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,1,6),(7,1,7),(8,1,8),(9,1,9),(10,1,10),(11,1,11),(12,1,12),(13,1,13),(14,1,14),(15,1,15),(16,1,16),(17,1,17),(18,1,18),(19,1,19),(20,1,20),(21,2,1),(22,2,2),(23,2,3),(24,2,4),(25,2,5),(26,2,6),(27,2,7),(28,2,8),(29,2,9),(30,2,10),(31,2,11),(32,2,12),(33,2,13),(34,2,14),(35,2,15),(36,2,16),(37,2,17),(38,2,18),(39,2,19),(40,2,20);
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add user',1,'add_user'),(2,'Can change user',1,'change_user'),(3,'Can delete user',1,'delete_user'),(4,'Can view user',1,'view_user'),(5,'Can add topic',2,'add_topic'),(6,'Can change topic',2,'change_topic'),(7,'Can delete topic',2,'delete_topic'),(8,'Can view topic',2,'view_topic'),(9,'Can add response',3,'add_response'),(10,'Can change response',3,'change_response'),(11,'Can delete response',3,'delete_response'),(12,'Can view response',3,'view_response'),(13,'Can add badge',4,'add_badge'),(14,'Can change badge',4,'change_badge'),(15,'Can delete badge',4,'delete_badge'),(16,'Can view badge',4,'view_badge'),(17,'Can add comment',5,'add_comment'),(18,'Can change comment',5,'change_comment'),(19,'Can delete comment',5,'delete_comment'),(20,'Can view comment',5,'view_comment'),(21,'Can add log entry',6,'add_logentry'),(22,'Can change log entry',6,'change_logentry'),(23,'Can delete log entry',6,'delete_logentry'),(24,'Can view log entry',6,'view_logentry'),(25,'Can add permission',7,'add_permission'),(26,'Can change permission',7,'change_permission'),(27,'Can delete permission',7,'delete_permission'),(28,'Can view permission',7,'view_permission'),(29,'Can add group',8,'add_group'),(30,'Can change group',8,'change_group'),(31,'Can delete group',8,'delete_group'),(32,'Can view group',8,'view_group'),(33,'Can add content type',9,'add_contenttype'),(34,'Can change content type',9,'change_contenttype'),(35,'Can delete content type',9,'delete_contenttype'),(36,'Can view content type',9,'view_contenttype'),(37,'Can add session',10,'add_session'),(38,'Can change session',10,'change_session'),(39,'Can delete session',10,'delete_session'),(40,'Can view session',10,'view_session'),(41,'Can add tag',11,'add_tag'),(42,'Can change tag',11,'change_tag'),(43,'Can delete tag',11,'delete_tag'),(44,'Can view tag',11,'view_tag'),(45,'Can add contact message',12,'add_contactmessage'),(46,'Can change contact message',12,'change_contactmessage'),(47,'Can delete contact message',12,'delete_contactmessage'),(48,'Can view contact message',12,'view_contactmessage');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_forum_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_forum_user_id` FOREIGN KEY (`user_id`) REFERENCES `forum_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2022-03-20 20:40:23.894512','1','Professional',1,'[{\"added\": {}}]',8,1),(2,'2022-03-20 20:40:59.933068','2','Student',1,'[{\"added\": {}}]',8,1),(3,'2022-03-21 00:12:02.130772','1','Tag object (1)',1,'[{\"added\": {}}]',11,1),(4,'2022-03-21 00:13:03.248061','2','Tag object (2)',1,'[{\"added\": {}}]',11,1),(5,'2022-03-21 00:13:43.392325','3','Tag object (3)',1,'[{\"added\": {}}]',11,1),(6,'2022-03-21 00:14:00.280081','4','Tag object (4)',1,'[{\"added\": {}}]',11,1),(7,'2022-03-21 00:14:18.915543','5','Tag object (5)',1,'[{\"added\": {}}]',11,1),(8,'2022-03-21 00:14:37.673543','6','Tag object (6)',1,'[{\"added\": {}}]',11,1),(9,'2022-03-21 00:15:14.204302','7','Tag object (7)',1,'[{\"added\": {}}]',11,1),(10,'2022-03-21 00:15:35.320665','8','Tag object (8)',1,'[{\"added\": {}}]',11,1),(11,'2022-03-21 00:16:21.324497','9','Tag object (9)',1,'[{\"added\": {}}]',11,1),(12,'2022-03-21 00:16:52.766517','10','Tag object (10)',1,'[{\"added\": {}}]',11,1),(13,'2022-03-21 00:17:17.539107','11','Tag object (11)',1,'[{\"added\": {}}]',11,1),(14,'2022-03-21 00:17:41.688866','12','Tag object (12)',1,'[{\"added\": {}}]',11,1),(15,'2022-03-21 00:18:08.978518','13','Tag object (13)',1,'[{\"added\": {}}]',11,1),(16,'2022-03-21 00:18:29.806026','14','Tag object (14)',1,'[{\"added\": {}}]',11,1),(17,'2022-03-21 00:18:51.560889','15','Tag object (15)',1,'[{\"added\": {}}]',11,1),(18,'2022-03-21 00:19:19.645325','16','Tag object (16)',1,'[{\"added\": {}}]',11,1),(19,'2022-03-21 00:19:50.141220','17','Tag object (17)',1,'[{\"added\": {}}]',11,1),(20,'2022-03-21 00:20:16.301635','18','Tag object (18)',1,'[{\"added\": {}}]',11,1),(21,'2022-03-21 00:20:39.097341','19','Tag object (19)',1,'[{\"added\": {}}]',11,1),(22,'2022-03-21 00:21:06.242480','20','Tag object (20)',1,'[{\"added\": {}}]',11,1),(23,'2022-03-21 00:21:26.202137','21','Tag object (21)',1,'[{\"added\": {}}]',11,1),(24,'2022-03-21 00:21:46.127207','22','Tag object (22)',1,'[{\"added\": {}}]',11,1),(25,'2022-03-21 00:22:12.585973','23','Tag object (23)',1,'[{\"added\": {}}]',11,1),(26,'2022-03-21 00:22:47.202236','24','Tag object (24)',1,'[{\"added\": {}}]',11,1),(27,'2022-03-21 00:23:12.475060','25','Tag object (25)',1,'[{\"added\": {}}]',11,1),(28,'2022-03-21 00:23:45.562991','26','Tag object (26)',1,'[{\"added\": {}}]',11,1),(29,'2022-03-21 00:24:22.062031','27','Tag object (27)',1,'[{\"added\": {}}]',11,1),(30,'2022-03-21 00:24:55.711395','28','Tag object (28)',1,'[{\"added\": {}}]',11,1),(31,'2022-03-21 00:25:29.448156','29','Tag object (29)',1,'[{\"added\": {}}]',11,1),(32,'2022-03-21 00:25:55.079543','30','Tag object (30)',1,'[{\"added\": {}}]',11,1),(33,'2022-03-21 00:26:42.081172','31','Tag object (31)',1,'[{\"added\": {}}]',11,1),(34,'2022-03-21 00:27:22.373564','32','Tag object (32)',1,'[{\"added\": {}}]',11,1),(35,'2022-03-21 00:27:46.705465','33','Tag object (33)',1,'[{\"added\": {}}]',11,1),(36,'2022-03-21 00:28:06.105040','34','Tag object (34)',1,'[{\"added\": {}}]',11,1),(37,'2022-03-21 00:28:38.945039','35','Tag object (35)',1,'[{\"added\": {}}]',11,1),(38,'2022-03-21 00:29:09.789826','36','Tag object (36)',1,'[{\"added\": {}}]',11,1),(39,'2022-03-21 00:29:38.588959','37','Tag object (37)',1,'[{\"added\": {}}]',11,1),(40,'2022-03-21 00:29:58.306836','38','Tag object (38)',1,'[{\"added\": {}}]',11,1),(41,'2022-03-21 00:30:38.173618','39','Tag object (39)',1,'[{\"added\": {}}]',11,1),(42,'2022-03-21 00:30:59.829882','40','Tag object (40)',1,'[{\"added\": {}}]',11,1),(43,'2022-03-21 00:32:59.907966','41','Tag object (41)',1,'[{\"added\": {}}]',11,1),(44,'2022-03-21 00:33:41.023523','42','Tag object (42)',1,'[{\"added\": {}}]',11,1),(45,'2022-03-21 00:34:03.404258','43','Tag object (43)',1,'[{\"added\": {}}]',11,1),(46,'2022-03-21 00:34:25.394782','44','Tag object (44)',1,'[{\"added\": {}}]',11,1),(47,'2022-03-21 00:34:56.877124','45','Tag object (45)',1,'[{\"added\": {}}]',11,1),(48,'2022-03-21 00:35:23.726061','46','Tag object (46)',1,'[{\"added\": {}}]',11,1),(49,'2022-03-21 00:35:50.977687','47','Tag object (47)',1,'[{\"added\": {}}]',11,1),(50,'2022-03-21 00:37:26.429865','48','Tag object (48)',1,'[{\"added\": {}}]',11,1),(51,'2022-03-21 00:37:49.853445','49','Tag object (49)',1,'[{\"added\": {}}]',11,1),(52,'2022-03-21 00:38:51.541183','50','Tag object (50)',1,'[{\"added\": {}}]',11,1),(53,'2022-03-21 00:39:39.782277','51','Tag object (51)',1,'[{\"added\": {}}]',11,1),(54,'2022-03-21 00:39:56.797516','52','Tag object (52)',1,'[{\"added\": {}}]',11,1),(55,'2022-03-23 16:18:23.495571','53','Tag object (53)',1,'[{\"added\": {}}]',11,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (6,'admin','logentry'),(8,'auth','group'),(7,'auth','permission'),(9,'contenttypes','contenttype'),(4,'forum','badge'),(5,'forum','comment'),(12,'forum','contactmessage'),(3,'forum','response'),(11,'forum','tag'),(2,'forum','topic'),(1,'forum','user'),(10,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2022-03-20 20:10:15.449529'),(2,'contenttypes','0002_remove_content_type_name','2022-03-20 20:10:15.513027'),(3,'auth','0001_initial','2022-03-20 20:10:15.719552'),(4,'auth','0002_alter_permission_name_max_length','2022-03-20 20:10:15.766860'),(5,'auth','0003_alter_user_email_max_length','2022-03-20 20:10:15.775690'),(6,'auth','0004_alter_user_username_opts','2022-03-20 20:10:15.784581'),(7,'auth','0005_alter_user_last_login_null','2022-03-20 20:10:15.793418'),(8,'auth','0006_require_contenttypes_0002','2022-03-20 20:10:15.800115'),(9,'auth','0007_alter_validators_add_error_messages','2022-03-20 20:10:15.811316'),(10,'auth','0008_alter_user_username_max_length','2022-03-20 20:10:15.821525'),(11,'auth','0009_alter_user_last_name_max_length','2022-03-20 20:10:15.833486'),(12,'auth','0010_alter_group_name_max_length','2022-03-20 20:10:15.853121'),(13,'auth','0011_update_proxy_permissions','2022-03-20 20:10:15.865414'),(14,'auth','0012_alter_user_first_name_max_length','2022-03-20 20:10:15.875436'),(15,'forum','0001_initial','2022-03-20 20:10:16.173243'),(16,'admin','0001_initial','2022-03-20 20:10:16.297237'),(17,'admin','0002_logentry_remove_auto_add','2022-03-20 20:10:16.309400'),(18,'admin','0003_logentry_add_action_flag_choices','2022-03-20 20:10:16.320284'),(19,'forum','0002_response_topic','2022-03-20 20:10:16.512852'),(20,'forum','0003_badge','2022-03-20 20:10:16.657686'),(21,'forum','0004_alter_topic_title','2022-03-20 20:10:16.671606'),(22,'forum','0005_comment','2022-03-20 20:10:16.835437'),(23,'forum','0006_alter_comment_response','2022-03-20 20:10:16.852023'),(24,'forum','0007_auto_20220320_2109','2022-03-20 20:10:16.947944'),(25,'sessions','0001_initial','2022-03-20 20:10:16.988604'),(26,'forum','0008_auto_20220321_0110','2022-03-21 00:10:30.385346'),(27,'forum','0009_user_company','2022-03-23 14:32:11.334113'),(28,'forum','0010_alter_tag_name','2022-03-23 16:11:02.766395'),(29,'forum','0011_contactmessage','2022-03-24 16:06:05.018699');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('pftcqyu028oud2rxd87wbwtsguoovwsl','.eJxVjDEOwjAMRe-SGUVOnaQWIztniOzEJQXUSk07Ie4OlTrA-t97_2USb2tNW9MljcWcjTOn3004P3TaQbnzdJttnqd1GcXuij1os9e56PNyuH8HlVv91kol5AEZO1QBGqBTBaDe9b6weADFiBCQhCh0kYBR2HkHJEwxinl_ANkqNyU:1nW2KS:v4_ZMsAlRrCpMPf5gQByxrEdqSGrNC2nyypH04-PN48','2022-04-03 20:39:08.591443');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_badge`
--

DROP TABLE IF EXISTS `forum_badge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forum_badge` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `content` varchar(2000) NOT NULL,
  `score` int NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `deleted_at` datetime(6) DEFAULT NULL,
  `modified_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_badge`
--

LOCK TABLES `forum_badge` WRITE;
/*!40000 ALTER TABLE `forum_badge` DISABLE KEYS */;
INSERT INTO `forum_badge` VALUES (1,'LA MEDAILLE','Cette médaille est décerner au meilleur des meilleurs',100,'2021-12-09 17:00:00.000000',NULL,'2021-12-09 17:00:00.000000'),(2,'TEACHER','Votre réponse à été élu meilleur réponse par la communauté sur un Topic',10,'2021-12-09 17:00:00.000000',NULL,'2021-12-09 17:00:00.000000'),(3,'LE PARRAIN','Vous avez parrainez au moins une personne',50,'2021-12-09 17:00:00.000000',NULL,'2021-12-09 17:00:00.000000');
/*!40000 ALTER TABLE `forum_badge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_badge_user_badge`
--

DROP TABLE IF EXISTS `forum_badge_user_badge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forum_badge_user_badge` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `badge_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `forum_badge_user_badge_badge_id_user_id_3e606216_uniq` (`badge_id`,`user_id`),
  KEY `forum_badge_user_badge_user_id_ff3b4d25_fk_forum_user_id` (`user_id`),
  CONSTRAINT `forum_badge_user_badge_badge_id_5270a2e6_fk_forum_badge_id` FOREIGN KEY (`badge_id`) REFERENCES `forum_badge` (`id`),
  CONSTRAINT `forum_badge_user_badge_user_id_ff3b4d25_fk_forum_user_id` FOREIGN KEY (`user_id`) REFERENCES `forum_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_badge_user_badge`
--

LOCK TABLES `forum_badge_user_badge` WRITE;
/*!40000 ALTER TABLE `forum_badge_user_badge` DISABLE KEYS */;
/*!40000 ALTER TABLE `forum_badge_user_badge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_comment`
--

DROP TABLE IF EXISTS `forum_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forum_comment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(2000) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `deleted_at` datetime(6) DEFAULT NULL,
  `modified_at` datetime(6) NOT NULL,
  `author_id` bigint DEFAULT NULL,
  `response_id` bigint DEFAULT NULL,
  `topic_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `forum_comment_author_id_9e60eecd_fk_forum_user_id` (`author_id`),
  KEY `forum_comment_response_id_91b19f16_fk_forum_response_id` (`response_id`),
  KEY `forum_comment_topic_id_19e38157_fk_forum_topic_id` (`topic_id`),
  CONSTRAINT `forum_comment_author_id_9e60eecd_fk_forum_user_id` FOREIGN KEY (`author_id`) REFERENCES `forum_user` (`id`),
  CONSTRAINT `forum_comment_response_id_91b19f16_fk_forum_response_id` FOREIGN KEY (`response_id`) REFERENCES `forum_response` (`id`),
  CONSTRAINT `forum_comment_topic_id_19e38157_fk_forum_topic_id` FOREIGN KEY (`topic_id`) REFERENCES `forum_topic` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_comment`
--

LOCK TABLES `forum_comment` WRITE;
/*!40000 ALTER TABLE `forum_comment` DISABLE KEYS */;
INSERT INTO `forum_comment` VALUES (1,'First','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:46:00.000000',2,NULL,5),(2,'Stupid question !','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:46:00.000000',5,12,NULL),(3,'That\'s so easy...','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:46:00.000000',3,3,NULL),(4,'I have the same problem','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:46:00.000000',7,NULL,2),(5,'Can you elaborate ?','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:46:00.000000',1,5,NULL),(6,'Your answer is not really helpful here','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:46:00.000000',6,6,NULL),(7,'Was this helpful ?','2022-03-24 19:47:23.645867',NULL,'2022-03-24 19:47:23.645899',10,23,NULL);
/*!40000 ALTER TABLE `forum_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_contactmessage`
--

DROP TABLE IF EXISTS `forum_contactmessage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forum_contactmessage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(2000) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `deleted_at` datetime(6) DEFAULT NULL,
  `modified_at` datetime(6) NOT NULL,
  `professional_id` bigint DEFAULT NULL,
  `student_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `forum_contactmessage_professional_id_c2654d48_fk_forum_user_id` (`professional_id`),
  KEY `forum_contactmessage_student_id_c0511581_fk_forum_user_id` (`student_id`),
  CONSTRAINT `forum_contactmessage_professional_id_c2654d48_fk_forum_user_id` FOREIGN KEY (`professional_id`) REFERENCES `forum_user` (`id`),
  CONSTRAINT `forum_contactmessage_student_id_c0511581_fk_forum_user_id` FOREIGN KEY (`student_id`) REFERENCES `forum_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_contactmessage`
--

LOCK TABLES `forum_contactmessage` WRITE;
/*!40000 ALTER TABLE `forum_contactmessage` DISABLE KEYS */;
INSERT INTO `forum_contactmessage` VALUES (10,'Bonjour,\n\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.\n\nCordialement,','2022-03-24 18:38:55.764685',NULL,'2022-03-24 18:38:55.764716',10,18),(11,'Bonjour,\n\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.\n\nCordialement,','2022-03-24 19:37:52.339516',NULL,'2022-03-24 19:37:52.339548',10,19),(12,'Bonjour,\n\nThis will create a shell with all the Django settings already configured for us. Inside that brand new shell, paste the following code.\n\nCordialement,','2022-03-24 20:35:23.683815',NULL,'2022-03-24 20:35:23.683905',36,18);
/*!40000 ALTER TABLE `forum_contactmessage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_response`
--

DROP TABLE IF EXISTS `forum_response`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forum_response` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(2000) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `deleted_at` datetime(6) DEFAULT NULL,
  `modified_at` datetime(6) NOT NULL,
  `author_id` bigint DEFAULT NULL,
  `topic_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `forum_response_author_id_bd2de4ca_fk_forum_user_id` (`author_id`),
  KEY `forum_response_topic_id_895f2f7c_fk_forum_topic_id` (`topic_id`),
  CONSTRAINT `forum_response_author_id_bd2de4ca_fk_forum_user_id` FOREIGN KEY (`author_id`) REFERENCES `forum_user` (`id`),
  CONSTRAINT `forum_response_topic_id_895f2f7c_fk_forum_topic_id` FOREIGN KEY (`topic_id`) REFERENCES `forum_topic` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_response`
--

LOCK TABLES `forum_response` WRITE;
/*!40000 ALTER TABLE `forum_response` DISABLE KEYS */;
INSERT INTO `forum_response` VALUES (1,'First','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:46:00.000000',2,1),(2,'First','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:46:00.000000',2,2),(3,'First','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:46:00.000000',2,3),(4,'First','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:46:00.000000',2,4),(5,'First','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:46:00.000000',2,5),(6,'First','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:46:00.000000',2,6),(7,'Franchement je pourrais pas dire...','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:46:00.000000',2,1),(8,'t\'as essayer de reboot l\'ordinateur ? ','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:47:00.000000',4,1),(9,'C’est pas faux','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:46:00.000000',7,2),(10,'L’humilité, c’est pas quand il y a des infiltrations ?','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:47:00.000000',6,2),(11,'Oué fo fer gaf o travo futture','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:48:00.000000',5,2),(12,'Il faut mettre son doigt dans le cul du coq','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:46:00.000000',5,3),(13,'Elle est où la poulette ?','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:47:00.000000',4,3),(14,'DTC !!!!!','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:47:00.000000',3,3),(15,'Quelqu\'un comprends ce qu\'y y\'a écrit ? On pourrais l\'aider le gars mes on comprends rien aussi ','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:47:00.000000',3,4),(16,'Vous avez parlé de votre amitié avec une truite ?','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:46:00.000000',2,4),(17,'First','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:46:00.000000',2,5),(18,'Qu’est-ce-qui est petit et marron ?','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:46:00.000000',2,6),(19,'UN MARRON !!','2021-12-09 16:46:00.000000',NULL,'2021-12-09 16:50:00.000000',1,6),(20,'mon papa a moi il ma di quil falé appuillé sur tou les boutons du clavier jusqu\'a ce quil saitaigne et apres ca devrai démarré','2021-12-09 22:46:00.000000',NULL,'2021-12-09 16:46:00.000000',4,7),(21,'Je crois qu’il faut que vous arrêtiez d’essayer de dire des trucs','2021-12-09 16:46:00.000000',NULL,'2021-12-09 22:50:00.000000',5,7),(22,'Rhooo oui vas te couché !!','2021-12-09 16:46:00.000000',NULL,'2021-12-09 22:51:00.000000',2,7),(23,'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.','2022-03-24 19:44:47.894265',NULL,'2022-03-24 19:57:20.124079',10,3);
/*!40000 ALTER TABLE `forum_response` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_tag`
--

DROP TABLE IF EXISTS `forum_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forum_tag` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `deleted_at` datetime(6) DEFAULT NULL,
  `modified_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `forum_tag_name_c245b17c_uniq` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_tag`
--

LOCK TABLES `forum_tag` WRITE;
/*!40000 ALTER TABLE `forum_tag` DISABLE KEYS */;
INSERT INTO `forum_tag` VALUES (1,'html','HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. Questions regarding HTML should include a minimal reproducible example and some idea of what you\'re trying to achieve. This tag is rarely used alone and is often paired with [CSS] and [JavaScript].','2022-03-21 00:12:02.129512',NULL,'2022-03-21 00:12:02.129548'),(2,'css','CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SVG elements including (but not limited to) colors, layout, fonts, and animations. It also describes how elements should be rendered on screen, on paper, in speech, or on other media.','2022-03-21 00:13:03.246293',NULL,'2022-03-21 00:13:03.246354'),(3,'javascript','For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Note JavaScript is NOT the same as Java! Please include all relevant tags on your question; e.g., [node.js], [jquery], [json], [reactjs], [angular], [ember.js], [vue.js], [typescript], [svelte], etc.','2022-03-21 00:13:43.391150',NULL,'2022-03-21 00:13:43.391221'),(4,'python','Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax. Please note that Python 2 is officially out of support as of 2020-01-01. For version-specific Python questions, add the [python-2.7] or [python-3.x] tag. When using a Python variant (e.g. Jython, PyPy) or library (e.g. Pandas, NumPy), please include it in the tags.','2022-03-21 00:14:00.278134',NULL,'2022-03-21 00:14:00.278177'),(5,'java','Java is a high-level object oriented programming language. Use this tag when you\'re having problems using or understanding the language itself. This tag is frequently used alongside other tags for libraries and/or frameworks used by Java developers.','2022-03-21 00:14:18.914509',NULL,'2022-03-21 00:14:18.914548'),(6,'c#','C# (pronounced \"see sharp\") is a high level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft\'s .NET family of tools and run-times, which include .NET, .NET Framework and Xamarin among others. Use this tag for questions about code written in C# or about C#\'s formal specification.','2022-03-21 00:14:37.672382',NULL,'2022-03-21 00:14:37.672416'),(7,'php','PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development. Use this tag for questions about programming in the PHP language.','2022-03-21 00:15:14.203646',NULL,'2022-03-21 00:15:14.203680'),(8,'android','Android is Google\'s mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT). For topics related to Android, use Android-specific tags such as android-intent, android-activity, android-adapter, etc. For questions other than development or programming, but related to the Android framework, use this link: https://android.stackexchange.com.','2022-03-21 00:15:35.319023',NULL,'2022-03-21 00:15:35.319058'),(9,'mysql','MySQL is a free, open source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL). DO NOT USE this tag for other DBs such as SQL Server, SQLite etc. Those are different DBs which all use their own dialects of SQL to manage the data.','2022-03-21 00:16:21.322874',NULL,'2022-03-21 00:16:21.322936'),(10,'mongodb','MongoDB is a scalable, high-performance, open source, document-oriented NoSQL database. It supports a large number of languages and application development platforms. Questions about server administration can be asked on https://dba.stackexchange.com.','2022-03-21 00:16:52.765843',NULL,'2022-03-21 00:16:52.765874'),(11,'postgresql','PostgreSQL is an open-source, relational database management system (RDBMS) available for all major platforms including Linux, UNIX, Windows and OS X. Mention your version of Postgres when asking questions. Consider dba.stackexchange.com for questions concerning administration or advanced features.','2022-03-21 00:17:17.536864',NULL,'2022-03-21 00:17:17.536914'),(12,'graphql','GraphQL is an API technology designed to describe the complex, nested data dependencies of modern web applications. It is often considered an alternative to SOAP or REST','2022-03-21 00:17:41.687259',NULL,'2022-03-21 00:17:41.687423'),(13,'flask','Flask is a lightweight framework for developing web applications using Python.','2022-03-21 00:18:08.977774',NULL,'2022-03-21 00:18:08.977810'),(14,'django','Django is an open-source server-side web application framework written in Python. It is designed to reduce the effort required to create complex data-driven websites and web applications, with a special focus on less code, no-redundancy and being more explicit than implicit.','2022-03-21 00:18:29.804024',NULL,'2022-03-21 00:18:29.804162'),(15,'node.js','Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google\'s V8 JavaScript engine and libuv library. It is used for developing applications that make heavy use of the ability to run JavaScript both on the client, as well as on server side and therefore benefit from the re-usability of code and the lack of context switching.','2022-03-21 00:18:51.559740',NULL,'2022-03-21 00:18:51.559773'),(16,'express','Express.js is a minimal and flexible Node.js web application framework providing a robust set of features for building web applications.','2022-03-21 00:19:19.644124',NULL,'2022-03-21 00:19:19.644177'),(17,'koa','Koa is a web framework which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs.','2022-03-21 00:19:50.139273',NULL,'2022-03-21 00:19:50.139339'),(18,'nestjs','Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript.','2022-03-21 00:20:16.300635',NULL,'2022-03-21 00:20:16.300673'),(19,'reactjs','React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be both efficient and flexible.','2022-03-21 00:20:39.096640',NULL,'2022-03-21 00:20:39.096672'),(20,'vue.js','Vue.js is an open-source, progressive JavaScript framework for building user interfaces that aims to be incrementally adoptable. Vue.js is mainly used for front-end development and requires an intermediate level of HTML and CSS. Vue.js questions are highly version specific and should always be tagged with [vuejs2] or [vuejs3] in addition to this tag.','2022-03-21 00:21:06.241909',NULL,'2022-03-21 00:21:06.241943'),(21,'angular','Questions about Angular (not to be confused with AngularJS), the web framework from Google. Use this tag for Angular questions which are not specific to an individual version. For the older AngularJS (1.x) web framework, use the AngularJS tag.','2022-03-21 00:21:26.201178',NULL,'2022-03-21 00:21:26.201211'),(22,'c++','C++ is a general-purpose programming language. It was originally designed as an extension to C and has a similar syntax, but it is now a completely different language. Use this tag for questions about code (to be) compiled with a C++ compiler. Use a version-specific tag for questions related to a specific standard revision [C++11], [C++14], [C++17], [C++20] or [C++23], etc.','2022-03-21 00:21:46.126371',NULL,'2022-03-21 00:21:46.126408'),(23,'c','C is a general-purpose programming language used for system programming (OS and embedded), libraries, games and cross-platform. This tag should be used with general questions concerning the C language, as defined in the ISO 9899 standard (the latest version, 9899:2018, unless otherwise specified — also tag version-specific requests with c89, c99, c11, etc). C is distinct from C++ and it should not be combined with the C++ tag absent a rational reason.','2022-03-21 00:22:12.583779',NULL,'2022-03-21 00:22:12.584091'),(24,'ruby','Ruby is a multi-platform open-source, dynamic object-oriented interpreted language. The [ruby] tag is for questions related to the Ruby language, including its syntax and its libraries. Ruby on Rails questions should be tagged with [ruby-on-rails].','2022-03-21 00:22:47.200783',NULL,'2022-03-21 00:22:47.200956'),(25,'sql','Structured Query Language (SQL) is a language for querying databases. Questions should include code examples, table structure, sample data, and a tag for the DBMS implementation (e.g. MySQL, PostgreSQL, Oracle, MS SQL Server, IBM DB2, etc.) being used. If your question relates solely to a specific DBMS (uses specific extensions/features), use that DBMS\'s tag instead. Answers to questions tagged with SQL should use ISO/IEC standard SQL.','2022-03-21 00:23:12.473790',NULL,'2022-03-21 00:23:12.473826'),(26,'next.js','Next.js is a minimalistic framework for server-rendered React applications as well as statically exported React apps.','2022-03-21 00:23:45.562233',NULL,'2022-03-21 00:23:45.562266'),(27,'strapi','Strapi is an open-source Node.js headless CMS built on top of Koa. It\'s frontend-agnostic and claims to not be an MVC framework. It auto-generate RESTful endpoints and has support for GraphQL and WebSockets.','2022-03-21 00:24:22.061008',NULL,'2022-03-21 00:24:22.061045'),(28,'svelte','Svelte is a component framework — like React or Vue. On-topic questions include code using Svelte and how to configure it and use it in your javascript pipelines.','2022-03-21 00:24:55.710310',NULL,'2022-03-21 00:24:55.710348'),(29,'jquery','jQuery is a JavaScript library, consider also adding the JavaScript tag. jQuery is a popular cross-browser JavaScript library that facilitates Document Object Model (DOM) traversal, event handling, animations and AJAX interactions by minimizing the discrepancies across browsers. A question tagged jQuery should be related to jQuery, so jQuery should be used by the code in question and at least jQuery usage-related elements need to be in the question.','2022-03-21 00:25:29.446586',NULL,'2022-03-21 00:25:29.446622'),(30,'ios','iOS is the mobile operating system running on the Apple iPhone, iPod touch, and iPad. Use this tag [ios] for questions related to programming on the iOS platform. Use the related tags [objective-c] and [swift] for issues specific to those programming languages.','2022-03-21 00:25:55.077960',NULL,'2022-03-21 00:25:55.077992'),(31,'ruby-on-rails','Ruby on Rails is an open source full-stack web application framework written in Ruby. It follows the popular MVC framework model and is known for its \"convention over configuration\" approach to application development.','2022-03-21 00:26:42.080615',NULL,'2022-03-21 00:26:42.080649'),(32,'swift','Swift is a general-purpose programming language developed by Apple Inc first released in 2014 for its platforms and Linux. Swift is open-source. Use the tag only for questions about language features, or requiring code in Swift. Use the tags [ios], [ipados], [macos], [watch-os], [tvos], [swiftui], [cocoa-touch], and [cocoa] for (language-agnostic) questions about the platforms or frameworks.','2022-03-21 00:27:22.372856',NULL,'2022-03-21 00:27:22.372891'),(33,'kotlin','Kotlin is a high-level programming language developed by JetBrains. Use this tag when you\'re having problems with the Kotlin language and standard library. This tag is often used alongside additional tags for the different targets (JVM, JavaScript, native, etc.) and libraries/frameworks (Android, Spring, etc.) used by Kotlin developers, if the question relates specifically to those topics.','2022-03-21 00:27:46.704502',NULL,'2022-03-21 00:27:46.704538'),(34,'flutter','Flutter is an open-source UI software development kit / framework created by Google. Flutter apps are written in the Dart language. It is used to develop cross platform applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase. Flutter was released in May 2017. Largest open-source platform built using UI elements.','2022-03-21 00:28:06.103670',NULL,'2022-03-21 00:28:06.103731'),(35,'spring','The Spring Framework is an open source framework for application development on the Java platform. At its core is rich support for component-based architectures, and it currently has over twenty highly integrated modules.','2022-03-21 00:28:38.944279',NULL,'2022-03-21 00:28:38.944314'),(36,'fastapi','FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.','2022-03-21 00:29:09.788555',NULL,'2022-03-21 00:29:09.788589'),(37,'laravel','The Laravel framework is an open-sourced PHP web framework that allows developers to create dynamic and scalable web applications. The source code of Laravel is hosted on GitHub and released under the MIT license.','2022-03-21 00:29:38.588302',NULL,'2022-03-21 00:29:38.588335'),(38,'symfony','Symfony refers to both a PHP framework for building web applications as well as a set of components on which the framework is built. This tag refers to the currently supported major versions 3.x, 4.x and 5.x. Alternatively you can specify an exact version using the respective tag. This tag should not be used for questions about Symfony 1.x. Please use the Symfony1 tag instead.','2022-03-21 00:29:58.306104',NULL,'2022-03-21 00:29:58.306139'),(39,'nuxt.js','Nuxt.js is a framework for creating Vue.js applications, you can choose between Universal, Static Generated or Single Page application (inspired by Next.js)','2022-03-21 00:30:38.172418',NULL,'2022-03-21 00:30:38.172478'),(40,'redux','Redux is a pattern and library for managing JavaScript application state, using events called \"actions\". It serves as a centralized store for state that is needed across your entire application, with rules ensuring that the state can only be updated in a predictable fashion. Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur.','2022-03-21 00:30:59.829193',NULL,'2022-03-21 00:30:59.829226'),(41,'twitter-bootstrap','Bootstrap is a frontend framework designed to kick-start development of Web apps and sites. For questions related to a version of Bootstrap also use the specific version\'s tag from \"twitter-bootstrap-2\", \"twitter-bootstrap-3\", \"bootstrap-4\" and \"bootstrap-5\" tags.','2022-03-21 00:32:59.907240',NULL,'2022-03-21 00:32:59.907273'),(42,'typescript','TypeScript is a typed superset of JavaScript that transpiles to plain JavaScript. It adds optional types, classes, interfaces, and modules to JavaScript. This tag is for questions specific to TypeScript. It is not used for general JavaScript questions.','2022-03-21 00:33:41.022583',NULL,'2022-03-21 00:33:41.022619'),(43,'bash','This tag is for questions about scripts written for the Bash command shell. For shell scripts with syntax or other errors, please check them at https://shellcheck.net before posting here. Questions about interactive use of Bash are more likely to be on-topic on Super User than on Stack Overflow.','2022-03-21 00:34:03.403193',NULL,'2022-03-21 00:34:03.403230'),(44,'git','Git is an open-source distributed version control system (DVCS). Use this tag for questions related to Git usage and workflows. DO NOT USE the [github] tag for Git-related issues simply because a repository happens to be hosted on GitHub. Also, do not use this tag for general programming questions that happen to involve a Git repository.','2022-03-21 00:34:25.393540',NULL,'2022-03-21 00:34:25.393577'),(45,'react-native','React Native is a JavaScript library used to build native mobile apps using React. The focus of React Native is on developer efficiency across all the platforms you care about - learn once, write anywhere.','2022-03-21 00:34:56.874975',NULL,'2022-03-21 00:34:56.875017'),(46,'firebase','Firebase is a serverless platform for unified development of applications for mobile devices and for the web.','2022-03-21 00:35:23.725439',NULL,'2022-03-21 00:35:23.725475'),(47,'docker','Docker is a tool to build and run containers. Questions concerning Dockerfiles, Docker Compose, and architecture are accepted, but Stack Overflow questions must be programming-related. Questions about running Docker in production may find better responses on Server Fault (https://serverfault.com).','2022-03-21 00:35:50.974862',NULL,'2022-03-21 00:35:50.974901'),(48,'tailwind-css','Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.','2022-03-21 00:37:26.428737',NULL,'2022-03-21 00:37:26.428773'),(49,'material-ui','React components that implement Google\'s Material Design. Please note that this tag should be used for questions regarding the MUI (formerly Material-UI) library. Otherwise, see the tag\'s info for other tags to use.','2022-03-21 00:37:49.852583',NULL,'2022-03-21 00:37:49.852617'),(50,'redis','Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes with radius queries and streams. It also provides pub-sub capabilities. Use this tag for questions related to Redis and in-memory system.','2022-03-21 00:38:51.540465',NULL,'2022-03-21 00:38:51.540532'),(51,'go','Go is an open-source programming language. It is statically-typed, with a syntax loosely derived from C, adding automatic memory management, type safety, some dynamic typing capabilities, additional built-in types such as variable-length arrays (called slices) and key-value maps, and a large standard library.','2022-03-21 00:39:39.780354',NULL,'2022-03-21 00:39:39.780394'),(52,'rust','Rust is a systems programming language without a garbage collector focused on three goals: safety, speed, and concurrency. Use this tag for questions about code written in Rust. Use an edition specific tag for questions that refer to code which requires a particular edition, like [rust-2018]. Use more specific tags for subtopics like [rust-cargo] and [rust-macros].','2022-03-21 00:39:56.796262',NULL,'2022-03-21 00:39:56.796313'),(53,'sass','Sass (Syntactically Awesome Style Sheets) is an extension of CSS adding features like nested rules, variables, mixins and class extensions. This enables developers to write structured, manageable and reusable CSS. Sass is compiled into standard CSS. It is primarily a CSS pre-processor language that accepts both the CSS and its personalised syntax of writing visual design codes.','2022-03-23 16:18:23.494770',NULL,'2022-03-23 16:18:23.494807');
/*!40000 ALTER TABLE `forum_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_topic`
--

DROP TABLE IF EXISTS `forum_topic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forum_topic` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `content` varchar(2000) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `deleted_at` datetime(6) DEFAULT NULL,
  `modified_at` datetime(6) NOT NULL,
  `author_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `forum_topic_author_id_69c0a4d8_fk_forum_user_id` (`author_id`),
  CONSTRAINT `forum_topic_author_id_69c0a4d8_fk_forum_user_id` FOREIGN KEY (`author_id`) REFERENCES `forum_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_topic`
--

LOCK TABLES `forum_topic` WRITE;
/*!40000 ALTER TABLE `forum_topic` DISABLE KEYS */;
INSERT INTO `forum_topic` VALUES (1,'using org.eclipse.equinox.simpleconfigurator vs just putting all bundles into osgi.bundles','I am upgrading our Equinox from 4.7.3a to 4.21 in our server application. I have learned the hard way that org.eclipse.update.configurator no longer does automatically install bundles on application startup (1). It seems my choices are either start using p2 repositories or start using SimpleConfigurator. SimpleConfigurator seems easier to implement in my case. One thing I do not understand, what does SimpleConfigurator offer me over just enumerating all bundles in osgi.bundles property? It requires bundles.info file anyway which is also a static list of bundles. I will have to generate the bundles list one way or another. Can I do away with any configurator?','2021-12-09 15:31:32.000000',NULL,'2021-12-09 15:31:32.000000',2),(2,'How to keep a Task executing when the app enter in background Xamarin Forms','There\'s any way to keep a Task that already started to execute, keep executing if the app enter in background? Thanks for helping','2021-12-09 15:31:32.000000',NULL,'2021-12-09 15:31:32.000000',2),(3,'VBA / PROTECTED CELLS PREVENTING MACROS FUNCTIONNING','I\'m a beginner . Learnt a bit of VBA only for improving an xls file. I\'m nearly finished but realize that protecting cells seems to be a problem for my macros to operate. So I have inserted a unprotect/protect function but still not working (i\'m not confortable with where to place it). I copy/paste hereunder. Many thanks for your help.:-) Set myRange = Union(Range(\'C8\'), Range(\'C10:C11\'), Range(\'C13:C17\'), Range(\'D16:D17\'), Range(\'B22:D22\'), Range(\'B30\'), Range(\'B35\')) For Each cell In myRange If IsEmpty(cell.Value) = True Then Cancel = True MsgBox (\'Vérifiez les cellules non remplies\') End If Next cell ActiveSheet.Protect \'350+\' ActiveWorkbook.Save End Sub ','2021-12-26 15:31:32.000000',NULL,'2021-12-26 15:31:32.000000',3),(4,'TextBox Zeichenanzahl überwachen, bei erreichen von Anzahl X Inhalt prüfen auf Übereinstimmung mit XY wenn falsch MsgBox anzeigen','ich möchte eine TextBox in einer Powerpoint befüllen lassen. In die Box soll als Beispiel 123.456 oder 123456 eingegeben werden. Wenn die Menge an Zeichen erreicht ist als einmal 6 oder 7, dann soll der Inhalt überprüft werden. Wenn der Inhalt nicht 123.456 oder 123456 entspricht, dann MsgBox mit \'Bitte 123.456 eintragen) Bitte um Hilfe. ','2021-12-21 15:31:32.000000',NULL,'2021-12-21 15:31:32.000000',4),(5,'Filling a MultipleWidget from database','I\'m trying to get a list of weekday options into a PositiveSmallIntegerField in Django and back to the form. I found a very similar question from the year 2011 which covers the process of having a MultiSelect widget with weekday options, Representing a multi-select field for weekdays in a Django model. Also, there has been an additional question regarding the reverse process, Custo widget based on CheckBoxMultipleSelect for weekdays in Django by user gabn88, which sadly has been deleted since. I tried the approach with the BitChoices class in the first post, and the class itself seems to work. However, I fail to put the selection back to something I can fill the form with. At least that\'s what I think judging from the error message on my view: Select a valid choice. [\'2\', \'16\', \'128\'] is not one of the available choices. Can anybody help me out, please?','2020-12-05 10:11:32.000000',NULL,'2020-12-05 10:11:32.000000',5),(6,'How to select and copy the text from a textbox with Python + Selenium?','I\'m trying to select a web attribute with python via webdriver, specifically I want to copy the name that I entered to the recipent, but I can\'t do.','2020-12-09 10:11:32.000000','2020-12-09 10:11:32.000000','2020-12-09 10:11:32.000000',6),(7,'React/RCTBridgeDelegate.h\' file not found after using stripe react native','after using library https://github.com/stripe/stripe-react-native. in my RN project. I use workspace button to build my project. For debug build on ios, works 100\'%\' fine. But For release build on ios, React/RCTBridgeDelegate.h not found. any ideas?','2019-01-13 10:11:32.000000','2019-01-13 10:11:32.000000','2019-01-13 10:11:32.000000',7);
/*!40000 ALTER TABLE `forum_topic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_user`
--

DROP TABLE IF EXISTS `forum_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forum_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `role` smallint unsigned NOT NULL,
  `company` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  CONSTRAINT `forum_user_chk_1` CHECK ((`role` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_user`
--

LOCK TABLES `forum_user` WRITE;
/*!40000 ALTER TABLE `forum_user` DISABLE KEYS */;
INSERT INTO `forum_user` VALUES (1,'bcrypt_sha256$$2b$12$xOGojcQoccXrPFZ2rqC32uNok8/t.ADCYfQGP0yMSkOuzkD4X7s.G','2022-03-20 20:39:08.586301',1,'Michel','Rodriguez','Gonzales','michoudu34@google.com',1,1,'2015-11-20 10:13:00.000000',2,NULL),(2,'bcrypt_sha256$$2b$12$yW3DT/kGpSjtLnL/qfOLfug.Lctp43ODTn67eLkxjpeqO9LLIb/nS','2021-11-12 10:01:00.000000',0,'HelloSandra','Sandra','Gonzales','sand.rat@google.com',0,1,'2016-11-20 12:01:00.000000',1,NULL),(3,'bcrypt_sha256$$2b$12$IE3ChVHRE6I7WX3KRQvet.EbXwHN9BGJ5atMY06WHSPzppgv0Dojm','2021-11-12 10:01:00.000000',0,'Rabbit','Quentin','Ramirez','ramimi@google.com',0,0,'2016-09-21 10:01:00.000000',1,NULL),(4,'bcrypt_sha256$$2b$12$c1XuZuTlZMTMxz6Nwaxb2.0FUBVg0w3iAj9HKhGJ1U4anxL.Qp8zq','2021-11-12 10:01:00.000000',0,'WhiteRabbit','White','Rabbit','neosauvetoi@google.com',0,1,'2019-04-29 10:01:00.000000',1,NULL),(5,'bcrypt_sha256$$2b$12$ZXT7ztGZE/PEbx7cWCGggOen4sSoAEUfaELiBEPMlVozJO5N5/f7q','2021-11-12 10:01:00.000000',0,'JackyEtMichel','Jacky','Michel','attentionauentorse@google.com',0,0,'2019-07-23 10:01:00.000000',1,NULL),(6,'bcrypt_sha256$$2b$12$iiUdREYKfjbXO.JjDJGb9Ohx7ZE4qBTB5JXgA/T8D4nmgLXsMhOJu','2021-11-12 10:01:00.000000',0,'Martineuu','Martine','TrompeDeFalope','martineF@google.com',0,0,'2021-11-10 10:01:00.000000',1,NULL),(7,'bcrypt_sha256$$2b$12$0EZMjaouua5.5p5h/yP0ReGMkGSlbbbiaOBtApGC8EoXkfDEELPqe','2021-11-12 10:01:00.000000',0,'darksasuke','miguele','Lospoyos','pouletfrit@google.com',0,1,'2021-11-12 10:01:00.000000',1,NULL),(8,'bcrypt_sha256$$2b$12$56QK9bpiKEKxuBngkgyunOKtKQLYFStN8aHXlCoZeqej33eB56Qra',NULL,0,'tes1','test1','test1','test1@gmail.com',0,1,'2022-03-23 09:12:37.081493',1,NULL),(9,'bcrypt_sha256$$2b$12$tp52do4csPulbbxFa8P7Be77lZjn0vnqn6jgHI2LlvLMQTSeuam1K',NULL,0,'test1','test1','test1','test1@gmail.com',0,1,'2022-03-23 10:35:13.058700',1,NULL),(10,'bcrypt_sha256$$2b$12$4vsW63VyMF0PctWNKjQT2O2DxStBv6RooeGlps0U67v9vnfVyVSoO',NULL,0,'pheng','Syou-P\'heng','Do','pheng@gmail.com',0,1,'2022-03-23 14:27:40.501443',2,'Hardis Group'),(11,'bcrypt_sha256$$2b$12$uoahGPwYts0RD9m6o/HkHu7TJJp.hhH7mC3KC8SsHMiO1Ew5z20aq',NULL,0,'luci4','Bertram','Gilfoyle','luci4@gmail.com',0,1,'2022-03-23 14:36:46.850037',2,'Pied Piper'),(12,'bcrypt_sha256$$2b$12$ih.0VgpJVTilBhHvzW88aO0Rn08oqjJpJ8vP3jH/iFWPduufo0WnW',NULL,0,'Goldchain','Dinesh','Chugtai','goldchain@gmail.com',0,1,'2022-03-23 15:32:41.405431',2,'Pied Piper'),(13,'bcrypt_sha256$$2b$12$tegcwrxO6MvRfO2AMEwKbO/FSColm.ThyQmZZctsvPzmrTwBqR0Lu',NULL,0,'JianYang','Yang','Jian','jianyang@gmail.com',0,1,'2022-03-23 15:56:03.193057',1,NULL),(14,'bcrypt_sha256$$2b$12$P24kCAfsR49pwvE.uGMl5.4KkN/td97FQEkHxDo5NcN..rFLea7pK',NULL,0,'richard','Richard','Hendricks','richard@gmail.com',0,1,'2022-03-23 16:05:43.897306',2,'Pied Piper'),(15,'bcrypt_sha256$$2b$12$KaAlKxX7fnGfOEBP8z57m.HN0V31xF2zLm6T.YmeosBPww2Hb5n0C',NULL,0,'erlich','Erlich','Bachman','erlich@gmail.com',0,1,'2022-03-23 20:32:52.588472',2,'Pied Piper'),(16,'bcrypt_sha256$$2b$12$BDB.dSK3nqCp1/lEEgy/Xu8s0xxgC1Vb/t879cgcaXGqHW77yb2YS',NULL,0,'gavin','Gavin','Belson','gavinB@gmail.com',0,1,'2022-03-23 20:36:20.976764',2,'Hooli'),(17,'bcrypt_sha256$$2b$12$3WZ1DH7q9aQ2TV668BBDyO7EZGELDymJyHqpVPLF2T9Qfh.GUru6.',NULL,0,'dwight','Dwight','Schrute','dwight@gmail.com',0,1,'2022-03-23 20:39:39.481396',1,NULL),(18,'bcrypt_sha256$$2b$12$rf63LqxyoRL1Llz4sVzjLOHHCEfFY2c9U7Oh4vBLFr7hTMiTdCdCK',NULL,0,'jim','Jim','Halpert','jim.halpert@gmail.com',0,1,'2022-03-23 20:43:30.591578',1,NULL),(19,'bcrypt_sha256$$2b$12$JgHBxMu/AvFk8yLdOex1JuYFpmuDHep06Ganhb/Q9PYJeg.tpXpyO',NULL,0,'pam','Pam','Beesly','pam.beesly@gmail.com',0,1,'2022-03-23 20:44:12.094282',1,NULL),(24,'bcrypt_sha256$$2b$12$e58Ga.HirgYVANGKu84LW.iqcKlgdZRtulW2r1R0Mf2ufRKnRIqJa',NULL,0,'michael','Michael','Scott','michael.scott@gmail.com',0,1,'2022-03-23 21:00:22.273410',1,NULL),(36,'bcrypt_sha256$$2b$12$ZRgPgJoVpzeREphKIMJnLO0Wi72zUT.d51.ILtfriq2ac0acQHu46',NULL,0,'do_a','Syou-P\'heng','DO','do.syoupheng@gmail.com',0,1,'2022-03-24 20:32:20.993158',2,'Hardis Group');
/*!40000 ALTER TABLE `forum_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_user_groups`
--

DROP TABLE IF EXISTS `forum_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forum_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `forum_user_groups_user_id_group_id_4681d81a_uniq` (`user_id`,`group_id`),
  KEY `forum_user_groups_group_id_49b978b9_fk_auth_group_id` (`group_id`),
  CONSTRAINT `forum_user_groups_group_id_49b978b9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `forum_user_groups_user_id_f09cfef0_fk_forum_user_id` FOREIGN KEY (`user_id`) REFERENCES `forum_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_user_groups`
--

LOCK TABLES `forum_user_groups` WRITE;
/*!40000 ALTER TABLE `forum_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `forum_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_user_skills`
--

DROP TABLE IF EXISTS `forum_user_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forum_user_skills` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `tag_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `forum_user_skills_user_id_tag_id_7a70d2b7_uniq` (`user_id`,`tag_id`),
  KEY `forum_user_skills_tag_id_e086e405_fk_forum_tag_id` (`tag_id`),
  CONSTRAINT `forum_user_skills_tag_id_e086e405_fk_forum_tag_id` FOREIGN KEY (`tag_id`) REFERENCES `forum_tag` (`id`),
  CONSTRAINT `forum_user_skills_user_id_e04dbc8f_fk_forum_user_id` FOREIGN KEY (`user_id`) REFERENCES `forum_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_user_skills`
--

LOCK TABLES `forum_user_skills` WRITE;
/*!40000 ALTER TABLE `forum_user_skills` DISABLE KEYS */;
INSERT INTO `forum_user_skills` VALUES (18,1,13),(17,1,14),(20,1,15),(22,1,16),(19,1,41),(7,8,2),(8,8,5),(11,8,6),(52,10,4),(48,10,9),(59,10,13),(50,10,14),(49,10,15),(61,10,16),(53,10,19),(54,10,20),(60,10,53),(39,12,5),(44,16,4),(62,36,1),(63,36,2),(67,36,3),(70,36,4),(73,36,9),(74,36,10),(72,36,13),(71,36,14),(68,36,15),(69,36,16),(66,36,19),(75,36,27),(65,36,41),(76,36,47),(64,36,53);
/*!40000 ALTER TABLE `forum_user_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_user_user_permissions`
--

DROP TABLE IF EXISTS `forum_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forum_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `forum_user_user_permissions_user_id_permission_id_309ca17a_uniq` (`user_id`,`permission_id`),
  KEY `forum_user_user_perm_permission_id_3b36ab89_fk_auth_perm` (`permission_id`),
  CONSTRAINT `forum_user_user_perm_permission_id_3b36ab89_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `forum_user_user_permissions_user_id_71015ee5_fk_forum_user_id` FOREIGN KEY (`user_id`) REFERENCES `forum_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_user_user_permissions`
--

LOCK TABLES `forum_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `forum_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `forum_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-24 23:28:47
