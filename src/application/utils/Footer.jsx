import React from "react";
import { Box, Container, Link, Paper } from "@mui/material";
import "./utils.css";
import Title from "./Title";
import { colors } from "../../utils/colors";
const Footer = () => {
  return (
    <footer>
      <Paper elevation={5} className="footer">
        <Box
          textAlign="center"
          style={{
            fontFamily: "monospace",
            fontSize: 25,
            letterSpacing: 2,
            fontWeight: 500,
            padding: 50,
          }}
        >
          <Link
            href="https://github.com/SkillUp-Grupo5/SKU-5"
            color="inherit"
            underline="none"
            target="_blank"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Title
                text="AlkemyBank"
                font="h5"
                color={colors.blue}
                weight={700}
              />
              &reg;
              <Title text={`${new Date().getFullYear()}`} font="h6" />
            </div>
          </Link>
        </Box>
      </Paper>
    </footer>
  );
};

export default Footer;
