import Head from 'next/head';
import {NextPageWithLayout} from "@/pages/_app";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import {ReactElement} from "react";
import BannerSlider from "@/features/home/BannerSlider";
import WhyChoseUs from "@/features/home/why-chose-us/WhyChoseUs";
import TestimonialInfo from "@/features/home/testimonial/TestimonialInfo";
import CtaBottom from "@/features/home/call-to-action/CtaBottom";
import ServiceIntro from "@/features/home/service/ServiceIntro";
import FactCounter from "@/features/home/fact-counter/FactCounter";

const HomePage: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Trang chủ</title>
            </Head>
            <div>
                <BannerSlider/>
                <ServiceIntro/>
                <CtaBottom/>
                <WhyChoseUs/>
                <TestimonialInfo/>
                <FactCounter/>
            </div>
        </>
    )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout>{page}</DefaultLayout>
};

export default HomePage;