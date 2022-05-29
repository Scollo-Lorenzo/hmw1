-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mag 29, 2022 alle 16:10
-- Versione del server: 10.4.21-MariaDB
-- Versione PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hmw1`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `carrello`
--

CREATE TABLE `carrello` (
  `ID_Utente` int(11) NOT NULL,
  `ID_Scarpa` varchar(255) NOT NULL,
  `Prezzo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `carrello`
--

INSERT INTO `carrello` (`ID_Utente`, `ID_Scarpa`, `Prezzo`) VALUES
(18, '0824a404-dd36-44c2-859b-2b330f5d5255', 70),
(18, '15eb68a8-e60c-4407-acda-46760bbc910b', 140),
(18, 'c62d7b0d-9733-4e37-b3cb-91d11471c6a3', 60),
(18, 'fad1fb92-b97a-40e0-a67e-4c064a841b63', 130),
(19, '2d5dc0c7-aef5-4b2e-8b4b-cf3b0530b636', 125),
(19, '54b1d4cc-97ec-4863-b3cc-f1bd05860e20', 85),
(19, '57a0c9ca-969f-4f04-9949-6cedd3050f4d', 95),
(19, '6df245fe-399d-4aff-9025-fbf8026f9013', 140),
(19, '8477d411-64b7-48ba-919c-463a15e4a66e', 65),
(19, 'b02deebb-817d-41ed-b673-5881b069fac5', 115),
(19, 'e24ddd2f-33eb-403b-b597-2af820590320', 90),
(19, 'f79a7e12-5c92-4e55-ac7c-5a72141e6eab', 180);

-- --------------------------------------------------------

--
-- Struttura della tabella `listapreferiti`
--

CREATE TABLE `listapreferiti` (
  `ID_Utente` int(11) NOT NULL,
  `ID_Scarpa` varchar(255) NOT NULL,
  `Prezzo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `listapreferiti`
--

INSERT INTO `listapreferiti` (`ID_Utente`, `ID_Scarpa`, `Prezzo`) VALUES
(18, '0824a404-dd36-44c2-859b-2b330f5d5255', 70),
(18, '15eb68a8-e60c-4407-acda-46760bbc910b', 140),
(18, 'f939fb27-c941-47a6-99c8-caea025d5f2e', 80),
(19, '8477d411-64b7-48ba-919c-463a15e4a66e', 65),
(19, 'b02deebb-817d-41ed-b673-5881b069fac5', 115),
(19, 'e24ddd2f-33eb-403b-b597-2af820590320', 90),
(19, 'f79a7e12-5c92-4e55-ac7c-5a72141e6eab', 180),
(19, 'fcef6f9f-0735-4ae5-a442-e954545c2311', 80);

-- --------------------------------------------------------

--
-- Struttura della tabella `scarpe`
--

CREATE TABLE `scarpe` (
  `ID` varchar(255) NOT NULL,
  `Nome` varchar(255) DEFAULT NULL,
  `Brand` varchar(255) DEFAULT NULL,
  `URLFoto` varchar(255) DEFAULT NULL,
  `Prezzo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `scarpe`
--

INSERT INTO `scarpe` (`ID`, `Nome`, `Brand`, `URLFoto`, `Prezzo`) VALUES
('0824a404-dd36-44c2-859b-2b330f5d5255', 'Dear Rui', 'Jordan', 'https://images.stockx.com/images/Air-Jordan-Seriese-01-Dear-Rui.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651111540', 70),
('15eb68a8-e60c-4407-acda-46760bbc910b', 'Jewel NYC White Midnight Navy', 'Nike', 'https://images.stockx.com/images/Nike-Air-Force-1-Mid-Jewel-NYC-White-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651599948', 140),
('2d5dc0c7-aef5-4b2e-8b4b-cf3b0530b636', 'Concord', 'Jordan', 'https://images.stockx.com/images/Air-Jordan-11-CMFT-Low-Concord.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652142753', 125),
('54b1d4cc-97ec-4863-b3cc-f1bd05860e20', 'Undefeated U-Man Blue Lolite', 'Vans', 'https://images.stockx.com/images/vans-vault-og-old-skool-lx-undefeated-u-man-blue-lolite-2.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638726272', 85),
('57a0c9ca-969f-4f04-9949-6cedd3050f4d', 'Bape 1st Camo', 'Vans', 'https://images.stockx.com/images/Vans-Authentic-44-DX-Bape-1st-Camo.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1636536814', 95),
('6df245fe-399d-4aff-9025-fbf8026f9013', 'Metallic Silver', 'Jordan', 'https://images.stockx.com/images/Air-Jordan-1-Zoom-CMFT-Metallic-Silver.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652142756', 140),
('8477d411-64b7-48ba-919c-463a15e4a66e', 'Zen Master (TD)', 'Jordan', 'https://images.stockx.com/images/Air-Jordan-1-Mid-SE-Zen-Master-TD.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651079062', 65),
('b02deebb-817d-41ed-b673-5881b069fac5', 'Geoff McFetridge Gamelan Of Tags', 'Vans', 'https://images.stockx.com/images/Vans-Vault-OG-Authentic-LX-Geoff-McFetridge-Gamelan-Of-Tags.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638466395', 115),
('c62d7b0d-9733-4e37-b3cb-91d11471c6a3', 'Glow Green (2022) (Restock)', 'adidas', 'https://images.stockx.com/images/adidas-Yeezy-Slide-Glow-Green-2022.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651870280', 60),
('e24ddd2f-33eb-403b-b597-2af820590320', 'Geoff McFetridge Hallucinaut', 'Vans', 'https://images.stockx.com/images/Vans-Vault-OG-Lampin-LX-Geoff-McFetridge-Hallucinaut.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638466385', 90),
('f79a7e12-5c92-4e55-ac7c-5a72141e6eab', 'Rui Hachimura', 'Jordan', 'https://images.stockx.com/images/Air-Jordan-36-Rui-Hachimura.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651111535', 180),
('f939fb27-c941-47a6-99c8-caea025d5f2e', 'Zen Master (PS)', 'Jordan', 'https://images.stockx.com/images/Air-Jordan-1-Mid-SE-Zen-Master-PS-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650653169', 80),
('fad1fb92-b97a-40e0-a67e-4c064a841b63', 'Naruto Sage of the Six Paths', 'Jordan', 'https://images.stockx.com/images/Air-Jordan-Zion-1-Naruto-Sage-of-the-Six-Paths.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651111535', 130),
('fcef6f9f-0735-4ae5-a442-e954545c2311', 'Summit White Flat Pewter', 'Nike', 'https://images.stockx.com/images/Nike-Retro-GTS-97-Summit-White-Flat-Pewter.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652210664', 80);

-- --------------------------------------------------------

--
-- Struttura della tabella `utente`
--

CREATE TABLE `utente` (
  `ID` int(11) NOT NULL,
  `Username` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `DataNascita` date DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `utente`
--

INSERT INTO `utente` (`ID`, `Username`, `Email`, `DataNascita`, `Password`) VALUES
(17, 'Prova1456_', 'Prova1456@live.it', '1999-10-14', '0cdb5ce02c1de358fa8021f31faef4bac21451a1ab8a6971d338b9aeed85b169'),
(18, 'ErolofAstora00_', 'lorenzosky00@live.it', '2000-02-24', '2d8adb0e3d2d0b64ad373023f8aa2596e76a554a163aa1c57b4e935c104aa4cf'),
(19, 'Lorenzo12_', 'Lorenzo12@live.it', '1987-05-27', 'f7b27b47d15745d77c8a53ec327819f453a3b8e066bb0dea1a351c43f464ab02');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `carrello`
--
ALTER TABLE `carrello`
  ADD PRIMARY KEY (`ID_Utente`,`ID_Scarpa`),
  ADD KEY `idx2_ID_Utente` (`ID_Utente`),
  ADD KEY `idx2_ID_Scapra` (`ID_Scarpa`);

--
-- Indici per le tabelle `listapreferiti`
--
ALTER TABLE `listapreferiti`
  ADD PRIMARY KEY (`ID_Utente`,`ID_Scarpa`),
  ADD KEY `idx_ID_Utente` (`ID_Utente`),
  ADD KEY `idx_ID_Scapra` (`ID_Scarpa`);

--
-- Indici per le tabelle `scarpe`
--
ALTER TABLE `scarpe`
  ADD PRIMARY KEY (`ID`);

--
-- Indici per le tabelle `utente`
--
ALTER TABLE `utente`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `utente`
--
ALTER TABLE `utente`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `carrello`
--
ALTER TABLE `carrello`
  ADD CONSTRAINT `carrello_ibfk_1` FOREIGN KEY (`ID_Utente`) REFERENCES `utente` (`ID`),
  ADD CONSTRAINT `carrello_ibfk_2` FOREIGN KEY (`ID_Scarpa`) REFERENCES `scarpe` (`ID`);

--
-- Limiti per la tabella `listapreferiti`
--
ALTER TABLE `listapreferiti`
  ADD CONSTRAINT `listapreferiti_ibfk_1` FOREIGN KEY (`ID_Utente`) REFERENCES `utente` (`ID`),
  ADD CONSTRAINT `listapreferiti_ibfk_2` FOREIGN KEY (`ID_Scarpa`) REFERENCES `scarpe` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
