"use client";

import * as React from 'react';
import { Box, Container, Grid, Typography, Button, TextField, Select, MenuItem, IconButton, Link } from "@mui/material";


import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


import LanguageIcon from '@mui/icons-material/Language';

export default function Footer() {

const [language, setLanguage] = React.useState('');

const handleChange = (event) => {
    setLanguage(event.target.value);
};



return (
    <Grid component="footer" sx={{mt: 20, bgcolor: 'primary.main'}}>
        <Box sx={{ padding: '40px 20px'}}>
        <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
            {/* Logo */}
            <Grid item xs={12} md={2} align="center">
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    <img src="/logo.png" alt="Logo" style={{ width: '150px', borderRadius:'5px' }} />
                </Typography>
            </Grid>

            {/* Link Section */}
           
        </Grid>

        {/* Social Media and Lenguage bottom */}
        <Grid container spacing={2} justifyContent="space-between" alignItems="center" sx={{ mt: 4 }}>
            <Grid item xs={12} md={3}>
                
            </Grid>
            
            <Grid item xs={12} md={6}>
                <Typography variant="body2" color="text.light" align="center">
                    Pumahorarios Inc. 2024
                </Typography>
            </Grid>
            
            {/* Redes sociales */}
            <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
                color="secondary"
                href="https://facebook.com/"
                sx={{
                "&:hover": {
                    backgroundColor: "#e3f2fd",
                    color: "#1DA1F2",
                    transform: "scale(1.2)",
                    transition: "transform 0.3s ease-in-out",
                },
                }}
            >
                <FacebookIcon />
            </IconButton>


                <IconButton
                href="https://twitter.com/"
                    color="secondary"
                    sx={{
                        "&:hover": {
                            backgroundColor: "#e3f2fd",
                            color: "#1DA1F2",
                            transform: "scale(1.2)",
                            transition: "transform 0.3s ease-in-out",
                        },
                    }}
                >
                    <TwitterIcon />
                </IconButton>


            <IconButton
            color="secondary"
            href="https://mx.linkedin.com/"
            sx={{
                "&:hover": {
                backgroundColor: "#e3f2fd",
                color: "#0077B5",
                transform: "scale(1.2)",
                transition: "transform 0.3s ease-in-out",
                },
            }}
            >
                <LinkedInIcon />
            </IconButton>

            <IconButton
            color="secondary"
            href="https://youtube.com/"
            sx={{
                "&:hover": {
                backgroundColor: "#e3f2fd",
                color: "#FF0000",
                transform: "scale(1.2)",
                transition: "transform 0.3s ease-in-out",
                },
            }}
            >
                <YouTubeIcon />
            </IconButton>

            </Grid>
        </Grid>
        </Box>

    </Grid>
    );
}
