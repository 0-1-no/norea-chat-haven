
import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import { UserProfileLayout } from '@/components/profile/UserProfileLayout';
import { Gem, Mail, Award } from 'lucide-react';
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
            <Card className="border-primary/10 bg-gradient-to-b from-background to-secondary/20">
              <CardContent className="pt-6">
                <RadioGroup defaultValue="system" className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-primary/5 transition-colors">
                    <RadioGroupItem value="light" id="theme-light" className="text-primary" />
                    <Label htmlFor="theme-light" className="flex items-center cursor-pointer">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <circle cx="12" cy="12" r="4"></circle>
                          <path d="M12 2v2"></path>
                          <path d="M12 20v2"></path>
                          <path d="m4.93 4.93 1.41 1.41"></path>
                          <path d="m17.66 17.66 1.41 1.41"></path>
                          <path d="M2 12h2"></path>
                          <path d="M20 12h2"></path>
                          <path d="m6.34 17.66-1.41 1.41"></path>
                          <path d="m19.07 4.93-1.41 1.41"></path>
                        </svg>
                      </div>
                      <span>Dagmodus</span>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-primary/5 transition-colors">
                    <RadioGroupItem value="dark" id="theme-dark" className="text-primary" />
                    <Label htmlFor="theme-dark" className="flex items-center cursor-pointer">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        </svg>
                      </div>
                      <span>Nattmodus</span>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-primary/5 transition-colors">
                    <RadioGroupItem value="system" id="theme-system" className="text-primary" />
                    <Label htmlFor="theme-system" className="flex items-center cursor-pointer">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                          <line x1="8" x2="16" y1="21" y2="21"></line>
                          <line x1="12" x2="12" y1="17" y2="21"></line>
                        </svg>
                      </div>
                      <span>Følg systemet</span>
                    </Label>
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
                        <p className="text-sm text-muted-foreground">sofia@example.com</p>
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
                      <svg className="h-5 w-5" viewBox="0 0 17 21" fill="currentColor">
                        <path d="M14.5 0h-12C1.1 0 0 1.1 0 2.5v16C0 19.9 1.1 21 2.5 21h12c1.4 0 2.5-1.1 2.5-2.5v-16C17 1.1 15.9 0 14.5 0zM8.5 19c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM14 15.5c0 .3-.2.5-.5.5h-10c-.3 0-.5-.2-.5-.5v-12c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12z" fill="#000000"/>
                      </svg>
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
