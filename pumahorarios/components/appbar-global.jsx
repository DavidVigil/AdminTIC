"use client";
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material"; // Components from material UI

export default function AppBarGlobal() {
    return (
        <AppBar
            position="static" // It doesn't stay visible when scrolling 
            sx={{
                color: "secondary", // White
                minHeight: "64px", // To maintain the height of the bar on all screens
                mb: 5 // Space at the bottom
            }}
        >
            <Toolbar sx={{ minHeight: "64px" }}> {/* Ensures consistent height */}
                <Box
                    sx={{ ml:"auto", mr:"auto", display: "flex", alignItems: "center", cursor: "pointer" }}>
                    <Typography
                        variant="h2"
                        sx={{
                            color:"text.light",
                            display: { xs: "none", md: "block" }, // Hide on xs, show on sm and up
                            whiteSpace: "nowrap" // Prevents line break
                        }}
                    >
                        Pumahorarios
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
