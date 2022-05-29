/*

DROP TABLE utente;

CREATE TABLE provalink
(

    URL VARCHAR(500) PRIMARY KEY,
    Nome VARCHAR(255)

)Engine = "innoDB";

ALTER TABLE UTENTE
ADD COLUMN DataNascita DATE,
ADD COLUMN Password VARCHAR(255);



CREATE TABLE PROVA
(
    Variabile VARCHAR(255)
)Engine = "innoDB";
*/

CREATE TABLE UTENTE
(

    ID Integer PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(255),
    Email VARCHAR(255),
    DataNascita DATE,
    Password VARCHAR(255)
    

)Engine = "innoDB";

CREATE TABLE SCARPE
(

    ID VARCHAR(255) PRIMARY KEY,
    Nome VARCHAR(255), 
    Brand VARCHAR(255),
    URLFoto VARCHAR(255)

)Engine = "innoDB";

ALTER TABLE scarpe
ADD COLUMN Prezzo INTEGER;

CREATE TABLE LISTAPREFERITI
(

    ID_Utente INTEGER,
    ID_Scarpa VARCHAR(255),
    Prezzo INTEGER,
    INDEX idx_ID_Utente(ID_Utente),
    INDEX idx_ID_Scapra(ID_Scarpa),
    FOREIGN KEY (ID_Utente) REFERENCES UTENTE(ID),
    FOREIGN KEY (ID_Scarpa) REFERENCES SCARPE(ID),
    PRIMARY KEY (ID_Utente, ID_Scarpa)

)Engine = "innoDB";

CREATE TABLE CARRELLO
(
    
    ID_Utente INTEGER,
    ID_Scarpa VARCHAR(255),
    Prezzo INTEGER,
    INDEX idx2_ID_Utente(ID_Utente),
    INDEX idx2_ID_Scapra(ID_Scarpa),
    FOREIGN KEY (ID_Utente) REFERENCES UTENTE(ID),
    FOREIGN KEY (ID_Scarpa) REFERENCES SCARPE(ID),
    PRIMARY KEY (ID_Utente, ID_Scarpa)

)Engine = "innoDB";