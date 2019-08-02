var sqlite3 = require('sqlite3')
var db = new sqlite3.Database('./WorshipService.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err){
        return console.error(err.message);
    }
    console.log('Connected to file db...')
})

// var querySong = function() {
//     db.serialize(() => {
//         db.each(`SELECT ServiceSchedule as ss, 
//             ServiceName as sn, 
//             MusoListId as mlid, 
//             SongTitle as st 
//             FROM service srv INNER JOIN (SELECT * from songlist INNER JOIN song where songlist.SongId=song.SongId)`,
//             (err, row) => {
//                 if (err) {
//                     console.log(err.message)
//                 }
//             console.log(row.ss + "\t" + row.mlid + "\t" + row.st)
//         })
//     }) 
// }

// var query = function() {
//     var sql = "SELECT * FROM service"
//     var params = []
//     db.all(sql, params, (err, row) => {
//         if (err){

//         }
//     });
// }

module.exports = db

