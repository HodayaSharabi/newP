//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class MadeShipments
    {
        public int PackageId { get; set; }
        public int CustomerId { get; set; }
        public string CollectionAddress { get; set; }
        public Nullable<int> Cfloor { get; set; }
        public string Destination { get; set; }
        public Nullable<int> Dfloor { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string SenderPhone { get; set; }
        public string InvoiceName { get; set; }
        public string PhoneReceivesShipping { get; set; }
        public string CompanyName { get; set; }
        public string FullName { get; set; }
        public string DuringSending { get; set; }
        public string Weigth { get; set; }
        public Nullable<System.DateTime> DateNow { get; set; }
        public string Description { get; set; }
        public string Commends { get; set; }
        public string Status { get; set; }
    }
}
