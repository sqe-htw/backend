DELETE FROM user;
INSERT INTO user ( id, username, password) VALUES( 999, 'backendCardsTestUserName', 'backendCardsTestUserPassword');


DELETE FROM card;
INSERT INTO card (userId, text) VALUES( 999, 'CardTestText1');
INSERT INTO card (userId, text) VALUES( 999, 'CardTestText2');
INSERT INTO card (userId, text) VALUES( 999, 'CardTestText3');
