// import React from 'react';
// import './about.css';

// const Corporate = () => {
//   return (
//     <div className="corporate-container">
//       <section className="intro-section">
//         <h2>The bedrock of farmers</h2>
//         <p>With a constantly flourishing family of 17 million+ farmers and 400+ partner brands, SproutSmart continues to revolutionize the digital agri-ecosystem in India. Our multi-channel approach helps farmers unlock new dimensions of agriculture in the country.</p>
//         <p>To bring new meaning and hope to farmers’ lives, SproutSmart strives to enable holistic farming solutions that empower farmers in making informed farming decisions, safeguarding their crops, accessing untapped global markets, getting fair prices, and reaping maximum benefits.</p>
//       </section>

//       <section className="impact-section">
//         <h2>The impact of SproutSmart’s digital initiatives continues to burgeon exponentially</h2>
//         <h3>Our business</h3>
//         <p>SproutSmart’s aim is to empower the farming community and enable them to take well informed decisions by delivering the right set of information, products, and services at their disposal. We help farmers to increase and improve productivity while adhering to the highest domestic and international market standards. With our customer-first philosophy, we also enable farmers get the best price for their produce by safeguarding fair and transparent pricing through our market linkage programs.</p>
//       </section>

//       <section className="sustainability-section">
//         <h3>SproutSmart’s Sustainability Development Program</h3>
//         <p>In recent years, SproutSmart has been committed to designing and launching a "Sustainability Development Program" facilitating backward integration adapted to IPM practices. Quality assurance discriminates use of inputs to maximize yields with an uninterrupted supply chain model and price benefits for the farmers.</p>
//         <p>SproutSmart’s on-farm team facilitates knowledge sharing and handholding of Good Agronomical Practices (GAP), ensuring safe farming techniques.</p>
//         <p>This data-driven farmer-centric program encourages formulating, implementing, and regulating food-safe agrochemical practices in accordance with international standards.</p>
//       </section>

//       <section className="market-linkage-section">
//         <h3>Market linkage</h3>
//         <p>Our ideology to share the future of farmers doesn't end at the pre-harvest stage. The purpose of Market Linkage is to bridge the gap between the farmer and the market to sell their produce at best prices hassle-free.</p>
//         <p>Through AgroHaat (a trading company and subsidiary of SproutSmart) we help farmers get fair price realization, direct market accessibility, technical guidance, and on-time payments of crops sold.</p>
//         <p>Additionally, we also add value for clients we partner with in terms of ensured supply of their commodities, meeting their criteria in terms of both quality and quantity.</p>
//       </section>

//       <section className="milestones-section">
//         <h3>Milestones</h3>
//         <ul>
//           <li>AGRI INPUTS MARKETPLACE 2015-2019</li>
//           <li>FARMER COMMUNITY AND ENGAGEMENT 2019-2021</li>
//           <li>MARKET LINKAGE 2021-2022</li>
//           <li>DIGITAL ECOSYSTEM 2022-Present</li>
//         </ul>
//       </section>

//       <section className="media-section">
//         <h3>Media</h3>
//         <ul>
//           <li><strong>Forbes</strong>: A crop advisory for farmers. <a href="#">read more</a></li>
//           <li><strong>The Hindu</strong>: SproutSmart aims to onboard one million farmers. <a href="#">read more</a></li>
//           <li><strong>The Times Of India</strong>: Mobile app in Tamil for farmers. <a href="#">read more</a></li>
//           <li><strong>The Hans India</strong>: Digital agri platform launches Kannada app for farmers. <a href="#">read more</a></li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Corporate;




import React from 'react';
import './about.css';
import AboutSlide from './aboutSlider';

const mediaData = [
  {
    title: "Forbes",
    description: "A crop advisory for farmers leveraging data, technology, and crop science.",
    image: "https://corporate.bighaat.com/wp-content/uploads/2023/02/Forbs-300x300.png",
    link: "#"
  },
  {
    title: "The Hindu",
    description: "SproutSmart aims to onboard one million farmers from Tamil Nadu in the next year.",
    image: "https://corporate.bighaat.com/wp-content/uploads/2023/02/hindu-300x300.png",
    link: "#"
  },
  {
    title: "The Times Of India",
    description: "Mobile app in Tamil to empower the farming community with personalized solutions.",
    image: "https://corporate.bighaat.com/wp-content/uploads/2023/02/TOI-300x300.png",
    link: "#"
  },
  {
    title: "The Hans India",
    description: "Digital agri platform launches Kannada app to empower farmers in the State.",
    image: "https://corporate.bighaat.com/wp-content/uploads/2023/02/Hans-300x300.png",
    link: "#"
  }
];

const Corporate = () => {
  return (
    <div className="corporate-container">
     <AboutSlide />
      <section className="intro-section">
        <h3 >The bedrock of farmers</h3>
        <p>With a constantly flourishing family of 17 million+ farmers and 400+ partner brands, SproutSmart continues to revolutionize the digital agri-ecosystem in India. Our multi-channel approach helps farmers unlock new dimensions of agriculture in the country.</p>
        <p>To bring new meaning and hope to farmers’ lives, SproutSmart strives to enable holistic farming solutions that empower farmers in making informed farming decisions, safeguarding their crops, accessing untapped global markets, getting fair prices, and reaping maximum benefits.</p>
      </section>

      <section className="impact-section">
        <h3>The impact of SproutSmart’s digital initiatives continues to burgeon exponentially</h3>
        <h3>Our business</h3>
        <p>SproutSmart’s aim is to empower the farming community and enable them to take well informed decisions by delivering the right set of information, products, and services at their disposal. We help farmers to increase and improve productivity while adhering to the highest domestic and international market standards. With our customer-first philosophy, we also enable farmers get the best price for their produce by safeguarding fair and transparent pricing through our market linkage programs.</p>
      </section>
      <section className="image-section">
       <img src='https://image.slidesharecdn.com/c68f6608-f46e-4055-89f9-c5bb5e8253be-160916075931/75/iTrack2-American-English-3-2048.jpg' style={{width:"100%",height:"700px"}} />
      </section>


      <section className="sustainability-section">
        <h3>SproutSmart’s Sustainability Development Program</h3>
        <p>In recent years, SproutSmart has been committed to designing and launching a "Sustainability Development Program" facilitating backward integration adapted to IPM practices. Quality assurance discriminates use of inputs to maximize yields with an uninterrupted supply chain model and price benefits for the farmers.</p>
        <p>SproutSmart’s on-farm team facilitates knowledge sharing and handholding of Good Agronomical Practices (GAP), ensuring safe farming techniques.</p>
        <p>This data-driven farmer-centric program encourages formulating, implementing, and regulating food-safe agrochemical practices in accordance with international standards.</p>
      </section>

      <section className="market-linkage-section">
        <h3>Market linkage</h3>
        <p>Our ideology to share the future of farmers doesn't end at the pre-harvest stage. The purpose of Market Linkage is to bridge the gap between the farmer and the market to sell their produce at best prices hassle-free.</p>
        <p>Through AgroHaat (a trading company and subsidiary of SproutSmart) we help farmers get fair price realization, direct market accessibility, technical guidance, and on-time payments of crops sold.</p>
        <p>Additionally, we also add value for clients we partner with in terms of ensured supply of their commodities, meeting their criteria in terms of both quality and quantity.</p>
      </section>

      <section className="milestones-section">
        <h3>Milestones</h3>
        <ul>
          <li>AGRI INPUTS MARKETPLACE 2015-2019</li>
          <li>FARMER COMMUNITY AND ENGAGEMENT 2019-2021</li>
          <li>MARKET LINKAGE 2021-2022</li>
          <li>DIGITAL ECOSYSTEM 2022-Present</li>
        </ul>
      </section>

      <section className="media-section">
        <h3>Media</h3>
        <div className="media-cards">
          {mediaData.map((item, index) => (
            <div key={index} className="media-card">
              <img src={item.image} alt={item.title} />
              <div className="media-card-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <a href={item.link}>read more</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Corporate;
