import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="An iOS Widgets app for your favorite NFTs."
      subtitle="Start your Free Trial."
      button={
        <Link href="https://itunes.apple.com/app/id6443432429">
          <a>
            <Button>Get Started</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
