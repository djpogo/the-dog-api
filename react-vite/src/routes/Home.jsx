import { useEffect, useState } from 'react';
import Image from '../components/Image';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {

    const [dogs, setDogs] = useState([]);

    async function fetchDogs() {
        const response = await fetch(import.meta.env.VITE_API_URL);
        if (response.ok) {
            setDogs(await response.json());
        }
    }

    useEffect(() => {
        if (dogs.length === 0) {
            fetchDogs();
        }
    }, []);

    return <main>
        <button className="button" onClick={fetchDogs}>
            refresh dog list
        </button>
        <ul className="ul">
            {dogs.map(dog => <li className="li">
                <Link to={`/dog/${dog.id}`}>
                    <Image
                        cover
                        src={dog.url}
                        alt={dog.id}
                    />
                </Link>
            </li>)}
        </ul>
    </main>;
};

export default Home;