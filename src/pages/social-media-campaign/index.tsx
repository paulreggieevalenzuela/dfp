import SocialMediaCampaignLayout from "@/components/layouts/SocialMediaCampaignLayout";
import SocialMediaCampaignUpdates from "@/components/social-media-campaign/SocialMediaCampaignUpdates";
import SocialMediaTabs from "@/components/social-media-campaign/SocialMediaTabs";

import data from './social-media-mock-data.json';
export default function Page() {
  return <SocialMediaCampaignLayout>
    <SocialMediaTabs header={data.header} index={0}>
      <SocialMediaCampaignUpdates />
    </SocialMediaTabs>
  </SocialMediaCampaignLayout>
}