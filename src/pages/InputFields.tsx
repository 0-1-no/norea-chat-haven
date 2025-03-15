import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { InputOTP } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Mail, Lock } from "lucide-react";

const InputFields = () => {
  return (
    <PageContainer title="Input Fields" showBackButton={false}>
      <div className="container max-w-6xl py-10 space-y-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Input Fields</h1>
          <p className="text-muted-foreground">
            Examples of different input fields in the Norea design system.
          </p>
        </div>

        <Separator />

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Standard Inputs</h2>
            <p className="text-muted-foreground">
              Basic text input fields for various data types.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email address" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="Password" />
              </div>
            </div>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Textarea</h2>
            <p className="text-muted-foreground">
              A multi-line text input control.
            </p>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter a description" />
            </div>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">OTP Input</h2>
            <p className="text-muted-foreground">
              One-Time Password input field for authentication.
            </p>

            <div className="space-y-2">
              <Label htmlFor="otp">OTP Code</Label>
              <InputOTP length={6} id="otp" />
            </div>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Input with Icons</h2>
            <p className="text-muted-foreground">
              Input fields with leading icons for enhanced context.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email-with-icon">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    id="email-with-icon"
                    placeholder="Email address"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password-with-icon">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="password"
                    id="password-with-icon"
                    placeholder="Password"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Disabled Input</h2>
            <p className="text-muted-foreground">
              A disabled input field that cannot be edited.
            </p>

            <div className="space-y-2">
              <Label htmlFor="disabled-input">Disabled Input</Label>
              <Input id="disabled-input" placeholder="This is disabled" disabled />
            </div>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Validation States</h2>
            <p className="text-muted-foreground">
              Input fields with different validation states.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="valid-input">Valid Input</Label>
                <Input type="text" id="valid-input" placeholder="Valid input" className="border-green-500" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="invalid-input">Invalid Input</Label>
                <Input type="text" id="invalid-input" placeholder="Invalid input" className="border-red-500" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageContainer>
  );
};

export default InputFields;
