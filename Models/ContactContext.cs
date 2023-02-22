using Microsoft.EntityFrameworkCore;

namespace blogdemo.Models;

public class ContactContext : DbContext
{
    public ContactContext(DbContextOptions<ContactContext> options)
        : base(options)
    {
    }

    public DbSet<Contact> Contacts { get; set; } = null!;
}