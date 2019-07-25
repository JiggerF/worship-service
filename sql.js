var sqlite3 = require('sqlite3')
var db = new sqlite3.Database('./chinook.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err){
        return console.error(err.message);
    }
    console.log('Connected to file db...')
})

var query = function() {
    db.serialize(() => {
        db.each(`SELECT AlbumId as id,
                Title as title,
                ArtistId as artistId
                FROM albums`, (err, row) => {
            if (err){
                console.log(err.message)
            }
            console.log(row.id + "\t" + row.title + "\t" + row.artistId)
        })
    }) 
}

module.exports = query