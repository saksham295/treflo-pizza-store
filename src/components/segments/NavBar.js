import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Button } from "@mui/material";
import { Link } from "@material-ui/core";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            PIZZA TIME
          </Typography>
          <Link href="/cart">
            <Button sx={{ color: "white" }}>
              <ShoppingCartSharpIcon fontSize="large" />
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
