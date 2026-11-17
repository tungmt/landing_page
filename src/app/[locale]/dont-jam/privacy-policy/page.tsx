import fs from 'fs/promises';
import path from 'path';
import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { remark } from 'remark';
import html from 'remark-html';
import { Button, Flex } from '@/once-ui/components';
import { baseURL } from '@/app/resources';
import styles from './page.module.scss';

const policyURL = `https://${baseURL}/dont-jam/privacy-policy`;

export const metadata: Metadata = {
    title: "Privacy Policy | Don't Jam: Parking Puzzle",
    description: "How Tungmt handles local game data, support requests, and privacy in Don't Jam: Parking Puzzle.",
    alternates: { canonical: policyURL },
    openGraph: {
        title: "Don't Jam Privacy Policy",
        description: "Privacy information for Don't Jam: Parking Puzzle by Tungmt.",
        url: policyURL,
        type: 'website',
    },
};

export default async function PrivacyPolicy({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    const policy = await fs.readFile(
        path.join(process.cwd(), 'src', 'content', 'dont-jam', 'privacy-policy.md'),
        'utf8',
    );
    const renderedPolicy = await remark().use(html).process(policy);

    return (
        <Flex as="section" fillWidth maxWidth="s" direction="column" gap="l">
            <Button href="/work/dont-jam" variant="tertiary" size="s" prefixIcon="chevronLeft">
                About Don&apos;t Jam
            </Button>
            <article
                className={styles.policy}
                dangerouslySetInnerHTML={{ __html: renderedPolicy.toString() }}
            />
        </Flex>
    );
}
