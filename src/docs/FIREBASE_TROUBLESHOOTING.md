
# Firebase Troubleshooting Information

## Security Center Permissions Issue

### Principal Information
- Principal: info@kwattz.com
- Resource: 768430026081
- Troubleshooting URL: [Google Cloud IAM Troubleshooter](https://console.cloud.google.com/iam-admin/troubleshooter;permissions=securitycenter.containerthreatdetectionsettings.calculate,securitycenter.containerthreatdetectionsettings.get,securitycenter.eventthreatdetectionsettings.calculate,securitycenter.eventthreatdetectionsettings.get,securitycenter.rapidvulnerabilitydetectionsettings.calculate;principal=info@kwattz.com;resources=%2F%2Fcloudresourcemanager.googleapis.com%2Forganizations%2F768430026081,%2F%2Fcloudresourcemanager.googleapis.com%2Forganizations%2F768430026081,%2F%2Fcloudresourcemanager.googleapis.com%2Forganizations%2F768430026081,%2F%2Fcloudresourcemanager.googleapis.com%2Forganizations%2F768430026081,%2F%2Fcloudresourcemanager.googleapis.com%2Forganizations%2F768430026081/result)

### Missing Permissions
The following permissions are missing and need to be granted:
- securitycenter.containerthreatdetectionsettings.calculate
- securitycenter.containerthreatdetectionsettings.get
- securitycenter.eventthreatdetectionsettings.calculate
- securitycenter.eventthreatdetectionsettings.get
- securitycenter.rapidvulnerabilitydetectionsettings.calculate
- securitycenter.rapidvulnerabilitydetectionsettings.get
- securitycenter.securitycentersettings.get
- securitycenter.securityhealthanalyticssettings.calculate
- securitycenter.securityhealthanalyticssettings.get
- securitycenter.subscription.get
- securitycenter.userinterfacemetadata.get
- securitycenter.virtualmachinethreatdetectionsettings.calculate
- securitycenter.virtualmachinethreatdetectionsettings.get
- securitycenter.websecurityscannersettings.calculate
- securitycenter.websecurityscannersettings.get

## Resolution Steps

To resolve these permission issues:

1. Go to the [Google Cloud IAM & Admin page](https://console.cloud.google.com/iam-admin)
2. Locate the service account or user (info@kwattz.com)
3. Add the "Security Center Admin" role or specifically add the missing permissions listed above
4. Wait a few minutes for the permissions to propagate

## Additional Resources
- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [Google Cloud IAM Documentation](https://cloud.google.com/iam/docs)
