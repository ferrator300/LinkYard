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


-- SOME CONSIDERATIONS...
-- We will not remove the links associated to a user that desires to remove their account straight away. Instead, we will ask them from the front-end interface whether they want to remove all their public and private links, or if they want to keep the public ones for other users to use them.

-- ADMINISTRATOR USER
INSERT INTO USERS (username, password, email, name, surname, signUpDate)
    VALUES('admin', '1234', 'support@linkyard.com', NULL, NULL, NULL);
INSERT INTO USERS (username, password, email, name, surname, signUpDate)
    VALUES('usuari1', '1234', 'randomUser@linkyard.com', NULL, NULL, NULL);


-- PREDEFINED CATEGORIES
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('General', 'admin');
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Others', 'admin');
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Shopping', 'admin');
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Learning', 'admin');
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Gaming', 'admin');
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Sports', 'admin');
INSERT INTO CATEGORIES (name, publisherUsername) VALUES('Food', 'admin');
-- INSERT INTO CATEGORIES (name, publisherUsername) VALUES('caca','usuari1');

INSERT INTO LINKS (publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility) 
    VALUES(NULL, 'www.test.com', NULL, NULL, 'admin', 'public');




-- TESTS
INSERT INTO LINKS (publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility) 
    VALUES(NULL, 'www.test.com', NULL, NULL, 'usuari1', 'public');

INSERT INTO LINKAGORIES VALUES(2, 7);
INSERT INTO LINKAGORIES VALUES(2, 6);
INSERT INTO LINKAGORIES VALUES(2, 5);


INSERT INTO LINKS (publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating) 
    VALUES(NULL, 'www.privateTest.com', "Private", NULL, 'usuari1', 'private', "This is a private link, so it shouldn't be visible by anyone but usuari1.", 1);

INSERT INTO LINKS (publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating) 
    VALUES(NULL, 'www.privateTest2.com', 'Private2', NULL, 'usuari1', 'private', "This is a private link, so it shouldn't be visible by anyone but usuari1.", 3);

INSERT INTO LINKS (publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating) 
    VALUES(NULL, 'www.pccomponentes.com', 'PcComponentes', NULL, 'admin', 'public', "Technology marketplace.", 5);

INSERT INTO LINKS (publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating) 
    VALUES(NULL, 'maps.google.com', 'Google Maps', NULL, 'admin', 'public', "Good old Google Maps.", 5);

INSERT INTO LINKS (publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating) 
    VALUES(NULL, 'https://what3words.com', 'What3words', NULL, 'admin', 'public', "Coordinates made simple.", 5);

INSERT INTO LINKS (publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating) 
    VALUES(NULL, 'keep.google.com', 'Google Keep', NULL, 'admin', 'public', "Google's personal notes system.", 4);

INSERT INTO LINKS (publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating) 
    VALUES(NULL, 'mail.google.com', 'Gmail', NULL, 'admin', 'public', "Google's emailing system.", 5);

INSERT INTO LINKS (publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating) 
    VALUES(NULL, 'drive.google.com', 'Google Drive', NULL, 'admin', 'public', "Google's cloud-based storage system.", 3);