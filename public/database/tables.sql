CREATE TABLE lowPlotPoints(
    ID SERIAL NOT NULL PRIMARY KEY,
    plotName varchar(40),
    plotReading TEXT
);

CREATE TABLE highPlotPoints(
    ID SERIAL NOT NULL PRIMARY KEY,
    plotName varchar(40),
    plotReading TEXT
);

CREATE TABLE lowCards (
    ID SERIAL NOT NULL PRIMARY KEY,
    cardName varchar(40),
    cardReading TEXT
);

CREATE TABLE highCards (
    ID SERIAL NOT NULL PRIMARY KEY,
    cardName varchar(40)
);

CREATE TABLE plotLowCards(
    ID SERIAL NOT NULL PRIMARY KEY,
    plotID INT,
    lowCardID INT,
    FOREIGN KEY (plotID) REFERENCES lowPlotPoints(ID),
    FOREIGN KEY (lowCardID) REFERENCES lowCards(ID)
);

CREATE TABLE plotHighCards(
    ID SERIAL NOT NULL PRIMARY KEY,
    plotID INT,
    highCardID INT,
    cardReading TEXT,
    FOREIGN KEY (plotID) REFERENCES highPlotPoints(ID),
    FOREIGN KEY (lowCardID) REFERENCES lowCards(ID)
    
);

INSERT INTO lowPlotPoints (plotName, plotReading) VALUES ("The Tome of Strahd","This card tells of history. Knowledge of the ancient will help you better understand your enemy.");
INSERT INTO lowPlotPoints (plotName, plotReading) VALUES ("The Holy Symbol of Ravenkind","This card tells of a powerful force for good and protection, a holy symbol of great hope.");
INSERT INTO lowPlotPoints (plotName, plotReading) VALUES ("The Sunsword","This is a card of power and strength. It tells of a weapon of vengence: a sword of sunlight.");

INSERT INTO highPlotPoints (plotName, plotReading) VALUES ("Strahd's Enemy","This card sheds light on one who will help you greatly in the battle against darkness.");
INSERT INTO highPlotPoints (plotName, plotReading) VALUES ("Strahd's Location","Your enemy is a creature of darkness, whose powers are beyond mortality. This card will lead you to him!");

INSERT INTO lowCards (cardName, cardReading) VALUES ("1 OF SWORDS - AVENGER","The treasure lies in a dragon's house, in hands once clean and now corrupted.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("2 OF SWORDS - PALADIN","I see a sleeping prince, a servant of light and the brother of darkness. The treasure lies with him");
INSERT INTO lowCards (cardName, cardReading) VALUES ("3 OF SWORDS - SOLDIER","Go to the mountains. Climb the white tower guarded by golden knights.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("4 OF SWORDS - MERCENARY","The thing you seek lies with the dead, under mountains of gold coins.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("5 OF SWORDS- MYRMIDON","Look for a den of wolves in the hills overlooking a mountain lake. The treasure belongs to Mother Night.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("6 OF SWORDS - BERSERKER ","Find the Mad Dog's crypt. The treasure lies within, beneath blackened bones.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("7 OF SWORDS - HOODED ONE","I see a faceless god. He awaits you at the end of a long and winding road, deep in the mountains.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("8 OF SWORDS - DICTATOR","I see a throne fit for a king. ");
INSERT INTO lowCards (cardName, cardReading) VALUES ("9 OF SWORDS - TORTURER","There is a town where all is not well. There you will find a house of corruption, and within, a dark room full of still ghosts.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("MASTER OF SWORDS - WARRIOR","That which you seek lies in the womb of darkness, the devil's lair: the one place to which he must return.");

INSERT INTO lowCards (cardName, cardReading) VALUES ("1 OF STARS - TRANSMUTER","Go to a place of dizzying heights, where the stone itself is alive! ");
INSERT INTO lowCards (cardName, cardReading) VALUES ("2 OF STARS - DIVINER","Look to the one who sees all. The treasure is hidden in her camp.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("3 OF STARS - ENCHANTER","I see a kneeling woman-a rose of great beauty plucked too soon. The master of the marsh knows of whom I speak.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("4 OF STARS - ABJURER","I see a fallen house guarded by a great stone dragon. Look to the highest peak.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("5 OF STARS - ELEMENTALIST","The treasure is hidden in a small castle beneath a mountain, guarded by amber giants.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("6 OF STARS - EVOKER","Search for the crypt of a wizard ordinaire. His staff is the key.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("7 OF STARS - ILLUSIONIST","A man is not what he seems. He comes here in a carnival wagon. Therein lies what you seek.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("8 OF STARS - NECROMANCER","A woman hangs above a roaring fire. Find her, and you will find the treasure.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("9 OF STARS - CONJURER","I see a dead village, drowned by a river, ruled by one who has brought great evil into the world.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("MASTER OF STARS - WIZARD","Look for a wizard's tower on a lake. Let the wizard's name and servant guide you to that which you seek.");

INSERT INTO lowCards (cardName, cardReading) VALUES ("1 OF COINS - SWASHBUCKLER","I see the skeleton of a deadly warrior, lying on a bed of stone flanked by gargoyles.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("2 OF COINS - PHILANTHROPIST","Look to a place where sickness and madness are bred. Where children once cried, the treasure lies still.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("3 OF COINS - TRADER","Look to the wizard of the wines! In wood and sand the treasure hides.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("4 OF COINS - MERCHANT","Seek a cask that once contained the finest wine, of which not a drop remains.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("5 OF COINS - GUILD MEMBER","I see a dark room full of bottles. It is the tomb of a guild member.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("6 OF COINS - BEGGAR","A wounded elf has what you seek. He will part with the treasure to see his dark dreams fulfilled.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("7 OF COINS - THIEF","What you seek lies at the crossroads of life and death, among the buried dead.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("8 OF COINS - TAX COLLECTOR","The Vistani have what you seek. A missing child holds the key to the treasure's release.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("9 OF COINS - MISER","Look for a fortress inside a fortress, in a place hidden behind fire.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("MASTER OF COINS - ROGUE","I see a nest of ravens. There you will find the prize.");

INSERT INTO lowCards (cardName, cardReading) VALUES ("1 OF GLYPHS - MONK","The treasure you seek is hidden behind the sun, in the house of a saint.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("2 OF GLYPHS - MISSIONARY","I see a garden dusted with snow, watched over by a scarecrow with a sackcloth grin. Look not to the garden but to the guardian.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("3 OF GLYPHS - HEALER","Look to the west. Find a pool blessed by the light of the white sun.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("4 OF GLYPHS - SHEPHERD","Find the mother-she who gave birth to evil.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("5 OF GLYPHS - DRUID","An evil tree grows atop a hill of graves where the ancient dead sleep. The ravens can help you find it. Look for the treasure there.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("6 OF GLYPHS - ANARCHIST","I see walls of bones, a chandelier of bones, and a table of bones-all that remains of enemies long forgotten.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("7 OF GLYPHS - CHARLATAN","I see a lonely mill on a precipice. The treasure lies within.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("8 OF GLYPHS - BISHOP","What you seek lies in a pile of treasure, beyond a set of amber doors.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("9 OF GLYPHS - TRAITOR","Look for a wealthy woman. A staunch ally of the devil, she keeps the treasure under lock and key, with the bones of an ancient enemy.");
INSERT INTO lowCards (cardName, cardReading) VALUES ("MASTER OF GLYPHS - PRIEST","You will find what you seek in the castle, amid the ruins of a place of supplication.");

INSERT INTO highCards (cardName) VALUES ("ARTIFACT");
INSERT INTO highCards (cardName) VALUES ("BEAST");
INSERT INTO highCards (cardName) VALUES ("BROKEN ONE");
INSERT INTO highCards (cardName) VALUES ("DARKLORD");
INSERT INTO highCards (cardName) VALUES ("DONJON");
INSERT INTO highCards (cardName) VALUES ("SEER");
INSERT INTO highCards (cardName) VALUES ("GHOST");
INSERT INTO highCards (cardName) VALUES ("EXECUTIONER");
INSERT INTO highCards (cardName) VALUES ("HORSEMAN");
INSERT INTO highCards (cardName) VALUES ("INNOCENT");
INSERT INTO highCards (cardName) VALUES ("MARIONETTE");
INSERT INTO highCards (cardName) VALUES ("MISTS");
INSERT INTO highCards (cardName) VALUES ("RAVEN");
INSERT INTO highCards (cardName) VALUES ("TEMPTER");

INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (1,1,"Look for an entertaining man with a monkey. This man is more than he seems.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (1,2,"A werewolf holds a secret hatred for your enemy. Use her hatred to your advantage.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (1,3,"Your greatest ally will be a wizard. His mind is broken, but his spells are strong.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (1,4,"Ah, the worst of all truths: You must face the evil of this land alone!");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (1,5,"Search for a troubled young man surrounded by wealth and madness. His home is his prison.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (1,6,"Look for a dusk elf living among the Vistani. He has suffered a great loss and is haunted by dark dreams. Help him, and he will help you in return.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (1,7,"I see a fallen paladin of a fallen order of knights. Helingers like a ghost in a dead dragon's lair.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (1,8,"Seek out the brother of the devil's bride. They call him 'the lesser', but he has a powerful soul.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (1,9,"I see a dead man of noble birth, guarded by his widow. Return life to the dead man's corpse, and he will be your staunch ally.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (1,10,"Evil's bride is the one you seek!");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (1,11,"What horror is this? I see a man made by a man. Ageless and alone, it haunts the towers of the castle.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (1,12,"A Vistana wanders this land alone, searching for her mentor. She does not stay in one place for long. Seek her out at Saint Markovia's abbey, near the mists.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (1,13,"Find the leader of the feathered ones who live among the vines. Though old, he has one more fight left in him.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (1,14,"I see a child-a Vistana. You must hurry, for her fate hangs in the balance. Find her at the lake!");

INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (2,1,"He lurks in the darkness where the morning light once shone-a sacred place.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (2,2,"The beast sits on his dark throne.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (2,3,"He haunts the tomb of the man he envied above all.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (2,4,"He lurks in the depths of darkness, in the one place to which he must return.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (2,5,"He lurks in a hall of bones'. in the dark pits of his castle.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (2,6,"He waits for you in a place of wisdom, warmth, and despair. Great secrets are there.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (2,7,"Look to the father's tomb.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (2,8,"I see a dark figure on a balcony, looking down upon this tortured land with a twisted smile.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (2,9,"He lurks in the one place to which he must return-a place of death.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (2,10,"He dwells with the one whose blood sealed his doom, a brother of light snuffed out too soon.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (2,11,"Look to great heights. Find the beating heart of the castle. He waits nearby.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (2,12,"The cards can't see where the evil lurks. The mists obscure all!");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (2,13,"Look to the mother's tomb.");
INSERT INTO plotHighCards (plotID, highCardID, cardReading) VALUES (2,14,"I see a secret place-a vault of temptation hidden behind a woman of great beauty. The evil waits atop his tower of treasure.");

INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 1);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 2);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 3);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 4);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 5);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 6);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 7);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 8);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 9);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 10);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 11);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 12);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 13);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 14);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 15);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 16);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 17);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 18);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 19);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 20);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 21);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 22);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 23);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 24);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 25);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 26);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 27);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 28);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 29);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 30);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 31);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 32);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 33);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 34);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 35);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 36);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 37);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 38);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 39);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (1, 40);

INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 1);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 2);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 3);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 4);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 5);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 6);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 7);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 8);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 9);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 10);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 11);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 12);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 13);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 14);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 15);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 16);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 17);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 18);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 19);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 20);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 21);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 22);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 23);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 24);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 25);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 26);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 27);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 28);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 29);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 30);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 31);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 32);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 33);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 34);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 35);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 36);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 37);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 38);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 39);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (2, 40);

INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 1);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 2);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 3);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 4);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 5);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 6);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 7);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 8);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 9);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 10);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 11);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 12);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 13);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 14);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 15);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 16);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 17);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 18);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 19);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 20);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 21);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 22);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 23);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 24);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 25);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 26);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 27);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 28);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 29);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 30);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 31);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 32);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 33);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 34);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 35);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 36);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 37);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 38);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 39);
INSERT INTO plotLowCards (plotID,lowCardID) VALUES (3, 40);