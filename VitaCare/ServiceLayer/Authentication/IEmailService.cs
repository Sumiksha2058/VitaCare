using System.Threading.Tasks;

public interface IEmailService
{
    Task SendVerificationEmail(string userEmail, string userId, string confirmationCode);
}
