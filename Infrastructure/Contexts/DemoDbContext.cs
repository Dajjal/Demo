using Core.Domain.Models.Contracts;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Contexts;

public class DemoDbContext(DbContextOptions<DemoDbContext> options) : DbContext(options)
{
    public DbSet<MarkupModel> MarkupModels { get; set; }
}