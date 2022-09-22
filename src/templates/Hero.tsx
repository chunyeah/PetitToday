import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://itunes.apple.com/app/apple-store/id/6443432429">
            <a>App Store</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The iOS Widgets App for\n'}
            <span className="text-primary-500">NFT</span>
          </>
        }
        description="The easiest way to build a NFT Widget on your iPhone in seconds."
        button={
          <Link href="https://itunes.apple.com/app/apple-store/id/6443432429">
            <a>
              <Button xl>Download App</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
