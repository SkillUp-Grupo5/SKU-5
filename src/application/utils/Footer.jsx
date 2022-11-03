import React from "react";
import { Box, Container, Link } from "@mui/material";
const Footer = () => {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        sx={{
          backgroundColor: "#E3E3E7",
          "&:hover": {
            backgroundColor: "#CBCCCC",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            textAlign="center"
            style={{
              fontFamily: "monospace",
              fontSize: 25,
              letterSpacing: 2,
              fontWeight: 500,
            }}
          >
            <Link
              href="https://github.com/SkillUp-Grupo5/SKU-5"
              color="inherit"
              underline="none"
              target="_blank"
            >
              AlkemyBank&reg; {new Date().getFullYear()}
            </Link>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
