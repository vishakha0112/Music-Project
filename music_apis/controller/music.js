const songOperations = require("../db/services/songoperations");

const musicOperations = {
    async getAllSongs(request, response){
        const songs = await songOperations.readAll();
        response.json(songs);
    },
    async getByArtist(request, response){
        const singerName = request.query.name;
        console.log('Singer Name is ',singerName);
        const songs = await songOperations.readBySinger(singerName);
        response.json(songs);
    },
    async addASong(request, response){
        console.log(request.body);
        const result  = await songOperations.add(request.body);
        response.json(result);
    },
    async deleteASong(request, response){
        console.log(request.body);
        const result  = await songOperations.delete(request.body);
        console.log(result);
        if(result && result._id){
            response.status(200).json({message:'Song deleted successfully'});
        }
        else{
            response.status(200).json({message:'Song not found!'});
        }
    },
    async searchSong(request, response) {
        console.log(`${request.body["singer"]}`);
        // const singer = request.body.singer;
        const song = request.body.song;
        console.log((`${song}`));
        let allSongs = [];
        // if (singer) {
        //   const songs = await songOperations.readByArtist(singer);
        //   if (songs.length > 0) {
        //     allSongs.push(...songs);
        //   }
        // }
          const songs = await songOperations.readBySong(song);
          if (songs.length > 0) {
            allSongs.push(...songs);
          }
        response.json(allSongs);
    },
    getPartySongs(request, response){

    },
    getLatestSongs(request, response){

    }
    
}
module.exports = musicOperations;