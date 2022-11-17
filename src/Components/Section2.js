import React from "react";
import '../styles/section2.css'

function Section2(props){

    const{h1,h12,subheading,mapingVar,headingColor,smallHeading,contentColor,bgColor}=props;

    return(

        <>
            <div className="section2Container" style={{backgroundColor:bgColor}}>
                <div className="headings2" style={{color:headingColor}}>
                    <div>
                   {h1}
                    </div>
                    <div>
                    {h12}
                    </div>
                    <div className="smallHeading" style={{color:smallHeading}}>
                        {subheading}
                    </div>
                </div>
                <div className="section2Main">
                    <div className="itemHolder">
                    {mapingVar.map((obj)=><div className="contentsS2" style={{color:contentColor}}>
                        <img src={obj.imgSrc} alt="not Found"/>
                        <h2>{obj.name}</h2>
                        </div>
                        )}
                        </div>
                </div>
            </div>
        </>

    )

}

export default Section2;