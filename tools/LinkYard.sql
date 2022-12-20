-- BEWARE! 
-- This script may override your currently selected database.
-- Make sure you're on an empty database before running it to ensure your data doesn't get lost.
DROP TABLE IF EXISTS LINKS;
DROP TABLE IF EXISTS CATEGORIES;
DROP TABLE IF EXISTS USERS;
DROP TABLE IF EXISTS LINKAGORIES;

-- STRONG ENTITIES' TABLES
CREATE TABLE USERS(
    username VARCHAR(20),
    password varchar(30),
    email VARCHAR(30),
    name VARCHAR(50),
    surname VARCHAR(50),
    signUpDate DATE,
    PRIMARY KEY (username)
);
CREATE TABLE LINKS(
    linkID INTEGER AUTO_INCREMENT PRIMARY KEY,
    publicationDate DATE,
    url VARCHAR(2048), -- the maximum character amount for a URL address is 2048.
    name VARCHAR(50),
    lastTimeEdited DATE,
    publisherUsername VARCHAR(20),
    accessibility VARCHAR(20),
    description VARCHAR(2000),
    rating INTEGER,
    CONSTRAINT links_fk_publisherUsernameID FOREIGN KEY (publisherUsername) REFERENCES USERS(username)
);
CREATE TABLE CATEGORIES(
    categoryID INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    publisherUsername VARCHAR(20),
    CONSTRAINT categories_fk_publisherUsernameID FOREIGN KEY (publisherUsername) REFERENCES USERS(username)
);

-- BINARY RELATIONS' TABLES
CREATE TABLE LINKAGORIES(
    linkID INTEGER,
    categoryID INTEGER,
    PRIMARY KEY (linkID, categoryID),
    CONSTRAINT linkagories_fk_linkID FOREIGN KEY (linkID) REFERENCES LINKS(linkID),
    CONSTRAINT linkagories_fk_categoryID FOREIGN KEY (categoryID) REFERENCES CATEGORIES(categoryID)
);

-- ***************************************************************************************************************************
-- ____________TRIGGERS____________
-- Automatic link ID
DELIMITER //
CREATE OR REPLACE TRIGGER AI_LINKS
    AFTER INSERT ON LINKS
    FOR EACH ROW
BEGIN
    INSERT INTO LINKAGORIES (linkID, categoryID) VALUES(NEW.linkID, 1); -- this will set the Generic category to the newly added link.
END
//
DELIMITER ;

-- In case a category is removed...
-- We'll check if there're links that are currently using the category. If it is the case, we will prevent it from being removed.
-- We'll also prevent the categories added by the administrators from being removed.
DELIMITER //
CREATE OR REPLACE TRIGGER BD_CATEGORIES
    BEFORE DELETE ON CATEGORIES
    FOR EACH ROW
BEGIN
    DECLARE $categoriesSum INTEGER;
    
    -- IF OLD.categoryID BETWEEN 0 AND 6 THEN -- the ID 0 is the one assigned to the 'Generic' category.
    IF OLD.publisherUsername IN ('admin') THEN
        SIGNAL SQLSTATE 'HY100' SET MESSAGE_TEXT = 'This category cannot be removed. It is required by the system.';
    ELSE
        SELECT COUNT(*) INTO $categoriesSum FROM LINKAGORIES WHERE categoryID = OLD.categoryID;
        IF $categoriesSum >= 1 THEN
            SIGNAL SQLSTATE 'HY100' SET MESSAGE_TEXT = "There are links associated to this category... You cannot remove it.";
        END IF;
    END IF;
END
//
DELIMITER ;


-- ***************************************************************************************************************************
-- ADMINISTRATOR USER
INSERT INTO USERS (username, password, email, name, surname, signUpDate)
    VALUES('admin', '@Grup08@', 'support@linkyard.com', NULL, NULL, NULL);


-- ***************************************************************************************************************************
-- PREDEFINED CATEGORIES
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('General', 'admin');
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Others', 'admin');
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Shopping', 'admin');
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Learning', 'admin');
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Gaming', 'admin');
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Sports', 'admin');
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Food', 'admin');

-- ***************************************************************************************************************************
-- EXTRA OPTIONAL CATEGORIES. IF YOU WANT TO ENABLE ONE, UNCOMMENT IT
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Racing', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Google', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Windows', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Linux', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('GPD', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Politics', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Information', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Newspapers', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Dancing', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Medicine', 'admin');
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Health', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Training', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Cold', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Warmth', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Temperature', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Geography', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Astronomy', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Bikes', 'admin');
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Cycling', 'admin');
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Maths', 'admin');
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Physics', 'admin');
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Chemistry', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Magic', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Basketball', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Curling', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Football', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Golf', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Hockey', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Ice hockey', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Athletism', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Jumping', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Ski', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Snowboard', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('TV', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Impressionism', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Frescoes', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Measure units', 'admin');


-- ***************************************************************************************************************************
-- LINK SAMPLES
INSERT INTO LINKS(publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating)
VALUES ('2022-12-19','https://www.google.com/','Google','2022-12-19','admin','public', 'Just Google.', 5);

INSERT INTO LINKS(publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating)
VALUES ('2022-12-19','https://institutmontilivi.cat/','Institut Montilivi','2022-12-19','admin','public', 'What can we say. Probably the best high school out there.', 5);

INSERT INTO LINKS(publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating)
VALUES ('2022-12-19','https://what3words.com/','what3words','2022-12-19','admin','public', "Innovative coordinates system based on words. It's worth checking out!", 5);

INSERT INTO LINKS(publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating)
VALUES ('2022-12-19','https://maps.google.com/','Google Maps','2022-12-19','admin','public', "Good old Google Maps.", 5);

INSERT INTO LINKS(publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating)
VALUES ('2022-12-19','https://www.google.com/docs/about/','Google Docs','2022-12-19','admin','public', "Shared file system.", 4);

INSERT INTO LINKS(publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating)
VALUES ('2022-12-19','https://daw.institutmontilivi.cat/','Apunts DAW 2','2022-12-19','admin','private', "Apunts de DAW 2 de l'Institut Montilivi.", 5);

INSERT INTO LINKS(publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating)
VALUES ('2022-12-19','https://www.youtube.com/','Youtube','2022-12-19','admin','public', "Google's video-based social network.", 5);

INSERT INTO LINKS(publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating)
VALUES ('2022-12-19','https://http.cat/','HTTP Cats','2022-12-19','admin','private', "All the possible HTTP-related errors described by cats.", 5);

INSERT INTO LINKS(publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating)
VALUES ('2022-12-19','https://www.w3schools.com/','W3schools','2022-12-19','admin','public', "According to Toni, the programmer's Bible.", 4);

INSERT INTO LINKS(publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating)
VALUES ('2022-12-19','https://eneasmusic.com/','Eneas Music','2022-12-19','admin','public', "Proyectos de música y cursos a tu medida. Profesionaliza tu arte y siéntete orgulloso de tu trabajo.", 5);

INSERT INTO LINKS(publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating)
VALUES ('2022-12-19','https://www.amazon.com/','Amazon','2022-12-19','admin','public', "Online marketplace.", 5);

INSERT INTO LINKS(publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating)
VALUES ('2022-12-19','https://best.aliexpress.com/','AliExpress','2022-12-19','admin','public', "Online marketplace.", 5);

INSERT INTO LINKS(publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating)
VALUES ('2022-12-19','https://en.softonic.com/','Softonic','2022-12-19','admin','public', "NOT RECOMMENDED! Repository of programs that tends to include malware on their files.", 1);

INSERT INTO LINKS(publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating)
VALUES ('2022-12-19','https://www.win-rar.com/start.html?&L=0','WinRAR','2022-12-19','admin','public', "Arguably the most popular compression tool out there. And you can use it completely for free!", 5);

