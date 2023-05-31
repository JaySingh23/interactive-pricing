import './App.css';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Stack,
  Slider,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import bgSVG from '../images/bg-pattern.svg';
import iconCheck from '../images/icon-check.svg';
import patternCircles from '../images/pattern-circles.svg';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [value, setValue] = useState(8);
  const [views, setViews] = useState('10k');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const [yearlyBilling, setYearlyBilling] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const handleBillingToggle = () => {
    setYearlyBilling((prevYearlyBilling) => !prevYearlyBilling);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 8) {
      setViews('10k');
    } else if (newValue === 12) {
      setViews('50k');
    } else if (newValue === 16) {
      setViews('100k');
    } else if (newValue === 24) {
      setViews('500k');
    } else if (newValue === 36) {
      setViews('1M');
    }
  };

  const calculateDiscountedPrice = () => {
    let price = value;
    if (yearlyBilling) {
      price -= price * 0.25; // Apply 25% discount for yearly billing
    }
    return price.toFixed(2);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : createTheme()}>
      <Box
        sx={{
          height: '100vh',
          backgroundColor: darkMode ? 'hsl(230, 17%, 14%)' : '',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={bgSVG} alt="background" className="bgSVG" style={{ zIndex: '-1', marginTop: '-20px' }} />
        
         <div className={`background ${darkMode ? 'dark' : ''}`}>
            <img src={patternCircles} alt="circles" className="circles" />
            <Typography
              variant="h4"
              sx={{
                textAlign: 'center',
                fontWeight: '600',
                color: darkMode ? 'hsl(227, 35%, 25%)' : '',
              }}
            >
              Simple, traffic-based pricing
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: 'center',
                color: darkMode ? 'hsl(225, 20%, 60%)' : '',
              }}
            >
              Sign up for our 30-day trial. No credit card required
            </Typography>
          </div>

        <Box
          sx={{
            width: '100%',
            maxWidth: '600px',
            p: 2,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px',
            backgroundColor: darkMode ? 'hsl(230, 17%, 14%)' : 'white',
            mt: '10rem'
          }}
        >
         

          <Card
            sx={{
              mt: 1,
              backgroundColor: darkMode ? 'hsl(230, 17%, 14%)' : '',
              border: 'none', 
              outline: 'none'
            }}
          >
            <CardContent>
              <Container>
                <div className="headerCard">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: darkMode ? 'hsl(225, 20%, 60%)' : '',
                      fontWeight: '600',
                      letterSpacing: '1px',
                    }}
                  >
                    {views} PAGEVIEWS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: darkMode ? 'hsl(225, 20%, 60%)' : '',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span className="price">${calculateDiscountedPrice()}</span>/month
                  </Typography>
                </div>

                <Stack direction="column" spacing={2}>
                  <Slider
                    value={value}
                    min={8}
                    max={36}
                    step={null}
                    marks={[
                      { value: 8 },
                      { value: 12 },
                      { value: 16 },
                      { value: 24 },
                      { value: 36 },
                    ]}
                    className='slider'
                    onChange={handleChange}
                    sx={{
                      color: 'hsl(174, 77%, 80%)',
                    }}
                  />
                </Stack>
              </Container>

              <div className="billingDiv">
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: darkMode ? 'hsl(225, 20%, 60%)' : '',
                    fontWeight: '600',
                  }}
                >
                  Monthly Billing
                </Typography>
                <label className="toggle">
                  <input
                    className="toggle-checkbox"
                    type="checkbox"
                    checked={yearlyBilling}
                    onChange={handleBillingToggle}
                  />
                  <div className="toggle-switch"></div>
                </label>
                <div className="yearlyBill">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: darkMode ? 'hsl(225, 20%, 60%)' : '',
                      fontWeight: '600',
                    }}
                  >
                    Yearly Billing
                  </Typography>
                  <Chip
                    label="25% discount"
                    sx={{
                      color: 'hsl(15, 100%, 70%)',
                      backgroundColor: darkMode ? 'hsl(14, 92%, 95%)' : '',
                      fontWeight: '800',
                    }}
                  />
                </div>
              </div>
            </CardContent>

            <Divider />

            <CardContent>
              <div className="footerCard">
                <Stack direction="column" alignItems="flex-start" spacing={1}>
                  <div className="col-content">
                    <img src={iconCheck} alt="icon" />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: darkMode ? 'hsl(225, 20%, 60%)' : '',
                        fontWeight: '600',
                        ml: 2,
                      }}
                    >
                      Unlimited websites
                    </Typography>
                  </div>
                  <div className="col-content">
                    <img src={iconCheck} alt="icon" />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: darkMode ? 'hsl(225, 20%, 60%)' : '',
                        fontWeight: '600',
                        ml: 2,
                      }}
                    >
                      100% data ownership
                    </Typography>
                  </div>
                  <div className="col-content">
                    <img src={iconCheck} alt="icon" />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: darkMode ? 'hsl(225, 20%, 60%)' : '',
                        fontWeight: '600',
                        ml: 2,
                      }}
                    >
                      Email reports
                    </Typography>
                  </div>
                </Stack>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#293356',
                    color: darkMode ? 'hsl(226, 100%, 87%)' : '',
                    py: 1.5,
                    px: 8,
                    textTransform: 'initial',
                    fontSize: '16px',
                    fontWeight: '600',
                    borderRadius: '40px',
                  }}
                >
                  Start my trial
                </Button>
              </div>
            </CardContent>
          </Card>

          <Button
            onClick={toggleDarkMode}
            sx={{
              position: 'fixed',
              top: '1rem',
              right: '1rem',
              zIndex: 9999,
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              color: 'hsl(0, 0%, 100%)',
              backgroundColor: 'hsl(0, 0%, 20%)',
              '&:hover': {
                backgroundColor: 'hsl(0, 0%, 25%)',
              },
            }}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
