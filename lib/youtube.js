export async function getYouTubePlaylistVideos(){
    const apiKey = process.env.YOUTUBE_API_KEY;
    const playlistId = process.env.YOUTUBE_PLAYLIST_ID;
    const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if(!data.items){
        return [];
    }

    const videoIds = data.items.map(item => item.snippet.resourceId.videoId);
    return videoIds;
}