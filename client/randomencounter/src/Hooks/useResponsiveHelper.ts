import { Breakpoint, useMediaQuery, useTheme } from '@mui/material';

export type ContainerScreenSizes = Breakpoint | false;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useResponsiveHelper = () => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.only('mobile'));
    const isTablet = useMediaQuery(theme.breakpoints.only('tablet'));
    const isDesktop = useMediaQuery(theme.breakpoints.only('desktop'));
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('desktop'));
    const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up('tablet'));

    const containerWidth = (): ContainerScreenSizes => {
        if (isMobile) {
            return 'sm';
        }
        if (isTablet) {
            return 'md';
        }
        return 'lg';
    };

    return { containerWidth, isMobile, isTablet, isDesktop, isMobileOrTablet, isTabletOrDesktop } as const;
};

export default useResponsiveHelper;
