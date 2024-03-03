import { Photos } from "../components/photos";


const fetchPhotos = async () => {
    const client_id = "4c539b18186ad71";
    const album_id = "T6MeajI";

    const resp = await fetch(
        `https://api.imgur.com/3/album/${album_id}?with_images=true`,
        {
            headers: {
                Authorization: `Client-ID ${client_id}`,
            },
            next: {
                revalidate: 1,
            },
        }
    );
    const data = await resp.json();
    return data.data.images.map((image: any) => ({
        width: image.width,
        height: image.height,
        src: image.link,
        description: image.description,
    }));
};

export default async function Home() {
    const photos = await fetchPhotos();
    return <Photos photos={photos} />;
}
