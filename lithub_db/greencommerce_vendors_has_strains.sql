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
-- Table structure for table `vendors_has_strains`
--

DROP TABLE IF EXISTS `vendors_has_strains`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vendors_has_strains` (
  `strain_id` int(11) NOT NULL,
  `vendor_id` int(11) NOT NULL,
  `price_gram` decimal(4,2) DEFAULT NULL,
  `price_eigth` decimal(4,2) DEFAULT NULL,
  `price_quarter` decimal(4,2) DEFAULT NULL,
  `price_half` decimal(5,2) DEFAULT NULL,
  `price_oz` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`strain_id`,`vendor_id`),
  KEY `fk_strains_has_vendors_vendors1_idx` (`vendor_id`),
  KEY `fk_strains_has_vendors_strains1_idx` (`strain_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendors_has_strains`
--

LOCK TABLES `vendors_has_strains` WRITE;
/*!40000 ALTER TABLE `vendors_has_strains` DISABLE KEYS */;
INSERT INTO `vendors_has_strains` VALUES (25,1,10.00,40.00,80.00,100.00,200.00),(27,1,10.99,24.99,69.99,139.99,279.99),(35,3,30.00,50.00,99.99,150.00,200.00),(65,2,11.99,23.99,70.99,140.99,280.99),(70,3,22.00,43.00,67.00,85.00,115.00),(71,3,40.00,80.00,99.99,200.00,250.00),(87,1,25.00,40.00,75.00,175.00,235.00),(91,1,35.00,75.00,99.99,275.00,400.00),(95,1,5.00,7.50,10.50,12.50,20.00),(99,3,99.99,99.99,99.99,800.00,999.99),(106,3,15.00,30.00,70.00,100.00,130.00),(118,1,30.00,65.00,99.99,190.00,240.00),(123,3,99.99,99.99,99.99,400.00,500.00),(160,3,50.00,99.99,99.99,250.00,300.00),(187,1,30.00,60.00,99.99,150.00,225.00),(190,1,30.00,65.00,99.99,150.00,220.00),(195,1,32.00,64.00,99.99,190.00,240.00),(196,1,15.00,35.00,70.00,130.00,200.00),(201,1,20.00,40.00,80.00,160.00,320.00),(294,1,20.00,40.00,80.00,160.00,320.00);
/*!40000 ALTER TABLE `vendors_has_strains` ENABLE KEYS */;
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
