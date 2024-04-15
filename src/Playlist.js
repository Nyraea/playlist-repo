function Playlist({playlist}) {
    return (
        <div className="container">
          <h2>Playlist</h2>
          <ul>
            {playlist.map((music) => (
              <li key={music.id}>
                {music.title} by {music.artist}
              </li>
            ))}
          </ul>
        </div>
    )
}

export default Playlist;