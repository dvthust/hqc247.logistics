import LayoutWrapper from '@/components/layouts/LayoutWrapper';
import {PropsWithChildren} from 'react';
import TopHeader from "@/components/headers/TopHeader";
import SiteHeader from "@/components/headers/SiteHeader";
import Footer from "@/components/Footer";

export default function DefaultLayout ({ children }: PropsWithChildren<unknown>): JSX.Element {

  return (
    <LayoutWrapper>
      <div className={'default-layout'}>
          <TopHeader />
          <SiteHeader />
          {children}
          <Footer />
      </div>
    </LayoutWrapper>
  )
}
