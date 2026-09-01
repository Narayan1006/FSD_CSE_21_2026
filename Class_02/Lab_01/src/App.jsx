import { Box, Button, Chip, Container, Paper, Stack, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded'
import './App.css'

const heroFeatures = [
  'Minimal luxury dining room',
  'Black, silver, grey, and white palette',
  'Private reservations and curated tasting menu',
]

function App() {
  return (
    <Box className="restaurant-page">
      <Box className="restaurant-page__background" aria-hidden="true" />

      <Container maxWidth="lg" className="restaurant-page__container">
        <Paper className="restaurant-page__hero" elevation={0}>
          <Stack spacing={3.5} className="restaurant-page__content">
            <Chip
              icon={<RestaurantRoundedIcon />}
              label="Noir Table"
              className="restaurant-page__chip"
            />

            <Box>
              <Typography variant="overline" className="restaurant-page__eyebrow">
                Minimal luxury restaurant
              </Typography>
              <Typography variant="h1" className="restaurant-page__title">
                A quiet room for modern dining, stripped to the essentials.
              </Typography>
              <Typography className="restaurant-page__subtitle">
                Black surfaces, silver light, and a menu built around restraint. This is a
                restaurant homepage with no clutter, no navbar, and no unnecessary sections.
              </Typography>
            </Box>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                size="large"
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                className="restaurant-page__primary"
              >
                Reserve a table
              </Button>
              <Button size="large" variant="outlined" className="restaurant-page__secondary">
                View menu
              </Button>
            </Stack>

            <Stack direction="row" spacing={1.5} className="restaurant-page__feature-row">
              {heroFeatures.map((feature) => (
                <Box key={feature} className="restaurant-page__feature">
                  {feature}
                </Box>
              ))}
            </Stack>
          </Stack>

          <Box className="restaurant-page__side">
            <Typography className="restaurant-page__side-label">Tonight</Typography>
            <Typography variant="h4" className="restaurant-page__side-title">
              Chef tasting menu
            </Typography>
            <Typography className="restaurant-page__side-text">
              Six courses. Quiet service. Intense focus on texture, temperature, and finish.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default App
