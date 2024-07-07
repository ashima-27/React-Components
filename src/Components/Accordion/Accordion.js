import React, { useState } from 'react';

const Accordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [submitEnable, setSubmitEnable] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const content = [
    {
      id: '1',
      heading: 'Accordion 1',
      desc: 'I am  First Accordion',
    },
    {
      id: '2',
      heading: 'Accordion 2',
      desc: 'I am Second Accordion ',
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
    <>
      <h1>Accordion with Checkboxes</h1>
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
              <h1 style={styles.heading} onClick={() => handleExpand(index)}>
                {data.heading}
              </h1>
              <button style={styles.expandButton} onClick={() => handleExpand(index)}>
                {expandedIndex === index ? '▲' : '▼'}
              </button>
            </div>
            {expandedIndex === index && <p style={styles.description}>{data.desc}</p>}
          </div>
        ))}
      </div>
      <div>
        <button
          style={{
            ...styles.submitButton,
            backgroundColor: submitEnable ? 'green' : 'gray',
            cursor: submitEnable ? 'pointer' : 'not-allowed',
          }}
          disabled={!submitEnable}
        >
          Submit 
        </button>
      </div>
    </>
  );
};

const styles = {
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
  },
  checkboxLabel: {
    marginRight: '8px',
  },
  heading: {
    display: 'inline',
    cursor: 'pointer',
    flexGrow: 1,
  },
  expandButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
  },
  description: {
    marginTop: '8px',
  },
  submitButton: {
    color: 'white',
    padding: '5px',
    margin: '3px',
    border: 'none',
    borderRadius: '4px',
    
  },
};

export default Accordion;
