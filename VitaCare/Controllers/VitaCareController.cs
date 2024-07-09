using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using VitaCare.CommonLayer.Models.Authentication;
using VitaCare.ServiceLayer.Authentication;

[Route("api/[controller]")]
[ApiController]
public class VitaCareController : ControllerBase
{
    private readonly IAuthenticationSL _authenticationService;

    public VitaCareController(IAuthenticationSL authenticationService)
    {
        _authenticationService = authenticationService ?? throw new ArgumentNullException(nameof(authenticationService));
    }

    [HttpPost("RegisterRecord")]
    public async Task<IActionResult> RegisterRecord([FromBody] RegisterRequest request)
    {
        try
        {
            RegistrationResult registrationResult = await _authenticationService.RegisterAsync(request);
            if (registrationResult.Success)
            {
                return Ok("User registered successfully.");
            }
            else
            {
                return BadRequest($"User registration failed: {registrationResult.ErrorMessage}");
            }
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    [HttpGet("confirm-email")]
    public async Task<IActionResult> ConfirmEmail(string userId, string code)
    {
        try
        {
            bool confirmationResult = await _authenticationService.ConfirmEmail(userId, code);
            if (confirmationResult)
            {
                return Ok("Email confirmed successfully.");
            }
            else
            {
                return BadRequest("Failed to confirm email. Invalid code or user ID.");
            }
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }
}
