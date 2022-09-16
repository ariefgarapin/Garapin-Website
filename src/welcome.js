import * as React from 'react';
import "@fontsource/montserrat";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const produsen = (
  <React.Fragment>
    <CardContent align="center" sx={{ 
        bgcolor:'#FADEFF',
        color:'#3A3A3A',
        borderRadius:'10px',
        fontFamily: 'Montserrat, Arial',
        }}>
        <Box
        component="img"
        sx={{
          mt:3,
          mb:2,
          fontFamily: "Montserrat",
          maxHeight: 200,
        }}
        src="https://cdni.iconscout.com/illustration/premium/thumb/verified-seller-5846154-4862514.png"
        />
        
        <TextField
         id="outlined-basic" 
         label="Saya seorang Produsen" 
         variant="outlined" 
         sx={{
            width: '100%',
            bgcolor:'#9D28B1',
            color:'#FFFFFF',
            fontFamily: "Montserrat",
            borderColor: '#9D28B1',
            mt:3,
            mb:3
        }} />

        <Typography variant="body2" sx={{mb:5,maxWidth:'80%'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
        </Typography>
    </CardContent>
  </React.Fragment>
);
const customer = (
    <React.Fragment>
      <CardContent align="center" sx={{ bgcolor:'#C7F1FF',color:'#3A3A3A',borderRadius:'10px' }}>
          <Box
          component="img"
          sx={{
            mt:3,
            mb:2,
            maxHeight: 200,
          }}
          src="https://library.kissclipart.com/20180916/qtq/kissclipart-happy-customers-png-clipart-customer-service-custo-ef5aac4691745925.png"
          />
          
          <TextField id="outlined-basic" label="Saya seorang Produsen" variant="outlined" sx={{
              width: '100%',
              bgcolor:'#00BAF4',
              color:'#FFFFFF',
              borderColor: '#00BAF4',
              mt:3,
              mb:3
          }} />
  
          <Typography variant="body2" sx={{mb:5,maxWidth:'80%'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
          </Typography>
      </CardContent>
    </React.Fragment>
  );
export default function WelcomePage() {
    return (
        <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={12} sm={12} md={12} align="center" sx={{mt:5}}>
                <Typography variant="h3">
                    Lorem Ipsum
                </Typography>
                <Typography variant="subtitle1" sx={{mt:2,maxWidth:600}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} >
                <Box sx={{ minWidth: 275,p:5}}>
                    <Card variant="outlined" sx={{ border: 0 }}>{produsen}</Card>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} >
                <Box sx={{ minWidth: 275,p:5}}>
                    <Card variant="outlined" sx={{ border: 0 }}>{customer}</Card>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{bgcolor: '#FADEFF',mt:5}}>
                <Box sx={{ minWidth: 275,p:5}}>
                    <Typography variant="h3">
                        Tentang Garapin
                    </Typography>
                    <Typography variant="subtitle1" sx={{mt:2,maxWidth:'500'}}>
                    Garapin adalah sebuah aplikasi mobile atau platform digital yang membantu para produsen dan maklon untuk mendapatkan customer yang ingin memproduksi sebuah barang melalui pabrik dan produsen yang terpercaya dengan quantity yang terjangkau oleh customer.
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6} align="center" sx={{mt:5}}>
                            <Box sx={{ bgcolor: '#fff',color:'#111',p:1,minHeight:100}}>
                                Ilustrasi
                            </Box>
                        </Grid>
                        <Grid item xs={6} align="center" sx={{mt:5}}>
                            <Box sx={{ bgcolor: '#fff',color:'#111',p:1,minHeight:100}}>
                                Video
                            </Box>
                        </Grid>
                        <Grid item xs={12} align="right">
                            <Box sx={{ color:'#111'}}>
                                Lihat Selengkapnya..
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}