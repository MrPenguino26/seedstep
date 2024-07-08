// components/ClientSegment.js
import Image from 'next/image';
import config from '@/config/general';


const ClientSegment =()=> {
  const {clients, clientsText} = config.contents;
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className=" mx-auto w-3/5 text-center mt-12">
          <h1 className="text-4xl font-bold mb-4 text-forest-green-600">{clientsText.title}</h1>
        </div>
        <h2 className="text-xl text-forest-green-500 mb-12 text-center">{clientsText.description}</h2>
        <div className="grid gap-8 grid-cols-2 lg:grid-cols-5 w-5/6 mx-auto">
          {clients.map((client) => (
            <div
              className="bg-forest-green-50 p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-forest-green-700">{client.name}</h3>
                  <p className="text-green-600">{client.duration}</p>
                </div>
                {/* <Image src={client.logo} alt={client.name} width={40} height={40} className="ml-4"/> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ClientSegment;
