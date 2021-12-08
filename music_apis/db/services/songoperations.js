const SongModel = require("../schemas/songs");

const songOperations = {
    async add(songObject){
        return await SongModel.create(songObject);
    },
    async delete({name}){
        return await SongModel.findOneAndDelete({'name': name },await function (err, docs) {
            if (err){
                console.log(err);
                return err;
            }
            else{
                console.log("Deleted Song : ", docs);
                return docs;
            }
        });
    },
    async readBySinger(singerName){
        return await SongModel.find({'artistName':singerName});
    },
    async readAll({name}){
        return await SongModel.find({});
    },
    async readBySong(song) {
        var regexp=new RegExp("^"+song,"i");
        return await SongModel.find({name:regexp});
    }
}

module.exports = songOperations;