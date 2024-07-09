using VitaCare.CommonLayer.Models.Authentication;

public interface IAuthenticationSL
{
    Task<RegistrationResult> RegisterAsync(RegisterRequest request);
    Task<bool> ConfirmEmail(string userId, string code);
}
