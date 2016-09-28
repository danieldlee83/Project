using StudentInfoApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.UI.WebControls;
using static System.Net.Mime.MediaTypeNames;

namespace StudentInfoApp.Controllers 
{
    public class ContactsController : ApiController
    {
        Contact[] contacts = new Contact[]
        {
            new Contact { Id = 1, Name = "Daniel Lee", Address = "12 Main St. SLC, UT", Age = 21, ContactNumber = "111-222-3333", Hobby = "Fishing" },
            new Contact { Id = 2, Name = "John Doe", Address = "13 State St. SLC, UT", Age = 25, ContactNumber = "444-555-6666", Hobby = "Running" },
            new Contact { Id = 3, Name = "Angelina Smith", Address = "14 Gummy St. SLC, UT", Age = 30, ContactNumber = "777-777-7777", Hobby = "Hiking" },
            new Contact { Id = 4, Name = "David Stone", Address = "15 Ocean View SLC, UT", Age = 33, ContactNumber = "333-222-3333", Hobby = "Biking" },
            new Contact { Id = 5, Name = "Bob Hudson", Address = "16 Utahstreet circle SLC, UT", Age = 35, ContactNumber = "555-999-6666", Hobby = "Cooking" },
            new Contact { Id = 6, Name = "Jacob Johnson", Address = "17 Parkland Dr. SLC, UT", Age = 28, ContactNumber = "777-777-7777", Hobby = "Traveling" }
        };

        [Route("api/contacts")]
        [HttpGet]
        public IEnumerable<Contact> GetAllContact()
        {
            return contacts;
        }

        [Route("api/contacts/{name}")]
        [HttpGet]
        public IHttpActionResult GetContactByName(string name)
        {
            var contact = contacts.FirstOrDefault((c) => c.Name == name);
            if (contact == null)
            {
                return NotFound();
            }
            return Ok(contact);
        }
    }
}
