import { Box, Typography, Container, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        borderTop: "1px solid #1f1f1f",
        py: 4,
        mt: "auto",

      }}
    >
      <Container maxWidth="lg">
        {/* TOP ROW */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            alignItems: "center",
            py: 4,
          }}
        >
          {/* LEFT / BRAND */}
          <Typography
            component={Link} to="/"
            sx={{
              color: "#fff",
              textDecoration: "none",
              fontSize: 26,
              letterSpacing: 4,
              fontWeight: 600,
              width: "fit-content",
              
            }}
          >
            BLACKLINE
          </Typography>

          {/* CENTER / NAV */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/models" style={linkStyle}>All Models</Link>
            <Link to="/about" style={linkStyle}>About</Link>
          </Box>

          {/* RIGHT / SOCIAL */}
          <Box sx={{ display: "flex", justifyContent: "flex-end"}}>
            <IconButton sx={iconStyle} size="large">
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton sx={iconStyle} size="large">
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton sx={iconStyle} size="large">
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              sx={iconStyle}
              size="large"
              component="a"
              href="https://github.com/merrtkb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>

        {/* DIVIDER */}
        <Box sx={{ height: 1, backgroundColor: "#1f1f1f" }} />

        {/* BOTTOM */}
        <Box sx={{ py: 3, textAlign: "center" }}>
          <Typography sx={{ fontSize: 13, color: "#fff" }}>
            © 2026 All Rights Reserved.
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#777" }}>
            University Project by Mert
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "18px",
  opacity: 0.85,
};

const iconStyle = {
  color: "#fff",
  opacity: 0.7,
  "&:hover": {
    opacity: 1,
  },
};

export default Footer;
