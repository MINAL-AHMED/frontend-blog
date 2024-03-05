import { Card, CardContent } from "@/components/ui/card";
import { client, videoUrlFor } from "../lib/sanity";

export const revalidate = 30;

async function getData() {
  const query = `*[_type =='video'] | order(_createdAt desc){
        title,
        description,
        "videoUrl": videoUrl.asset->url
      }`;
  const data = await client.fetch(query);
  return data;
}

const Video = async () => {
  const data = await getData();

  return (
    <>
      <h1 className="text-2xl font-bold flex justify-center items-center pt-24 md:pt-36 xl:mt-4 tracking-tighter text-primary sm:text-3xl md:text-4xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
        Let's Watch Video
      </h1>

      <div className="relative grid grid-cols-1 py-14 md:grid-cols-2 gap-5 max-w-3xl mx-auto px-4">
        {data.map((video: any, idx: any) => (
          <Card
            key={idx}
            className="scale-100 hover:scale-105 ease-in duration-500"
          >
            {video.videoUrl && (
              <video
                src={videoUrlFor(video.videoUrl)}
                width={500}
                height={500}
                className="rounded-t-lg h-[200px] object-cover"
                controls
              >
                {/* Add 720p video source */}
                {video.videoUrls && (
                  <source
                    src={videoUrlFor(video.videoUrls[0])}
                    type="video/mp4"
                  />
                )}
                {/* Add 1080p video source */}
                {video.videoUrls && (
                  <source
                    src={videoUrlFor(video.videoUrls[1])}
                    type="video/mp4"
                  />
                )}
                {/* Fallback message if the browser doesn't support HTML5 video */}
                Your browser does not support the video tag.
              </video>
            )}

            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold">{video.title}</h3>
              <p className="line-clamp-[8.5] text-sm mt-2 text-gray-600 dark:text-gray-300">
                {video.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Video;
