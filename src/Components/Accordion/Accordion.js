import React, { useEffect, useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion = ({ title }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [submitEnable, setSubmitEnable] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const content = [
    {
      id: '1',
      heading: 'Strong Technical Skills',
      desc: 'I possess solid experience with the MERN stack (MongoDB, Express, React, Node.js), MySQL, and modern front-end technologies like React, Redux, and Tailwind CSS. My knowledge in full-stack development allows me to efficiently handle both front-end and back-end responsibilities.',
    },
    {
      id: '2',
      heading: 'Problem-Solving and Adaptability',
      desc: 'I am capable of identifying bottlenecks and implementing effective solutions, whether in debugging code or optimizing database queries. My adaptability to new tools and frameworks allows me to continuously improve and tackle challenges quickly.',
    },
   
    {
      id: '3',
      heading: 'Passion for Learning',
      desc: 'I am constantly expanding my knowledge in web development and emerging technologies. My drive for learning helps me stay updated with industry trends and best practices, allowing me to contribute fresh ideas and innovative approaches to development projects.',
    },
    
  ];
  

  const handleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleCheck = (index) => {
    setCheckedItems((prev) => {
      const newCheckedItems = prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index];
  
      
      setSubmitEnable(newCheckedItems.length === content.length);
      console.log(newCheckedItems);
      return newCheckedItems;
    });
  };
 
  
  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>{title}</h2>
      <div>
        {content.map((data, index) => (
          <div key={data.id} style={styles.accordionItem}>
            <div style={styles.headingContainer}>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={checkedItems.includes(index)}
                  onChange={() => handleCheck(index)}
                />
              </label>
              <h5 style={styles.heading} onClick={() => handleExpand(index)}>
                {data.heading}
                <button style={styles.expandButton}>
                  {expandedIndex === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
              </h5>
            </div>
            {expandedIndex === index && <p style={styles.description}>{data.desc}</p>}
          </div>
        ))}
      </div>
      <div>
        <button
          style={{
            ...styles.submitButton,
            backgroundColor: submitEnable ? '#4CAF50' : '#808080',
            cursor: submitEnable ? 'pointer' : 'not-allowed',
          }}
          disabled={!submitEnable}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    background: 'rgba(255, 255, 255, 0.15)',  
    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    padding: '20px',
    maxWidth: '800px',
    margin: '20px auto',
    color: '#1b2436',
  },
  cardTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '15px',
  },
  accordionItem: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '10px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkboxLabel: {
    marginRight: '12px',
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#1b2436',
   
    gap:'6px'
  },
  expandButton: {
    background: 'rgba(255, 255, 255, 0.2)',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#1b2436',
    padding: '5px',
    transition: 'background 0.3s ease',
   
  },
  description: {
    marginTop: '8px',
    color: '#1b2436',
    fontSize: '14px',
    textAlign:'start'
  },
  submitButton: {
    display: 'block',
    width: '100%',
    padding: '10px 0',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    color: '#fff',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  },
};

export default Accordion;
