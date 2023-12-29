import CircularProgress from '@mui/material/CircularProgress';

import { CenteredFlexBox, FullSizeCenteredFlexBox } from '@/components/styled';
import { Const } from '@/const';

function Loading() {
  return (
    <FullSizeCenteredFlexBox>
      <CircularProgress
        sx={{
          marginTop: `calc(50vh - ${Const.topNav}px) `,
        }}
      />
    </FullSizeCenteredFlexBox>
  );
}

export default Loading;
