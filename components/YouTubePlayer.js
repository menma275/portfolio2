const YouTubePlayer = ({ videoId, ...props }) => {
    return (
        <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1&loop=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
            allowFullScreen
            className="w-full aspect-square"
            {...props}
        ></iframe>
    );
}

export default YouTubePlayer;