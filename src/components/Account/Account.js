import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export default function CreditCardForm() {
  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: 'max-content',
        maxWidth: '50%',
        mx: 'auto',
        overflow: 'auto',
        resize: 'horizontal',
        marginTop:10,
      }}
    >
        <Typography
  variant="h6" 
  sx={{
    display: 'flex',
    alignItems: 'center', 
    gap: 1, 
    '& .MuiSvgIcon-root': {
      fontSize: '1.5rem', 
    },
    textAlign:'center',
    color:'white',
    backgroundColor:"blueviolet"
  }}
>
  <InfoOutlinedIcon /> Add new Card
</Typography>

      <Divider inset="none" />
      <CardContent
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Card number</FormLabel>
          <Input endAdornment={<CreditCardIcon />} />
        </FormControl>
        <FormControl>
          <FormLabel>Expiry date</FormLabel>
          <Input endAdornment={<CreditCardIcon />} />
        </FormControl>
        <FormControl>
          <FormLabel>CVC/CVV</FormLabel>
          <Input endAdornment={<InfoOutlinedIcon />} />
        </FormControl>
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Card holder name</FormLabel>
          <Input placeholder="Enter cardholder's full name" />
        </FormControl>
        <Checkbox label="Save card" sx={{ gridColumn: '1/-1', my: 1 }} />
        <CardActions sx={{ gridColumn: '1/-1' }}>
          <Button variant="contained" color="primary">
            Add Card
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
