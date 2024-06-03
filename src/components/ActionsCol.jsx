import React from "react";
import { Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

const ActionsCol = ({
  rowId,
  data,
  setData,
  editable,
  setEditableRow,
  handleEdit,
}) => {
  const handleDelete = (rowId) => {
    const updatedInvoices = data.filter((invoice) => invoice.id !== rowId);
    setData(updatedInvoices);
  };

  const handleEditIconClick = (rowEditId) => {
    handleEdit(rowEditId);
  };

  const toggleSavenDiscard = () => {
    setEditableRow([]);
  };

  return (
    <>
      <Box display={"flex"} gap={"5px"}>
        {!editable ? (
          <>
            <div
              className="delete-icon"
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(rowId)}
            >
              <DeleteOutlineIcon />
            </div>
            <VisibilityIcon />
            <div
              className="more-icon"
              style={{ cursor: "pointer" }}
              onClick={() => handleEditIconClick(rowId)}
            >
              <MoreVertIcon />
            </div>
          </>
        ) : (
          <>
            <div
              className="tick-icon"
              style={{ cursor: "pointer" }}
              onClick={toggleSavenDiscard}
            >
              <CheckBoxIcon color="success" />
            </div>
            <div
              className="cancel-icon"
              onClick={toggleSavenDiscard}
              style={{ cursor: "pointer" }}
            >
              <DisabledByDefaultIcon color="error" />
            </div>
          </>
        )}
      </Box>
    </>
  );
};

export default ActionsCol;
