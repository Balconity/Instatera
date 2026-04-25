import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.gmailUser as string,
            pass: config.gmailAppPassword as string
        }
    })

    const body = await readBody(event)
    // Added giftType and treatment to the destructured body
    const { fromName, email, phone, toName, giftType, amount, treatment } = body

    // 1. Validate base fields
    if (!fromName || !email || !phone || !toName || !giftType) {
        throw createError({
            statusCode: 400, message: 'Sva polja za kontakt i ime primatelja su obavezna.'
        })
    }

    // 2. Validate conditional fields based on giftType
    if (giftType === 'amount' && !amount) {
        throw createError({
            statusCode: 400, message: 'Odabrali ste iznos, ali iznos nije unesen.'
        })
    }

    if (giftType === 'treatment' && !treatment) {
        throw createError({
            statusCode: 400, message: 'Odabrali ste tretman, ali tretman nije odabran.'
        })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        throw createError({
            statusCode: 400, message: 'Neispravna e-mail adresa.'
        })
    }

    // Generate dynamic HTML for the gift details based on what was selected
    const giftDetailsHtml = giftType === 'amount'
        ? `<p style="margin: 0.5rem 0; font-size: 1.25rem;">
          <strong>Iznos:</strong> <span style="color: #059669; font-weight: 800; font-size: 1.5rem;">${amount} €</span>
         </p>`
        : `<p style="margin: 0.5rem 0; font-size: 1.25rem;">
          <strong>Odabrani tretman:</strong> <span style="color: #059669; font-weight: 800; font-size: 1.25rem;">${treatment}</span>
         </p>`;

    try {
        await transporter.sendMail({
            from: `"In Statera Web" <${config.gmailUser}>`,
            to: config.contactEmail as string,
            replyTo: email,
            subject: `Novi upit za poklon bon: ${fromName}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937;">
          <h2 style="border-bottom: 2px solid #059669; padding-bottom: 0.5rem; color: #064e3b;">
            Nova narudžba poklon bona
          </h2>
          
          <table style="width:100%; margin-top: 1.5rem; border-collapse: collapse;">
            <tr>
              <td style="padding: 0.5rem 0; font-weight: 600; width: 140px; color: #4b5563;">Od koga (Kupac)</td>
              <td style="padding: 0.5rem 0; font-size: 1.1rem;">${fromName}</td>
            </tr>
            <tr>
              <td style="padding: 0.5rem 0; font-weight: 600; color: #4b5563;">E-mail kupca</td>
              <td style="padding: 0.5rem 0;">
                <a href="mailto:${email}" style="color: #059669; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 0.5rem 0; font-weight: 600; color: #4b5563;">Telefon</td>
              <td style="padding: 0.5rem 0;">
                <a href="tel:${phone}" style="color: #059669; text-decoration: none;">${phone}</a>
              </td>
            </tr>
          </table>

          <div style="margin-top: 2rem; background: #ecfdf5; padding: 1.5rem; border-radius: 8px; border: 1px solid #a7f3d0;">
            <p style="font-weight: 600; margin-top: 0; margin-bottom: 1rem; color: #065f46; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 0.05em;">
              Detalji bona
            </p>
            <p style="margin: 0.5rem 0; font-size: 1.1rem;">
              <strong>Za koga:</strong> ${toName}
            </p>
            ${giftDetailsHtml}
          </div>

          <p style="margin-top: 2rem; font-size: 0.85rem; color: #6b7280; text-align: center;">
            Ovaj upit je poslan putem forme za poklon bonove sa stranice instatera.hr.
          </p>
        </div>
      `
        })
    } catch (e) {
        console.error('Nodemailer Error:', e)
        throw createError({
            statusCode: 500, message: e instanceof Error ? e.message : 'Slanje nije uspjelo. Pokušajte ponovno kasnije.'
        })
    }

    return { success: true }
})