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
import Ast_direction_icon from './assistant_direction';
import Next_Icon from './nextIcon';

// Custom icon components
export const PhoneIcon = (props: SvgIconProps): React.ReactElement => <LocalPhoneIcon {...props} />;
export const AstDirectionIcon = (props: SvgIconProps): React.ReactElement => <Ast_direction_icon {...props} />;
export const NextIcon = (props: SvgIconProps): React.ReactElement => <Next_Icon {...props} />;

// Feature icons
export {
  CommunityEventsIcon,
  MeetingRoomsIcon,
  VirtualEventsIcon,
  NetworkingIcon,
  WorkshopsIcon,
  ConferencesIcon,
  TeamBuildingIcon,
  TrainingIcon,
  
};

// Add more custom icons here as needed 