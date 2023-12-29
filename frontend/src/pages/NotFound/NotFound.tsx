import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { CenteredFlexBox, FlexBox, FullSizeCenteredFlexBox } from '@/components/styled';
import { giphy404, messages } from '@/config';

function NotFound() {
  return (
    <Container sx={{ height: '100%' }}>
      <FullSizeCenteredFlexBox flexDirection="column">
        {/* <iframe src={giphy404} width="100%" height="50%" style={{ maxHeight: '60%', maxWidth: '100%' }} frameBorder="0" allowFullScreen /> */}
        <CenteredFlexBox flexDirection="column">
          <>
            <Typography sx={{ mt: 12 }} variant="h4" color="error">
              404 Not Found
            </Typography>
            <Divider variant="middle" />
            <Typography variant="h5" sx={{ color: (theme) => theme.palette.info.main }}>
              {messages[404]}
            </Typography>
          </>
        </CenteredFlexBox>
      </FullSizeCenteredFlexBox>
    </Container>
  );
}

export default NotFound;
