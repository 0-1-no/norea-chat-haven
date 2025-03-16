
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { ProfileCard } from '@/components/ui/profile-card';

const ProfileCardDemo = () => {
  return (
    <PageContainer title="Profile Card Demo" description="Demo of the new profile card component">
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-6">Profile Card Examples</h2>
        
        <div className="flex flex-wrap gap-12 items-center justify-center">
          {/* Main example card that matches the reference image */}
          <div className="relative h-[380px] w-[280px]">
            <ProfileCard
              name="Samantha Blake"
              tagline="Replica learning"
              imageSrc="/lovable-uploads/48c70b68-80c9-4b0e-964a-126502b28085.png"
              creatorName="Sophia Anson"
              creatorUsername="@sofi@"
              creatorImageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              backgroundColor="bg-gradient-to-r from-red-500 to-red-700"
              stackPosition="front"
              onClick={() => console.log("Card clicked")}
            />
            
            <ProfileCard
              name="Isabella"
              tagline="Design assistant"
              imageSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              backgroundColor="bg-gradient-to-r from-slate-400 to-slate-500"
              stackPosition="middle"
              rotation={-2}
              className="absolute top-2 left-2"
            />
            
            <ProfileCard
              name="Michael Scott"
              tagline="Business guru"
              imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              backgroundColor="bg-gradient-to-r from-blue-400 to-blue-600"
              stackPosition="back"
              rotation={-6}
              className="absolute top-4 left-4"
            />
          </div>
          
          {/* Some additional examples with different colors */}
          <ProfileCard
            name="Emma Watson"
            tagline="AI Researcher"
            imageSrc="https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            creatorName="AI Labs"
            creatorUsername="@ailabs"
            creatorImageSrc="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            backgroundColor="bg-gradient-to-r from-purple-500 to-purple-700"
          />
          
          <ProfileCard
            name="Marcus Chen"
            tagline="Creative Director"
            imageSrc="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            creatorName="Design Studio"
            creatorUsername="@dstudio"
            creatorImageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            backgroundColor="bg-gradient-to-r from-green-500 to-emerald-700"
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default ProfileCardDemo;
