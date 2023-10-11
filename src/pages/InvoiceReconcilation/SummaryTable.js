import PropTypes from "prop-types";
import React from 'react'

function SummaryTable(props) {
    const { summary } = props;
    return (
        <div className="summary">
        <div className="header">
          <h1>Summmary</h1>
          <h3>{summary}</h3>
        </div>
        </div>
      )
}
SummaryTable.propTypes = {
    summary: PropTypes.string,
};
  
export default SummaryTable