import React from 'react';
import PropTypes from 'prop-types';
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    OnChangeFilter: PropTypes.func.isRequired,
  };
function Filter({value,OnChangeFilter}){
    return(
<form>
      <label>
        Filter:
        <input
          type="text"
          value={value}
          onChange={event => OnChangeFilter(event.target.value)}
        />
      </label>
    </form>
    )
}

export default Filter;