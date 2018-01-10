import React from 'react';
import DropdownList from 'react-widgets/lib/DropdownList'

const RenderDropdownList = ({ input, data, valueField, textField }) =>
  <DropdownList
    {...input}
    data={data}
    valueField={valueField}
    textField={textField}
  />

export default RenderDropdownList;
