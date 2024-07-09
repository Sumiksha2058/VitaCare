namespace VitaCare.CommonLayer.Models.Authentication
{
 
        public class RegisterRequest
        {
            public string UserEmail { get; set; }
            public string Password { get; set; }
            public string ConformPassword { get; set; }
        
        }


    

    public class RegisterReportResponse
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; } = string.Empty;
        public string UserEmail { get; set; }
        public string Password { get; set; }
    }
    public class RegistrationResult
    {
        public bool Success { get; set; }
        public string ErrorMessage { get; set; }
    }

}
