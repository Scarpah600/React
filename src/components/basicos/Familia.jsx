import React, { cloneElement } from 'react'

/*
 {React.Children.map(props.children, child=>{
                   return cloneElement(child,props);
            })
{props.children.map((child, i) => {
                   return cloneElement(child,{...props});
            })
        }     
*/

  

export default props =>{

    console.log(typeof props.children.map)
    return (
        <div>
           {props.children.map((child, i) => {
                   return cloneElement(child,{ ...props, key: i});
            })
            }      
        </div>   
    )
}