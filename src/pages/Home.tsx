import HeroCarousel from "../components/HeroCarousel";

const blogSections = [
    {
        name: "Technology",
        articles: [
            {
                title: "AI Tools Transforming Daily Work",
                excerpt: "A practical look at how modern AI assistants improve writing, coding, and planning.",
            },
            {
                title: "React Performance in 2026",
                excerpt: "Simple optimization habits to keep your frontend smooth as your app scales.",
            },
            {
                title: "Cloud Security Essentials",
                excerpt: "Core practices every developer should follow to protect APIs and user data.",
            },
        ],
    },
    {
        name: "Farming",
        articles: [
            {
                title: "Smart Irrigation for Better Yield",
                excerpt: "How sensor-driven watering can reduce waste and improve harvest consistency.",
            },
            {
                title: "Organic Soil Management Basics",
                excerpt: "Improve soil health naturally with composting, crop rotation, and cover crops.",
            },
            {
                title: "Modern Greenhouse Strategies",
                excerpt: "Build a climate-friendly setup for year-round farming productivity.",
            },
        ],
    },
    {
        name: "Finance",
        articles: [
            {
                title: "Budgeting for Freelancers",
                excerpt: "Create a reliable monthly budget even when your income changes often.",
            },
            {
                title: "Understanding Long-Term Investing",
                excerpt: "A beginner-friendly guide to compounding, risk, and portfolio balance.",
            },
            {
                title: "Emergency Fund Planning",
                excerpt: "Step-by-step advice to build financial safety for unexpected life events.",
            },
        ],
    },
];

const Homepage = () => {
    return (
        <div className="mt-4 flex flex-col gap-10 px-4 pb-8">
            <HeroCarousel />

            {blogSections.map((section) => (
                <section key={section.name} className="rounded-2xl bg-white/70 p-4 md:p-6">
                    <h2 className="mb-6 text-2xl font-bold text-gray-800">{section.name}</h2>

                    <div className="flex flex-col gap-6">
                        {section.articles.map((article, index) => (
                            <article
                                key={article.title}
                                className={`grid items-center gap-4 rounded-xl border p-4 md:grid-cols-2 md:gap-6 ${
                                    index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                                }`}
                            >
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">{article.title}</h3>
                                    <p className="mt-2 text-gray-600">{article.excerpt}</p>
                                </div>

                                <img
                                    src="https://placehold.net/3.png"
                                    alt={article.title}
                                    className="h-56 w-full rounded-lg object-cover"
                                />
                            </article>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Homepage;
