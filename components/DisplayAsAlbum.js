"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebaseConfig";
import { ref, onValue } from "firebase/database";
import Image from "next/image";
import { motion } from "framer-motion";

const DisplayAsAlbum = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [previewImage, setPreviewImage] = useState(null);

    const sortImages = (images) => {
        images.sort((a, b) => {
            const dateA = new Date(a.timestamp.year, a.timestamp.month - 1, a.timestamp.day, a.timestamp.hour, a.timestamp.minute, a.timestamp.second);
            const dateB = new Date(b.timestamp.year, b.timestamp.month - 1, b.timestamp.day, b.timestamp.hour, b.timestamp.minute, b.timestamp.second);
            return dateB - dateA;
        });
    }

    useEffect(() => {
        const imagesRef = ref(db, "images/");
        onValue(imagesRef, (snapshot) => {
            const data = snapshot.val();
            const imageList = [];
            for(let id in data) {
                imageList.push(data[id]);
            }
            setImages(imageList);
            sortImages(imageList);
            setLoading(false);
        });
    }, []);

    return (
        // <div className="relative w-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {
                images.map((image, index) => (
                    <motion.div
                        key={image.name}
                        className="w-full aspect-square relative"
                        whileHover={{ scale: 1.025 }}
                        // className="absolute w-1/2 aspect-square"
                        // sytle={{
                        //     zIndex: `${index}`,
                        //     rotate: "180",
                        //     transformOrigin: "50% 50%",
                        //     transition: "all 0.3s ease-in-out"
                        // }}
                    >
                        <Image
                            src={image.url}
                            alt={image.name}
                            layout="fill"
                            className="object-cover"
                            onClick={() => setPreviewImage(image)}
                        />
                    </motion.div>
                ))
            }
            <div>
            {previewImage && 
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-50 flex justify-center items-center" onClick={() => setPreviewImage(null)}>
                    <motion.div
                        className="relative w-full max-w-2xl aspect-square m-3"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        transition={{ duration: 0.1 }}
                        ease={{ type: "tween"}}
                    >
                        <Image src={previewImage.url} alt="preview" layout="fill" className="object-cover"/>
                    </motion.div>
                    { previewImage.timestamp &&
                        <div className="absolute px-3 sm:px-0 w-full max-w-2xl transform translate-x-1/2 bottom-3 right-1/2">
                            <p className="w-fit flex text-xs bg-black bg-opacity-30 rounded-md px-2 py-1 text-white ">
                                {previewImage.timestamp.year}.
                                {previewImage.timestamp.month}.
                                {previewImage.timestamp.day}
                            </p>
                        </div>
                    }
                </div>
            }
            </div>
        </div>
    );
}

export default DisplayAsAlbum