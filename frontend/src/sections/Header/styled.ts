import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const HotKeysButton = styled(Button)(({ theme }) => {
  return {
    height: 'fit-content',
    alignSelf: 'center',
    marginRight: theme.spacing(1),
    borderColor: theme.palette.text.primary,
    '&:hover': {
      borderColor: theme.palette.text.primary,
    },
    // color: theme.palette.text.disabled,
    color: theme.palette.text.secondary,
  };
});

export { HotKeysButton };
