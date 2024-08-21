import React from 'react';

function DeliveryPolicy() {
  return (
    <div style={{ width: "100%", height: "auto", marginLeft: "50px", fontFamily: "sans-serif" }}>
      <div style={{
        padding: '20px', width: "88%", margin: 0, alignItems: "center", justifyContent: "center",
        backgroundColor: "aliceblue"
      }}>
        <h1 style={{ margin: "0%", marginLeft: "500px" }}>Delivery Policy</h1>
        <br />
        <h2 style={{ color: "green",marginLeft:"160px" }}>*** YOUR ORDER SHOULD BE DELIVERED WITHIN 5-7 WORKING DAYS *** </h2>
        <p>
          We offer free/paid shipping for all orders to be delivered within India. We usually ship orders within 2-3 days through our registered & reliable courier partners.
        </p>
        <p>
          Delivery timelines are indicative and, on some occasions, there might be some delay due to unavoidable circumstances. If delivery or performance deadlines are not met for reasons beyond our control, such as force majeure or any other unforeseen event that affects our component suppliers, the agreed deadlines shall be extended for a reasonable period. If there are multiple items, delivery might take some time.
        </p>
      </div>
    </div>
  );
}

export default DeliveryPolicy;
