import React from "react";
import { Pagination, Stack, Typography } from "@mui/material";
import "./Product.scss";

export default function Paginations({ count, handleChange }) {
  return (
    <Stack spacing={2}>
      <Pagination
        className="paginationList"
        // sx={{ color: "white" }}
        onChange={handleChange}
        count={count}
        variant="outlined"
        shape="rounded"
        color="primary"
      />
    </Stack>
  );
}
