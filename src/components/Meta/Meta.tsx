import Head from 'next/head';

type metaNames = 'keywords';

type propertyNames = 'og:image';

interface IMetaItemProps {
  name?: metaNames;
  property?: propertyNames;
  content?: string;
}

export interface IMetaProps {
  title?: string;
  description?: string;
  metas?: IMetaItemProps[];
}

const Meta = ({ title, description, metas = [] }: IMetaProps) => {
  const getDescription = () => description ?? 'Tech Expert';

  const websiteName = 'Oliver Timothy';

  return (
    <Head>
      <title>
        {title && title !== websiteName
          ? `${title} - ${websiteName}`
          : `${websiteName} - ${getDescription()}`}
      </title>
      {[
        ...[
          { name: 'robots', content: 'index, follow' },
          {
            name: 'og:title',
            content: title ? `${title} - ${websiteName}` : `${websiteName} - ${getDescription()}`,
          },
          { name: 'description', content: getDescription() },
          { name: 'og:description', content: getDescription() },
          {
            name: 'keywords',
            content: 'Information Technology, IT, React, Django, Tech Expert, React Native',
          },
          { property: 'og:image', content: 'https://thukuwakogi.vercel.app/avant.jpg' },
        ],
        ...(metas as IMetaItemProps[]),
      ].map(props => (
        <meta key={props.name ?? props.property} {...props} />
      ))}
    </Head>
  );
};

export default Meta;
