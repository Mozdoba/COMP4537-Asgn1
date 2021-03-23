-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 22, 2021 at 10:30 PM
-- Server version: 5.7.33
-- PHP Version: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `michealo_COMP4537Asgn1`
--

-- --------------------------------------------------------

--
-- Table structure for table `QUOTES`
--

CREATE TABLE `QUOTES` (
  `ID` int(10) NOT NULL,
  `QUOTE` varchar(500) DEFAULT NULL,
  `AUTHOR` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `QUOTES`
--

INSERT INTO `QUOTES` (`ID`, `QUOTE`, `AUTHOR`) VALUES
(1, 'Does this work?', 'Einstein'),
(2, 'Harry is adjusting great to America', 'Duchess of Sussex');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `QUOTES`
--
ALTER TABLE `QUOTES`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `QUOTES`
--
ALTER TABLE `QUOTES`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
