import "./Hero.css"
import arrowBtn from "../../assets/arrow_btn.png";
import playIcon from "../../assets/play_icon.png";
import pauseIcon from "../../assets/pause_icon.png";

export default function Hero({ heroData, setPlayStatus, heroCount, setHeroCount, playStatus }) {
    return (
        <div className="hero">
            <div className="heroText">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="heroExplore">
                <p>Explore the features</p>
                <img src={arrowBtn} />
            </div>
            <div className="heroDotPlay">
                <ul className="heroDots">
                    <li className={heroCount === 0 ? "heroDot orange" : "heroDot"} onClick={() => { setHeroCount(0) }}></li>
                    <li className={heroCount === 1 ? "heroDot orange" : "heroDot"} onClick={() => { setHeroCount(1) }}></li>
                    <li className={heroCount === 2 ? "heroDot orange" : "heroDot"} onClick={() => { setHeroCount(2) }}></li>
                </ul>
                <div className="heroPlay">
                    <img src={playStatus ? pauseIcon : playIcon} onClick={() => { setPlayStatus(!playStatus) }} />
                    <p>See the video</p>
                </div>
            </div>
        </div>
    )
}