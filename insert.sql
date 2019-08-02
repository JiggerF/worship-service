INSERT INTO song (
    SongTitle,
    SongArtist,
    SongGenre,
    SongKey)
VALUES ('In Your Presence - Live','Jesus Culture Kim Walker','Worship','A'),
    ('What A Beautiful Name','Hillsong Worship','Worship','A'),
    ('Oceans','Hillsong United','Worship','A'),
    ('Spirit Move(Live)','Bethel Music','Worship','A'),
    ('Great Are You Lord','All Sons & Daughters','Worship','A'),
    ('You Revive Me','Passion','Worship','A'),
    ('Let It Rain','Jesus Culture','Worship','A'),
    ('Joy','PlanetShakers','Praise','A'),
    ('Alive','Hillsong Young & Free','Praise','A'),
    ('God Is Here','Darlene Zschech','Praise','A'),
    ('Love On The Line','Hillsong Worship','Worship','A');

INSERT INTO muso (
    FirstName,
    LastName,
    PrimaryInstrumentId,
    SecondaryInstrumentId)
VALUES ('Jigger','Fantonial','Drums','Guitar'),
    ('Paul','Callanta','Guitar','Vocals'),
    ('Elijah','M','Bass','Vocals');

INSERT INTO instrument (
    InstrumentName)
VALUES ('Drums'),
    ('Acoustic Guitar'),
    ('Vocals'),
    ('Lead Guitar'),
    ('Bass Guitar'),
    ('Saxophone'),
    ('Keyboard');

INSERT INTO campus (
    CampusName,
    CampusAddress)
VALUES ('Hampton Park', 'Hampton Park'),
    ('Clyde North', 'Selandra Rise, Clyde North'); 

INSERT INTO songlist (
    SongListId,
    SongId)
VALUES (0021, 4),
    (0021, 3),
    (0021, 6),
    (0021, 8);

INSERT INTO musolist (
    MusoListId,
    MusoId
)
VALUES (0032, 1),
    (0032, 2),
    (0032, 3);


/* Create Mock Service*/
INSERT INTO service (
    ServiceName,
    ServiceSchedule,
    CampusId,
    SonglistId,
    MusoListId) 
VALUES ('Sunday Clyde', datetime('now'),
    2, 21, 32);


/* QUERY: Give me all songs for a service*/
/* SELECT SongListId, MusoListId as musolistid FROM service INNER JOIN (SELECT * from songlist INNER JOIN song ON songlist.SongId = song.SongId) */

SELECT ServiceName as sn, MusoListId as mlid, SongTitle as st FROM service srv INNER JOIN (SELECT * from songlist INNER JOIN song where songlist.SongId=song.SongId) 