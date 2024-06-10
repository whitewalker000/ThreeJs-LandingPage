import ThreeModel from '@/Components/threeModel'
import { Container, Grid } from '@mui/material'
import React from 'react'

const DronePage = () => {
    return (
        <div>
            <Grid container>
                <Grid item lg={6}>
                    <ThreeModel />
                </Grid>
                <Grid item lg={6}>
                    <p className='landing-txt'>BaTMaN</p>
                </Grid>
            </Grid>
        </div >
    )
}

export default DronePage