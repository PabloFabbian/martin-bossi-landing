import React from 'react';
import ScrollStackItem from './ScrollStackItem';

const ServiceCard = ({ service }) => {
  return (
    <ScrollStackItem itemClassName="bg-white">
      <div className="flex flex-col md:flex-row h-full gap-8">
        <div className="md:w-1/2 h-full overflow-hidden rounded-lg">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-[#012040] mb-4">{service.title}</h3>
          <p className="text-gray-700 mb-6">{service.description}</p>
          <button className="bg-gradient-to-r from-[#3A7DFF] to-[#001E99] text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition self-start">
            Más información
          </button>
        </div>
      </div>
    </ScrollStackItem>
  );
};

export default ServiceCard;