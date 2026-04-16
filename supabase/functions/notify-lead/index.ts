// DEPLOY: supabase functions deploy notify-lead
// SECRET: supabase secrets set RESEND_API_KEY=your_key_here
// WEBHOOK: set up Database Webhook in Supabase dashboard pointing to this function on INSERT to public.leads

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  try {
    // Parse the webhook payload
    const payload = await req.json()
    const record = payload.record

    if (!record) {
      console.error('No record in webhook payload')
      return new Response('No record data', { status: 400 })
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured')
      return new Response('Email service not configured', { status: 500 })
    }

    // Build email HTML
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0a0f; color: #f0f0f4; border-radius: 8px;">
        <div style="margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.1);">
          <p style="font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #4a7aff; margin: 0 0 8px 0; font-family: monospace;">RELAY — NEW LEAD</p>
          <h1 style="font-size: 24px; font-weight: 800; margin: 0; letter-spacing: -0.02em;">
            ${record.first_name} ${record.last_name}
          </h1>
          <p style="margin: 4px 0 0; color: rgba(255,255,255,0.5); font-size: 14px;">${record.company}</p>
        </div>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 10px 0; color: rgba(255,255,255,0.4); font-family: monospace; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; width: 160px; vertical-align: top;">Email</td>
            <td style="padding: 10px 0; color: #f0f0f4;">${record.email}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: rgba(255,255,255,0.4); font-family: monospace; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; width: 160px; vertical-align: top;">Job Title</td>
            <td style="padding: 10px 0; color: #f0f0f4;">${record.job_title || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: rgba(255,255,255,0.4); font-family: monospace; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; width: 160px; vertical-align: top;">Daily Call Volume</td>
            <td style="padding: 10px 0; color: #f0f0f4;">${record.call_volume || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: rgba(255,255,255,0.4); font-family: monospace; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; width: 160px; vertical-align: top;">Telephony Stack</td>
            <td style="padding: 10px 0; color: #f0f0f4;">${record.telephony_stack || 'Not specified'}</td>
          </tr>
          ${record.notes ? `
          <tr>
            <td style="padding: 10px 0; color: rgba(255,255,255,0.4); font-family: monospace; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Notes</td>
            <td style="padding: 10px 0; color: #f0f0f4; line-height: 1.6;">${record.notes}</td>
          </tr>
          ` : ''}
        </table>
        <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
          <a href="https://supabase.com/dashboard/project/szmfxbcvcumnzbxffmro/editor" style="display: inline-block; padding: 10px 20px; background: #2B5BE8; color: #fff; text-decoration: none; font-size: 13px; font-weight: 500; border-radius: 4px;">View in Supabase →</a>
        </div>
      </div>
    `

    // Send email via Resend
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Relay Contact Form <noreply@getrelay.now>',
        to: 'michael@getrelay.now',
        subject: `New design partner request — ${record.company}`,
        html: emailHtml,
      }),
    })

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text()
      console.error('Resend API error:', errorText)
      return new Response(JSON.stringify({ error: 'Failed to send email', details: errorText }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const resendData = await resendResponse.json()
    console.log('Email sent successfully:', resendData)

    return new Response(JSON.stringify({ success: true, emailId: resendData.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Edge Function error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error', message: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})
