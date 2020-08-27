-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  jeu. 27 août 2020 à 19:38
-- Version du serveur :  5.7.26
-- Version de PHP :  7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `thalassante`
--
CREATE DATABASE IF NOT EXISTS `thalassante` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `thalassante`;

-- --------------------------------------------------------

--
-- Structure de la table `activites`
--

DROP TABLE IF EXISTS `activites`;
CREATE TABLE IF NOT EXISTS `activites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `description` varchar(600) NOT NULL,
  `image` varchar(255) NOT NULL,
  `affiche` varchar(255) NOT NULL,
  `date` varchar(50) NOT NULL,
  `incubation` varchar(255) NOT NULL,
  `maritime` varchar(255) NOT NULL,
  `social` varchar(255) NOT NULL,
  `territoire` varchar(255) NOT NULL,
  `environ` varchar(255) NOT NULL,
  `sport` varchar(255) NOT NULL,
  `art` varchar(255) NOT NULL,
  `pedago` varchar(255) NOT NULL,
  `construc` varchar(255) NOT NULL,
  `cuisine` varchar(255) NOT NULL,
  `recherche` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=173 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `activites`
--

INSERT INTO `activites` (`id`, `titre`, `description`, `image`, `affiche`, `date`, `incubation`, `maritime`, `social`, `territoire`, `environ`, `sport`, `art`, `pedago`, `construc`, `cuisine`, `recherche`) VALUES
(152, 'ActivitÃ© ', 'ttt', 'uploads/', 'uploads_f/', '2019', '', '#D35315', '#EE7810', '', '#E8521F', '#E30E20', '#F08574', '', '', '', ''),
(153, 'ActivitÃ© 5', 'ggg', 'uploads/', 'uploads_f/', '2020', '#AA3614', '#D35315', '#EE7810', '#6E473C', '', '#E30E20', '#F08574', '#E40C50', '', '#D5328A', '#C795C3'),
(155, 'ActivitÃ© 6', 'mmm', 'uploads/', 'uploads_f/', '2017', '#AA3614', '#D35315', '#EE7810', '', '#E8521F', '#E30E20', '#F08574', '', '#B2004B', '#D5328A', '#C795C3'),
(169, 'test', 'test', 'uploads/blackBigNEG.jpg', 'uploads_f/FICHES 4 Page 12.jpg', '2017', '#AA3614', '#D35315', '', '#6E473C', '#E8521F', '', '#F08574', '#E40C50', '', '#D5328A', '#C795C3'),
(172, 'Activite 4', 'test', 'uploads/Website_THALA_LOGO THALA blueBigNEG.jpg', 'uploads_f/FICHES 4 Page 12.jpg', '2019', '#AA3614', '', '#EE7810', '', '#E8521F', '#E30E20', '#F08574', '', '#B2004B', '', ''),
(171, 'test', 'test', 'uploads/blackBigNEG.jpg', 'uploads_f/FICHES 4 Page 12.jpg', '2017', '#AA3614', '#D35315', '', '#6E473C', '#E8521F', '', '#F08574', '#E40C50', '', '#D5328A', '#C795C3');

-- --------------------------------------------------------

--
-- Structure de la table `lieu`
--

DROP TABLE IF EXISTS `lieu`;
CREATE TABLE IF NOT EXISTS `lieu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `block` varchar(255) NOT NULL,
  `tous` tinyint(1) NOT NULL,
  `communs` tinyint(1) NOT NULL,
  `service` tinyint(1) NOT NULL,
  `libre` tinyint(1) NOT NULL,
  `sous-titre` varchar(255) NOT NULL,
  `texte` varchar(500) NOT NULL,
  `image` varchar(255) NOT NULL,
  `plan` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `lieu`
--

INSERT INTO `lieu` (`id`, `block`, `tous`, `communs`, `service`, `libre`, `sous-titre`, `texte`, `image`, `plan`) VALUES
(1, 'FOYER', 1, 1, 0, 0, 'sous-test', 'test tesdsfdsfdfdsfds', 'images/lieux/IMG_56542.jpg', 'images/icone/block1.png'),
(2, 'BUVETTE', 1, 1, 0, 0, 'sous-test', 'test iglou iglou', 'images/lieux/buve.jpg', ''),
(3, 'ACCEUIL / BIBLIOTHÈQUE / BROCANTE', 1, 1, 0, 0, 'l\'accueil', 'blabloobla', 'images/lieux/accueil.jpg', ''),
(4, 'CO-WORKING', 1, 0, 1, 0, 'COWORK', 'TOOTTHTBN', 'images/lieux/coworking.jpg', ''),
(5, 'CO-ATELIER', 1, 0, 0, 0, 'CO-ATELIER', 'bricolage en tous genre', 'images/lieux/atelier.jpg', ''),
(6, 'CO-CUISINE', 1, 1, 0, 1, 'cuisine', 'bonne appetit', 'images/lieux/coworking.jpg', ''),
(7, 'LE SIMPLE', 1, 0, 1, 1, 'Un simple conteneur', 'klkdljflkjlk ljfdl lk lkj  jldjdfkjds  kljfdskjfskj', 'images/lieux/simple.png', ''),
(8, 'LE DOUBLE', 1, 0, 1, 1, 'le conteneur double', 'fdsfdssf dgdfgf fdg fgd hffdgd      f hfhfh f hgff', 'images/lieux/double.jpg', ''),
(9, 'TERRASSES', 1, 1, 0, 0, 'la terrasse', 'dhjdfkhj djkhd  jsdhd sdkj hfjk sdf jkhf djsh', 'images/lieux/terrasse.jpg', ''),
(10, 'COURS', 1, 1, 0, 0, 'terrsse', 'dfkjsdkjklj dflkjfdlkj lkdsj lskj lkjsdfj', 'images/lieux/cour.jpg', ''),
(11, 'KAYAK', 1, 0, 1, 1, 'les kayaks', 'dkjdslj dkljjkljdsf dslkjdl ', 'images/lieux/kayak.jpg', ''),
(12, 'MATÉRIAUTHÈQUE', 1, 1, 0, 0, 'Materiaux', 'dslkjfkd qlkjdk dlkjqd qjkl', 'images/lieux/MATÉRIAUTHÈQUE.jpg', ''),
(13, 'LOCAUX TECHNIQUES', 1, 0, 1, 1, 'technique', 'dfsdfs', 'images/lieux/LOCAUX_TECHNIQUES.jpg', ''),
(14, 'RÉSIDENTS', 1, 1, 0, 0, 'le résident', 'jkdj klsdj kjdf kjdfsdlkjdsflj ', 'images/lieux/ReSIDENTS.png', '');

-- --------------------------------------------------------

--
-- Structure de la table `lieux`
--

DROP TABLE IF EXISTS `lieux`;
CREATE TABLE IF NOT EXISTS `lieux` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `texte` varchar(600) NOT NULL,
  `photo` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `lieux`
--

INSERT INTO `lieux` (`id`, `nom`, `texte`, `photo`) VALUES
(1, 'TOUS', 'L’inscription sérielle de l\'oeuvre architecturale de Le Corbusier sur la Liste du patrimoine mondial est\r\nintervenue au mois de juillet 2016 lors de la réunion du Comité du patrimoine mondial à Istanbul.\r\nElle est le fruit d\'un travail collectif réalisé par l\'Allemagne, l\'Argentine, la Belgique, la France, l’Inde, le Japon et la Suisse.', 'images/lieux/IMG_56542.jpg'),
(2, 'COMMUNS', 'L’inscription sérielle de l\'oeuvre architecturale de Le Corbusier sur la Liste du patrimoine mondial est\r\nintervenue au mois de juillet 2016 lors de la réunion du Comité du patrimoine mondial à Istanbul.\r\nElle est le fruit d\'un travail collectif réalisé par l\'Allemagne, l\'Argentine, la Belgique, la France, l’Inde, le Japon et la Suisse.', 'images/lieux/buve.jpg'),
(3, 'SERVICES', 'L’inscription sérielle de l\'oeuvre architecturale de Le Corbusier sur la Liste du patrimoine mondial est\r\nintervenue au mois de juillet 2016 lors de la réunion du Comité du patrimoine mondial à Istanbul.\r\nElle est le fruit d\'un travail collectif réalisé par l\'Allemagne, l\'Argentine, la Belgique, la France, l’Inde, le Japon et la Suisse.', 'images/lieux/accueil.jpg'),
(4, 'ESPACE', 'L’inscription sérielle de l\'oeuvre architecturale de Le Corbusier sur la Liste du patrimoine mondial est\r\nintervenue au mois de juillet 2016 lors de la réunion du Comité du patrimoine mondial à Istanbul.\r\nElle est le fruit d\'un travail collectif réalisé par l\'Allemagne, l\'Argentine, la Belgique, la France, l’Inde, le Japon et la Suisse.', 'images/lieux/coworking.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `user`, `password`) VALUES
(1, 'admin', '$2y$12$vZCSX3GQCKtX00mrRFWDxe2dYacK5.MZk27Tx0ltM.J.n1EiIPFiq'),
(4, 'thalassante', '$2y$12$pMT4WxN4Im7h2..uZLsGhugPl57u7aSJiHBs1KGrsXNWoimP39M5G');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
