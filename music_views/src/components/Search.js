import React from 'react';

export const Search = ({songs})=>{
    // const [songs, setSongs] = useState([]);
    const audioStyle = {
        width:'400px'
    }
    const imageStyle = {
        height:'100px',
        width:'100px'
    }
    
    return (
    <div className="bg-black" style={{height:"466px"}}>
    {
    songs.map(song=>{    
        return (<div>
            <img src={song.imageurl} style={imageStyle} alt=""/>
            <p className="text-white">{song.name}</p>
            <audio controls style={audioStyle}>
                <source src={song.url} type="audio/mp4"></source>
            </audio>
        </div>);
    })
    }
    </div>
    );
}
