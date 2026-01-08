import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Prince Edward School Rugby - The Tigers",
  description = "Prince Edward School Rugby - The Tigers. More than a sport — a tradition of excellence, character, and pride since 1898",
  image = "/logo.png",
  url = "https://perugby.princeedward.school"
}) => {
  const fullImageUrl = url + image;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="Prince Edward School, Rugby, The Tigers, Zimbabwe, Harare, School Rugby, PE Rugby, Prince Edward School Rugby, Zimbabwe Rugby, Schoolboy Rugby, Cottco Rugby Festival, Jubilee Field, St George's College, Rugby History" />
      <meta name="author" content="Prince Edward School" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="geo.region" content="ZW" />
      <meta name="geo.placename" content="Harare" />
      <meta name="theme-color" content="#800020" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Prince Edward School Rugby - The Tigers Logo" />
      <meta property="og:site_name" content="Prince Edward School Rugby" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content="Prince Edward School Rugby - The Tigers Logo" />
      <meta name="twitter:creator" content="@Tigers1898" />

      {/* Additional SEO Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="PE Rugby" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Prince Edward School Rugby" />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsOrganization",
          "name": "Prince Edward School Rugby",
          "alternateName": "The Tigers",
          "url": url,
          "logo": {
            "@type": "ImageObject",
            "url": fullImageUrl,
            "width": 512,
            "height": 512
          },
          "description": description,
          "foundingDate": "1898-06-13",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Harare",
            "addressCountry": "ZW",
            "streetAddress": "Jubilee Field"
          },
          "sport": "Rugby",
          "memberOf": {
            "@type": "Organization",
            "name": "Prince Edward School"
          },
          "sameAs": [
            "https://www.facebook.com/Tigers1898/"
          ]
        })}
      </script>

      {/* Structured Data - School */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "School",
          "name": "Prince Edward School",
          "alternateName": "PE",
          "description": "Historic boys' boarding and day secondary school in Harare, Zimbabwe, established in 1898",
          "foundingDate": "1898-06-13",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Harare",
            "addressCountry": "ZW"
          },
          "sport": "Rugby"
        })}
      </script>

      {/* Structured Data - Breadcrumb */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": url
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About",
              "item": url + "#about"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "History",
              "item": url + "#history"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;

