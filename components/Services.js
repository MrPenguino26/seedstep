import { useEffect, useState } from 'react';
import Image from 'next/image';
import config from '@/config/general';
import Link from 'next/link';

export default function Services() {
    const [containerWidth, setContainerWidth] = useState(0);
    const { title, subtitle3, subtitle2, bp31, bp32, bp33, bp21, bp22, bp23 } = config.contents.services;

    useEffect(() => {
        function handleResize() {
            // Get the width of the parent container
            const container = document.querySelector('.services-container');
            if (container) {
                setContainerWidth(container.offsetWidth);
            }
        }

        // Initial size calculation
        handleResize();

        // Update the size on window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const imageWidth = containerWidth / 2; // Updated width calculation

    return (
        <div className="flex flex-col items-center py-12 w-full services-container overflow-hidden">
            <h1 className="text-3xl font-heading font-bold mb-8">{title}</h1>
            <div className="flex w-3/4 justify-center space-x-8">
                <div className="w-1/2">
                    <div className="w-1/4 aspect-w-1 aspect-h-1 mx-auto">
                        <Image
                            src="/images/match.png"
                            alt="Service 2"
                            width={imageWidth}
                            height={imageWidth}
                            className="object-cover"
                        />
                    </div>
                    <div className='w-3/4 text-center mx-auto'>
                        <p className="mt-4 text-xl font-bold">{subtitle2}</p>
                        <ul className="w-full list-disc mt-2 mx-auto text-left pl-4">
                            <li className='pl-2'>{bp21}</li>
                            <li className='pl-2'>{bp22}</li>
                            <li className='pl-2'>{bp23}</li>
                        </ul>
                        <Link href="/hire-talent">
                            <button className="mt-4 bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Learn More
                            </button>
                        </Link>

                    </div>
                </div>
                <div className="w-1/2">
                    <div className="w-1/4 aspect-w-1 aspect-h-1 mx-auto">
                        <Image
                            src="/images/market.png"
                            alt="Service 1"
                            width={imageWidth}
                            height={imageWidth}
                            className="object-cover"
                        />
                    </div>
                    <div className='w-3/4 text-center mx-auto'>
                        <p className="mt-4 text-xl font-bold">{subtitle3}</p>
                        <ul className="w-full list-disc mt-2 mx-auto text-left pl-4">
                            <li className='pl-2'>{bp31}</li>
                            <li className='pl-2'>{bp32}</li>
                            <li className='pl-2'>{bp33}</li>
                        </ul>
                        <Link href="/conduct-market-research">
                            <button className="mt-4 bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
