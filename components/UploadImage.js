"use client";

import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as dbRef, set} from "firebase/database";
import { storage, db } from "@/lib/firebaseConfig";
import exifr from "exifr";

const UploadImage = () => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = async () => {
        if(image){
            setUploading(true);
            const metadata = await exifr.parse(image);
            const Year = metadata?.GPSDateStamp?.slice(0, 4) || new Date().getFullYear();
            const Month = metadata?.GPSDateStamp?.slice(5, 7) || new Date().getMonth() + 1;
            const Day = metadata?.GPSDateStamp?.slice(8, 10) || new Date().getDate();
            const Hour = metadata?.GPSTimeStamp?.slice(0, 2) || new Date().getHours();
            const Minute = metadata?.GPSTimeStamp?.slice(3, 5) || new Date().getMinutes();
            const Second = metadata?.GPSTimeStamp?.slice(6, 8) || new Date().getSeconds();
            // 時間が全て存在すればそれをファイル名とし、なければimage.nameをファイル名とする
            const ImageName = Year && Month && Day && Hour && Minute && Second ? `${Year}${Month}${Day}${Hour}${Minute}${Second}` : image.name;
            const storageRef = ref(storage, `images/${ImageName}`);
            uploadBytes(storageRef, image).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    const dbImageRef = dbRef(db, `images/${ImageName}`);
                    set(dbImageRef, {
                        url: url,
                        name : image.name,
                        timestamp : {
                            year : Year,
                            month : Month,
                            day : Day,
                            hour : Hour,
                            minute : Minute,
                            second : Second
                        },
                        metadata : metadata,
                    });
                    setUploading(false);
                });
            });
        }
    };

    return (
        <div className="w-full flex flex-col gap-3 bg-white p-6 rounded-lg my-6 bg-opacity-50 border border-white">
            <input className="text-xs" type="file" onChange={handleChange} />
            <button className="bg-[var(--accent)] active:bg-white text-white px-3 py-1 rounded-md text-sm disabled:opacity-50 w-fit" onClick={handleUpload} disabled={uploading || !image}>
                <div className="flex items-center gap-2">
                    <p>Upload</p>
                    {uploading && 
                        <div className="border-2 border-white border-t-transparent w-4 h-4 rounded-full animate-spin"></div>
                    }
                </div>
            </button>
        </div>
    );
}

export default UploadImage