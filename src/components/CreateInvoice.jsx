import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 300, sm: 800 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateInvoice = ({ state, handleClose, data, setData }) => {
  const [clientID, setClientID] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientMail, setClientMail] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");
  const [logo, setLogo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvoice = {
      id: clientID,
      client: clientName,
      email: clientMail,
      status: status,
      date: date,
      amount: amount,
      balance: balance,
      logo: logo,
    };

    const updatedInvoices = [...data, newInvoice];
    setData(updatedInvoices);
    handleClose();
  };

  return (
    <>
      <Modal
        open={state}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Container>
              <Typography variant="h5" sx={{ py: "1%" }}>
                Enter Invoice Details
              </Typography>
              <Grid container rowGap={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    size="small"
                    id="outlined-basic"
                    label="Enter id number"
                    variant="outlined"
                    type="number"
                    value={clientID}
                    onChange={(e) =>
                      setClientID(e.target.value > 0 ? e.target.value : 0)
                    }
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    size="small"
                    id="outlined-basic"
                    label="Enter Name"
                    variant="outlined"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    size="small"
                    id="outlined-basic"
                    type="email"
                    label="Enter E-mail"
                    variant="outlined"
                    value={clientMail}
                    onChange={(e) => setClientMail(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    size="small"
                    id="outlined-basic"
                    type="number"
                    label="Enter Total Amount"
                    variant="outlined"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    size="small"
                    id="outlined-basic"
                    type="number"
                    label="Enter Balance Amount"
                    variant="outlined"
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    size="small"
                    id="outlined-basic"
                    type="date"
                    variant="outlined"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    sx={{ width: { xs: "80%", sm: "90%" } }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl
                    size="small"
                    sx={{ width: { xs: "80%", sm: "90%" } }}
                  >
                    <InputLabel id="demo-select-small-label">Status</InputLabel>
                    <Select
                      size="small"
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={status}
                      label="Status"
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <MenuItem value={"completed"}>Completed</MenuItem>
                      <MenuItem value={"pending"}>Pending</MenuItem>
                      <MenuItem value={"in progress"}>In progress</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    id="outlined-basic"
                    type="file"
                    variant="standard"
                    value={logo}
                    onChange={(e) => setLogo(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Container>
            <Container
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Box display={"flex"} gap={"20px"}>
                <Button type="submit" variant="contained" color="info">
                  Save
                </Button>
                <Button variant="contained" color="error" onClick={handleClose}>
                  Close
                </Button>
              </Box>
            </Container>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default CreateInvoice;
