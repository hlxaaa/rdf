using System;

namespace DbOpertion.Models
{
    [Serializable]
    public partial class LiveView
    {
        public LiveView(){}
        //public LiveView(Req req){
            //if(req.Id != null)
            //Id = Convert.ToInt32(req.Id);
            //if(req.UserId != null)
            //UserId = Convert.ToInt32(req.UserId);
            //if(req.Url != null)
            //Url = req.Url;
            //if(req.Title != null)
            //Title = req.Title;
            //if(req.TitleE != null)
            //TitleE = req.TitleE;
            //if(req.BeginTime != null)
            //BeginTime = Convert.ToDateTime(req.BeginTime);
            //if(req.PlayLongTime != null)
            //PlayLongTime = Convert.ToInt32(req.PlayLongTime);
            //if(req.PlayStatus != null)
            //PlayStatus = Convert.ToInt32(req.PlayStatus);
            //if(req.DataStatus != null)
            //DataStatus = Convert.ToInt32(req.DataStatus);
            //if(req.CloudId != null)
            //CloudId = req.CloudId;
            //if(req.VideoId != null)
            //VideoId = Convert.ToInt32(req.VideoId);
            //if(req.isPass != null)
            //isPass = req.isPass;
            //if(req.isEnglish != null)
            //isEnglish = Convert.ToInt32(req.isEnglish);
            //if(req.price != null)
            //price = Convert.ToDecimal(req.price);
            //if(req.UserName != null)
            //UserName = req.UserName;
            //if(req.videoTitle != null)
            //videoTitle = req.videoTitle;
        //}
        /// <summary>
        /// 
        /// </summary>
        public Int32 Id { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public Int32 UserId { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public String Url { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public String Title { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public String TitleE { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public DateTime BeginTime { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public Int32 PlayLongTime { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public Int32 PlayStatus { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public Int32 DataStatus { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public String CloudId { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public Int32? VideoId { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public String isPass { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public Int32? isEnglish { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public Decimal? price { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public String UserName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public String videoTitle { get; set; }

}
}
