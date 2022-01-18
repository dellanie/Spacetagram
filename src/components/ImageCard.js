import React from 'react';
import './image.css';
import useStateLocalStorage from './hooks/useStateLocalStorage';
import localization from "./utils";

function ImageCard({image,title,mediaType,date,description}) {

    
    const [likedButton,setLikedButton] = useStateLocalStorage(date);

    let color = likedButton ? 'red' : 'black';

    let imageDisplay;

    {
        mediaType === "image" ?(
            imageDisplay = (
                <img
                    src={image}
                    alt="Picutre of the day by NASA"
                    className="card-image"
                />
            )
        ):(
            imageDisplay = (
                <iframe
                    title={'Video of ' + title}
                    src={image}
                    alt="Video of the day by NASA"
                    className="card-image"
                />
            )
        );
    }
    return (
        <div className='imagecard'>
                <div className='imagecardimg'>
                    {imageDisplay}
                </div>
                <h3>{title}</h3>
                <h3>{date}</h3>
                <span>{description}</span>

                <div className='imageCardLikeButton'>
                    <button onClick={() => setLikedButton(!likedButton)} size="large" aria-label={likedButton?localization.ariaLabels.unlikePhoto:localization.ariaLabels.likePhoto} style={{color:color}}>
                        {likedButton ? (
                            <i className="fas fa-heart"/>
                        ):(
                            <i className='far fa-heart'/>
                        )
                    }
                    </button>
                </div>
        </div>
    )
}

export default ImageCard
