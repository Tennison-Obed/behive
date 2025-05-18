import React from 'react';
import { SvgIconProps } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {
  CommunityEventsIcon,
  MeetingRoomsIcon,
  VirtualEventsIcon,
  NetworkingIcon,
  WorkshopsIcon,
  ConferencesIcon,
  TeamBuildingIcon,
  TrainingIcon
} from './feature-icons';

// Custom icon components
export const PhoneIcon = (props: SvgIconProps): React.ReactElement => <LocalPhoneIcon {...props} />;

// Feature icons
export {
  CommunityEventsIcon,
  MeetingRoomsIcon,
  VirtualEventsIcon,
  NetworkingIcon,
  WorkshopsIcon,
  ConferencesIcon,
  TeamBuildingIcon,
  TrainingIcon
};

// Add more custom icons here as needed 