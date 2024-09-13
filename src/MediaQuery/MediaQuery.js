import { useMediaQuery } from 'react-responsive';

export const MediaQuery = () => {
  const isMobile = useMediaQuery({ maxWidth: 650 });
  const isResponsive = useMediaQuery({ maxWidth: 1024 });
  const isTabOnly = useMediaQuery({ minWidth: 651, maxWidth: 1024 });
  const isLessThan1200 = useMediaQuery({ maxWidth: 1200 });
  return { isMobile, isTabOnly, isResponsive, isLessThan1200 };
};