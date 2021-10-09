import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Image from '../components/Image';
const apiUrl = process.env.REACT_APP_API_DETAIL_URL;

function Detail() {
    const { dogId } = useParams();

    const [dog, setDog] = useState({});

    useEffect(() => {
        fetchDog();
    }, [dogId]);

    async function fetchDog() {
        const response = await fetch(`${apiUrl}${dogId}`);

        if (response.ok) {
            setDog(await response.json());
        }
    }

    return <main>
        <h1>Dog #{dog.id}</h1>
        <Link to="/">zurück</Link>
        <Image
            src={dog.url}
            alt={dog.id}
        />
        <Link to="/">zurück</Link>
    </main>;
}

export default Detail;