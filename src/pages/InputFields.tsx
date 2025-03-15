
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { 
  Input,
  Textarea,
  Label,
  FormField
} from '@/components';
import { 
  InputOTP, 
  InputOTPGroup, 
  InputOTPSlot 
} from '@/components/ui/input-otp';

const InputFields = () => {
  return (
    <PageContainer title="Input Fields" showBackButton={true}>
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Text Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Standard Input</h3>
              <div className="space-y-2">
                <Label htmlFor="standard-input">Standard Input</Label>
                <Input id="standard-input" placeholder="Type here..." />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Disabled Input</h3>
              <div className="space-y-2">
                <Label htmlFor="disabled-input">Disabled Input</Label>
                <Input id="disabled-input" placeholder="Cannot edit..." disabled />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Required Input</h3>
              <div className="space-y-2">
                <Label htmlFor="required-input">Required Input <span className="text-destructive">*</span></Label>
                <Input id="required-input" placeholder="Must fill..." required />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Error Input</h3>
              <div className="space-y-2">
                <Label htmlFor="error-input" className="text-destructive">Error Input</Label>
                <Input id="error-input" placeholder="Something went wrong..." className="border-destructive focus-visible:ring-destructive" />
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">One-Time Password Input</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">OTP Input</h3>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Text Area</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="text-area">Multi-line Text Input</Label>
              <Textarea id="text-area" placeholder="Write a longer message here..." rows={4} />
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Form Field with Label</h2>
          <div className="w-full max-w-md space-y-4">
            <FormField
              label="Email"
              type="email"
              placeholder="Email address"
              required
              helperText="We'll never share your email"
            />
            <FormField
              label="Password"
              type="password"
              placeholder="Enter password"
              required
              helperText="Your password should be secure"
            />
          </div>
        </section>
      </div>
    </PageContainer>
  );
};

export default InputFields;
