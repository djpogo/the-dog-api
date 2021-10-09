import './Image.css';

function Image(props) {
    return <picture>
        <img
            className={`img ${props.cover ? 'img--cover' : ''}`}
            src={props.src}
            alt={props.alt}
        />
    </picture>
};

export default Image;