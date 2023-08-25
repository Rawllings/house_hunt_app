import React, { useState } from "react";

const faqsData = [
  {
    question: "What is HomeScout360?",
    answer:
      "HomeScout360 is a comprehensive online platform designed to help you find your dream home easily and efficiently. It provides a 360-degree view of available properties, making your house hunting experience more immersive and convenient.",
  },
  {
    question: "How do I use HomeScout360 for my house hunt?",
    answer:
      "Using HomeScout360 is simple! Just enter your preferences, such as location, budget, and property type, and the platform will present you with a wide range of listings. You can then explore each property virtually with the 360-degree view feature.",
  },
  {
    question: "What is the 360-degree view feature??",
    answer:
      "The 360-degree view feature on HomeScout360 allows you to virtually tour properties from the comfort of your device. You can navigate through rooms, view the layout, and get a realistic sense of the property's interior without having to visit it in person.",
  },
  {
    question: "Is HomeScout360's information up-to-date?",
    answer:
      "Yes, we strive to ensure that the listings on HomeScout360 are kept current. Our team regularly updates property information to provide you with the most accurate and reliable data possible.",
  },
  {
    question: "Can I save and compare properties on HomeScout360?",
    answer: `Absolutely! HomeScout360 offers a convenient "Save" feature that lets you bookmark properties you're interested in. You can also compare different listings side by side to make informed decisions.`,
  },
  {
    question: "Are there any fees to use HomeScout360?",
    answer:
      "No, using HomeScout360 is completely free for users. There are no hidden fees or subscription charges. It's our goal to make the house hunting process as seamless as possible.",
  },
  {
    question: "Can I contact sellers or agents through HomeScout360?",
    answer:
      "Yes, each property listing includes contact information for the seller or agent. You can reach out to them directly to ask questions, schedule viewings, or negotiate terms.",
  },
  {
    question: "What if I can't find properties in my preferred location?",
    answer:
      "If you're having trouble finding properties in a specific area, feel free to use the search filters to expand your search radius or explore nearby neighborhoods. You can also set up alerts to be notified when new listings that match your criteria become available.",
  },
  {
    question: "Is the 360-degree view available for all listings?",
    answer:
      "While we aim to offer the 360-degree view for as many listings as possible, it may not be available for every property. The availability of this feature depends on the property owner's decision to include it.",
  },
  {
    question: "How do I get started on HomeScout360?",
    answer:
      "To get started, simply visit the HomeScout360 website and create a free account. Once you're registered, you can begin searching for properties, saving favorites, and experiencing the convenience of virtual property tours.",
  },
  // ... more FAQ objects
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-section mx-10 pl-20 pb-5 ">
      <div className="pb-3">
        <h1 className="text-red-600 text-4xl text-center font-bold pb-5 ">
          FAQs
        </h1>
      </div>

      {faqsData.map((faq, index) => (
        <div className="faq-item pb-10" key={index}>
          <div
            className={`faq-question ${
              activeIndex === index ? "active" : ""
            } text-xl font-bold`}
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
          </div>
          {activeIndex === index && (
            <div className="faq-answer text-xl pt-4">{faq.answer}</div>
          )}
          <div className="pt-10">
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
