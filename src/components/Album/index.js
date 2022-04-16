import React from 'react';
import { SelectButton } from '../SelectButton';
import { ArtistSong } from '../ArtistSong';
import { SongImage } from './SongImage';
import { SongTitle } from './SongTitle';

const Album = ({ image, title, artist, url }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#DFDFDE',
      }}
    >
      <SongImage image={image} />
      <div>
        <SongTitle title={title} />
        <ArtistSong artist={artist} />
        <SelectButton url={url} />
      </div>
    </div>
  );
};

export default Album;