import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from '../components/Image';

const apiUrl = process.env.NEXT_PUBLIC_API_DETAIL_URL;

function Detail() {
    const rtr = useRouter();
    const { dogId } = rtr.query;
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