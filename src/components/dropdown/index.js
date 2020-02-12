import React from 'react';
// import styled from '@emotion/styled';
import Select from 'react-dropdown-select';
import './style.css'

const Dropdown = ({ options, title }) => (
  <React.Fragment>
    <Select
      searchable
      required
      style={{widht: '5px'}}
      options={options}
      values={[]}
      className='dropdown'
      dropdownPosition="auto"
      onChange={(value) =>
        console.log(`%c > onChange ${title} `, 'background: #555; color: tomato', value)
      }
    />
  </React.Fragment>
);

Dropdown.propTypes = {};

// const Title = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: baseline;
//   width: 50px;
// `;

export default Dropdown;