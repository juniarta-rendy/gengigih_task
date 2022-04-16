import React from "react";
import {ArtistSong} from "../../components/ArtistSong";
import {SelectButton} from "../../components/SelectButton";
import {SongImage} from "../../components/SongImage";
import { SongTitle } from "../components/SongTitle";
import data from "../../data/data.json";

const HomeworkThree = () =>{
    return(
        <div style={{ height: '100vh' }}>
      <SongImage images={data.album.images} />
      <div>
        <SongTitle title={data.album.name} />
        <SongArtist artist={data.album.artists[0].name} />
        <ButtonSelect url={data.album.artists[0].uri} />
      </div>
    </div>
    );
};