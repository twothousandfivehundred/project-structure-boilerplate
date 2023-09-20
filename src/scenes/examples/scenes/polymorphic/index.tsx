import { memo } from 'react';
import DisplayRenderedOutput from '~/components/DisplayRenderedOutput';
import Link from '~/components/Link';
import Typography from '~/components/Typography';
import Box from './components/Box';
import BoxYucky from './components/BoxYucky';

const ExamplePolymorphic = () => (
  <DisplayRenderedOutput>
    <BoxYucky>Box content</BoxYucky>
    {/* <BoxYucky isSection>Box content isSection</BoxYucky> */}
    {/* <BoxYucky isMain>Box content isMain</BoxYucky> */}

    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}

    {/* <BoxYucky as="main">Box content as main</BoxYucky> */}

    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}

    {/* <BoxYucky as="foo">Box content as foo</BoxYucky>
    <Link >Link content</Link>
    <BoxYucky as={Link}>Box content as Link</BoxYucky> */}

    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}

    {/* <Box>Box content</Box>
    <Box as="foo">Box content as foo</Box>
    <Link>Link content</Link>
    <Box as={Link} href="/contact">
      Box content as Link
    </Box> */}

    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}

    {/* <Typography>Typography content</Typography> */}
    {/* <Typography as="h1">Typography content as h1</Typography> */}
    {/* <Typography as="a" href="https://google.com">
      Typography content as anchor
    </Typography> */}
    {/* <Typography as="button" type="button">
      Typography content as button
    </Typography> */}
  </DisplayRenderedOutput>
);

export default memo(ExamplePolymorphic);
