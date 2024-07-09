using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using VitaCare.CommonLayer.Models.Authentication;

[Route("api/[controller]")]
[ApiController]
public class VitaCareController : ControllerBase
{
    private readonly IAuthenticationSL _authenticationService;


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

   
    }

