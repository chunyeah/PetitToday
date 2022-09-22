import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section title="Move NFT to your iPhone Home/Lock Screen." description="">
    <VerticalFeatureRow
      title="Pin Your favorite NFTs on iPhone Home Screen"
      description="Link your Ethereum accounts, config widget on Petit App, then NFT will move to your iPhone Home Screen."
      image="/assets/images/1.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Five different widget type display for tracking NFT data."
      description="NFT Floor Price, Ethereum Price, Gas Fee and more..."
      image="/assets/images/2.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Watch your followed Ethereum NFT Accounts"
      description="Watch different NFT Accounts just use public address."
      image="/assets/images/3.png"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
