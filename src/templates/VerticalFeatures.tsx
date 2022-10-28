import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Pin your NFTs to iPhone Home/Lock Screen."
    description="Free and No Ads."
  >
    <VerticalFeatureRow
      title="Pin Your favorite NFTs on iPhone Home Screen"
      description="Link your Ethereum accounts, config widget on Petit App, then NFT will move to your iPhone Home Screen."
      image="/assets/images/1.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Trak Your NFT Price, Anytime, AnyWhere"
      description="NFT Floor Price, Ethereum Price, Gas Fee and more..."
      image="/assets/images/2.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Watch your followed Ethereum NFT Accounts"
      description="Watch different NFT Accounts just use public address."
      image="/assets/images/3.jpg"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="Support iOS 16 LockScreen Widget"
      description="Watch your NFT price on the iPhone Lockscreen."
      image="/assets/images/4.jpg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
