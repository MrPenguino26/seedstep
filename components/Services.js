import { useEffect, useState } from 'react';
import Image from 'next/image';
import config from '@/config/general';

export default function Services() {
    const [containerWidth, setContainerWidth] = useState(0);
    const {title, subtitle1, subtitle2, subtitle3, bp11, bp12, bp13, bp21, bp22, bp23, bp31, bp32, bp33} = config.contents.services;

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

    const imageWidth = containerWidth / 3; // w-1/3 value

    return (
        <div className="flex flex-col items-center py-12 w-full services-container overflow-hidden">
            <h1 className="text-3xl font-bold mb-8">{title}</h1>
            <div className="flex w-5/6 justify-between">
                <div className="w-1/3">
                    <div className="w-1/2 aspect-w-1 aspect-h-1 mx-auto">
                        <Image
                            src="/images/student.jpg"
                            alt="Service 1"
                            width={imageWidth}
                            height={imageWidth}
                            className="object-cover"
                        />
                    </div>
                    <div className='w-3/4 text-center mx-auto'>
                        <p className="mt-4 text-xl font-bold">{subtitle1}</p>
                        <ul className="w-1/2 list-disc mt-2 mx-auto">
                            <li className='pl-0'>{bp11}</li>
                            <li className='pl-0'>{bp12}</li>
                            <li className='pl-0'>{bp13}</li>
                        </ul>
                    </div>

                </div>
                <div className="w-1/3">
                    <div className="w-1/2 aspect-w-1 aspect-h-1 mx-auto">
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
                        <ul className="w-1/2 list-disc mt-2 mx-auto">
                            <li className='pl-0'>{bp21}</li>
                            <li className='pl-0'>{bp22}</li>
                            <li className='pl-0'>{bp23}</li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="w-1/2 aspect-w-1 aspect-h-1 mx-auto">
                        <Image
                            src="/images/market.png"
                            alt="Service 3"
                            width={imageWidth}
                            height={imageWidth}
                            className="object-cover"
                        />
                    </div>
                    <div className='w-3/4 text-center mx-auto'>
                        <p className="mt-4 text-xl font-bold">{subtitle3}</p>
                        <ul className="w-1/2 list-disc mt-2 mx-auto">
                            <li className='pl-0'>{bp31}</li>
                            <li className='pl-0'>{bp32}</li>
                            <li className='pl-0'>{bp33}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
