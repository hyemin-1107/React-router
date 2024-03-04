import React, { useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

// class LikeButton extends React.Component{

//     state = {
//         isChecked: false,
//     };

//     onClick = () => {				
//         this.state.isChecked ?		
//         this.setState({
//             isChecked: false,		
//         }) :
//         this.setState({				
//             isChecked: true,		
//         });
//     }

//     render(){
//         return(
//             <React.Fragment>
//                 <div className="icons-list">
//                     {this.state.isChecked ?
//                     <HeartFilled style={{ color: 'red', fontSize: '25px' }} onClick={this.onClick}/> :	
//                     <HeartOutlined style={{ fontSize: '25px' }} onClick={this.onClick}/>}				
//                 </div>
//             </React.Fragment> 
//         )
//     }
// };

// export default LikeButton;

const LikeButton = () => {

    const [isChecked, setChacked] = useState(false);


    const onClick = () => {
        setChacked((prevCheked) => !prevCheked);
    }
    return (

        <div>
            {isChecked ?
                <HeartFilled style={{ color: 'red', fontSize: '25px' }} onClick={onClick} /> :
                <HeartOutlined style={{ fontSize: '25px' }} onClick={onClick} />}
        </div>

    )
}


export default LikeButton;
