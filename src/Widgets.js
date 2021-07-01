import React from 'react'
import './Widgets.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">

            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    const konnektMates = (friendName, friendMessage) => (
        <div className="widgets__friend">

            <div className="widgets__friendLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__friendRight">
                <h4>{friendName}</h4>
                <p>{friendMessage}</p>
            </div>
        </div>
    )



    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>Konnekt News</h2>
                <NewReleasesIcon />

            </div>
            {newsArticle("DOGECOIN IS UP!!", "Dogecoin moves up by 2%")}
            {newsArticle("COVID-19", "Delta strain found")}
            {newsArticle("Konnekt is downloaded 2 Million times!!", "Konnekt just rwached 2M downloads on play store this July")}

            <h2 className="widgets__friendHeader"> Recent Konnekt Mates</h2>


            {konnektMates("Tom Banks", " Say hi to Tom")}
            {konnektMates("Abby Brooks", " Say hi to Abby")}
            {konnektMates("Mahmood ", " Say hi to Mahmood")}
        </div>

    )
}

export default Widgets
