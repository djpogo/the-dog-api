import { Component } from 'react';
import './Image.css';

class Image extends Component {
    imgClass() {
        
    }

    render() {
        return <picture>
            <img className={`img ${this.props.cover ? 'img--cover' : ''}`}
                src={this.props.src}
                alt={this.props.alt}
            />
        </picture>;
    }
}

export default Image;