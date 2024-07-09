
using VitaCare.RepositoryLayer.Authentication;
using VitaCare.ServiceLayer.Authentication;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IAuthenticationSL, AuthenticationSL>();
builder.Services.AddScoped<IAuthenticationRL, AuthenticationRL>();
var sendGridApiKey = builder.Configuration["SendGrid:ApiKey"];
builder.Services.AddScoped<IEmailService>(provider => new EmailService(sendGridApiKey));



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
