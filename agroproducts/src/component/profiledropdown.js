import React, { useState } from 'react';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Inline styles for the component
  const styles = {
    container: {
      position: 'relative',
      display: 'inline-block',
    },
    icon: {
      cursor: 'pointer',
      fontSize: '24px',
    },
    dropdown: {
      display: isOpen ? 'block' : 'none',
      position: 'absolute',
      top: '40px',
      right: 0,
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      zIndex: 1,
    },
    dropdownItem: {
      padding: '10px 20px',
      cursor: 'pointer',
      borderBottom: '1px solid #eee',
    },
    dropdownItemLast: {
      padding: '10px 20px',
      cursor: 'pointer',
    },
    dropdownItemHover: {
      backgroundColor: '#f5f5f5',
    },
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={styles.container}>
      <li><a href="#" onClick={toggleDropdown}> <i className="fa-solid fa-circle-user fa-lg" style={styles.icon}></i></a></li>
      {isOpen && (
        <div style={styles.dropdown}>
          <div
            style={styles.dropdownItem}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.dropdownItemHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
          >
            <a href="/profile" style={{ textDecoration: 'none', color: 'black' }}>Profile</a>
          </div>
          <div
            style={styles.dropdownItemLast}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.dropdownItemHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
          >
            <a href="/logout" style={{ textDecoration: 'none', color: 'black' }}>Logout</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
