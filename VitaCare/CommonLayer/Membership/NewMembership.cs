namespace VitaCare.CommonLayer.Membership
{
    public class NewMembershipRequest
    {
        public string FirstName{ get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string ContactNumber { get; set; }
        public DateOnly DOB { get; set; }
        public string AddressToDonate { get; set; }

    }
}
