import React from "react";
import Travels from "./Travels";

const travel = [
	 {
		desitnation: "Tokyo",
		country: "Japan",
		photo: "https://www.webuildvalue.com/static/upload/tok/tokyo-skyline.jpg",
		distance:"9,442km"
	},
	{
		desitnation: "New Delhi",
		country: "India",
		photo: "https://www.tedbaker.com/blog/uk/wp-content/uploads/2018/02/New-Delhi-Hero.jpg",
		distance: "6,409km"
	},
	{
		desitnation: "Guatemala city",
		country: "Guatemala",
		photo: "https://thumbs.mic.com/ZjNiMGQwZGFkMCMvWlJJMHFucExfeE5fRjlTUWNNa0tiUV9RTzhFPS8weDYyNDo2MDAweDM5OTkvODAweDQ1MC9maWx0ZXJzOmZvcm1hdChqcGVnKTpxdWFsaXR5KDgwKS9odHRwczovL3MzLmFtYXpvbmF3cy5jb20vcG9saWN5bWljLWltYWdlcy9iY2V6dzlodWh0eHFmN29vOW91Y2lzbTczYWJrcXlxeWczeG8zZ2tiZHl3cXVraDJqYnk0bHdlemt2dmxvM2JiLmpwZw.jpg",
		distance: "9,080km"
	},
	{
		desitnation: "Canberra",
		country: "Australia",
		photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Canberra_viewed_from_Mount_Ainslie.jpg/870px-Canberra_viewed_from_Mount_Ainslie.jpg",
		distance: "16,706km"
	},
	{
		desitnation: "Colombo",
		country: "Siri Lanka",
		photo: "https://d1ljaggyrdca1l.cloudfront.net/wp-content/uploads/2018/01/colombo-sri-lanka.jpg",
		distance: "8,390km"
	}
];

const Travel = () => (
  <div>
    {travel.map(travels => (
       <Travels desitnation={travels.desitnation} country={travels.country} distance={travels.distance} photo={travels.photo} />
    ))}
  </div>
);

export default Travel;