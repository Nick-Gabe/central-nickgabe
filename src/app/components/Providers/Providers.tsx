'use client';
import { ConfigProvider } from 'antd';
import { ProviderProps } from './ProviderTypes';

export const Providers = (props: ProviderProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            colorPrimary: '#1c1917',
            colorPrimaryHover: '#ec4899',
          },
        },
      }}
    >
      {props.children}
    </ConfigProvider>
  );
};
