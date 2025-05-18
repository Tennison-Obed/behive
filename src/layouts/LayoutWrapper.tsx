import React from 'react';
import { MainLayout } from './index';

type LayoutType = 'main';

interface LayoutWrapperProps {
  children: React.ReactNode;
  layout?: LayoutType;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ 
  children, 
  layout = 'main' 
}) => {
  const getLayout = () => {
    switch (layout) {
      case 'main':
        return <MainLayout>{children}</MainLayout>;
      default:
        return <MainLayout>{children}</MainLayout>;
    }
  };

  return getLayout();
};

export default LayoutWrapper; 