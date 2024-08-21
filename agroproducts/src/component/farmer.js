// import React, { useState } from "react";
// import "./farmer.css";
// import axios from "axios";

// function Farmer() {
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     productName: "",
//     quantity: "",
//     price: ""
//   });

//   const handleChange = (e) => {
//     const api='http://localhost:3001/farmer';
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//     axios.post((e)=>
//     {

//     })
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);

//   };

//   return (
//     <div className="wsr">
//     <div className="form-container" >
//       <form onSubmit={handleSubmit} className="product-form"  >
//         <h2>Farmer Data</h2>
//         <div className="form-group" >
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             style={{width:"300px"}}
//             required
//             />
//         </div>
//         <div className="form-group">
//           <label htmlFor="contact">Contact Number:</label>
//           <input
//             type="text"
//             id="contact"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             style={{width:"300px"}}
//             required
//             />
//         </div>
//         <div className="form-group">
//           <label htmlFor="productName">Product Name:</label>
//           <input
//             type="text"
//             id="productName"
//             name="productName"
//             value={formData.productName}
//             onChange={handleChange}
//             style={{width:"300px"}}
//             required
//             />
//         </div>
//         <div className="form-group">
//           <label htmlFor="quantity">Quantity:</label>
//           <input
//             type="number"
//             id="quantity"
//             name="quantity"
//             value={formData.quantity}
//             onChange={handleChange}
//             style={{width:"300px"}}
//             required
//             />
//         </div>
//         <div className="form-group">
//           <label htmlFor="price">Price:</label>
//           <input
//             type="text"
//             id="price"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             style={{width:"300px"}}
//             required
//           />
//         </div>
//         <button type="submit" className="submit-button">Submit</button>
//       </form>
//     </div>
//             </div>
//   );
// }

// export default Farmer;

import React, { useState } from "react";
import axios from "axios";
import "./farmer.css";

function Farmer() {
  const farmerdata = {
    vegetable: "https://media.istockphoto.com/id/1280856062/photo/variety-of-fresh-organic-vegetables-and-fruits-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=ZJyLIXEa10DQTtvH8vVLQh3ZDqxmt4soKhPRaQE23k8=",
    fruit: "https://thumbs.dreamstime.com/z/heart-fruits-vegetables-fit-healthy-lifestyle-concept-perfect-diet-oranges-apples-tomatoes-blackberries-grapes-kiwi-301160222.jpg?w=768",
    spices: "https://t4.ftcdn.net/jpg/01/02/58/91/360_F_102589163_hk02O92vzEYP0rZbVyvDTbkje1GaUDk1.jpg",
    nuts: "https://media.istockphoto.com/id/496689738/photo/assorted-nuts.jpg?s=612x612&w=0&k=20&c=lJhqPaHqwvXiDFNni5nB9EKgvYlqMEljI-0JzaB-ZNA=",
    farmmachine: "https://i.pinimg.com/originals/68/22/83/682283c0aa432a66027622dd5ed551db.jpg",
    cropproduction: "https://media.istockphoto.com/id/1346744481/photo/anonymous-chef-harvesting-fresh-vegetables-on-a-farm.jpg?s=612x612&w=0&k=20&c=U9h4fAi68nwVndAJW8TF-f2lFFCO2Y-XrZWA2gah1Xw=",
    seed: "https://img.freepik.com/premium-photo/various-seeds-diet-eating-professional-advertising-food-photography_920594-35032.jpg",
    rice: "https://st.depositphotos.com/1056373/1930/i/950/depositphotos_19303401-stock-photo-wooden-scoops-with-different-rice.jpg"
};
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    product: "",
    quantity: "",
    price: "",
    description: "",
    location:"",
    category:""
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    // if(name === "product"){
    //   const api=`http://localhost:8080/slider/${value}`;
  
    //   axios.get(api).then((response)=>
    //   {
    //     setFormData({
    //       ...formData,
    //       [name]: response.data,
    //     });
    //   })
    //   console.log(farmerdata.value);
    // }
    // else{

      setFormData({
        ...formData,
        [name]: value,
      });
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
      await axios.get(`http://localhost:3001/single/${formData.product}`).then((response)=>
      // await axios.get(`http://localhost:8080/vegetables/${formData.data}`).then((response)=>
      {
        console.log(response.data);
        formData.category = response.data.img;
      })
    const api = "http://localhost:3001/farmer";

    await axios
      .post(api, formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });

    setFormData({
      name: "",
      contact: "",
      product: "",
      quantity: "",
      price: "",
      description: "",
       location:"",
       category:""
    });
  };

  return (
    <div className="wsr">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="product-form">
          <h2>Farmer Data</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: "300px" }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact Number:</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              style={{ width: "300px" }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product">Product Name:</label>
            <input
              type="text"
              id="product"
              name="product"
              value={formData.productName}
              onChange={handleChange}
              style={{ width: "300px" }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              style={{ width: "300px" }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              style={{ width: "300px" }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Description:</label>
            <textarea
              style={{ width: "300px", height: "50px", borderRadius: "10px" }}
              value={formData.description}
              onChange={handleChange}
              name="description"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              style={{ width: "300px" }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={{ width: "300px" }}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Farmer;
