import React from 'react'
import { Container, Typography, Input, Button, Sheet } from '@mui/joy'

const AppLogin: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Sheet
        variant='outlined'
        sx={{
          width: 'fit-content',
          marginTop: '20vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 'md',
          mx: 'auto',
          p: 3,
        }}
      >
        <Typography
          level="h4"
          sx={{ marginBottom: '2rem' }}
        >
          Login
        </Typography>
        <Input
          variant="outlined"
          sx={{ marginBottom: '1rem' }}
        />
        <Input
          variant="outlined"
          type="password"
          sx={{ marginBottom: '1rem' }}
        />
        <Button
          variant="solid"
          color="primary"
        >
          Sign In
        </Button>
      </Sheet>
    </Container>
  )
}

export default AppLogin
