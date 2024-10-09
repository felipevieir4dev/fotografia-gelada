import React, { useState } from 'react';
import './ImageGallery.css';

const images = [
    { id: 1, src: 'Everest.jpg', alt: 'Everest' },
    { id: 2, src: 'MonteFuji.jpg', alt: 'Monte Fuji' },
    { id: 3, src: 'AlpesSuiços.jpg', alt: 'Alpes Suíços' },
    { id: 4, src: 'GrandCanyon.jpg', alt: 'Grand Canyon' },
    { id: 5, src: 'MonteFuji.jpg', alt: 'Monte Fuji' },
    { id: 6, src: 'MonteBranco.jpg', alt: 'Monte Branco' },
    { id: 7, src: 'MonteElbrus.jpg', alt: 'Monte Elbrus' },
    { id: 8, src: 'PicoPikes.jpg', alt: 'Pico Pikes' },
    { id: 9, src: 'Huandoy.jpg', alt: 'Huandoy' }
];

const ImageGallery = ({ isLoggedIn }) => {
    const [likes, setLikes] = useState({});

    const handleLike = (id) => {
        if (!isLoggedIn) {
            alert('Você precisa estar logado para curtir');
            return;
        }

        setLikes((prevLikes) => ({
            ...prevLikes,
            [id]: !prevLikes[id]
        }));
    };

    return (
        <div className="gallery">
            {images.map((image) => (
                <div key={image.id} className="image-container">
                    <img src={image.src} alt={image.alt} />
                    <div className="actions">
                        <span
                            className={`like-icon ${likes[image.id] ? 'liked' : ''}`}
                            onClick={() => handleLike(image.id)}
                        >
                            ❤️
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
