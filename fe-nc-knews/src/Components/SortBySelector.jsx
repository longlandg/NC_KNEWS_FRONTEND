import React, { Component } from "react";

const SortBySelector = props => {
  return (
    <select
      className="sortBySelector"
      class="browser-default custom-select"
      onClick={props.changeSorting}
    >
      <option selected>Sort articles by</option>
      <option value="sort_by=created_at&&order=desc">date descending</option>
      <option value="sort_by=created_at&&order=asc">date ascending</option>
      <option value="sort_by=comment_count&&order=desc">
        comment count descending
      </option>
      <option value="sort_by=comment_count&&order=asc">
        comment count ascending
      </option>
      <option value="sort_by=votes&&order=desc">
        number of votes descending
      </option>
      <option value="sort_by=votes&&order=asc">
        number of votes ascending
      </option>
    </select>
  );
};
export default SortBySelector;
