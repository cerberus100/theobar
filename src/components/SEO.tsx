import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    schema?: object;
}

const SEO = ({ title, description, canonical, schema }: SEOProps) => {
    const siteTitle = 'The "O" Bar | New Orleans Cocktail Lounge';
    const fullTitle = title === 'Home' ? siteTitle : `${title} | The "O" Bar New Orleans`;

    const baseUrl = 'https://o-nola.com';

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}

            {/* Open Graph / Standard Meta */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${baseUrl}${canonical || ''}`} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="The &quot;O&quot; Bar" />
            <meta property="og:locale" content="en_US" />

            {/* Schema.org Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
