import Image from '../components/Image';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail() {
    const { dogId } = useParams();
    const [dog, setDog] = useState({});

    useEffect(async () => {
        const response = await fetch(`${import.meta.env.VITE_API_DETAIL_URL}${dogId}`);
        if (response.ok) {
            setDog(await response.json());
        }
    }, [dogId]);

    return <main>
        <Link to="/">zurück</Link>
        <Image 
            src={dog.url}
            alt={dog.id}
        />
        <Link to="/">zurück</Link>
    </main>;
};

export default Detail;