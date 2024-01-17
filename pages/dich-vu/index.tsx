import Head from 'next/head';
import {NextPageWithLayout} from "@/pages/_app";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import {ReactElement} from "react";
import CtaBottom from "@/features/home/call-to-action/CtaBottom";
import ServiceIntro from "@/features/home/service/ServiceIntro";

const ContactPage: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Dịch vụ</title>
            </Head>
            <div>
                <ServiceIntro/>
                <CtaBottom/>
            </div>
        </>
    )
}

ContactPage.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout>{page}</DefaultLayout>
};

export default ContactPage;