import React from 'react';

function CardInfo(props) {
    return (
        <div className="cardInfo">
            <headr className="userInfo">
                <img className="profilePhoto"
                     src={props.photoUser}
                     alt={props.nameUser}/>
                <div className="profileName">{props.nameUser}</div>
                <div className="profilePseudonym">{props.pseudonymUser}</div>
                <time className ="date">{props.dateComment}</time>
            </headr>
            <main className = "content">
                <p className = "comment">{props.textComment}</p>
                <img className = "img"
                     src={props.imgComment}
                     alt="image"/>
            </main>
        </div>
    );
}

export default CardInfo;







