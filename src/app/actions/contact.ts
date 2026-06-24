'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactPayload = {
  name: string
  email: string
  type: string
  message: string
}

export async function submitContact(data: ContactPayload) {
  const { name, email, type, message } = data

  if (!name.trim() || !email.trim() || !message.trim()) {
    return { error: 'Please fill in all required fields.' }
  }

  const projectLabel =
    type === 'website'
      ? 'Website design & development'
      : type === 'saas'
        ? 'SaaS or web application'
        : type === 'not-sure'
          ? 'Not sure yet'
          : 'Not specified'

  try {
    await resend.emails.send({
      from: 'ClearStack <hello@clearstack.co.nz>',
      to: 'hello@clearstack.co.nz',
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectLabel}`,
        '',
        message,
      ].join('\n'),
    })

    return { success: true }
  } catch {
    return { error: 'Something went wrong. Please try again.' }
  }
}
