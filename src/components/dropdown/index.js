import React from 'react';
import styled from '@emotion/styled';
import Select from 'react-dropdown-select';

const Dropdown = ({ options, title }) => (
  <React.Fragment>
    <Select
      options={options}
      values={[]}
      dropdownPosition="auto"
      onChange={(value) =>
        console.log(`%c > onChange ${title} `, 'background: #555; color: tomato', value)
      }
    />
  </React.Fragment>
);

// DropdownAutoPosition.propTypes = {};

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export default Dropdown;