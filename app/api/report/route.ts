import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      address,
      chain,
      scamType,
      description,
      evidence,
      contactEmail,
    } = body;

    // Validate required fields
    if (!address || !chain || !scamType || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get recipient email from environment variable or use a default
    const recipientEmail = process.env.REPORT_RECIPIENT_EMAIL || "reports@blocksafespace.com";

    // Format the email content
    const emailContent = `
New Scam Report Submitted

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WALLET/CONTRACT ADDRESS:
${address}

BLOCKCHAIN NETWORK:
${Array.isArray(chain) ? chain.join(", ") : chain}

SCAM TYPE:
${scamType}

DESCRIPTION:
${description}

${evidence ? `\nEVIDENCE LINKS:\n${evidence.split('\n').map((link: string) => `- ${link.trim()}`).join('\n')}` : ''}

${contactEmail ? `\nCONTACT EMAIL:\n${contactEmail}` : '\nCONTACT EMAIL:\nNot provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted at: ${new Date().toLocaleString()}
    `.trim();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: recipientEmail,
      subject: `New Scam Report: ${scamType} on ${Array.isArray(chain) ? chain.join(", ") : chain}`,
      text: emailContent,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-top: none;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: 600;
                color: #667eea;
                margin-bottom: 5px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .field-value {
                background: white;
                padding: 12px;
                border-radius: 6px;
                border-left: 3px solid #667eea;
                word-break: break-all;
                font-size: 14px;
              }
              .address {
                font-family: 'Courier New', monospace;
                font-size: 13px;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                font-size: 12px;
                color: #6b7280;
                text-align: center;
              }
              .badge {
                display: inline-block;
                padding: 4px 12px;
                background: #667eea;
                color: white;
                border-radius: 12px;
                font-size: 12px;
                font-weight: 500;
                margin-right: 8px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">🛡️ New Scam Report</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Blocksafespace Report Submission</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Wallet/Contract Address</div>
                <div class="field-value address">${address}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Blockchain Network</div>
                <div class="field-value">
                  <span class="badge">${Array.isArray(chain) ? chain.join("</span><span class=\"badge\">") : chain}</span>
                </div>
              </div>
              
              <div class="field">
                <div class="field-label">Scam Type</div>
                <div class="field-value">${scamType}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Description</div>
                <div class="field-value">${description.replace(/\n/g, '<br>')}</div>
              </div>
              
              ${evidence ? `
              <div class="field">
                <div class="field-label">Evidence Links</div>
                <div class="field-value">
                  ${evidence.split('\n').filter((link: string) => link.trim()).map((link: string) => 
                    `<a href="${link.trim()}" style="color: #667eea; text-decoration: none; display: block; margin-bottom: 8px;">${link.trim()}</a>`
                  ).join('')}
                </div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="field-label">Contact Email</div>
                <div class="field-value">${contactEmail || '<em style="color: #9ca3af;">Not provided</em>'}</div>
              </div>
              
              <div class="footer">
                <p>Submitted on ${new Date().toLocaleString()}</p>
                <p>This is an automated notification from Blocksafespace</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
