import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Container, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getCarById } from "../service/CarService";

function ModelDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    getCarById(id).then((data) => setCar(data));
  }, [id]);

  if (!car) return null;

  return (
    <Box sx={{ pt: 18, pb: 14 }}>
      <Container maxWidth="md">

        {/* IMAGE WITH ZOOM */}
        <Box
          sx={{
            width: "100%",
            height: 420,
            overflow: "hidden",
            borderRadius: 3,
            mb: 6,
            transition: "transform 0.5s ease",
            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        >
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
        </Box>

        <Typography variant="h4" sx={{ mb: 2 }}>
          {car.name}
        </Typography>

        <Typography sx={{ fontSize: 22, fontWeight: 500, mb: 4 }}>
          From € {car.price.toLocaleString()}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 6,
            my: 6,
            py: 4,
            borderTop: "1px solid #1f1f1f",
            borderBottom: "1px solid #1f1f1f",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: 14, opacity: 0.6 }}>
              Power
            </Typography>
            <Typography sx={{ fontWeight: 500 }}>
              {car.power}
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontSize: 14, opacity: 0.6 }}>
              0–100 km/h
            </Typography>
            <Typography sx={{ fontWeight: 500 }}>
              {car.acceleration}
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontSize: 14, opacity: 0.6 }}>
              Top Speed
            </Typography>
            <Typography sx={{ fontWeight: 500 }}>
              {car.topSpeed}
            </Typography>
          </Box>
        </Box>

        <Typography sx={{ color: "#fff", mb: 6, maxWidth: 700 }}>
          {car.description}
        </Typography>

        <Button
          variant="outlined"
          sx={{
            borderColor: "#fff",
            color: "#fff",
            px: 5,
            py: 2,
          }}
          onClick={() => {
            localStorage.setItem("selectedCar", JSON.stringify(car));
            navigate("/checkout", { state: { car } });
          }}
        >
          Request This Vehicle
        </Button>

      </Container>
    </Box>
  );
}

export default ModelDetail;
