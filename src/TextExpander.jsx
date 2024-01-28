import { useState } from "react"

function TextExpander({collapsedWordNumber=15,isExpanded=false,children,className='',btnShowText='Show more',btHideText='Show less'}) {
    const [expanded,setExpanded]=useState(isExpanded)
    
    const displayChildren=children.split(" ").length>=collapsedWordNumber?!expanded? children.split(" ").slice(0,collapsedWordNumber).join(" ")+"...":children:children;
    return (
        <>
             <p className={`${className}`}>
                {displayChildren}
                {
                    children.split(" ").length>=collapsedWordNumber &&  <span style={{fontSize:".7rem"}} className="font-thin text-sm text-blue-500 cursor-pointer" onClick={()=>setExpanded(prevShow=>!prevShow)}>{expanded?btHideText:btnShowText}</span>
                }
            </p>
        </>
      
    )
      
}

export default TextExpander
