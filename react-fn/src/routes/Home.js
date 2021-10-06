import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Image from '../components/Image';

import './Home.css';

function Home(props) {

    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        if (window.sessionStorage.getItem('dogs')) {
            setDogs(JSON.parse(
                window.sessionStorage.getItem('dogs')
            ));
            return;
        }
        fetchDogs();
    }, []);

    async function fetchDogs() {
        const response = await fetch(props.apiUrl);

        if (response.ok) {
            const data = await response.json(); 
            setDogs(data);
            window.sessionStorage.setItem(
                'dogs',
                JSON.stringify(data)
            );
        }
    }

    return <div>
        <button className="button" onClick={() => {fetchDogs()}}>refresh dog list</button>
        <ul className="ul">
            {dogs.map(dog => (
            <li className="li" key={dog.id}>
                <Link to={`/dog/${dog.id}`}>
                    <Image
                        cover
                        src={dog.url}
                        alt={dog.id}
                    />
                </Link>
            </li>))}
        </ul>
    </div>;
}

export default Home;