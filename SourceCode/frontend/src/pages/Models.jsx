import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCars } from "../service/CarService";

function Models() {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getAllCars().then((data) => setCars(data));
  }, []);

  return (
    <Box
      sx={{
        pt: 20,
        pb: 16,
        backgroundColor: "#000",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xl">
        {/* TITLE */}
        <Typography
          sx={{
            textAlign: "center",
            mb: 12,
            fontSize: 36,
            fontWeight: 500,
            letterSpacing: 2,
            color: "#fff",
          }}
        >
          All Models
        </Typography>

        {/* GRID */}
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
          {cars.map((car) => (
            <Box
              key={car.id}
              onClick={() => navigate(`/models/${car.id}`)}
              sx={{
                position: "relative",
                height: 440,
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
                  bottom: 28,
                  left: 28,
                  color: "#fff",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 26,
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
      </Container>
    </Box>
  );
}

export default Models;
