import React, { useState } from 'react';
import './ImageGallery.css';
import LikeIcon from '../assets/coracao.svg';
import LikedIcon from '../assets/coracao-vermelho.svg';
import CommentIcon from '../assets/chat.svg';
import nature7 from '../assets/nature7.avif';
import nature8 from '../assets/nature8.avif';
import nature9 from '../assets/nature9.avif';
import nature10 from '../assets/nature10.avif';
import nature11 from '../assets/nature11.avif';
import nature12 from '../assets/nature12.avif';
import nature13 from '../assets/nature13.avif';
import nature14 from '../assets/nature14.avif';
import nature15 from '../assets/nature15.avif';
import nature16 from '../assets/nature16.avif';
import nature17 from '../assets/nature17.avif';
import nature18 from '../assets/nature18.avif';

const images = [
    { id: 1, src: nature7, alt: 'nature7' },
    { id: 1, src: nature8, alt: 'nature8' },
    { id: 1, src: nature9, alt: 'nature9' },
    { id: 1, src: nature10, alt: 'nature10' },
    { id: 2, src: nature11, alt: 'nature11' },
    { id: 3, src: nature12, alt: 'nature12' },
    { id: 4, src: nature13, alt: 'nature13' },
    { id: 5, src: nature14, alt: 'nature14' },
    { id: 6, src: nature15, alt: 'nature15' },
    { id: 7, src: nature16, alt: 'nature16' },
    { id: 8, src: nature17, alt: 'nature17' },
    { id: 9, src: nature18, alt: 'nature18' }
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

    const handleComment = (id) => {
        if (!isLoggedIn) {
            alert('Você precisa estar logado para comentar');
            return;
        }

        alert(`Comentar na imagem ${id}`);
    };

    return (
        <div className="gallery">
            {images.map((image) => (
                <div key={image.id} className="image-container">
                    <img src={image.src} alt={image.alt} />
                    <div className="image-name">{image.name}</div>

                    <div className="actions">
                        <span
                            className={`like-icon ${likes[image.id] ? 'liked' : ''}`}
                            onClick={() => handleLike(image.id)}
                        >
                            <img
                                src={likes[image.id] ? LikedIcon : LikeIcon}
                                alt={likes[image.id] ? 'Descurtir' : 'Curtir'}
                            />
                        </span>
                        <button
                            className="comment-btn"
                            onClick={() => handleComment(image.id)}
                        >
                            <img src={CommentIcon} alt="Comentar" /> Comentar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
