using Microsoft.EntityFrameworkCore;

namespace blogdemo.Models;

public class ArticleContext : DbContext
{
    public TodoContext(DbContextOptions<ArticleContext> options)
        : base(options)
    {
    }

    public DbSet<Article> Articles { get; set; } = null!;
}