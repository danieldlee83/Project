using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StudentInfoApp.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string ContactNumber { get; set; }
        public string Hobby { get; set; }
    }
}