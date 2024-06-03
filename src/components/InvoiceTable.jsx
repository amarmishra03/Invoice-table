import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
  Typography,
} from "@mui/material";

import profile from "../assets/logo/no-profile.jpeg";
import { ClientInfo, Status, ActionsCol, CreateInvoice, Search } from ".";
import data from "../data/data.json";
const InvoiceTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [invoices, setInvoices] = useState(data);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const tableHeaders = [
    "#",
    "STATUS",
    "CLIENT",
    "TOTAL",
    "ISSUED DATE",
    "BALANCE",
    "ACTION",
  ];

  const [editableRows, setEditableRows] = useState([]);

  // const handleToggleEdit = (rowId) => {
  //   setEditableRows((prevRows) =>
  //     prevRows.includes(rowId)
  //       ? prevRows.filter((id) => id !== rowId)
  //       : [...prevRows, rowId]
  //   );
  // };

  const handleToggleEdit = (rowId) => {
    setEditableRows([rowId]); // Set only the clicked row as editable
  };

  // const handleInputChange = (e, index, key) => {
  //   const updatedInvoices = [...invoices];
  //   updatedInvoices[index][key] = e.target.value;
  //   setInvoices(updatedInvoices);
  // };
  const handleInputChange = (e, index, rowId, key) => {
    if (editableRows.includes(rowId)) {
      const updatedInvoices = [...filteredInvoices];
      updatedInvoices[index][key] = e.target.value;
      setFilteredInvoices(updatedInvoices);
    }
  };

  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  // let filteredInvoices = invoices.filter(
  //   (invoice) =>
  //     invoice.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     invoice.email.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // const handleChange = (e) => {
  //   console.log("filter value", e.target.value);
  //   setStatusFilter(e.target.value);
  //   filteredInvoices = invoices.filter((invoice) =>
  //     invoice.status.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
  // };

  const [filteredInvoices, setFilteredInvoices] = useState(invoices);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterInvoices(e.target.value, statusFilter);
  };

  const handleChange = (e) => {
    setStatusFilter(e.target.value);
    filterInvoices(searchQuery, e.target.value);
  };

  const filterInvoices = (searchQuery, statusFilter) => {
    const filteredData = invoices.filter((invoice) => {
      const clientMatch = invoice.client
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const emailMatch = invoice.email
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const statusMatch = invoice.status
        .toLowerCase()
        .includes(statusFilter.toLowerCase());

      return (clientMatch || emailMatch) && statusMatch;
    });

    setFilteredInvoices(filteredData);
  };

  return (
    <>
      <Container
        sx={{
          mt: "3%",
          p: "0 !important",
          boxShadow: "0px 0px 15px 5px rgb(0,0,0,0.25)",
          borderRadius: "5px",
        }}
      >
        <Container sx={{ display: { xs: "block", sm: "none" }, p: "3% 1%" }}>
          <Button variant="contained" color="secondary" onClick={handleOpen}>
            + Create Invoice
          </Button>
        </Container>
        <Container
          sx={{
            p: "1%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={handleOpen}
            sx={{ display: { xs: "none", sm: "inline" } }}
          >
            + Create Invoice
          </Button>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Search
              statusFilter={statusFilter}
              searchQuery={searchQuery}
              handleSearchChange={handleSearchChange}
              handleFilterChange={handleChange}
            />
          </Box>
        </Container>

        <TableContainer component={Paper}>
          <Table size="small" sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                {tableHeaders.map((header, index) => (
                  <TableCell key={index} sx={{ fontWeight: "bolder" }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {!filteredInvoices.length === false
                ? filteredInvoices.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>
                        <Typography color={"purple"}>#{row.id}</Typography>
                      </TableCell>
                      <TableCell>
                        <Status invoiceStatus={row.status} />
                      </TableCell>
                      <TableCell>
                        <ClientInfo
                          rowId={row.id}
                          editable={editableRows.includes(row.id)}
                          handleInputChange={handleInputChange}
                          index={index}
                          name={row.client}
                          mail={row.email}
                          logo={profile}
                        />
                      </TableCell>
                      <TableCell>
                        {editableRows.includes(row.id) ? (
                          <>
                            #
                            <input
                              type="number"
                              value={row.amount}
                              onChange={(e) =>
                                handleInputChange(e, index, row.id, "amount")
                              }
                              style={{ width: "50%" }}
                            />
                          </>
                        ) : (
                          <Typography color={"GrayText"}>
                            ${row.amount}
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell>
                        {editableRows.includes(row.id) ? (
                          <>
                            <input
                              type="date"
                              value={row.date}
                              onChange={(e) =>
                                handleInputChange(e, index, row.id, "date")
                              }
                              // style={{ width: "90%" }}
                            />
                          </>
                        ) : (
                          <Typography color={"GrayText"}>{row.date}</Typography>
                        )}
                      </TableCell>
                      <TableCell>
                        {editableRows.includes(row.id) ? (
                          <>
                            #
                            <input
                              type="number"
                              value={row.balance}
                              onChange={(e) =>
                                handleInputChange(e, index, row.id, "balance")
                              }
                              style={{ width: "50%" }}
                            />
                          </>
                        ) : row.balance == 0 ? (
                          <Typography
                            variant="caption"
                            color={"#2b992b"}
                            sx={{
                              p: "5% 15%",
                              borderRadius: "30px",
                              textAlign: "center",
                              fontWeight: "bolder",
                              bgcolor: "lightgreen",
                            }}
                          >
                            Paid
                          </Typography>
                        ) : (
                          <Typography color={"GrayText"}>
                            ${row.balance}
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell>
                        <ActionsCol
                          rowId={row.id}
                          data={filteredInvoices}
                          setData={setFilteredInvoices}
                          editable={editableRows.includes(row.id)}
                          handleEdit={handleToggleEdit}
                          setEditableRow={setEditableRows}
                        />
                      </TableCell>
                    </TableRow>
                  ))
                : searchQuery !== "" &&
                  filterInvoices !== "" && (
                    <TableRow>
                      <TableCell colSpan={12}>
                        <Typography variant="h4" textAlign="center">
                          Match Not Found :(
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <div className="create-invoice-modal">
        <CreateInvoice
          state={open}
          handleClose={handleClose}
          data={filteredInvoices}
          setData={setFilteredInvoices}
        />
      </div>
    </>
  );
};

export default InvoiceTable;
