import {Box, Typography, IconButton} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItem = (label, path) => (
    <Typography
      component={Link}
      to={path}
      sx={{
        color: "#fff",
        textDecoration: "none",
        fontSize: 13,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        opacity: location.pathname === path ? 1 : 0.75,
        borderBottom:
          location.pathname === path ? "1px solid #fff" : "none",
        pb: "2px",
        "&:hover": {
          opacity: 1,
        },
      }}
    >
      {label}
    </Typography>
  );

  return (
    <Box
      sx={{
        position: isHome ? "absolute" : "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        color: "#fff",
        px: 6,
        py: 3,
        display: "flex",
        alignItems: "center",
        backgroundColor: isHome ? "transparent" : "rgba(0,0,0,0.85)",
        backdropFilter: isHome ? "none" : "blur(8px)",
      }}
    >
      {/* LEFT: NAV LINKS */}
      <Box sx={{ display: "flex", gap: 4 }}>
        {navItem("Home", "/")}
        {navItem("Models", "/models")}
        {navItem("About", "/about")}
      </Box>

      {/* CENTER: BRAND */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Typography
          component={Link}
          to="/"
          sx={{
            color: "#fff",
            textDecoration: "none",
            fontSize: 28,
            letterSpacing: 4,
            fontWeight: 550,
          }}
        >
          BLACKLINE
        </Typography>
      </Box>

      {/* RIGHT: CHECKOUT */}
      <Box sx={{ marginLeft: "auto" }}>
        <IconButton
          component={Link}
          to="/checkout"
          sx={{ color: "#fff" }}
        >
          <ShoppingCartIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Header;
