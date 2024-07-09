using System;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using VitaCare.CommonLayer.Models.Authentication;

namespace VitaCare.RepositoryLayer.Authentication
{
    public class AuthenticationRL : IAuthenticationRL
    {
        private readonly IConfiguration _configuration;
        private readonly SqlConnection _sqlConnection;

        public AuthenticationRL(IConfiguration configuration)
        {
            _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
            _sqlConnection = new SqlConnection(_configuration.GetConnectionString("DBSettingConnection"));
        }

        public async Task<bool> ConfirmEmail(string userId, string code)
        {
            // Implement email confirmation logic using userId and code
            try
            {
                // Example: Update database to set EmailConfirmed = true for the given userId and confirmation code
                string sqlUpdate = "UPDATE Users SET EmailConfirmed = 1 WHERE UserId = @UserId AND ConfirmationCode = @ConfirmationCode";

                using (SqlCommand sqlCommand = new SqlCommand(sqlUpdate, _sqlConnection))
                {
                    sqlCommand.Parameters.AddWithValue("@UserId", userId);
                    sqlCommand.Parameters.AddWithValue("@ConfirmationCode", code);

                    await _sqlConnection.OpenAsync();
                    int rowsAffected = await sqlCommand.ExecuteNonQueryAsync();

                    return rowsAffected > 0;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error confirming email: {ex.Message}");
                // Log or handle the exception as needed
                throw; // Propagate the exception or return false based on your error handling strategy
            }
            finally
            {
                _sqlConnection.Close();
            }
        }

        public async Task<bool> RegisterRecord(RegisterRequest request)
        {
            try
            {
                // Validate password and confirm password match
                if (request.Password != request.ConformPassword)
                {
                    throw new ArgumentException("Passwords do not match. Please try again.");
                }

                // Generate confirmation code
                string confirmationCode = GenerateConfirmationCode();

                // Insert user details into the database
                string sqlInsert = @"
                    INSERT INTO Users (UserEmail, PasswordHash, ConfirmationCode, EmailConfirmed)
                    VALUES (@UserEmail, @PasswordHash, @ConfirmationCode, 0)";

                using (SqlCommand sqlCommand = new SqlCommand(sqlInsert, _sqlConnection))
                {
                    // Example: Hash password before storing in database (use a proper hashing library)
                    string hashedPassword = HashPassword(request.Password);

                    sqlCommand.Parameters.AddWithValue("@UserEmail", request.UserEmail);
                    sqlCommand.Parameters.AddWithValue("@PasswordHash", hashedPassword);
                    sqlCommand.Parameters.AddWithValue("@ConfirmationCode", confirmationCode);

                    await _sqlConnection.OpenAsync();
                    int rowsAffected = await sqlCommand.ExecuteNonQueryAsync();

                    return rowsAffected > 0;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error registering user: {ex.Message}");
                // Log or handle the exception as needed
                throw; // Propagate the exception or return false based on your error handling strategy
            }
            finally
            {
                _sqlConnection.Close();
            }
        }

        // Method to generate a random confirmation code
        private string GenerateConfirmationCode()
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var random = new Random();
            var confirmationCode = new string(Enumerable.Repeat(chars, 8)
                .Select(s => s[random.Next(s.Length)]).ToArray());
            return confirmationCode;
        }

        // Example method for hashing passwords (replace with a proper hashing implementation)
        private string HashPassword(string password)
        {
            // Replace with a secure password hashing implementation (e.g., BCrypt, Argon2)
            // Example using simple hash (not secure, for demonstration only)
            return password.GetHashCode().ToString();
        }
    }
}
