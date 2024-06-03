import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

const Search = ({
  statusFilter,
  searchQuery,
  handleSearchChange,
  handleFilterChange,
}) => {
  return (
    <>
      <TextField
        size="small"
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => handleSearchChange(e)}
      />
      <FormControl sx={{ minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Filter</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={statusFilter}
          label="Filter"
          onChange={(e) => handleFilterChange(e)}
        >
          <MenuItem value={"completed"}>Completed</MenuItem>
          <MenuItem value={"pending"}>Pending</MenuItem>
          <MenuItem value={"in progress"}>In Progress</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Search;
