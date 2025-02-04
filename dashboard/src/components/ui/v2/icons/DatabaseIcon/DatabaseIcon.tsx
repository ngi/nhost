import type { IconProps } from '@/ui/v2/icons';
import SvgIcon from '@/ui/v2/icons/SvgIcon';

function DatabaseIcon(props: IconProps) {
  return (
    <SvgIcon
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      aria-label="Database"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.47 3.537C3.576 4.025 3.25 4.575 3.25 5c0 .425.326.975 1.22 1.463.865.472 2.112.787 3.53.787 1.418 0 2.665-.315 3.53-.787.894-.488 1.22-1.038 1.22-1.463 0-.425-.326-.975-1.22-1.463-.865-.472-2.112-.787-3.53-.787-1.418 0-2.665.315-3.53.787ZM3.752 2.22C2.655 2.82 1.75 3.768 1.75 5v6c0 1.232.905 2.181 2.002 2.78 1.125.614 2.628.97 4.248.97s3.123-.357 4.248-.97c1.097-.599 2.002-1.548 2.002-2.78V5c0-1.232-.905-2.181-2.002-2.78C11.123 1.606 9.62 1.25 8 1.25s-3.123.356-4.248.97Zm8.998 8.25V11c0 .425-.326.975-1.22 1.463-.865.472-2.112.787-3.53.787-1.418 0-2.665-.315-3.53-.787-.894-.488-1.22-1.038-1.22-1.463v-.53c.16.112.329.215.502.31 1.125.614 2.628.97 4.248.97s3.123-.357 4.248-.97c.173-.095.341-.198.502-.31ZM3.25 8c0 .425.326.975 1.22 1.463.865.472 2.112.787 3.53.787 1.418 0 2.665-.315 3.53-.787.894-.488 1.22-1.038 1.22-1.463v-.53c-.16.112-.329.215-.502.31-1.125.614-2.628.97-4.248.97s-3.123-.356-4.248-.97a5.483 5.483 0 0 1-.502-.31V8Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

DatabaseIcon.displayName = 'NhostDatabaseIcon';

export default DatabaseIcon;
