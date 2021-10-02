import React, {  useState, useEffect } from 'react';
// import {ariesEmoji} from '/Users/fremy/appacademy/selfProject/capStone/Zodi-App/react-app/src/images/sign_png/aries.png'

import { Modal } from '../../../context/Modal';
import SunSign from './SunSign';
import '../SplashPanel.css'

function SunSignEmojiModal({ sign}) {
  const [showModal, setShowModal] = useState(false);

const ariesEmoji ="https://zodiappbucket.s3.amazonaws.com/sign_png/aries.png"
const taurusEmoji ="https://zodiappbucket.s3.amazonaws.com/sign_png/taurus.png"
const geminiEmoji ="https://zodiappbucket.s3.amazonaws.com/sign_png/gemini.png"
const cancerEmoji ="https://zodiappbucket.s3.amazonaws.com/sign_png/cancer.png"
const leoEmoji ="https://zodiappbucket.s3.amazonaws.com/sign_png/leo.png"
const virgoEmoji ="https://zodiappbucket.s3.amazonaws.com/sign_png/virgo.png"
const libraEmoji ="https://zodiappbucket.s3.amazonaws.com/sign_png/libra.png"
const scorpioEmoji ="https://zodiappbucket.s3.amazonaws.com/sign_png/scorpio.png"
const sagittariusEmoji ="https://zodiappbucket.s3.amazonaws.com/sign_png/sagittarius.png"
const capricornEmoji ="https://zodiappbucket.s3.amazonaws.com/sign_png/capricorn.png"
const aquariusEmoji ="https://zodiappbucket.s3.amazonaws.com/sign_png/aquarius.png"
const piscesEmoji ="https://zodiappbucket.s3.amazonaws.com/sign_png/pisces.png"


let emojiPic

if(sign.sign === 'Aries'){
    emojiPic=(
        <div
        className="sign-emoji">
      <img src={ariesEmoji} alt="aries-detail"
      onClick={() => setShowModal(true)}>
       </img>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SunSign sign={sign} setShowModal={setShowModal} />
        </Modal>
      )}
   </div>
    )
}else if(sign?.sign === 'Taurus'){
    emojiPic=(
        <div
        className="sign-emoji">
      <img src={taurusEmoji} alt="taurus-detail"
      onClick={() => setShowModal(true)}>
       </img>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SunSign sign={sign} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
    )

}else if(sign?.sign === 'Gemini'){
    emojiPic=(
        <div
        className="sign-emoji">
      <img src={geminiEmoji} alt="gemini-detail"
      onClick={() => setShowModal(true)}>
       </img>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SunSign sign={sign} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
    )

}else if(sign?.sign === 'Cancer'){
    emojiPic=(
        <div
        className="sign-emoji">
      <img src={cancerEmoji} alt="cancer-detail"
      onClick={() => setShowModal(true)}>
       </img>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SunSign sign={sign} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
    )

}else if(sign?.sign === 'Leo'){
    emojiPic=(
        <div
        className="sign-emoji">
      <img src={leoEmoji} alt="leo-detail"
      onClick={() => setShowModal(true)}>
       </img>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SunSign sign={sign} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
    )

}else if(sign?.sign === 'Virgo'){
    emojiPic=(
        <div
        className="sign-emoji">
      <img src={virgoEmoji} alt="virgo-detail"
      onClick={() => setShowModal(true)}>
       </img>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SunSign sign={sign} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
    )

}else if(sign?.sign === 'Libra'){
    emojiPic=(
        <div
        className="sign-emoji">
      <img src={libraEmoji} alt="libra-detail"
      onClick={() => setShowModal(true)}>
       </img>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SunSign sign={sign} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
    )

}else if(sign?.sign === 'Scorpio'){
    emojiPic=(
        <div
        className="sign-emoji">
      <img src={scorpioEmoji} alt="scorpio-detail"
      onClick={() => setShowModal(true)}>
       </img>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SunSign sign={sign} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
    )

}else if(sign?.sign === 'Sagittarius'){
    emojiPic=(
        <div
        className="sign-emoji">
      <img src={sagittariusEmoji} alt="sagittarius-detail"
      onClick={() => setShowModal(true)}>
       </img>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SunSign sign={sign} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
    )

}else if(sign?.sign === 'Capricorn'){
    emojiPic=(
        <div
        className="sign-emoji">
      <img src={capricornEmoji} alt="capricorn-detail"
      onClick={() => setShowModal(true)}>
       </img>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SunSign sign={sign} setShowModal={setShowModal} />
        </Modal>
      )}
   </div>
    )

}else if(sign?.sign === 'Aquarius'){
    emojiPic=(
        <div
        className="sign-emoji">
      <img src={aquariusEmoji} alt="aquarius-detail"
      onClick={() => setShowModal(true)}>
       </img>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SunSign sign={sign} setShowModal={setShowModal} />
        </Modal>
      )}
   </div>
    )

}else if(sign?.sign === 'Pisces'){
    emojiPic=(
        <div
        className="sign-emoji">
      <img src={piscesEmoji} alt="pisces-detail"
      onClick={() => setShowModal(true)}>
       </img>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SunSign sign={sign} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
    )

}else{
    emojiPic=(
        <>
        </>
    )
}

  return (
      <>
    {emojiPic}
    </>
  );

}

export default SunSignEmojiModal;
