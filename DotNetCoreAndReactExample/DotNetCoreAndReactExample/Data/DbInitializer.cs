using DotNetCoreAndReactExample.Models;
using System;
using System.Linq;

namespace DotNetCoreAndReactExample.Data
{
    public static class DbInitializer
    {
        public static void Initialize(SchoolContext context)
        {
            // Ensures that the database exists
            context.Database.EnsureCreated();
            // Look for any students.
            if (context.Students.Any()) { return; }
            var students = new Student[]
            {
                new Student{
                    FirstMidName ="Carson",
                    LastName ="Alexander",
                    EnrollmentDate =DateTime.Parse("2005-09-01")
                },
                new Student{FirstMidName="Meredith",LastName="Alonso",EnrollmentDate=DateTime.Parse("2002-09-01")},
            };
            foreach (Student s in students)
            {
                context.Students.Add(s);
            }
            context.SaveChanges();
        }
    }
}
