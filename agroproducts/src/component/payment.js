import * as React from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import SimCardRoundedIcon from '@mui/icons-material/SimCardRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

import { styled } from '@mui/system';
import { Button } from '@mui/material';

const FormGrid = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function PaymentForm() {
  const [paymentType, setPaymentType] = React.useState('creditCard');
  const [cardNumber, setCardNumber] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState('');

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    if (value.length <= 16) {
      setCardNumber(formattedValue);
    }
  };

  const handleCvvChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    if (value.length <= 3) {
      setCvv(value);
    }
  };
  
  const backgroundImage = {
    backgroundImage: "url('https://www.shutterstock.com/image-vector/vector-3d-realistic-white-credit-260nw-2178031243.jpg')",
    // backgroundImage: "url('https://st2.depositphotos.com/2019955/5873/i/450/depositphotos_58732313-stock-photo-man-puts-credit-card-into.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '50px',
    height: '530px',
    display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: 3,
                  height: { xs: 300, sm: 350, md: 375 },
                  width: '100%',
                  borderRadius: '20px',
                  border: '1px solid ',
                  borderColor: 'divider',
                  backgroundColor: 'background.paper',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
  };

  const handleExpirationDateChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{2})(?=\d{2})/, '$1/');
    if (value.length <= 4) {
      setExpirationDate(formattedValue);
    }
  };

  return (
    <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={{ xs: 3, sm: 6 }} useFlexGap>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              aria-label="Payment options"
              name="paymentType"
              value={paymentType}
              onChange={handlePaymentTypeChange}
              sx={{
                flexDirection: { sm: 'column', md: 'row' },
                gap: 2,
                justifyContent: 'center'
              }}
            >
              <Card
                raised={paymentType === 'creditCard'}
                sx={{
                  maxWidth: { sm: '100%', md: '50%' },
                  flexGrow: 1,
                  outline: '1px solid',
                  outlineColor:
                    paymentType === 'creditCard' ? 'primary.main' : 'divider',
                  backgroundColor:
                    paymentType === 'creditCard' ? 'background.default' : '',
                }}
              >
                <CardActionArea onClick={() => setPaymentType('creditCard')}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CreditCardRoundedIcon color="primary" fontSize="small" />
                    <Typography fontWeight="medium">Card</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                raised={paymentType === 'bankTransfer'}
                sx={{
                  maxWidth: { sm: '100%', md: '50%' },
                  flexGrow: 1,
                  outline: '1px solid',
                  outlineColor:
                    paymentType === 'bankTransfer' ? 'primary.main' : 'divider',
                  backgroundColor:
                    paymentType === 'bankTransfer' ? 'background.default' : '',
                }}
              >
                <CardActionArea onClick={() => setPaymentType('bankTransfer')}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AccountBalanceRoundedIcon color="primary" fontSize="small" />
                    <Typography fontWeight="medium"> <a href='/banktransfer' style={{textDecoration:"none",color:"black"}}>Bank account</a></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </RadioGroup>
          </FormControl>
          {paymentType === 'creditCard' && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: 'center'
                
              }}
            >
              <Box
                sx={backgroundImage}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="subtitle2" sx={{fontWeight:"900",fontSize:"20px"}}>Credit card</Typography>
                  <CreditCardRoundedIcon sx={{ color: 'text.secondary' }} />
                </Box>
                <SimCardRoundedIcon
                  sx={{
                    fontSize: { xs: 48, sm: 56 },
                    transform: 'rotate(90deg)',
                    color: 'text.secondary',
                    alignSelf: 'center'
                  }}
                />
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                    <FormGrid>
                      <FormLabel htmlFor="card-number" required sx={{fontWeight:"900",fontSize:"20px"}}>
                        Card number
                      </FormLabel>
                      <OutlinedInput
                        id="card-number"
                        autoComplete="card-number"
                        placeholder="0000 0000 0000 0000"
                        required
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        sx={{borderColor:"white"}}
                      />
                    </FormGrid>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <FormGrid>
                      <FormLabel htmlFor="cvv" required sx={{fontWeight:"900",fontSize:"20px"}}>
                        CVV
                      </FormLabel>
                      <OutlinedInput
                        id="cvv"
                        autoComplete="CVV"
                        placeholder="123"
                        required
                        value={cvv}
                        onChange={handleCvvChange}
                      />
                    </FormGrid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormGrid>
                      <FormLabel htmlFor="card-name" required sx={{fontWeight:"900",fontSize:"20px"}}>
                        Name
                      </FormLabel>
                      <OutlinedInput
                        id="card-name"
                        autoComplete="card-name"
                        placeholder="John Smith"
                        required
                      />
                    </FormGrid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormGrid>
                      <FormLabel htmlFor="card-expiration" required sx={{fontWeight:"900",fontSize:"20px"}}>
                        Expiration date
                      </FormLabel>
                      <OutlinedInput
                        id="card-expiration"
                        autoComplete="card-expiration"
                        placeholder="MM/YY"
                        required
                        value={expirationDate}
                        onChange={handleExpirationDateChange}
                      />
                    </FormGrid>
                  </Grid>
                </Grid>
              </Box>
              <FormControlLabel
                control={<Checkbox name="saveCard" />}
                label="Remember credit card details for next time"
              />
              <Button sx={{backgroundColor:"green",color:"black"}}>Next</Button>
            </Box>
          )}

          {paymentType === 'bankTransfer' && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: 'center'
              }}
            >
              <Alert severity="warning" icon={<WarningRoundedIcon />}>
                Your order will be processed once we receive the funds.
              </Alert>
              <Typography variant="subtitle1" fontWeight="medium">
                Bank account
              </Typography>
              <Typography variant="body1" gutterBottom>
                Please transfer the payment to the bank account details shown below.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Typography variant="body1" color="text.secondary">
                  Bank:
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  Mastercredit
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Typography variant="body1" color="text.secondary">
                  Account number:
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  123456789
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Typography variant="body1" color="text.secondary">
                  Routing number:
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  987654321
                </Typography>
              </Box>
            </Box>
          )}
        </Stack>
      </Box>
    </Container>
  );
}
