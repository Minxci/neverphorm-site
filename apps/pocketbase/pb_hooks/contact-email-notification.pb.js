/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const name = e.record.get("name");
  const email = e.record.get("email");
  const subject = e.record.get("subject");
  const message = e.record.get("message");

  const message_obj = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: "projectneverphorm@gmail.com" }],
    subject: "New Contact: " + subject,
    html: "<p><strong>Name:</strong> " + name + "</p><p><strong>Email:</strong> " + email + "</p><p><strong>Subject:</strong> " + subject + "</p><p><strong>Message:</strong></p><p>" + message + "</p>",
    headers: {
      "Reply-To": email
    }
  });
  $app.newMailClient().send(message_obj);
  e.next();
}, "contact_submissions");