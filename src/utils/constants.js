const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY 

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

export const YOUTUBE_MENU_LOGO = "https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png";

export const YOUTUBE_LOGO = "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"

export const YOUTUBE_USER_AVATAR = "https://cdn.iconscout.com/icon/free/png-512/free-user-1851010-1568997.png?f=webp&w=256";


export const YOUTUBE_SEARCH_API="https://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q="
export const YOUTUBE_SEARCH_API1="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="