using System;
using System.Data.SqlClient;
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

        public async Task<bool> RegisterRecord(RegisterRequest request)
        {
            try
            {
                // Validate password and confirm password match
                if (request.Password != request.ConformPassword)
                {
                    throw new ArgumentException("Passwords do not match. Please try again.");
                }

                // Ensure the SQL connection is closed before opening it
                if (_sqlConnection.State == System.Data.ConnectionState.Open)
                {
                    _sqlConnection.Close();
                }

                // Insert user details into the database
                string sqlInsert = @"
                    INSERT INTO Users (UserEmail, PasswordHash, ConformPassword)
                    VALUES (@UserEmail, @PasswordHash, @ConformPassword)";

                using (SqlCommand sqlCommand = new SqlCommand(sqlInsert, _sqlConnection))
                {
                    // Example: Hash password before storing in database (use a proper hashing library)
                    string hashedPassword = HashPassword(request.Password);
                    string hashedConformPassword = HashPassword(request.ConformPassword);

                    sqlCommand.Parameters.AddWithValue("@UserEmail", request.UserEmail);
                    sqlCommand.Parameters.AddWithValue("@PasswordHash", hashedPassword);
                    sqlCommand.Parameters.AddWithValue("@ConformPassword", hashedConformPassword);

                    await _sqlConnection.OpenAsync();
                    int rowsAffected = await sqlCommand.ExecuteNonQueryAsync();
                    Console.WriteLine($"Rows affected: {rowsAffected}");

                    if (rowsAffected == 0)
                    {
                        throw new Exception("No rows inserted.");
                    }

                    return true;
                }
            }
            catch (SqlException sqlEx)
            {
                Console.WriteLine($"SQL error registering user: {sqlEx.Message}");
                // Log or handle the exception as needed
                throw; // Propagate the exception or return false based on your error handling strategy
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error registering user: {ex.Message}");
                // Log or handle the exception as needed
                throw; // Propagate the exception or return false based on your error handling strategy
            }
            finally
            {
                await _sqlConnection.CloseAsync();
            }
        }

        private string HashPassword(string password)
        {
            // Replace with a secure password hashing implementation (e.g., BCrypt, Argon2)
            // Example using simple hash (not secure, for demonstration only)
            return password.GetHashCode().ToString();
        }
    }
}
