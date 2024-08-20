import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Head>
                <title>Market Research | SeedStep</title>
                <meta name="description" content="Discover how SeedStep provides tailored market research to help you understand and reach the college consumer market effectively." />
            </Head>
            <div className="flex flex-col items-center text-black pt-16">
                <main className="flex flex-col items-center py-16 px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold text-center text-gray-800">Market Research Tailored for You</h1>
                    <p className="text-gray-600 mt-6 text-center leading-relaxed">
                        At SeedStep, we leverage our direct connection with the college market to provide in-depth and actionable market research.
                        Our insights help businesses understand the unique needs and behaviors of college students, enabling them to tailor their products and marketing strategies effectively.
                    </p>

                    <section className="mt-12 w-full">
                        <h2 className="text-2xl font-semibold text-gray-700">Our Research Process</h2>
                        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                            <li>Gather data from a broad spectrum of college students.</li>
                            <li>Analyze trends and behaviors within the college demographic.</li>
                            <li>Provide customized reports that align with your business objectives.</li>
                        </ul>
                    </section>

                    <section className="mt-12 w-full">
                        <h2 className="text-2xl font-semibold text-gray-700">Why Choose SeedStep?</h2>
                        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                            <li>Direct insights from the college market.</li>
                            <li>Fast, reliable, and tailored research.</li>
                            <li>Proven success with past clients.</li>
                        </ul>
                    </section>

                    <div className="mt-12 flex justify-center">
                        <Link href='/contact'>
                            <button className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-700 transition ease-in-out">
                                Contact Us for Research
                            </button>
                        </Link>

                    </div>
                </main>
            </div>
        </>
    );
};

