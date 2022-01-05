-- Backend-Cards-1.1
DELETE FROM user;
INSERT INTO user ( id, username, password) VALUES( 999, 'backendCardsTestUserName', 'backendCardsTestUserPassword');

DELETE FROM card;
INSERT INTO card (userId, text) VALUES( 999, 'CardTestText1');
INSERT INTO card (userId, text) VALUES( 999, 'CardTestText2');
INSERT INTO card (userId, text) VALUES( 999, 'CardTestText3');

-- Backend-Cards-1.2
INSERT INTO user ( id, username, password) VALUES( 888, 'backendCardsTestUserName2', 'backendCardsTestUserPassword2');


-- Backend-Cards-1.3
INSERT INTO user ( id, username, password) VALUES( 777, 'backendCardsTestUserName3', 'backendCardsTestUserPassword3');

-- Backend-Cards-2.1
INSERT INTO user ( id, username, password) VALUES( 666, 'backendCardsTestUserName4', 'backendCardsTestUserPassword4');
INSERT INTO card (id, userId, text) VALUES(1111, 666, 'Delete card test');

-- Backend-Cards-2.2
INSERT INTO user ( id, username, password) VALUES( 555, 'backendCardsTestUserName5', 'backendCardsTestUserPassword5');

-- Backend-Cards-2.3
INSERT INTO user ( id, username, password) VALUES( 444, 'backendCardsTestUserName6', 'backendCardsTestUserPassword6');
INSERT INTO card (id, userId, text) VALUES(2222, 444, 'Delete card test2');

-- Backend-Cards-2.4
INSERT INTO user ( id, username, password) VALUES( 333, 'backendCardsTestUserName7', 'backendCardsTestUserPassword7');
INSERT INTO user ( id, username, password) VALUES( 222, 'backendCardsTestUserName8', 'backendCardsTestUserPassword8');
INSERT INTO card (id, userId, text) VALUES(3333, 222, 'Delete card test3');

-- Backend-Cards-3.1
INSERT INTO user ( id, username, password) VALUES( 111, 'backendCardsTestUserName9', 'backendCardsTestUserPassword9');
INSERT INTO card (id, userId, text) VALUES(4444, 111, 'Delete card test4');

-- Backend-Cards-3.2
INSERT INTO user ( id, username, password) VALUES( 110, 'backendCardsTestUserName10', 'backendCardsTestUserPassword10');