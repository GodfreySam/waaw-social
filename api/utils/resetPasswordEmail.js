const sendEmail = require("../config/mailer");

const resetPasswordEmail = async (req, username, email, secretToken) => {
	const html = `
     <h2>welcome to WAAWCHAT</h2>
      <strong>${username}, happy shopping.</strong>
      <br/>
      <br/>
      Here is your password reset token:
      <br/>
      <br/>
       <strong>${secretToken}</strong>
       <br/>
       <br/>
          WAAWChat will give you the best experience ever!!!!!
      <br/>
      <br/>
      Cheers,
      <br/>
       <srong>WAAWCHAT Team</strong>
      <br/>
      contact: support@waawchat.com
   `;

	 await sendEmail("support@waawchat.com", email, "Welcome to WAAWChat", html);
};

module.exports = resetPasswordEmail;
