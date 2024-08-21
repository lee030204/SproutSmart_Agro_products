// import React, { useState } from 'react';

// // Define the ProfilePage component
// const ProfilePage = () => {
//   // State to handle profile details and edit mode
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileDetails, setProfileDetails] = useState({
//     fullName: 'mani',
//     mobileNumber: '6380087037',
//     email: '',
//     gender: '',
//     dateOfBirth: '',
//     location: '',
//     alternateMobile: '',
//     hintName: ''
//   });

//   // Inline styles for the component
//   const styles = {
//     container: {
//       display: 'flex',
//       flexDirection: 'row',
//       backgroundColor: '#f5f5f6',
//       padding: '20px',
//     },
//     sidebar: {
//       width: '250px',
//       padding: '20px',
//       backgroundColor: '#fff',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       marginRight: '20px',
//     },
//     sidebarItem: {
//       marginBottom: '10px',
//       cursor: 'pointer',
//     },
//     profileContainer: {
//       flex: 1,
//       backgroundColor: '#fff',
//       borderRadius: '8px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       padding: '20px',
//     },
//     profileTitle: {
//       fontSize: '24px',
//       marginBottom: '20px',
//     },
//     profileDetails: {
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     profileRow: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       padding: '10px 0',
//       borderBottom: '1px solid #eee',
//     },
//     profileLabel: {
//       fontWeight: 'bold',
//     },
//     editButton: {
//       padding: '10px',
//       backgroundColor: '#ff3f6c',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '4px',
//       cursor: 'pointer',
//       marginTop: '20px',
//     },
//     input: {
//       width: '100%',
//       padding: '10px',
//       margin: '10px 0',
//       borderRadius: '4px',
//       border: '1px solid #ccc',
//       fontSize: '16px',
//     },
//   };

//   // Function to handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProfileDetails({ ...profileDetails, [name]: value });
//   };

//   // Function to toggle edit mode
//   const toggleEditMode = () => {
//     setIsEditing(!isEditing);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.sidebar}>
//         <div style={styles.sidebarItem}>Overview</div>
//         <div style={styles.sidebarItem}>Orders & Returns</div>
//         <div style={styles.sidebarItem}>Coupons</div>
//         <div style={styles.sidebarItem}>Myntra Credit</div>
//         <div style={styles.sidebarItem}>MynCash</div>
//         <div style={styles.sidebarItem}>Profile</div>
//         <div style={styles.sidebarItem}>Saved Cards</div>
//         <div style={styles.sidebarItem}>Saved UPI</div>
//         <div style={styles.sidebarItem}>Saved Wallets/BNPL</div>
//         <div style={styles.sidebarItem}>Addresses</div>
//         <div style={styles.sidebarItem}>Myntra Insider</div>
//         <div style={styles.sidebarItem}>Delete Account</div>
//       </div>
//       <div style={styles.profileContainer}>
//         <h2 style={styles.profileTitle}>Profile Details</h2>
//         <div style={styles.profileDetails}>
//           {Object.keys(profileDetails).map((key) => (
//             <div key={key} style={styles.profileRow}>
//               <span style={styles.profileLabel}>{key.split(/(?=[A-Z])/).join(' ')}:</span>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name={key}
//                   value={profileDetails[key]}
//                   onChange={handleInputChange}
//                   style={{width:"150px",height:"29px"}}
//                 />
//               ) : (
//                 <span>{profileDetails[key] || '- not added -'}</span>
//               )}
//             </div>
//           ))}
//         </div>
//         <button style={styles.editButton} onClick={toggleEditMode}>
//           {isEditing ? 'Save' : 'Edit'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;





import { height, margin, textAlign } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Define the ProfilePage component
const ProfilePage = () => {
  // State to handle profile details and edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
      FullName: '',
    MobileNumber: '',
    email: '',
    Gender: '',
    DateOfBirth: '',
    Location: '',
    AlternateMobile: '',
    Address: ''
});

// useEffect =()=>
// {
//   const api='http://localhost/register1';
//   axios.get(api)
//   .then((response)=>
// {
//     setProfileDetails(response.data);
// })
// }

  // Inline styles for the component
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#f5f5f6',
      padding: '20px',
    //   height: '100vh', // Full viewport height
    },
    sidebar: {
      width: '250px',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginRight: '20px',
      height:"600px"
    },
    sidebarItem: {
      marginBottom: '20px',
      cursor: 'pointer',
      fontWeight:"500",
    //   textAlign:"center"
    marginLeft:"75px"
    },
    profileContainer: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Center content vertically
      alignItems: 'center', // Center content horizontally
      marginBottom:"50px"
    },
    profileTitle: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    profileDetails: {
        marginTop:"30px",
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '500px',
    },
    profileRow: {
        
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: '1px solid #eee',
    },
    profileLabel: {
      fontWeight: 'bold',
    },
    editButton: {
      padding: '10px',
      backgroundColor: '#ff3f6c',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '20px',
      width:"100px"
    },
    input: {
        
      width: '150px',
      height: '29px',
      borderRadius:"10px"
    },
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const api='http://localhost:8080/register1';
    axios.get(api)
    .then((response)=>
      {
        console.log(response.data.email);
        profileDetails.email=response.data.email;
        profileDetails.FullName=response.data.name;
      })

      const { name, value } = e.target;
      setProfileDetails({ ...profileDetails, [name]: value });
    };

  // Function to toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div><p></p></div>
        <div style={styles.sidebarItem}><a href='/aboutus' style={{textDecoration:"none",color:"black"}}>Overview</a></div>
        <hr></hr>
        <div><h6 style={{marginLeft:"75px",marginBottom:"10px",fontWeight:"550",color:"gray"}}>ORDERS</h6></div>
        <div style={styles.sidebarItem}><a href='/refund' style={{textDecoration:"none",color:"black"}}>Orders & Returns</a></div>
        <hr></hr>

        <div><h6 style={{marginLeft:"75px",marginBottom:"10px",fontWeight:"550",color:"gray"}}>ACCOUNT</h6></div>
        <div style={styles.sidebarItem}><a href='/profile' style={{textDecoration:"none",color:"black"}}>Profile</a></div>
        <div style={styles.sidebarItem}><a href='/payment' style={{textDecoration:"none",color:"black"}}>SproutSmart Card</a></div>
        <div style={styles.sidebarItem}><a href='/banktransfer' style={{textDecoration:"none",color:"black"}}>Bank Transfer</a></div>
        
        <div style={styles.sidebarItem}><a href='#' style={{textDecoration:"none",color:"black"}}>Cash</a></div>
        <div style={styles.sidebarItem}><a href='#' style={{textDecoration:"none",color:"black"}}>Saved UPI</a></div>
        <div style={styles.sidebarItem}><a href='#' style={{textDecoration:"none",color:"black"}}>Saved Wallets/BNPL</a></div>
        <div style={styles.sidebarItem}><button><a href='/signUp' style={{textDecoration:"none",color:"black"}}>Delete Account</a></button></div>

        <hr></hr>
        <div><h6 style={{marginLeft:"75px",marginBottom:"10px",fontWeight:"550",color:"gray"}}>LEGEL</h6></div>
        <div style={styles.sidebarItem}><a href='/privacy' style={{textDecoration:"none",color:"black"}}>Privacy</a></div>
        <div style={styles.sidebarItem}><a href='/terms' style={{textDecoration:"none",color:"black"}}>Terms & Service</a></div>
      </div>
      <div style={styles.profileContainer}>
        <h2 style={styles.profileTitle}>Profile Details</h2>
        <div style={styles.profileDetails}>
          {Object.keys(profileDetails).map((key) => (
            <div key={key} style={styles.profileRow}>
              <span style={styles.profileLabel}>{key.split(/(?=[A-Z])/).join(' ')}:</span>
              <br />
              {isEditing ? (
                <input
                  type="text"
                  name={key}
                  value={profileDetails[key]}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              ) : (
                <span>{profileDetails[key] || '- not added -'}</span>
              )}
            </div>
          ))}
        </div>
        <button style={styles.editButton} onClick={toggleEditMode}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
