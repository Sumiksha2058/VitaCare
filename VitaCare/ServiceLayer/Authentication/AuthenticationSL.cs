using VitaCare.CommonLayer.Models.Authentication;

public class AuthenticationSL : IAuthenticationSL
{


    public async Task<RegistrationResult> RegisterAsync(RegisterRequest request)
    {
      
        if (request.Password != request.ConformPassword)
        {
            return new RegistrationResult
            {
                Success = false,
                ErrorMessage = "Passwords do not match."
            };
        }

        // Simulate asynchronous operation
        await Task.Delay(100);

        // Assume registration was successful
        return new RegistrationResult
        {
            Success = true,
            ErrorMessage = string.Empty
        };
    }


}
