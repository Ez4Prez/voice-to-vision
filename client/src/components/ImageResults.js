import React from "react";

function ImageResults(){

    const images = [
        { id: 1, src: "url-1", alt: "description-1"},
        { id: 2, src: "url-2", alt: "description-2"},
        { id: 3, src: "url-3", alt: "description-3"},
        { id: 4, src: "url-4", alt: "description-4"},
    ];

    const imageList = images.map((image) => (
        <div key={image.id}>
            <img src={image.src} alt={image.alt} />
        </div>
    ));

    return <div>{imageList}</div>;
}


export default ImageResults;