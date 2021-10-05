import { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import Image from '../components/Image';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { dogs: [] };
    }

    componentDidMount() {
        this.fetchDogs();
    }
    
    async fetchDogs() {
    fetch(this.props.apiUrl)
        .then(response => response.json())
        .then(data => this.setState({ dogs: data }));
    }

    render() {
        return <ul className="ul">
            {this.state.dogs.map((dog) => (
            <li className="li" key={dog.id}>
                <Link to={`/dog/${dog.id}`}>
                    <Image
                        cover
                        src={dog.url}
                        alt={dog.id}
                    />
                </Link>
            </li>)
            )}
        </ul>
    }
}

export default Home;