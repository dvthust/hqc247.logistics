import Head from 'next/head';
import {NextPageWithLayout} from "@/pages/_app";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import {ReactElement} from "react";
import FaqIntro from "@/features/contact/faq/FaqIntro";
import CtaBottom from "@/features/home/call-to-action/CtaBottom";

const ContactPage: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Liên hệ</title>
            </Head>
            <div>
                <FaqIntro/>
                <CtaBottom/>
            </div>
        </>
    )
}

ContactPage.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout>{page}</DefaultLayout>
};

export default ContactPage;