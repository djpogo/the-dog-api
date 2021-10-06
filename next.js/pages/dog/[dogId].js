import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from '../components/Image';

function Detail(props) {
    const rtr = useRouter();
    const { dogId } = rtr.query;
    const [dog, setDog] = useState({});

    useEffect(() => {
        fetchDog();
    }, [dogId]);

    async function fetchDog() {
        const response = await fetch(`https://api.thedogapi.com/v1/images/${dogId}`);
        if (response.ok) {
            setDog(await response.json());
        }
    }

    return (
        <main>
            <h1>Dog #{dog.id}</h1>
            <Link href="/">zurück</Link>
            <Image
                src={dog.url}
                alt={dog.id}
            />
            <Link href="/">zurück</Link>
        </main>
    );
}

export default Detail;