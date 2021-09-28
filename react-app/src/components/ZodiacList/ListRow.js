import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import EditRowModal from './EditRowModal/index';

const ListRow = ({rows}) => {


    const signs = useSelector(state => Object.values( state.sunSigns))
    // const firstSignId = signs.filter((sign)=> sign.sign === rows?.first_name_sign)[0].id

    const firstSign = signs.filter((sign)=> sign.sign=== rows?.first_name_sign)[0]?.id
    const firstSignId = Number(firstSign)
    const matchSignId = signs.filter((sign)=> sign.sign === rows?.match_name_sign)[0]?.id
    console.log(rows.match_name,"<<<<<ROWS")
    // console.log(firstSignId, `<<<<<<<FIRST SIGN ID`)
    // console.log(matchSignId, `<<<<<<<MATCH SIGN ID`)
    // console.log(signs,"<<<<<<<SIGNS")

    let signEmoji_1

    if(firstSignId === 1 ){
        signEmoji_1=(
            <h3>♈</h3>
        )


    }else if(firstSignId === 2){
        signEmoji_1=(
            <h3>♉</h3>
        )



    }else if(firstSignId === 3){
        signEmoji_1=(
            <h3>♊</h3>
        )


    }else if(firstSignId === 4){
        signEmoji_1=(
            <h3>♋</h3>
        )


    }else if(firstSignId === 5){
        signEmoji_1=(
            <h3>♌</h3>
        )



    }else if(firstSignId === 6){
        signEmoji_1=(
            <h3>♍</h3>
        )


    }else if(firstSignId === 7){
        signEmoji_1=(
            <h3>♎</h3>
        )


    }else if(firstSignId === 8){
        signEmoji_1=(
            <h3>♏</h3>
        )


    }else if(firstSignId === 9){
        signEmoji_1=(
            <h3>♐</h3>
        )


    }else if(firstSignId === 10){
        signEmoji_1=(
            <h3>♑</h3>
        )


    }else if(firstSignId=== 11){
        signEmoji_1=(
            <h3>♒</h3>
        )


    }else{
        signEmoji_1=(
            <h3>♓</h3>
        )




    }



    let signEmoji_2
    // MATCH SIGN EMOJI// MATCH SIGN EMOJI// MATCH SIGN EMOJI
if(matchSignId){
    if(matchSignId === 1 ){

        signEmoji_2=(
            <h3>♈</h3>
        )
    }else if(matchSignId === 2){

        signEmoji_2=(
            <h3>♉</h3>
        )

    }else if(matchSignId === 3){

        signEmoji_2=(
            <h3>♊</h3>
        )
    }else if(matchSignId === 4){

        signEmoji_2=(
            <h3>♋</h3>
        )
    }else if(matchSignId === 5){

        signEmoji_2=(
            <h3>♌</h3>
        )

    }else if(matchSignId === 6){

        signEmoji_2=(
            <h3>♍</h3>
        )
    }else if(matchSignId === 7){

        signEmoji_2=(
            <h3>♎</h3>
        )
    }else if(matchSignId === 8){

        signEmoji_2=(
            <h3>♏</h3>
        )
    }else if(matchSignId === 9){

        signEmoji_2=(
            <h3>♐</h3>
        )
    }else if(matchSignId === 10){

        signEmoji_2=(
            <h3>♑</h3>
        )
    }else if(matchSignId=== 11){

        signEmoji_2=(
            <h3>♒</h3>
        )
    }else{

        signEmoji_2=(
            <h3>♓</h3>
        )
    }
 }
    let heartEmoji
    if(rows.compatibility){
    if (rows.compatibility === 7){
        heartEmoji=(
            <>💜💜💜💜💜❤️‍🔥</>
        )


    }else if(rows.compatibility === 6){
        heartEmoji=(
            <>💜💜💜💜💜💜</>
        )


    }else if(rows.compatibility === 5){
        heartEmoji=(
            <>💜💜💜💜💜</>
        )


    }else if(rows.compatibility === 4){
        heartEmoji=(
            <>💜💜💜💜</>
        )

    }else if(rows.compatibility === 3){
        heartEmoji=(
            <>💜💜💜</>
        )

    }else if(rows.compatibility === 2){
        heartEmoji=(
            <>💜💜</>
        )


    }else {
        heartEmoji=(
            <>💜</>
        )

    }
}
let editButton
if(!rows.match_name ){
editButton=(
<td>
    <EditRowModal row={rows} firstName={rows.first_name} firstNameSign={rows.first_name_sign}/>
</td>
)
    }else{
        editButton=(
            <></>
        )
    }



if(rows ){
    return(
<>
<td>
    {rows.first_name}
</td>
<br/>
<td>
    {signEmoji_1}
</td>
<br/>
<td>
    {rows.match_name}
</td>
<br/>
<td>
    {signEmoji_2}
</td>
<br/>
<td>
    {heartEmoji}
</td>
<br/>
    {editButton}
<br/>
<td>
    Delete Button
</td>
</>
    )
} else
{ return(
        <>

        </>
    )

}
}

export default ListRow
