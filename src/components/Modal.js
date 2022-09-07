import React from "react"
import close from "../images/icon-close-modal.svg"

export default function Modal(props) {
    const bottom = {
        marginBottom: "25px"
    }

    const [onclosed, setOnClosed] = React.useState(false)
    function trueClose() {
        setOnClosed(true)
    }
    function falseClose() {
        setOnClosed(false)
    }

    return (
        <div className="modal--overlay">
            <div className="modal">
                <img className="close--modal" alt="" 
                    src={ onclosed ? "https://img.icons8.com/metro/344/delete-sign.png" : close} 
                    onMouseOut={falseClose} onMouseOver={trueClose} 
                    onClick={props.handleClick}
                />
                <h2 style={bottom}>Back this project</h2>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                <div className="choose--pledge">
                    <div className="check--circle"></div>
                    <div>
                        <h5 onClick={props.handleComplete} style={{marginBottom: "18px"}} className="select--pledge">Pledge with no reward</h5>
                        <p>
                            Choose to support us without a reward if you simply believe in our project. As a backer, 
                            you will be signed up to receive product updates via email.
                        </p>
                    </div>
                </div>
                <div className="choose--pledge">
                    <div className="check--circle"></div>
                    <div>
                        <div className="pledge--heading">
                            <h5 style={{marginBottom: "18px", marginRight: "20px"}} className="select--pledge">Bamboo Stand</h5>
                            <h5 style={{marginRight: "auto"}}>Pledge $25 or more</h5>
                            <div>
                                <h3>101</h3>
                                <p>left</p>
                            </div>
                        </div>
                        <p>
                            You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                            you’ll be added to a special Backer member list.
                        </p>
                    </div>
                </div>
                <div className="choose--pledge">
                    <div className="check--circle"></div>
                    <div>
                        <div className="pledge--heading">
                            <h5 style={{marginBottom: "18px", marginRight: "20px"}} className="select--pledge">Black Edition Stand</h5>
                            <h5 style={{marginRight: "auto"}}>Pledge $75 or more</h5>
                            <div>
                                <h3>64</h3>
                                <p>left</p>
                            </div>
                        </div>
                        <p>
                            You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                             member list. Shipping is included.
                        </p>
                    </div>
                </div>
                <div className="choose--pledge trans">
                <div className="pledge--overlay"></div>
                    <div className="check--circle"></div>
                    <div>
                        <div className="pledge--heading">
                            <h5 style={{marginBottom: "18px", marginRight: "20px"}} className="select--pledge">Mahogany Special Edition</h5>
                            <h5 style={{marginRight: "auto"}}>Pledge $75 or more</h5>
                            <div>
                                <h3>0</h3>
                                <p>left</p>
                            </div>
                        </div>
                        <p>
                            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                            to our Backer member list. Shipping is included.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}