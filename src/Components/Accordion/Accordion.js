import React, { useState } from 'react';

const Accordion = ({ title }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [submitEnable, setSubmitEnable] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const content = [
    {
      id: '1',
      heading: 'Accordion 1',
      desc: 'I am First Accordion',
    },
    {
      id: '2',
      heading: 'Accordion 2',
      desc: 'I am Second Accordion',
    },
    {
      id: '3',
      heading: 'Accordion 3',
      desc: 'I am Third Accordion',
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
              <h3 style={styles.heading} onClick={() => handleExpand(index)}>
                {data.heading}
                <button style={styles.expandButton} >
                  {expandedIndex === index ? '▲' : '▼'}
                </button>
              </h3>
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
    border: '1px solid #ccc',
    borderRadius: '4px',
    margin: '20px',
    padding: '16px',
    backgroundColor: '#f9f9f9',
  
  },
  cardTitle: {
    fontSize: '20px',
    marginBottom: '12px',
    color: '#333',
  },
  accordionItem: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '8px',
    padding: '8px',
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  checkboxLabel: {
    marginRight: '12px',
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#333',
  },
  expandButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    marginLeft: '8px',
    color: '#333',
  },
  description: {
    marginTop: '8px',
    color: '#555',
  },
  submitButton: {
    color: 'white',
    padding: '10px 20px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
  },
};

export default Accordion;
