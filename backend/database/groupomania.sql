-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mar. 15 fév. 2022 à 09:52
-- Version du serveur :  8.0.13-4
-- Version de PHP :  7.2.24-0ubuntu0.18.04.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `Im94XPB3sB`
--

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `nom` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `prenom` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `photo` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'profile.png',
  `admin` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`userId`, `nom`, `prenom`, `email`, `password`, `photo`, `admin`) VALUES
(6, 'Paris', 'Admin', 'wajdi40@gmail.com', '$2b$10$SPbAyZvUrxeTsJ6m9BQ1JOb6vnDce.sWd29K31hu372QFh7NHmRKq', '', 1),
(8, 'Fuentes', 'Deborah', 'debo@gmail.com', '$2b$10$xbRH3lP8TCFCIe04o20y1umjFQzsV8L6.9B7BtSfXNQDGmHtIgPZ.', 'undefined', 0),
(9, 'Wins', 'Rafaela', 'raf@gmail.com', '$2b$10$AgZ95UAd1pYzwiRXkoLX/eaLkubr/aaI.u3YUwLDJHHWfqr6Dapt.', 'undefined', 0),
(10, 'Girier', 'Jean Christophe', 'jcgirier@hotmail.com', '$2b$10$Owk5um22dRBUKdyckIjfiemcEcgzhjYMHuDXKo8PkXLD3Ken1tqxC', 'undefined', 0),
(51, 'Antibes', 'Michael', 'zazaz@gh.com', '$2b$10$6KZgpWuiL7VX77nd59ISXe6TuLGMm0P5zCCZudsrIQE1kWTo1UjD2', 'undefined', 0),
(52, 'Christophe', 'Jean', '034cecilia.flamand@pole-emploi.net', '$2b$10$2HAyKa29yncEtXhnt3TpzeTh3/vvVzCs1VIPFrHE8peBdReS.11Mu', 'undefined', 0),
(56, 'Papin', 'Jean Pierre', 'rafagirier86@gmail.co', '$2b$10$0jPzTeJe8TigHr3U.teOCOl1Y8ZSYtMbbYdMv4zB0Bk760L0PEFNi', 'undefined', 0),
(59, 'Girier', 'Ruth', 'rafagirier86@gmail.com', '$2b$10$8511N4YvDddsnywyMyj4MOytnXjErMypMnETF8hK56iTWJ2fRIgbm', 'undefined', 0),
(61, 'Girier', 'Jean Christophe', 'jcgirdddier@hotmail.com', '$2b$10$.ZyKvfpG5PQGSD/JYmGHtOl/Tdy3K8BBJn7Ss.hBi/vHLRb3zmYn2', 'undefined', 0),
(63, 'Wayne', 'John', 'lol@dgf.fr', '$2b$10$iM9M6eXJ7km85.EXAKRYk.8QfTjJWk94JNnw4HpqbG1MbtTXmJSPC', 'undefined', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
