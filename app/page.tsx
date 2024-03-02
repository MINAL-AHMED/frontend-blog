import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import { blogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
export const revalidate = 30; // revalidate at most 30 seconds
async function getData(fetchLatest = false) {
  let query;
  if (fetchLatest) {
    query = `*[_type =='blog'] | order(_createdAt desc)[0...4]{
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
    }`;
  } else {
    query = `*[_type =='blog'] | order(_createdAt desc){
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
    }`;
  }

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: blogCard[] = await getData(true);

  return (
    <>
      {/* Hero section */}
      <section className="w-full h-[100vh] md:h-screen  pt-20 md:pt-24 lg:pt-28 bg-neutral-100 dark:bg-neutral-900">
        <div className="container space-y-10 xl:space-y-16 md:pt-20">
          <div className="grid grid-cols-1 max-w-5xl items-center gap-2 px-8 mx-auto md:grid-cols-2 md:gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] pt-8  animate-fadeInUp ">
                Let's Explore the World
              </h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400 py-4 animate-fadeInUp">
                Inspiring travel stories and experiences from around the globe.
                Embark on a journey of discovery.
              </p>

              <Button
                size="sm"
                asChild
                className="w-full  p-6 text-lg sm:w-fit font-semibold bg-neutral-700 dark:bg-neutral-50 dark:hover:bg-neutral-300 hover:bg-neutral-800 transition animate-fadeInUp"
              >
                <Link href="#blog">
                  Read Blog{" "}
                  <span className="px-2 text-2xl animate-fadeInUp">⬇</span>
                </Link>
              </Button>
            </div>
            <div className="flex justify-center items-center animate-fadeInUp pt-4">
              <img
                alt="Hero"
                className="md:block  grayscale-1 aspect-video overflow-hidden rounded-xl object-bottom"
                height="500"
                src="/assets/images/hero-image.jpg"
                width="500"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Hero section */}

      {/* New Blog section */}
      <section className="pt-14" id="blog">
        <div className="flex flex-col items-center text-center md:py-9 ">
          <h1 className="font-bold text-gray-500 dark:text-gray-200 sm:text-5xl md:text-6xl">
            New Blog
          </h1>
        </div>
        <div className="grid mt-4 pb-10 grid-cols-1 max-w-5xl items-center gap-3 px-8 mx-auto md:grid-cols-3 md:gap-6">
          {data.map((post, idx) => (
            <Card
              key={idx}
              className="scale-100 hover:scale-105 ease-in duration-500"
            >
              <Image
                src={urlFor(post.titleImage).url()}
                alt="image"
                width={500}
                height={500}
                className="rounded-t-lg h-[200px] object-cover"
              />
              <CardContent className="mt-5">
                <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
                <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                  {post.smallDescription}
                </p>
                <Button asChild className="w-full mt-7">
                  <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
