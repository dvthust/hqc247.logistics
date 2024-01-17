import Head from 'next/head';
import {PropsWithChildren} from 'react';
import useGlobalStore from "@/stores/global";
import TopHeader from "@/components/headers/TopHeader";

export default function LayoutWrapper ({ children }: PropsWithChildren<unknown>): JSX.Element {
    const {isOpenMenu} = useGlobalStore()

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <div className={`layout-wrapper ${isOpenMenu ? 'menu-action-open' : ''}`}>
                {children}
            </div>
        </>
    )
}
