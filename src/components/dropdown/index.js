import React from 'react';
// import styled from '@emotion/styled';
import Select from 'react-dropdown-select';
import './style.css'

const Dropdown = ({ arrName }) => (
  <React.Fragment>
    <Select
      searchable
      required
      options= {arrName}
      values={[]}
      name='Procedimentos'
      className='dropdown'
      dropdownPosition="auto"
      onChange={(value) =>
        console.log(value)
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