import Album from "../../components/Album";
import data from "../../data/data";

const renderRow = () => {
  return data.map((album) => {
    return (
      <Album
        image={album.album.images[0].url}
        title={album.name}
        artist={album.artists[0].name}
        url={album.artists[0].uri}
        key={album.id}
      />
    );
  });
};

export const HomeworkThree = () =>{
    return(
      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      {renderRow()}
    </div>
    );
};
