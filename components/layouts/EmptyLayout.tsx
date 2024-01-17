import LayoutWrapper from '@/components/layouts/LayoutWrapper';
import {PropsWithChildren} from 'react';

export default function EmptyLayout ({ children }: PropsWithChildren<unknown>): JSX.Element {

  return (
    <LayoutWrapper>
      <div className={'empty-layout'}>
      {children}
      </div>
    </LayoutWrapper>
  )
}
