import { Document } from '@tkww/orion-web-nextjs-pages-router/server';

const ThisDocument = () => {
  return (
    <Document 
      analytics={false}
      remoteFragments={{
        presetFragmentOptions: { 
          htmlDocumentParts: { tag: "5.0.0-uep1.beta.2" }
        }
      }}
    />
  );
};

export default ThisDocument;
