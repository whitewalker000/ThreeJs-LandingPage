import { Card, Container, Grid } from '@mui/material'
import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin, FaGlobe, FaWhatsapp } from 'react-icons/fa';


const getCurrentYear = () => {
    return new Date().getFullYear();
};
const Footer = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={4} display='flex' flexDirection='column' justifyContent='center'>
                        <b>{"<Aalap Pathak />"}</b>
                    </Grid>

                    <Grid item lg={4} display='flex' justifyContent='center'>
                        <Card className='card' style={{ display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
                            <div style={{ margin: '0 10px' }}>
                                <a href='/'><FaInstagram size={30} color='white' /></a>
                            </div>
                            <div style={{ margin: '0 10px' }}>
                                <a href='https://github.com/whitewalker000' target='_blank'><FaGithub size={30} color='white' /></a>
                            </div>
                            <div style={{ margin: '0 10px' }}>
                                <a href='https://in.linkedin.com/in/aalap-pathak-692638189?original_referer=https%3A%2F%2Fwww.google.com%2F' target='_blank'><FaLinkedin size={30} color='white' /></a>
                            </div>
                            <div style={{ margin: '0 10px' }}>
                                <a href='https://aalap-pathak.vercel.app/' target='_blank'><FaGlobe size={30} color='white' /></a>
                            </div>
                            <div style={{ margin: '0 10px' }}>
                                <a href='https://wa.me/919913951535' target='_blank'><FaWhatsapp size={30} color='white' /></a>
                            </div>
                        </Card>
                    </Grid>

                    <Grid item lg={4} display='flex' flexDirection='column' justifyContent='center' alignItems='flex-end'>
                        <b>Copyright © {getCurrentYear()}</b>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer