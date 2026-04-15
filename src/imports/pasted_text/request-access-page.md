Design a Request Access page for Relay — a B2B AI voice agent startup. This page must be visually identical in design language to the Relay homepage: same fonts, same color tokens, same nav, same footer.
Brand & Visual System

Default theme: light. White background (#FFFFFF), near-black text (#0A0A0F), single accent blue (#2B5BE8).
Dark mode variant: background #0A0A0F, text #F0F0F4, blue shifts to #4A7AFF.
Typography: Geist (all headings, body, UI) + Geist Mono (labels, tags, small caps) + Instrument Serif italic (accent word in headline only).
No border-radius on buttons or input fields. No gradients. No illustrations.
All borders are 1px at #E5E5EA in light / rgba(255,255,255,0.07) in dark.
Blue used only for: accent labels, CTA buttons, hover states, active indicators.

Nav Bar

Fixed, 60px tall, white frosted background with 1px bottom border.
Left: Relay orbital logo mark (blue gradient ring, grey center dot) + wordmark "RELAY" in Geist 700.
Right: a plain text "← Back to Home" link in grey + theme toggle button (sun/moon icon, 36×36px, border, rounded 6px).
No full nav links needed — this is a standalone destination page.

Page Layout

Two-column split layout, full viewport height below nav.
Left column (~45% width): dark background (#080F1E) — context and trust panel.
Right column (~55% width): white/light background — the actual form.
A single 1px vertical border separates the two columns.

Left Column — Context Panel

Background always dark (#080F1E), regardless of light/dark mode toggle.
Subtle blue radial glow centered in the upper area.
Top section:

Small mono label in blue: "— EARLY ACCESS"
Large headline in Geist 800, white, ~48px, tight tracking: "Let's build this together."
Subtext in ~16px, rgba(255,255,255,0.5), line-height 1.7: "We're signing our first design partners now — contact centers willing to run Relay alongside their existing stack and measure the difference. No cost. Direct product input."


Middle section — 5 partner benefits, each as a row:

Small blue circle checkmark icon on the left
Benefit text in 13px rgba(255,255,255,0.65)
The 5 benefits: "White-glove onboarding — we configure Relay for your stack" / "Zero cost during the pilot period" / "Direct line to the product team — your feedback shapes the roadmap" / "AHT before/after measurement — we'll show you the data" / "Preferential pricing at commercial launch"
Rows separated by subtle 1px rgba(255,255,255,0.06) dividers


Bottom section — contact details, pinned to bottom of column:

Mono label "CONTACT" in small grey caps
Email: hello@relaycalls.ai (clickable, white, 15px Geist 500)
Phone: +1 (604) 000-0000 (white, 15px)
Location: Vancouver, BC (grey, 13px)
LinkedIn icon link (small, grey, inline)



Right Column — Form

Background: var(--bg) — white in light mode, #0A0A0F in dark mode.
Padding: 80px on all sides.
Top of form:

Mono label in blue: "— REQUEST ACCESS"
Heading in Geist 700 ~28px: "Tell us about your operation."
Subtext in 14px grey: "We'll follow up within one business day to set up a call."


Form fields (all full-width, stacked vertically, 20px gap between fields):

Row 1 (two columns, equal width, 16px gap): First Name field + Last Name field
Full-width: Work Email field
Full-width: Company / Organization field
Full-width: Job Title field
Full-width: dropdown — "Daily Call Volume" with options: Under 500 / 500–2,000 / 2,000–10,000 / Over 10,000
Full-width: dropdown — "Current Telephony Stack" with options: Twilio / Genesys / Avaya / Cisco / Amazon Connect / Five9 / Other
Full-width: textarea — "Anything we should know?" — min height 100px, placeholder: "Current AHT, main pain point, specific use case..."


All input fields: 1px border (#E5E5EA light / rgba(255,255,255,0.13) dark), no border-radius, padding 12px 16px, 14px Geist. On focus: border turns blue (#2B5BE8). Background matches page background.
Dropdown arrow: small custom SVG chevron right-aligned.
Submit button: full-width, solid blue (#2B5BE8), white text "Send Request →", Geist 500 14px, no border-radius, 14px 0 padding (height ~48px). Hover: darkens to #1A3FCC, lifts 1px with subtle shadow.
Below button: centered mono note in 10px grey: "No commitment required · Design partner slots limited · Built in Vancouver, BC"

Success State

After submit, the form area transitions to a centered success message:

Blue circle with white checkmark icon (48×48px)
Heading: "Request received." in Geist 700 20px
Body: "We'll be in touch within one business day. In the meantime, explore the roadmap or feature list." with inline text links on "roadmap" and "feature list" in blue.



Footer

Same as homepage: 1px top border, single row, 28px padding.
Logo left / "© 2025 Relay Technologies Inc. · Vancouver, BC" in Geist Mono 10px center / three links right: Contact · Roadmap · Home.

Design Rules

No rounded corners on input fields, buttons, or cards. 2px max on tags only.
No stock photos or illustrations.
Blue appears only on: the label, submit button, focus ring on inputs, checkmark icons, and inline links.
Form fields never have a filled/colored background — always transparent against the page background.
Left panel stays dark regardless of theme toggle — it is a permanent dark surface.
Mobile (below 768px): two columns collapse to single column — left panel becomes a compact top banner showing only the headline and subtext, form fills the rest of the screen below it.