# EmailJS Setup Guide

## Steps to Set Up EmailJS (Free Service - 200 emails/month)

1. **Sign Up for EmailJS** (Free)
   - Go to: https://www.emailjs.com/
   - Sign up for a free account

2. **Create an Email Service**
   - Go to: https://dashboard.emailjs.com/admin/integration
   - Click "Add New Service"
   - Choose "Gmail" (or your email provider)
   - Connect your Gmail account (endeveloper09@gmail.com)
   - Save the Service ID (e.g., `service_xxxxx`)

3. **Create an Email Template**
   - Go to: https://dashboard.emailjs.com/admin/template
   - Click "Create New Template"
   - Set up template with these variables:
     - `{{to_email}}` - Recipient email (ankitpandey90095@gmail.com)
     - `{{from_name}}` - Sender name
     - `{{from_email}}` - Sender email
     - `{{phone}}` - Phone number
     - `{{subject}}` - Subject
     - `{{message}}` - Message content
   - Save the Template ID (e.g., `template_xxxxx`)

4. **Get Your Public Key**
   - Go to: https://dashboard.emailjs.com/admin/account/general
   - Copy your Public Key

5. **Update the Contact Form**
   - Open: `app/contact/page.tsx`
   - Replace `YOUR_PUBLIC_KEY` with your actual Public Key (line 29 and 54)
   - Replace `service_dvanta` with your Service ID (line 52)
   - Replace `template_dvanta` with your Template ID (line 53)

6. **Test the Form**
   - Submit the contact form
   - Check ankitpandey90095@gmail.com for the email

## Template Example for EmailJS:

Subject: `Contact Form: {{subject}}`

Body:
```
New Contact Form Submission from DVANTA IT Academy

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the DVANTA IT Academy contact form.
```

That's it! No backend needed - everything works from the frontend!

