import ThreeModel from '@/Components/threeModel'
import { Container, Grid } from '@mui/material'
import React from 'react'

const DronePage = () => {
    return (
        <div className="drone-page">
            <Grid container spacing={2}>
                <Grid item lg={6} display='flex' flexDirection='column' justifyContent='center'>
                    <Container className='text-container'>
                        <p className='landing-txt'>Drone</p>
                        <p className='sub-txt'>Introducing Buster Drone, your premier choice for cutting-edge aerial technology.</p>
                    </Container>
                </Grid>
                <Grid item lg={6}>
                    <ThreeModel />
                </Grid>
            </Grid>
        </div>
    )
}

export default DronePage