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
INSERT INTO card (id, userId, text) VALUES(4444, 111, 'Update card test1');

-- Backend-Cards-3.2
INSERT INTO user ( id, username, password) VALUES( 110, 'backendCardsTestUserName10', 'backendCardsTestUserPassword10');

-- Backend-Cards-3.3
INSERT INTO user (id, username, password) VALUES( 109, 'backendCardsTestUserName11', 'backendCardsTestUserPassword11');
INSERT INTO card (id, userId, text) VALUES(5555, 109, 'Update card test3');

-- Backend-Cards-3.4
INSERT INTO user (id, username, password) VALUES( 108, 'backendCardsTestUserName12', 'backendCardsTestUserPassword12');
INSERT INTO user (id, username, password) VALUES( 107, 'backendCardsTestUserName13', 'backendCardsTestUserPassword13');
INSERT INTO card (id, userId, text) VALUES(6666, 107, 'Update card test4');

-- Backend-Cards-3.5
INSERT INTO user (id, username, password) VALUES( 106, 'backendCardsTestUserName14', 'backendCardsTestUserPassword14');
INSERT INTO card (id, userId, text) VALUES(7777, 106, 'Update card test5');

-- Backend-Cards-3.6
INSERT INTO user (id, username, password) VALUES( 105, 'backendCardsTestUserName18', 'backendCardsTestUserPassword18');
INSERT INTO card (id, userId, text) VALUES(9999, 105, 'Update card test5');

-- Backend-Cards-4.1
INSERT INTO user (id, username, password) VALUES( 1000, 'backendCardsTestUserName15', 'backendCardsTestUserPassword15');
INSERT INTO card (id, userId, text) VALUES(8888, 1000, 'Create card test1');

-- Backend-Cards-4.2
INSERT INTO user (id, username, password) VALUES( 1001, 'backendCardsTestUserName16', 'backendCardsTestUserPassword16');

-- Backend-Cards-5.1
INSERT INTO user (id, username, password) VALUES( 1002, 'backendCardsTestUserName17', 'backendCardsTestUserPassword17');