import Header from "../components/header";
import UploadImage from "./UploadImage";
import DisplayImage from "./DisplayImage";

export default function Memories({ searchParams }) {
    const showUpload = searchParams.upload === process.env.UPLOAD_KEY;

    return (
        <div>
            <Header />
            <div className="mt-16">
                <h1 className="mb-6 text-lg">memories</h1>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {videoIds.map((videoId) => (
                        <YouTubePlayer key={videoId} videoId={videoId}/>
                    ))}
                </div> */}
                {showUpload && <UploadImage />}
                <DisplayImage />
            </div>
        </div>
    );
}