import { useEffect, useState } from "react";

const demoBlogs = [
    {
        id: 1,
        title: "Building a Clean React Blog UI",
        excerpt: "Design a modern blog homepage with reusable components and smooth user flow.",
        category: "UI Design",
    },
    {
        id: 2,
        title: "Node.js API Basics for Blog Apps",
        excerpt: "Set up a simple backend for posts, users, and authentication in a practical way.",
        category: "Backend",
    },
    {
        id: 3,
        title: "From Static Layout to Dynamic Content",
        excerpt: "Connect frontend components to real data and improve performance step by step.",
        category: "Frontend",
    },
];

const HeroCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % demoBlogs.length);
        }, 4000);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <section className="relative overflow-hidden rounded-2xl">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
                {demoBlogs.map((post) => (
                    <article key={post.id} className="relative w-full shrink-0">
                        <img
                            src="https://placehold.net/2.png"
                            alt={post.title}
                            className="h-[360px] w-full object-cover md:h-[420px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs uppercase tracking-wider backdrop-blur-sm">
                                {post.category}
                            </span>
                            <h2 className="mt-3 text-2xl font-bold md:text-4xl">{post.title}</h2>
                            <p className="mt-2 max-w-2xl text-sm text-white/90 md:text-base">
                                {post.excerpt}
                            </p>
                        </div>
                    </article>
                ))}
            </div>

            <div className="absolute bottom-4 right-4 flex gap-2 md:bottom-6 md:right-6">
                {demoBlogs.map((post, index) => (
                    <button
                        key={post.id}
                        type="button"
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => setActiveSlide(index)}
                        className={`h-2.5 w-2.5 rounded-full transition ${
                            activeSlide === index ? "bg-white" : "bg-white/50"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroCarousel;
