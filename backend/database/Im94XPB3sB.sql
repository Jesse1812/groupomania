-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mar. 15 fév. 2022 à 15:00
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
-- Structure de la table `comment`
--

CREATE TABLE `comment` (
  `commentId` int(11) NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `comment`
--

INSERT INTO `comment` (`commentId`, `content`, `userId`, `postId`) VALUES
(33, 'Moi aussi !', 10, 7),
(34, 'Oui ca va toi ?', 10, 8),
(35, 'Belles photos !', 10, 10),
(36, '18h30', 6, 9),
(39, 'Je passe bientôt réparer la machine', 63, 10),
(40, 'Très belle image !', 56, 7),
(41, 'hola', 56, 10),
(43, 'Bravo on se voit ce soir à la réunion', 9, 7),
(44, 'Ok à ce soir !', 9, 8);

-- --------------------------------------------------------

--
-- Structure de la table `like`
--

CREATE TABLE `like` (
  `likeId` int(11) NOT NULL,
  `likes` int(11) DEFAULT '0',
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `post`
--

CREATE TABLE `post` (
  `postId` int(11) NOT NULL,
  `message` text COLLATE utf8_unicode_ci NOT NULL,
  `picture` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `video` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `post`
--

INSERT INTO `post` (`postId`, `message`, `picture`, `video`, `userId`) VALUES
(7, 'Bonjour je suis nouveau sur ce forum et j\'aimerai comprendre comment ca fonctionne ? ', 'https://ichef.bbci.co.uk/news/976/cpsprodpb/6D5A/production/_119449972_10.jpg', 'https://giphy.com/embed/eMhpapidsNEc36lVd2', 8),
(8, 'Salut, voici mes nouvelles photos et videos merci de me répondre ', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', 'https://giphy.com/embed/Go6f5qeQUZF3a', 8),
(9, 'Salut à tous à quelle heure est la réunion de ce soir? ', 'undefined', 'undefined', 9),
(10, 'Quelqu\'un pourrait passer à la cafet pour réparer la machine à café?', 'https://cdn1.drmarchac.com/wp-content/uploads/2018/03/profiloplastie-visage-injection-acide-hyaluronique-dr-marchac.jpg', 'https://ak.picdn.net/shutterstock/videos/1060628371/preview/stock-footage-beautiful-young-african-american-girl-looks-up-and-at-camera-portrait-stylish-woman-confident.webm', 6),
(18, 'test', NULL, NULL, 9);

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
(52, 'Christophe', 'Jean', '034cecilia.flamand@pole-emploi.net', '$2b$10$2HAyKa29yncEtXhnt3TpzeTh3/vvVzCs1VIPFrHE8peBdReS.11Mu', 'undefined', 0),
(56, 'Papin', 'Jean Pierre', 'rafagirier86@gmail.co', '$2b$10$0jPzTeJe8TigHr3U.teOCOl1Y8ZSYtMbbYdMv4zB0Bk760L0PEFNi', 'undefined', 0),
(61, 'Girier', 'Jean Christophe', 'jcgirdddier@hotmail.com', '$2b$10$.ZyKvfpG5PQGSD/JYmGHtOl/Tdy3K8BBJn7Ss.hBi/vHLRb3zmYn2', 'undefined', 0),
(63, 'Wayne', 'John', 'lol@dgf.fr', '$2b$10$iM9M6eXJ7km85.EXAKRYk.8QfTjJWk94JNnw4HpqbG1MbtTXmJSPC', 'undefined', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`commentId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `postId` (`postId`);

--
-- Index pour la table `like`
--
ALTER TABLE `like`
  ADD PRIMARY KEY (`likeId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `postId` (`postId`);

--
-- Index pour la table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`postId`),
  ADD KEY `userId` (`userId`);

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
-- AUTO_INCREMENT pour la table `comment`
--
ALTER TABLE `comment`
  MODIFY `commentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT pour la table `like`
--
ALTER TABLE `like`
  MODIFY `likeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `post`
--
ALTER TABLE `post`
  MODIFY `postId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userid`) ON DELETE CASCADE,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`postId`) REFERENCES `post` (`postid`) ON DELETE CASCADE;

--
-- Contraintes pour la table `like`
--
ALTER TABLE `like`
  ADD CONSTRAINT `like_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userid`) ON DELETE CASCADE,
  ADD CONSTRAINT `like_ibfk_2` FOREIGN KEY (`postId`) REFERENCES `post` (`postid`) ON DELETE CASCADE;

--
-- Contraintes pour la table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userid`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
