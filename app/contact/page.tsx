"use client";

// import { BackgroundBeams } from "@/components/ui/background-beams";
import { FormEvent, useState } from "react";

function MusicSchoolContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Submitted:", { email, message });
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen  py-12 pt-36 relative dark:bg-neutral-800">
      {" "}
      {/* Ensure the container is relative */}
      {/* BackgroundBeams with adjusted z-index */}
      <div className="absolute top-0 left-0 w-full h-full z-0" />
      {/* Content with higher z-index */}
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        {" "}
        {/* Add relative and z-10 to bring content to the front */}
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 dark:text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our blog, programs,
          or events. Reach out and let us know how we can assist you in your
          exploring journey.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg  border-none dark:bg-neutral-900  focus:ring-green-500  w-full p-4 bg-gray-300 placeholder:text-neutral-500"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg  border-none dark:bg-neutral-900  focus:ring-green-500  w-full p-4 bg-gray-300 placeholder:text-neutral-500"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-primary focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;
