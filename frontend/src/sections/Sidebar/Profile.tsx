import Box from '@mui/material/Box';

import { usePortfolio } from '@/hooks/usePortfolioContext';

import { Const } from '../../const';

export const Profile = () => {
  const picW = Const.drawerWidth - Const.pad * 8.1;
  const { person } = usePortfolio();
  const fullName = person.firstName + ' ' + person.lastName;

  const textWrap =
    fullName.length < 11
      ? {
          marginRight: Const.pad * -1,
          marginLeft: Const.pad * -1,
        }
      : {};

  return (
    <div>
      <div
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <div
          style={{
            width: picW,
            height: picW,
            minWidth: picW,
            minHeight: picW,
            paddingTop: Const.pad,
            borderRadius: '50%',
          }}
        >
          {/* https://github.com/vercel/next.js/discussions/18312 */}
          <>
            <Box
              component="img"
              sx={{
                width: picW,
                height: picW,
                minWidth: picW,
                minHeight: picW,
                border: '.175rem solid white',
                borderRadius: '50%',
              }}
              alt={fullName}
              src="https://digitalwebart.net/images/robot_avatar.png"
              // src="https://miro.medium.com/fit/c/88/88/0*_X9abEDMDlfCtOF4."
            />
            {/* <Image
              objectFit="fill"
              src={'/headshot.png'}
              width={picW}
              height={picW}
              alt={person.firstName}
            />

            <style jsx global>{`
              img {
                border-radius: ${Const.pad / 2}px;
              }
            `}</style> */}
          </>
        </div>
      </div>

      <div
        className="name"
        style={{
          color: Const.css.fc0,
          paddingTop: Const.pad * 2,
          textAlign: 'center',
          fontSize: Const.css.md,
          overflowWrap: 'break-word',
          fontWeight: 600,
          ...textWrap,
        }}
      >
        {fullName}
      </div>

      <div
        style={{
          color: Const.css.fc0,
          fontSize: Const.css.sm,
          overflowWrap: 'break-word',
          textAlign: 'center',
        }}
      >
        {person.jobTitle}
      </div>

      <div
        style={{
          color: Const.css.fc0,
          fontSize: Const.css.sm,
          overflowWrap: 'break-word',
          textAlign: 'center',
        }}
      >
        {person.location}
      </div>
    </div>
  );
};
