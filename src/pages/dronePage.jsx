import ThreeModel from '@/Components/threeModel'
import { Container, Divider, Grid } from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Footer from '@/Components/footer';


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1697394658126-bc83ae75acf3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Mountain',
    },
    {
        img: 'https://images.unsplash.com/photo-1494472155656-f34e81b17ddc?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Waterfall',
    },
    {
        img: 'https://images.unsplash.com/photo-1697395173693-1f1da0e1e0ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Village',
    },
    {
        img: 'https://images.unsplash.com/photo-1652295963237-2051c244c3bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Train',
    },
    {
        img: 'https://images.unsplash.com/photo-1586854399870-334a91a284e8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Boat',
    },
    {
        img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Sunset',
    },
    {
        img: 'https://images.unsplash.com/photo-1641048350693-4710a172e3cd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Droplet',
    },
    {
        img: 'https://images.unsplash.com/photo-1668265867097-f01d1ed2968c?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Swan',
    },
    {
        img: 'https://images.unsplash.com/photo-1598323462480-a6993bc76ce1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Dog',
    },
];

const specs = [
    {
        img: '/assets/charging.png',
        title: 'Flight Time',
        desc: '2 Hrs',
    },

    {
        img: '/assets/play.png',
        title: 'Video Resolution',
        desc: '4K 60FPS',
    },

    {
        img: '/assets/dashboard.png',
        title: 'Speed',
        desc: '72 KM/H',
    },

    {
        img: '/assets/sensor.png',
        title: 'Sensor Range',
        desc: '30 M',
    },

    {
        img: '/assets/satellite.png',
        title: 'Control Range',
        desc: '70 KM',
    },

    {
        img: '/assets/eye.png',
        title: 'Obstacle Sensing',
        desc: '5 Directions',
    },
];

const DronePage = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const directions = [
        { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } },
        { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 } },
        { initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } },
        { initial: { opacity: 0, y: -100 }, animate: { opacity: 1, y: 0 } },
    ];

    return (
        <>
            <div className="drone-page">
                <Grid container spacing={2}>
                    <Grid item lg={6} sm={6} display='flex' flexDirection='column' justifyContent='center'>
                        <Container className='text-container'>
                            <p className='landing-txt'>Drone</p>
                            <p className='sub-txt'>Introducing Buster Drone, your premier choice for cutting-edge aerial technology.</p>
                        </Container>
                    </Grid>
                    <Grid item lg={6} sm={6} display='flex' flexDirection='column' justifyContent='center'>
                        <ThreeModel />
                    </Grid>
                </Grid>
            </div>

            <div className='specs'>
                <Container>
                    <Grid container spacing='2'>
                        <Grid item lg={6} display='flex' flexDirection='column' justifyContent='center'>
                            <img className='drone' src='/assets/drone.png' />
                        </Grid>

                        <Grid item lg={6}>
                            <h1>ULTRA-<span className='blue-txt'>BRIGHT</span> SCREEN</h1>
                            <p className='specs-txt'>A 5.5in 1080p screen integrated with the Phantom 4 Pro + offers 1000 cd/m2 of brightness more than twice as bright as conventional smart devices. It makes bright, vivid colors easily visible in direct sunlight. As the DJI GO 4 app is built into the screen, a middle device is not required, simplifying pre-fight preperations.</p>

                            <Grid className='specs-all' container spacing={2}>
                                {specs.map((item, index) => (
                                    <Grid className='img-txt' item lg={6}>
                                        <Grid item lg={3}>
                                            <img src={item.img} alt='Charging' />
                                        </Grid>

                                        <Grid item lg={9}>
                                            <span>{item.title}</span><br />
                                            <b>{item.desc}</b>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <div className='captures'>
                <Container>
                    <Grid container spacing={2} display='flex' justifyContent='left'>
                        <Grid item lg={6} alignSelf='center'>
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 1 }}
                            >
                                <p>Interactions By<br /><span>Buster Drone</span></p>
                            </motion.div>
                        </Grid>
                        <Grid item lg={6} display='flex' justifyContent='flex-end'>
                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0, x: -100 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 1 }}
                            >
                                <ImageList sx={{ width: '100%', height: 550 }} variant="woven" cols={3} gap={12} style={{ overflow: 'hidden' }}>
                                    {itemData.map((item, index) => (
                                        <motion.div
                                            key={item.img}
                                            initial={directions[index % directions.length].initial}
                                            animate={inView ? directions[index % directions.length].animate : {}}
                                            transition={{ duration: 1 }}
                                        >
                                            <ImageListItem key={item.img}>
                                                <img
                                                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                                    src={`${item.img}?w=161&fit=crop&auto=format`}
                                                    alt={item.title}
                                                    loading="lazy"
                                                />
                                            </ImageListItem>
                                        </motion.div>
                                    ))}
                                </ImageList>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>

                <motion.div
                    initial={{ width: '0%' }}
                    animate={inView ? { width: '100%' } : { width: '0%' }}
                    transition={{ duration: 2 }}
                    className='divider-line'
                >
                    <Divider className='Divider' />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 2 }}
                >
                    <Footer />
                </motion.div>
            </div>
        </>
    );
};

export default DronePage;