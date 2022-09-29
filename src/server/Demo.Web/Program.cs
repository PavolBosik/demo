using Demo.DataAccess.Repositories;
using Demo.Domain;
using Demo.Web.GraphQL;

var builder = WebApplication.CreateBuilder(args);

// REST API
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(
    options => options.AddPolicy("allowAll", policyBuilder =>
    {
        policyBuilder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    }));

builder.Services.AddTransient<IRepository<Foo>, FooRepository>();

// GraphQL
builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors("allowAll");
}

app.UseAuthorization();

app.MapControllers();
app.MapGraphQL();

app.Run();
