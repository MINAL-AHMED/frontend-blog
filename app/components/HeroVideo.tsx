import { client } from "../lib/sanity";

async function getData() {
  const query = `*[_type == 'herovideo']{
    _id,
    videoFile {
       asset->{
          _id,
          url
        }
    }
 }`;
  const data = await client.fetch(query);
  return data;
}

export default async function HeroVideo() {
  const videos = await getData();
  return (
    <div>
      <h1>Hero Videos</h1>
      {videos.map((video: any) => (
        <div key={video._id}>
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src={video.videoFile.asset.url} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
}
