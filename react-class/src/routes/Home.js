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
        if (window.sessionStorage.getItem('dogs')) {
            this.setState({
                dogs: JSON.parse(window.sessionStorage.getItem('dogs')) 
            });
            return;
        }
        this.fetchDogs();
    }
    
    async fetchDogs() {
        const response = await fetch(this.props.apiUrl);
        if (response.ok) {
            this.setState({
                dogs: await response.json()
            });
            window.sessionStorage.setItem(
                'dogs',
                JSON.stringify(this.state.dogs)
            );
        }
    }

    render() {
        return <div>
            <button className="button" onClick={() => {this.fetchDogs()}}>refresh dog list</button>
            <ul className="ul">
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
        </div> 
    }
}

export default Home;