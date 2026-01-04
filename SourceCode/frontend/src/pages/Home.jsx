import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCars } from "../service/CarService";

function Home() {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getAllCars().then((data) => setCars(data));
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* VIDEO BACKGROUND */}
        <Box
          component="video"
          src="/images/homevideo/video-20251219-014055.mp4"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* DARK OVERLAY */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))",
            zIndex: 1,
          }}
        />

        {/* CONTENT */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            color: "#fff",
            pl: 10,
            mt: 16,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 26, md: 42 },
                fontWeight: 600,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              THE ART OF DRIVING
            </Typography>

            <Typography sx={{ mb: 3, fontSize: "22px" }}>
              Where performance meets feeling.
            </Typography>

            <Button
              variant="outlined"
              onClick={() => navigate("/models")}
              sx={{
                color: "#fff",
                borderColor: "#fff",
                px: 5,
                py: 1.75,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Discover More
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ================= FEATURED MODELS ================= */}
      <Box sx={{ py: 16 }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gap: 6,
            }}
          >
            {cars.slice(0, 6).map((car) => (
              <Box
                key={car.id}
                onClick={() => navigate(`/models/${car.id}`)}
                sx={{
                  position: "relative",
                  height: 420,
                  borderRadius: 3,
                  overflow: "hidden",
                  cursor: "pointer",
                  backgroundColor: "#111",
                  transition: "transform 0.45s ease",
                  "&:hover": {
                    transform: "scale(1.035)",
                  },
                }}
              >
                {/* IMAGE */}
                <Box
                  component="img"
                  src={car.image}
                  alt={car.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* OVERLAY */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.15), transparent)",
                  }}
                />

                {/* TEXT */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 24,
                    left: 24,
                    color: "#fff",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 28,
                      fontWeight: 500,
                      letterSpacing: 1,
                    }}
                  >
                    {car.name}
                  </Typography>

                  <Typography sx={{ opacity: 0.8, mt: 0.5 }}>
                    From € {car.price.toLocaleString()}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* VIEW ALL */}
          <Box sx={{ textAlign: "center", mt: 10 }}>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate("/models")}
              sx={{
                color: "#fff",
                borderColor: "#fff",
                px: 6,
                py: 2,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.08)",
                },
              }}
            >
              View All Models
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Home;
