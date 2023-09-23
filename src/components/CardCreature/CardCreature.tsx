import React, { useEffect, useState } from 'react';
import style from './CardCreature.module.scss';
type AlertProps = {
    Pole: string[];
    keyt: number;
    plusPerepolnen?: (num: number, bol: boolean) => void;
    minMax?: number[];
    startPerepolnen?: number;
    isBack?: boolean;
    targetFont: string;
    cardImg?: string;
    svitok?: string;
    doubleBack?: boolean;
};
const Card = ({ doubleBack, svitok, cardImg, targetFont, isBack, keyt, Pole, minMax, plusPerepolnen, startPerepolnen }: AlertProps): JSX.Element => {
    let descriptionMain1, descriptionText1;
    let descriptionMain2, descriptionText2;
    let MyDopText1, MyDopText2;
    const myTexts = [
        document.createElement('div'),
        document.createElement('div'),
        document.createElement('div')
    ];
    for (let i = 0; i < 3; i++) {
        myTexts[i].innerHTML = Pole[29 + i * 2] != ""
            ? `<div class="${style.Per + " " + style[`Per${i + 2}`]}"></div>${Pole[28 + i * 2] != "" ? `<div class="${style[`TextTitle${i + 2}`]}">${Pole[28 + i * 2]}</div>` : ""}<div class="${style[`Text${i + 2}`]}">${Pole[29 + i * 2]}</div>`
            : "";
    }
    useEffect(() => {
        descriptionMain1 = document.getElementById("Card1 " + keyt);
        descriptionText1 = document.getElementById("CardControl1 " + keyt);
        descriptionMain2 = document.getElementById("Card2 " + keyt);
        descriptionText2 = document.getElementById("CardControl2 " + keyt);
        MyDopText1 = document.getElementById("MyDopText1 " + keyt);
        MyDopText2 = document.getElementById("MyDopText2 " + keyt);
        if (descriptionText1 && descriptionMain1) {
            let size = minMax ? minMax[1] : 10;
            if (descriptionText2 && descriptionMain2 && MyDopText1 && MyDopText2) {
                descriptionText1.style.fontSize = size + 'px';
                descriptionText2.style.fontSize = size + 'px';
                let flag = true;
                while (flag && Number(size) >= Number(minMax ? minMax[0] : 8)) {
                    for (let i = 3; i >= 0; i--) {
                        MyDopText1.innerHTML = "";
                        MyDopText2.innerHTML = "";
                        for (let j = i; j < 3; j++) {
                            if (j == i)
                                myTexts[j].className = style.Pop;
                            else
                                myTexts[j].className = "";
                            MyDopText2.append(myTexts[j])
                        }
                        for (let j = 0; j < i; j++) {
                            myTexts[j].className = "";
                            MyDopText1.append(myTexts[j])
                        }
                        flag = (descriptionText1.scrollHeight > descriptionMain1.offsetHeight || descriptionText2.scrollHeight > descriptionMain2.offsetHeight);
                        if (!flag)
                            break;
                    }
                    size = size - 0.05;
                    descriptionText1.style.fontSize = size + 'px';
                    descriptionText2.style.fontSize = size + 'px';
                }
            } else {
                if (MyDopText1) {
                    MyDopText1.innerHTML = "";
                    for (let j = 0; j < 3; j++) {
                        myTexts[j].className = "";
                        MyDopText1.append(myTexts[j])
                    }
                }
                descriptionText1.style.fontSize = size + 'px';
                while (descriptionText1.scrollHeight > descriptionMain1.offsetHeight && Number(size) >= Number(minMax ? minMax[0] : 8)) {
                    size = size - 0.05;
                    descriptionText1.style.fontSize = size + 'px';
                }
            }
            if (Number(size) < Number(minMax ? minMax[0] : 8)) {
                if (plusPerepolnen) plusPerepolnen(keyt, true);
            }
            else {
                if (plusPerepolnen) plusPerepolnen(keyt, false);
            }
        }
    }, [startPerepolnen]);
    if (isBack) {
        return (
            <div className={style.MainBack + ' ' + style[targetFont]}>
                <div className={style.Zagolovok}><div>{Pole[5]}</div></div>
                <div className={style.Per}><div>{Pole[6]}</div></div>
                <div className={style.DescMain}>
                    <div className={doubleBack ? style.doubleBack : style.onceBack}>
                        <div className={style.Description} id={"Card1 " + keyt}>
                            <div className={style.CardControl} id={"CardControl1 " + keyt}>
                                <div className={style.Staty}>

                                    <div className={style.StatCase + ' ' + style.StatCaseVert}>
                                        {(Pole[7] || Pole[8]) ? <div className={style.Stat + " " + style.AC}><div className={style.StatTitle}>{Pole[7]}</div><div className={style.StatText}>{Pole[8]}</div></div> : null}
                                        {(Pole[9] || Pole[10]) ? <div className={style.Stat + " " + style.HP}><div className={style.StatTitle}>{Pole[9]}</div><div className={style.StatText}>{Pole[10]}</div></div> : null}
                                        {(Pole[11] || Pole[12]) ? <div className={style.Stat + " " + style.Speed}><div className={style.StatTitle}>{Pole[11]}</div><div className={style.StatText}>{Pole[12]}</div></div> : null}
                                        {(Pole[13] || Pole[14]) ? <div className={style.Stat + " " + style.Empty}><div className={style.StatTitle}>{Pole[13]}</div><div className={style.StatText}>{Pole[14]}</div></div> : null}
                                    </div>

                                    {/* <div className={style.StatCase}>
                                        <div className={style.Stat + " " + style.AC}><div className={style.StatTitle}>{Pole[7]}</div><div className={style.StatText}>{Pole[8]}</div></div>
                                        <div className={style.Stat + " " + style.HP}><div className={style.StatTitle}>{Pole[9]}</div><div className={style.StatText}>{Pole[10]}</div></div>
                                    </div>
                                    <div className={style.StatCase}>
                                        <div className={style.Stat + " " + style.Speed}><div className={style.StatTitle}>{Pole[11]}</div><div className={style.StatText}>{Pole[12]}</div></div>
                                        <div className={style.Stat + " " + style.Empty}><div className={style.StatTitle}>{Pole[13]}</div><div className={style.StatText}>{Pole[14]}</div></div>
                                    </div> */}
                                </div>
                                <div className={style.Per + " " + style.Per0}></div>
                                <div className={style.Skills}>
                                    <div className={style.Skill + " " + style.Sil}>
                                        <div className={style.SkillTitle}><>{Pole[15]}</></div>
                                        <div className={style.SkillPoint}><>{Pole[16]}</></div>
                                    </div>
                                    <div className={style.Skill + " " + style.Lov}>
                                        <div className={style.SkillTitle}><>{Pole[17]}</></div>
                                        <div className={style.SkillPoint}><>{Pole[18]}</></div>
                                    </div>
                                    <div className={style.Skill + " " + style.Tel}>
                                        <div className={style.SkillTitle}><>{Pole[19]}</></div>
                                        <div className={style.SkillPoint}><>{Pole[20]}</></div>
                                    </div>
                                    <div className={style.Skill + " " + style.Int}>
                                        <div className={style.SkillTitle}><>{Pole[21]}</></div>
                                        <div className={style.SkillPoint}><>{Pole[22]}</></div>
                                    </div>
                                    <div className={style.Skill + " " + style.Mdr}>
                                        <div className={style.SkillTitle}><>{Pole[23]}</></div>
                                        <div className={style.SkillPoint}><>{Pole[24]}</></div>
                                    </div>
                                    <div className={style.Skill + " " + style.Har}>
                                        <div className={style.SkillTitle}><>{Pole[25]}</></div>
                                        <div className={style.SkillPoint}><>{Pole[26]}</></div>
                                    </div>
                                </div>
                                <div className={style.Per + " " + style.Per1}></div>
                                <div className={style.Text1}>{Pole[27]}</div>
                                <div className={style.myDopText} id={"MyDopText1 " + keyt}>

                                </div>
                            </div>
                        </div>
                    </div>
                    {doubleBack ?
                        <div className={style.doubleBack}>
                            <div className={style.Description + ' ' + style.Description2} id={"Card2 " + keyt}>
                                <div className={style.CardControl} id={"CardControl2 " + keyt}>
                                    <div className={style.myDopText} id={"MyDopText2 " + keyt}></div>
                                </div>
                            </div>
                        </div>
                        : null
                    }
                </div>

                <div className={style.DowtText}><div>{Pole[34]}</div></div>
            </div>
        );
    }
    else {
        return (
            <div className={style.Main + ' ' + style[targetFont]}>
                <div className={style.Zagolovok}><div>{Pole[0]}</div></div>
                <div className={style.Inside}>
                    <img className={style.MyImg} src={cardImg} alt="" />
                    {Pole[3] != ""
                        ? <div className={style.Description}>
                            <img src={svitok} alt="" />
                            <div>{Pole[3]}</div>
                        </div>
                        : null}
                </div>
                <div className={style.DowtText}><div>{Pole[4]}</div></div>
            </div>
        );
    }
}

export default Card;