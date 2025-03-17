
import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import { UserProfileLayout } from '@/components/profile/UserProfileLayout';
import { Gem, Mail, Apple, Award } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Settings: React.FC = () => {
  return (
    <DefaultLayout>
      <UserProfileLayout>
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Account Status */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Kontostatus</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-blue-200 bg-blue-50/30 dark:bg-blue-950/10 dark:border-blue-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gem className="h-5 w-5 text-blue-500" />
                    Norea PRO
                    <Badge className="ml-2 bg-blue-500">Nåværende</Badge>
                  </CardTitle>
                  <CardDescription>
                    Få tilgang til alle avanserte funksjoner og eksklusivt innhold
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-medium text-2xl">249 kr/mnd</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-blue-500" />
                      Ubegrenset tilgang til alle modeller
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-blue-500" />
                      Prioritert kundeservice
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-blue-500" />
                      Tilgang til beta-funksjoner
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Administrer abonnement
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Standard</CardTitle>
                  <CardDescription>
                    Grunnleggende funksjoner for daglig bruk
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-medium text-2xl">0 kr/mnd</div>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Begrenset tilgang til modeller
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Standard kundeservice
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Grunnleggende funksjoner
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" size="sm" className="w-full">
                    Nedgrader til standard
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Theme Settings */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Tema innstillinger</h2>
            <Card>
              <CardContent className="pt-6">
                <RadioGroup defaultValue="system">
                  <div className="flex items-center space-x-2 mb-4">
                    <RadioGroupItem value="light" id="theme-light" />
                    <Label htmlFor="theme-light">Dagmodus</Label>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <RadioGroupItem value="dark" id="theme-dark" />
                    <Label htmlFor="theme-dark">Nattmodus</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="system" id="theme-system" />
                    <Label htmlFor="theme-system">Følg systemet</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* Login Settings */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Innloggingsinnstillinger</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5" />
                      <div>
                        <p className="font-medium">E-post</p>
                        <p className="text-sm text-muted-foreground">john@example.com</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Administrer</Button>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div className="flex items-center gap-3">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      <div>
                        <p className="font-medium">Google</p>
                        <p className="text-sm text-muted-foreground">Tilkoblet</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Koble fra</Button>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div className="flex items-center gap-3">
                      <Apple className="h-5 w-5" />
                      <div>
                        <p className="font-medium">Apple</p>
                        <p className="text-sm text-muted-foreground">Ikke tilkoblet</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Koble til</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline">Avbryt</Button>
            <Button>Lagre innstillinger</Button>
          </div>
        </div>
      </UserProfileLayout>
    </DefaultLayout>
  );
};

export default Settings;
