import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import InfoIcon from "@mui/icons-material/Info";
const Status = ({ invoiceStatus }) => {
  return (
    <>
      {invoiceStatus === "completed" && <CheckCircleIcon color="success" />}
      {invoiceStatus === "pending" && <InfoIcon color="error" />}
      {invoiceStatus === "in progress" && <AccessTimeFilledIcon color="info" />}
    </>
  );
};

export default Status;
