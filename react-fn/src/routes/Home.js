import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Image from '../components/Image';

import './Home.css';

const apiUrl = process.env.REACT_APP_API_URL;

function Home() {

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
        const response = await fetch(apiUrl);

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