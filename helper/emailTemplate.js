export const verificationEmailTemplate = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #4caf50;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .body {
            padding: 20px;
            color: #333333;
            line-height: 1.6;
        }
        .otp {
            font-size: 24px;
            font-weight: bold;
            color: #4caf50;
            text-align: center;
            margin: 20px 0;
            padding: 10px;
            border: 1px dashed #4caf50;
            background-color: #f9fff9;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f4f4f9;
            font-size: 14px;
            color: #888888;
        }
        .footer a {
            color: #4caf50;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <h1>Email Verification</h1>
        </div>

        <!-- Body -->
        <div class="body">
            <p>Dear <strong>{{name}}</strong>,</p>
            <p>Thank you for registering with us! To complete your email verification, please use the one-time password (OTP) provided below:</p>
            <div class="otp">{{otp}}</div>
            <p>Thank you,<br>The Support Team</p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>Need help? <a href="mailto:support@example.com">Contact us</a></p>
            <p>&copy; 2025 Magenta Blogs. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`

export const welcomeEmailTemplate = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #007bff;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .body {
            padding: 20px;
            color: #333333;
            line-height: 1.6;
        }
        .highlight {
            color: #007bff;
            font-weight: bold;
        }
        .cta {
            display: block;
            width: fit-content;
            margin: 20px auto;
            padding: 10px 20px;
            background-color: #007bff;
            color: #ffffff;
            text-align: center;
            text-decoration: none;
            border-radius: 4px;
            font-size: 16px;
        }
        .cta:hover {
            background-color: #0056b3;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f1f1f1;
            font-size: 14px;
            color: #888888;
        }
        .footer a {
            color: #007bff;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <h1>Welcome to Magenta Blogs!</h1>
        </div>

        <!-- Body -->
        <div class="body">
            <p>Hi <strong>{{name}}</strong>,</p>
            <p>We’re thrilled to have you on board! Thank you for signing up for <span class="highlight">Magenta Blogs</span>. Get ready to explore all the amazing features we have to offer.</p>
            <p>If you have any questions or need assistance, don’t hesitate to reach out to our support team. We’re here to help you make the most of your experience.</p>
            <a href="[CTA_Link]" class="cta">Get Started</a>
            <p>Enjoy your journey,<br>The Magenta Blogs Team</p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>Need help? <a href="mailto:support@example.com">Contact us</a></p>
            <p>&copy; 2025 Magenta Blogs. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`

export const passwordResetEmailTemplate = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #007bff;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .body {
            padding: 20px;
            color: #333333;
            line-height: 1.6;
        }
        .highlight {
            color: #007bff;
            font-weight: bold;
        }
        .otp {
            display: block;
            font-size: 24px;
            text-align: center;
            margin: 20px 0;
            padding: 10px;
            background-color: #f1f1f1;
            border-radius: 8px;
            color: #333333;
            font-weight: bold;
            letter-spacing: 2px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f1f1f1;
            font-size: 14px;
            color: #888888;
        }
        .footer a {
            color: #007bff;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <h1>Reset Your Password</h1>
        </div>

        <!-- Body -->
        <div class="body">
            <p>Hi <strong>{{name}}</strong>,</p>
            <p>We received a request to reset your password for <span class="highlight">Magenta Blogs</span>. Use the OTP below to reset your password:</p>
            <div class="otp">{{otp}}</div>
            <p>Please enter this OTP on the password reset page. It will expire in <strong>10 minutes</strong>.</p>
            <p>If you didn’t request a password reset, you can safely ignore this email. Your account will remain secure.</p>
            <p>Best regards,<br>The Magenta Blogs Team</p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>Need help? <a href="mailto:support@example.com">Contact us</a></p>
            <p>&copy; 2025 Magenta Blogs. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`