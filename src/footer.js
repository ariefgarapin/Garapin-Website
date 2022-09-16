import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import logo_white from './assets/images/garapin_white.png';
import logo_kominfo from './assets/images/logo-kominfo-2.png';
import logo_email from './assets/images/email.png';
import logo_whatsapp from './assets/images/whatsapp.png';
import logo_youtube from './assets/images/youtube.png';
import logo_instagram from './assets/images/instagram.png';
import logo_facebook from './assets/images/facebook.png';
import logo_playstore from './assets/images/playstore.png';
import logo_appstore from './assets/images/appstore.png';
import logo_ariba from './assets/images/ariba.jpg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function ButtonAppBar() {
    return (
        <Grid container spacing={2} sx={{bgcolor:"#9D28B1"}} >
            <Grid item xs={12} sm={4} md={4} align="left" sx={{mt:5}}>
                <Box
                component="img"
                sx={{
                height: 50,
                p:1
                }}
                alt="Produsen"
                title="Produsen"
                src={logo_white}
                />
                <Typography variant="body2" sx={{mb:2,color:"#fff",p:1}}>
                    Garapin adalah sebuah aplikasi mobile atau platform digital yang membantu para produsen dan maklon untuk mendapatkan customer yang ingin memproduksi sebuah barang melalui pabrik dan produsen yang terpercaya dengan quantity yang terjangkau oleh customer.  
                </Typography>
                <Typography variant="h7" sx={{color:"#fff",p:1}}>
                    PT. Visi Teknologi Digital
                </Typography>
                <Typography variant="body2" sx={{mb:2,color:"#fff",p:1}}>
                    Gd Grand Slipi Tower 5th Fl Unit F, Jl Letjen S Parman Kav 22-24. Palmerah - Jakarta Barat 11480. Indonesia.
                </Typography>
                <Typography variant="h7" sx={{color:"#fff",p:1}}>
                    Tanda Daftar PSE
                </Typography>
                <Typography variant="body2" sx={{mb:5,color:"#fff",p:1}}>
                    000205.01/DJAI.PSE/02/2021
                </Typography>
            </Grid>
            <Grid item xs={12} sm={2} md={2}  align="left" sx={{mt:5}}>
                <Typography variant="body2" sx={{mb:2,color:"#fff",p:1}}>
                    <MailOutlineIcon sx={{
                        mr:2,
                        float:'left'
                    }}></MailOutlineIcon>
                    contact@garap.in
                </Typography>
                <Typography variant="body2" sx={{mb:2,color:"#fff",p:1}}>
                    <WhatsAppIcon sx={{
                        mr:2,
                        float:'left'
                    }}></WhatsAppIcon>
                    0813-8020-6100
                </Typography>
                <Typography variant="body2" sx={{mb:2,color:"#fff",p:1}}>
                    <YouTubeIcon sx={{
                        mr:2,
                        float:'left'
                    }}></YouTubeIcon>
                    Garapin Official
                </Typography>
                <Typography variant="body2" sx={{mb:2,color:"#fff",p:1}}>
                    <InstagramIcon sx={{
                        mr:2,
                        float:'left'
                    }}></InstagramIcon>
                    garap_in
                </Typography>
                <Typography variant="body2" sx={{mb:2,color:"#fff",p:1}}>
                    <FacebookIcon sx={{
                        mr:2,
                        float:'left'
                    }}></FacebookIcon>
                    GarapInSemuaBisa
                </Typography>
            </Grid>
            <Grid item xs={12} sm={2} md={2}  align="center" sx={{mt:2}}>

            </Grid>
            <Grid item xs={12} sm={4} md={4}  align="left" sx={{mt:2}}>
                <Grid container sx={{p:1}}>
                    <Grid item xs={12} sx={{mb:1}}>
                        <Box
                        component="img"
                        sx={{
                        width: '30%',
                        }}
                        src={logo_playstore}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{mb:2}}>
                        <Box
                        component="img"
                        sx={{
                        width: '30%',
                        }}
                        src={logo_appstore}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{mb:2}}>
                    <Box
                        component="img"
                        sx={{
                        width: '30%',
                        }}
                        src={logo_ariba}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{bgcolor:'purple'}}>
                <Typography variant="body2" sx={{color:"#fff",p:1}}>
                    Copyright (c) 2021 GarapIn.
                </Typography>
            </Grid>
        </Grid>
    )
}