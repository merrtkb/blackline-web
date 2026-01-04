import { Box, Typography, Container } from "@mui/material";

function About() {
  return (
    <Box sx={{ pt: 28, pb: 20 }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 500, textAlign: "center"}}>
          About Us
        </Typography>

        <Typography sx={{ color: "#fff", lineHeight: 1.8, pt: 4 }}>
          BLACKLINE is an online platform focused on offering a refined
selection of high-performance and luxury vehicles. The goal is to
provide a clean and enjoyable browsing experience for users who are
interested in premium automotive models.
The website presents carefully selected cars with clear visuals and
essential details, making it easy for customers to explore different
models and compare them in a simple and organized way.
        </Typography>
      </Container>
    </Box>
  );
}

export default About;
