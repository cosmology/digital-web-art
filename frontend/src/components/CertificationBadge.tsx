import React from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { awsCert } from '@/config';
import { Const } from '../const';

const picW = 54; //Const.drawerWidth - Const.pad;

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

function CertificationBadge() {
  return (
    <IconButton size="small" href={awsCert} target="_blank">
        <Badge badgeContent="✔" color="success" overlap="circular" style={{  transform: 'translate(50px, -20px)'}}>
        </Badge>
        <Box
        component="img"
        sx={{
          width: picW,
          height: picW,
          minWidth: picW,
          minHeight: picW,
          border: 'none', //'.075rem solid white',
          borderRadius: '50%',
        }}
        alt="Ivan Prokic - AWS Certified Developer – Associate"
        src="https://digitalwebart.net/images/aws-certified-developer-associate.png"
      />
      </IconButton>
  );
}

export default CertificationBadge;