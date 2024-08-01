using Ardalis.Specification;
using AutoMapper;
using Core.Application.Generics;
using Infrastructure.Contexts;
using Infrastructure.Generics;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure.ServiceExt;

public static class DemoServicesExtension
{
    public static IServiceCollection RegisterDemoServices(this IServiceCollection services, IConfiguration configuration)
    {
        #region Контекст Базы Данных

        services.AddDbContext<DemoDbContext>(options =>
            options.UseNpgsql(configuration.GetConnectionString("ConnectionString"),
                builder => builder.MigrationsAssembly(typeof(DemoDbContext).Assembly.FullName)));

        #endregion
        
        #region Внедрение зависимостей

        // Универсальный репозитори
        services.AddScoped(typeof(IRepositoryBase<>), typeof(GenericRepositoryImpl<>));
        // Универсальный сервис
        services.AddScoped(typeof(IGenericService<>), typeof(GenericServiceImpl<>));

        #endregion

        // Автомаппер
        services.AddScoped(typeof(IMapperBase), typeof(Mapper));
        services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

        return services;
    }
}