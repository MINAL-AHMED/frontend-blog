"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { blogCard } from "../lib/interface";
import { client, urlFor } from "../lib/sanity";

export const revalidate = 30;

async function getData() {
  const query = `*[_type =='blog'] | order(_createdAt desc){
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;
  const data = await client.fetch(query);
  return data;
}

const Blog = async () => {
  const data: blogCard[] = await getData();
  return (
    <>
      <h1 className="text-2xl  font-bold flex justify-center items-center pt-24 md:pt-36 xl:mt-4 tracking-tighter text-primary sm:text-3xl md:text-4xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
        Let's Know More
      </h1>

      <div className="relative grid grid-cols-1 py-14  md:grid-cols-2  gap-5 max-w-3xl mx-auto px-4">
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
    </>
  );
};

export default Blog;
