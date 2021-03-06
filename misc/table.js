// Generated by CoffeeScript 1.4.0
(function() {
  var QUERY, TABLE, command, connection, http, mysql, servertype, tabletype;

  http = require('http');

  mysql = require('mysql');

  connection = mysql.createConnection({
    user: 'root',
    password: 'root',
    database: 'anbinh',
    port: '8889'
  });

  TABLE = {
    NSSongs: "nhacso",
    NSAlbums: "ns_raw_albums",
    NSSongs_Albums: "ns_raw_songs_albums",
    NVSongs: "Raw_NVSongs",
    NVAlbums: "Raw_NVAlbums",
    NVSongs_Albums: "Raw_NVSongs_Albums"
  };

  QUERY = {
    create: {
      NSSongs: " ....... " + TABLE.NSSongs,
      NSAlbums: "CREATE TABLE IF NOT EXISTS " + TABLE.NSAlbums + " (					id int not null,					albumid int,					album_name varchar(255),					thumbnail varchar(255),					artist varchar(150),					artistid int					)",
      NSSongs_Albums: "CREATE TABLE IF NOT EXISTS " + TABLE.NSSongs_Albums + "(						songid int,						albumid int						)",
      NVSongs: "CREATE TABLE IF NOT EXISTS " + TABLE.NVSongs + " (					songid int,					song_name varchar(255),					link varchar(255),					link320 varchar(255)					)"
    },
    remove: {
      NSSongs: "DROP TABLE " + TABLE.NSSongs,
      NSAlbums: "DROP TABLE " + TABLE.NSAlbums,
      NSSongs_Albums: "DROP TABLE " + TABLE.NSSongs_Albums,
      NVSongs: "DROP TABLE " + TABLE.NVSongs
    },
    reset: {
      NSSongs: "TRUNCATE TABLE " + TABLE.NSSongs,
      NSAlbums: "TRUNCATE TABLE " + TABLE.NSAlbums,
      NSSongs_Albums: "TRUNCATE TABLE " + TABLE.NSSongs_Albums,
      NVSongs: "TRUNCATE TABLE " + TABLE.NVSongs
    }
  };

  servertype = process.argv[2];

  tabletype = process.argv[3];

  command = process.argv[4];

  switch (servertype) {
    case "nhacso.net":
      switch (tabletype) {
        case "songs":
          switch (command) {
            case "create":
              console.log("songs created");
              break;
            case "remove":
              console.log("table songs removed");
              break;
            case "reset":
              connection.query(QUERY.reset.NSSongs);
              console.log("The tables: " + TABLE.NSSongs + " have been reset!");
              break;
            default:
              console.log("Wrong command");
          }
          break;
        case "albums":
          switch (command) {
            case "create":
              connection.query(QUERY.create.NSAlbums);
              connection.query(QUERY.create.NSSongs_Albums);
              console.log("The tables: " + TABLE.NSAlbums + " and " + TABLE.NSSongs_Albums + " have been created!");
              break;
            case "remove":
              connection.query(QUERY.remove.NSAlbums);
              connection.query(QUERY.remove.NSSongs_Albums);
              console.log("The tables: " + TABLE.NSAlbums + " and " + TABLE.NSSongs_Albums + " have been removed!");
              break;
            case "reset":
              connection.query(QUERY.reset.NSAlbums);
              connection.query(QUERY.reset.NSSongs_Albums);
              console.log("The tables: " + TABLE.NSAlbums + " and " + TABLE.NSSongs_Albums + " have been reset!");
              break;
            default:
              console.log("Wrong command!");
          }
          break;
        default:
          console.log("Wrong table's type");
      }
      break;
    case "nhac.vui.vn":
      switch (tabletype) {
        case "songs":
          switch (command) {
            case "create":
              connection.query(QUERY.create.NVSongs);
              console.log("The table: " + TABLE.NVSongs + " has been created");
              break;
            case "remove":
              connection.query(QUERY.remove.NVSongs);
              console.log("The table: " + TABLE.NVSongs + " has been removed");
              break;
            case "reset":
              connection.query(QUERY.reset.NVSongs);
              console.log("The table: " + TABLE.NVSongs + " has been reset");
              break;
            default:
              console.log("Wrong command");
          }
          break;
        case "albums":
          switch (command) {
            case "create":
              connection.query(QUERY.create.NVAlbums);
              connection.query(QUERY.create.NVSongs_Albums);
              console.log("The tables: " + TABLE.NVAlbums + " and " + TABLE.NVSongs_Albums + " have been created!");
              break;
            case "remove":
              connection.query(QUERY.remove.NVAlbums);
              connection.query(QUERY.remove.NVSongs_Albums);
              console.log("The tables: " + TABLE.NVAlbums + " and " + TABLE.NVSongs_Albums + " have been removed!");
              break;
            case "reset":
              connection.query(QUERY.reset.NVAlbums);
              connection.query(QUERY.reset.NVSongs_Albums);
              console.log("The tables: " + TABLE.NVAlbums + " and " + TABLE.NVSongs_Albums + " have been reset!");
              break;
            default:
              console.log("Wrong command!");
          }
          break;
        default:
          console.log("Wrong table's type");
      }
      break;
    default:
      console.log("Wrong Server's name");
  }

  connection.end();

}).call(this);
