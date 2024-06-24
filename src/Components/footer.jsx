import { Container, Grid } from '@mui/material'
import React from 'react'

const getCurrentYear = () => {
    return new Date().getFullYear();
};
const Footer = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <b>{"<Aalap Pathak />"}</b>
                    </Grid>

                    <Grid item lg={6} display='flex' justifyContent='right'>
                        <b>Copyright © {getCurrentYear()}</b>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer