'use client';

import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AdminDashboard({ onLogout }) {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark">
      {/* Header */}
      <div className="bg-white dark:bg-brand-dark border-b border-brand-forest/20 dark:border-brand-teal/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-brand-forest dark:text-brand-teal">
                Admin Dashboard
              </h1>
              <p className="text-sm text-brand-forest/70 dark:text-brand-light/70">
                Welcome back, Derek!
              </p>
            </div>
            <Button
              variant="destructive"
              onClick={async () => {
                const result = await logout();
                if (result.success) {
                  onLogout();
                }
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content with Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Site Visits</CardDescription>
                  <CardTitle className="text-3xl text-brand-teal">1,234</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">This month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Contact Forms</CardDescription>
                  <CardTitle className="text-3xl text-brand-forest dark:text-brand-teal">56</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Pending responses</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Projects</CardDescription>
                  <CardTitle className="text-3xl text-brand-brown">12</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Published</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span className="text-sm text-foreground">New contact form submission</span>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
                <Separator />
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-forest rounded-full"></div>
                  <span className="text-sm text-foreground">Portfolio project updated</span>
                  <span className="text-xs text-muted-foreground">1 day ago</span>
                </div>
                <Separator />
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-brown rounded-full"></div>
                  <span className="text-sm text-foreground">Blog post published</span>
                  <span className="text-xs text-muted-foreground">3 days ago</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
                <CardDescription>Manage your site content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-auto p-4 border-2 border-dashed hover:border-brand-teal"
                  >
                    <div className="text-center w-full">
                      <p className="text-sm font-medium">Manage Blog Posts</p>
                      <p className="text-xs text-muted-foreground">Create, edit, and publish</p>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-4 border-2 border-dashed hover:border-brand-teal"
                  >
                    <div className="text-center w-full">
                      <p className="text-sm font-medium">Portfolio Projects</p>
                      <p className="text-xs text-muted-foreground">Update project showcase</p>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-4 border-2 border-dashed hover:border-brand-teal"
                  >
                    <div className="text-center w-full">
                      <p className="text-sm font-medium">Contact Messages</p>
                      <p className="text-xs text-muted-foreground">Review and respond</p>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-4 border-2 border-dashed hover:border-brand-teal"
                    asChild
                  >
                    <Link href="/admin/aboutMe">
                      <div className="text-center w-full">
                        <p className="text-sm font-medium">Profile Information</p>
                        <p className="text-xs text-muted-foreground">Update bio and details</p>
                      </div>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Site Analytics</CardTitle>
                <CardDescription>View your site performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Page Views</span>
                  <span className="text-sm font-medium">2,456 this month</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Unique Visitors</span>
                  <span className="text-sm font-medium">1,234 this month</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Bounce Rate</span>
                  <span className="text-sm font-medium">32%</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Avg Session Duration</span>
                  <span className="text-sm font-medium">2m 34s</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Admin Settings</CardTitle>
                <CardDescription>Configure your site settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="siteTitle">Site Title</Label>
                  <Input
                    id="siteTitle"
                    defaultValue="Derek Malone: Personal Bio Site"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="metaDescription">Meta Description</Label>
                  <Textarea
                    id="metaDescription"
                    rows={3}
                    defaultValue="Derek Malone's Personal Bio Site"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="notifications"
                    className="h-4 w-4 rounded border-brand-forest/30"
                  />
                  <Label htmlFor="notifications" className="font-normal">
                    Enable contact form notifications
                  </Label>
                </div>
                <Button className="bg-brand-forest hover:bg-brand-teal text-brand-light">
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
