-- MySQL dump 10.13  Distrib 5.6.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: greencommerce
-- ------------------------------------------------------
-- Server version	5.5.41-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reservations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `vendor_id` int(11) NOT NULL,
  `quantity_gram` int(11) DEFAULT NULL,
  `quantity_eigth` int(11) DEFAULT NULL,
  `quantity_quarter` int(11) DEFAULT NULL,
  `quantity_half` int(11) DEFAULT NULL,
  `quantity_oz` int(11) DEFAULT NULL,
  `strain_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_reservations_users_idx` (`user_id`),
  KEY `fk_reservations_vendors1_idx` (`vendor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
INSERT INTO `reservations` VALUES (2,'1','2008-11-11 13:23:44','2008-11-11 13:23:44',2,1,0,0,0,1,0,201),(13,'0','0000-00-00 00:00:00','0000-00-00 00:00:00',1,3,1,0,0,0,0,NULL),(14,'0','0000-00-00 00:00:00','0000-00-00 00:00:00',1,3,1,0,0,0,0,NULL),(15,'0','0000-00-00 00:00:00','0000-00-00 00:00:00',1,3,1,0,0,0,0,NULL),(16,'0','0000-00-00 00:00:00','0000-00-00 00:00:00',1,3,1,0,0,0,0,NULL),(17,'0','0000-00-00 00:00:00','0000-00-00 00:00:00',1,3,1,0,0,0,0,NULL),(18,'0','0000-00-00 00:00:00','0000-00-00 00:00:00',1,3,1,0,0,0,0,NULL),(19,'0','0000-00-00 00:00:00','0000-00-00 00:00:00',1,3,1,0,0,0,0,NULL),(20,'0','0000-00-00 00:00:00','0000-00-00 00:00:00',1,3,1,0,0,0,0,NULL),(21,'0','0000-00-00 00:00:00','0000-00-00 00:00:00',1,3,1,0,0,0,0,NULL),(22,'0','0000-00-00 00:00:00','0000-00-00 00:00:00',1,3,1,0,0,0,0,NULL),(23,'0','0000-00-00 00:00:00','0000-00-00 00:00:00',1,3,1,0,0,0,0,NULL),(24,'0','0000-00-00 00:00:00','0000-00-00 00:00:00',1,3,1,0,0,0,0,NULL),(25,'1','0000-00-00 00:00:00','0000-00-00 00:00:00',1,1,1,0,0,0,0,87),(26,'1','0000-00-00 00:00:00','0000-00-00 00:00:00',1,1,1,0,0,0,0,87);
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-09-14 12:25:15
