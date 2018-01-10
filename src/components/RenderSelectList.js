import React from 'react'
import SelectList from 'react-widgets/lib/SelectList'

const RenderSelectList = ({ input, data }) =>
  <SelectList {...input}
    onBlur={() => input.onBlur()}
    data={data}
  />

export default RenderSelectList
