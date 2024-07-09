using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Net;
using System.Threading.Tasks;

public class EmailService : IEmailService
{
    private readonly string _sendGridApiKey;

    public EmailService(string sendGridApiKey)
    {
        _sendGridApiKey = sendGridApiKey ?? throw new ArgumentNullException(nameof(sendGridApiKey));
    }

    public async Task SendVerificationEmail(string userEmail, string userId, string confirmationCode)
    {
        var client = new SendGridClient(_sendGridApiKey);
        var from = new EmailAddress("npsumiksha@gmail.com", "VitaCare");
        var subject = "Verify Your Email Address";
        var to = new EmailAddress(userEmail);
        var plainTextContent = $"Click the following link to verify your email: https://sumiksha.com.np/verify-email?userId={userId}&code={confirmationCode}";
        var htmlContent = $"Click the following link to verify your email: <a href='https://sumiksha.com.np/verify-email?userId={userId}&code={confirmationCode}'>Verify Email</a>";
        var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);

        try
        {
            var response = await client.SendEmailAsync(msg);
            if (response.StatusCode != HttpStatusCode.OK && response.StatusCode != HttpStatusCode.Accepted)
            {
                // Log the response status code for debugging
                Console.WriteLine($"Failed to send email. Status code: {response.StatusCode}");
                throw new Exception($"Failed to send email: {response.StatusCode}");
            }
            else
            {
                Console.WriteLine("Email sent successfully.");
            }
        }
        catch (Exception ex)
        {
            // Log the exception message for debugging
            Console.WriteLine($"An error occurred while sending the email: {ex.Message}");
            throw;
        }
    }
}
