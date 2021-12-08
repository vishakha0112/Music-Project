import React, { useEffect, useState } from 'react';

export const Song = (props)=>{
    const [songs, setSongs] = useState([]);
    const audioStyle = {
        width:'400px'
    }
    const imageStyle = {
        height:'100px',
        width:'100px'
    }
    let singerName  = props.singerName;
    if(!singerName){
        singerName = props.match.params.singerName;
    }
   
    console.log('Singer Name Rec is ', singerName);
    useEffect(()=>{
            let url = `${process.env.REACT_APP_SONG_URL}?name=${singerName}`;
            const promise = fetch(url);
            promise.then(response=>{
                response.json().then(data=>{
                    console.log('Data is ', data);
                    setSongs(data);
                }).catch(err=>{
                    console.log('JSON Error is ', err);
                })
            }).catch(err=>console.log("Error is ",err));
    },[singerName]);
    
        const doSort = (sortType)=>{
        let sortedsongs= [];
        sortedsongs=[...songs.sort( (a, b)=>{
            const isReversed=(sortType==='asc') ? 1 : -1;
            return isReversed * a.name.localeCompare(b.name);
        })];
        setSongs(sortedsongs);
    }
    
    return (
    <div className="bg-black">
    <h3 className="text-white">Songs of {singerName}</h3>
    <button className='btn btn-info m-3' onClick={()=>doSort('asc')}>Sort by ascending order</button>
    <button className='btn btn-info m-3' onClick={()=>doSort('desc')}>Sort by descending order</button>
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
