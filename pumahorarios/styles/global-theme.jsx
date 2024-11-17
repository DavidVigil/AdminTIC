"use client";

import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#171D46",
        },
        secondary: {
            main: "#FFBB00",
        },
        background: {
            default: "#eeeeee",
            paper: "#ffffff",
            footer: "#dddddd",
        },
        text: {
            main: "#bbbbbb",
            light: "#ffffff",
            dark: "#000000",
            title: "#ff0000",
            subtitle: "#bb0000",

        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
        h1: {
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#ffffff",
        },
        h2: {
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#333333",
        },
        h3: {
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#ff0000",
        },
        h4: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#bb0000",
        },
        h5: {
            fontSize: "1.25rem",
            fontWeight: "bold",
            color: "#ffffff",
        },
        h6: {
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#bb0000",
        },
        body1: {
            fontSize: "1rem",
            fontWeight: "normal",
            color: "#ffffff",
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: "normal",
            color: "#ffffff",
        },
        button: {
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#ffffff",
        },
        subtitle1: {
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#eeeeee",
        },
    },
    
})