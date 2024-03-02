/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VfVo352f22w
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function About() {
  return (
    <div className="w-full mt-8 py-14 lg:py-24">
      <div className="container px-4 flex flex-col items-center gap-4 text-center md:gap-10 md:px-6">
        <div className="space-y-2">
          <h1 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Us
          </h1>
          <p className="text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
            Exploring the world of words, one story at a time. Welcome to our
            little corner of the internet.
          </p>
        </div>
        <div className="max-w-3xl space-y-4">
          <div className="space-y-2">
            <h2 className="text-lg font-bold tracking-wide uppercase text-gray-500 dark:text-gray-400">
              Our Story
            </h2>
            <p className="text-gray-500 md:text-base/relaxed dark:text-gray-400">
              Founded in 2021, our team has been working tirelessly to provide
              the best tools for web development. We believe in the power of
              open source and the importance of community.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-bold tracking-wide uppercase text-gray-500 dark:text-gray-400">
              Our Mission
            </h2>
            <p className="text-gray-500 md:text-base/relaxed dark:text-gray-400">
              Founded in 2021, our team has been working tirelessly to provide
              the best tools for web development. We believe in the power of
              open source and the importance of community.
            </p>
          </div>
        </div>
        <div className="container max-w-3xl grid items-center justify-center gap-6 py-10 md:py-14">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet the Team
            </h2>
            <p className="text-gray-500 md:text-base/relaxed lg:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
              A passionate team of Writer and Reader.
            </p>
          </div>
          <div className="grid grid-cols-1 items-stretch justify-center gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <img
                alt="Avatar"
                className="rounded-lg object-cover object-center border border-gray-100 w-full aspect-square"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">Alice Johnson</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Content Writer
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Passionate about creating tools that make web development
                easier. Open source enthusiast.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <img
                alt="Avatar"
                className="rounded-lg object-cover object-center border border-gray-100 w-full aspect-square"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">Mark Lee</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Content Reader
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Loves creating beautiful and intuitive user interfaces. Always
                experimenting with new design trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
