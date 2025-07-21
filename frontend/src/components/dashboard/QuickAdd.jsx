import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const QuickAdd = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Comida');
  const [type, setType] = useState('expense');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para agregar transacción
    console.log({ amount, description, category, type });
    setAmount('');
    setDescription('');
  };

  return (
    <Box sx={{ 
      p: 3, 
      borderRadius: 3, 
      bgcolor: 'background.paper',
    }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Agregar Transacción</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Monto"
              variant="outlined"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Descripción"
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="category-label">Categoría</InputLabel>
              <Select
                labelId="category-label"
                value={category}
                label="Categoría"
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="Comida">Comida</MenuItem>
                <MenuItem value="Hogar">Hogar</MenuItem>
                <MenuItem value="Transporte">Transporte</MenuItem>
                <MenuItem value="Entretenimiento">Entretenimiento</MenuItem>
                <MenuItem value="Salud">Salud</MenuItem>
                <MenuItem value="Educación">Educación</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <RadioGroup 
              row 
              value={type} 
              onChange={(e) => setType(e.target.value)}
              sx={{ justifyContent: 'center' }}
            >
              <FormControlLabel 
                value="expense" 
                control={<Radio />} 
                label="Gasto" 
                sx={{ mr: 4 }}
              />
              <FormControlLabel 
                value="income" 
                control={<Radio />} 
                label="Ingreso" 
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              startIcon={<AddIcon />}
              sx={{ borderRadius: 2 }}
            >
              Agregar Transacción
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default QuickAdd;