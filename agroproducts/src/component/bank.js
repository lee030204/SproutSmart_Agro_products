import React from 'react';

// Define the BankTransferPage component
const BankTransferPage = () => {
  // Inline styles for the component
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundImage: 'url("https://assets.techcircle.in/uploads/article-image/2023/07/images/33257-payment.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px',
      boxSizing: 'border-box',
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '500px',
      padding: '20px',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#28a745',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
      
    },
    title: {
      fontSize: '24px',
      marginBottom: '20px',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Bank Account Transfer</h2>
        <input type="text" placeholder="Recipient Bank Account Number" style={styles.input} />
        <input type="text" placeholder="Bank Name" style={styles.input} />
        <input type="text" placeholder="IFSC Code" style={styles.input} />
        <input type="number" placeholder="Amount" style={styles.input} />
        <button style={styles.button}>Transfer Now</button>
        <button style={styles.button}><a href='/payment' style={{textDecoration:"none",color:"white"}}>Card</a></button>
      </div>
    </div>
  );
};

export default BankTransferPage;
