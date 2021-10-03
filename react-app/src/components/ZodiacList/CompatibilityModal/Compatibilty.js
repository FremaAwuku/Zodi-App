import { useSelector } from "react-redux"

function Compatibility({rating,setShowModal}){

const compatibilities = useSelector(state => Object.values(state.compatibilities)).filter((comp)=>comp?.rating === rating)
const compatibility = compatibilities.pop()
console.log(rating,"<<<<<<<<RATING IN ")
console.log(compatibility,"<<<<<<<<COMPATIBILITY")
console.log(compatibilities,"<<<<<<<<COMPSSSSSSS")
    let header

if(rating=== 7){
    header=(
        <h1>
            TRINE
        </h1>
    )
}else if(rating=== 6){
    header=(
        <h1>
            CONJUNCT
        </h1>
    )
}else if(rating == 5){
    header=(
        <h1>
            SEXTILE
        </h1>
    )
}else if(rating=== 4){
    header=(
        <h1>
            OPPOSITE
        </h1>
    )
}else if(rating=== 3){
    header=(
        <h1>
           SEMI-SEXTILE
        </h1>
    )
}else if(rating=== 2){
    header=(
        <h1>
            INCONJUNCT
        </h1>
    )
}else{
    header=(
        <h1>
            SQUARE
        </h1>
    )
    }
    const closeModal = () =>{
        setShowModal(false)
    }

    return(
        <div className="univ-modal-wrapper comp"
        id="comp-modal"
        >
            <h5
                    id="close-modal"
                    onClick={closeModal}>CLOSE</h5>
            {header}
            <p>
                {compatibility?.description}
            </p>

        </div>

    )
}

export default Compatibility
