# GTM Container Import Instructions

The `gtm-container.json` file contains a pre-built GTM container with:
- GA4 Configuration tag
- 4 GA4 event tags (book_consultation_click, phone_click, email_click, form_submit)
- Meta Pixel base + Lead event
- TikTok Pixel base
- Microsoft Clarity
- 4 triggers (link clicks + custom form-submit event)
- 4 user-defined variables (your IDs)
- Consent Mode v2 settings on every tag

## How to import

1. Create your GTM container (Plan task 8.1)
2. GTM → **Admin → Import Container**
3. Choose `gtm-container.json`
4. Workspace: **New workspace** → name "Initial Import"
5. Import option: **Merge → Overwrite conflicting tags, triggers, and variables**
6. Click **Confirm**

## Search-and-replace (one-time)

After import, before publishing, edit each of the 4 user-defined variables and replace `REPLACE` / `G-REPLACE` with your real IDs from `info.md`:

| Variable | Replace with |
|---|---|
| GA4_MEASUREMENT_ID | `G-XXXXXXXXXX` (from GA4 setup) |
| META_PIXEL_ID | Your Meta Pixel ID |
| TIKTOK_PIXEL_ID | Your TikTok Pixel ID |
| CLARITY_PROJECT_ID | Your Clarity Project ID |

Tags reference these variables — once the variables hold real values, every tag fires correctly.

## Form submission tracking

The container expects a `kesho_form_submit` dataLayer event. This is pushed automatically by the child theme's `functions.php` (the JS snippet at the bottom of the file). Any form submitted on the site will fire the GA4 `form_submit` event and Meta `Lead` event.

## Consent Mode

All marketing/analytics tags have `consentSettings.consentStatus = NEEDED`. They will not fire until Complianz pushes the right `default_consent` updates after user acceptance. This is fully GDPR-compliant out of the box.

If you want to test without consent during build, you can temporarily change consentStatus to `NOT_NEEDED` on individual tags — but **remember to revert before publishing**.

## Publishing

After import + variable replacement, do a **Preview** session via GTM, navigate the site in the preview window, verify all tags fire on the expected triggers, then **Submit → Publish**.
