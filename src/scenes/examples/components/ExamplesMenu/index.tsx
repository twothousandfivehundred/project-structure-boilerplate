import { memo } from 'react';
import { examples } from '../../constants';
import Typography from '~/components/Typography';
import InternalLink from '~/components/Link/components/InternalLink';
import Stack from '~/components/Stack';
import routes from '~/constants/routes';
import useExamplesMenu from './hooks/useExamplesMenu';

const ExamplesMenu = () => {
  const { constructHref } = useExamplesMenu();
  return (
    <Stack as="ul" direction="row">
      {examples.map(({ slug, title }) => (
        <li key={slug}>
          <Typography
            as={InternalLink}
            href={constructHref(slug)}
            title={title}
          >
            {title}
          </Typography>
        </li>
      ))}
    </Stack>
  );
};

export default memo(ExamplesMenu);
