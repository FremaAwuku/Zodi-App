import { useSelector } from "react-redux"

function SunSign({sign}){
    // const [showLogin, setShowLogin] = useState(false)
    // const [showSign, setShowSign]= useState(false)
    // const signs = useSelector(state => Object.values(state.sunSigns))
    const user = useSelector(state => state.session)

    let signDetail
        if(user){
            signDetail=(
                <div className="sign-detail-full">
                    <h3>{sign.sign}</h3>
                    {sign.dates}
                    {sign.qualities}
                    {sign.element}
                    {sign.ruling_planet}
                    {sign.symbol}
                    {sign.strengths}
                    {sign.weaknesses}
                    {sign.short_description}
                    {sign.long_description}
                </div>
            )
        }{
            signDetail=(
                <div className="sign-detail">

                    <h3>{sign.sign}</h3>

                    <h5>{sign.dates}</h5>
                    {sign.short_description}

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
