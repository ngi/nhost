import type { ActivityIndicatorProps } from '@/ui/v2/ActivityIndicator';
import ActivityIndicator from '@/ui/v2/ActivityIndicator';
import type { BoxProps } from '@/ui/v2/Box';
import Box from '@/ui/v2/Box';
import { twMerge } from 'tailwind-merge';

export interface LoadingScreenProps extends BoxProps {
  /**
   * Props passed to individual component slots.
   */
  slotProps?: {
    /**
     * Props passed to the `<Box />` component.
     */
    root?: BoxProps;
    /**
     * Props passed to the `<ActivityIndicator />` component.
     */
    activityIndicator?: ActivityIndicatorProps;
  };
}

export function LoadingScreen({
  className,
  slotProps = { root: {}, activityIndicator: {} },
  ...props
}: LoadingScreenProps) {
  return (
    <Box
      className={twMerge(
        'absolute top-0 left-0 bottom-0 right-0 z-50 flex h-full w-full items-center justify-center',
        className,
        slotProps?.root?.className,
      )}
      {...slotProps?.root}
      {...props}
    >
      <ActivityIndicator
        {...slotProps?.activityIndicator}
        circularProgressProps={{
          ...slotProps?.activityIndicator?.circularProgressProps,
          className: twMerge(
            'w-5 h-5',
            slotProps?.activityIndicator?.circularProgressProps?.className,
          ),
        }}
      />
    </Box>
  );
}

export default LoadingScreen;
