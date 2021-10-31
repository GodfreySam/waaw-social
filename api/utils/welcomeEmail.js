const sendEmail = require("../config/mailer");

const welcomeEmail = async (req, username, email, secretToken) => {
   const html = `
      welcome to WAAWChat, ${username}, we're excited to have you join us.
      <br/>
      <br/>
      You can copy and paste the following code  in the confirmation page 
      <br/>
      <br/>
      <strong>${secretToken}</strong>
      <br/>
      <br/>
      or click on the link below to activate your account.
       <br/>
       <br/>
       Confirmation Link: http://${req.headers.host}/user/confirm-account/${secretToken}
      <br/>
      <br/>
      WAAWChat will give you the best experience ever!!!!!
      <br/>
      <br/>
      Cheers,
      <br/>
      <srong>WAAWCHAT Team</strong>
   `;

   await sendEmail(
      'support@waawchat.com',
      email,
      'Welcome to WAAWChat',
      html
   );
}

module.exports = welcomeEmail;