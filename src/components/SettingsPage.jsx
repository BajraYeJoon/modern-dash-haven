import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Settings</h2>
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="critical-alerts">Critical Patient Alerts</Label>
            <Switch id="critical-alerts" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="appointment-reminders">Appointment Reminders</Label>
            <Switch id="appointment-reminders" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Data Integration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="ehr-sync">Sync with EHR System</Label>
            <Switch id="ehr-sync" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="lab-results">Automatic Lab Results Import</Label>
            <Switch id="lab-results" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
