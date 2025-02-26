const PageSchema = ({ schemas }: { schemas: unknown[] }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            ...schemas,
          ],
        }),
      }}
    />
  );
}

export default PageSchema;