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
    
    public partial class CourierPackage
    {
        public int CourierId { get; set; }
        public int CourierPackageId { get; set; }
        public int PackageId { get; set; }
        public Nullable<System.DateTime> DateCollect { get; set; }
        public Nullable<System.DateTime> DateBring { get; set; }
        public Nullable<System.DateTime> DateNow { get; set; }
    }
}
