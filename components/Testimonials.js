// Import necessary components if using Next.js or similar frameworks
import Image from 'next/image';

export default function TestimonialsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center mt-8 mb-12">Don't just take our word</h1>

            {/* Testimonials Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Testimonial 1 */}
                <div className="p-6 border rounded-lg shadow-lg text-center">
                    <div className="flex justify-center mb-4">
                        <Image src="/images/client.png" alt="Client Name" width={100} height={100} className="rounded-full"/>
                    </div>
                    <p className="text-lg font-semibold">Client Name</p>
                    <p className="text-sm text-gray-500">Client's Title</p>
                    <p className="mt-4">"This is a wonderful service that provides everything we need!"</p>
                </div>

                {/* Testimonial 2 */}
                <div className="p-6 border rounded-lg shadow-lg text-center">
                    <div className="flex justify-center mb-4">
                        <Image src="/images/client.png" alt="Client Name" width={100} height={100} className="rounded-full"/>
                    </div>
                    <p className="text-lg font-semibold">Client Name</p>
                    <p className="text-sm text-gray-500">Client's Title</p>
                    <p className="mt-4">"Absolutely amazing experience with outstanding results."</p>
                </div>

                {/* Testimonial 3 */}
                <div className="p-6 border rounded-lg shadow-lg text-center">
                    <div className="flex justify-center mb-4">
                        <Image src="/images/client.png" alt="Client Name" width={100} height={100} className="rounded-full"/>
                    </div>
                    <p className="text-lg font-semibold">Client Name</p>
                    <p className="text-sm text-gray-500">Client's Title</p>
                    <p className="mt-4">"The team is professional, efficient, and highly skilled."</p>
                </div>
            </div>
        </div>
    );
}
