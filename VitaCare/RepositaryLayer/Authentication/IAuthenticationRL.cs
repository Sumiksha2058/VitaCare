using System.Threading.Tasks;
using VitaCare.CommonLayer.Models.Authentication;

    public interface IAuthenticationRL
    {
        Task<bool> RegisterRecord(RegisterRequest request);
   
    }


