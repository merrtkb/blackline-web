import { Box, Typography, Container, Button, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const car =
    state?.car ||
    JSON.parse(localStorage.getItem("selectedCar"));

  // 🔴 ARABA YOKSA OTOMATİK MODELS’A GİT
  useEffect(() => {
    if (!car) {
      navigate("/models");
    }
  }, [car, navigate]);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  // ✅ BACKEND’E POST ATAN FONKSİYON
  const handleSubmit = async () => {
    const payload = {
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      message: form.message,
      carName: car.name,
      carPrice: car.price,
    };

    try {
      const res = await fetch("http://localhost:8080/api/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      alert("Your request has been submitted.");
      localStorage.removeItem("selectedCar");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  // ⛔ car yoksa render etme (redirect zaten yapılıyor)
  if (!car) return null;

  return (
    <Box sx={{ pt: 18, pb: 14 }}>
      <Container maxWidth="sm">
        <Typography variant="h5" sx={{ mb: 3 }}>
          Request Vehicle
        </Typography>

        {/* VEHICLE SUMMARY */}
        <Box sx={{ mb: 4 }}>
          <Typography sx={{ fontWeight: 500 }}>
            {car.name}
          </Typography>
          <Typography sx={{ opacity: 0.7 }}>
            € {car.price.toLocaleString()}
          </Typography>
        </Box>

        {/* FORM */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            label="Full Name"
            value={form.fullName}
            onChange={(e) =>
              setForm({ ...form, fullName: e.target.value })
            }
            fullWidth
          />

          <TextField
            label="Email Address"
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            fullWidth
          />

          <TextField
            label="Phone Number"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            fullWidth
          />

          <TextField
            label="Message (Optional)"
            multiline
            rows={5}
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            fullWidth
          />

          <Button
            fullWidth
            variant="outlined"
            size="large"
            sx={{
              mt: 2,
              py: 2,
              letterSpacing: 1,
              fontWeight: 500,
              borderColor: "#fff",
              color: "#fff",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.08)",
              },
            }}
            onClick={handleSubmit}
          >
            Submit Request
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Checkout;
