const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");
const APIKey =
  "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";

sgMail.setApiKey(APIKey);

admin.initializeApp();

const db = admin.firestore();

module.exports = {
  sendemail: functions.https.onCall((data, context) => {
    const msg = {
      to: data.to,
      from: "taylorrjens@gmail.com",
      subject: data.subject,
      template_id: "d-bf30cc683bd749caa03c7af78a96a075",
      dynamic_template_data: {
        name: data.name,
        Amount: data.Amount,
        url: data.url
      }
    };
    sgMail.send(msg);
    return "message sent";
  })
};
