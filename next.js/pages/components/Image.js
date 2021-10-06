import styles from '../../styles/Image.module.css';
function Image(props) {
    return (
        <picture>
            <img className={`${styles.img} ${props.cover ? styles['img--cover'] : ''}`}
                src={props.src}
                alt={props.alt}
            />
        </picture>
    );
}

export default Image;