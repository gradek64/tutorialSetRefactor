import React from 'react';
import PropTypes from 'prop-types';

// custom
import SearchBox from '../../functional/SearchBox';
import SimpleButton from '../../functional/SimpleButton';
import SearchBoxAutoSuggestion from '../../SearchAutoSuggestion';

const TopSearchBox = ({ populateSearchResults, searchBoxRef }) => (
  <div className="top-search-box">
    {/* SearchBoxAutoSuggestion is extension to SearchBox component */}
    <SearchBoxAutoSuggestion eventHandler={populateSearchResults} searchBoxRef={searchBoxRef} />
    <SimpleButton label="Search Item" eventHandler={populateSearchResults} />
  </div>
);


TopSearchBox.propTypes = {
  populateSearchResults: PropTypes.func.isRequired,
};

export default TopSearchBox;
