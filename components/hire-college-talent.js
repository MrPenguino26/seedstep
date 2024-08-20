import Head from 'next/head';
import Link from 'next/link'

export default function Home() {
    return (
        <div className="flex items-center justify-center pt-16">
            <Head>
                <title>College Talent Tailored to Your Needs | SeedStep</title>
                <meta name="description" content="SeedStep connects companies with top college talent, tailored to fit your specific needs." />
            </Head>

            <div className="max-w-2xl bg-white p-10 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center text-gray-800">Tailored Matches, Quality College Talent</h1>
                <p className="text-gray-600 mt-4 text-center">
                    At SeedStep, we don’t just connect companies with college students. We deliver curated matches based on your specific business needs.
                </p>

                <div className="mt-8 space-y-6">
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-700">How We Tailor Your Matches</h2>
                        <p className="text-gray-600 mt-2">
                            We evaluate your company&lsquo;s unique requirements and identify college students with the right skills and background to fit those needs.
                        </p>
                    </div>

                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-700">Finding Top College Talent</h2>
                        <p className="text-gray-600 mt-2">
                            With direct access to a pool of motivated and skilled college students, we ensure you get the best interns that align with your company’s goals.
                        </p>
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <Link href="/form">
                        <button className="px-6 py-3 bg-green-700 text-white font-semibold rounded-md shadow-md hover:bg-green-600">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
