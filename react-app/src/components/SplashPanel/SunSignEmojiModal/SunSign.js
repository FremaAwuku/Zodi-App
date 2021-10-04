import { useSelector } from "react-redux"
import LoginFormModal from "../../auth/LoginFormModal"
import '../SplashPanel.css'
function SunSign({sign, setShowModal}){

    const user = useSelector(state => state.session.user)


    const long = sign.long_description.split(">")
    long.shift()


    const closeModal = () =>{
        setShowModal(false)
    }
 
    let signDetail
        if(user){
            signDetail=(
                <div className="sign-detail-full">
                    <h5
                    id="close-modal"
                    onClick={closeModal}>CLOSE</h5>
                    <h3
                    id="sign-header"
                    >{sign.sign}</h3>

                     <div id='sign-sect'>
                    <h6
                    className="sign-label"
                    id="top-row">Dates:
                    </h6>
                    <h3
                    id="top-row"
                    className="sign-content">{sign.dates}</h3>
                    </div>

                    <div id='sign-sect'>
                    <h6 className="sign-label">Qualities:
                    </h6>
                    <h3
                    id="top-row"
                    className="sign-content"
                    >{sign.qualities}</h3>
                    </div>

                    <div id='sign-sect'>
                    <h6

                    className="sign-label">Element:
                    </h6>
                    <h3
                    className="sign-content"
                    >{sign.element}</h3>
                    </div>

                    <div id='sign-sect'>
                    <h6 className="sign-label">Ruling Planet:
                    </h6>
                    <h3
                     id="top-row"
                    className="sign-content"
                    >{sign.ruling_planet}</h3>
                    </div>

                    <div id='sign-sect'>
                    <h6 className="sign-label">Symbol:
                    </h6>
                    <h3
                     id="top-row"
                    className="sign-content"
                    >{sign.symbol}</h3>
                    </div>

                    <div id='sign-sect strengths'

                    >
                    <h6 className="sign-label strengths">Strengths:
                    </h6>
                    <h3
                    className="sign-content  strengths"
                    > {sign.strengths}</h3>
                    </div>

                    <div id='sign-sect weaknesses'>
                    <h6 className="sign-label weaknesses">Weaknesses:
                    </h6>
                    <h3
                    className="sign-content weaknesses"
                    >{sign.weaknesses}</h3>
                    </div>

                    <div id='sign-sect short-desc'>
                    <h6 className="sign-label">Short Description:
                    </h6>
                    <h3
                    className="sign-content short-desc"
                    >{sign.short_description}</h3>
                    </div>

                    <div id='sign-sect'>
                    <div
                    className="long-desc">
                    <h6 className="sign-label">Long Description:
                    </h6>

                    {long.map((desc,i)=>(

                            <span id="space-break" >
                            <h3 key={`desc_${i}`} className="sign-content" id="long_description">{desc}</h3>
                            </span>
                    ))}
                    </div>
                    </div>
                    </div>


            )
        }else{
            signDetail=(
                <div className="sign-detail">
                    <h5
                    id="close-modal"
                    onClick={closeModal}>X CLOSE</h5>

                  <h3
                    id="sign-header"
                    >{sign.sign}</h3>
                    <div id='sign-sect'>
                    <h2 className="sign-label">Dates:</h2>
                    <h3 className="sign-content">{sign.dates}</h3>
                    </div>
                    <div id='sign-sect short-desc'>
                    <h6 className="sign-label">Short Description:
                    </h6>
                    <h3
                    className="sign-content short-desc"
                    >{sign.short_description}</h3>
                    </div>
                    <div
                    className="login-more"
                    >
                    <h2> Login to See More

                    </h2>
                    </div>

                </div>
            )

        }

        return(
            <>

            {signDetail}
            </>
        )
    }

    export default SunSign
