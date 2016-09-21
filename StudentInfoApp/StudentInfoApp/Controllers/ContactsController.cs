using StudentInfoApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace StudentInfoApp.Controllers
{
    public class ContactsController : ApiController
    {
        Contact[] contacts = new Contact[]
        {
            new Contact { Id = 1, Name = "Daniel Lee", Age = 21, ContactNumber = "111-222-3333", Hobby = "Fishing" },
            new Contact { Id = 2, Name = "John Doe", Age = 25, ContactNumber = "444-555-6666", Hobby = "Running" },
            new Contact { Id = 3, Name = "Angelina Smith", Age = 30, ContactNumber = "777-777-7777", Hobby = "Hiking" },
            new Contact { Id = 4, Name = "David Stone", Age = 33, ContactNumber = "333-222-3333", Hobby = "Biking" },
            new Contact { Id = 5, Name = "Bob Hudson", Age = 35, ContactNumber = "555-999-6666", Hobby = "Cooking" },
            new Contact { Id = 6, Name = "Jacob Johnson", Age = 28, ContactNumber = "777-777-7777", Hobby = "Traveling" }
        };

        [Route("api/contacts")]
        [HttpGet]
        public IEnumerable<Contact> GetAllContact()
        {
            return contacts;
        }

        public IHttpActionResult GetContactById(int id)
        {
            var contact = contacts.FirstOrDefault((c) => c.Id == id);
            if (contact == null)
            {
                return NotFound();
            }
            return Ok(contact);
        }

        public IHttpActionResult GetConstctByName(string name)
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
