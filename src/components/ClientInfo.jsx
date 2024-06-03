import { Box, Typography } from "@mui/material";
import React from "react";

const ClientInfo = ({
  editable,
  handleInputChange,
  index,
  logo,
  name,
  mail,
  rowId,
}) => {
  return (
    <>
      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
        <img
          src={logo}
          alt=""
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={
            editable
              ? { display: "flex", flexDirection: "column", gap: "5px" }
              : {}
          }
        >
          {editable ? (
            <input
              type="text"
              value={name}
              onChange={(e) => handleInputChange(e, index, rowId, "client")}
            />
          ) : (
            <Typography variant="body1" fontWeight={"bolder"}>
              {name}
            </Typography>
          )}
          {editable ? (
            <input
              type="text"
              value={mail}
              onChange={(e) => handleInputChange(e, index, rowId, "email")}
            />
          ) : (
            <Typography variant="caption" color={"GrayText"}>
              {mail}
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ClientInfo;
