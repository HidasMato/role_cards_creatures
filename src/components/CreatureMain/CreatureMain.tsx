import React, { createElement, useEffect, useState } from 'react';
import style from './CreatureMain.module.scss';
import CardCreature from '../CardCreature/CardCreature';
import { ReactComponent as Setting } from '../../images/Setting.svg';
import { ReactComponent as Download } from '../../images/Download.svg';
import Im1 from '../../images/CardsImages/Ааракокра.png';
import Im2 from '../../images/CardsImages/Аболет.png';
import Im3 from '../../images/CardsImages/Адепт боевых искусств.png';
import Im4 from '../../images/CardsImages/Адская гончая.png';
import Im5 from '../../images/CardsImages/Адское орудие.png';
import Im6 from '../../images/CardsImages/Алкилит.png';
import Im7 from '../../images/CardsImages/Аллип.png';
import Im8 from '../../images/CardsImages/Аллозавр.png';
import Im9 from '../../images/CardsImages/Алхун.png';
import Im10 from '../../images/CardsImages/Альфа грик.png';
import Im11 from '../../images/CardsImages/Амнизу.png';
import Im12 from '../../images/CardsImages/Андросфинкс.png';
import Im13 from '../../images/CardsImages/Анкилозавр.png';
import Im14 from '../../images/CardsImages/Анхег.png';
import Im15 from '../../images/CardsImages/Арканалот.png';
import Im16 from '../../images/CardsImages/Арманит.png';
import Im17 from '../../images/CardsImages/Архидруид.png';
import Im18 from '../../images/CardsImages/Архимаг.png';
import Im19 from '../../images/CardsImages/Астральный дредноут.png';
import Im20 from '../../images/CardsImages/Бабау.png';
import Im21 from '../../images/CardsImages/Бабуин.png';
import Im22 from '../../images/CardsImages/Балор.png';
import Im23 from '../../images/CardsImages/Балханнот.png';
import Im24 from '../../images/CardsImages/Бандерхобб.png';
import Im25 from '../../images/CardsImages/Баньши.png';
import Im26 from '../../images/CardsImages/Барбаланг.png';
import Im27 from '../../images/CardsImages/Баргест.png';
import Im28 from '../../images/CardsImages/Бард.png';
import Im29 from '../../images/CardsImages/Барлгура.png';
import Im30 from '../../images/CardsImages/Барон сахуагинов.png';
import Im31 from '../../images/CardsImages/Барсук.png';
import Im32 from '../../images/CardsImages/Белый абишай.png';
import Im33 from '../../images/CardsImages/Белый медведь.png';
import Im34 from '../../images/CardsImages/Берсерк.png';
import Im35 from '../../images/CardsImages/Бес.png';
import Im36 from '../../images/CardsImages/Бехир.png';
import Im37 from '../../images/CardsImages/Блуждающий огонек.png';
import Im38 from '../../images/CardsImages/Боггл.png';
import Im39 from '../../images/CardsImages/Бодак.png';
import Im40 from '../../images/CardsImages/Боевой вождь орков.png';
import Im41 from '../../images/CardsImages/Боевой конь.png';
import Im42 from '../../images/CardsImages/Боевой священник.png';
import Im43 from '../../images/CardsImages/Бормочущий ротовник.png';
import Im44 from '../../images/CardsImages/Бородатый дьявол.png';
import Im45 from '../../images/CardsImages/Босс гоблинов.png';
import Im46 from '../../images/CardsImages/Бронзовый скаут.png';
import Im47 from '../../images/CardsImages/Бронтозавр.png';
import Im48 from '../../images/CardsImages/Булезау.png';
import Im49 from '../../images/CardsImages/Бурый медведь.png';
import Im50 from '../../images/CardsImages/Бурый увалень.png';
import Im51 from '../../images/CardsImages/Вампир заклинатель.png';
import Im52 from '../../images/CardsImages/Вампир.png';
import Im53 from '../../images/CardsImages/Вампирический туман.png';
import Im54 from '../../images/CardsImages/Варгулья.png';
import Im55 from '../../images/CardsImages/Василиск.png';
import Im56 from '../../images/CardsImages/Вастрилит.png';
import Im57 from '../../images/CardsImages/Вегепигмей вождь.png';
import Im58 from '../../images/CardsImages/Вегепигмей.png';
import Im59 from '../../images/CardsImages/Велоцераптор.png';
import Im60 from '../../images/CardsImages/Верблюд.png';
import Im61 from '../../images/CardsImages/Вервепрь.png';
import Im62 from '../../images/CardsImages/Вервольф.png';
import Im63 from '../../images/CardsImages/Веревочник.png';
import Im64 from '../../images/CardsImages/Веркрыса.png';
import Im65 from '../../images/CardsImages/Вермедведь.png';
import Im66 from '../../images/CardsImages/Вермлинг красного дракона.png';
import Im67 from '../../images/CardsImages/Вертигр.png';
import Im68 from '../../images/CardsImages/Верховный жрец куо-тоа.png';
import Im69 from '../../images/CardsImages/Верховный миконид.png';
import Im70 from '../../images/CardsImages/Весенний эладрин.png';
import Im71 from '../../images/CardsImages/Ветвистая зараза.png';
import Im72 from '../../images/CardsImages/Ветеран.png';
import Im73 from '../../images/CardsImages/Взрослый белый дракон.png';
import Im74 from '../../images/CardsImages/Взрослый бронзовый дракон.png';
import Im75 from '../../images/CardsImages/Взрослый зелёный дракон.png';
import Im76 from '../../images/CardsImages/Взрослый золотой дракон.png';
import Im77 from '../../images/CardsImages/Взрослый красный дракон.png';
import Im78 from '../../images/CardsImages/Взрослый крутик.png';
import Im79 from '../../images/CardsImages/Взрослый латунный дракон.png';
import Im80 from '../../images/CardsImages/Взрослый медный дракон.png';
import Im81 from '../../images/CardsImages/Взрослый миконид.png';
import Im82 from '../../images/CardsImages/Взрослый серебряный дракон.png';
import Im83 from '../../images/CardsImages/Взрослый синий драколич.png';
import Im84 from '../../images/CardsImages/Взрослый синий дракон.png';
import Im85 from '../../images/CardsImages/Взрослый чёрный дракон.png';
import Im86 from '../../images/CardsImages/Виверна.png';
import Im87 from '../../images/CardsImages/Визгун.png';
import Im88 from '../../images/CardsImages/Вирмлинг белого дракона.png';
import Im89 from '../../images/CardsImages/Вирмлинг бронзового дракона.png';
import Im90 from '../../images/CardsImages/Вирмлинг зеленого дракона.png';
import Im91 from '../../images/CardsImages/Вирмлинг золотого дракона.png';
import Im92 from '../../images/CardsImages/Вирмлинг латунного дракона.png';
import Im93 from '../../images/CardsImages/Вирмлинг медного дракона.png';
import Im94 from '../../images/CardsImages/Вирмлинг серебрянного дракона.png';
import Im95 from '../../images/CardsImages/Вирмлинг синего дракона.png';
import Im96 from '../../images/CardsImages/Вирмлинг черного дракона.png';
import Im97 from '../../images/CardsImages/Водная анамалия.png';
import Im98 from '../../images/CardsImages/Водный элементальный мирмидон.png';
import Im99 from '../../images/CardsImages/Водянник.png';
import Im100 from '../../images/CardsImages/Военачальник.png';
import Im101 from '../../images/CardsImages/Вожак стаи гноллов.png';
import Im102 from '../../images/CardsImages/Вождь медвежатников.png';
import Im103 from '../../images/CardsImages/Воздушный элементаль.png';
import Im104 from '../../images/CardsImages/Воздушный элементальный мирмидон.png';
import Im105 from '../../images/CardsImages/Воин призрачного меча.png';
import Im106 from '../../images/CardsImages/Воитель племени.png';
import Im107 from '../../images/CardsImages/Волк.png';
import Im108 from '../../images/CardsImages/Волшебный дракончик.png';
import Im109 from '../../images/CardsImages/Воплотитель.png';
import Im110 from '../../images/CardsImages/Ворг.png';
import Im111 from '../../images/CardsImages/Ворон.png';
import Im112 from '../../images/CardsImages/Ворядной элементаль.png';
import Im113 from '../../images/CardsImages/Врок.png';
import Im114 from '../../images/CardsImages/Вурдалак.png';
import Im115 from '../../images/CardsImages/Вьющаяся зараза.png';
import Im116 from '../../images/CardsImages/Гадрозавр.png';
import Im117 from '../../images/CardsImages/Газовая спора.png';
import Im118 from '../../images/CardsImages/Гарпия.png';
import Im119 from '../../images/CardsImages/Гаут.png';
import Im120 from '../../images/CardsImages/Гиганский многоножка.png';
import Im121 from '../../images/CardsImages/Гигантская акула.png';
import Im122 from '../../images/CardsImages/Гигантская гиена.png';
import Im123 from '../../images/CardsImages/Гигантская жаба.png';
import Im124 from '../../images/CardsImages/Гигантская крыса.png';
import Im125 from '../../images/CardsImages/Гигантская куница.png';
import Im126 from '../../images/CardsImages/Гигантская летучая мышь.png';
import Im127 from '../../images/CardsImages/Гигантская лягушка.png';
import Im128 from '../../images/CardsImages/Гигантская оса.png';
import Im129 from '../../images/CardsImages/Гигантская сова.png';
import Im130 from '../../images/CardsImages/Гигантская человекообразная обезьяна.png';
import Im131 from '../../images/CardsImages/Гигантская ядовитая змея.png';
import Im132 from '../../images/CardsImages/Гигантская ящерица.png';
import Im133 from '../../images/CardsImages/Гигантский барсук.png';
import Im134 from '../../images/CardsImages/Гигантский гриф.png';
import Im135 from '../../images/CardsImages/Гигантский кабан.png';
import Im136 from '../../images/CardsImages/Гигантский козел.png';
import Im137 from '../../images/CardsImages/Гигантский краб.png';
import Im138 from '../../images/CardsImages/Гигантский крокодил.png';
import Im139 from '../../images/CardsImages/Гигантский лось.png';
import Im140 from '../../images/CardsImages/Гигантский морской конек.png';
import Im141 from '../../images/CardsImages/Гигантский огненный жук.png';
import Im142 from '../../images/CardsImages/Гигантский орел.png';
import Im143 from '../../images/CardsImages/Гигантский осьминог.png';
import Im144 from '../../images/CardsImages/Гигантский паук волк 2.png';
import Im145 from '../../images/CardsImages/Гигантский паук волк.png';
import Im146 from '../../images/CardsImages/Гигантский паук.png';
import Im147 from '../../images/CardsImages/Гигантский скорпион.png';
import Im148 from '../../images/CardsImages/Гигантский удав.png';
import Im149 from '../../images/CardsImages/Гигантский ходун.png';
import Im150 from '../../images/CardsImages/Гидра.png';
import Im151 from '../../images/CardsImages/Гидролот.png';
import Im152 from '../../images/CardsImages/Гиена.png';
import Im153 from '../../images/CardsImages/Гиносфинкс.png';
import Im154 from '../../images/CardsImages/Гиппогриф.png';
import Im155 from '../../images/CardsImages/Гираллон.png';
import Im156 from '../../images/CardsImages/Гитцерай Анарх.png';
import Im157 from '../../images/CardsImages/Гитцерай зерт.png';
import Im158 from '../../images/CardsImages/Гитцерай просвещённый.png';
import Im159 from '../../images/CardsImages/Гитъянки верховный главнокомандующий.png';
import Im160 from '../../images/CardsImages/Гитъянки Гиш.png';
import Im161 from '../../images/CardsImages/Гитъянки Кит’рак.png';
import Im162 from '../../images/CardsImages/Гитъянки рыцарь.png';
import Im163 from '../../images/CardsImages/Гитьянки воитель.png';
import Im164 from '../../images/CardsImages/Гифф.png';
import Im165 from '../../images/CardsImages/Гицерай монах.png';
import Im166 from '../../images/CardsImages/Глабрезу.png';
import Im167 from '../../images/CardsImages/Гладиатор.png';
import Im168 from '../../images/CardsImages/Глеб дур.png';
import Im169 from '../../images/CardsImages/Глиняный голем.png';
import Im170 from '../../images/CardsImages/Глубинные роф.png';
import Im171 from '../../images/CardsImages/Глубинный гном.png';
import Im172 from '../../images/CardsImages/Гнилой тролль.png';
import Im173 from '../../images/CardsImages/Гнолл глодатель.png';
import Im174 from '../../images/CardsImages/Гнолл клык йеногу.png';
import Im175 from '../../images/CardsImages/Гнолл охотник.png';
import Im176 from '../../images/CardsImages/Гнолл.png';
import Im177 from '../../images/CardsImages/Гоблин.png';
import Im178 from '../../images/CardsImages/Головорез.png';
import Im179 from '../../images/CardsImages/Голод.png';
import Im180 from '../../images/CardsImages/Гомункул.png';
import Im181 from '../../images/CardsImages/Гончая йет.png';
import Im182 from '../../images/CardsImages/Горгулья.png';
import Im183 from '../../images/CardsImages/Гористро.png';
import Im184 from '../../images/CardsImages/Горогона.png';
import Im185 from '../../images/CardsImages/Грелл.png';
import Im186 from '../../images/CardsImages/Гримлок.png';
import Im187 from '../../images/CardsImages/Гриф.png';
import Im188 from '../../images/CardsImages/Грифон.png';
import Im189 from '../../images/CardsImages/Громила звёздных порождений.png';
import Im190 from '../../images/CardsImages/Грунг.png';
import Im191 from '../../images/CardsImages/Грязевой мефит.png';
import Im192 from '../../images/CardsImages/Дао.png';
import Im193 from '../../images/CardsImages/Дарклинг.png';
import Im194 from '../../images/CardsImages/Дворянин.png';
import Im195 from '../../images/CardsImages/Дейноних.png';
import Im196 from '../../images/CardsImages/Дельфин.png';
import Im197 from '../../images/CardsImages/Демилич.png';
import Im198 from '../../images/CardsImages/Дерголот.png';
import Im199 from '../../images/CardsImages/Дерро савант.png';
import Im200 from '../../images/CardsImages/Дерро.png';
import Im201 from '../../images/CardsImages/Джинн.png';
import Im202 from '../../images/CardsImages/Диббук.png';
import Im203 from '../../images/CardsImages/Диметродон.png';
import Im204 from '../../images/CardsImages/Доппельгангер.png';
import Im205 from '../../images/CardsImages/Дракочерепаха.png';
import Im206 from '../../images/CardsImages/Драук заклинатель.png';
import Im207 from '../../images/CardsImages/Драук.png';
import Im208 from '../../images/CardsImages/Древний белый дракон.png';
import Im209 from '../../images/CardsImages/Древний бронзовый дракон.png';
import Im210 from '../../images/CardsImages/Древний зелёный дракон.png';
import Im211 from '../../images/CardsImages/Древний золотой дракон.png';
import Im212 from '../../images/CardsImages/Древний красный дракон.png';
import Im213 from '../../images/CardsImages/Древний латунный дракон.png';
import Im214 from '../../images/CardsImages/Древний медный дракон.png';
import Im215 from '../../images/CardsImages/Древний облекс.png';
import Im216 from '../../images/CardsImages/Древний серебряный дракон.png';
import Im217 from '../../images/CardsImages/Древний синий дракон.png';
import Im218 from '../../images/CardsImages/Древний черный дракон.png';
import Im219 from '../../images/CardsImages/Древний шторм.png';
import Im220 from '../../images/CardsImages/Дредноут огненный гигант.png';
import Im221 from '../../images/CardsImages/Дретч.png';
import Im222 from '../../images/CardsImages/Дриада.png';
import Im223 from '../../images/CardsImages/Дроу арахномант.png';
import Im224 from '../../images/CardsImages/Дроу благоприятный супруг.png';
import Im225 from '../../images/CardsImages/Дроу верховная мать.png';
import Im226 from '../../images/CardsImages/Дроу жрица Лолс.png';
import Im227 from '../../images/CardsImages/Дроу инквизитор.png';
import Im228 from '../../images/CardsImages/Дроу капитан дома.png';
import Im229 from '../../images/CardsImages/Дроу клинок теней.png';
import Im230 from '../../images/CardsImages/Дроу.png';
import Im231 from '../../images/CardsImages/Друид.png';
import Im232 from '../../images/CardsImages/Дрэглот.png';
import Im233 from '../../images/CardsImages/Дуодрон.png';
import Im234 from '../../images/CardsImages/Дух Аберации.png';
import Im235 from '../../images/CardsImages/Дух дикого огня.png';
import Im236 from '../../images/CardsImages/Дух Зверя.png';
import Im237 from '../../images/CardsImages/Дух Исчадия.png';
import Im238 from '../../images/CardsImages/Дух конструкта.png';
import Im239 from '../../images/CardsImages/Дух Небожителя.png';
import Im240 from '../../images/CardsImages/Дух Нежити.png';
import Im241 from '../../images/CardsImages/Дух Стихии.png';
import Im242 from '../../images/CardsImages/Дух Тени.png';
import Im243 from '../../images/CardsImages/Дух Феи.png';
import Im244 from '../../images/CardsImages/Духовная нага.png';
import Im245 from '../../images/CardsImages/Душитель.png';
import Im246 from '../../images/CardsImages/Дуэргар военачальник.png';
import Im247 from '../../images/CardsImages/Дуэргар деспот.png';
import Im248 from '../../images/CardsImages/Дуэргар каменный страж.png';
import Im249 from '../../images/CardsImages/Дуэргар клинок души.png';
import Im250 from '../../images/CardsImages/Дуэргар ксаррорн.png';
import Im251 from '../../images/CardsImages/Дуэргар молотобоец.png';
import Im252 from '../../images/CardsImages/Дуэргар.png';
import Im253 from '../../images/CardsImages/Дуэргарн повелитель разума.png';
import Im254 from '../../images/CardsImages/Дуэргарский крикун.png';
import Im255 from '../../images/CardsImages/Дымовой мефит.png';
import Im256 from '../../images/CardsImages/Дьявол цепей.png';
import Im257 from '../../images/CardsImages/Дэв.png';
import Im258 from '../../images/CardsImages/Дэтлок манипулятор.png';
import Im259 from '../../images/CardsImages/Дэтлок умертвие.png';
import Im260 from '../../images/CardsImages/Дэтлок.png';
import Im261 from '../../images/CardsImages/Единорог.png';
import Im262 from '../../images/CardsImages/Ездовая лошадь.png';
import Im263 from '../../images/CardsImages/Жаболюд.png';
import Im264 from '../../images/CardsImages/Железная кобра.png';
import Im265 from '../../images/CardsImages/Железный голем.png';
import Im266 from '../../images/CardsImages/Жрец кракена.png';
import Im267 from '../../images/CardsImages/Жрица сахуагинов.png';
import Im268 from '../../images/CardsImages/Заблудший.png';
import Im269 from '../../images/CardsImages/Заводной дубовый стрелок.png';
import Im270 from '../../images/CardsImages/Заратан.png';
import Im271 from '../../images/CardsImages/Зелёный абишай.png';
import Im272 from '../../images/CardsImages/Зелёный слаад.png';
import Im273 from '../../images/CardsImages/Зеленая карга.png';
import Im274 from '../../images/CardsImages/Земляной элементаль.png';
import Im275 from '../../images/CardsImages/Земляной элементальный мирмидон.png';
import Im276 from '../../images/CardsImages/Зимний эладрин.png';
import Im277 from '../../images/CardsImages/Злобоглаз зомби.png';
import Im278 from '../../images/CardsImages/Злобоглаз.png';
import Im279 from '../../images/CardsImages/Злость.png';
import Im280 from '../../images/CardsImages/Золотистый студень.png';
import Im281 from '../../images/CardsImages/Зомби.png';
import Im282 from '../../images/CardsImages/Зорн.png';
import Im283 from '../../images/CardsImages/Зрелый облекс.png';
import Im284 from '../../images/CardsImages/Игольчатая зараза.png';
import Im285 from '../../images/CardsImages/Игольчатый дьявол.png';
import Im286 from '../../images/CardsImages/Извечный морозный гигант.png';
import Im287 from '../../images/CardsImages/Иллюзионист.png';
import Im288 from '../../images/CardsImages/Иссохший гнолл.png';
import Im289 from '../../images/CardsImages/Исчадие преисподней.png';
import Im290 from '../../images/CardsImages/Исчезающий паук.png';
import Im291 from '../../images/CardsImages/Ифрит.png';
import Im292 from '../../images/CardsImages/Йети.png';
import Im293 from '../../images/CardsImages/Йоклол.png';
import Im294 from '../../images/CardsImages/Кабан.png';
import Im295 from '../../images/CardsImages/Камбион.png';
import Im296 from '../../images/CardsImages/Каменный великан.png';
import Im297 from '../../images/CardsImages/Каменный гигант сноходец.png';
import Im298 from '../../images/CardsImages/Каменный голем.png';
import Im299 from '../../images/CardsImages/Каменный защитник.png';
import Im300 from '../../images/CardsImages/Канолот.png';
import Im301 from '../../images/CardsImages/Капитан разбойников.png';
import Im302 from '../../images/CardsImages/Капитан хобгоблинов.png';
import Im303 from '../../images/CardsImages/Карга аннис.png';
import Im304 from '../../images/CardsImages/Карга бьёр.png';
import Im305 from '../../images/CardsImages/Катоблепас.png';
import Im306 from '../../images/CardsImages/Кваггот тоног.png';
import Im307 from '../../images/CardsImages/Кваггот.png';
import Im308 from '../../images/CardsImages/Квадрон.png';
import Im309 from '../../images/CardsImages/Квазит.png';
import Im310 from '../../images/CardsImages/Квилинг.png';
import Im311 from '../../images/CardsImages/Квиппер.png';
import Im312 from '../../images/CardsImages/Кенку.png';
import Im313 from '../../images/CardsImages/Кентавр.png';
import Im314 from '../../images/CardsImages/Кетцалькоатль.png';
import Im315 from '../../images/CardsImages/Ки–рин.png';
import Im316 from '../../images/CardsImages/Коатль.png';
import Im317 from '../../images/CardsImages/Кобольд драконий щит.png';
import Im318 from '../../images/CardsImages/Кобольд изобретатель.png';
import Im319 from '../../images/CardsImages/Кобольд чашуйчатый чародей.png';
import Im320 from '../../images/CardsImages/Кобольд.png';
import Im321 from '../../images/CardsImages/Ковер удушения.png';
import Im322 from '../../images/CardsImages/Козел.png';
import Im323 from '../../images/CardsImages/Колдун архифеи.png';
import Im324 from '../../images/CardsImages/Колдун великого древнего.png';
import Im325 from '../../images/CardsImages/Колдун Исчадия.png';
import Im326 from '../../images/CardsImages/Колючка.png';
import Im327 from '../../images/CardsImages/Корова.png';
import Im328 from '../../images/CardsImages/Король ящеров.png';
import Im329 from '../../images/CardsImages/Корред.png';
import Im330 from '../../images/CardsImages/Косатка.png';
import Im331 from '../../images/CardsImages/Костелап.png';
import Im332 from '../../images/CardsImages/Костяная нага.png';
import Im333 from '../../images/CardsImages/Костяной дьявол.png';
import Im334 from '../../images/CardsImages/Кошка.png';
import Im335 from '../../images/CardsImages/Кошмар.png';
import Im336 from '../../images/CardsImages/Краб.png';
import Im337 from '../../images/CardsImages/Кракен.png';
import Im338 from '../../images/CardsImages/Красный абишай.png';
import Im339 from '../../images/CardsImages/Красный колпак.png';
import Im340 from '../../images/CardsImages/Красный полудракон ветеран.png';
import Im341 from '../../images/CardsImages/Красный слаад.png';
import Im342 from '../../images/CardsImages/Кровавый ястреб.png';
import Im343 from '../../images/CardsImages/Кровопийца.png';
import Im344 from '../../images/CardsImages/Крокодил.png';
import Im345 from '../../images/CardsImages/Кромсатель звездных порождений.png';
import Im346 from '../../images/CardsImages/Крошечный слуга.png';
import Im347 from '../../images/CardsImages/Крутик лорд улья.png';
import Im348 from '../../images/CardsImages/Крылатый кобольд.png';
import Im349 from '../../images/CardsImages/Крыса.png';
import Im350 from '../../images/CardsImages/Крюкастый ужас.png';
import Im351 from '../../images/CardsImages/Ксварт колдун Раксиворта.png';
import Im352 from '../../images/CardsImages/Ксварт.png';
import Im353 from '../../images/CardsImages/Культист.png';
import Im354 from '../../images/CardsImages/Куница.png';
import Im355 from '../../images/CardsImages/Куо-тоа кнут.png';
import Im356 from '../../images/CardsImages/Куо-тоа надзиратель.png';
import Im357 from '../../images/CardsImages/Куо-тоа.png';
import Im358 from '../../images/CardsImages/Куролиск.png';
import Im359 from '../../images/CardsImages/Ламия.png';
import Im360 from '../../images/CardsImages/Лев.png';
import Im361 from '../../images/CardsImages/Левиафан.png';
import Im362 from '../../images/CardsImages/Ледяной великан.png';
import Im363 from '../../images/CardsImages/Ледяной дьявол.png';
import Im364 from '../../images/CardsImages/Ледяной мифит.png';
import Im365 from '../../images/CardsImages/Лекротта.png';
import Im366 from '../../images/CardsImages/Лемур.png';
import Im367 from '../../images/CardsImages/Лесная вайда.png';
import Im368 from '../../images/CardsImages/Летающая змея.png';
import Im369 from '../../images/CardsImages/Летающий меч.png';
import Im370 from '../../images/CardsImages/Летний эладрин.png';
import Im371 from '../../images/CardsImages/Летучая мышь.png';
import Im372 from '../../images/CardsImages/Лиловый гриб.png';
import Im373 from '../../images/CardsImages/Лиловый червь.png';
import Im374 from '../../images/CardsImages/Лич свежеватель разума.png';
import Im375 from '../../images/CardsImages/Лич.png';
import Im376 from '../../images/CardsImages/Личиночный маг звёздных порождений.png';
import Im377 from '../../images/CardsImages/Ловчий.png';
import Im378 from '../../images/CardsImages/Лорд мумия.png';
import Im379 from '../../images/CardsImages/Лорд черепов.png';
import Im380 from '../../images/CardsImages/Лось.png';
import Im381 from '../../images/CardsImages/Лучник.png';
import Im382 from '../../images/CardsImages/Людоящер шаман.png';
import Im383 from '../../images/CardsImages/Людоящер.png';
import Im384 from '../../images/CardsImages/Лютый волк.png';
import Im385 from '../../images/CardsImages/Лютый тролль.png';
import Im386 from '../../images/CardsImages/Лягемот.png';
import Im387 from '../../images/CardsImages/Лягушка.png';
import Im388 from '../../images/CardsImages/Маг дроу.png';
import Im389 from '../../images/CardsImages/Маг.png';
import Im390 from '../../images/CardsImages/Магмин.png';
import Im391 from '../../images/CardsImages/Магмовый мефит.png';
import Im392 from '../../images/CardsImages/Мамонт.png';
import Im393 from '../../images/CardsImages/Мантикора.png';
import Im394 from '../../images/CardsImages/Марид.png';
import Im395 from '../../images/CardsImages/Марилит.png';
import Im396 from '../../images/CardsImages/Марут.png';
import Im397 from '../../images/CardsImages/Мастер вор.png';
import Im398 from '../../images/CardsImages/Мастиф.png';
import Im399 from '../../images/CardsImages/Маурежи.png';
import Im400 from '../../images/CardsImages/Медвежатник.png';
import Im401 from '../../images/CardsImages/Медуза.png';
import Im402 from '../../images/CardsImages/Меззолот.png';
import Im403 from '../../images/CardsImages/Мерзость.png';
import Im404 from '../../images/CardsImages/Меррегон.png';
import Im405 from '../../images/CardsImages/Мерренолот.png';
import Im406 from '../../images/CardsImages/Мерфолк.png';
import Im407 from '../../images/CardsImages/Мерцающий пес.png';
import Im408 from '../../images/CardsImages/Мизел.png';
import Im409 from '../../images/CardsImages/Мимик.png';
import Im410 from '../../images/CardsImages/Минлок.png';
import Im411 from '../../images/CardsImages/Минотавр.png';
import Im412 from '../../images/CardsImages/Могучий слуга Леук-о.png';
import Im413 from '../../images/CardsImages/Молидей.png';
import Im414 from '../../images/CardsImages/Молодой белый дракон.png';
import Im415 from '../../images/CardsImages/Молодой бронзовый дракон.png';
import Im416 from '../../images/CardsImages/Молодой зелёный дракон.png';
import Im417 from '../../images/CardsImages/Молодой золотой дракон.png';
import Im418 from '../../images/CardsImages/Молодой красный дракон.png';
import Im419 from '../../images/CardsImages/Молодой красный теневой дракон.png';
import Im420 from '../../images/CardsImages/Молодой крутик.png';
import Im421 from '../../images/CardsImages/Молодой латунный дракон.png';
import Im422 from '../../images/CardsImages/Молодой медный дракон.png';
import Im423 from '../../images/CardsImages/Молодой ремораз.png';
import Im424 from '../../images/CardsImages/Молодой серебряный дракон.png';
import Im425 from '../../images/CardsImages/Молодой синий дракон.png';
import Im426 from '../../images/CardsImages/Молодой чёрный дракон.png';
import Im427 from '../../images/CardsImages/Монодрон.png';
import Im428 from '../../images/CardsImages/Моркот.png';
import Im429 from '../../images/CardsImages/Морозная саламандра.png';
import Im430 from '../../images/CardsImages/Морская карга.png';
import Im431 from '../../images/CardsImages/Морское отродье.png';
import Im432 from '../../images/CardsImages/Морской конек.png';
import Im433 from '../../images/CardsImages/Мул.png';
import Im434 from '../../images/CardsImages/Мумия.png';
import Im435 from '../../images/CardsImages/Мэйн.png';
import Im436 from '../../images/CardsImages/Мясной голем.png';
import Im437 from '../../images/CardsImages/Наёмный убийца.png';
import Im438 from '../../images/CardsImages/Набассу.png';
import Im439 from '../../images/CardsImages/Наблюдатель.png';
import Im440 from '../../images/CardsImages/Нагпа.png';
import Im441 from '../../images/CardsImages/Нальфешни.png';
import Im442 from '../../images/CardsImages/Нарзугон.png';
import Im443 from '../../images/CardsImages/Невидимый охотник.png';
import Im444 from '../../images/CardsImages/Некромант.png';
import Im445 from '../../images/CardsImages/Неоги личинка.png';
import Im446 from '../../images/CardsImages/Неоги повелитель.png';
import Im447 from '../../images/CardsImages/Неотелид.png';
import Im448 from '../../images/CardsImages/Никалот.png';
import Im449 from '../../images/CardsImages/Нилбог.png';
import Im450 from '../../images/CardsImages/Носорог.png';
import Im451 from '../../images/CardsImages/Нотик.png';
import Im452 from '../../images/CardsImages/Ночная карга.png';
import Im453 from '../../images/CardsImages/Ночной ходок.png';
import Im454 from '../../images/CardsImages/Облачный великан.png';
import Im455 from '../../images/CardsImages/Обыватель.png';
import Im456 from '../../images/CardsImages/Огненная змея.png';
import Im457 from '../../images/CardsImages/Огненный великан.png';
import Im458 from '../../images/CardsImages/Огненный тритон воин.png';
import Im459 from '../../images/CardsImages/Огненный тритон колдун.png';
import Im460 from '../../images/CardsImages/Огненный элементаль.png';
import Im461 from '../../images/CardsImages/Огненный элементальный мирмидон.png';
import Im462 from '../../images/CardsImages/Огр зомби.png';
import Im463 from '../../images/CardsImages/Огр таран.png';
import Im464 from '../../images/CardsImages/Огр.png';
import Im465 from '../../images/CardsImages/Оградитель.png';
import Im466 from '../../images/CardsImages/Огрр паланткин.png';
import Im467 from '../../images/CardsImages/Одиночество.png';
import Im468 from '../../images/CardsImages/Оживленный доспех.png';
import Im469 from '../../images/CardsImages/Ойнолот.png';
import Im470 from '../../images/CardsImages/Окаменевший.png';
import Im471 from '../../images/CardsImages/Олень.png';
import Im472 from '../../images/CardsImages/Они.png';
import Im473 from '../../images/CardsImages/Орг коготь лунтик.png';
import Im474 from '../../images/CardsImages/Орг око груумша.png';
import Im475 from '../../images/CardsImages/Орел.png';
import Im476 from '../../images/CardsImages/Орк вскормленный юртруса.png';
import Im477 from '../../images/CardsImages/Орк клинок Илневала.png';
import Im478 from '../../images/CardsImages/Орк красный клык Шаргааса.png';
import Im479 from '../../images/CardsImages/Орк рука юртруса.png';
import Im480 from '../../images/CardsImages/Орк цепной громила.png';
import Im481 from '../../images/CardsImages/Орк.png';
import Im482 from '../../images/CardsImages/Орог.png';
import Im483 from '../../images/CardsImages/Ортон.png';
import Im484 from '../../images/CardsImages/Осенний эладрин.png';
import Im485 from '../../images/CardsImages/Осьминог.png';
import Im486 from '../../images/CardsImages/Отвратительный йети.png';
import Im487 from '../../images/CardsImages/Отидж.png';
import Im488 from '../../images/CardsImages/Отпрыск глубин.png';
import Im489 from '../../images/CardsImages/Отродье юань-ти.png';
import Im490 from '../../images/CardsImages/Охотничья акула.png';
import Im491 from '../../images/CardsImages/Охранная нага.png';
import Im492 from '../../images/CardsImages/Очарователь.png';
import Im493 from '../../images/CardsImages/Пантера.png';
import Im494 from '../../images/CardsImages/Панцерница.png';
import Im495 from '../../images/CardsImages/Паровой мефит.png';
import Im496 from '../../images/CardsImages/Пасть Гролантора.png';
import Im497 from '../../images/CardsImages/Паук.png';
import Im498 from '../../images/CardsImages/Пегас.png';
import Im499 from '../../images/CardsImages/Пентадрон.png';
import Im500 from '../../images/CardsImages/Перитон.png';
import Im501 from '../../images/CardsImages/Пес смерти.png';
import Im502 from '../../images/CardsImages/Пещерный медведь.png';
import Im503 from '../../images/CardsImages/Пещерный удильщик.png';
import Im504 from '../../images/CardsImages/Пикси.png';
import Im505 from '../../images/CardsImages/Планетар.png';
import Im506 from '../../images/CardsImages/Плащевик.png';
import Im507 from '../../images/CardsImages/Плезиозавр.png';
import Im508 from '../../images/CardsImages/Пожиратель интеллекта.png';
import Im509 from '../../images/CardsImages/Пожиратель.png';
import Im510 from '../../images/CardsImages/Ползающая насыпь.png';
import Im511 from '../../images/CardsImages/Ползающая рука.png';
import Im512 from '../../images/CardsImages/Ползающий падальщик.png';
import Im513 from '../../images/CardsImages/Полководец призраков меча.png';
import Im514 from '../../images/CardsImages/Полтергейст.png';
import Im515 from '../../images/CardsImages/Полуогр.png';
import Im516 from '../../images/CardsImages/Полярный волк.png';
import Im517 from '../../images/CardsImages/Пони.png';
import Im518 from '../../images/CardsImages/Порождение вампира.png';
import Im519 from '../../images/CardsImages/Порождение кьюсса.png';
import Im520 from '../../images/CardsImages/Порождение облекса.png';
import Im521 from '../../images/CardsImages/Поцелуй смерти.png';
import Im522 from '../../images/CardsImages/Преобразователь.png';
import Im523 from '../../images/CardsImages/Приведение.png';
import Im524 from '../../images/CardsImages/Призрак.png';
import Im525 from '../../images/CardsImages/Призыватель.png';
import Im526 from '../../images/CardsImages/Прислужник.png';
import Im527 from '../../images/CardsImages/Пробужденное дерево.png';
import Im528 from '../../images/CardsImages/Пробужденный куст.png';
import Im529 from '../../images/CardsImages/Провидец звёздных порождений.png';
import Im530 from '../../images/CardsImages/Пронзатель.png';
import Im531 from '../../images/CardsImages/Прорицатель.png';
import Im532 from '../../images/CardsImages/Псевдодракон.png';
import Im533 from '../../images/CardsImages/Птеранодон.png';
import Im534 from '../../images/CardsImages/Пугало.png';
import Im535 from '../../images/CardsImages/Пылающий череп.png';
import Im536 from '../../images/CardsImages/Пылевой мефит.png';
import Im537 from '../../images/CardsImages/Разбойник.png';
import Im538 from '../../images/CardsImages/Разведчик.png';
import Im539 from '../../images/CardsImages/Ракшас.png';
import Im540 from '../../images/CardsImages/Реверант.png';
import Im541 from '../../images/CardsImages/Ревун.png';
import Im542 from '../../images/CardsImages/Ремораз.png';
import Im543 from '../../images/CardsImages/Ржавник.png';
import Im544 from '../../images/CardsImages/Рифовая акула.png';
import Im545 from '../../images/CardsImages/Рогатый дьявол.png';
import Im546 from '../../images/CardsImages/Рой воронов.png';
import Im547 from '../../images/CardsImages/Рой жуков.png';
import Im548 from '../../images/CardsImages/Рой крыс.png';
import Im549 from '../../images/CardsImages/Рой летучих мышей.png';
import Im550 from '../../images/CardsImages/Рой насекомых.png';
import Im551 from '../../images/CardsImages/Рой ос.png';
import Im552 from '../../images/CardsImages/Рой пауков.png';
import Im553 from '../../images/CardsImages/Рой трупных личинок.png';
import Im554 from '../../images/CardsImages/Рой ядовитых змей.png';
import Im555 from '../../images/CardsImages/Росток миконида.png';
import Im556 from '../../images/CardsImages/Роф.png';
import Im557 from '../../images/CardsImages/Руттеркин.png';
import Im558 from '../../images/CardsImages/Рух.png';
import Im559 from '../../images/CardsImages/Рыцарь смерти.png';
import Im560 from '../../images/CardsImages/Рыцарь.png';
import Im561 from '../../images/CardsImages/Саблезубый тигр.png';
import Im562 from '../../images/CardsImages/Саламандра.png';
import Im563 from '../../images/CardsImages/Сатир.png';
import Im564 from '../../images/CardsImages/Сахуагин.png';
import Im565 from '../../images/CardsImages/Свежеватель разума (заклинатель).png';
import Im566 from '../../images/CardsImages/Свежеватель разума.png';
import Im567 from '../../images/CardsImages/Свидетель разума.png';
import Im568 from '../../images/CardsImages/Священник.png';
import Im569 from '../../images/CardsImages/Серая слизь 2.png';
import Im570 from '../../images/CardsImages/Серая слизь.png';
import Im571 from '../../images/CardsImages/Серый рендер.png';
import Im572 from '../../images/CardsImages/Серый слаад.png';
import Im573 from '../../images/CardsImages/Сибриекс.png';
import Im574 from '../../images/CardsImages/Синий абишай.png';
import Im575 from '../../images/CardsImages/Синий слаад.png';
import Im576 from '../../images/CardsImages/Скаллк.png';
import Im577 from '../../images/CardsImages/Скелет боевого коня.png';
import Im578 from '../../images/CardsImages/Скелет минотавра.png';
import Im579 from '../../images/CardsImages/Скелет.png';
import Im580 from '../../images/CardsImages/Склизский преследователь.png';
import Im581 from '../../images/CardsImages/Скорпион.png';
import Im582 from '../../images/CardsImages/Слаад головастик.png';
import Im583 from '../../images/CardsImages/Слон.png';
import Im584 from '../../images/CardsImages/Слуга-гомункул.png';
import Im585 from '../../images/CardsImages/Смертельный слаад.png';
import Im586 from '../../images/CardsImages/Смотрящий.png';
import Im587 from '../../images/CardsImages/Собиратель трупов.png';
import Im588 from '../../images/CardsImages/Сова.png';
import Im589 from '../../images/CardsImages/Совомед.png';
import Im590 from '../../images/CardsImages/Солар.png';
import Im591 from '../../images/CardsImages/Сорвиголова.png';
import Im592 from '../../images/CardsImages/Спектр.png';
import Im593 from '../../images/CardsImages/Спрайт.png';
import Im594 from '../../images/CardsImages/Стальной защитник.png';
import Im595 from '../../images/CardsImages/Стальной хищник.png';
import Im596 from '../../images/CardsImages/Старейшина дарклингов.png';
import Im597 from '../../images/CardsImages/Старший мозг.png';
import Im598 from '../../images/CardsImages/Стегозавр.png';
import Im599 from '../../images/CardsImages/Стидер.png';
import Im600 from '../../images/CardsImages/Стражник.png';
import Im601 from '../../images/CardsImages/Строжевой дрейк.png';
import Im602 from '../../images/CardsImages/Студенистый куб.png';
import Im603 from '../../images/CardsImages/Суккуб Инкуб.png';
import Im604 from '../../images/CardsImages/Тёмный страж.png';
import Im605 from '../../images/CardsImages/Танарукк.png';
import Im606 from '../../images/CardsImages/Тараск.png';
import Im607 from '../../images/CardsImages/Тварь бездны.png';
import Im608 from '../../images/CardsImages/Темная мантия.png';
import Im609 from '../../images/CardsImages/Теневой демон.png';
import Im610 from '../../images/CardsImages/Теневой мастифф.png';
import Im611 from '../../images/CardsImages/Теневой танцор.png';
import Im612 from '../../images/CardsImages/Тень.png';
import Im613 from '../../images/CardsImages/Тигр.png';
import Im614 from '../../images/CardsImages/Тиран смерти.png';
import Im615 from '../../images/CardsImages/Тираннозавр рекс.png';
import Im616 from '../../images/CardsImages/Ткач мрака.png';
import Im617 from '../../images/CardsImages/Тлинкалли.png';
import Im618 from '../../images/CardsImages/Топороклюв.png';
import Im619 from '../../images/CardsImages/Торговец душами.png';
import Im620 from '../../images/CardsImages/Тортл друид.png';
import Im621 from '../../images/CardsImages/Тортл.png';
import Im622 from '../../images/CardsImages/Траппер.png';
import Im623 from '../../images/CardsImages/Трент.png';
import Im624 from '../../images/CardsImages/Три-крин вариант.png';
import Im625 from '../../images/CardsImages/Три-крин псионик.png';
import Im626 from '../../images/CardsImages/Три-крин.png';
import Im627 from '../../images/CardsImages/Тридрон.png';
import Im628 from '../../images/CardsImages/Трицерапторс.png';
import Im629 from '../../images/CardsImages/Троглодит.png';
import Im630 from '../../images/CardsImages/Тролль-дух.png';
import Im631 from '../../images/CardsImages/Тролль.png';
import Im632 from '../../images/CardsImages/Трупоцвет.png';
import Im633 from '../../images/CardsImages/Тур.png';
import Im634 from '../../images/CardsImages/Удав.png';
import Im635 from '../../images/CardsImages/Улитарид.png';
import Im636 from '../../images/CardsImages/Улыбающийся облачный гигант.png';
import Im637 from '../../images/CardsImages/Ультролот.png';
import Im638 from '../../images/CardsImages/Умертвие.png';
import Im639 from '../../images/CardsImages/Упряжная лошадь.png';
import Im640 from '../../images/CardsImages/Упырь.png';
import Im641 from '../../images/CardsImages/Ускользающий зверь.png';
import Im642 from '../../images/CardsImages/Утробный демон.png';
import Im643 from '../../images/CardsImages/Ученик волшебникаа.png';
import Im644 from '../../images/CardsImages/Фанатик культа.png';
import Im645 from '../../images/CardsImages/Феникс.png';
import Im646 from '../../images/CardsImages/Фламф.png';
import Im647 from '../../images/CardsImages/Флинд.png';
import Im648 from '../../images/CardsImages/Фомор.png';
import Im649 from '../../images/CardsImages/Хезроу.png';
import Im650 from '../../images/CardsImages/Химера.png';
import Im651 from '../../images/CardsImages/Хитин.png';
import Im652 from '../../images/CardsImages/Хобгоблин военачальник.png';
import Im653 from '../../images/CardsImages/Хобгоблин железная тень.png';
import Im654 from '../../images/CardsImages/Хобгоблин опустошитель.png';
import Im655 from '../../images/CardsImages/Хобгоблин.png';
import Im656 from '../../images/CardsImages/Холдрит.png';
import Im657 from '../../images/CardsImages/Холмовой великан.png';
import Im658 from '../../images/CardsImages/Цеповая улитка.png';
import Im659 from '../../images/CardsImages/Циклоп.png';
import Im660 from '../../images/CardsImages/Чёрный абишай.png';
import Im661 from '../../images/CardsImages/Чазм.png';
import Im662 from '../../images/CardsImages/Человекообразная обезьяна.png';
import Im663 from '../../images/CardsImages/Чемпион.png';
import Im664 from '../../images/CardsImages/Черепная крыса.png';
import Im665 from '../../images/CardsImages/Черная слизь.png';
import Im666 from '../../images/CardsImages/Черный медведь.png';
import Im667 from '../../images/CardsImages/Чистокровная юань-ти.png';
import Im668 from '../../images/CardsImages/Чудище звездных пораждений.png';
import Im669 from '../../images/CardsImages/Чууль.png';
import Im670 from '../../images/CardsImages/Шакал.png';
import Im671 from '../../images/CardsImages/Шакальник.png';
import Im672 from '../../images/CardsImages/Шипастый дьявол.png';
import Im673 from '../../images/CardsImages/Шлемономный ужас.png';
import Im674 from '../../images/CardsImages/Шпион.png';
import Im675 from '../../images/CardsImages/Штормовой великан.png';
import Im676 from '../../images/CardsImages/Штормовой гигант квинтэссент.png';
import Im677 from '../../images/CardsImages/Шусува.png';
import Im678 from '../../images/CardsImages/Щитостраж.png';
import Im679 from '../../images/CardsImages/Эйдолон.png';
import Im680 from '../../images/CardsImages/Эйзель.png';
import Im681 from '../../images/CardsImages/Элитный воин грунг.png';
import Im682 from '../../images/CardsImages/Элитный воитель дроу.png';
import Im683 from '../../images/CardsImages/Эмпирей.png';
import Im684 from '../../images/CardsImages/Эриния.png';
import Im685 from '../../images/CardsImages/Эттеркап.png';
import Im686 from '../../images/CardsImages/Эттин.png';
import Im687 from '../../images/CardsImages/Юань-ти говорящая в кошмарах.png';
import Im688 from '../../images/CardsImages/Юань-ти говорящая в мыслях.png';
import Im689 from '../../images/CardsImages/Юань-ти проклинатель 1.png';
import Im690 from '../../images/CardsImages/Юань-ти проклинатель 2.png';
import Im691 from '../../images/CardsImages/Юань-ти проклинатель 3.png';
import Im692 from '../../images/CardsImages/Юань-ти страж выводка.png';
import Im693 from '../../images/CardsImages/Юань-ти хозяин тьмы.png';
import Im694 from '../../images/CardsImages/Юань–ти анафема.png';
import Im695 from '../../images/CardsImages/Ягнолот.png';
import Im696 from '../../images/CardsImages/Ядовитая змея.png';
import Im697 from '../../images/CardsImages/Ядовитый тролль.png';
import Im698 from '../../images/CardsImages/Ястреб.png';
import Im699 from '../../images/CardsImages/Ящерица.png';
import S1 from '../../images/Svitki/Свиток1.png';
import S2 from '../../images/Svitki/Свиток2.png';
import S3 from '../../images/Svitki/Свиток3.png';
import S4 from '../../images/Svitki/Свиток4.png';
import OptionCardImg from '../OptionCardImg/OptionCardImg';
import OptionCase from '../OptionCase/OptionCase';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import OptionAllain from '../OptionAllain/OptionAllain';
import BaseTip from '../BaseTip/BaseTip';
import BaseTipCase from '../BaseTipCase/BaseTipCase';
type AlertProps = {
};
const SpellMain = ({ }: AlertProps): JSX.Element => {
    const [cards, setCards] = useState<string[][]>([]);
    const [newCard, setNewCard] = useState<string[]>([]);
    const [CSV, setCSV] = useState("");
    const newConst = "\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";";
    const [newCSV, setNewCSV] = useState("\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";");
    const [openThisBaseCase, setOpenThisBaseCase] = useState([false, false, false, false, false, false, false, false]);
    const [makeCSV, setMakeCSV] = useState(0);
    const [showOptions, setShowOptions] = useState(true);
    const [showRedactor, setShowRedactor] = useState(true);
    const [pyt, setPyt] = useState<File[] | undefined[]>([]);
    const [pytSvitok, setPytSvitok] = useState<File[] | undefined[]>([]);
    const [targetOption, setTargetOptions] = useState([false, false, false, false, false, false, false, false, false, false, false]);
    const [colors, setColors] = useState(["#ffffff", "#9C0000", "#9C0000", "#ffffff", "#fff2d6", "#000000", "#9C0000", "#FFFFFF", "#9C0000", "#fff2d6", "#000000", "#9C0000", "#FFFFFF", "#fff2d6", "#fff2d6", "#fff2d6", "#fff2d6", "#fff2d6", "#9C0000", "#FFFFFF", "#fff2d6", "#fff2d6", "#9C0000", "#9C0000", "#9C0000", "#9C0000", "#000000", "#000000", "#000000", "#000000", "#9C0000", "#9C0000", "#9C0000", "#9C0000", "#9C0000", "#9C0000", "#9C0000", "#000000", "#000000", "#000000", "#000000", "#9C0000", "#9C0000", "#9C0000", "#9C0000", "#9C0000", "#9C0000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#9C0000"]);
    const colorsNames = ["--ListColor", "--CardColorObvodka", "--CardZagolovokBackgroundColor", "--CardZagolovokTextColor", "--CardDescriptionBackgroundColor", "--CardDescriptionColor", "--CardDownBackgroundColor", "--CardDownTextColor", "--CardBackColorObvodka", "--CardBackZagolovokBackgroundColor", "--CardBackZagolovokTextColor", "--CardPerBackgroundColor", "--CardPerTextColor", "--CardBackDescriptionBackgroundColor", "--Text1BackgroundColor", "--Text2BackgroundColor", "--Text3BackgroundColor", "--Text4BackgroundColor", "--CardBackDownBackgroundColor", "--CardBackDownTextColor", "--StatsColor", "--SkilsColor", "--CardPer1BackgroundColor", "--CardPer2BackgroundColor", "--CardPer3BackgroundColor", "--CardPer4BackgroundColor", "--Text1Color", "--Text2Color", "--Text3Color", "--Text4Color", "--Title2Color", "--Title3Color", "--Title4Color", "--ACTitleColor", "--HPTitleColor", "--SpeedTitleColor", "--EmptyTitleColor", "--ACTextColor", "--HPTextColor", "--SpeedTextColor", "--EmptyTextColor", "--SilTitleColor", "--LovTitleColor", "--TelTitleColor", "--IntTitleColor", "--MdrTitleColor", "--HarTitleColor", "--SilTextColor", "--LovTextColor", "--TelTextColor", "--IntTextColor", "--MdrTextColor", "--HarTextColor", "--CardPer0BackgroundColor"];
    const [sizePole, setSizesPole] = useState([35, 15, 35, 15, 48, 30, 5, 5, 5, 5, 15, 297, 210, 1]);
    const sizePoleNames = ["--CardZagolovokTextSize", "--CardDownTextSize", "--CardBackZagolovokTextSize", "--CardPerTextSize", "--StatHeight", "--SkillHeight", "--Per1Height", "--Per2Height", "--Per3Height", "--Per4Height", "--CardBackDownTextSize", "--ListH", "--ListW", "--Per0Height"];
    const [sizeText, setSizesText] = useState([16, 9, 14, 16, 8, 10, 10, 10, 10, 10, 10, 10, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 11, 11, 11, 11, 110]);
    const sizeTextNames = ["--CardZagolovokTextFont", "--CardDescriptionFont", "--CardDownTextFont", "--CardBackZagolovokTextFont", "--CardPerTextFont", "--ACTitleKegl", "--ACTextKegl", "--HPTitleKegl", "--HPTextKegl", "--SpeedTitleKegl", "--SpeedTextKegl", "--EmptyTitleKegl", "--EmptyTextKegl", "--SilTitle", "--SilText", "--LovTitle", "--LovText", "--TelTitle", "--TelText", "--IntTitle", "--IntText", "--MdrTitle", "--MdrText", "--HarTitle", "--HarText", "--CardBackDownTextFont", "--Title2Kegl", "--Title3Kegl", "--Title4Kegl", "--LineHeight"];
    const [alignValue, setAlignValue] = useState([2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
    const alignNames = ["--CardZagolovokTextAlign", "--CardDescriptionTextAlign", "--CardDownTextAlign", "--CardBackZagolovokTextAlign", "--CardPerTextAlign", "--CardBackDownTextAlign", "--CardBackDescriptionText1Align", "--CardBackDescriptionText2Align", "--CardBackDescriptionText3Align", "--CardBackDescriptionText4Align", "--CardBackDescriptionTitle2Align", "--CardBackDescriptionTitle3Align", "--CardBackDescriptionTitle4Align", "--ACAlign", "--HPAlign", "--SpeedAlign", "--EmptyAlign", "--SilTitleAlign", "--LovTitleAlign", "--TelTitleAlign", "--IntTitleAlign", "--MdrTitleAlign", "--HarTitleAlign", "--SilTextAlign", "--LovTextAlign", "--TelTextAlign", "--IntTextAlign", "--MdrTextAlign", "--HarTextAlign"];
    const [paddingText, setPaddingText] = useState([10, 10, 10, 0, 10, 4, 10, 2, 13, 23, 13, 23, 2, 6, 10, 4, 10, 2, 2, 4, 4, 4, 10, 4, 4, 4, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 8, 0, 8, 4, 8, 4, 8, 10, 11]);
    const paddingNames = ["--ListPaddingT", "--ListPaddingBok", "--ListPaddingB", "--CardPaddingT", "--CardPaddingR", "--CardPaddingB", "--CardPaddingL", "--CardZagolovokTextPadding", "--CardDescriptionPaddingT", "--CardDescriptionPaddingR", "--CardDescriptionPaddingB", "--CardDescriptionPaddingL", "--CardDownTextPadding", "--CardBackPaddingT", "--CardBackPaddingR", "--CardBackPaddingB", "--CardBackPaddingL", "--CardBackZagolovokTextPadding", "--CardPerTextPadding", "--StatyPaddingT", "--StatyPaddingR", "--StatyPaddingB", "--StatyPaddingL", "--ACTitlePaddingR", "--HPTitlePaddingR", "--SpeedTitlePaddingR", "--EmptyTitlePaddingR", "--ACTitlePaddingL", "--HPTitlePaddingL", "--SpeedTitlePaddingL", "--EmptyTitlePaddingL", "--ACTextPaddingR", "--HPTextPaddingR", "--SpeedTextPaddingR", "--EmptyTextPaddingR", "--ACTextPaddingL", "--HPTextPaddingL", "--SpeedTextPaddingL", "--EmptyTextPaddingL", "--SkillsPaddingT", "--SkillsPaddingR", "--SkillsPaddingB", "--SkillsPaddingL", "--CardBackDescriptionPaddingT", "--CardBackDescriptionPaddingR", "--CardBackDescriptionPaddingB", "--CardBackDescriptionPaddingL", "--TextPaddingT", "--TextPaddingR", "--TextPaddingB", "--TextPaddingL", "--CardBackDownTextPadding", "--CardBackBetweenPadding"];
    const [borderRadiusValue, setBorderRadiusValue] = useState([11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]);
    const bordwrRadiusNames = ["--CardZagolovok┌", "--CardZagolovok┐", "--CardZagolovok┘", "--CardZagolovok└", "--CardInside┌", "--CardInside┐", "--CardInside┘", "--CardInside└", "--CardDown┌", "--CardDown┐", "--CardDown┘", "--CardDown└", "--CardBackZagolovok┌", "--CardBackZagolovok┐", "--CardBackZagolovok┘", "--CardBackZagolovok└", "--CardBackPer┌", "--CardBackPer┐", "--CardBackPer┘", "--CardBackPer└", "--CardBackInside┌", "--CardBackInside┐", "--CardBackInside┘", "--CardBackInside└", "--CardBackDown┌", "--CardBackDown┐", "--CardBackDown┘", "--CardBackDown└", "--CardBackInside2┌", "--CardBackInside2┐", "--CardBackInside2┘", "--CardBackInside2└"];
    const [imgSize, setImgSize] = useState([100, 100, 0, 10, 50, 0, 0]);
    const imgSizeNames = ["--ImgHeight", "--ImgWidth", "--ImgRotate", "--ImgPaddingT", "--ImgPaddingB", "--ImgPaddingL", "--ImgPaddingR"];
    const [minMax, setMinMax] = useState([7, 10]);
    const [blockMinMax, setBlockMinMax] = useState(false);
    const [blockColor, setBlockColor] = useState([false]);
    const [blockSizePole, setBlockSizePole] = useState([false]);
    const [blockImgSize, setBlockImgSize] = useState([false, true, false, false, false, false, false]);
    const [blockSizeText, setBlockSizeText] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
    const [blockPaddingText, setBlockPaddingText] = useState([false]);
    const [blockAlignValue, setBlockAlignValue] = useState([false]);
    const [blockBorderRadius, setBlockBorderRadius] = useState([false]);
    const [kolvo, setKolvo] = useState([2, 2]);
    const perepolnen: boolean[] = [];
    const [perepolnenText, setPerepolnenText] = useState('');
    const [startPerepolnen, setStartPerepolnen] = useState(0);
    const [isBack, setIsBack] = useState(false);
    const [lineCut, setLineCut] = useState(true);
    const [doubleBack, setDoubleBack] = useState(false);
    const fontMas = ["BookerlyBold", "BookerlyBoldItalic", "BookerlyDisplayBoldItalic", "BookerlyDisplay", "BookerlyItalic", "BookerlyLightItalic", "BookerlyLight", "Bookerly", "EtnaFreeFont", "GogonoCocoaMochiCyrillic", "GULAGPavljenko", "HellasDustCyrillic", "MorningBreezeBold", "MorningBreezeItalic", "MorningBreezeLight", "MorningBreeze", "OldSoviet", "SquareMeal", "ZarubkaTypeRegular", "ZaychikRegular"];
    const [targetFont1, setTargetFont1] = useState(7);
    const [isCSVRedactor, setIsCSVRedactor] = useState(false);
    const [rubahaCaseNumber, setRubahaCaseNumber] = useState(54);
    const [svitokCaseNumber, setSvitokCaseNumber] = useState(1);
    const [targetBackgroundNumber, setTargetBackgroundNumber] = useState(278);
    const [targetSvitokNumber, setTargetSvitokNumber] = useState(2);
    const [needUpdate, setNeedUpdate] = useState(false);
    const setTarget = (a: number, b: boolean) => {
        const M = [];
        for (let i = 0; i < targetOption.length; i++) M[i] = false;
        M[a] = b;
        setTargetOptions(M);
    };
    const getAlignText = (number: number) => {
        switch (number) {
            case 1:
                return "left";
            case 2:
                return "center";
            case 3:
                return "right";
            case 4:
                return "justify";
            default:
                return "left";
        }
    }
    useEffect(() => {
        document.getElementById("ThisIsColorsConst")?.style.setProperty("--h", String(kolvo[0]));
        document.getElementById("ThisIsColorsConst")?.style.setProperty("--w", String(kolvo[1]));
    }, [kolvo]);
    useEffect(() => {
        document.getElementById("ThisIsColorsConst")?.style.setProperty("--LineCut", lineCut ? '1px' : '0px');
    }, [lineCut]);
    useEffect(() => {
        for (let i = 0; i < colorsNames.length; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(colorsNames[i], colors[i]);
    }, [colors]);
    useEffect(() => {
        for (let i = 0; i < 2; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(imgSizeNames[i], blockImgSize[i] === true ? 'auto' : imgSize[i] + '%');
        document.getElementById("ThisIsColorsConst")?.style.setProperty(imgSizeNames[2], imgSize[2] + 'deg');
        for (let i = 3; i < 7; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(imgSizeNames[i], imgSize[i] + 'px');
    }, [imgSize]);
    useEffect(() => {
        const A = document.getElementById("ThisIsColorsConst");
        if (A) for (let i = 0; i < sizePoleNames.length; i++) A.style.setProperty(sizePoleNames[i], String(sizePole[i]) + 'px');
        if (A) A.style.setProperty(sizePoleNames[11], String(sizePole[11] - 0.5) + 'mm');
        if (A) A.style.setProperty(sizePoleNames[12], String(sizePole[12]) + 'mm');
    }, [sizePole]);
    useEffect(() => {
        for (let i = 0; i < sizeTextNames.length; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(sizeTextNames[i], String(sizeText[i]) + 'px');
        document.getElementById("ThisIsColorsConst")?.style.setProperty(sizeTextNames[29], String(sizeText[29] / 100));
    }, [sizeText]);
    useEffect(() => {
        for (let i = 0; i < alignNames.length; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(alignNames[i], String(getAlignText(alignValue[i])));
    }, [alignValue]);
    useEffect(() => {
        let Car: string[] = [];
        getCardFromCSVLine(newCSV, Car, 0, newCSV.length - 1, '');
        setNewCard(Car);
        setStartPerepolnen(startPerepolnen + 1);
    }, [newCSV]);
    useEffect(() => {
        for (let i = 0; i < paddingNames.length; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(paddingNames[i], String(paddingText[i]) + 'px');
    }, [paddingText]);
    useEffect(() => {
        for (let i = 0; i < bordwrRadiusNames.length; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(bordwrRadiusNames[i], String(borderRadiusValue[i]) + 'px');
    }, [bordwrRadiusNames]);
    const setSizePole = (a: number, b: number, vlog?: boolean) => {
        const M = [...sizePole];
        M[a] = b;
        const V = [...blockSizePole];
        if (vlog != undefined) V[a] = vlog;
        if (V[2]) M[2] = M[0];
        if (V[7]) M[7] = M[6];
        if (V[8]) M[8] = M[6];
        if (V[9]) M[9] = M[6];
        if (V[10]) M[10] = M[1];
        setSizesPole(M);
    };
    const setBlocSizePole = (a: number, b: number, bloc: boolean) => {
        const M = [...blockSizePole];
        M[a] = bloc;
        setSizePole(a, b, bloc);
        setBlockSizePole(M);
    };
    const setImgSizes = (a: number, b: number, vlog?: boolean) => {
        const M = [...imgSize];
        M[a] = b;
        const V = [...blockImgSize];
        if (vlog != undefined) V[a] = vlog;
        if (V[2]) M[2] = 0;
        setImgSize(M);
    };
    const setBlocImgSize = (a: number, b: number, bloc: boolean) => {
        const M = [...blockImgSize];
        M[a] = bloc;
        setImgSizes(a, b, bloc);
        setBlockImgSize(M);
    };
    const setColor = (a: number, b: string, vlog?: boolean) => {
        const M = [...colors];
        M[a] = b;
        const V = [...blockColor];
        if (vlog != undefined) V[a] = vlog;
        if (V[2]) M[2] = M[1];
        if (V[6]) M[6] = M[1];
        if (V[7]) M[7] = M[3];
        if (V[8]) M[8] = M[1];
        if (V[9]) M[9] = M[2];
        if (V[10]) M[10] = M[3];
        if (V[11]) M[11] = M[8];
        if (V[12]) M[12] = M[10];
        if (V[13]) M[13] = M[4];
        if (V[20]) M[20] = M[13];
        if (V[34]) M[34] = M[33];
        if (V[35]) M[35] = M[33];
        if (V[36]) M[36] = M[33];
        if (V[38]) M[38] = M[37];
        if (V[39]) M[39] = M[37];
        if (V[40]) M[40] = M[37];
        if (V[21]) M[21] = M[13];
        if (V[42]) M[42] = M[41];
        if (V[43]) M[43] = M[41];
        if (V[44]) M[44] = M[41];
        if (V[45]) M[45] = M[41];
        if (V[46]) M[46] = M[41];
        if (V[48]) M[48] = M[47];
        if (V[49]) M[49] = M[47];
        if (V[50]) M[50] = M[47];
        if (V[51]) M[51] = M[47];
        if (V[52]) M[52] = M[47];
        if (V[22]) M[22] = M[8];
        if (V[14]) M[14] = M[13];
        if (V[23]) M[23] = M[22];
        if (V[24]) M[24] = M[22];
        if (V[25]) M[25] = M[22];
        if (V[15]) M[15] = M[14];
        if (V[16]) M[16] = M[14];
        if (V[17]) M[17] = M[14];
        if (V[30]) M[30] = M[26];
        if (V[31]) M[31] = M[30];
        if (V[32]) M[32] = M[30];
        if (V[27]) M[27] = M[26];
        if (V[28]) M[28] = M[26];
        if (V[29]) M[29] = M[26];
        if (V[18]) M[18] = M[6];
        if (V[19]) M[19] = M[7];
        if (V[53]) M[53] = M[8];
        setColors(M);
    };
    const setBlocColor = (a: number, b: string, bloc: boolean) => {
        const M = [...blockColor];
        M[a] = bloc;
        setColor(a, b, bloc);
        setBlockColor(M);
    };
    const setSizeText = (a: number, b: number, vlog?: boolean) => {
        const M = [...sizeText];
        M[a] = b;
        const V = [...blockSizeText];
        if (vlog != undefined) V[a] = vlog;
        if (V[3]) M[3] = M[0];
        if (V[7]) M[7] = M[5];
        if (V[9]) M[9] = M[5];
        if (V[11]) M[11] = M[5];
        if (V[8]) M[8] = M[6];
        if (V[10]) M[10] = M[6];
        if (V[12]) M[12] = M[6];
        if (V[15]) M[15] = M[13];
        if (V[17]) M[17] = M[13];
        if (V[19]) M[19] = M[13];
        if (V[21]) M[21] = M[13];
        if (V[23]) M[23] = M[13];
        if (V[16]) M[16] = M[14];
        if (V[18]) M[18] = M[14];
        if (V[20]) M[20] = M[14];
        if (V[22]) M[22] = M[14];
        if (V[24]) M[24] = M[14];
        if (V[27]) M[27] = M[26];
        if (V[28]) M[28] = M[26];
        if (V[25]) M[25] = M[2];
        setSizesText(M);
    };
    const setBlocSizeText = (a: number, b: number, bloc: boolean) => {
        const M = [...blockSizeText];
        M[a] = bloc;
        setSizeText(a, b, bloc);
        setBlockSizeText(M);
    };
    const setAlignsValue = (a: number, b: number, vlog?: boolean) => {
        const M = [...alignValue];
        M[a] = b;
        const V = [...blockAlignValue];
        if (vlog != undefined) V[a] = vlog;
        setAlignValue(M);
    };
    const setBlocAlignValue = (a: number, b: number, bloc: boolean) => {
        const M = [...blockAlignValue];
        M[a] = bloc;
        setAlignsValue(a, b, bloc);
        setBlockAlignValue(M);
    };
    const setPaddinText = (a: number, b: number, vlog?: boolean) => {
        const M = [...paddingText];
        M[a] = b;
        const V = [...blockPaddingText];
        if (vlog != undefined) V[a] = vlog;
        if (V[13]) M[13] = M[3];
        if (V[14]) M[14] = M[4];
        if (V[15]) M[15] = M[5];
        if (V[16]) M[16] = M[6];
        if (V[17]) M[17] = M[7];
        if (V[24]) M[24] = M[23];
        if (V[25]) M[25] = M[23];
        if (V[26]) M[26] = M[23];
        if (V[28]) M[28] = M[27];
        if (V[29]) M[29] = M[27];
        if (V[30]) M[30] = M[27];
        if (V[32]) M[32] = M[31];
        if (V[33]) M[33] = M[31];
        if (V[34]) M[34] = M[31];
        if (V[36]) M[36] = M[35];
        if (V[37]) M[37] = M[35];
        if (V[38]) M[38] = M[35];
        if (V[51]) M[51] = M[12];
        setPaddingText(M);
    };
    const setBlocPaddingText = (a: number, b: number, bloc: boolean) => {
        const M = [...blockPaddingText];
        M[a] = bloc;
        setPaddinText(a, b, bloc);
        setBlockPaddingText(M);
    };
    const setBordersRadiusValue = (a: number, b: number, vlog?: boolean) => {
        const M = [...borderRadiusValue];
        M[a] = b;
        const V = [...blockBorderRadius];
        if (vlog != undefined) V[a] = vlog;
        if (V[1]) M[1] = M[0];
        if (V[2]) M[2] = M[0];
        if (V[3]) M[3] = M[0];
        if (V[5]) M[5] = M[4];
        if (V[6]) M[6] = M[4];
        if (V[7]) M[7] = M[4];
        if (V[9]) M[9] = M[8];
        if (V[10]) M[10] = M[8];
        if (V[11]) M[11] = M[8];
        if (V[13]) M[13] = M[12];
        if (V[14]) M[14] = M[12];
        if (V[15]) M[15] = M[12];
        if (V[17]) M[17] = M[16];
        if (V[18]) M[18] = M[16];
        if (V[19]) M[19] = M[16];
        if (V[21]) M[21] = M[20];
        if (V[22]) M[22] = M[20];
        if (V[23]) M[23] = M[20];
        if (V[25]) M[25] = M[24];
        if (V[26]) M[26] = M[24];
        if (V[27]) M[27] = M[24];
        if (V[29]) M[29] = M[28];
        if (V[30]) M[30] = M[28];
        if (V[31]) M[31] = M[28];
        setBorderRadiusValue(M);
    };
    const setBlocBorderRadius = (a: number, b: number, bloc: boolean) => {
        const M = [...blockBorderRadius];
        M[a] = bloc;
        setBordersRadiusValue(a, b, bloc);
        setBlockBorderRadius(M);
    };
    const setMinMaxs = (a: number, b: number, vlog?: boolean) => {
        const M = [...minMax];
        M[a] = b;
        let V = blockMinMax;
        if (vlog != undefined) V = vlog;
        if (V) M[1] = M[0];
        setMinMax(M);
    };
    const setBlocMinMax = (a: number, b: number, bloc: boolean) => {
        let M = blockMinMax;
        M = bloc;
        setMinMaxs(a, b, bloc);
        setBlockMinMax(M);
    };
    const setKolv = (a: number, b: number) => {
        const K = [...kolvo];
        K[a] = b;
        setKolvo(K);
    };
    const plusPerepolnen = (num: number, bool: boolean) => {
        if (num == -1) perepolnen[0] = bool;
        else perepolnen[num + 1] = bool;
    }
    const setPoles = (text: string[]) => {
        let R = '';
        for (let i = 0; i < 35; i++) R = R + '\"' + text[i]?.replaceAll('\"', '\"\"')?.replaceAll('\n', 'Џ') + '\"' + ';';
        setNewCSV(R);
        setNewCard(text);
    }
    const readFile = () => {
        const q = (document.getElementById("InputFile") as HTMLInputElement).files;
        if (q != null) {
            let reader = new FileReader();
            reader.readAsText(q[0], 'windows-1251');
            reader.onload = function () {
                let r = reader.result;
                if (r) setCSV(r as string);
                setMakeCSV(makeCSV + 1);
            };
            (document.getElementById("InputFile") as HTMLInputElement).value = "";
        };
    };
    useEffect(() => {
        makeCardsFromCSV();
    }, [makeCSV]);
    useEffect(() => {
        setNeedUpdate(true);
    }, [CSV]);
    useEffect(() => {
        let flag = true;
        if (perepolnen.length != 0) {
            let perText = "";
            for (let i = 0; i < perepolnen.length; i++)
                if (perepolnen[i]) {
                    if (flag) {
                        flag = false;
                        perText = "Переполнение в: ";
                    }
                    perText = perText + '\n' + (i == 0 ? 'Тестовой карточке' : cards[i - 1][0]);
                }
            setPerepolnenText(perText);
        }
    }, [perepolnen]);
    const downloadFile = () => {
        let blob = new Blob(["\ufeff", CSV], { type: "text/csv;charset=windows-1251" });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = "CSV-File.csv";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        URL.revokeObjectURL(url);
    };
    const getCardFromCSVLine = (CSV: string, C: string[], pointStart: number, pointEnd: number, newCSV: string) => {
        for (let i = 0; pointStart < pointEnd || i < 35; i++) {
            C[i] = '';
            if (pointEnd <= pointStart) {
                C[i] = '';
            } else if (CSV[pointStart] == '\"') {
                pointStart++;
                let nextK = CSV.indexOf('\"', pointStart);
                while (CSV[nextK + 1] == '\"' && nextK <= pointEnd && nextK != -1) {
                    C[i] = C[i] + CSV.slice(pointStart, nextK + 1);
                    pointStart = nextK + 2;
                    nextK = CSV.indexOf('\"', nextK + 2);
                }
                if (nextK > pointEnd || nextK == -1) {
                    C[i] = C[i] + CSV.slice(pointStart, pointEnd);
                    pointStart = pointEnd + 1;
                } else {
                    C[i] = C[i] + CSV.slice(pointStart, nextK);
                    pointStart = nextK + 1;
                    const FirstTZ = CSV.indexOf(';', pointStart);
                    if (FirstTZ <= pointEnd && FirstTZ != -1) {
                        pointStart = FirstTZ + 1;
                    } else {
                        pointStart = pointEnd;
                    }
                }
            } else {
                const FirstTZ = CSV.indexOf(';', pointStart);
                if (FirstTZ <= pointEnd && FirstTZ != -1) {
                    C[i] = CSV.slice(pointStart, FirstTZ);
                    pointStart = FirstTZ + 1;
                } else {
                    C[i] = CSV.slice(pointStart, pointEnd + 1);
                    pointStart = pointEnd;
                }
            }
            C[i] = C[i].replaceAll('\r', '');
            newCSV = newCSV + '\"' + C[i].replaceAll('\"', '\"\"') + '\"' + ';';
            C[i] = C[i].replaceAll('Џ', '\n');
        }
        return newCSV;
    };
    const setNU = () => {
        setTimeout(() => {
            setNeedUpdate(false);
        }, 300);
    };
    const makeCardsFromCSV = () => {
        let nowPoint = 0, nextEnter = 0, endPoint = CSV.length - 1;
        let cardNumber = 0, newCSV = '';
        const C: string[][] = [];
        while ((nextEnter = CSV.indexOf('\n', nowPoint)) != -1) {
            C[cardNumber] = [];
            newCSV = getCardFromCSVLine(CSV, C[cardNumber], nowPoint, nextEnter - 1, newCSV) + '\n';
            nowPoint = nextEnter + 1;
            cardNumber++;
        };
        C[cardNumber] = [];
        newCSV = getCardFromCSVLine(CSV, C[cardNumber], nowPoint, CSV.length - 1, newCSV);
        if (document.getElementById('CTRLV') as HTMLInputElement != undefined) (document.getElementById('CTRLV') as HTMLInputElement).value = String(cardNumber);
        setCards(C);
        setCSV(newCSV);
        setNU();
    }
    const getBackCardImg = (PoleStr: string) => {
        let A = Number(PoleStr);
        if (A == undefined || A == 0 || A > 699 || Number.isNaN(A)) {
            A = targetBackgroundNumber;
        }
        if (A < 0 && A > -51) {
            const r = pyt[0 - A - 1];
            return (
                r != undefined ? URL.createObjectURL(r) : undefined
            );
        }
        switch (A) {
            case 1: return (Im1);
            case 2: return (Im2);
            case 3: return (Im3);
            case 4: return (Im4);
            case 5: return (Im5);
            case 6: return (Im6);
            case 7: return (Im7);
            case 8: return (Im8);
            case 9: return (Im9);
            case 10: return (Im10);
            case 11: return (Im11);
            case 12: return (Im12);
            case 13: return (Im13);
            case 14: return (Im14);
            case 15: return (Im15);
            case 16: return (Im16);
            case 17: return (Im17);
            case 18: return (Im18);
            case 19: return (Im19);
            case 20: return (Im20);
            case 21: return (Im21);
            case 22: return (Im22);
            case 23: return (Im23);
            case 24: return (Im24);
            case 25: return (Im25);
            case 26: return (Im26);
            case 27: return (Im27);
            case 28: return (Im28);
            case 29: return (Im29);
            case 30: return (Im30);
            case 31: return (Im31);
            case 32: return (Im32);
            case 33: return (Im33);
            case 34: return (Im34);
            case 35: return (Im35);
            case 36: return (Im36);
            case 37: return (Im37);
            case 38: return (Im38);
            case 39: return (Im39);
            case 40: return (Im40);
            case 41: return (Im41);
            case 42: return (Im42);
            case 43: return (Im43);
            case 44: return (Im44);
            case 45: return (Im45);
            case 46: return (Im46);
            case 47: return (Im47);
            case 48: return (Im48);
            case 49: return (Im49);
            case 50: return (Im50);
            case 51: return (Im51);
            case 52: return (Im52);
            case 53: return (Im53);
            case 54: return (Im54);
            case 55: return (Im55);
            case 56: return (Im56);
            case 57: return (Im57);
            case 58: return (Im58);
            case 59: return (Im59);
            case 60: return (Im60);
            case 61: return (Im61);
            case 62: return (Im62);
            case 63: return (Im63);
            case 64: return (Im64);
            case 65: return (Im65);
            case 66: return (Im66);
            case 67: return (Im67);
            case 68: return (Im68);
            case 69: return (Im69);
            case 70: return (Im70);
            case 71: return (Im71);
            case 72: return (Im72);
            case 73: return (Im73);
            case 74: return (Im74);
            case 75: return (Im75);
            case 76: return (Im76);
            case 77: return (Im77);
            case 78: return (Im78);
            case 79: return (Im79);
            case 80: return (Im80);
            case 81: return (Im81);
            case 82: return (Im82);
            case 83: return (Im83);
            case 84: return (Im84);
            case 85: return (Im85);
            case 86: return (Im86);
            case 87: return (Im87);
            case 88: return (Im88);
            case 89: return (Im89);
            case 90: return (Im90);
            case 91: return (Im91);
            case 92: return (Im92);
            case 93: return (Im93);
            case 94: return (Im94);
            case 95: return (Im95);
            case 96: return (Im96);
            case 97: return (Im97);
            case 98: return (Im98);
            case 99: return (Im99);
            case 100: return (Im100);
            case 101: return (Im101);
            case 102: return (Im102);
            case 103: return (Im103);
            case 104: return (Im104);
            case 105: return (Im105);
            case 106: return (Im106);
            case 107: return (Im107);
            case 108: return (Im108);
            case 109: return (Im109);
            case 110: return (Im110);
            case 111: return (Im111);
            case 112: return (Im112);
            case 113: return (Im113);
            case 114: return (Im114);
            case 115: return (Im115);
            case 116: return (Im116);
            case 117: return (Im117);
            case 118: return (Im118);
            case 119: return (Im119);
            case 120: return (Im120);
            case 121: return (Im121);
            case 122: return (Im122);
            case 123: return (Im123);
            case 124: return (Im124);
            case 125: return (Im125);
            case 126: return (Im126);
            case 127: return (Im127);
            case 128: return (Im128);
            case 129: return (Im129);
            case 130: return (Im130);
            case 131: return (Im131);
            case 132: return (Im132);
            case 133: return (Im133);
            case 134: return (Im134);
            case 135: return (Im135);
            case 136: return (Im136);
            case 137: return (Im137);
            case 138: return (Im138);
            case 139: return (Im139);
            case 140: return (Im140);
            case 141: return (Im141);
            case 142: return (Im142);
            case 143: return (Im143);
            case 144: return (Im144);
            case 145: return (Im145);
            case 146: return (Im146);
            case 147: return (Im147);
            case 148: return (Im148);
            case 149: return (Im149);
            case 150: return (Im150);
            case 151: return (Im151);
            case 152: return (Im152);
            case 153: return (Im153);
            case 154: return (Im154);
            case 155: return (Im155);
            case 156: return (Im156);
            case 157: return (Im157);
            case 158: return (Im158);
            case 159: return (Im159);
            case 160: return (Im160);
            case 161: return (Im161);
            case 162: return (Im162);
            case 163: return (Im163);
            case 164: return (Im164);
            case 165: return (Im165);
            case 166: return (Im166);
            case 167: return (Im167);
            case 168: return (Im168);
            case 169: return (Im169);
            case 170: return (Im170);
            case 171: return (Im171);
            case 172: return (Im172);
            case 173: return (Im173);
            case 174: return (Im174);
            case 175: return (Im175);
            case 176: return (Im176);
            case 177: return (Im177);
            case 178: return (Im178);
            case 179: return (Im179);
            case 180: return (Im180);
            case 181: return (Im181);
            case 182: return (Im182);
            case 183: return (Im183);
            case 184: return (Im184);
            case 185: return (Im185);
            case 186: return (Im186);
            case 187: return (Im187);
            case 188: return (Im188);
            case 189: return (Im189);
            case 190: return (Im190);
            case 191: return (Im191);
            case 192: return (Im192);
            case 193: return (Im193);
            case 194: return (Im194);
            case 195: return (Im195);
            case 196: return (Im196);
            case 197: return (Im197);
            case 198: return (Im198);
            case 199: return (Im199);
            case 200: return (Im200);
            case 201: return (Im201);
            case 202: return (Im202);
            case 203: return (Im203);
            case 204: return (Im204);
            case 205: return (Im205);
            case 206: return (Im206);
            case 207: return (Im207);
            case 208: return (Im208);
            case 209: return (Im209);
            case 210: return (Im210);
            case 211: return (Im211);
            case 212: return (Im212);
            case 213: return (Im213);
            case 214: return (Im214);
            case 215: return (Im215);
            case 216: return (Im216);
            case 217: return (Im217);
            case 218: return (Im218);
            case 219: return (Im219);
            case 220: return (Im220);
            case 221: return (Im221);
            case 222: return (Im222);
            case 223: return (Im223);
            case 224: return (Im224);
            case 225: return (Im225);
            case 226: return (Im226);
            case 227: return (Im227);
            case 228: return (Im228);
            case 229: return (Im229);
            case 230: return (Im230);
            case 231: return (Im231);
            case 232: return (Im232);
            case 233: return (Im233);
            case 234: return (Im234);
            case 235: return (Im235);
            case 236: return (Im236);
            case 237: return (Im237);
            case 238: return (Im238);
            case 239: return (Im239);
            case 240: return (Im240);
            case 241: return (Im241);
            case 242: return (Im242);
            case 243: return (Im243);
            case 244: return (Im244);
            case 245: return (Im245);
            case 246: return (Im246);
            case 247: return (Im247);
            case 248: return (Im248);
            case 249: return (Im249);
            case 250: return (Im250);
            case 251: return (Im251);
            case 252: return (Im252);
            case 253: return (Im253);
            case 254: return (Im254);
            case 255: return (Im255);
            case 256: return (Im256);
            case 257: return (Im257);
            case 258: return (Im258);
            case 259: return (Im259);
            case 260: return (Im260);
            case 261: return (Im261);
            case 262: return (Im262);
            case 263: return (Im263);
            case 264: return (Im264);
            case 265: return (Im265);
            case 266: return (Im266);
            case 267: return (Im267);
            case 268: return (Im268);
            case 269: return (Im269);
            case 270: return (Im270);
            case 271: return (Im271);
            case 272: return (Im272);
            case 273: return (Im273);
            case 274: return (Im274);
            case 275: return (Im275);
            case 276: return (Im276);
            case 277: return (Im277);
            case 278: return (Im278);
            case 279: return (Im279);
            case 280: return (Im280);
            case 281: return (Im281);
            case 282: return (Im282);
            case 283: return (Im283);
            case 284: return (Im284);
            case 285: return (Im285);
            case 286: return (Im286);
            case 287: return (Im287);
            case 288: return (Im288);
            case 289: return (Im289);
            case 290: return (Im290);
            case 291: return (Im291);
            case 292: return (Im292);
            case 293: return (Im293);
            case 294: return (Im294);
            case 295: return (Im295);
            case 296: return (Im296);
            case 297: return (Im297);
            case 298: return (Im298);
            case 299: return (Im299);
            case 300: return (Im300);
            case 301: return (Im301);
            case 302: return (Im302);
            case 303: return (Im303);
            case 304: return (Im304);
            case 305: return (Im305);
            case 306: return (Im306);
            case 307: return (Im307);
            case 308: return (Im308);
            case 309: return (Im309);
            case 310: return (Im310);
            case 311: return (Im311);
            case 312: return (Im312);
            case 313: return (Im313);
            case 314: return (Im314);
            case 315: return (Im315);
            case 316: return (Im316);
            case 317: return (Im317);
            case 318: return (Im318);
            case 319: return (Im319);
            case 320: return (Im320);
            case 321: return (Im321);
            case 322: return (Im322);
            case 323: return (Im323);
            case 324: return (Im324);
            case 325: return (Im325);
            case 326: return (Im326);
            case 327: return (Im327);
            case 328: return (Im328);
            case 329: return (Im329);
            case 330: return (Im330);
            case 331: return (Im331);
            case 332: return (Im332);
            case 333: return (Im333);
            case 334: return (Im334);
            case 335: return (Im335);
            case 336: return (Im336);
            case 337: return (Im337);
            case 338: return (Im338);
            case 339: return (Im339);
            case 340: return (Im340);
            case 341: return (Im341);
            case 342: return (Im342);
            case 343: return (Im343);
            case 344: return (Im344);
            case 345: return (Im345);
            case 346: return (Im346);
            case 347: return (Im347);
            case 348: return (Im348);
            case 349: return (Im349);
            case 350: return (Im350);
            case 351: return (Im351);
            case 352: return (Im352);
            case 353: return (Im353);
            case 354: return (Im354);
            case 355: return (Im355);
            case 356: return (Im356);
            case 357: return (Im357);
            case 358: return (Im358);
            case 359: return (Im359);
            case 360: return (Im360);
            case 361: return (Im361);
            case 362: return (Im362);
            case 363: return (Im363);
            case 364: return (Im364);
            case 365: return (Im365);
            case 366: return (Im366);
            case 367: return (Im367);
            case 368: return (Im368);
            case 369: return (Im369);
            case 370: return (Im370);
            case 371: return (Im371);
            case 372: return (Im372);
            case 373: return (Im373);
            case 374: return (Im374);
            case 375: return (Im375);
            case 376: return (Im376);
            case 377: return (Im377);
            case 378: return (Im378);
            case 379: return (Im379);
            case 380: return (Im380);
            case 381: return (Im381);
            case 382: return (Im382);
            case 383: return (Im383);
            case 384: return (Im384);
            case 385: return (Im385);
            case 386: return (Im386);
            case 387: return (Im387);
            case 388: return (Im388);
            case 389: return (Im389);
            case 390: return (Im390);
            case 391: return (Im391);
            case 392: return (Im392);
            case 393: return (Im393);
            case 394: return (Im394);
            case 395: return (Im395);
            case 396: return (Im396);
            case 397: return (Im397);
            case 398: return (Im398);
            case 399: return (Im399);
            case 400: return (Im400);
            case 401: return (Im401);
            case 402: return (Im402);
            case 403: return (Im403);
            case 404: return (Im404);
            case 405: return (Im405);
            case 406: return (Im406);
            case 407: return (Im407);
            case 408: return (Im408);
            case 409: return (Im409);
            case 410: return (Im410);
            case 411: return (Im411);
            case 412: return (Im412);
            case 413: return (Im413);
            case 414: return (Im414);
            case 415: return (Im415);
            case 416: return (Im416);
            case 417: return (Im417);
            case 418: return (Im418);
            case 419: return (Im419);
            case 420: return (Im420);
            case 421: return (Im421);
            case 422: return (Im422);
            case 423: return (Im423);
            case 424: return (Im424);
            case 425: return (Im425);
            case 426: return (Im426);
            case 427: return (Im427);
            case 428: return (Im428);
            case 429: return (Im429);
            case 430: return (Im430);
            case 431: return (Im431);
            case 432: return (Im432);
            case 433: return (Im433);
            case 434: return (Im434);
            case 435: return (Im435);
            case 436: return (Im436);
            case 437: return (Im437);
            case 438: return (Im438);
            case 439: return (Im439);
            case 440: return (Im440);
            case 441: return (Im441);
            case 442: return (Im442);
            case 443: return (Im443);
            case 444: return (Im444);
            case 445: return (Im445);
            case 446: return (Im446);
            case 447: return (Im447);
            case 448: return (Im448);
            case 449: return (Im449);
            case 450: return (Im450);
            case 451: return (Im451);
            case 452: return (Im452);
            case 453: return (Im453);
            case 454: return (Im454);
            case 455: return (Im455);
            case 456: return (Im456);
            case 457: return (Im457);
            case 458: return (Im458);
            case 459: return (Im459);
            case 460: return (Im460);
            case 461: return (Im461);
            case 462: return (Im462);
            case 463: return (Im463);
            case 464: return (Im464);
            case 465: return (Im465);
            case 466: return (Im466);
            case 467: return (Im467);
            case 468: return (Im468);
            case 469: return (Im469);
            case 470: return (Im470);
            case 471: return (Im471);
            case 472: return (Im472);
            case 473: return (Im473);
            case 474: return (Im474);
            case 475: return (Im475);
            case 476: return (Im476);
            case 477: return (Im477);
            case 478: return (Im478);
            case 479: return (Im479);
            case 480: return (Im480);
            case 481: return (Im481);
            case 482: return (Im482);
            case 483: return (Im483);
            case 484: return (Im484);
            case 485: return (Im485);
            case 486: return (Im486);
            case 487: return (Im487);
            case 488: return (Im488);
            case 489: return (Im489);
            case 490: return (Im490);
            case 491: return (Im491);
            case 492: return (Im492);
            case 493: return (Im493);
            case 494: return (Im494);
            case 495: return (Im495);
            case 496: return (Im496);
            case 497: return (Im497);
            case 498: return (Im498);
            case 499: return (Im499);
            case 500: return (Im500);
            case 501: return (Im501);
            case 502: return (Im502);
            case 503: return (Im503);
            case 504: return (Im504);
            case 505: return (Im505);
            case 506: return (Im506);
            case 507: return (Im507);
            case 508: return (Im508);
            case 509: return (Im509);
            case 510: return (Im510);
            case 511: return (Im511);
            case 512: return (Im512);
            case 513: return (Im513);
            case 514: return (Im514);
            case 515: return (Im515);
            case 516: return (Im516);
            case 517: return (Im517);
            case 518: return (Im518);
            case 519: return (Im519);
            case 520: return (Im520);
            case 521: return (Im521);
            case 522: return (Im522);
            case 523: return (Im523);
            case 524: return (Im524);
            case 525: return (Im525);
            case 526: return (Im526);
            case 527: return (Im527);
            case 528: return (Im528);
            case 529: return (Im529);
            case 530: return (Im530);
            case 531: return (Im531);
            case 532: return (Im532);
            case 533: return (Im533);
            case 534: return (Im534);
            case 535: return (Im535);
            case 536: return (Im536);
            case 537: return (Im537);
            case 538: return (Im538);
            case 539: return (Im539);
            case 540: return (Im540);
            case 541: return (Im541);
            case 542: return (Im542);
            case 543: return (Im543);
            case 544: return (Im544);
            case 545: return (Im545);
            case 546: return (Im546);
            case 547: return (Im547);
            case 548: return (Im548);
            case 549: return (Im549);
            case 550: return (Im550);
            case 551: return (Im551);
            case 552: return (Im552);
            case 553: return (Im553);
            case 554: return (Im554);
            case 555: return (Im555);
            case 556: return (Im556);
            case 557: return (Im557);
            case 558: return (Im558);
            case 559: return (Im559);
            case 560: return (Im560);
            case 561: return (Im561);
            case 562: return (Im562);
            case 563: return (Im563);
            case 564: return (Im564);
            case 565: return (Im565);
            case 566: return (Im566);
            case 567: return (Im567);
            case 568: return (Im568);
            case 569: return (Im569);
            case 570: return (Im570);
            case 571: return (Im571);
            case 572: return (Im572);
            case 573: return (Im573);
            case 574: return (Im574);
            case 575: return (Im575);
            case 576: return (Im576);
            case 577: return (Im577);
            case 578: return (Im578);
            case 579: return (Im579);
            case 580: return (Im580);
            case 581: return (Im581);
            case 582: return (Im582);
            case 583: return (Im583);
            case 584: return (Im584);
            case 585: return (Im585);
            case 586: return (Im586);
            case 587: return (Im587);
            case 588: return (Im588);
            case 589: return (Im589);
            case 590: return (Im590);
            case 591: return (Im591);
            case 592: return (Im592);
            case 593: return (Im593);
            case 594: return (Im594);
            case 595: return (Im595);
            case 596: return (Im596);
            case 597: return (Im597);
            case 598: return (Im598);
            case 599: return (Im599);
            case 600: return (Im600);
            case 601: return (Im601);
            case 602: return (Im602);
            case 603: return (Im603);
            case 604: return (Im604);
            case 605: return (Im605);
            case 606: return (Im606);
            case 607: return (Im607);
            case 608: return (Im608);
            case 609: return (Im609);
            case 610: return (Im610);
            case 611: return (Im611);
            case 612: return (Im612);
            case 613: return (Im613);
            case 614: return (Im614);
            case 615: return (Im615);
            case 616: return (Im616);
            case 617: return (Im617);
            case 618: return (Im618);
            case 619: return (Im619);
            case 620: return (Im620);
            case 621: return (Im621);
            case 622: return (Im622);
            case 623: return (Im623);
            case 624: return (Im624);
            case 625: return (Im625);
            case 626: return (Im626);
            case 627: return (Im627);
            case 628: return (Im628);
            case 629: return (Im629);
            case 630: return (Im630);
            case 631: return (Im631);
            case 632: return (Im632);
            case 633: return (Im633);
            case 634: return (Im634);
            case 635: return (Im635);
            case 636: return (Im636);
            case 637: return (Im637);
            case 638: return (Im638);
            case 639: return (Im639);
            case 640: return (Im640);
            case 641: return (Im641);
            case 642: return (Im642);
            case 643: return (Im643);
            case 644: return (Im644);
            case 645: return (Im645);
            case 646: return (Im646);
            case 647: return (Im647);
            case 648: return (Im648);
            case 649: return (Im649);
            case 650: return (Im650);
            case 651: return (Im651);
            case 652: return (Im652);
            case 653: return (Im653);
            case 654: return (Im654);
            case 655: return (Im655);
            case 656: return (Im656);
            case 657: return (Im657);
            case 658: return (Im658);
            case 659: return (Im659);
            case 660: return (Im660);
            case 661: return (Im661);
            case 662: return (Im662);
            case 663: return (Im663);
            case 664: return (Im664);
            case 665: return (Im665);
            case 666: return (Im666);
            case 667: return (Im667);
            case 668: return (Im668);
            case 669: return (Im669);
            case 670: return (Im670);
            case 671: return (Im671);
            case 672: return (Im672);
            case 673: return (Im673);
            case 674: return (Im674);
            case 675: return (Im675);
            case 676: return (Im676);
            case 677: return (Im677);
            case 678: return (Im678);
            case 679: return (Im679);
            case 680: return (Im680);
            case 681: return (Im681);
            case 682: return (Im682);
            case 683: return (Im683);
            case 684: return (Im684);
            case 685: return (Im685);
            case 686: return (Im686);
            case 687: return (Im687);
            case 688: return (Im688);
            case 689: return (Im689);
            case 690: return (Im690);
            case 691: return (Im691);
            case 692: return (Im692);
            case 693: return (Im693);
            case 694: return (Im694);
            case 695: return (Im695);
            case 696: return (Im696);
            case 697: return (Im697);
            case 698: return (Im698);
            case 699: return (Im699);
            default:
                return (undefined);
        }
    }
    const getSvitokCardImg = (PoleStr: string) => {
        let A = Number(PoleStr);
        if (A == undefined || A == 0 || A > 4 || Number.isNaN(A)) {
            A = targetSvitokNumber;
        }
        if (A < 0 && A > -7) {
            const r = pytSvitok[0 - A - 1];
            return (
                r != undefined ? URL.createObjectURL(r) : undefined
            );
        }
        switch (A) {
            case 1: return (S1);
            case 2: return (S2);
            case 3: return (S3);
            case 4: return (S4);
            default:
                return (undefined);
        }
    }
    const getCards = () => {
        let sumLists = [];
        for (let i = 0; i < cards.length; i += kolvo[1] * kolvo[0]) sumLists[i / (kolvo[1] * kolvo[0])] = i;
        return (
            <>
                {
                    sumLists.map((a, index) => {
                        return (
                            <div className={style.List} key={"List" + index}>
                                {
                                    Array.from(Array(kolvo[0]).keys()).map((a, index2) => {
                                        return (
                                            <div className={style.LineCards} key={"List" + index + " Line" + index2}>
                                                {
                                                    Array.from(Array(kolvo[1]).keys()).map((a, index3) => {
                                                        if (isBack) {
                                                            if (cards.length >= kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + kolvo[1] - index3) {
                                                                return (
                                                                    <div className={style.Card} key={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + kolvo[1] - index3} >
                                                                        <CardCreature doubleBack={doubleBack} targetFont={String(fontMas[targetFont1])} isBack={true} plusPerepolnen={plusPerepolnen} minMax={minMax} startPerepolnen={startPerepolnen} keyt={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + kolvo[1] - index3 - 1} Pole={cards[kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + kolvo[1] - index3 - 1]} />
                                                                    </div>
                                                                );
                                                            }
                                                            return (
                                                                <div className={style.Card} key={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + kolvo[1] - index3} >
                                                                </div>
                                                            );
                                                        } else {
                                                            if (cards.length > kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + index3) {
                                                                return (
                                                                    <div className={style.Card} key={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + index3} >
                                                                        <CardCreature targetFont={String(fontMas[targetFont1])} keyt={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + index3} Pole={cards[kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + index3]} cardImg={String(getBackCardImg(cards[kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + index3][1]))} svitok={String(getSvitokCardImg(cards[kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + index3][2]))} />
                                                                    </div>
                                                                );
                                                            }
                                                            return (
                                                                <div className={style.Card} key={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + index3} >
                                                                </div>
                                                            );
                                                        }
                                                    })
                                                }
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        );
                    })
                }
            </>
        );
    }
    const setPyti = (num: number) => {
        return (
            <div className={style.InputFile}>
                <label htmlFor={`inputfile + ${0 - num - 1}`}><Download /></label>
                <input type="file" name="" id={`inputfile + ${0 - num - 1}`} onInput={(e) => {
                    const file = (e.target as HTMLInputElement);
                    const R = file?.files;
                    if (R != null) {
                        const T = pyt;
                        T[0 - num - 1] = R[0];
                        setPyt(T);
                    }
                    let r = targetBackgroundNumber;
                    setTargetBackgroundNumber(-999999);
                    setTimeout((a) => {
                        setTargetBackgroundNumber(a);
                    }, 300, r);
                }} />
            </div>
        );
    }
    const getRubahaCase = () => {
        const Elements = [
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -50} setTarget={setTargetBackgroundNumber} number={-50} img={pyt[49] != undefined ? URL.createObjectURL(pyt[49]) : undefined}><div>{setPyti(-50)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -49} setTarget={setTargetBackgroundNumber} number={-49} img={pyt[48] != undefined ? URL.createObjectURL(pyt[48]) : undefined}><div>{setPyti(-49)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -48} setTarget={setTargetBackgroundNumber} number={-48} img={pyt[47] != undefined ? URL.createObjectURL(pyt[47]) : undefined}><div>{setPyti(-48)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -47} setTarget={setTargetBackgroundNumber} number={-47} img={pyt[46] != undefined ? URL.createObjectURL(pyt[46]) : undefined}><div>{setPyti(-47)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -46} setTarget={setTargetBackgroundNumber} number={-46} img={pyt[45] != undefined ? URL.createObjectURL(pyt[45]) : undefined}><div>{setPyti(-46)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -45} setTarget={setTargetBackgroundNumber} number={-45} img={pyt[44] != undefined ? URL.createObjectURL(pyt[44]) : undefined}><div>{setPyti(-45)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -44} setTarget={setTargetBackgroundNumber} number={-44} img={pyt[43] != undefined ? URL.createObjectURL(pyt[43]) : undefined}><div>{setPyti(-44)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -43} setTarget={setTargetBackgroundNumber} number={-43} img={pyt[42] != undefined ? URL.createObjectURL(pyt[42]) : undefined}><div>{setPyti(-43)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -42} setTarget={setTargetBackgroundNumber} number={-42} img={pyt[41] != undefined ? URL.createObjectURL(pyt[41]) : undefined}><div>{setPyti(-42)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -41} setTarget={setTargetBackgroundNumber} number={-41} img={pyt[40] != undefined ? URL.createObjectURL(pyt[40]) : undefined}><div>{setPyti(-41)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -40} setTarget={setTargetBackgroundNumber} number={-40} img={pyt[39] != undefined ? URL.createObjectURL(pyt[39]) : undefined}><div>{setPyti(-40)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -39} setTarget={setTargetBackgroundNumber} number={-39} img={pyt[38] != undefined ? URL.createObjectURL(pyt[38]) : undefined}><div>{setPyti(-39)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -38} setTarget={setTargetBackgroundNumber} number={-38} img={pyt[37] != undefined ? URL.createObjectURL(pyt[37]) : undefined}><div>{setPyti(-38)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -37} setTarget={setTargetBackgroundNumber} number={-37} img={pyt[36] != undefined ? URL.createObjectURL(pyt[36]) : undefined}><div>{setPyti(-37)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -36} setTarget={setTargetBackgroundNumber} number={-36} img={pyt[35] != undefined ? URL.createObjectURL(pyt[35]) : undefined}><div>{setPyti(-36)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -35} setTarget={setTargetBackgroundNumber} number={-35} img={pyt[34] != undefined ? URL.createObjectURL(pyt[34]) : undefined}><div>{setPyti(-35)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -34} setTarget={setTargetBackgroundNumber} number={-34} img={pyt[33] != undefined ? URL.createObjectURL(pyt[33]) : undefined}><div>{setPyti(-34)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -33} setTarget={setTargetBackgroundNumber} number={-33} img={pyt[32] != undefined ? URL.createObjectURL(pyt[32]) : undefined}><div>{setPyti(-33)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -32} setTarget={setTargetBackgroundNumber} number={-32} img={pyt[31] != undefined ? URL.createObjectURL(pyt[31]) : undefined}><div>{setPyti(-32)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -31} setTarget={setTargetBackgroundNumber} number={-31} img={pyt[30] != undefined ? URL.createObjectURL(pyt[30]) : undefined}><div>{setPyti(-31)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -30} setTarget={setTargetBackgroundNumber} number={-30} img={pyt[29] != undefined ? URL.createObjectURL(pyt[29]) : undefined}><div>{setPyti(-30)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -29} setTarget={setTargetBackgroundNumber} number={-29} img={pyt[28] != undefined ? URL.createObjectURL(pyt[28]) : undefined}><div>{setPyti(-29)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -28} setTarget={setTargetBackgroundNumber} number={-28} img={pyt[27] != undefined ? URL.createObjectURL(pyt[27]) : undefined}><div>{setPyti(-28)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -27} setTarget={setTargetBackgroundNumber} number={-27} img={pyt[26] != undefined ? URL.createObjectURL(pyt[26]) : undefined}><div>{setPyti(-27)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -26} setTarget={setTargetBackgroundNumber} number={-26} img={pyt[25] != undefined ? URL.createObjectURL(pyt[25]) : undefined}><div>{setPyti(-26)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -25} setTarget={setTargetBackgroundNumber} number={-25} img={pyt[24] != undefined ? URL.createObjectURL(pyt[24]) : undefined}><div>{setPyti(-25)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -24} setTarget={setTargetBackgroundNumber} number={-24} img={pyt[23] != undefined ? URL.createObjectURL(pyt[23]) : undefined}><div>{setPyti(-24)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -23} setTarget={setTargetBackgroundNumber} number={-23} img={pyt[22] != undefined ? URL.createObjectURL(pyt[22]) : undefined}><div>{setPyti(-23)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -22} setTarget={setTargetBackgroundNumber} number={-22} img={pyt[21] != undefined ? URL.createObjectURL(pyt[21]) : undefined}><div>{setPyti(-22)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -21} setTarget={setTargetBackgroundNumber} number={-21} img={pyt[20] != undefined ? URL.createObjectURL(pyt[20]) : undefined}><div>{setPyti(-21)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -20} setTarget={setTargetBackgroundNumber} number={-20} img={pyt[19] != undefined ? URL.createObjectURL(pyt[19]) : undefined}><div>{setPyti(-20)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -19} setTarget={setTargetBackgroundNumber} number={-19} img={pyt[18] != undefined ? URL.createObjectURL(pyt[18]) : undefined}><div>{setPyti(-19)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -18} setTarget={setTargetBackgroundNumber} number={-18} img={pyt[17] != undefined ? URL.createObjectURL(pyt[17]) : undefined}><div>{setPyti(-18)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -17} setTarget={setTargetBackgroundNumber} number={-17} img={pyt[16] != undefined ? URL.createObjectURL(pyt[16]) : undefined}><div>{setPyti(-17)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -16} setTarget={setTargetBackgroundNumber} number={-16} img={pyt[15] != undefined ? URL.createObjectURL(pyt[15]) : undefined}><div>{setPyti(-16)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -15} setTarget={setTargetBackgroundNumber} number={-15} img={pyt[14] != undefined ? URL.createObjectURL(pyt[14]) : undefined}><div>{setPyti(-15)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -14} setTarget={setTargetBackgroundNumber} number={-14} img={pyt[13] != undefined ? URL.createObjectURL(pyt[13]) : undefined}><div>{setPyti(-14)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -13} setTarget={setTargetBackgroundNumber} number={-13} img={pyt[12] != undefined ? URL.createObjectURL(pyt[12]) : undefined}><div>{setPyti(-13)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -12} setTarget={setTargetBackgroundNumber} number={-12} img={pyt[11] != undefined ? URL.createObjectURL(pyt[11]) : undefined}><div>{setPyti(-12)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -11} setTarget={setTargetBackgroundNumber} number={-11} img={pyt[10] != undefined ? URL.createObjectURL(pyt[10]) : undefined}><div>{setPyti(-11)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -10} setTarget={setTargetBackgroundNumber} number={-10} img={pyt[9] != undefined ? URL.createObjectURL(pyt[9]) : undefined}><div>{setPyti(-10)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -9} setTarget={setTargetBackgroundNumber} number={-9} img={pyt[8] != undefined ? URL.createObjectURL(pyt[8]) : undefined}><div>{setPyti(-9)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -8} setTarget={setTargetBackgroundNumber} number={-8} img={pyt[7] != undefined ? URL.createObjectURL(pyt[7]) : undefined}><div>{setPyti(-8)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -7} setTarget={setTargetBackgroundNumber} number={-7} img={pyt[6] != undefined ? URL.createObjectURL(pyt[6]) : undefined}><div>{setPyti(-7)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -6} setTarget={setTargetBackgroundNumber} number={-6} img={pyt[5] != undefined ? URL.createObjectURL(pyt[5]) : undefined}><div>{setPyti(-6)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -5} setTarget={setTargetBackgroundNumber} number={-5} img={pyt[4] != undefined ? URL.createObjectURL(pyt[4]) : undefined}><div>{setPyti(-5)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -4} setTarget={setTargetBackgroundNumber} number={-4} img={pyt[3] != undefined ? URL.createObjectURL(pyt[3]) : undefined}><div>{setPyti(-4)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -3} setTarget={setTargetBackgroundNumber} number={-3} img={pyt[2] != undefined ? URL.createObjectURL(pyt[2]) : undefined}><div>{setPyti(-3)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -2} setTarget={setTargetBackgroundNumber} number={-2} img={pyt[1] != undefined ? URL.createObjectURL(pyt[1]) : undefined}><div>{setPyti(-2)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -1} setTarget={setTargetBackgroundNumber} number={-1} img={pyt[0] != undefined ? URL.createObjectURL(pyt[0]) : undefined}><div>{setPyti(-1)}</div></OptionCardImg>,
            <OptionCardImg name={"Ааракокра"} targetThis={targetBackgroundNumber == 1} setTarget={setTargetBackgroundNumber} number={1} ><img src={String(getBackCardImg('1'))} /></OptionCardImg>,
            <OptionCardImg name={"Аболет"} targetThis={targetBackgroundNumber == 2} setTarget={setTargetBackgroundNumber} number={2} ><img src={String(getBackCardImg('2'))} /></OptionCardImg>,
            <OptionCardImg name={"Адепт боевых искусств"} targetThis={targetBackgroundNumber == 3} setTarget={setTargetBackgroundNumber} number={3} ><img src={String(getBackCardImg('3'))} /></OptionCardImg>,
            <OptionCardImg name={"Адская гончая"} targetThis={targetBackgroundNumber == 4} setTarget={setTargetBackgroundNumber} number={4} ><img src={String(getBackCardImg('4'))} /></OptionCardImg>,
            <OptionCardImg name={"Адское орудие"} targetThis={targetBackgroundNumber == 5} setTarget={setTargetBackgroundNumber} number={5} ><img src={String(getBackCardImg('5'))} /></OptionCardImg>,
            <OptionCardImg name={"Алкилит"} targetThis={targetBackgroundNumber == 6} setTarget={setTargetBackgroundNumber} number={6} ><img src={String(getBackCardImg('6'))} /></OptionCardImg>,
            <OptionCardImg name={"Аллип"} targetThis={targetBackgroundNumber == 7} setTarget={setTargetBackgroundNumber} number={7} ><img src={String(getBackCardImg('7'))} /></OptionCardImg>,
            <OptionCardImg name={"Аллозавр"} targetThis={targetBackgroundNumber == 8} setTarget={setTargetBackgroundNumber} number={8} ><img src={String(getBackCardImg('8'))} /></OptionCardImg>,
            <OptionCardImg name={"Алхун"} targetThis={targetBackgroundNumber == 9} setTarget={setTargetBackgroundNumber} number={9} ><img src={String(getBackCardImg('9'))} /></OptionCardImg>,
            <OptionCardImg name={"Альфа грик"} targetThis={targetBackgroundNumber == 10} setTarget={setTargetBackgroundNumber} number={10} ><img src={String(getBackCardImg('10'))} /></OptionCardImg>,
            <OptionCardImg name={"Амнизу"} targetThis={targetBackgroundNumber == 11} setTarget={setTargetBackgroundNumber} number={11} ><img src={String(getBackCardImg('11'))} /></OptionCardImg>,
            <OptionCardImg name={"Андросфинкс"} targetThis={targetBackgroundNumber == 12} setTarget={setTargetBackgroundNumber} number={12} ><img src={String(getBackCardImg('12'))} /></OptionCardImg>,
            <OptionCardImg name={"Анкилозавр"} targetThis={targetBackgroundNumber == 13} setTarget={setTargetBackgroundNumber} number={13} ><img src={String(getBackCardImg('13'))} /></OptionCardImg>,
            <OptionCardImg name={"Анхег"} targetThis={targetBackgroundNumber == 14} setTarget={setTargetBackgroundNumber} number={14} ><img src={String(getBackCardImg('14'))} /></OptionCardImg>,
            <OptionCardImg name={"Арканалот"} targetThis={targetBackgroundNumber == 15} setTarget={setTargetBackgroundNumber} number={15} ><img src={String(getBackCardImg('15'))} /></OptionCardImg>,
            <OptionCardImg name={"Арманит"} targetThis={targetBackgroundNumber == 16} setTarget={setTargetBackgroundNumber} number={16} ><img src={String(getBackCardImg('16'))} /></OptionCardImg>,
            <OptionCardImg name={"Архидруид"} targetThis={targetBackgroundNumber == 17} setTarget={setTargetBackgroundNumber} number={17} ><img src={String(getBackCardImg('17'))} /></OptionCardImg>,
            <OptionCardImg name={"Архимаг"} targetThis={targetBackgroundNumber == 18} setTarget={setTargetBackgroundNumber} number={18} ><img src={String(getBackCardImg('18'))} /></OptionCardImg>,
            <OptionCardImg name={"Астральный дредноут"} targetThis={targetBackgroundNumber == 19} setTarget={setTargetBackgroundNumber} number={19} ><img src={String(getBackCardImg('19'))} /></OptionCardImg>,
            <OptionCardImg name={"Бабау"} targetThis={targetBackgroundNumber == 20} setTarget={setTargetBackgroundNumber} number={20} ><img src={String(getBackCardImg('20'))} /></OptionCardImg>,
            <OptionCardImg name={"Бабуин"} targetThis={targetBackgroundNumber == 21} setTarget={setTargetBackgroundNumber} number={21} ><img src={String(getBackCardImg('21'))} /></OptionCardImg>,
            <OptionCardImg name={"Балор"} targetThis={targetBackgroundNumber == 22} setTarget={setTargetBackgroundNumber} number={22} ><img src={String(getBackCardImg('22'))} /></OptionCardImg>,
            <OptionCardImg name={"Балханнот"} targetThis={targetBackgroundNumber == 23} setTarget={setTargetBackgroundNumber} number={23} ><img src={String(getBackCardImg('23'))} /></OptionCardImg>,
            <OptionCardImg name={"Бандерхобб"} targetThis={targetBackgroundNumber == 24} setTarget={setTargetBackgroundNumber} number={24} ><img src={String(getBackCardImg('24'))} /></OptionCardImg>,
            <OptionCardImg name={"Баньши"} targetThis={targetBackgroundNumber == 25} setTarget={setTargetBackgroundNumber} number={25} ><img src={String(getBackCardImg('25'))} /></OptionCardImg>,
            <OptionCardImg name={"Барбаланг"} targetThis={targetBackgroundNumber == 26} setTarget={setTargetBackgroundNumber} number={26} ><img src={String(getBackCardImg('26'))} /></OptionCardImg>,
            <OptionCardImg name={"Баргест"} targetThis={targetBackgroundNumber == 27} setTarget={setTargetBackgroundNumber} number={27} ><img src={String(getBackCardImg('27'))} /></OptionCardImg>,
            <OptionCardImg name={"Бард"} targetThis={targetBackgroundNumber == 28} setTarget={setTargetBackgroundNumber} number={28} ><img src={String(getBackCardImg('28'))} /></OptionCardImg>,
            <OptionCardImg name={"Барлгура"} targetThis={targetBackgroundNumber == 29} setTarget={setTargetBackgroundNumber} number={29} ><img src={String(getBackCardImg('29'))} /></OptionCardImg>,
            <OptionCardImg name={"Барон сахуагинов"} targetThis={targetBackgroundNumber == 30} setTarget={setTargetBackgroundNumber} number={30} ><img src={String(getBackCardImg('30'))} /></OptionCardImg>,
            <OptionCardImg name={"Барсук"} targetThis={targetBackgroundNumber == 31} setTarget={setTargetBackgroundNumber} number={31} ><img src={String(getBackCardImg('31'))} /></OptionCardImg>,
            <OptionCardImg name={"Белый абишай"} targetThis={targetBackgroundNumber == 32} setTarget={setTargetBackgroundNumber} number={32} ><img src={String(getBackCardImg('32'))} /></OptionCardImg>,
            <OptionCardImg name={"Белый медведь"} targetThis={targetBackgroundNumber == 33} setTarget={setTargetBackgroundNumber} number={33} ><img src={String(getBackCardImg('33'))} /></OptionCardImg>,
            <OptionCardImg name={"Берсерк"} targetThis={targetBackgroundNumber == 34} setTarget={setTargetBackgroundNumber} number={34} ><img src={String(getBackCardImg('34'))} /></OptionCardImg>,
            <OptionCardImg name={"Бес"} targetThis={targetBackgroundNumber == 35} setTarget={setTargetBackgroundNumber} number={35} ><img src={String(getBackCardImg('35'))} /></OptionCardImg>,
            <OptionCardImg name={"Бехир"} targetThis={targetBackgroundNumber == 36} setTarget={setTargetBackgroundNumber} number={36} ><img src={String(getBackCardImg('36'))} /></OptionCardImg>,
            <OptionCardImg name={"Блуждающий огонек"} targetThis={targetBackgroundNumber == 37} setTarget={setTargetBackgroundNumber} number={37} ><img src={String(getBackCardImg('37'))} /></OptionCardImg>,
            <OptionCardImg name={"Боггл"} targetThis={targetBackgroundNumber == 38} setTarget={setTargetBackgroundNumber} number={38} ><img src={String(getBackCardImg('38'))} /></OptionCardImg>,
            <OptionCardImg name={"Бодак"} targetThis={targetBackgroundNumber == 39} setTarget={setTargetBackgroundNumber} number={39} ><img src={String(getBackCardImg('39'))} /></OptionCardImg>,
            <OptionCardImg name={"Боевой вождь орков"} targetThis={targetBackgroundNumber == 40} setTarget={setTargetBackgroundNumber} number={40} ><img src={String(getBackCardImg('40'))} /></OptionCardImg>,
            <OptionCardImg name={"Боевой конь"} targetThis={targetBackgroundNumber == 41} setTarget={setTargetBackgroundNumber} number={41} ><img src={String(getBackCardImg('41'))} /></OptionCardImg>,
            <OptionCardImg name={"Боевой священник"} targetThis={targetBackgroundNumber == 42} setTarget={setTargetBackgroundNumber} number={42} ><img src={String(getBackCardImg('42'))} /></OptionCardImg>,
            <OptionCardImg name={"Бормочущий ротовник"} targetThis={targetBackgroundNumber == 43} setTarget={setTargetBackgroundNumber} number={43} ><img src={String(getBackCardImg('43'))} /></OptionCardImg>,
            <OptionCardImg name={"Бородатый дьявол"} targetThis={targetBackgroundNumber == 44} setTarget={setTargetBackgroundNumber} number={44} ><img src={String(getBackCardImg('44'))} /></OptionCardImg>,
            <OptionCardImg name={"Босс гоблинов"} targetThis={targetBackgroundNumber == 45} setTarget={setTargetBackgroundNumber} number={45} ><img src={String(getBackCardImg('45'))} /></OptionCardImg>,
            <OptionCardImg name={"Бронзовый скаут"} targetThis={targetBackgroundNumber == 46} setTarget={setTargetBackgroundNumber} number={46} ><img src={String(getBackCardImg('46'))} /></OptionCardImg>,
            <OptionCardImg name={"Бронтозавр"} targetThis={targetBackgroundNumber == 47} setTarget={setTargetBackgroundNumber} number={47} ><img src={String(getBackCardImg('47'))} /></OptionCardImg>,
            <OptionCardImg name={"Булезау"} targetThis={targetBackgroundNumber == 48} setTarget={setTargetBackgroundNumber} number={48} ><img src={String(getBackCardImg('48'))} /></OptionCardImg>,
            <OptionCardImg name={"Бурый медведь"} targetThis={targetBackgroundNumber == 49} setTarget={setTargetBackgroundNumber} number={49} ><img src={String(getBackCardImg('49'))} /></OptionCardImg>,
            <OptionCardImg name={"Бурый увалень"} targetThis={targetBackgroundNumber == 50} setTarget={setTargetBackgroundNumber} number={50} ><img src={String(getBackCardImg('50'))} /></OptionCardImg>,
            <OptionCardImg name={"Вампир заклинатель"} targetThis={targetBackgroundNumber == 51} setTarget={setTargetBackgroundNumber} number={51} ><img src={String(getBackCardImg('51'))} /></OptionCardImg>,
            <OptionCardImg name={"Вампир"} targetThis={targetBackgroundNumber == 52} setTarget={setTargetBackgroundNumber} number={52} ><img src={String(getBackCardImg('52'))} /></OptionCardImg>,
            <OptionCardImg name={"Вампирический туман"} targetThis={targetBackgroundNumber == 53} setTarget={setTargetBackgroundNumber} number={53} ><img src={String(getBackCardImg('53'))} /></OptionCardImg>,
            <OptionCardImg name={"Варгулья"} targetThis={targetBackgroundNumber == 54} setTarget={setTargetBackgroundNumber} number={54} ><img src={String(getBackCardImg('54'))} /></OptionCardImg>,
            <OptionCardImg name={"Василиск"} targetThis={targetBackgroundNumber == 55} setTarget={setTargetBackgroundNumber} number={55} ><img src={String(getBackCardImg('55'))} /></OptionCardImg>,
            <OptionCardImg name={"Вастрилит"} targetThis={targetBackgroundNumber == 56} setTarget={setTargetBackgroundNumber} number={56} ><img src={String(getBackCardImg('56'))} /></OptionCardImg>,
            <OptionCardImg name={"Вегепигмей вождь"} targetThis={targetBackgroundNumber == 57} setTarget={setTargetBackgroundNumber} number={57} ><img src={String(getBackCardImg('57'))} /></OptionCardImg>,
            <OptionCardImg name={"Вегепигмей"} targetThis={targetBackgroundNumber == 58} setTarget={setTargetBackgroundNumber} number={58} ><img src={String(getBackCardImg('58'))} /></OptionCardImg>,
            <OptionCardImg name={"Велоцераптор"} targetThis={targetBackgroundNumber == 59} setTarget={setTargetBackgroundNumber} number={59} ><img src={String(getBackCardImg('59'))} /></OptionCardImg>,
            <OptionCardImg name={"Верблюд"} targetThis={targetBackgroundNumber == 60} setTarget={setTargetBackgroundNumber} number={60} ><img src={String(getBackCardImg('60'))} /></OptionCardImg>,
            <OptionCardImg name={"Вервепрь"} targetThis={targetBackgroundNumber == 61} setTarget={setTargetBackgroundNumber} number={61} ><img src={String(getBackCardImg('61'))} /></OptionCardImg>,
            <OptionCardImg name={"Вервольф"} targetThis={targetBackgroundNumber == 62} setTarget={setTargetBackgroundNumber} number={62} ><img src={String(getBackCardImg('62'))} /></OptionCardImg>,
            <OptionCardImg name={"Веревочник"} targetThis={targetBackgroundNumber == 63} setTarget={setTargetBackgroundNumber} number={63} ><img src={String(getBackCardImg('63'))} /></OptionCardImg>,
            <OptionCardImg name={"Веркрыса"} targetThis={targetBackgroundNumber == 64} setTarget={setTargetBackgroundNumber} number={64} ><img src={String(getBackCardImg('64'))} /></OptionCardImg>,
            <OptionCardImg name={"Вермедведь"} targetThis={targetBackgroundNumber == 65} setTarget={setTargetBackgroundNumber} number={65} ><img src={String(getBackCardImg('65'))} /></OptionCardImg>,
            <OptionCardImg name={"Вермлинг красного дракона"} targetThis={targetBackgroundNumber == 66} setTarget={setTargetBackgroundNumber} number={66} ><img src={String(getBackCardImg('66'))} /></OptionCardImg>,
            <OptionCardImg name={"Вертигр"} targetThis={targetBackgroundNumber == 67} setTarget={setTargetBackgroundNumber} number={67} ><img src={String(getBackCardImg('67'))} /></OptionCardImg>,
            <OptionCardImg name={"Верховный жрец куо-тоа"} targetThis={targetBackgroundNumber == 68} setTarget={setTargetBackgroundNumber} number={68} ><img src={String(getBackCardImg('68'))} /></OptionCardImg>,
            <OptionCardImg name={"Верховный миконид"} targetThis={targetBackgroundNumber == 69} setTarget={setTargetBackgroundNumber} number={69} ><img src={String(getBackCardImg('69'))} /></OptionCardImg>,
            <OptionCardImg name={"Весенний эладрин"} targetThis={targetBackgroundNumber == 70} setTarget={setTargetBackgroundNumber} number={70} ><img src={String(getBackCardImg('70'))} /></OptionCardImg>,
            <OptionCardImg name={"Ветвистая зараза"} targetThis={targetBackgroundNumber == 71} setTarget={setTargetBackgroundNumber} number={71} ><img src={String(getBackCardImg('71'))} /></OptionCardImg>,
            <OptionCardImg name={"Ветеран"} targetThis={targetBackgroundNumber == 72} setTarget={setTargetBackgroundNumber} number={72} ><img src={String(getBackCardImg('72'))} /></OptionCardImg>,
            <OptionCardImg name={"Взрослый белый дракон"} targetThis={targetBackgroundNumber == 73} setTarget={setTargetBackgroundNumber} number={73} ><img src={String(getBackCardImg('73'))} /></OptionCardImg>,
            <OptionCardImg name={"Взрослый бронзовый дракон"} targetThis={targetBackgroundNumber == 74} setTarget={setTargetBackgroundNumber} number={74} ><img src={String(getBackCardImg('74'))} /></OptionCardImg>,
            <OptionCardImg name={"Взрослый зелёный дракон"} targetThis={targetBackgroundNumber == 75} setTarget={setTargetBackgroundNumber} number={75} ><img src={String(getBackCardImg('75'))} /></OptionCardImg>,
            <OptionCardImg name={"Взрослый золотой дракон"} targetThis={targetBackgroundNumber == 76} setTarget={setTargetBackgroundNumber} number={76} ><img src={String(getBackCardImg('76'))} /></OptionCardImg>,
            <OptionCardImg name={"Взрослый красный дракон"} targetThis={targetBackgroundNumber == 77} setTarget={setTargetBackgroundNumber} number={77} ><img src={String(getBackCardImg('77'))} /></OptionCardImg>,
            <OptionCardImg name={"Взрослый крутик"} targetThis={targetBackgroundNumber == 78} setTarget={setTargetBackgroundNumber} number={78} ><img src={String(getBackCardImg('78'))} /></OptionCardImg>,
            <OptionCardImg name={"Взрослый латунный дракон"} targetThis={targetBackgroundNumber == 79} setTarget={setTargetBackgroundNumber} number={79} ><img src={String(getBackCardImg('79'))} /></OptionCardImg>,
            <OptionCardImg name={"Взрослый медный дракон"} targetThis={targetBackgroundNumber == 80} setTarget={setTargetBackgroundNumber} number={80} ><img src={String(getBackCardImg('80'))} /></OptionCardImg>,
            <OptionCardImg name={"Взрослый миконид"} targetThis={targetBackgroundNumber == 81} setTarget={setTargetBackgroundNumber} number={81} ><img src={String(getBackCardImg('81'))} /></OptionCardImg>,
            <OptionCardImg name={"Взрослый серебряный дракон"} targetThis={targetBackgroundNumber == 82} setTarget={setTargetBackgroundNumber} number={82} ><img src={String(getBackCardImg('82'))} /></OptionCardImg>,
            <OptionCardImg name={"Взрослый синий драколич"} targetThis={targetBackgroundNumber == 83} setTarget={setTargetBackgroundNumber} number={83} ><img src={String(getBackCardImg('83'))} /></OptionCardImg>,
            <OptionCardImg name={"Взрослый синий дракон"} targetThis={targetBackgroundNumber == 84} setTarget={setTargetBackgroundNumber} number={84} ><img src={String(getBackCardImg('84'))} /></OptionCardImg>,
            <OptionCardImg name={"Взрослый чёрный дракон"} targetThis={targetBackgroundNumber == 85} setTarget={setTargetBackgroundNumber} number={85} ><img src={String(getBackCardImg('85'))} /></OptionCardImg>,
            <OptionCardImg name={"Виверна"} targetThis={targetBackgroundNumber == 86} setTarget={setTargetBackgroundNumber} number={86} ><img src={String(getBackCardImg('86'))} /></OptionCardImg>,
            <OptionCardImg name={"Визгун"} targetThis={targetBackgroundNumber == 87} setTarget={setTargetBackgroundNumber} number={87} ><img src={String(getBackCardImg('87'))} /></OptionCardImg>,
            <OptionCardImg name={"Вирмлинг белого дракона"} targetThis={targetBackgroundNumber == 88} setTarget={setTargetBackgroundNumber} number={88} ><img src={String(getBackCardImg('88'))} /></OptionCardImg>,
            <OptionCardImg name={"Вирмлинг бронзового дракона"} targetThis={targetBackgroundNumber == 89} setTarget={setTargetBackgroundNumber} number={89} ><img src={String(getBackCardImg('89'))} /></OptionCardImg>,
            <OptionCardImg name={"Вирмлинг зеленого дракона"} targetThis={targetBackgroundNumber == 90} setTarget={setTargetBackgroundNumber} number={90} ><img src={String(getBackCardImg('90'))} /></OptionCardImg>,
            <OptionCardImg name={"Вирмлинг золотого дракона"} targetThis={targetBackgroundNumber == 91} setTarget={setTargetBackgroundNumber} number={91} ><img src={String(getBackCardImg('91'))} /></OptionCardImg>,
            <OptionCardImg name={"Вирмлинг латунного дракона"} targetThis={targetBackgroundNumber == 92} setTarget={setTargetBackgroundNumber} number={92} ><img src={String(getBackCardImg('92'))} /></OptionCardImg>,
            <OptionCardImg name={"Вирмлинг медного дракона"} targetThis={targetBackgroundNumber == 93} setTarget={setTargetBackgroundNumber} number={93} ><img src={String(getBackCardImg('93'))} /></OptionCardImg>,
            <OptionCardImg name={"Вирмлинг серебрянного дракона"} targetThis={targetBackgroundNumber == 94} setTarget={setTargetBackgroundNumber} number={94} ><img src={String(getBackCardImg('94'))} /></OptionCardImg>,
            <OptionCardImg name={"Вирмлинг синего дракона"} targetThis={targetBackgroundNumber == 95} setTarget={setTargetBackgroundNumber} number={95} ><img src={String(getBackCardImg('95'))} /></OptionCardImg>,
            <OptionCardImg name={"Вирмлинг черного дракона"} targetThis={targetBackgroundNumber == 96} setTarget={setTargetBackgroundNumber} number={96} ><img src={String(getBackCardImg('96'))} /></OptionCardImg>,
            <OptionCardImg name={"Водная анамалия"} targetThis={targetBackgroundNumber == 97} setTarget={setTargetBackgroundNumber} number={97} ><img src={String(getBackCardImg('97'))} /></OptionCardImg>,
            <OptionCardImg name={"Водный элементальный мирмидон"} targetThis={targetBackgroundNumber == 98} setTarget={setTargetBackgroundNumber} number={98} ><img src={String(getBackCardImg('98'))} /></OptionCardImg>,
            <OptionCardImg name={"Водянник"} targetThis={targetBackgroundNumber == 99} setTarget={setTargetBackgroundNumber} number={99} ><img src={String(getBackCardImg('99'))} /></OptionCardImg>,
            <OptionCardImg name={"Военачальник"} targetThis={targetBackgroundNumber == 100} setTarget={setTargetBackgroundNumber} number={100} ><img src={String(getBackCardImg('100'))} /></OptionCardImg>,
            <OptionCardImg name={"Вожак стаи гноллов"} targetThis={targetBackgroundNumber == 101} setTarget={setTargetBackgroundNumber} number={101} ><img src={String(getBackCardImg('101'))} /></OptionCardImg>,
            <OptionCardImg name={"Вождь медвежатников"} targetThis={targetBackgroundNumber == 102} setTarget={setTargetBackgroundNumber} number={102} ><img src={String(getBackCardImg('102'))} /></OptionCardImg>,
            <OptionCardImg name={"Воздушный элементаль"} targetThis={targetBackgroundNumber == 103} setTarget={setTargetBackgroundNumber} number={103} ><img src={String(getBackCardImg('103'))} /></OptionCardImg>,
            <OptionCardImg name={"Воздушный элементальный мирмидон"} targetThis={targetBackgroundNumber == 104} setTarget={setTargetBackgroundNumber} number={104} ><img src={String(getBackCardImg('104'))} /></OptionCardImg>,
            <OptionCardImg name={"Воин призрачного меча"} targetThis={targetBackgroundNumber == 105} setTarget={setTargetBackgroundNumber} number={105} ><img src={String(getBackCardImg('105'))} /></OptionCardImg>,
            <OptionCardImg name={"Воитель племени"} targetThis={targetBackgroundNumber == 106} setTarget={setTargetBackgroundNumber} number={106} ><img src={String(getBackCardImg('106'))} /></OptionCardImg>,
            <OptionCardImg name={"Волк"} targetThis={targetBackgroundNumber == 107} setTarget={setTargetBackgroundNumber} number={107} ><img src={String(getBackCardImg('107'))} /></OptionCardImg>,
            <OptionCardImg name={"Волшебный дракончик"} targetThis={targetBackgroundNumber == 108} setTarget={setTargetBackgroundNumber} number={108} ><img src={String(getBackCardImg('108'))} /></OptionCardImg>,
            <OptionCardImg name={"Воплотитель"} targetThis={targetBackgroundNumber == 109} setTarget={setTargetBackgroundNumber} number={109} ><img src={String(getBackCardImg('109'))} /></OptionCardImg>,
            <OptionCardImg name={"Ворг"} targetThis={targetBackgroundNumber == 110} setTarget={setTargetBackgroundNumber} number={110} ><img src={String(getBackCardImg('110'))} /></OptionCardImg>,
            <OptionCardImg name={"Ворон"} targetThis={targetBackgroundNumber == 111} setTarget={setTargetBackgroundNumber} number={111} ><img src={String(getBackCardImg('111'))} /></OptionCardImg>,
            <OptionCardImg name={"Ворядной элементаль"} targetThis={targetBackgroundNumber == 112} setTarget={setTargetBackgroundNumber} number={112} ><img src={String(getBackCardImg('112'))} /></OptionCardImg>,
            <OptionCardImg name={"Врок"} targetThis={targetBackgroundNumber == 113} setTarget={setTargetBackgroundNumber} number={113} ><img src={String(getBackCardImg('113'))} /></OptionCardImg>,
            <OptionCardImg name={"Вурдалак"} targetThis={targetBackgroundNumber == 114} setTarget={setTargetBackgroundNumber} number={114} ><img src={String(getBackCardImg('114'))} /></OptionCardImg>,
            <OptionCardImg name={"Вьющаяся зараза"} targetThis={targetBackgroundNumber == 115} setTarget={setTargetBackgroundNumber} number={115} ><img src={String(getBackCardImg('115'))} /></OptionCardImg>,
            <OptionCardImg name={"Гадрозавр"} targetThis={targetBackgroundNumber == 116} setTarget={setTargetBackgroundNumber} number={116} ><img src={String(getBackCardImg('116'))} /></OptionCardImg>,
            <OptionCardImg name={"Газовая спора"} targetThis={targetBackgroundNumber == 117} setTarget={setTargetBackgroundNumber} number={117} ><img src={String(getBackCardImg('117'))} /></OptionCardImg>,
            <OptionCardImg name={"Гарпия"} targetThis={targetBackgroundNumber == 118} setTarget={setTargetBackgroundNumber} number={118} ><img src={String(getBackCardImg('118'))} /></OptionCardImg>,
            <OptionCardImg name={"Гаут"} targetThis={targetBackgroundNumber == 119} setTarget={setTargetBackgroundNumber} number={119} ><img src={String(getBackCardImg('119'))} /></OptionCardImg>,
            <OptionCardImg name={"Гиганский многоножка"} targetThis={targetBackgroundNumber == 120} setTarget={setTargetBackgroundNumber} number={120} ><img src={String(getBackCardImg('120'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантская акула"} targetThis={targetBackgroundNumber == 121} setTarget={setTargetBackgroundNumber} number={121} ><img src={String(getBackCardImg('121'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантская гиена"} targetThis={targetBackgroundNumber == 122} setTarget={setTargetBackgroundNumber} number={122} ><img src={String(getBackCardImg('122'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантская жаба"} targetThis={targetBackgroundNumber == 123} setTarget={setTargetBackgroundNumber} number={123} ><img src={String(getBackCardImg('123'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантская крыса"} targetThis={targetBackgroundNumber == 124} setTarget={setTargetBackgroundNumber} number={124} ><img src={String(getBackCardImg('124'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантская куница"} targetThis={targetBackgroundNumber == 125} setTarget={setTargetBackgroundNumber} number={125} ><img src={String(getBackCardImg('125'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантская летучая мышь"} targetThis={targetBackgroundNumber == 126} setTarget={setTargetBackgroundNumber} number={126} ><img src={String(getBackCardImg('126'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантская лягушка"} targetThis={targetBackgroundNumber == 127} setTarget={setTargetBackgroundNumber} number={127} ><img src={String(getBackCardImg('127'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантская оса"} targetThis={targetBackgroundNumber == 128} setTarget={setTargetBackgroundNumber} number={128} ><img src={String(getBackCardImg('128'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантская сова"} targetThis={targetBackgroundNumber == 129} setTarget={setTargetBackgroundNumber} number={129} ><img src={String(getBackCardImg('129'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантская человекообразная обезьяна"} targetThis={targetBackgroundNumber == 130} setTarget={setTargetBackgroundNumber} number={130} ><img src={String(getBackCardImg('130'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантская ядовитая змея"} targetThis={targetBackgroundNumber == 131} setTarget={setTargetBackgroundNumber} number={131} ><img src={String(getBackCardImg('131'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантская ящерица"} targetThis={targetBackgroundNumber == 132} setTarget={setTargetBackgroundNumber} number={132} ><img src={String(getBackCardImg('132'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантский барсук"} targetThis={targetBackgroundNumber == 133} setTarget={setTargetBackgroundNumber} number={133} ><img src={String(getBackCardImg('133'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантский гриф"} targetThis={targetBackgroundNumber == 134} setTarget={setTargetBackgroundNumber} number={134} ><img src={String(getBackCardImg('134'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантский кабан"} targetThis={targetBackgroundNumber == 135} setTarget={setTargetBackgroundNumber} number={135} ><img src={String(getBackCardImg('135'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантский козел"} targetThis={targetBackgroundNumber == 136} setTarget={setTargetBackgroundNumber} number={136} ><img src={String(getBackCardImg('136'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантский краб"} targetThis={targetBackgroundNumber == 137} setTarget={setTargetBackgroundNumber} number={137} ><img src={String(getBackCardImg('137'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантский крокодил"} targetThis={targetBackgroundNumber == 138} setTarget={setTargetBackgroundNumber} number={138} ><img src={String(getBackCardImg('138'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантский лось"} targetThis={targetBackgroundNumber == 139} setTarget={setTargetBackgroundNumber} number={139} ><img src={String(getBackCardImg('139'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантский морской конек"} targetThis={targetBackgroundNumber == 140} setTarget={setTargetBackgroundNumber} number={140} ><img src={String(getBackCardImg('140'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантский огненный жук"} targetThis={targetBackgroundNumber == 141} setTarget={setTargetBackgroundNumber} number={141} ><img src={String(getBackCardImg('141'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантский орел"} targetThis={targetBackgroundNumber == 142} setTarget={setTargetBackgroundNumber} number={142} ><img src={String(getBackCardImg('142'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантский осьминог"} targetThis={targetBackgroundNumber == 143} setTarget={setTargetBackgroundNumber} number={143} ><img src={String(getBackCardImg('143'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантский паук волк 2"} targetThis={targetBackgroundNumber == 144} setTarget={setTargetBackgroundNumber} number={144} ><img src={String(getBackCardImg('144'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантский паук волк"} targetThis={targetBackgroundNumber == 145} setTarget={setTargetBackgroundNumber} number={145} ><img src={String(getBackCardImg('145'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантский паук"} targetThis={targetBackgroundNumber == 146} setTarget={setTargetBackgroundNumber} number={146} ><img src={String(getBackCardImg('146'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантский скорпион"} targetThis={targetBackgroundNumber == 147} setTarget={setTargetBackgroundNumber} number={147} ><img src={String(getBackCardImg('147'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантский удав"} targetThis={targetBackgroundNumber == 148} setTarget={setTargetBackgroundNumber} number={148} ><img src={String(getBackCardImg('148'))} /></OptionCardImg>,
            <OptionCardImg name={"Гигантский ходун"} targetThis={targetBackgroundNumber == 149} setTarget={setTargetBackgroundNumber} number={149} ><img src={String(getBackCardImg('149'))} /></OptionCardImg>,
            <OptionCardImg name={"Гидра"} targetThis={targetBackgroundNumber == 150} setTarget={setTargetBackgroundNumber} number={150} ><img src={String(getBackCardImg('150'))} /></OptionCardImg>,
            <OptionCardImg name={"Гидролот"} targetThis={targetBackgroundNumber == 151} setTarget={setTargetBackgroundNumber} number={151} ><img src={String(getBackCardImg('151'))} /></OptionCardImg>,
            <OptionCardImg name={"Гиена"} targetThis={targetBackgroundNumber == 152} setTarget={setTargetBackgroundNumber} number={152} ><img src={String(getBackCardImg('152'))} /></OptionCardImg>,
            <OptionCardImg name={"Гиносфинкс"} targetThis={targetBackgroundNumber == 153} setTarget={setTargetBackgroundNumber} number={153} ><img src={String(getBackCardImg('153'))} /></OptionCardImg>,
            <OptionCardImg name={"Гиппогриф"} targetThis={targetBackgroundNumber == 154} setTarget={setTargetBackgroundNumber} number={154} ><img src={String(getBackCardImg('154'))} /></OptionCardImg>,
            <OptionCardImg name={"Гираллон"} targetThis={targetBackgroundNumber == 155} setTarget={setTargetBackgroundNumber} number={155} ><img src={String(getBackCardImg('155'))} /></OptionCardImg>,
            <OptionCardImg name={"Гитцерай Анарх"} targetThis={targetBackgroundNumber == 156} setTarget={setTargetBackgroundNumber} number={156} ><img src={String(getBackCardImg('156'))} /></OptionCardImg>,
            <OptionCardImg name={"Гитцерай зерт"} targetThis={targetBackgroundNumber == 157} setTarget={setTargetBackgroundNumber} number={157} ><img src={String(getBackCardImg('157'))} /></OptionCardImg>,
            <OptionCardImg name={"Гитцерай просвещённый"} targetThis={targetBackgroundNumber == 158} setTarget={setTargetBackgroundNumber} number={158} ><img src={String(getBackCardImg('158'))} /></OptionCardImg>,
            <OptionCardImg name={"Гитъянки верховный главнокомандующий"} targetThis={targetBackgroundNumber == 159} setTarget={setTargetBackgroundNumber} number={159} ><img src={String(getBackCardImg('159'))} /></OptionCardImg>,
            <OptionCardImg name={"Гитъянки Гиш"} targetThis={targetBackgroundNumber == 160} setTarget={setTargetBackgroundNumber} number={160} ><img src={String(getBackCardImg('160'))} /></OptionCardImg>,
            <OptionCardImg name={"Гитъянки Кит’рак"} targetThis={targetBackgroundNumber == 161} setTarget={setTargetBackgroundNumber} number={161} ><img src={String(getBackCardImg('161'))} /></OptionCardImg>,
            <OptionCardImg name={"Гитъянки рыцарь"} targetThis={targetBackgroundNumber == 162} setTarget={setTargetBackgroundNumber} number={162} ><img src={String(getBackCardImg('162'))} /></OptionCardImg>,
            <OptionCardImg name={"Гитьянки воитель"} targetThis={targetBackgroundNumber == 163} setTarget={setTargetBackgroundNumber} number={163} ><img src={String(getBackCardImg('163'))} /></OptionCardImg>,
            <OptionCardImg name={"Гифф"} targetThis={targetBackgroundNumber == 164} setTarget={setTargetBackgroundNumber} number={164} ><img src={String(getBackCardImg('164'))} /></OptionCardImg>,
            <OptionCardImg name={"Гицерай монах"} targetThis={targetBackgroundNumber == 165} setTarget={setTargetBackgroundNumber} number={165} ><img src={String(getBackCardImg('165'))} /></OptionCardImg>,
            <OptionCardImg name={"Глабрезу"} targetThis={targetBackgroundNumber == 166} setTarget={setTargetBackgroundNumber} number={166} ><img src={String(getBackCardImg('166'))} /></OptionCardImg>,
            <OptionCardImg name={"Гладиатор"} targetThis={targetBackgroundNumber == 167} setTarget={setTargetBackgroundNumber} number={167} ><img src={String(getBackCardImg('167'))} /></OptionCardImg>,
            <OptionCardImg name={"Глеб дур"} targetThis={targetBackgroundNumber == 168} setTarget={setTargetBackgroundNumber} number={168} ><img src={String(getBackCardImg('168'))} /></OptionCardImg>,
            <OptionCardImg name={"Глиняный голем"} targetThis={targetBackgroundNumber == 169} setTarget={setTargetBackgroundNumber} number={169} ><img src={String(getBackCardImg('169'))} /></OptionCardImg>,
            <OptionCardImg name={"Глубинные роф"} targetThis={targetBackgroundNumber == 170} setTarget={setTargetBackgroundNumber} number={170} ><img src={String(getBackCardImg('170'))} /></OptionCardImg>,
            <OptionCardImg name={"Глубинный гном"} targetThis={targetBackgroundNumber == 171} setTarget={setTargetBackgroundNumber} number={171} ><img src={String(getBackCardImg('171'))} /></OptionCardImg>,
            <OptionCardImg name={"Гнилой тролль"} targetThis={targetBackgroundNumber == 172} setTarget={setTargetBackgroundNumber} number={172} ><img src={String(getBackCardImg('172'))} /></OptionCardImg>,
            <OptionCardImg name={"Гнолл глодатель"} targetThis={targetBackgroundNumber == 173} setTarget={setTargetBackgroundNumber} number={173} ><img src={String(getBackCardImg('173'))} /></OptionCardImg>,
            <OptionCardImg name={"Гнолл клык йеногу"} targetThis={targetBackgroundNumber == 174} setTarget={setTargetBackgroundNumber} number={174} ><img src={String(getBackCardImg('174'))} /></OptionCardImg>,
            <OptionCardImg name={"Гнолл охотник"} targetThis={targetBackgroundNumber == 175} setTarget={setTargetBackgroundNumber} number={175} ><img src={String(getBackCardImg('175'))} /></OptionCardImg>,
            <OptionCardImg name={"Гнолл"} targetThis={targetBackgroundNumber == 176} setTarget={setTargetBackgroundNumber} number={176} ><img src={String(getBackCardImg('176'))} /></OptionCardImg>,
            <OptionCardImg name={"Гоблин"} targetThis={targetBackgroundNumber == 177} setTarget={setTargetBackgroundNumber} number={177} ><img src={String(getBackCardImg('177'))} /></OptionCardImg>,
            <OptionCardImg name={"Головорез"} targetThis={targetBackgroundNumber == 178} setTarget={setTargetBackgroundNumber} number={178} ><img src={String(getBackCardImg('178'))} /></OptionCardImg>,
            <OptionCardImg name={"Голод"} targetThis={targetBackgroundNumber == 179} setTarget={setTargetBackgroundNumber} number={179} ><img src={String(getBackCardImg('179'))} /></OptionCardImg>,
            <OptionCardImg name={"Гомункул"} targetThis={targetBackgroundNumber == 180} setTarget={setTargetBackgroundNumber} number={180} ><img src={String(getBackCardImg('180'))} /></OptionCardImg>,
            <OptionCardImg name={"Гончая йет"} targetThis={targetBackgroundNumber == 181} setTarget={setTargetBackgroundNumber} number={181} ><img src={String(getBackCardImg('181'))} /></OptionCardImg>,
            <OptionCardImg name={"Горгулья"} targetThis={targetBackgroundNumber == 182} setTarget={setTargetBackgroundNumber} number={182} ><img src={String(getBackCardImg('182'))} /></OptionCardImg>,
            <OptionCardImg name={"Гористро"} targetThis={targetBackgroundNumber == 183} setTarget={setTargetBackgroundNumber} number={183} ><img src={String(getBackCardImg('183'))} /></OptionCardImg>,
            <OptionCardImg name={"Горогона"} targetThis={targetBackgroundNumber == 184} setTarget={setTargetBackgroundNumber} number={184} ><img src={String(getBackCardImg('184'))} /></OptionCardImg>,
            <OptionCardImg name={"Грелл"} targetThis={targetBackgroundNumber == 185} setTarget={setTargetBackgroundNumber} number={185} ><img src={String(getBackCardImg('185'))} /></OptionCardImg>,
            <OptionCardImg name={"Гримлок"} targetThis={targetBackgroundNumber == 186} setTarget={setTargetBackgroundNumber} number={186} ><img src={String(getBackCardImg('186'))} /></OptionCardImg>,
            <OptionCardImg name={"Гриф"} targetThis={targetBackgroundNumber == 187} setTarget={setTargetBackgroundNumber} number={187} ><img src={String(getBackCardImg('187'))} /></OptionCardImg>,
            <OptionCardImg name={"Грифон"} targetThis={targetBackgroundNumber == 188} setTarget={setTargetBackgroundNumber} number={188} ><img src={String(getBackCardImg('188'))} /></OptionCardImg>,
            <OptionCardImg name={"Громила звёздных порождений"} targetThis={targetBackgroundNumber == 189} setTarget={setTargetBackgroundNumber} number={189} ><img src={String(getBackCardImg('189'))} /></OptionCardImg>,
            <OptionCardImg name={"Грунг"} targetThis={targetBackgroundNumber == 190} setTarget={setTargetBackgroundNumber} number={190} ><img src={String(getBackCardImg('190'))} /></OptionCardImg>,
            <OptionCardImg name={"Грязевой мефит"} targetThis={targetBackgroundNumber == 191} setTarget={setTargetBackgroundNumber} number={191} ><img src={String(getBackCardImg('191'))} /></OptionCardImg>,
            <OptionCardImg name={"Дао"} targetThis={targetBackgroundNumber == 192} setTarget={setTargetBackgroundNumber} number={192} ><img src={String(getBackCardImg('192'))} /></OptionCardImg>,
            <OptionCardImg name={"Дарклинг"} targetThis={targetBackgroundNumber == 193} setTarget={setTargetBackgroundNumber} number={193} ><img src={String(getBackCardImg('193'))} /></OptionCardImg>,
            <OptionCardImg name={"Дворянин"} targetThis={targetBackgroundNumber == 194} setTarget={setTargetBackgroundNumber} number={194} ><img src={String(getBackCardImg('194'))} /></OptionCardImg>,
            <OptionCardImg name={"Дейноних"} targetThis={targetBackgroundNumber == 195} setTarget={setTargetBackgroundNumber} number={195} ><img src={String(getBackCardImg('195'))} /></OptionCardImg>,
            <OptionCardImg name={"Дельфин"} targetThis={targetBackgroundNumber == 196} setTarget={setTargetBackgroundNumber} number={196} ><img src={String(getBackCardImg('196'))} /></OptionCardImg>,
            <OptionCardImg name={"Демилич"} targetThis={targetBackgroundNumber == 197} setTarget={setTargetBackgroundNumber} number={197} ><img src={String(getBackCardImg('197'))} /></OptionCardImg>,
            <OptionCardImg name={"Дерголот"} targetThis={targetBackgroundNumber == 198} setTarget={setTargetBackgroundNumber} number={198} ><img src={String(getBackCardImg('198'))} /></OptionCardImg>,
            <OptionCardImg name={"Дерро савант"} targetThis={targetBackgroundNumber == 199} setTarget={setTargetBackgroundNumber} number={199} ><img src={String(getBackCardImg('199'))} /></OptionCardImg>,
            <OptionCardImg name={"Дерро"} targetThis={targetBackgroundNumber == 200} setTarget={setTargetBackgroundNumber} number={200} ><img src={String(getBackCardImg('200'))} /></OptionCardImg>,
            <OptionCardImg name={"Джинн"} targetThis={targetBackgroundNumber == 201} setTarget={setTargetBackgroundNumber} number={201} ><img src={String(getBackCardImg('201'))} /></OptionCardImg>,
            <OptionCardImg name={"Диббук"} targetThis={targetBackgroundNumber == 202} setTarget={setTargetBackgroundNumber} number={202} ><img src={String(getBackCardImg('202'))} /></OptionCardImg>,
            <OptionCardImg name={"Диметродон"} targetThis={targetBackgroundNumber == 203} setTarget={setTargetBackgroundNumber} number={203} ><img src={String(getBackCardImg('203'))} /></OptionCardImg>,
            <OptionCardImg name={"Доппельгангер"} targetThis={targetBackgroundNumber == 204} setTarget={setTargetBackgroundNumber} number={204} ><img src={String(getBackCardImg('204'))} /></OptionCardImg>,
            <OptionCardImg name={"Дракочерепаха"} targetThis={targetBackgroundNumber == 205} setTarget={setTargetBackgroundNumber} number={205} ><img src={String(getBackCardImg('205'))} /></OptionCardImg>,
            <OptionCardImg name={"Драук заклинатель"} targetThis={targetBackgroundNumber == 206} setTarget={setTargetBackgroundNumber} number={206} ><img src={String(getBackCardImg('206'))} /></OptionCardImg>,
            <OptionCardImg name={"Драук"} targetThis={targetBackgroundNumber == 207} setTarget={setTargetBackgroundNumber} number={207} ><img src={String(getBackCardImg('207'))} /></OptionCardImg>,
            <OptionCardImg name={"Древний белый дракон"} targetThis={targetBackgroundNumber == 208} setTarget={setTargetBackgroundNumber} number={208} ><img src={String(getBackCardImg('208'))} /></OptionCardImg>,
            <OptionCardImg name={"Древний бронзовый дракон"} targetThis={targetBackgroundNumber == 209} setTarget={setTargetBackgroundNumber} number={209} ><img src={String(getBackCardImg('209'))} /></OptionCardImg>,
            <OptionCardImg name={"Древний зелёный дракон"} targetThis={targetBackgroundNumber == 210} setTarget={setTargetBackgroundNumber} number={210} ><img src={String(getBackCardImg('210'))} /></OptionCardImg>,
            <OptionCardImg name={"Древний золотой дракон"} targetThis={targetBackgroundNumber == 211} setTarget={setTargetBackgroundNumber} number={211} ><img src={String(getBackCardImg('211'))} /></OptionCardImg>,
            <OptionCardImg name={"Древний красный дракон"} targetThis={targetBackgroundNumber == 212} setTarget={setTargetBackgroundNumber} number={212} ><img src={String(getBackCardImg('212'))} /></OptionCardImg>,
            <OptionCardImg name={"Древний латунный дракон"} targetThis={targetBackgroundNumber == 213} setTarget={setTargetBackgroundNumber} number={213} ><img src={String(getBackCardImg('213'))} /></OptionCardImg>,
            <OptionCardImg name={"Древний медный дракон"} targetThis={targetBackgroundNumber == 214} setTarget={setTargetBackgroundNumber} number={214} ><img src={String(getBackCardImg('214'))} /></OptionCardImg>,
            <OptionCardImg name={"Древний облекс"} targetThis={targetBackgroundNumber == 215} setTarget={setTargetBackgroundNumber} number={215} ><img src={String(getBackCardImg('215'))} /></OptionCardImg>,
            <OptionCardImg name={"Древний серебряный дракон"} targetThis={targetBackgroundNumber == 216} setTarget={setTargetBackgroundNumber} number={216} ><img src={String(getBackCardImg('216'))} /></OptionCardImg>,
            <OptionCardImg name={"Древний синий дракон"} targetThis={targetBackgroundNumber == 217} setTarget={setTargetBackgroundNumber} number={217} ><img src={String(getBackCardImg('217'))} /></OptionCardImg>,
            <OptionCardImg name={"Древний черный дракон"} targetThis={targetBackgroundNumber == 218} setTarget={setTargetBackgroundNumber} number={218} ><img src={String(getBackCardImg('218'))} /></OptionCardImg>,
            <OptionCardImg name={"Древний шторм"} targetThis={targetBackgroundNumber == 219} setTarget={setTargetBackgroundNumber} number={219} ><img src={String(getBackCardImg('219'))} /></OptionCardImg>,
            <OptionCardImg name={"Дредноут огненный гигант"} targetThis={targetBackgroundNumber == 220} setTarget={setTargetBackgroundNumber} number={220} ><img src={String(getBackCardImg('220'))} /></OptionCardImg>,
            <OptionCardImg name={"Дретч"} targetThis={targetBackgroundNumber == 221} setTarget={setTargetBackgroundNumber} number={221} ><img src={String(getBackCardImg('221'))} /></OptionCardImg>,
            <OptionCardImg name={"Дриада"} targetThis={targetBackgroundNumber == 222} setTarget={setTargetBackgroundNumber} number={222} ><img src={String(getBackCardImg('222'))} /></OptionCardImg>,
            <OptionCardImg name={"Дроу арахномант"} targetThis={targetBackgroundNumber == 223} setTarget={setTargetBackgroundNumber} number={223} ><img src={String(getBackCardImg('223'))} /></OptionCardImg>,
            <OptionCardImg name={"Дроу благоприятный супруг"} targetThis={targetBackgroundNumber == 224} setTarget={setTargetBackgroundNumber} number={224} ><img src={String(getBackCardImg('224'))} /></OptionCardImg>,
            <OptionCardImg name={"Дроу верховная мать"} targetThis={targetBackgroundNumber == 225} setTarget={setTargetBackgroundNumber} number={225} ><img src={String(getBackCardImg('225'))} /></OptionCardImg>,
            <OptionCardImg name={"Дроу жрица Лолс"} targetThis={targetBackgroundNumber == 226} setTarget={setTargetBackgroundNumber} number={226} ><img src={String(getBackCardImg('226'))} /></OptionCardImg>,
            <OptionCardImg name={"Дроу инквизитор"} targetThis={targetBackgroundNumber == 227} setTarget={setTargetBackgroundNumber} number={227} ><img src={String(getBackCardImg('227'))} /></OptionCardImg>,
            <OptionCardImg name={"Дроу капитан дома"} targetThis={targetBackgroundNumber == 228} setTarget={setTargetBackgroundNumber} number={228} ><img src={String(getBackCardImg('228'))} /></OptionCardImg>,
            <OptionCardImg name={"Дроу клинок теней"} targetThis={targetBackgroundNumber == 229} setTarget={setTargetBackgroundNumber} number={229} ><img src={String(getBackCardImg('229'))} /></OptionCardImg>,
            <OptionCardImg name={"Дроу"} targetThis={targetBackgroundNumber == 230} setTarget={setTargetBackgroundNumber} number={230} ><img src={String(getBackCardImg('230'))} /></OptionCardImg>,
            <OptionCardImg name={"Друид"} targetThis={targetBackgroundNumber == 231} setTarget={setTargetBackgroundNumber} number={231} ><img src={String(getBackCardImg('231'))} /></OptionCardImg>,
            <OptionCardImg name={"Дрэглот"} targetThis={targetBackgroundNumber == 232} setTarget={setTargetBackgroundNumber} number={232} ><img src={String(getBackCardImg('232'))} /></OptionCardImg>,
            <OptionCardImg name={"Дуодрон"} targetThis={targetBackgroundNumber == 233} setTarget={setTargetBackgroundNumber} number={233} ><img src={String(getBackCardImg('233'))} /></OptionCardImg>,
            <OptionCardImg name={"Дух Аберации"} targetThis={targetBackgroundNumber == 234} setTarget={setTargetBackgroundNumber} number={234} ><img src={String(getBackCardImg('234'))} /></OptionCardImg>,
            <OptionCardImg name={"Дух дикого огня"} targetThis={targetBackgroundNumber == 235} setTarget={setTargetBackgroundNumber} number={235} ><img src={String(getBackCardImg('235'))} /></OptionCardImg>,
            <OptionCardImg name={"Дух Зверя"} targetThis={targetBackgroundNumber == 236} setTarget={setTargetBackgroundNumber} number={236} ><img src={String(getBackCardImg('236'))} /></OptionCardImg>,
            <OptionCardImg name={"Дух Исчадия"} targetThis={targetBackgroundNumber == 237} setTarget={setTargetBackgroundNumber} number={237} ><img src={String(getBackCardImg('237'))} /></OptionCardImg>,
            <OptionCardImg name={"Дух конструкта"} targetThis={targetBackgroundNumber == 238} setTarget={setTargetBackgroundNumber} number={238} ><img src={String(getBackCardImg('238'))} /></OptionCardImg>,
            <OptionCardImg name={"Дух Небожителя"} targetThis={targetBackgroundNumber == 239} setTarget={setTargetBackgroundNumber} number={239} ><img src={String(getBackCardImg('239'))} /></OptionCardImg>,
            <OptionCardImg name={"Дух Нежити"} targetThis={targetBackgroundNumber == 240} setTarget={setTargetBackgroundNumber} number={240} ><img src={String(getBackCardImg('240'))} /></OptionCardImg>,
            <OptionCardImg name={"Дух Стихии"} targetThis={targetBackgroundNumber == 241} setTarget={setTargetBackgroundNumber} number={241} ><img src={String(getBackCardImg('241'))} /></OptionCardImg>,
            <OptionCardImg name={"Дух Тени"} targetThis={targetBackgroundNumber == 242} setTarget={setTargetBackgroundNumber} number={242} ><img src={String(getBackCardImg('242'))} /></OptionCardImg>,
            <OptionCardImg name={"Дух Феи"} targetThis={targetBackgroundNumber == 243} setTarget={setTargetBackgroundNumber} number={243} ><img src={String(getBackCardImg('243'))} /></OptionCardImg>,
            <OptionCardImg name={"Духовная нага"} targetThis={targetBackgroundNumber == 244} setTarget={setTargetBackgroundNumber} number={244} ><img src={String(getBackCardImg('244'))} /></OptionCardImg>,
            <OptionCardImg name={"Душитель"} targetThis={targetBackgroundNumber == 245} setTarget={setTargetBackgroundNumber} number={245} ><img src={String(getBackCardImg('245'))} /></OptionCardImg>,
            <OptionCardImg name={"Дуэргар военачальник"} targetThis={targetBackgroundNumber == 246} setTarget={setTargetBackgroundNumber} number={246} ><img src={String(getBackCardImg('246'))} /></OptionCardImg>,
            <OptionCardImg name={"Дуэргар деспот"} targetThis={targetBackgroundNumber == 247} setTarget={setTargetBackgroundNumber} number={247} ><img src={String(getBackCardImg('247'))} /></OptionCardImg>,
            <OptionCardImg name={"Дуэргар каменный страж"} targetThis={targetBackgroundNumber == 248} setTarget={setTargetBackgroundNumber} number={248} ><img src={String(getBackCardImg('248'))} /></OptionCardImg>,
            <OptionCardImg name={"Дуэргар клинок души"} targetThis={targetBackgroundNumber == 249} setTarget={setTargetBackgroundNumber} number={249} ><img src={String(getBackCardImg('249'))} /></OptionCardImg>,
            <OptionCardImg name={"Дуэргар ксаррорн"} targetThis={targetBackgroundNumber == 250} setTarget={setTargetBackgroundNumber} number={250} ><img src={String(getBackCardImg('250'))} /></OptionCardImg>,
            <OptionCardImg name={"Дуэргар молотобоец"} targetThis={targetBackgroundNumber == 251} setTarget={setTargetBackgroundNumber} number={251} ><img src={String(getBackCardImg('251'))} /></OptionCardImg>,
            <OptionCardImg name={"Дуэргар"} targetThis={targetBackgroundNumber == 252} setTarget={setTargetBackgroundNumber} number={252} ><img src={String(getBackCardImg('252'))} /></OptionCardImg>,
            <OptionCardImg name={"Дуэргарн повелитель разума"} targetThis={targetBackgroundNumber == 253} setTarget={setTargetBackgroundNumber} number={253} ><img src={String(getBackCardImg('253'))} /></OptionCardImg>,
            <OptionCardImg name={"Дуэргарский крикун"} targetThis={targetBackgroundNumber == 254} setTarget={setTargetBackgroundNumber} number={254} ><img src={String(getBackCardImg('254'))} /></OptionCardImg>,
            <OptionCardImg name={"Дымовой мефит"} targetThis={targetBackgroundNumber == 255} setTarget={setTargetBackgroundNumber} number={255} ><img src={String(getBackCardImg('255'))} /></OptionCardImg>,
            <OptionCardImg name={"Дьявол цепей"} targetThis={targetBackgroundNumber == 256} setTarget={setTargetBackgroundNumber} number={256} ><img src={String(getBackCardImg('256'))} /></OptionCardImg>,
            <OptionCardImg name={"Дэв"} targetThis={targetBackgroundNumber == 257} setTarget={setTargetBackgroundNumber} number={257} ><img src={String(getBackCardImg('257'))} /></OptionCardImg>,
            <OptionCardImg name={"Дэтлок манипулятор"} targetThis={targetBackgroundNumber == 258} setTarget={setTargetBackgroundNumber} number={258} ><img src={String(getBackCardImg('258'))} /></OptionCardImg>,
            <OptionCardImg name={"Дэтлок умертвие"} targetThis={targetBackgroundNumber == 259} setTarget={setTargetBackgroundNumber} number={259} ><img src={String(getBackCardImg('259'))} /></OptionCardImg>,
            <OptionCardImg name={"Дэтлок"} targetThis={targetBackgroundNumber == 260} setTarget={setTargetBackgroundNumber} number={260} ><img src={String(getBackCardImg('260'))} /></OptionCardImg>,
            <OptionCardImg name={"Единорог"} targetThis={targetBackgroundNumber == 261} setTarget={setTargetBackgroundNumber} number={261} ><img src={String(getBackCardImg('261'))} /></OptionCardImg>,
            <OptionCardImg name={"Ездовая лошадь"} targetThis={targetBackgroundNumber == 262} setTarget={setTargetBackgroundNumber} number={262} ><img src={String(getBackCardImg('262'))} /></OptionCardImg>,
            <OptionCardImg name={"Жаболюд"} targetThis={targetBackgroundNumber == 263} setTarget={setTargetBackgroundNumber} number={263} ><img src={String(getBackCardImg('263'))} /></OptionCardImg>,
            <OptionCardImg name={"Железная кобра"} targetThis={targetBackgroundNumber == 264} setTarget={setTargetBackgroundNumber} number={264} ><img src={String(getBackCardImg('264'))} /></OptionCardImg>,
            <OptionCardImg name={"Железный голем"} targetThis={targetBackgroundNumber == 265} setTarget={setTargetBackgroundNumber} number={265} ><img src={String(getBackCardImg('265'))} /></OptionCardImg>,
            <OptionCardImg name={"Жрец кракена"} targetThis={targetBackgroundNumber == 266} setTarget={setTargetBackgroundNumber} number={266} ><img src={String(getBackCardImg('266'))} /></OptionCardImg>,
            <OptionCardImg name={"Жрица сахуагинов"} targetThis={targetBackgroundNumber == 267} setTarget={setTargetBackgroundNumber} number={267} ><img src={String(getBackCardImg('267'))} /></OptionCardImg>,
            <OptionCardImg name={"Заблудший"} targetThis={targetBackgroundNumber == 268} setTarget={setTargetBackgroundNumber} number={268} ><img src={String(getBackCardImg('268'))} /></OptionCardImg>,
            <OptionCardImg name={"Заводной дубовый стрелок"} targetThis={targetBackgroundNumber == 269} setTarget={setTargetBackgroundNumber} number={269} ><img src={String(getBackCardImg('269'))} /></OptionCardImg>,
            <OptionCardImg name={"Заратан"} targetThis={targetBackgroundNumber == 270} setTarget={setTargetBackgroundNumber} number={270} ><img src={String(getBackCardImg('270'))} /></OptionCardImg>,
            <OptionCardImg name={"Зелёный абишай"} targetThis={targetBackgroundNumber == 271} setTarget={setTargetBackgroundNumber} number={271} ><img src={String(getBackCardImg('271'))} /></OptionCardImg>,
            <OptionCardImg name={"Зелёный слаад"} targetThis={targetBackgroundNumber == 272} setTarget={setTargetBackgroundNumber} number={272} ><img src={String(getBackCardImg('272'))} /></OptionCardImg>,
            <OptionCardImg name={"Зеленая карга"} targetThis={targetBackgroundNumber == 273} setTarget={setTargetBackgroundNumber} number={273} ><img src={String(getBackCardImg('273'))} /></OptionCardImg>,
            <OptionCardImg name={"Земляной элементаль"} targetThis={targetBackgroundNumber == 274} setTarget={setTargetBackgroundNumber} number={274} ><img src={String(getBackCardImg('274'))} /></OptionCardImg>,
            <OptionCardImg name={"Земляной элементальный мирмидон"} targetThis={targetBackgroundNumber == 275} setTarget={setTargetBackgroundNumber} number={275} ><img src={String(getBackCardImg('275'))} /></OptionCardImg>,
            <OptionCardImg name={"Зимний эладрин"} targetThis={targetBackgroundNumber == 276} setTarget={setTargetBackgroundNumber} number={276} ><img src={String(getBackCardImg('276'))} /></OptionCardImg>,
            <OptionCardImg name={"Злобоглаз зомби"} targetThis={targetBackgroundNumber == 277} setTarget={setTargetBackgroundNumber} number={277} ><img src={String(getBackCardImg('277'))} /></OptionCardImg>,
            <OptionCardImg name={"Злобоглаз"} targetThis={targetBackgroundNumber == 278} setTarget={setTargetBackgroundNumber} number={278} ><img src={String(getBackCardImg('278'))} /></OptionCardImg>,
            <OptionCardImg name={"Злость"} targetThis={targetBackgroundNumber == 279} setTarget={setTargetBackgroundNumber} number={279} ><img src={String(getBackCardImg('279'))} /></OptionCardImg>,
            <OptionCardImg name={"Золотистый студень"} targetThis={targetBackgroundNumber == 280} setTarget={setTargetBackgroundNumber} number={280} ><img src={String(getBackCardImg('280'))} /></OptionCardImg>,
            <OptionCardImg name={"Зомби"} targetThis={targetBackgroundNumber == 281} setTarget={setTargetBackgroundNumber} number={281} ><img src={String(getBackCardImg('281'))} /></OptionCardImg>,
            <OptionCardImg name={"Зорн"} targetThis={targetBackgroundNumber == 282} setTarget={setTargetBackgroundNumber} number={282} ><img src={String(getBackCardImg('282'))} /></OptionCardImg>,
            <OptionCardImg name={"Зрелый облекс"} targetThis={targetBackgroundNumber == 283} setTarget={setTargetBackgroundNumber} number={283} ><img src={String(getBackCardImg('283'))} /></OptionCardImg>,
            <OptionCardImg name={"Игольчатая зараза"} targetThis={targetBackgroundNumber == 284} setTarget={setTargetBackgroundNumber} number={284} ><img src={String(getBackCardImg('284'))} /></OptionCardImg>,
            <OptionCardImg name={"Игольчатый дьявол"} targetThis={targetBackgroundNumber == 285} setTarget={setTargetBackgroundNumber} number={285} ><img src={String(getBackCardImg('285'))} /></OptionCardImg>,
            <OptionCardImg name={"Извечный морозный гигант"} targetThis={targetBackgroundNumber == 286} setTarget={setTargetBackgroundNumber} number={286} ><img src={String(getBackCardImg('286'))} /></OptionCardImg>,
            <OptionCardImg name={"Иллюзионист"} targetThis={targetBackgroundNumber == 287} setTarget={setTargetBackgroundNumber} number={287} ><img src={String(getBackCardImg('287'))} /></OptionCardImg>,
            <OptionCardImg name={"Иссохший гнолл"} targetThis={targetBackgroundNumber == 288} setTarget={setTargetBackgroundNumber} number={288} ><img src={String(getBackCardImg('288'))} /></OptionCardImg>,
            <OptionCardImg name={"Исчадие преисподней"} targetThis={targetBackgroundNumber == 289} setTarget={setTargetBackgroundNumber} number={289} ><img src={String(getBackCardImg('289'))} /></OptionCardImg>,
            <OptionCardImg name={"Исчезающий паук"} targetThis={targetBackgroundNumber == 290} setTarget={setTargetBackgroundNumber} number={290} ><img src={String(getBackCardImg('290'))} /></OptionCardImg>,
            <OptionCardImg name={"Ифрит"} targetThis={targetBackgroundNumber == 291} setTarget={setTargetBackgroundNumber} number={291} ><img src={String(getBackCardImg('291'))} /></OptionCardImg>,
            <OptionCardImg name={"Йети"} targetThis={targetBackgroundNumber == 292} setTarget={setTargetBackgroundNumber} number={292} ><img src={String(getBackCardImg('292'))} /></OptionCardImg>,
            <OptionCardImg name={"Йоклол"} targetThis={targetBackgroundNumber == 293} setTarget={setTargetBackgroundNumber} number={293} ><img src={String(getBackCardImg('293'))} /></OptionCardImg>,
            <OptionCardImg name={"Кабан"} targetThis={targetBackgroundNumber == 294} setTarget={setTargetBackgroundNumber} number={294} ><img src={String(getBackCardImg('294'))} /></OptionCardImg>,
            <OptionCardImg name={"Камбион"} targetThis={targetBackgroundNumber == 295} setTarget={setTargetBackgroundNumber} number={295} ><img src={String(getBackCardImg('295'))} /></OptionCardImg>,
            <OptionCardImg name={"Каменный великан"} targetThis={targetBackgroundNumber == 296} setTarget={setTargetBackgroundNumber} number={296} ><img src={String(getBackCardImg('296'))} /></OptionCardImg>,
            <OptionCardImg name={"Каменный гигант сноходец"} targetThis={targetBackgroundNumber == 297} setTarget={setTargetBackgroundNumber} number={297} ><img src={String(getBackCardImg('297'))} /></OptionCardImg>,
            <OptionCardImg name={"Каменный голем"} targetThis={targetBackgroundNumber == 298} setTarget={setTargetBackgroundNumber} number={298} ><img src={String(getBackCardImg('298'))} /></OptionCardImg>,
            <OptionCardImg name={"Каменный защитник"} targetThis={targetBackgroundNumber == 299} setTarget={setTargetBackgroundNumber} number={299} ><img src={String(getBackCardImg('299'))} /></OptionCardImg>,
            <OptionCardImg name={"Канолот"} targetThis={targetBackgroundNumber == 300} setTarget={setTargetBackgroundNumber} number={300} ><img src={String(getBackCardImg('300'))} /></OptionCardImg>,
            <OptionCardImg name={"Капитан разбойников"} targetThis={targetBackgroundNumber == 301} setTarget={setTargetBackgroundNumber} number={301} ><img src={String(getBackCardImg('301'))} /></OptionCardImg>,
            <OptionCardImg name={"Капитан хобгоблинов"} targetThis={targetBackgroundNumber == 302} setTarget={setTargetBackgroundNumber} number={302} ><img src={String(getBackCardImg('302'))} /></OptionCardImg>,
            <OptionCardImg name={"Карга аннис"} targetThis={targetBackgroundNumber == 303} setTarget={setTargetBackgroundNumber} number={303} ><img src={String(getBackCardImg('303'))} /></OptionCardImg>,
            <OptionCardImg name={"Карга бьёр"} targetThis={targetBackgroundNumber == 304} setTarget={setTargetBackgroundNumber} number={304} ><img src={String(getBackCardImg('304'))} /></OptionCardImg>,
            <OptionCardImg name={"Катоблепас"} targetThis={targetBackgroundNumber == 305} setTarget={setTargetBackgroundNumber} number={305} ><img src={String(getBackCardImg('305'))} /></OptionCardImg>,
            <OptionCardImg name={"Кваггот тоног"} targetThis={targetBackgroundNumber == 306} setTarget={setTargetBackgroundNumber} number={306} ><img src={String(getBackCardImg('306'))} /></OptionCardImg>,
            <OptionCardImg name={"Кваггот"} targetThis={targetBackgroundNumber == 307} setTarget={setTargetBackgroundNumber} number={307} ><img src={String(getBackCardImg('307'))} /></OptionCardImg>,
            <OptionCardImg name={"Квадрон"} targetThis={targetBackgroundNumber == 308} setTarget={setTargetBackgroundNumber} number={308} ><img src={String(getBackCardImg('308'))} /></OptionCardImg>,
            <OptionCardImg name={"Квазит"} targetThis={targetBackgroundNumber == 309} setTarget={setTargetBackgroundNumber} number={309} ><img src={String(getBackCardImg('309'))} /></OptionCardImg>,
            <OptionCardImg name={"Квилинг"} targetThis={targetBackgroundNumber == 310} setTarget={setTargetBackgroundNumber} number={310} ><img src={String(getBackCardImg('310'))} /></OptionCardImg>,
            <OptionCardImg name={"Квиппер"} targetThis={targetBackgroundNumber == 311} setTarget={setTargetBackgroundNumber} number={311} ><img src={String(getBackCardImg('311'))} /></OptionCardImg>,
            <OptionCardImg name={"Кенку"} targetThis={targetBackgroundNumber == 312} setTarget={setTargetBackgroundNumber} number={312} ><img src={String(getBackCardImg('312'))} /></OptionCardImg>,
            <OptionCardImg name={"Кентавр"} targetThis={targetBackgroundNumber == 313} setTarget={setTargetBackgroundNumber} number={313} ><img src={String(getBackCardImg('313'))} /></OptionCardImg>,
            <OptionCardImg name={"Кетцалькоатль"} targetThis={targetBackgroundNumber == 314} setTarget={setTargetBackgroundNumber} number={314} ><img src={String(getBackCardImg('314'))} /></OptionCardImg>,
            <OptionCardImg name={"Ки–рин"} targetThis={targetBackgroundNumber == 315} setTarget={setTargetBackgroundNumber} number={315} ><img src={String(getBackCardImg('315'))} /></OptionCardImg>,
            <OptionCardImg name={"Коатль"} targetThis={targetBackgroundNumber == 316} setTarget={setTargetBackgroundNumber} number={316} ><img src={String(getBackCardImg('316'))} /></OptionCardImg>,
            <OptionCardImg name={"Кобольд драконий щит"} targetThis={targetBackgroundNumber == 317} setTarget={setTargetBackgroundNumber} number={317} ><img src={String(getBackCardImg('317'))} /></OptionCardImg>,
            <OptionCardImg name={"Кобольд изобретатель"} targetThis={targetBackgroundNumber == 318} setTarget={setTargetBackgroundNumber} number={318} ><img src={String(getBackCardImg('318'))} /></OptionCardImg>,
            <OptionCardImg name={"Кобольд чашуйчатый чародей"} targetThis={targetBackgroundNumber == 319} setTarget={setTargetBackgroundNumber} number={319} ><img src={String(getBackCardImg('319'))} /></OptionCardImg>,
            <OptionCardImg name={"Кобольд"} targetThis={targetBackgroundNumber == 320} setTarget={setTargetBackgroundNumber} number={320} ><img src={String(getBackCardImg('320'))} /></OptionCardImg>,
            <OptionCardImg name={"Ковер удушения"} targetThis={targetBackgroundNumber == 321} setTarget={setTargetBackgroundNumber} number={321} ><img src={String(getBackCardImg('321'))} /></OptionCardImg>,
            <OptionCardImg name={"Козел"} targetThis={targetBackgroundNumber == 322} setTarget={setTargetBackgroundNumber} number={322} ><img src={String(getBackCardImg('322'))} /></OptionCardImg>,
            <OptionCardImg name={"Колдун архифеи"} targetThis={targetBackgroundNumber == 323} setTarget={setTargetBackgroundNumber} number={323} ><img src={String(getBackCardImg('323'))} /></OptionCardImg>,
            <OptionCardImg name={"Колдун великого древнего"} targetThis={targetBackgroundNumber == 324} setTarget={setTargetBackgroundNumber} number={324} ><img src={String(getBackCardImg('324'))} /></OptionCardImg>,
            <OptionCardImg name={"Колдун Исчадия"} targetThis={targetBackgroundNumber == 325} setTarget={setTargetBackgroundNumber} number={325} ><img src={String(getBackCardImg('325'))} /></OptionCardImg>,
            <OptionCardImg name={"Колючка"} targetThis={targetBackgroundNumber == 326} setTarget={setTargetBackgroundNumber} number={326} ><img src={String(getBackCardImg('326'))} /></OptionCardImg>,
            <OptionCardImg name={"Корова"} targetThis={targetBackgroundNumber == 327} setTarget={setTargetBackgroundNumber} number={327} ><img src={String(getBackCardImg('327'))} /></OptionCardImg>,
            <OptionCardImg name={"Король ящеров"} targetThis={targetBackgroundNumber == 328} setTarget={setTargetBackgroundNumber} number={328} ><img src={String(getBackCardImg('328'))} /></OptionCardImg>,
            <OptionCardImg name={"Корред"} targetThis={targetBackgroundNumber == 329} setTarget={setTargetBackgroundNumber} number={329} ><img src={String(getBackCardImg('329'))} /></OptionCardImg>,
            <OptionCardImg name={"Косатка"} targetThis={targetBackgroundNumber == 330} setTarget={setTargetBackgroundNumber} number={330} ><img src={String(getBackCardImg('330'))} /></OptionCardImg>,
            <OptionCardImg name={"Костелап"} targetThis={targetBackgroundNumber == 331} setTarget={setTargetBackgroundNumber} number={331} ><img src={String(getBackCardImg('331'))} /></OptionCardImg>,
            <OptionCardImg name={"Костяная нага"} targetThis={targetBackgroundNumber == 332} setTarget={setTargetBackgroundNumber} number={332} ><img src={String(getBackCardImg('332'))} /></OptionCardImg>,
            <OptionCardImg name={"Костяной дьявол"} targetThis={targetBackgroundNumber == 333} setTarget={setTargetBackgroundNumber} number={333} ><img src={String(getBackCardImg('333'))} /></OptionCardImg>,
            <OptionCardImg name={"Кошка"} targetThis={targetBackgroundNumber == 334} setTarget={setTargetBackgroundNumber} number={334} ><img src={String(getBackCardImg('334'))} /></OptionCardImg>,
            <OptionCardImg name={"Кошмар"} targetThis={targetBackgroundNumber == 335} setTarget={setTargetBackgroundNumber} number={335} ><img src={String(getBackCardImg('335'))} /></OptionCardImg>,
            <OptionCardImg name={"Краб"} targetThis={targetBackgroundNumber == 336} setTarget={setTargetBackgroundNumber} number={336} ><img src={String(getBackCardImg('336'))} /></OptionCardImg>,
            <OptionCardImg name={"Кракен"} targetThis={targetBackgroundNumber == 337} setTarget={setTargetBackgroundNumber} number={337} ><img src={String(getBackCardImg('337'))} /></OptionCardImg>,
            <OptionCardImg name={"Красный абишай"} targetThis={targetBackgroundNumber == 338} setTarget={setTargetBackgroundNumber} number={338} ><img src={String(getBackCardImg('338'))} /></OptionCardImg>,
            <OptionCardImg name={"Красный колпак"} targetThis={targetBackgroundNumber == 339} setTarget={setTargetBackgroundNumber} number={339} ><img src={String(getBackCardImg('339'))} /></OptionCardImg>,
            <OptionCardImg name={"Красный полудракон ветеран"} targetThis={targetBackgroundNumber == 340} setTarget={setTargetBackgroundNumber} number={340} ><img src={String(getBackCardImg('340'))} /></OptionCardImg>,
            <OptionCardImg name={"Красный слаад"} targetThis={targetBackgroundNumber == 341} setTarget={setTargetBackgroundNumber} number={341} ><img src={String(getBackCardImg('341'))} /></OptionCardImg>,
            <OptionCardImg name={"Кровавый ястреб"} targetThis={targetBackgroundNumber == 342} setTarget={setTargetBackgroundNumber} number={342} ><img src={String(getBackCardImg('342'))} /></OptionCardImg>,
            <OptionCardImg name={"Кровопийца"} targetThis={targetBackgroundNumber == 343} setTarget={setTargetBackgroundNumber} number={343} ><img src={String(getBackCardImg('343'))} /></OptionCardImg>,
            <OptionCardImg name={"Крокодил"} targetThis={targetBackgroundNumber == 344} setTarget={setTargetBackgroundNumber} number={344} ><img src={String(getBackCardImg('344'))} /></OptionCardImg>,
            <OptionCardImg name={"Кромсатель звездных порождений"} targetThis={targetBackgroundNumber == 345} setTarget={setTargetBackgroundNumber} number={345} ><img src={String(getBackCardImg('345'))} /></OptionCardImg>,
            <OptionCardImg name={"Крошечный слуга"} targetThis={targetBackgroundNumber == 346} setTarget={setTargetBackgroundNumber} number={346} ><img src={String(getBackCardImg('346'))} /></OptionCardImg>,
            <OptionCardImg name={"Крутик лорд улья"} targetThis={targetBackgroundNumber == 347} setTarget={setTargetBackgroundNumber} number={347} ><img src={String(getBackCardImg('347'))} /></OptionCardImg>,
            <OptionCardImg name={"Крылатый кобольд"} targetThis={targetBackgroundNumber == 348} setTarget={setTargetBackgroundNumber} number={348} ><img src={String(getBackCardImg('348'))} /></OptionCardImg>,
            <OptionCardImg name={"Крыса"} targetThis={targetBackgroundNumber == 349} setTarget={setTargetBackgroundNumber} number={349} ><img src={String(getBackCardImg('349'))} /></OptionCardImg>,
            <OptionCardImg name={"Крюкастый ужас"} targetThis={targetBackgroundNumber == 350} setTarget={setTargetBackgroundNumber} number={350} ><img src={String(getBackCardImg('350'))} /></OptionCardImg>,
            <OptionCardImg name={"Ксварт колдун Раксиворта"} targetThis={targetBackgroundNumber == 351} setTarget={setTargetBackgroundNumber} number={351} ><img src={String(getBackCardImg('351'))} /></OptionCardImg>,
            <OptionCardImg name={"Ксварт"} targetThis={targetBackgroundNumber == 352} setTarget={setTargetBackgroundNumber} number={352} ><img src={String(getBackCardImg('352'))} /></OptionCardImg>,
            <OptionCardImg name={"Культист"} targetThis={targetBackgroundNumber == 353} setTarget={setTargetBackgroundNumber} number={353} ><img src={String(getBackCardImg('353'))} /></OptionCardImg>,
            <OptionCardImg name={"Куница"} targetThis={targetBackgroundNumber == 354} setTarget={setTargetBackgroundNumber} number={354} ><img src={String(getBackCardImg('354'))} /></OptionCardImg>,
            <OptionCardImg name={"Куо-тоа кнут"} targetThis={targetBackgroundNumber == 355} setTarget={setTargetBackgroundNumber} number={355} ><img src={String(getBackCardImg('355'))} /></OptionCardImg>,
            <OptionCardImg name={"Куо-тоа надзиратель"} targetThis={targetBackgroundNumber == 356} setTarget={setTargetBackgroundNumber} number={356} ><img src={String(getBackCardImg('356'))} /></OptionCardImg>,
            <OptionCardImg name={"Куо-тоа"} targetThis={targetBackgroundNumber == 357} setTarget={setTargetBackgroundNumber} number={357} ><img src={String(getBackCardImg('357'))} /></OptionCardImg>,
            <OptionCardImg name={"Куролиск"} targetThis={targetBackgroundNumber == 358} setTarget={setTargetBackgroundNumber} number={358} ><img src={String(getBackCardImg('358'))} /></OptionCardImg>,
            <OptionCardImg name={"Ламия"} targetThis={targetBackgroundNumber == 359} setTarget={setTargetBackgroundNumber} number={359} ><img src={String(getBackCardImg('359'))} /></OptionCardImg>,
            <OptionCardImg name={"Лев"} targetThis={targetBackgroundNumber == 360} setTarget={setTargetBackgroundNumber} number={360} ><img src={String(getBackCardImg('360'))} /></OptionCardImg>,
            <OptionCardImg name={"Левиафан"} targetThis={targetBackgroundNumber == 361} setTarget={setTargetBackgroundNumber} number={361} ><img src={String(getBackCardImg('361'))} /></OptionCardImg>,
            <OptionCardImg name={"Ледяной великан"} targetThis={targetBackgroundNumber == 362} setTarget={setTargetBackgroundNumber} number={362} ><img src={String(getBackCardImg('362'))} /></OptionCardImg>,
            <OptionCardImg name={"Ледяной дьявол"} targetThis={targetBackgroundNumber == 363} setTarget={setTargetBackgroundNumber} number={363} ><img src={String(getBackCardImg('363'))} /></OptionCardImg>,
            <OptionCardImg name={"Ледяной мифит"} targetThis={targetBackgroundNumber == 364} setTarget={setTargetBackgroundNumber} number={364} ><img src={String(getBackCardImg('364'))} /></OptionCardImg>,
            <OptionCardImg name={"Лекротта"} targetThis={targetBackgroundNumber == 365} setTarget={setTargetBackgroundNumber} number={365} ><img src={String(getBackCardImg('365'))} /></OptionCardImg>,
            <OptionCardImg name={"Лемур"} targetThis={targetBackgroundNumber == 366} setTarget={setTargetBackgroundNumber} number={366} ><img src={String(getBackCardImg('366'))} /></OptionCardImg>,
            <OptionCardImg name={"Лесная вайда"} targetThis={targetBackgroundNumber == 367} setTarget={setTargetBackgroundNumber} number={367} ><img src={String(getBackCardImg('367'))} /></OptionCardImg>,
            <OptionCardImg name={"Летающая змея"} targetThis={targetBackgroundNumber == 368} setTarget={setTargetBackgroundNumber} number={368} ><img src={String(getBackCardImg('368'))} /></OptionCardImg>,
            <OptionCardImg name={"Летающий меч"} targetThis={targetBackgroundNumber == 369} setTarget={setTargetBackgroundNumber} number={369} ><img src={String(getBackCardImg('369'))} /></OptionCardImg>,
            <OptionCardImg name={"Летний эладрин"} targetThis={targetBackgroundNumber == 370} setTarget={setTargetBackgroundNumber} number={370} ><img src={String(getBackCardImg('370'))} /></OptionCardImg>,
            <OptionCardImg name={"Летучая мышь"} targetThis={targetBackgroundNumber == 371} setTarget={setTargetBackgroundNumber} number={371} ><img src={String(getBackCardImg('371'))} /></OptionCardImg>,
            <OptionCardImg name={"Лиловый гриб"} targetThis={targetBackgroundNumber == 372} setTarget={setTargetBackgroundNumber} number={372} ><img src={String(getBackCardImg('372'))} /></OptionCardImg>,
            <OptionCardImg name={"Лиловый червь"} targetThis={targetBackgroundNumber == 373} setTarget={setTargetBackgroundNumber} number={373} ><img src={String(getBackCardImg('373'))} /></OptionCardImg>,
            <OptionCardImg name={"Лич свежеватель разума"} targetThis={targetBackgroundNumber == 374} setTarget={setTargetBackgroundNumber} number={374} ><img src={String(getBackCardImg('374'))} /></OptionCardImg>,
            <OptionCardImg name={"Лич"} targetThis={targetBackgroundNumber == 375} setTarget={setTargetBackgroundNumber} number={375} ><img src={String(getBackCardImg('375'))} /></OptionCardImg>,
            <OptionCardImg name={"Личиночный маг звёздных порождений"} targetThis={targetBackgroundNumber == 376} setTarget={setTargetBackgroundNumber} number={376} ><img src={String(getBackCardImg('376'))} /></OptionCardImg>,
            <OptionCardImg name={"Ловчий"} targetThis={targetBackgroundNumber == 377} setTarget={setTargetBackgroundNumber} number={377} ><img src={String(getBackCardImg('377'))} /></OptionCardImg>,
            <OptionCardImg name={"Лорд мумия"} targetThis={targetBackgroundNumber == 378} setTarget={setTargetBackgroundNumber} number={378} ><img src={String(getBackCardImg('378'))} /></OptionCardImg>,
            <OptionCardImg name={"Лорд черепов"} targetThis={targetBackgroundNumber == 379} setTarget={setTargetBackgroundNumber} number={379} ><img src={String(getBackCardImg('379'))} /></OptionCardImg>,
            <OptionCardImg name={"Лось"} targetThis={targetBackgroundNumber == 380} setTarget={setTargetBackgroundNumber} number={380} ><img src={String(getBackCardImg('380'))} /></OptionCardImg>,
            <OptionCardImg name={"Лучник"} targetThis={targetBackgroundNumber == 381} setTarget={setTargetBackgroundNumber} number={381} ><img src={String(getBackCardImg('381'))} /></OptionCardImg>,
            <OptionCardImg name={"Людоящер шаман"} targetThis={targetBackgroundNumber == 382} setTarget={setTargetBackgroundNumber} number={382} ><img src={String(getBackCardImg('382'))} /></OptionCardImg>,
            <OptionCardImg name={"Людоящер"} targetThis={targetBackgroundNumber == 383} setTarget={setTargetBackgroundNumber} number={383} ><img src={String(getBackCardImg('383'))} /></OptionCardImg>,
            <OptionCardImg name={"Лютый волк"} targetThis={targetBackgroundNumber == 384} setTarget={setTargetBackgroundNumber} number={384} ><img src={String(getBackCardImg('384'))} /></OptionCardImg>,
            <OptionCardImg name={"Лютый тролль"} targetThis={targetBackgroundNumber == 385} setTarget={setTargetBackgroundNumber} number={385} ><img src={String(getBackCardImg('385'))} /></OptionCardImg>,
            <OptionCardImg name={"Лягемот"} targetThis={targetBackgroundNumber == 386} setTarget={setTargetBackgroundNumber} number={386} ><img src={String(getBackCardImg('386'))} /></OptionCardImg>,
            <OptionCardImg name={"Лягушка"} targetThis={targetBackgroundNumber == 387} setTarget={setTargetBackgroundNumber} number={387} ><img src={String(getBackCardImg('387'))} /></OptionCardImg>,
            <OptionCardImg name={"Маг дроу"} targetThis={targetBackgroundNumber == 388} setTarget={setTargetBackgroundNumber} number={388} ><img src={String(getBackCardImg('388'))} /></OptionCardImg>,
            <OptionCardImg name={"Маг"} targetThis={targetBackgroundNumber == 389} setTarget={setTargetBackgroundNumber} number={389} ><img src={String(getBackCardImg('389'))} /></OptionCardImg>,
            <OptionCardImg name={"Магмин"} targetThis={targetBackgroundNumber == 390} setTarget={setTargetBackgroundNumber} number={390} ><img src={String(getBackCardImg('390'))} /></OptionCardImg>,
            <OptionCardImg name={"Магмовый мефит"} targetThis={targetBackgroundNumber == 391} setTarget={setTargetBackgroundNumber} number={391} ><img src={String(getBackCardImg('391'))} /></OptionCardImg>,
            <OptionCardImg name={"Мамонт"} targetThis={targetBackgroundNumber == 392} setTarget={setTargetBackgroundNumber} number={392} ><img src={String(getBackCardImg('392'))} /></OptionCardImg>,
            <OptionCardImg name={"Мантикора"} targetThis={targetBackgroundNumber == 393} setTarget={setTargetBackgroundNumber} number={393} ><img src={String(getBackCardImg('393'))} /></OptionCardImg>,
            <OptionCardImg name={"Марид"} targetThis={targetBackgroundNumber == 394} setTarget={setTargetBackgroundNumber} number={394} ><img src={String(getBackCardImg('394'))} /></OptionCardImg>,
            <OptionCardImg name={"Марилит"} targetThis={targetBackgroundNumber == 395} setTarget={setTargetBackgroundNumber} number={395} ><img src={String(getBackCardImg('395'))} /></OptionCardImg>,
            <OptionCardImg name={"Марут"} targetThis={targetBackgroundNumber == 396} setTarget={setTargetBackgroundNumber} number={396} ><img src={String(getBackCardImg('396'))} /></OptionCardImg>,
            <OptionCardImg name={"Мастер вор"} targetThis={targetBackgroundNumber == 397} setTarget={setTargetBackgroundNumber} number={397} ><img src={String(getBackCardImg('397'))} /></OptionCardImg>,
            <OptionCardImg name={"Мастиф"} targetThis={targetBackgroundNumber == 398} setTarget={setTargetBackgroundNumber} number={398} ><img src={String(getBackCardImg('398'))} /></OptionCardImg>,
            <OptionCardImg name={"Маурежи"} targetThis={targetBackgroundNumber == 399} setTarget={setTargetBackgroundNumber} number={399} ><img src={String(getBackCardImg('399'))} /></OptionCardImg>,
            <OptionCardImg name={"Медвежатник"} targetThis={targetBackgroundNumber == 400} setTarget={setTargetBackgroundNumber} number={400} ><img src={String(getBackCardImg('400'))} /></OptionCardImg>,
            <OptionCardImg name={"Медуза"} targetThis={targetBackgroundNumber == 401} setTarget={setTargetBackgroundNumber} number={401} ><img src={String(getBackCardImg('401'))} /></OptionCardImg>,
            <OptionCardImg name={"Меззолот"} targetThis={targetBackgroundNumber == 402} setTarget={setTargetBackgroundNumber} number={402} ><img src={String(getBackCardImg('402'))} /></OptionCardImg>,
            <OptionCardImg name={"Мерзость"} targetThis={targetBackgroundNumber == 403} setTarget={setTargetBackgroundNumber} number={403} ><img src={String(getBackCardImg('403'))} /></OptionCardImg>,
            <OptionCardImg name={"Меррегон"} targetThis={targetBackgroundNumber == 404} setTarget={setTargetBackgroundNumber} number={404} ><img src={String(getBackCardImg('404'))} /></OptionCardImg>,
            <OptionCardImg name={"Мерренолот"} targetThis={targetBackgroundNumber == 405} setTarget={setTargetBackgroundNumber} number={405} ><img src={String(getBackCardImg('405'))} /></OptionCardImg>,
            <OptionCardImg name={"Мерфолк"} targetThis={targetBackgroundNumber == 406} setTarget={setTargetBackgroundNumber} number={406} ><img src={String(getBackCardImg('406'))} /></OptionCardImg>,
            <OptionCardImg name={"Мерцающий пес"} targetThis={targetBackgroundNumber == 407} setTarget={setTargetBackgroundNumber} number={407} ><img src={String(getBackCardImg('407'))} /></OptionCardImg>,
            <OptionCardImg name={"Мизел"} targetThis={targetBackgroundNumber == 408} setTarget={setTargetBackgroundNumber} number={408} ><img src={String(getBackCardImg('408'))} /></OptionCardImg>,
            <OptionCardImg name={"Мимик"} targetThis={targetBackgroundNumber == 409} setTarget={setTargetBackgroundNumber} number={409} ><img src={String(getBackCardImg('409'))} /></OptionCardImg>,
            <OptionCardImg name={"Минлок"} targetThis={targetBackgroundNumber == 410} setTarget={setTargetBackgroundNumber} number={410} ><img src={String(getBackCardImg('410'))} /></OptionCardImg>,
            <OptionCardImg name={"Минотавр"} targetThis={targetBackgroundNumber == 411} setTarget={setTargetBackgroundNumber} number={411} ><img src={String(getBackCardImg('411'))} /></OptionCardImg>,
            <OptionCardImg name={"Могучий слуга Леук-о"} targetThis={targetBackgroundNumber == 412} setTarget={setTargetBackgroundNumber} number={412} ><img src={String(getBackCardImg('412'))} /></OptionCardImg>,
            <OptionCardImg name={"Молидей"} targetThis={targetBackgroundNumber == 413} setTarget={setTargetBackgroundNumber} number={413} ><img src={String(getBackCardImg('413'))} /></OptionCardImg>,
            <OptionCardImg name={"Молодой белый дракон"} targetThis={targetBackgroundNumber == 414} setTarget={setTargetBackgroundNumber} number={414} ><img src={String(getBackCardImg('414'))} /></OptionCardImg>,
            <OptionCardImg name={"Молодой бронзовый дракон"} targetThis={targetBackgroundNumber == 415} setTarget={setTargetBackgroundNumber} number={415} ><img src={String(getBackCardImg('415'))} /></OptionCardImg>,
            <OptionCardImg name={"Молодой зелёный дракон"} targetThis={targetBackgroundNumber == 416} setTarget={setTargetBackgroundNumber} number={416} ><img src={String(getBackCardImg('416'))} /></OptionCardImg>,
            <OptionCardImg name={"Молодой золотой дракон"} targetThis={targetBackgroundNumber == 417} setTarget={setTargetBackgroundNumber} number={417} ><img src={String(getBackCardImg('417'))} /></OptionCardImg>,
            <OptionCardImg name={"Молодой красный дракон"} targetThis={targetBackgroundNumber == 418} setTarget={setTargetBackgroundNumber} number={418} ><img src={String(getBackCardImg('418'))} /></OptionCardImg>,
            <OptionCardImg name={"Молодой красный теневой дракон"} targetThis={targetBackgroundNumber == 419} setTarget={setTargetBackgroundNumber} number={419} ><img src={String(getBackCardImg('419'))} /></OptionCardImg>,
            <OptionCardImg name={"Молодой крутик"} targetThis={targetBackgroundNumber == 420} setTarget={setTargetBackgroundNumber} number={420} ><img src={String(getBackCardImg('420'))} /></OptionCardImg>,
            <OptionCardImg name={"Молодой латунный дракон"} targetThis={targetBackgroundNumber == 421} setTarget={setTargetBackgroundNumber} number={421} ><img src={String(getBackCardImg('421'))} /></OptionCardImg>,
            <OptionCardImg name={"Молодой медный дракон"} targetThis={targetBackgroundNumber == 422} setTarget={setTargetBackgroundNumber} number={422} ><img src={String(getBackCardImg('422'))} /></OptionCardImg>,
            <OptionCardImg name={"Молодой ремораз"} targetThis={targetBackgroundNumber == 423} setTarget={setTargetBackgroundNumber} number={423} ><img src={String(getBackCardImg('423'))} /></OptionCardImg>,
            <OptionCardImg name={"Молодой серебряный дракон"} targetThis={targetBackgroundNumber == 424} setTarget={setTargetBackgroundNumber} number={424} ><img src={String(getBackCardImg('424'))} /></OptionCardImg>,
            <OptionCardImg name={"Молодой синий дракон"} targetThis={targetBackgroundNumber == 425} setTarget={setTargetBackgroundNumber} number={425} ><img src={String(getBackCardImg('425'))} /></OptionCardImg>,
            <OptionCardImg name={"Молодой чёрный дракон"} targetThis={targetBackgroundNumber == 426} setTarget={setTargetBackgroundNumber} number={426} ><img src={String(getBackCardImg('426'))} /></OptionCardImg>,
            <OptionCardImg name={"Монодрон"} targetThis={targetBackgroundNumber == 427} setTarget={setTargetBackgroundNumber} number={427} ><img src={String(getBackCardImg('427'))} /></OptionCardImg>,
            <OptionCardImg name={"Моркот"} targetThis={targetBackgroundNumber == 428} setTarget={setTargetBackgroundNumber} number={428} ><img src={String(getBackCardImg('428'))} /></OptionCardImg>,
            <OptionCardImg name={"Морозная саламандра"} targetThis={targetBackgroundNumber == 429} setTarget={setTargetBackgroundNumber} number={429} ><img src={String(getBackCardImg('429'))} /></OptionCardImg>,
            <OptionCardImg name={"Морская карга"} targetThis={targetBackgroundNumber == 430} setTarget={setTargetBackgroundNumber} number={430} ><img src={String(getBackCardImg('430'))} /></OptionCardImg>,
            <OptionCardImg name={"Морское отродье"} targetThis={targetBackgroundNumber == 431} setTarget={setTargetBackgroundNumber} number={431} ><img src={String(getBackCardImg('431'))} /></OptionCardImg>,
            <OptionCardImg name={"Морской конек"} targetThis={targetBackgroundNumber == 432} setTarget={setTargetBackgroundNumber} number={432} ><img src={String(getBackCardImg('432'))} /></OptionCardImg>,
            <OptionCardImg name={"Мул"} targetThis={targetBackgroundNumber == 433} setTarget={setTargetBackgroundNumber} number={433} ><img src={String(getBackCardImg('433'))} /></OptionCardImg>,
            <OptionCardImg name={"Мумия"} targetThis={targetBackgroundNumber == 434} setTarget={setTargetBackgroundNumber} number={434} ><img src={String(getBackCardImg('434'))} /></OptionCardImg>,
            <OptionCardImg name={"Мэйн"} targetThis={targetBackgroundNumber == 435} setTarget={setTargetBackgroundNumber} number={435} ><img src={String(getBackCardImg('435'))} /></OptionCardImg>,
            <OptionCardImg name={"Мясной голем"} targetThis={targetBackgroundNumber == 436} setTarget={setTargetBackgroundNumber} number={436} ><img src={String(getBackCardImg('436'))} /></OptionCardImg>,
            <OptionCardImg name={"Наёмный убийца"} targetThis={targetBackgroundNumber == 437} setTarget={setTargetBackgroundNumber} number={437} ><img src={String(getBackCardImg('437'))} /></OptionCardImg>,
            <OptionCardImg name={"Набассу"} targetThis={targetBackgroundNumber == 438} setTarget={setTargetBackgroundNumber} number={438} ><img src={String(getBackCardImg('438'))} /></OptionCardImg>,
            <OptionCardImg name={"Наблюдатель"} targetThis={targetBackgroundNumber == 439} setTarget={setTargetBackgroundNumber} number={439} ><img src={String(getBackCardImg('439'))} /></OptionCardImg>,
            <OptionCardImg name={"Нагпа"} targetThis={targetBackgroundNumber == 440} setTarget={setTargetBackgroundNumber} number={440} ><img src={String(getBackCardImg('440'))} /></OptionCardImg>,
            <OptionCardImg name={"Нальфешни"} targetThis={targetBackgroundNumber == 441} setTarget={setTargetBackgroundNumber} number={441} ><img src={String(getBackCardImg('441'))} /></OptionCardImg>,
            <OptionCardImg name={"Нарзугон"} targetThis={targetBackgroundNumber == 442} setTarget={setTargetBackgroundNumber} number={442} ><img src={String(getBackCardImg('442'))} /></OptionCardImg>,
            <OptionCardImg name={"Невидимый охотник"} targetThis={targetBackgroundNumber == 443} setTarget={setTargetBackgroundNumber} number={443} ><img src={String(getBackCardImg('443'))} /></OptionCardImg>,
            <OptionCardImg name={"Некромант"} targetThis={targetBackgroundNumber == 444} setTarget={setTargetBackgroundNumber} number={444} ><img src={String(getBackCardImg('444'))} /></OptionCardImg>,
            <OptionCardImg name={"Неоги личинка"} targetThis={targetBackgroundNumber == 445} setTarget={setTargetBackgroundNumber} number={445} ><img src={String(getBackCardImg('445'))} /></OptionCardImg>,
            <OptionCardImg name={"Неоги повелитель"} targetThis={targetBackgroundNumber == 446} setTarget={setTargetBackgroundNumber} number={446} ><img src={String(getBackCardImg('446'))} /></OptionCardImg>,
            <OptionCardImg name={"Неотелид"} targetThis={targetBackgroundNumber == 447} setTarget={setTargetBackgroundNumber} number={447} ><img src={String(getBackCardImg('447'))} /></OptionCardImg>,
            <OptionCardImg name={"Никалот"} targetThis={targetBackgroundNumber == 448} setTarget={setTargetBackgroundNumber} number={448} ><img src={String(getBackCardImg('448'))} /></OptionCardImg>,
            <OptionCardImg name={"Нилбог"} targetThis={targetBackgroundNumber == 449} setTarget={setTargetBackgroundNumber} number={449} ><img src={String(getBackCardImg('449'))} /></OptionCardImg>,
            <OptionCardImg name={"Носорог"} targetThis={targetBackgroundNumber == 450} setTarget={setTargetBackgroundNumber} number={450} ><img src={String(getBackCardImg('450'))} /></OptionCardImg>,
            <OptionCardImg name={"Нотик"} targetThis={targetBackgroundNumber == 451} setTarget={setTargetBackgroundNumber} number={451} ><img src={String(getBackCardImg('451'))} /></OptionCardImg>,
            <OptionCardImg name={"Ночная карга"} targetThis={targetBackgroundNumber == 452} setTarget={setTargetBackgroundNumber} number={452} ><img src={String(getBackCardImg('452'))} /></OptionCardImg>,
            <OptionCardImg name={"Ночной ходок"} targetThis={targetBackgroundNumber == 453} setTarget={setTargetBackgroundNumber} number={453} ><img src={String(getBackCardImg('453'))} /></OptionCardImg>,
            <OptionCardImg name={"Облачный великан"} targetThis={targetBackgroundNumber == 454} setTarget={setTargetBackgroundNumber} number={454} ><img src={String(getBackCardImg('454'))} /></OptionCardImg>,
            <OptionCardImg name={"Обыватель"} targetThis={targetBackgroundNumber == 455} setTarget={setTargetBackgroundNumber} number={455} ><img src={String(getBackCardImg('455'))} /></OptionCardImg>,
            <OptionCardImg name={"Огненная змея"} targetThis={targetBackgroundNumber == 456} setTarget={setTargetBackgroundNumber} number={456} ><img src={String(getBackCardImg('456'))} /></OptionCardImg>,
            <OptionCardImg name={"Огненный великан"} targetThis={targetBackgroundNumber == 457} setTarget={setTargetBackgroundNumber} number={457} ><img src={String(getBackCardImg('457'))} /></OptionCardImg>,
            <OptionCardImg name={"Огненный тритон воин"} targetThis={targetBackgroundNumber == 458} setTarget={setTargetBackgroundNumber} number={458} ><img src={String(getBackCardImg('458'))} /></OptionCardImg>,
            <OptionCardImg name={"Огненный тритон колдун"} targetThis={targetBackgroundNumber == 459} setTarget={setTargetBackgroundNumber} number={459} ><img src={String(getBackCardImg('459'))} /></OptionCardImg>,
            <OptionCardImg name={"Огненный элементаль"} targetThis={targetBackgroundNumber == 460} setTarget={setTargetBackgroundNumber} number={460} ><img src={String(getBackCardImg('460'))} /></OptionCardImg>,
            <OptionCardImg name={"Огненный элементальный мирмидон"} targetThis={targetBackgroundNumber == 461} setTarget={setTargetBackgroundNumber} number={461} ><img src={String(getBackCardImg('461'))} /></OptionCardImg>,
            <OptionCardImg name={"Огр зомби"} targetThis={targetBackgroundNumber == 462} setTarget={setTargetBackgroundNumber} number={462} ><img src={String(getBackCardImg('462'))} /></OptionCardImg>,
            <OptionCardImg name={"Огр таран"} targetThis={targetBackgroundNumber == 463} setTarget={setTargetBackgroundNumber} number={463} ><img src={String(getBackCardImg('463'))} /></OptionCardImg>,
            <OptionCardImg name={"Огр"} targetThis={targetBackgroundNumber == 464} setTarget={setTargetBackgroundNumber} number={464} ><img src={String(getBackCardImg('464'))} /></OptionCardImg>,
            <OptionCardImg name={"Оградитель"} targetThis={targetBackgroundNumber == 465} setTarget={setTargetBackgroundNumber} number={465} ><img src={String(getBackCardImg('465'))} /></OptionCardImg>,
            <OptionCardImg name={"Огрр паланткин"} targetThis={targetBackgroundNumber == 466} setTarget={setTargetBackgroundNumber} number={466} ><img src={String(getBackCardImg('466'))} /></OptionCardImg>,
            <OptionCardImg name={"Одиночество"} targetThis={targetBackgroundNumber == 467} setTarget={setTargetBackgroundNumber} number={467} ><img src={String(getBackCardImg('467'))} /></OptionCardImg>,
            <OptionCardImg name={"Оживленный доспех"} targetThis={targetBackgroundNumber == 468} setTarget={setTargetBackgroundNumber} number={468} ><img src={String(getBackCardImg('468'))} /></OptionCardImg>,
            <OptionCardImg name={"Ойнолот"} targetThis={targetBackgroundNumber == 469} setTarget={setTargetBackgroundNumber} number={469} ><img src={String(getBackCardImg('469'))} /></OptionCardImg>,
            <OptionCardImg name={"Окаменевший"} targetThis={targetBackgroundNumber == 470} setTarget={setTargetBackgroundNumber} number={470} ><img src={String(getBackCardImg('470'))} /></OptionCardImg>,
            <OptionCardImg name={"Олень"} targetThis={targetBackgroundNumber == 471} setTarget={setTargetBackgroundNumber} number={471} ><img src={String(getBackCardImg('471'))} /></OptionCardImg>,
            <OptionCardImg name={"Они"} targetThis={targetBackgroundNumber == 472} setTarget={setTargetBackgroundNumber} number={472} ><img src={String(getBackCardImg('472'))} /></OptionCardImg>,
            <OptionCardImg name={"Орг коготь лунтик"} targetThis={targetBackgroundNumber == 473} setTarget={setTargetBackgroundNumber} number={473} ><img src={String(getBackCardImg('473'))} /></OptionCardImg>,
            <OptionCardImg name={"Орг око груумша"} targetThis={targetBackgroundNumber == 474} setTarget={setTargetBackgroundNumber} number={474} ><img src={String(getBackCardImg('474'))} /></OptionCardImg>,
            <OptionCardImg name={"Орел"} targetThis={targetBackgroundNumber == 475} setTarget={setTargetBackgroundNumber} number={475} ><img src={String(getBackCardImg('475'))} /></OptionCardImg>,
            <OptionCardImg name={"Орк вскормленный юртруса"} targetThis={targetBackgroundNumber == 476} setTarget={setTargetBackgroundNumber} number={476} ><img src={String(getBackCardImg('476'))} /></OptionCardImg>,
            <OptionCardImg name={"Орк клинок Илневала"} targetThis={targetBackgroundNumber == 477} setTarget={setTargetBackgroundNumber} number={477} ><img src={String(getBackCardImg('477'))} /></OptionCardImg>,
            <OptionCardImg name={"Орк красный клык Шаргааса"} targetThis={targetBackgroundNumber == 478} setTarget={setTargetBackgroundNumber} number={478} ><img src={String(getBackCardImg('478'))} /></OptionCardImg>,
            <OptionCardImg name={"Орк рука юртруса"} targetThis={targetBackgroundNumber == 479} setTarget={setTargetBackgroundNumber} number={479} ><img src={String(getBackCardImg('479'))} /></OptionCardImg>,
            <OptionCardImg name={"Орк цепной громила"} targetThis={targetBackgroundNumber == 480} setTarget={setTargetBackgroundNumber} number={480} ><img src={String(getBackCardImg('480'))} /></OptionCardImg>,
            <OptionCardImg name={"Орк"} targetThis={targetBackgroundNumber == 481} setTarget={setTargetBackgroundNumber} number={481} ><img src={String(getBackCardImg('481'))} /></OptionCardImg>,
            <OptionCardImg name={"Орог"} targetThis={targetBackgroundNumber == 482} setTarget={setTargetBackgroundNumber} number={482} ><img src={String(getBackCardImg('482'))} /></OptionCardImg>,
            <OptionCardImg name={"Ортон"} targetThis={targetBackgroundNumber == 483} setTarget={setTargetBackgroundNumber} number={483} ><img src={String(getBackCardImg('483'))} /></OptionCardImg>,
            <OptionCardImg name={"Осенний эладрин"} targetThis={targetBackgroundNumber == 484} setTarget={setTargetBackgroundNumber} number={484} ><img src={String(getBackCardImg('484'))} /></OptionCardImg>,
            <OptionCardImg name={"Осьминог"} targetThis={targetBackgroundNumber == 485} setTarget={setTargetBackgroundNumber} number={485} ><img src={String(getBackCardImg('485'))} /></OptionCardImg>,
            <OptionCardImg name={"Отвратительный йети"} targetThis={targetBackgroundNumber == 486} setTarget={setTargetBackgroundNumber} number={486} ><img src={String(getBackCardImg('486'))} /></OptionCardImg>,
            <OptionCardImg name={"Отидж"} targetThis={targetBackgroundNumber == 487} setTarget={setTargetBackgroundNumber} number={487} ><img src={String(getBackCardImg('487'))} /></OptionCardImg>,
            <OptionCardImg name={"Отпрыск глубин"} targetThis={targetBackgroundNumber == 488} setTarget={setTargetBackgroundNumber} number={488} ><img src={String(getBackCardImg('488'))} /></OptionCardImg>,
            <OptionCardImg name={"Отродье юань-ти"} targetThis={targetBackgroundNumber == 489} setTarget={setTargetBackgroundNumber} number={489} ><img src={String(getBackCardImg('489'))} /></OptionCardImg>,
            <OptionCardImg name={"Охотничья акула"} targetThis={targetBackgroundNumber == 490} setTarget={setTargetBackgroundNumber} number={490} ><img src={String(getBackCardImg('490'))} /></OptionCardImg>,
            <OptionCardImg name={"Охранная нага"} targetThis={targetBackgroundNumber == 491} setTarget={setTargetBackgroundNumber} number={491} ><img src={String(getBackCardImg('491'))} /></OptionCardImg>,
            <OptionCardImg name={"Очарователь"} targetThis={targetBackgroundNumber == 492} setTarget={setTargetBackgroundNumber} number={492} ><img src={String(getBackCardImg('492'))} /></OptionCardImg>,
            <OptionCardImg name={"Пантера"} targetThis={targetBackgroundNumber == 493} setTarget={setTargetBackgroundNumber} number={493} ><img src={String(getBackCardImg('493'))} /></OptionCardImg>,
            <OptionCardImg name={"Панцерница"} targetThis={targetBackgroundNumber == 494} setTarget={setTargetBackgroundNumber} number={494} ><img src={String(getBackCardImg('494'))} /></OptionCardImg>,
            <OptionCardImg name={"Паровой мефит"} targetThis={targetBackgroundNumber == 495} setTarget={setTargetBackgroundNumber} number={495} ><img src={String(getBackCardImg('495'))} /></OptionCardImg>,
            <OptionCardImg name={"Пасть Гролантора"} targetThis={targetBackgroundNumber == 496} setTarget={setTargetBackgroundNumber} number={496} ><img src={String(getBackCardImg('496'))} /></OptionCardImg>,
            <OptionCardImg name={"Паук"} targetThis={targetBackgroundNumber == 497} setTarget={setTargetBackgroundNumber} number={497} ><img src={String(getBackCardImg('497'))} /></OptionCardImg>,
            <OptionCardImg name={"Пегас"} targetThis={targetBackgroundNumber == 498} setTarget={setTargetBackgroundNumber} number={498} ><img src={String(getBackCardImg('498'))} /></OptionCardImg>,
            <OptionCardImg name={"Пентадрон"} targetThis={targetBackgroundNumber == 499} setTarget={setTargetBackgroundNumber} number={499} ><img src={String(getBackCardImg('499'))} /></OptionCardImg>,
            <OptionCardImg name={"Перитон"} targetThis={targetBackgroundNumber == 500} setTarget={setTargetBackgroundNumber} number={500} ><img src={String(getBackCardImg('500'))} /></OptionCardImg>,
            <OptionCardImg name={"Пес смерти"} targetThis={targetBackgroundNumber == 501} setTarget={setTargetBackgroundNumber} number={501} ><img src={String(getBackCardImg('501'))} /></OptionCardImg>,
            <OptionCardImg name={"Пещерный медведь"} targetThis={targetBackgroundNumber == 502} setTarget={setTargetBackgroundNumber} number={502} ><img src={String(getBackCardImg('502'))} /></OptionCardImg>,
            <OptionCardImg name={"Пещерный удильщик"} targetThis={targetBackgroundNumber == 503} setTarget={setTargetBackgroundNumber} number={503} ><img src={String(getBackCardImg('503'))} /></OptionCardImg>,
            <OptionCardImg name={"Пикси"} targetThis={targetBackgroundNumber == 504} setTarget={setTargetBackgroundNumber} number={504} ><img src={String(getBackCardImg('504'))} /></OptionCardImg>,
            <OptionCardImg name={"Планетар"} targetThis={targetBackgroundNumber == 505} setTarget={setTargetBackgroundNumber} number={505} ><img src={String(getBackCardImg('505'))} /></OptionCardImg>,
            <OptionCardImg name={"Плащевик"} targetThis={targetBackgroundNumber == 506} setTarget={setTargetBackgroundNumber} number={506} ><img src={String(getBackCardImg('506'))} /></OptionCardImg>,
            <OptionCardImg name={"Плезиозавр"} targetThis={targetBackgroundNumber == 507} setTarget={setTargetBackgroundNumber} number={507} ><img src={String(getBackCardImg('507'))} /></OptionCardImg>,
            <OptionCardImg name={"Пожиратель интеллекта"} targetThis={targetBackgroundNumber == 508} setTarget={setTargetBackgroundNumber} number={508} ><img src={String(getBackCardImg('508'))} /></OptionCardImg>,
            <OptionCardImg name={"Пожиратель"} targetThis={targetBackgroundNumber == 509} setTarget={setTargetBackgroundNumber} number={509} ><img src={String(getBackCardImg('509'))} /></OptionCardImg>,
            <OptionCardImg name={"Ползающая насыпь"} targetThis={targetBackgroundNumber == 510} setTarget={setTargetBackgroundNumber} number={510} ><img src={String(getBackCardImg('510'))} /></OptionCardImg>,
            <OptionCardImg name={"Ползающая рука"} targetThis={targetBackgroundNumber == 511} setTarget={setTargetBackgroundNumber} number={511} ><img src={String(getBackCardImg('511'))} /></OptionCardImg>,
            <OptionCardImg name={"Ползающий падальщик"} targetThis={targetBackgroundNumber == 512} setTarget={setTargetBackgroundNumber} number={512} ><img src={String(getBackCardImg('512'))} /></OptionCardImg>,
            <OptionCardImg name={"Полководец призраков меча"} targetThis={targetBackgroundNumber == 513} setTarget={setTargetBackgroundNumber} number={513} ><img src={String(getBackCardImg('513'))} /></OptionCardImg>,
            <OptionCardImg name={"Полтергейст"} targetThis={targetBackgroundNumber == 514} setTarget={setTargetBackgroundNumber} number={514} ><img src={String(getBackCardImg('514'))} /></OptionCardImg>,
            <OptionCardImg name={"Полуогр"} targetThis={targetBackgroundNumber == 515} setTarget={setTargetBackgroundNumber} number={515} ><img src={String(getBackCardImg('515'))} /></OptionCardImg>,
            <OptionCardImg name={"Полярный волк"} targetThis={targetBackgroundNumber == 516} setTarget={setTargetBackgroundNumber} number={516} ><img src={String(getBackCardImg('516'))} /></OptionCardImg>,
            <OptionCardImg name={"Пони"} targetThis={targetBackgroundNumber == 517} setTarget={setTargetBackgroundNumber} number={517} ><img src={String(getBackCardImg('517'))} /></OptionCardImg>,
            <OptionCardImg name={"Порождение вампира"} targetThis={targetBackgroundNumber == 518} setTarget={setTargetBackgroundNumber} number={518} ><img src={String(getBackCardImg('518'))} /></OptionCardImg>,
            <OptionCardImg name={"Порождение кьюсса"} targetThis={targetBackgroundNumber == 519} setTarget={setTargetBackgroundNumber} number={519} ><img src={String(getBackCardImg('519'))} /></OptionCardImg>,
            <OptionCardImg name={"Порождение облекса"} targetThis={targetBackgroundNumber == 520} setTarget={setTargetBackgroundNumber} number={520} ><img src={String(getBackCardImg('520'))} /></OptionCardImg>,
            <OptionCardImg name={"Поцелуй смерти"} targetThis={targetBackgroundNumber == 521} setTarget={setTargetBackgroundNumber} number={521} ><img src={String(getBackCardImg('521'))} /></OptionCardImg>,
            <OptionCardImg name={"Преобразователь"} targetThis={targetBackgroundNumber == 522} setTarget={setTargetBackgroundNumber} number={522} ><img src={String(getBackCardImg('522'))} /></OptionCardImg>,
            <OptionCardImg name={"Приведение"} targetThis={targetBackgroundNumber == 523} setTarget={setTargetBackgroundNumber} number={523} ><img src={String(getBackCardImg('523'))} /></OptionCardImg>,
            <OptionCardImg name={"Призрак"} targetThis={targetBackgroundNumber == 524} setTarget={setTargetBackgroundNumber} number={524} ><img src={String(getBackCardImg('524'))} /></OptionCardImg>,
            <OptionCardImg name={"Призыватель"} targetThis={targetBackgroundNumber == 525} setTarget={setTargetBackgroundNumber} number={525} ><img src={String(getBackCardImg('525'))} /></OptionCardImg>,
            <OptionCardImg name={"Прислужник"} targetThis={targetBackgroundNumber == 526} setTarget={setTargetBackgroundNumber} number={526} ><img src={String(getBackCardImg('526'))} /></OptionCardImg>,
            <OptionCardImg name={"Пробужденное дерево"} targetThis={targetBackgroundNumber == 527} setTarget={setTargetBackgroundNumber} number={527} ><img src={String(getBackCardImg('527'))} /></OptionCardImg>,
            <OptionCardImg name={"Пробужденный куст"} targetThis={targetBackgroundNumber == 528} setTarget={setTargetBackgroundNumber} number={528} ><img src={String(getBackCardImg('528'))} /></OptionCardImg>,
            <OptionCardImg name={"Провидец звёздных порождений"} targetThis={targetBackgroundNumber == 529} setTarget={setTargetBackgroundNumber} number={529} ><img src={String(getBackCardImg('529'))} /></OptionCardImg>,
            <OptionCardImg name={"Пронзатель"} targetThis={targetBackgroundNumber == 530} setTarget={setTargetBackgroundNumber} number={530} ><img src={String(getBackCardImg('530'))} /></OptionCardImg>,
            <OptionCardImg name={"Прорицатель"} targetThis={targetBackgroundNumber == 531} setTarget={setTargetBackgroundNumber} number={531} ><img src={String(getBackCardImg('531'))} /></OptionCardImg>,
            <OptionCardImg name={"Псевдодракон"} targetThis={targetBackgroundNumber == 532} setTarget={setTargetBackgroundNumber} number={532} ><img src={String(getBackCardImg('532'))} /></OptionCardImg>,
            <OptionCardImg name={"Птеранодон"} targetThis={targetBackgroundNumber == 533} setTarget={setTargetBackgroundNumber} number={533} ><img src={String(getBackCardImg('533'))} /></OptionCardImg>,
            <OptionCardImg name={"Пугало"} targetThis={targetBackgroundNumber == 534} setTarget={setTargetBackgroundNumber} number={534} ><img src={String(getBackCardImg('534'))} /></OptionCardImg>,
            <OptionCardImg name={"Пылающий череп"} targetThis={targetBackgroundNumber == 535} setTarget={setTargetBackgroundNumber} number={535} ><img src={String(getBackCardImg('535'))} /></OptionCardImg>,
            <OptionCardImg name={"Пылевой мефит"} targetThis={targetBackgroundNumber == 536} setTarget={setTargetBackgroundNumber} number={536} ><img src={String(getBackCardImg('536'))} /></OptionCardImg>,
            <OptionCardImg name={"Разбойник"} targetThis={targetBackgroundNumber == 537} setTarget={setTargetBackgroundNumber} number={537} ><img src={String(getBackCardImg('537'))} /></OptionCardImg>,
            <OptionCardImg name={"Разведчик"} targetThis={targetBackgroundNumber == 538} setTarget={setTargetBackgroundNumber} number={538} ><img src={String(getBackCardImg('538'))} /></OptionCardImg>,
            <OptionCardImg name={"Ракшас"} targetThis={targetBackgroundNumber == 539} setTarget={setTargetBackgroundNumber} number={539} ><img src={String(getBackCardImg('539'))} /></OptionCardImg>,
            <OptionCardImg name={"Реверант"} targetThis={targetBackgroundNumber == 540} setTarget={setTargetBackgroundNumber} number={540} ><img src={String(getBackCardImg('540'))} /></OptionCardImg>,
            <OptionCardImg name={"Ревун"} targetThis={targetBackgroundNumber == 541} setTarget={setTargetBackgroundNumber} number={541} ><img src={String(getBackCardImg('541'))} /></OptionCardImg>,
            <OptionCardImg name={"Ремораз"} targetThis={targetBackgroundNumber == 542} setTarget={setTargetBackgroundNumber} number={542} ><img src={String(getBackCardImg('542'))} /></OptionCardImg>,
            <OptionCardImg name={"Ржавник"} targetThis={targetBackgroundNumber == 543} setTarget={setTargetBackgroundNumber} number={543} ><img src={String(getBackCardImg('543'))} /></OptionCardImg>,
            <OptionCardImg name={"Рифовая акула"} targetThis={targetBackgroundNumber == 544} setTarget={setTargetBackgroundNumber} number={544} ><img src={String(getBackCardImg('544'))} /></OptionCardImg>,
            <OptionCardImg name={"Рогатый дьявол"} targetThis={targetBackgroundNumber == 545} setTarget={setTargetBackgroundNumber} number={545} ><img src={String(getBackCardImg('545'))} /></OptionCardImg>,
            <OptionCardImg name={"Рой воронов"} targetThis={targetBackgroundNumber == 546} setTarget={setTargetBackgroundNumber} number={546} ><img src={String(getBackCardImg('546'))} /></OptionCardImg>,
            <OptionCardImg name={"Рой жуков"} targetThis={targetBackgroundNumber == 547} setTarget={setTargetBackgroundNumber} number={547} ><img src={String(getBackCardImg('547'))} /></OptionCardImg>,
            <OptionCardImg name={"Рой крыс"} targetThis={targetBackgroundNumber == 548} setTarget={setTargetBackgroundNumber} number={548} ><img src={String(getBackCardImg('548'))} /></OptionCardImg>,
            <OptionCardImg name={"Рой летучих мышей"} targetThis={targetBackgroundNumber == 549} setTarget={setTargetBackgroundNumber} number={549} ><img src={String(getBackCardImg('549'))} /></OptionCardImg>,
            <OptionCardImg name={"Рой насекомых"} targetThis={targetBackgroundNumber == 550} setTarget={setTargetBackgroundNumber} number={550} ><img src={String(getBackCardImg('550'))} /></OptionCardImg>,
            <OptionCardImg name={"Рой ос"} targetThis={targetBackgroundNumber == 551} setTarget={setTargetBackgroundNumber} number={551} ><img src={String(getBackCardImg('551'))} /></OptionCardImg>,
            <OptionCardImg name={"Рой пауков"} targetThis={targetBackgroundNumber == 552} setTarget={setTargetBackgroundNumber} number={552} ><img src={String(getBackCardImg('552'))} /></OptionCardImg>,
            <OptionCardImg name={"Рой трупных личинок"} targetThis={targetBackgroundNumber == 553} setTarget={setTargetBackgroundNumber} number={553} ><img src={String(getBackCardImg('553'))} /></OptionCardImg>,
            <OptionCardImg name={"Рой ядовитых змей"} targetThis={targetBackgroundNumber == 554} setTarget={setTargetBackgroundNumber} number={554} ><img src={String(getBackCardImg('554'))} /></OptionCardImg>,
            <OptionCardImg name={"Росток миконида"} targetThis={targetBackgroundNumber == 555} setTarget={setTargetBackgroundNumber} number={555} ><img src={String(getBackCardImg('555'))} /></OptionCardImg>,
            <OptionCardImg name={"Роф"} targetThis={targetBackgroundNumber == 556} setTarget={setTargetBackgroundNumber} number={556} ><img src={String(getBackCardImg('556'))} /></OptionCardImg>,
            <OptionCardImg name={"Руттеркин"} targetThis={targetBackgroundNumber == 557} setTarget={setTargetBackgroundNumber} number={557} ><img src={String(getBackCardImg('557'))} /></OptionCardImg>,
            <OptionCardImg name={"Рух"} targetThis={targetBackgroundNumber == 558} setTarget={setTargetBackgroundNumber} number={558} ><img src={String(getBackCardImg('558'))} /></OptionCardImg>,
            <OptionCardImg name={"Рыцарь смерти"} targetThis={targetBackgroundNumber == 559} setTarget={setTargetBackgroundNumber} number={559} ><img src={String(getBackCardImg('559'))} /></OptionCardImg>,
            <OptionCardImg name={"Рыцарь"} targetThis={targetBackgroundNumber == 560} setTarget={setTargetBackgroundNumber} number={560} ><img src={String(getBackCardImg('560'))} /></OptionCardImg>,
            <OptionCardImg name={"Саблезубый тигр"} targetThis={targetBackgroundNumber == 561} setTarget={setTargetBackgroundNumber} number={561} ><img src={String(getBackCardImg('561'))} /></OptionCardImg>,
            <OptionCardImg name={"Саламандра"} targetThis={targetBackgroundNumber == 562} setTarget={setTargetBackgroundNumber} number={562} ><img src={String(getBackCardImg('562'))} /></OptionCardImg>,
            <OptionCardImg name={"Сатир"} targetThis={targetBackgroundNumber == 563} setTarget={setTargetBackgroundNumber} number={563} ><img src={String(getBackCardImg('563'))} /></OptionCardImg>,
            <OptionCardImg name={"Сахуагин"} targetThis={targetBackgroundNumber == 564} setTarget={setTargetBackgroundNumber} number={564} ><img src={String(getBackCardImg('564'))} /></OptionCardImg>,
            <OptionCardImg name={"Свежеватель разума (заклинатель)"} targetThis={targetBackgroundNumber == 565} setTarget={setTargetBackgroundNumber} number={565} ><img src={String(getBackCardImg('565'))} /></OptionCardImg>,
            <OptionCardImg name={"Свежеватель разума"} targetThis={targetBackgroundNumber == 566} setTarget={setTargetBackgroundNumber} number={566} ><img src={String(getBackCardImg('566'))} /></OptionCardImg>,
            <OptionCardImg name={"Свидетель разума"} targetThis={targetBackgroundNumber == 567} setTarget={setTargetBackgroundNumber} number={567} ><img src={String(getBackCardImg('567'))} /></OptionCardImg>,
            <OptionCardImg name={"Священник"} targetThis={targetBackgroundNumber == 568} setTarget={setTargetBackgroundNumber} number={568} ><img src={String(getBackCardImg('568'))} /></OptionCardImg>,
            <OptionCardImg name={"Серая слизь 2"} targetThis={targetBackgroundNumber == 569} setTarget={setTargetBackgroundNumber} number={569} ><img src={String(getBackCardImg('569'))} /></OptionCardImg>,
            <OptionCardImg name={"Серая слизь"} targetThis={targetBackgroundNumber == 570} setTarget={setTargetBackgroundNumber} number={570} ><img src={String(getBackCardImg('570'))} /></OptionCardImg>,
            <OptionCardImg name={"Серый рендер"} targetThis={targetBackgroundNumber == 571} setTarget={setTargetBackgroundNumber} number={571} ><img src={String(getBackCardImg('571'))} /></OptionCardImg>,
            <OptionCardImg name={"Серый слаад"} targetThis={targetBackgroundNumber == 572} setTarget={setTargetBackgroundNumber} number={572} ><img src={String(getBackCardImg('572'))} /></OptionCardImg>,
            <OptionCardImg name={"Сибриекс"} targetThis={targetBackgroundNumber == 573} setTarget={setTargetBackgroundNumber} number={573} ><img src={String(getBackCardImg('573'))} /></OptionCardImg>,
            <OptionCardImg name={"Синий абишай"} targetThis={targetBackgroundNumber == 574} setTarget={setTargetBackgroundNumber} number={574} ><img src={String(getBackCardImg('574'))} /></OptionCardImg>,
            <OptionCardImg name={"Синий слаад"} targetThis={targetBackgroundNumber == 575} setTarget={setTargetBackgroundNumber} number={575} ><img src={String(getBackCardImg('575'))} /></OptionCardImg>,
            <OptionCardImg name={"Скаллк"} targetThis={targetBackgroundNumber == 576} setTarget={setTargetBackgroundNumber} number={576} ><img src={String(getBackCardImg('576'))} /></OptionCardImg>,
            <OptionCardImg name={"Скелет боевого коня"} targetThis={targetBackgroundNumber == 577} setTarget={setTargetBackgroundNumber} number={577} ><img src={String(getBackCardImg('577'))} /></OptionCardImg>,
            <OptionCardImg name={"Скелет минотавра"} targetThis={targetBackgroundNumber == 578} setTarget={setTargetBackgroundNumber} number={578} ><img src={String(getBackCardImg('578'))} /></OptionCardImg>,
            <OptionCardImg name={"Скелет"} targetThis={targetBackgroundNumber == 579} setTarget={setTargetBackgroundNumber} number={579} ><img src={String(getBackCardImg('579'))} /></OptionCardImg>,
            <OptionCardImg name={"Склизский преследователь"} targetThis={targetBackgroundNumber == 580} setTarget={setTargetBackgroundNumber} number={580} ><img src={String(getBackCardImg('580'))} /></OptionCardImg>,
            <OptionCardImg name={"Скорпион"} targetThis={targetBackgroundNumber == 581} setTarget={setTargetBackgroundNumber} number={581} ><img src={String(getBackCardImg('581'))} /></OptionCardImg>,
            <OptionCardImg name={"Слаад головастик"} targetThis={targetBackgroundNumber == 582} setTarget={setTargetBackgroundNumber} number={582} ><img src={String(getBackCardImg('582'))} /></OptionCardImg>,
            <OptionCardImg name={"Слон"} targetThis={targetBackgroundNumber == 583} setTarget={setTargetBackgroundNumber} number={583} ><img src={String(getBackCardImg('583'))} /></OptionCardImg>,
            <OptionCardImg name={"Слуга-гомункул"} targetThis={targetBackgroundNumber == 584} setTarget={setTargetBackgroundNumber} number={584} ><img src={String(getBackCardImg('584'))} /></OptionCardImg>,
            <OptionCardImg name={"Смертельный слаад"} targetThis={targetBackgroundNumber == 585} setTarget={setTargetBackgroundNumber} number={585} ><img src={String(getBackCardImg('585'))} /></OptionCardImg>,
            <OptionCardImg name={"Смотрящий"} targetThis={targetBackgroundNumber == 586} setTarget={setTargetBackgroundNumber} number={586} ><img src={String(getBackCardImg('586'))} /></OptionCardImg>,
            <OptionCardImg name={"Собиратель трупов"} targetThis={targetBackgroundNumber == 587} setTarget={setTargetBackgroundNumber} number={587} ><img src={String(getBackCardImg('587'))} /></OptionCardImg>,
            <OptionCardImg name={"Сова"} targetThis={targetBackgroundNumber == 588} setTarget={setTargetBackgroundNumber} number={588} ><img src={String(getBackCardImg('588'))} /></OptionCardImg>,
            <OptionCardImg name={"Совомед"} targetThis={targetBackgroundNumber == 589} setTarget={setTargetBackgroundNumber} number={589} ><img src={String(getBackCardImg('589'))} /></OptionCardImg>,
            <OptionCardImg name={"Солар"} targetThis={targetBackgroundNumber == 590} setTarget={setTargetBackgroundNumber} number={590} ><img src={String(getBackCardImg('590'))} /></OptionCardImg>,
            <OptionCardImg name={"Сорвиголова"} targetThis={targetBackgroundNumber == 591} setTarget={setTargetBackgroundNumber} number={591} ><img src={String(getBackCardImg('591'))} /></OptionCardImg>,
            <OptionCardImg name={"Спектр"} targetThis={targetBackgroundNumber == 592} setTarget={setTargetBackgroundNumber} number={592} ><img src={String(getBackCardImg('592'))} /></OptionCardImg>,
            <OptionCardImg name={"Спрайт"} targetThis={targetBackgroundNumber == 593} setTarget={setTargetBackgroundNumber} number={593} ><img src={String(getBackCardImg('593'))} /></OptionCardImg>,
            <OptionCardImg name={"Стальной защитник"} targetThis={targetBackgroundNumber == 594} setTarget={setTargetBackgroundNumber} number={594} ><img src={String(getBackCardImg('594'))} /></OptionCardImg>,
            <OptionCardImg name={"Стальной хищник"} targetThis={targetBackgroundNumber == 595} setTarget={setTargetBackgroundNumber} number={595} ><img src={String(getBackCardImg('595'))} /></OptionCardImg>,
            <OptionCardImg name={"Старейшина дарклингов"} targetThis={targetBackgroundNumber == 596} setTarget={setTargetBackgroundNumber} number={596} ><img src={String(getBackCardImg('596'))} /></OptionCardImg>,
            <OptionCardImg name={"Старший мозг"} targetThis={targetBackgroundNumber == 597} setTarget={setTargetBackgroundNumber} number={597} ><img src={String(getBackCardImg('597'))} /></OptionCardImg>,
            <OptionCardImg name={"Стегозавр"} targetThis={targetBackgroundNumber == 598} setTarget={setTargetBackgroundNumber} number={598} ><img src={String(getBackCardImg('598'))} /></OptionCardImg>,
            <OptionCardImg name={"Стидер"} targetThis={targetBackgroundNumber == 599} setTarget={setTargetBackgroundNumber} number={599} ><img src={String(getBackCardImg('599'))} /></OptionCardImg>,
            <OptionCardImg name={"Стражник"} targetThis={targetBackgroundNumber == 600} setTarget={setTargetBackgroundNumber} number={600} ><img src={String(getBackCardImg('600'))} /></OptionCardImg>,
            <OptionCardImg name={"Строжевой дрейк"} targetThis={targetBackgroundNumber == 601} setTarget={setTargetBackgroundNumber} number={601} ><img src={String(getBackCardImg('601'))} /></OptionCardImg>,
            <OptionCardImg name={"Студенистый куб"} targetThis={targetBackgroundNumber == 602} setTarget={setTargetBackgroundNumber} number={602} ><img src={String(getBackCardImg('602'))} /></OptionCardImg>,
            <OptionCardImg name={"Суккуб Инкуб"} targetThis={targetBackgroundNumber == 603} setTarget={setTargetBackgroundNumber} number={603} ><img src={String(getBackCardImg('603'))} /></OptionCardImg>,
            <OptionCardImg name={"Тёмный страж"} targetThis={targetBackgroundNumber == 604} setTarget={setTargetBackgroundNumber} number={604} ><img src={String(getBackCardImg('604'))} /></OptionCardImg>,
            <OptionCardImg name={"Танарукк"} targetThis={targetBackgroundNumber == 605} setTarget={setTargetBackgroundNumber} number={605} ><img src={String(getBackCardImg('605'))} /></OptionCardImg>,
            <OptionCardImg name={"Тараск"} targetThis={targetBackgroundNumber == 606} setTarget={setTargetBackgroundNumber} number={606} ><img src={String(getBackCardImg('606'))} /></OptionCardImg>,
            <OptionCardImg name={"Тварь бездны"} targetThis={targetBackgroundNumber == 607} setTarget={setTargetBackgroundNumber} number={607} ><img src={String(getBackCardImg('607'))} /></OptionCardImg>,
            <OptionCardImg name={"Темная мантия"} targetThis={targetBackgroundNumber == 608} setTarget={setTargetBackgroundNumber} number={608} ><img src={String(getBackCardImg('608'))} /></OptionCardImg>,
            <OptionCardImg name={"Теневой демон"} targetThis={targetBackgroundNumber == 609} setTarget={setTargetBackgroundNumber} number={609} ><img src={String(getBackCardImg('609'))} /></OptionCardImg>,
            <OptionCardImg name={"Теневой мастифф"} targetThis={targetBackgroundNumber == 610} setTarget={setTargetBackgroundNumber} number={610} ><img src={String(getBackCardImg('610'))} /></OptionCardImg>,
            <OptionCardImg name={"Теневой танцор"} targetThis={targetBackgroundNumber == 611} setTarget={setTargetBackgroundNumber} number={611} ><img src={String(getBackCardImg('611'))} /></OptionCardImg>,
            <OptionCardImg name={"Тень"} targetThis={targetBackgroundNumber == 612} setTarget={setTargetBackgroundNumber} number={612} ><img src={String(getBackCardImg('612'))} /></OptionCardImg>,
            <OptionCardImg name={"Тигр"} targetThis={targetBackgroundNumber == 613} setTarget={setTargetBackgroundNumber} number={613} ><img src={String(getBackCardImg('613'))} /></OptionCardImg>,
            <OptionCardImg name={"Тиран смерти"} targetThis={targetBackgroundNumber == 614} setTarget={setTargetBackgroundNumber} number={614} ><img src={String(getBackCardImg('614'))} /></OptionCardImg>,
            <OptionCardImg name={"Тираннозавр рекс"} targetThis={targetBackgroundNumber == 615} setTarget={setTargetBackgroundNumber} number={615} ><img src={String(getBackCardImg('615'))} /></OptionCardImg>,
            <OptionCardImg name={"Ткач мрака"} targetThis={targetBackgroundNumber == 616} setTarget={setTargetBackgroundNumber} number={616} ><img src={String(getBackCardImg('616'))} /></OptionCardImg>,
            <OptionCardImg name={"Тлинкалли"} targetThis={targetBackgroundNumber == 617} setTarget={setTargetBackgroundNumber} number={617} ><img src={String(getBackCardImg('617'))} /></OptionCardImg>,
            <OptionCardImg name={"Топороклюв"} targetThis={targetBackgroundNumber == 618} setTarget={setTargetBackgroundNumber} number={618} ><img src={String(getBackCardImg('618'))} /></OptionCardImg>,
            <OptionCardImg name={"Торговец душами"} targetThis={targetBackgroundNumber == 619} setTarget={setTargetBackgroundNumber} number={619} ><img src={String(getBackCardImg('619'))} /></OptionCardImg>,
            <OptionCardImg name={"Тортл друид"} targetThis={targetBackgroundNumber == 620} setTarget={setTargetBackgroundNumber} number={620} ><img src={String(getBackCardImg('620'))} /></OptionCardImg>,
            <OptionCardImg name={"Тортл"} targetThis={targetBackgroundNumber == 621} setTarget={setTargetBackgroundNumber} number={621} ><img src={String(getBackCardImg('621'))} /></OptionCardImg>,
            <OptionCardImg name={"Траппер"} targetThis={targetBackgroundNumber == 622} setTarget={setTargetBackgroundNumber} number={622} ><img src={String(getBackCardImg('622'))} /></OptionCardImg>,
            <OptionCardImg name={"Трент"} targetThis={targetBackgroundNumber == 623} setTarget={setTargetBackgroundNumber} number={623} ><img src={String(getBackCardImg('623'))} /></OptionCardImg>,
            <OptionCardImg name={"Три-крин вариант"} targetThis={targetBackgroundNumber == 624} setTarget={setTargetBackgroundNumber} number={624} ><img src={String(getBackCardImg('624'))} /></OptionCardImg>,
            <OptionCardImg name={"Три-крин псионик"} targetThis={targetBackgroundNumber == 625} setTarget={setTargetBackgroundNumber} number={625} ><img src={String(getBackCardImg('625'))} /></OptionCardImg>,
            <OptionCardImg name={"Три-крин"} targetThis={targetBackgroundNumber == 626} setTarget={setTargetBackgroundNumber} number={626} ><img src={String(getBackCardImg('626'))} /></OptionCardImg>,
            <OptionCardImg name={"Тридрон"} targetThis={targetBackgroundNumber == 627} setTarget={setTargetBackgroundNumber} number={627} ><img src={String(getBackCardImg('627'))} /></OptionCardImg>,
            <OptionCardImg name={"Трицерапторс"} targetThis={targetBackgroundNumber == 628} setTarget={setTargetBackgroundNumber} number={628} ><img src={String(getBackCardImg('628'))} /></OptionCardImg>,
            <OptionCardImg name={"Троглодит"} targetThis={targetBackgroundNumber == 629} setTarget={setTargetBackgroundNumber} number={629} ><img src={String(getBackCardImg('629'))} /></OptionCardImg>,
            <OptionCardImg name={"Тролль-дух"} targetThis={targetBackgroundNumber == 630} setTarget={setTargetBackgroundNumber} number={630} ><img src={String(getBackCardImg('630'))} /></OptionCardImg>,
            <OptionCardImg name={"Тролль"} targetThis={targetBackgroundNumber == 631} setTarget={setTargetBackgroundNumber} number={631} ><img src={String(getBackCardImg('631'))} /></OptionCardImg>,
            <OptionCardImg name={"Трупоцвет"} targetThis={targetBackgroundNumber == 632} setTarget={setTargetBackgroundNumber} number={632} ><img src={String(getBackCardImg('632'))} /></OptionCardImg>,
            <OptionCardImg name={"Тур"} targetThis={targetBackgroundNumber == 633} setTarget={setTargetBackgroundNumber} number={633} ><img src={String(getBackCardImg('633'))} /></OptionCardImg>,
            <OptionCardImg name={"Удав"} targetThis={targetBackgroundNumber == 634} setTarget={setTargetBackgroundNumber} number={634} ><img src={String(getBackCardImg('634'))} /></OptionCardImg>,
            <OptionCardImg name={"Улитарид"} targetThis={targetBackgroundNumber == 635} setTarget={setTargetBackgroundNumber} number={635} ><img src={String(getBackCardImg('635'))} /></OptionCardImg>,
            <OptionCardImg name={"Улыбающийся облачный гигант"} targetThis={targetBackgroundNumber == 636} setTarget={setTargetBackgroundNumber} number={636} ><img src={String(getBackCardImg('636'))} /></OptionCardImg>,
            <OptionCardImg name={"Ультролот"} targetThis={targetBackgroundNumber == 637} setTarget={setTargetBackgroundNumber} number={637} ><img src={String(getBackCardImg('637'))} /></OptionCardImg>,
            <OptionCardImg name={"Умертвие"} targetThis={targetBackgroundNumber == 638} setTarget={setTargetBackgroundNumber} number={638} ><img src={String(getBackCardImg('638'))} /></OptionCardImg>,
            <OptionCardImg name={"Упряжная лошадь"} targetThis={targetBackgroundNumber == 639} setTarget={setTargetBackgroundNumber} number={639} ><img src={String(getBackCardImg('639'))} /></OptionCardImg>,
            <OptionCardImg name={"Упырь"} targetThis={targetBackgroundNumber == 640} setTarget={setTargetBackgroundNumber} number={640} ><img src={String(getBackCardImg('640'))} /></OptionCardImg>,
            <OptionCardImg name={"Ускользающий зверь"} targetThis={targetBackgroundNumber == 641} setTarget={setTargetBackgroundNumber} number={641} ><img src={String(getBackCardImg('641'))} /></OptionCardImg>,
            <OptionCardImg name={"Утробный демон"} targetThis={targetBackgroundNumber == 642} setTarget={setTargetBackgroundNumber} number={642} ><img src={String(getBackCardImg('642'))} /></OptionCardImg>,
            <OptionCardImg name={"Ученик волшебникаа"} targetThis={targetBackgroundNumber == 643} setTarget={setTargetBackgroundNumber} number={643} ><img src={String(getBackCardImg('643'))} /></OptionCardImg>,
            <OptionCardImg name={"Фанатик культа"} targetThis={targetBackgroundNumber == 644} setTarget={setTargetBackgroundNumber} number={644} ><img src={String(getBackCardImg('644'))} /></OptionCardImg>,
            <OptionCardImg name={"Феникс"} targetThis={targetBackgroundNumber == 645} setTarget={setTargetBackgroundNumber} number={645} ><img src={String(getBackCardImg('645'))} /></OptionCardImg>,
            <OptionCardImg name={"Фламф"} targetThis={targetBackgroundNumber == 646} setTarget={setTargetBackgroundNumber} number={646} ><img src={String(getBackCardImg('646'))} /></OptionCardImg>,
            <OptionCardImg name={"Флинд"} targetThis={targetBackgroundNumber == 647} setTarget={setTargetBackgroundNumber} number={647} ><img src={String(getBackCardImg('647'))} /></OptionCardImg>,
            <OptionCardImg name={"Фомор"} targetThis={targetBackgroundNumber == 648} setTarget={setTargetBackgroundNumber} number={648} ><img src={String(getBackCardImg('648'))} /></OptionCardImg>,
            <OptionCardImg name={"Хезроу"} targetThis={targetBackgroundNumber == 649} setTarget={setTargetBackgroundNumber} number={649} ><img src={String(getBackCardImg('649'))} /></OptionCardImg>,
            <OptionCardImg name={"Химера"} targetThis={targetBackgroundNumber == 650} setTarget={setTargetBackgroundNumber} number={650} ><img src={String(getBackCardImg('650'))} /></OptionCardImg>,
            <OptionCardImg name={"Хитин"} targetThis={targetBackgroundNumber == 651} setTarget={setTargetBackgroundNumber} number={651} ><img src={String(getBackCardImg('651'))} /></OptionCardImg>,
            <OptionCardImg name={"Хобгоблин военачальник"} targetThis={targetBackgroundNumber == 652} setTarget={setTargetBackgroundNumber} number={652} ><img src={String(getBackCardImg('652'))} /></OptionCardImg>,
            <OptionCardImg name={"Хобгоблин железная тень"} targetThis={targetBackgroundNumber == 653} setTarget={setTargetBackgroundNumber} number={653} ><img src={String(getBackCardImg('653'))} /></OptionCardImg>,
            <OptionCardImg name={"Хобгоблин опустошитель"} targetThis={targetBackgroundNumber == 654} setTarget={setTargetBackgroundNumber} number={654} ><img src={String(getBackCardImg('654'))} /></OptionCardImg>,
            <OptionCardImg name={"Хобгоблин"} targetThis={targetBackgroundNumber == 655} setTarget={setTargetBackgroundNumber} number={655} ><img src={String(getBackCardImg('655'))} /></OptionCardImg>,
            <OptionCardImg name={"Холдрит"} targetThis={targetBackgroundNumber == 656} setTarget={setTargetBackgroundNumber} number={656} ><img src={String(getBackCardImg('656'))} /></OptionCardImg>,
            <OptionCardImg name={"Холмовой великан"} targetThis={targetBackgroundNumber == 657} setTarget={setTargetBackgroundNumber} number={657} ><img src={String(getBackCardImg('657'))} /></OptionCardImg>,
            <OptionCardImg name={"Цеповая улитка"} targetThis={targetBackgroundNumber == 658} setTarget={setTargetBackgroundNumber} number={658} ><img src={String(getBackCardImg('658'))} /></OptionCardImg>,
            <OptionCardImg name={"Циклоп"} targetThis={targetBackgroundNumber == 659} setTarget={setTargetBackgroundNumber} number={659} ><img src={String(getBackCardImg('659'))} /></OptionCardImg>,
            <OptionCardImg name={"Чёрный абишай"} targetThis={targetBackgroundNumber == 660} setTarget={setTargetBackgroundNumber} number={660} ><img src={String(getBackCardImg('660'))} /></OptionCardImg>,
            <OptionCardImg name={"Чазм"} targetThis={targetBackgroundNumber == 661} setTarget={setTargetBackgroundNumber} number={661} ><img src={String(getBackCardImg('661'))} /></OptionCardImg>,
            <OptionCardImg name={"Человекообразная обезьяна"} targetThis={targetBackgroundNumber == 662} setTarget={setTargetBackgroundNumber} number={662} ><img src={String(getBackCardImg('662'))} /></OptionCardImg>,
            <OptionCardImg name={"Чемпион"} targetThis={targetBackgroundNumber == 663} setTarget={setTargetBackgroundNumber} number={663} ><img src={String(getBackCardImg('663'))} /></OptionCardImg>,
            <OptionCardImg name={"Черепная крыса"} targetThis={targetBackgroundNumber == 664} setTarget={setTargetBackgroundNumber} number={664} ><img src={String(getBackCardImg('664'))} /></OptionCardImg>,
            <OptionCardImg name={"Черная слизь"} targetThis={targetBackgroundNumber == 665} setTarget={setTargetBackgroundNumber} number={665} ><img src={String(getBackCardImg('665'))} /></OptionCardImg>,
            <OptionCardImg name={"Черный медведь"} targetThis={targetBackgroundNumber == 666} setTarget={setTargetBackgroundNumber} number={666} ><img src={String(getBackCardImg('666'))} /></OptionCardImg>,
            <OptionCardImg name={"Чистокровная юань-ти"} targetThis={targetBackgroundNumber == 667} setTarget={setTargetBackgroundNumber} number={667} ><img src={String(getBackCardImg('667'))} /></OptionCardImg>,
            <OptionCardImg name={"Чудище звездных пораждений"} targetThis={targetBackgroundNumber == 668} setTarget={setTargetBackgroundNumber} number={668} ><img src={String(getBackCardImg('668'))} /></OptionCardImg>,
            <OptionCardImg name={"Чууль"} targetThis={targetBackgroundNumber == 669} setTarget={setTargetBackgroundNumber} number={669} ><img src={String(getBackCardImg('669'))} /></OptionCardImg>,
            <OptionCardImg name={"Шакал"} targetThis={targetBackgroundNumber == 670} setTarget={setTargetBackgroundNumber} number={670} ><img src={String(getBackCardImg('670'))} /></OptionCardImg>,
            <OptionCardImg name={"Шакальник"} targetThis={targetBackgroundNumber == 671} setTarget={setTargetBackgroundNumber} number={671} ><img src={String(getBackCardImg('671'))} /></OptionCardImg>,
            <OptionCardImg name={"Шипастый дьявол"} targetThis={targetBackgroundNumber == 672} setTarget={setTargetBackgroundNumber} number={672} ><img src={String(getBackCardImg('672'))} /></OptionCardImg>,
            <OptionCardImg name={"Шлемономный ужас"} targetThis={targetBackgroundNumber == 673} setTarget={setTargetBackgroundNumber} number={673} ><img src={String(getBackCardImg('673'))} /></OptionCardImg>,
            <OptionCardImg name={"Шпион"} targetThis={targetBackgroundNumber == 674} setTarget={setTargetBackgroundNumber} number={674} ><img src={String(getBackCardImg('674'))} /></OptionCardImg>,
            <OptionCardImg name={"Штормовой великан"} targetThis={targetBackgroundNumber == 675} setTarget={setTargetBackgroundNumber} number={675} ><img src={String(getBackCardImg('675'))} /></OptionCardImg>,
            <OptionCardImg name={"Штормовой гигант квинтэссент"} targetThis={targetBackgroundNumber == 676} setTarget={setTargetBackgroundNumber} number={676} ><img src={String(getBackCardImg('676'))} /></OptionCardImg>,
            <OptionCardImg name={"Шусува"} targetThis={targetBackgroundNumber == 677} setTarget={setTargetBackgroundNumber} number={677} ><img src={String(getBackCardImg('677'))} /></OptionCardImg>,
            <OptionCardImg name={"Щитостраж"} targetThis={targetBackgroundNumber == 678} setTarget={setTargetBackgroundNumber} number={678} ><img src={String(getBackCardImg('678'))} /></OptionCardImg>,
            <OptionCardImg name={"Эйдолон"} targetThis={targetBackgroundNumber == 679} setTarget={setTargetBackgroundNumber} number={679} ><img src={String(getBackCardImg('679'))} /></OptionCardImg>,
            <OptionCardImg name={"Эйзель"} targetThis={targetBackgroundNumber == 680} setTarget={setTargetBackgroundNumber} number={680} ><img src={String(getBackCardImg('680'))} /></OptionCardImg>,
            <OptionCardImg name={"Элитный воин грунг"} targetThis={targetBackgroundNumber == 681} setTarget={setTargetBackgroundNumber} number={681} ><img src={String(getBackCardImg('681'))} /></OptionCardImg>,
            <OptionCardImg name={"Элитный воитель дроу"} targetThis={targetBackgroundNumber == 682} setTarget={setTargetBackgroundNumber} number={682} ><img src={String(getBackCardImg('682'))} /></OptionCardImg>,
            <OptionCardImg name={"Эмпирей"} targetThis={targetBackgroundNumber == 683} setTarget={setTargetBackgroundNumber} number={683} ><img src={String(getBackCardImg('683'))} /></OptionCardImg>,
            <OptionCardImg name={"Эриния"} targetThis={targetBackgroundNumber == 684} setTarget={setTargetBackgroundNumber} number={684} ><img src={String(getBackCardImg('684'))} /></OptionCardImg>,
            <OptionCardImg name={"Эттеркап"} targetThis={targetBackgroundNumber == 685} setTarget={setTargetBackgroundNumber} number={685} ><img src={String(getBackCardImg('685'))} /></OptionCardImg>,
            <OptionCardImg name={"Эттин"} targetThis={targetBackgroundNumber == 686} setTarget={setTargetBackgroundNumber} number={686} ><img src={String(getBackCardImg('686'))} /></OptionCardImg>,
            <OptionCardImg name={"Юань-ти говорящая в кошмарах"} targetThis={targetBackgroundNumber == 687} setTarget={setTargetBackgroundNumber} number={687} ><img src={String(getBackCardImg('687'))} /></OptionCardImg>,
            <OptionCardImg name={"Юань-ти говорящая в мыслях"} targetThis={targetBackgroundNumber == 688} setTarget={setTargetBackgroundNumber} number={688} ><img src={String(getBackCardImg('688'))} /></OptionCardImg>,
            <OptionCardImg name={"Юань-ти проклинатель 1"} targetThis={targetBackgroundNumber == 689} setTarget={setTargetBackgroundNumber} number={689} ><img src={String(getBackCardImg('689'))} /></OptionCardImg>,
            <OptionCardImg name={"Юань-ти проклинатель 2"} targetThis={targetBackgroundNumber == 690} setTarget={setTargetBackgroundNumber} number={690} ><img src={String(getBackCardImg('690'))} /></OptionCardImg>,
            <OptionCardImg name={"Юань-ти проклинатель 3"} targetThis={targetBackgroundNumber == 691} setTarget={setTargetBackgroundNumber} number={691} ><img src={String(getBackCardImg('691'))} /></OptionCardImg>,
            <OptionCardImg name={"Юань-ти страж выводка"} targetThis={targetBackgroundNumber == 692} setTarget={setTargetBackgroundNumber} number={692} ><img src={String(getBackCardImg('692'))} /></OptionCardImg>,
            <OptionCardImg name={"Юань-ти хозяин тьмы"} targetThis={targetBackgroundNumber == 693} setTarget={setTargetBackgroundNumber} number={693} ><img src={String(getBackCardImg('693'))} /></OptionCardImg>,
            <OptionCardImg name={"Юань–ти анафема"} targetThis={targetBackgroundNumber == 694} setTarget={setTargetBackgroundNumber} number={694} ><img src={String(getBackCardImg('694'))} /></OptionCardImg>,
            <OptionCardImg name={"Ягнолот"} targetThis={targetBackgroundNumber == 695} setTarget={setTargetBackgroundNumber} number={695} ><img src={String(getBackCardImg('695'))} /></OptionCardImg>,
            <OptionCardImg name={"Ядовитая змея"} targetThis={targetBackgroundNumber == 696} setTarget={setTargetBackgroundNumber} number={696} ><img src={String(getBackCardImg('696'))} /></OptionCardImg>,
            <OptionCardImg name={"Ядовитый тролль"} targetThis={targetBackgroundNumber == 697} setTarget={setTargetBackgroundNumber} number={697} ><img src={String(getBackCardImg('697'))} /></OptionCardImg>,
            <OptionCardImg name={"Ястреб"} targetThis={targetBackgroundNumber == 698} setTarget={setTargetBackgroundNumber} number={698} ><img src={String(getBackCardImg('698'))} /></OptionCardImg>,
            <OptionCardImg name={"Ящерица"} targetThis={targetBackgroundNumber == 699} setTarget={setTargetBackgroundNumber} number={699} ><img src={String(getBackCardImg('699'))} /></OptionCardImg>,
        ];
        return (
            <div>
                <div className={style.LineSetting}>
                    {Elements[rubahaCaseNumber * 6]}
                    {Elements[rubahaCaseNumber * 6 + 1]}
                </div>
                <div className={style.LineSetting}>
                    {Elements[rubahaCaseNumber * 6 + 2]}
                    {Elements[rubahaCaseNumber * 6 + 3]}
                </div>
                <div className={style.LineSetting}>
                    {Elements[rubahaCaseNumber * 6 + 4]}
                    {Elements[rubahaCaseNumber * 6 + 5]}
                </div>
            </div>
        );
    };
    const setSvitokPyti = (num: number) => {
        return (
            <div className={style.InputFile}>
                <label htmlFor={`inputfile + ${0 - num - 1}`}><Download /></label>
                <input type="file" name="" id={`inputfile + ${0 - num - 1}`} onInput={(e) => {
                    const file = (e.target as HTMLInputElement);
                    const R = file?.files;
                    if (R != null) {
                        const T = pytSvitok;
                        T[0 - num - 1] = R[0];
                        setPytSvitok(T);
                    }
                    let r = targetSvitokNumber;
                    setTargetSvitokNumber(-999999);
                    setTimeout((a) => {
                        setTargetSvitokNumber(a);
                    }, 300, r);
                }} />
            </div>
        );
    }
    const getSvitokCase = () => {
        const Elements = [
            <OptionCardImg name={"Своя"} d={true} targetThis={targetSvitokNumber == -6} setTarget={setTargetSvitokNumber} number={-6} img={pytSvitok[5] != undefined ? URL.createObjectURL(pytSvitok[5]) : undefined}><div>{setSvitokPyti(-6)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetSvitokNumber == -5} setTarget={setTargetSvitokNumber} number={-5} img={pytSvitok[4] != undefined ? URL.createObjectURL(pytSvitok[4]) : undefined}><div>{setSvitokPyti(-5)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetSvitokNumber == -4} setTarget={setTargetSvitokNumber} number={-4} img={pytSvitok[3] != undefined ? URL.createObjectURL(pytSvitok[3]) : undefined}><div>{setSvitokPyti(-4)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetSvitokNumber == -3} setTarget={setTargetSvitokNumber} number={-3} img={pytSvitok[2] != undefined ? URL.createObjectURL(pytSvitok[2]) : undefined}><div>{setSvitokPyti(-3)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetSvitokNumber == -2} setTarget={setTargetSvitokNumber} number={-2} img={pytSvitok[1] != undefined ? URL.createObjectURL(pytSvitok[1]) : undefined}><div>{setSvitokPyti(-2)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetSvitokNumber == -1} setTarget={setTargetSvitokNumber} number={-1} img={pytSvitok[0] != undefined ? URL.createObjectURL(pytSvitok[0]) : undefined}><div>{setSvitokPyti(-1)}</div></OptionCardImg>,
            <OptionCardImg name={"Свиток 1"} targetThis={targetSvitokNumber == 1} setTarget={setTargetSvitokNumber} number={1} ><img src={String(getSvitokCardImg('1'))} /></OptionCardImg>,
            <OptionCardImg name={"Свиток 2"} targetThis={targetSvitokNumber == 2} setTarget={setTargetSvitokNumber} number={2} ><img src={String(getSvitokCardImg('2'))} /></OptionCardImg>,
            <OptionCardImg name={"Свиток 3"} targetThis={targetSvitokNumber == 3} setTarget={setTargetSvitokNumber} number={3} ><img src={String(getSvitokCardImg('3'))} /></OptionCardImg>,
            <OptionCardImg name={"Свиток 4"} targetThis={targetSvitokNumber == 4} setTarget={setTargetSvitokNumber} number={4} ><img src={String(getSvitokCardImg('4'))} /></OptionCardImg>,
        ];
        return (
            <div>
                <div className={style.LineSetting}>
                    {Elements[svitokCaseNumber * 6]}
                    {Elements[svitokCaseNumber * 6 + 1]}
                </div>
                <div className={style.LineSetting}>
                    {Elements[svitokCaseNumber * 6 + 2]}
                    {Elements[svitokCaseNumber * 6 + 3]}
                </div>
                <div className={style.LineSetting}>
                    {Elements[svitokCaseNumber * 6 + 4]}
                    {Elements[svitokCaseNumber * 6 + 5]}
                </div>
            </div>
        );
    };
    const setOpenThisBaseCas = (a: number) => {
        const M = [...openThisBaseCase];
        M[a] = !M[a];
        setOpenThisBaseCase(M);
    };
    const setOpenThisBas = (numbers: number[][], name: string) => {
        type sp = {
            0: string[],
            1: string[],
            2: string[],
            3: string[],
            4: string[],
            5: string[],
            6: string[],
            7: string[],
            8: string[],
            9: string[],
        };
        const spells: sp = {
            0: [
            ],
            1: [
            ],
            2: [
            ],
            3: [
            ],
            4: [
            ],
            5: [
            ],
            6: [
            ],
            7: [
            ],
            8: [
            ],
            9: [
            ],
        };
        let A = '';
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j].length > 1) {
                if (numbers[j][1] == -1) {
                    for (let i = 0; i < spells[numbers[j][0] as keyof sp].length; i++) {
                        A = A + spells[numbers[j][0] as keyof sp][i] + '\n';
                    }
                } else {
                    for (let i = 1; i < numbers[j].length; i++) {
                        A = A + spells[numbers[j][0] as keyof sp][numbers[j][i]] + '\n';
                    }
                }
            }
        }
        setCSV(A.slice(0, A.length - 1).replaceAll('#####', name));
        setMakeCSV(makeCSV + 1);
    };
    return (
        <div className={style.Main} id={"ThisIsColorsConst"}>
            <div className={style.Viu + ' ' + (showOptions ? style.OpenOptionViu : '')}>
                <div className={style.ChangeCardViu + ' ' + style.BigViu}>
                    <div className={style.RubahaViu + ' ' + (isCSVRedactor ? '' : style.OnHover)} onClick={() => { setIsCSVRedactor(false); setNewCSV(newConst); }}>
                        <p>Режим печати</p>
                    </div>
                    <div className={style.RubahaViu + ' ' + (isCSVRedactor ? style.OnHover : '')} onClick={() => { setIsCSVRedactor(true) }}>
                        <p>Режим CSV редактора</p>
                    </div>
                </div>
                {
                    !isCSVRedactor
                        ? <div className={style.ChangeCardViu}>
                            <div className={style.RubahaViu + ' ' + (isBack ? '' : style.OnHover)} onClick={() => { setIsBack(false) }}>
                                <p>Лицо</p>
                            </div>
                            <div className={style.RubahaViu + ' ' + (isBack ? style.OnHover : '')} onClick={() => { setIsBack(true) }}>
                                <p>Рубаха</p>
                            </div>
                        </div>
                        : null
                }
            </div>
            <Setting className={style.OptionsSetting} onClick={() => { setShowOptions(true); }} />
            <div className={style.Options + ' ' + (showOptions ? '' : style.HideWindow)}>
                <div className={style.Hide}> <div className={style.Text} onClick={() => { setShowOptions(false); }}>Скрыть</div> </div>
                <div className={style.OpionsCase}>
                    <div className={style.SettingDownload}>
                        <div className={style.But} onClick={() => {
                            //создаем файл
                            const ToString = (myNewSetting: string, myStringMas: string[] | boolean[] | number[], settingName: string) => {
                                let r = myNewSetting + settingName + ':';
                                for (let i = 0; i < myStringMas.length; i++)
                                    r = r + myStringMas[i] + ',';
                                r = r.slice(0, r.length - 1) + '\n';
                                return r;
                            };
                            let myNewSetting = '';
                            myNewSetting = ToString(myNewSetting, colors, 'colors');
                            myNewSetting = ToString(myNewSetting, sizePole, 'sizePole');
                            myNewSetting = ToString(myNewSetting, minMax, 'minMax');
                            myNewSetting = ToString(myNewSetting, sizeText, 'sizeText');
                            myNewSetting = ToString(myNewSetting, paddingText, 'paddingText');
                            myNewSetting = ToString(myNewSetting, alignValue, 'alignValue');
                            myNewSetting = ToString(myNewSetting, borderRadiusValue, 'borderRadiusValue');
                            myNewSetting = ToString(myNewSetting, imgSize, 'imgSize');
                            myNewSetting = ToString(myNewSetting, kolvo, 'kolvo');
                            myNewSetting = ToString(myNewSetting, [targetFont1], 'targetFont1');
                            myNewSetting = ToString(myNewSetting, [rubahaCaseNumber], 'rubahaCaseNumber');
                            myNewSetting = ToString(myNewSetting, [svitokCaseNumber], 'ramkaCaseNumber');
                            myNewSetting = ToString(myNewSetting, [targetSvitokNumber], 'targetSvitokNumber');
                            myNewSetting = ToString(myNewSetting, [targetBackgroundNumber], 'targetBackgroundNumber');
                            myNewSetting = ToString(myNewSetting, blockColor, 'blockColor');
                            myNewSetting = ToString(myNewSetting, blockSizePole, 'blockSizePole');
                            myNewSetting = ToString(myNewSetting, blockSizeText, 'blockSizeText');
                            myNewSetting = ToString(myNewSetting, blockImgSize, 'blockImgSize');
                            myNewSetting = ToString(myNewSetting, blockPaddingText, 'blockPaddingText');
                            myNewSetting = ToString(myNewSetting, blockAlignValue, 'blockAlignValue');
                            myNewSetting = ToString(myNewSetting, blockBorderRadius, 'blockBorderRadius');
                            myNewSetting = ToString(myNewSetting, [blockMinMax], 'blockMinMax');
                            myNewSetting = ToString(myNewSetting, [lineCut], 'lineCut');
                            myNewSetting = ToString(myNewSetting, [doubleBack], 'doubleBack');
                            let blob = new Blob(["\ufeff", myNewSetting], { type: "text;charset=windows-1251" });
                            const url = URL.createObjectURL(blob);
                            const anchor = document.createElement('a');
                            anchor.href = url;
                            anchor.download = "MySpellsSettings.txt";
                            document.body.appendChild(anchor);
                            anchor.click();
                            document.body.removeChild(anchor);
                            URL.revokeObjectURL(url);
                        }}>{'Сохранить настройки'}</div>

                        <input className={style.Hide} type="file" id="mySettingInputFile" onChange={() => {
                            const FromFile = (myString: string, settingName: string, Mas: string[] | boolean[] | number[]) => {
                                let start = myString.indexOf(settingName);
                                let count = 0;
                                if (start != -1) {
                                    start = myString.indexOf(':', start);
                                    let end = myString.indexOf('\n', start);
                                    if (end == -1) end = myString.length;
                                    if (start != -1) {
                                        for (start; start < end - 1 && start != -1;) {
                                            let next = myString.indexOf(',', start + 1);
                                            if (next > end) next = end;
                                            if (typeof Mas[0] == 'string') Mas[count] = myString.slice(start + 1, next);
                                            if (typeof Mas[0] == 'number') Mas[count] = Number(myString.slice(start + 1, next));
                                            if (typeof Mas[0] == 'boolean') Mas[count] = (myString.slice(start + 1, next) == 'false') ? false : true;
                                            start = next;
                                            count++;
                                        }
                                    }
                                }
                                return Mas;
                            };
                            const q = (document.getElementById("mySettingInputFile") as HTMLInputElement).files;
                            if (q != null) {
                                let reader = new FileReader();
                                reader.readAsText(q[0], 'windows-1251');
                                reader.onload = function () {
                                    let r = reader.result;
                                    if (r) {
                                        setColors(FromFile(r as string, 'colors', [...colors]) as string[]);
                                        setSizesPole(FromFile(r as string, 'sizePole', [...sizePole]) as number[]);
                                        setMinMax(FromFile(r as string, 'minMax', [...minMax]) as number[]);
                                        setSizesText(FromFile(r as string, 'sizeText', [...sizeText]) as number[]);
                                        setPaddingText(FromFile(r as string, 'paddingText', [...paddingText]) as number[]);
                                        setAlignValue(FromFile(r as string, 'alignValue', [...alignValue]) as number[]);
                                        setBorderRadiusValue(FromFile(r as string, 'borderRadiusValue', [...borderRadiusValue]) as number[]);
                                        setImgSize(FromFile(r as string, 'imgSize', [...imgSize]) as number[]);
                                        setKolvo(FromFile(r as string, 'kolvo', [...kolvo]) as number[]);
                                        setTargetFont1((FromFile(r as string, 'targetFont1', [targetFont1]) as number[])[0]);
                                        setTargetSvitokNumber((FromFile(r as string, 'targetSvitokNumber', [targetSvitokNumber]) as number[])[0]);
                                        setTargetBackgroundNumber((FromFile(r as string, 'targetFont2', [targetBackgroundNumber]) as number[])[0]);
                                        setRubahaCaseNumber((FromFile(r as string, 'rubahaCaseNumber', [rubahaCaseNumber]) as number[])[0]);
                                        setSvitokCaseNumber((FromFile(r as string, 'svitokCaseNumber', [svitokCaseNumber]) as number[])[0]);
                                        setBlockColor((FromFile(r as string, 'blockColor', [...blockColor]) as boolean[]));
                                        setBlockSizePole((FromFile(r as string, 'blockSizePole', [...blockSizePole]) as boolean[]));
                                        setBlockSizeText((FromFile(r as string, 'blockSizeText', [...blockSizeText]) as boolean[]));
                                        setBlockImgSize((FromFile(r as string, 'blockImgSize', [...blockImgSize]) as boolean[]));
                                        setBlockPaddingText((FromFile(r as string, 'blockPaddingText', [...blockPaddingText]) as boolean[]));
                                        setBlockAlignValue((FromFile(r as string, 'blockAlignValue', [...blockAlignValue]) as boolean[]));
                                        setBlockBorderRadius((FromFile(r as string, 'blockBorderRadius', [...blockBorderRadius]) as boolean[]));
                                        setBlockMinMax((FromFile(r as string, 'blockMinMax', [blockMinMax]) as boolean[])[0]);
                                        setLineCut((FromFile(r as string, 'lineCut', [lineCut]) as boolean[])[0]);
                                        setDoubleBack((FromFile(r as string, 'doubleBack', [doubleBack]) as boolean[])[0]);
                                    }
                                };
                                (document.getElementById("mySettingInputFile") as HTMLInputElement).value = "";
                            };
                        }} />
                        <label className={style.But} htmlFor="mySettingInputFile">{'Загрузить'}</label>
                    </div>
                    <OptionCase nameSetting={'Количество на листе'} targetThis={targetOption[1]} setTarget={setTarget} number={1}>
                        <div>
                            <OptionSize text={"По ширине"} size={kolvo[1]} number={1} setSize={setKolv} min={1} max={5} block={false} setBlock={undefined} />
                            <OptionSize text={"По высоте"} size={kolvo[0]} number={0} setSize={setKolv} min={1} max={5} block={false} setBlock={undefined} />
                            <div className={style.NumbersExists}><div className={style.Exists} onClick={() => {
                                setDoubleBack(!doubleBack);
                                setStartPerepolnen(startPerepolnen + 1);
                            }}> {"___"} {doubleBack && <div />}</div> <p>{"Раздвоенная рубаха"}</p> </div>
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Выбор картинки'} targetThis={targetOption[2]} setTarget={setTarget} number={2}>
                        <>
                            <div className={style.RubahaBackNext}>
                                <div className={style.but}>{rubahaCaseNumber > 0 ? <button onClick={() => { setRubahaCaseNumber(rubahaCaseNumber - 1) }}>Назад</button> : null}</div>
                                <div className={style.p}><div>страница {rubahaCaseNumber + 1}</div></div>
                                <div className={style.but}>{rubahaCaseNumber < 124 ? <button onClick={() => { setRubahaCaseNumber(rubahaCaseNumber + 1) }}>Вперед</button> : null}</div>
                            </div>
                            {getRubahaCase()}
                        </>
                    </OptionCase>
                    <OptionCase nameSetting={'Настройки картинки'} targetThis={targetOption[3]} setTarget={setTarget} number={3}>
                        <div>
                            <div>Растягивание по карточке<br />Значения учитываются в процентах от размера карточки<br />авто значение автоматического размера в пропорциях<br />100% и 100% растянет картинку по карточке<br />100% и авто растянет картинку по карточке по высоте, а ширина ее будет выбрана автоматически<br />авто авто картинка будет в своем первоначальном размере<br />Подгонка по высоте и ширине проводится при повороте в 0 градусов</div>
                            <OptionSize text={"% По высоте"} size={imgSize[0]} textAs={"Авто"} number={0} setSize={setImgSizes} min={0} max={500} block={blockImgSize[0]} setBlock={setBlocImgSize} />
                            <OptionSize text={"% По ширине"} size={imgSize[1]} textAs={"Авто"} number={1} setSize={setImgSizes} min={0} max={500} block={blockImgSize[1]} setBlock={setBlocImgSize} />
                            <OptionSize text={"град Поворот"} size={imgSize[2]} textAs={"0"} number={2} setSize={setImgSizes} min={-360} max={360} block={blockImgSize[2]} setBlock={setBlocImgSize} />
                            <OptionSize text={"Отступ сверху"} size={imgSize[3]} number={3} setSize={setImgSizes} min={0} max={200} block={blockImgSize[3]} setBlock={setBlocImgSize} />
                            <OptionSize text={"Отступ снизу"} size={imgSize[4]} number={4} setSize={setImgSizes} min={0} max={200} block={blockImgSize[4]} setBlock={setBlocImgSize} />
                            <OptionSize text={"Отступ слева"} size={imgSize[5]} number={5} setSize={setImgSizes} min={0} max={200} block={blockImgSize[5]} setBlock={setBlocImgSize} />
                            <OptionSize text={"Отступ справа"} size={imgSize[6]} number={6} setSize={setImgSizes} min={0} max={200} block={blockImgSize[6]} setBlock={setBlocImgSize} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Выбор свитка'} targetThis={targetOption[4]} setTarget={setTarget} number={4}>
                        <>
                            <div className={style.RubahaBackNext}>
                                <div>{svitokCaseNumber > 0 ? <button onClick={() => { setSvitokCaseNumber(svitokCaseNumber - 1) }}>Назад</button> : null}</div>
                                <p>страница {svitokCaseNumber + 1}</p>
                                <div>{svitokCaseNumber < 2 ? <button onClick={() => { setSvitokCaseNumber(svitokCaseNumber + 1) }}>Вперед</button> : null}</div>
                            </div>
                            {getSvitokCase()}
                        </>
                    </OptionCase>
                    <OptionCase nameSetting={'Цвета'} targetThis={targetOption[5]} setTarget={setTarget} number={5}>
                        <div>
                            <OptionColor text={"Фон листа"} color={colors[0]} number={0} setColor={setColor} block={blockColor[0]} setBlock={setBlocColor} name={colorsNames[0]} />
                            <OptionColor text={"Лицо. Края карточки"} color={colors[1]} number={1} setColor={setColor} block={blockColor[1]} setBlock={setBlocColor} name={colorsNames[1]} />
                            <OptionColor text={"Лицо. Фон заголовка"} textAs={"Как края"} color={colors[2]} number={2} setColor={setColor} block={blockColor[2]} setBlock={setBlocColor} name={colorsNames[2]} />
                            <OptionColor text={"Лицо. Заголовок"} color={colors[3]} number={3} setColor={setColor} block={blockColor[3]} setBlock={setBlocColor} name={colorsNames[3]} />
                            <OptionColor text={"Лицо. Фон внутренности"} color={colors[4]} number={4} setColor={setColor} block={blockColor[4]} setBlock={setBlocColor} name={colorsNames[4]} />
                            <OptionColor text={"Лицо. Описание"} color={colors[5]} number={5} setColor={setColor} block={blockColor[5]} setBlock={setBlocColor} name={colorsNames[5]} />
                            <OptionColor text={"Лицо. Фон подписи"} textAs={"Как края"} color={colors[6]} number={6} setColor={setColor} block={blockColor[6]} setBlock={setBlocColor} name={colorsNames[6]} />
                            <OptionColor text={"Лицо. Подпись"} textAs={"Как заголовок"} color={colors[7]} number={7} setColor={setColor} block={blockColor[7]} setBlock={setBlocColor} name={colorsNames[7]} />
                            <OptionColor text={"Рубаха. Края карточки"} textAs={"Как лицо"} color={colors[8]} number={8} setColor={setColor} block={blockColor[8]} setBlock={setBlocColor} name={colorsNames[8]} />
                            <OptionColor text={"Рубаха. Фон заголовка"} textAs={"Как лицо"} color={colors[9]} number={9} setColor={setColor} block={blockColor[9]} setBlock={setBlocColor} name={colorsNames[9]} />
                            <OptionColor text={"Рубаха. Заголовок"} textAs={"Как лицо"} color={colors[10]} number={10} setColor={setColor} block={blockColor[10]} setBlock={setBlocColor} name={colorsNames[10]} />
                            <OptionColor text={"Рубаха. Фон подзаголовка"} textAs={"Как края"} color={colors[11]} number={11} setColor={setColor} block={blockColor[11]} setBlock={setBlocColor} name={colorsNames[11]} />
                            <OptionColor text={"Рубаха. Подзаголовок"} textAs={"Как заг"} color={colors[12]} number={12} setColor={setColor} block={blockColor[12]} setBlock={setBlocColor} name={colorsNames[12]} />
                            <OptionColor text={"Рубаха. Фон внутри"} textAs={"Как лицо"} color={colors[13]} number={13} setColor={setColor} block={blockColor[13]} setBlock={setBlocColor} name={colorsNames[13]} />
                            <OptionColor text={"Рубаха. Фон статы"} textAs={"Как внутри"} color={colors[20]} number={20} setColor={setColor} block={blockColor[20]} setBlock={setBlocColor} name={colorsNames[20]} />
                            <OptionColor text={"Рубаха. Стат 1 заголовок"} color={colors[33]} number={33} setColor={setColor} block={blockColor[33]} setBlock={setBlocColor} name={colorsNames[33]} />
                            <OptionColor text={"Рубаха. Стат 1 текст"} color={colors[37]} number={37} setColor={setColor} block={blockColor[37]} setBlock={setBlocColor} name={colorsNames[37]} />
                            <OptionColor text={"Рубаха. Стат 2 заголовок"} textAs={"Как 1"} color={colors[34]} number={34} setColor={setColor} block={blockColor[34]} setBlock={setBlocColor} name={colorsNames[34]} />
                            <OptionColor text={"Рубаха. Стат 2 текст"} textAs={"Как 1"} color={colors[38]} number={38} setColor={setColor} block={blockColor[38]} setBlock={setBlocColor} name={colorsNames[38]} />
                            <OptionColor text={"Рубаха. Стат 3 заголовок"} textAs={"Как 1"} color={colors[35]} number={35} setColor={setColor} block={blockColor[35]} setBlock={setBlocColor} name={colorsNames[35]} />
                            <OptionColor text={"Рубаха. Стат 3 текст"} textAs={"Как 1"} color={colors[39]} number={39} setColor={setColor} block={blockColor[39]} setBlock={setBlocColor} name={colorsNames[39]} />
                            <OptionColor text={"Рубаха. Стат 4 заголовок"} textAs={"Как 1"} color={colors[36]} number={36} setColor={setColor} block={blockColor[36]} setBlock={setBlocColor} name={colorsNames[36]} />
                            <OptionColor text={"Рубаха. Стат 4 текст"} textAs={"Как 1"} color={colors[40]} number={40} setColor={setColor} block={blockColor[40]} setBlock={setBlocColor} name={colorsNames[40]} />
                            <OptionColor text={"Рубаха. Перекладина 0"} textAs={"Как края"} color={colors[53]} number={53} setColor={setColor} block={blockColor[53]} setBlock={setBlocColor} name={colorsNames[53]} />
                            <OptionColor text={"Рубаха. Фон скилы"} textAs={"Как внутри"} color={colors[21]} number={21} setColor={setColor} block={blockColor[21]} setBlock={setBlocColor} name={colorsNames[21]} />
                            <OptionColor text={"Рубаха. Скил 1 заголовок"} color={colors[41]} number={41} setColor={setColor} block={blockColor[41]} setBlock={setBlocColor} name={colorsNames[41]} />
                            <OptionColor text={"Рубаха. Скил 1 текст"} color={colors[47]} number={47} setColor={setColor} block={blockColor[47]} setBlock={setBlocColor} name={colorsNames[47]} />
                            <OptionColor text={"Рубаха. Скил 2 заголовок"} textAs={"Как 1"} color={colors[42]} number={42} setColor={setColor} block={blockColor[42]} setBlock={setBlocColor} name={colorsNames[42]} />
                            <OptionColor text={"Рубаха. Скил 2 текст"} textAs={"Как 1"} color={colors[48]} number={48} setColor={setColor} block={blockColor[48]} setBlock={setBlocColor} name={colorsNames[48]} />
                            <OptionColor text={"Рубаха. Скил 3 заголовок"} textAs={"Как 1"} color={colors[43]} number={43} setColor={setColor} block={blockColor[43]} setBlock={setBlocColor} name={colorsNames[43]} />
                            <OptionColor text={"Рубаха. Скил 3 текст"} textAs={"Как 1"} color={colors[49]} number={49} setColor={setColor} block={blockColor[49]} setBlock={setBlocColor} name={colorsNames[49]} />
                            <OptionColor text={"Рубаха. Скил 4 заголовок"} textAs={"Как 1"} color={colors[44]} number={44} setColor={setColor} block={blockColor[44]} setBlock={setBlocColor} name={colorsNames[44]} />
                            <OptionColor text={"Рубаха. Скил 4 текст"} textAs={"Как 1"} color={colors[50]} number={50} setColor={setColor} block={blockColor[50]} setBlock={setBlocColor} name={colorsNames[50]} />
                            <OptionColor text={"Рубаха. Скил 5 заголовок"} textAs={"Как 1"} color={colors[45]} number={45} setColor={setColor} block={blockColor[45]} setBlock={setBlocColor} name={colorsNames[45]} />
                            <OptionColor text={"Рубаха. Скил 5 текст"} textAs={"Как 1"} color={colors[51]} number={51} setColor={setColor} block={blockColor[51]} setBlock={setBlocColor} name={colorsNames[51]} />
                            <OptionColor text={"Рубаха. Скил 6 заголовок"} textAs={"Как 1"} color={colors[46]} number={46} setColor={setColor} block={blockColor[46]} setBlock={setBlocColor} name={colorsNames[46]} />
                            <OptionColor text={"Рубаха. Скил 6 текст"} textAs={"Как 1"} color={colors[52]} number={52} setColor={setColor} block={blockColor[52]} setBlock={setBlocColor} name={colorsNames[52]} />
                            <OptionColor text={"Рубаха. Перекладина 1"} textAs={"Как края"} color={colors[22]} number={22} setColor={setColor} block={blockColor[22]} setBlock={setBlocColor} name={colorsNames[22]} />
                            <OptionColor text={"Рубаха. Фон текст 1"} textAs={"Как внутри"} color={colors[14]} number={14} setColor={setColor} block={blockColor[14]} setBlock={setBlocColor} name={colorsNames[14]} />
                            <OptionColor text={"Рубаха. Текст 1"} color={colors[26]} number={26} setColor={setColor} block={blockColor[26]} setBlock={setBlocColor} name={colorsNames[26]} />
                            <OptionColor text={"Рубаха. Перекладина 2"} textAs={"Как 1"} color={colors[23]} number={23} setColor={setColor} block={blockColor[23]} setBlock={setBlocColor} name={colorsNames[23]} />
                            <OptionColor text={"Рубаха. Фон текст 2"} textAs={"Как 1"} color={colors[15]} number={15} setColor={setColor} block={blockColor[15]} setBlock={setBlocColor} name={colorsNames[15]} />
                            <OptionColor text={"Рубаха. Заголовок 2"} textAs={"Как текст 1"} color={colors[30]} number={30} setColor={setColor} block={blockColor[30]} setBlock={setBlocColor} name={colorsNames[30]} />
                            <OptionColor text={"Рубаха. Текст 2"} textAs={"Как 1"} color={colors[27]} number={27} setColor={setColor} block={blockColor[27]} setBlock={setBlocColor} name={colorsNames[27]} />
                            <OptionColor text={"Рубаха. Перекладина 3"} textAs={"Как 1"} color={colors[24]} number={24} setColor={setColor} block={blockColor[24]} setBlock={setBlocColor} name={colorsNames[24]} />
                            <OptionColor text={"Рубаха. Фон текст 3"} textAs={"Как 1"} color={colors[16]} number={16} setColor={setColor} block={blockColor[16]} setBlock={setBlocColor} name={colorsNames[16]} />
                            <OptionColor text={"Рубаха. Заголовок 3"} textAs={"Как 2"} color={colors[31]} number={31} setColor={setColor} block={blockColor[31]} setBlock={setBlocColor} name={colorsNames[31]} />
                            <OptionColor text={"Рубаха. Текст 3"} textAs={"Как 1"} color={colors[28]} number={28} setColor={setColor} block={blockColor[28]} setBlock={setBlocColor} name={colorsNames[28]} />
                            <OptionColor text={"Рубаха. Перекладина 4"} textAs={"Как 1"} color={colors[25]} number={25} setColor={setColor} block={blockColor[25]} setBlock={setBlocColor} name={colorsNames[25]} />
                            <OptionColor text={"Рубаха. Фон текст 4"} textAs={"Как 1"} color={colors[17]} number={17} setColor={setColor} block={blockColor[17]} setBlock={setBlocColor} name={colorsNames[17]} />
                            <OptionColor text={"Рубаха. Заголовок 4"} textAs={"Как 2"} color={colors[32]} number={32} setColor={setColor} block={blockColor[32]} setBlock={setBlocColor} name={colorsNames[32]} />
                            <OptionColor text={"Рубаха. Текст 4"} textAs={"Как 1"} color={colors[29]} number={29} setColor={setColor} block={blockColor[29]} setBlock={setBlocColor} name={colorsNames[29]} />
                            <OptionColor text={"Рубаха. Фон подписи"} textAs={"Как лицо"} color={colors[18]} number={18} setColor={setColor} block={blockColor[18]} setBlock={setBlocColor} name={colorsNames[18]} />
                            <OptionColor text={"Рубаха. Текст подписи"} textAs={"Как лицо"} color={colors[19]} number={19} setColor={setColor} block={blockColor[19]} setBlock={setBlocColor} name={colorsNames[19]} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Размеры полей'} targetThis={targetOption[6]} setTarget={setTarget} number={6}>
                        <div>
                            <OptionSize text={"Лицо. Заголовок"} size={sizePole[0]} number={0} setSize={setSizePole} min={0} max={99} block={blockSizePole[0]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Лицо. Подпись"} size={sizePole[1]} number={1} setSize={setSizePole} min={0} max={49} block={blockSizePole[1]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Рубаха. Заголовок"} textAs={"Как лицо"} size={sizePole[2]} number={2} setSize={setSizePole} min={0} max={49} block={blockSizePole[2]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Рубаха. Подзаголовок"} size={sizePole[3]} number={3} setSize={setSizePole} min={0} max={49} block={blockSizePole[3]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Рубаха. Статы"} size={sizePole[4]} number={4} setSize={setSizePole} min={0} max={449} block={blockSizePole[4]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Рубаха. Перекладина 0"} size={sizePole[13]} number={13} setSize={setSizePole} min={0} max={49} block={blockSizePole[13]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Рубаха. Навыки"} size={sizePole[5]} number={5} setSize={setSizePole} min={0} max={49} block={blockSizePole[5]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Рубаха. Перекладина 1"} size={sizePole[6]} number={6} setSize={setSizePole} min={0} max={49} block={blockSizePole[6]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Рубаха. Перекладина 2"} textAs={"Как 1"} size={sizePole[7]} number={7} setSize={setSizePole} min={0} max={49} block={blockSizePole[7]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Рубаха. Перекладина 3"} textAs={"Как 1"} size={sizePole[8]} number={8} setSize={setSizePole} min={0} max={49} block={blockSizePole[8]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Рубаха. Перекладина 4"} textAs={"Как 1"} size={sizePole[9]} number={9} setSize={setSizePole} min={0} max={49} block={blockSizePole[9]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Рубаха. Подпись"} textAs={"Как лицо"} size={sizePole[10]} number={10} setSize={setSizePole} min={0} max={49} block={blockSizePole[10]} setBlock={setBlocSizePole} />
                            <div className={style.NumbersExists}><div className={style.Exists} onClick={() => { setLineCut(!lineCut) }}> {"___"} {lineCut && <div />}</div> <p>{"Линия разрезки (лицо)"}</p> </div>
                            <OptionSize text={"мм Высота листа"} size={sizePole[11]} number={11} setSize={setSizePole} min={50} max={500} block={blockSizePole[11]} setBlock={setBlocSizePole} />
                            <OptionSize text={"мм Ширина листа"} size={sizePole[12]} number={12} setSize={setSizePole} min={50} max={500} block={blockSizePole[12]} setBlock={setBlocSizePole} />
                            <div className={style.ButtonMinMax} onClick={() => {
                                const A = { ...sizePole };
                                A[17] = 297;
                                A[18] = 210;
                                setSizesPole(A);
                            }}>
                                <div>Вернуть А4</div>
                            </div>
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Размеры текста'} targetThis={targetOption[7]} setTarget={setTarget} number={7}>
                        <div>
                            <div className={style.FontChose}><div>№ <input type="number" name="" id="" value={targetFont1} min={0} max={19} onChange={(e) => { setTargetFont1(Number(e.target.value)) }} />{"Шрифта "}</div>{fontMas[targetFont1]}</div>
                            <OptionSize text={"Лицо. Заголовок"} size={sizeText[0]} number={0} setSize={setSizeText} min={0} max={99} block={blockSizeText[0]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Лицо. Описание"} size={sizeText[1]} number={1} setSize={setSizeText} min={0} max={99} block={blockSizeText[1]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Лицо. Подпись"} size={sizeText[2]} number={2} setSize={setSizeText} min={0} max={99} block={blockSizeText[2]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Рубаха. Заголовок"} textAs={"Как лицо"} size={sizeText[3]} number={3} setSize={setSizeText} min={0} max={99} block={blockSizeText[3]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Рубаха. Подзаголовок"} size={sizeText[4]} number={4} setSize={setSizeText} min={0} max={99} block={blockSizeText[4]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Хар 1.Заголовок"} size={sizeText[5]} number={5} setSize={setSizeText} min={0} max={99} block={blockSizeText[5]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Хар 1.Текст"} size={sizeText[6]} number={6} setSize={setSizeText} min={0} max={99} block={blockSizeText[6]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Хар 2.Заголовок"} textAs={"Как 1"} size={sizeText[7]} number={7} setSize={setSizeText} min={0} max={99} block={blockSizeText[7]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Хар 2.Текст"} textAs={"Как 1"} size={sizeText[8]} number={8} setSize={setSizeText} min={0} max={99} block={blockSizeText[8]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Хар 3.Заголовок"} textAs={"Как 1"} size={sizeText[9]} number={9} setSize={setSizeText} min={0} max={99} block={blockSizeText[9]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Хар 3.Текст"} textAs={"Как 1"} size={sizeText[10]} number={10} setSize={setSizeText} min={0} max={99} block={blockSizeText[10]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Хар 4.Заголовок"} textAs={"Как 1"} size={sizeText[11]} number={11} setSize={setSizeText} min={0} max={99} block={blockSizeText[11]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Хар 4.Текст"} textAs={"Как 1"} size={sizeText[12]} number={12} setSize={setSizeText} min={0} max={99} block={blockSizeText[12]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Стат 1.Заголовок"} size={sizeText[13]} number={13} setSize={setSizeText} min={0} max={99} block={blockSizeText[13]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Стат 1.Текст"} size={sizeText[14]} number={14} setSize={setSizeText} min={0} max={99} block={blockSizeText[14]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Стат 2.Заголовок"} textAs={"Как 1"} size={sizeText[15]} number={15} setSize={setSizeText} min={0} max={99} block={blockSizeText[15]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Стат 2.Текст"} textAs={"Как 1"} size={sizeText[16]} number={16} setSize={setSizeText} min={0} max={99} block={blockSizeText[16]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Стат 3.Заголовок"} textAs={"Как 1"} size={sizeText[17]} number={17} setSize={setSizeText} min={0} max={99} block={blockSizeText[17]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Стат 3.Текст"} textAs={"Как 1"} size={sizeText[18]} number={18} setSize={setSizeText} min={0} max={99} block={blockSizeText[18]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Стат 4.Заголовок"} textAs={"Как 1"} size={sizeText[19]} number={19} setSize={setSizeText} min={0} max={99} block={blockSizeText[19]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Стат 4.Текст"} textAs={"Как 1"} size={sizeText[20]} number={20} setSize={setSizeText} min={0} max={99} block={blockSizeText[20]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Стат 5.Заголовок"} textAs={"Как 1"} size={sizeText[21]} number={21} setSize={setSizeText} min={0} max={99} block={blockSizeText[21]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Стат 5.Текст"} textAs={"Как 1"} size={sizeText[22]} number={22} setSize={setSizeText} min={0} max={99} block={blockSizeText[22]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Стат 6.Заголовок"} textAs={"Как 1"} size={sizeText[23]} number={23} setSize={setSizeText} min={0} max={99} block={blockSizeText[23]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Стат 6.Текст"} textAs={"Как 1"} size={sizeText[24]} number={24} setSize={setSizeText} min={0} max={99} block={blockSizeText[24]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Заголовок 2"} size={sizeText[26]} number={26} setSize={setSizeText} min={0} max={99} block={blockSizeText[26]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Заголовок 3"} textAs={"Как 2"} size={sizeText[27]} number={27} setSize={setSizeText} min={0} max={99} block={blockSizeText[27]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Заголовок 4"} textAs={"Как 2"} size={sizeText[28]} number={28} setSize={setSizeText} min={0} max={99} block={blockSizeText[28]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Рубаха. Подпись"} textAs={"Как лицо"} size={sizeText[25]} number={25} setSize={setSizeText} min={0} max={99} block={blockSizeText[25]} setBlock={setBlocSizeText} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Положение текста'} targetThis={targetOption[8]} setTarget={setTarget} number={8}>
                        <div>
                            <OptionAllain text={"Лицо. Заголовок"} value={alignValue[0]} number={0} setValue={setAlignsValue} block={blockAlignValue[0]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Лицо. Описание"} value={alignValue[1]} number={1} setValue={setAlignsValue} block={blockAlignValue[1]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Лицо. Подпись"} value={alignValue[2]} number={2} setValue={setAlignsValue} block={blockAlignValue[2]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Рубаха. Заголовок"} value={alignValue[3]} number={3} setValue={setAlignsValue} block={blockAlignValue[3]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Рубаха. Подзаголовок"} value={alignValue[4]} number={4} setValue={setAlignsValue} block={blockAlignValue[4]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Стат 1"} value={alignValue[13]} number={13} setValue={setAlignsValue} block={blockAlignValue[13]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Стат 2"} value={alignValue[14]} number={14} setValue={setAlignsValue} block={blockAlignValue[14]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Стат 3"} value={alignValue[15]} number={15} setValue={setAlignsValue} block={blockAlignValue[15]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Стат 4"} value={alignValue[16]} number={16} setValue={setAlignsValue} block={blockAlignValue[16]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Скил 1 заголовок"} value={alignValue[17]} number={17} setValue={setAlignsValue} block={blockAlignValue[17]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Скил 1 значение"} value={alignValue[23]} number={23} setValue={setAlignsValue} block={blockAlignValue[23]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Скил 2 заголовок"} value={alignValue[18]} number={18} setValue={setAlignsValue} block={blockAlignValue[18]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Скил 2 значение"} value={alignValue[24]} number={24} setValue={setAlignsValue} block={blockAlignValue[24]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Скил 3 заголовок"} value={alignValue[19]} number={19} setValue={setAlignsValue} block={blockAlignValue[19]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Скил 3 значение"} value={alignValue[25]} number={25} setValue={setAlignsValue} block={blockAlignValue[25]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Скил 4 заголовок"} value={alignValue[20]} number={20} setValue={setAlignsValue} block={blockAlignValue[20]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Скил 4 значение"} value={alignValue[26]} number={26} setValue={setAlignsValue} block={blockAlignValue[26]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Скил 5 заголовок"} value={alignValue[21]} number={21} setValue={setAlignsValue} block={blockAlignValue[21]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Скил 5 значение"} value={alignValue[27]} number={27} setValue={setAlignsValue} block={blockAlignValue[27]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Скил 6 заголовок"} value={alignValue[22]} number={22} setValue={setAlignsValue} block={blockAlignValue[22]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Скил 6 значение"} value={alignValue[28]} number={28} setValue={setAlignsValue} block={blockAlignValue[28]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Рубаха. Текст 1"} value={alignValue[6]} number={6} setValue={setAlignsValue} block={blockAlignValue[6]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Рубаха. Заголовок 2"} value={alignValue[10]} number={10} setValue={setAlignsValue} block={blockAlignValue[10]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Рубаха. Текст 2"} value={alignValue[7]} number={7} setValue={setAlignsValue} block={blockAlignValue[7]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Рубаха. Заголовок 3"} value={alignValue[11]} number={11} setValue={setAlignsValue} block={blockAlignValue[11]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Рубаха. Текст 3"} value={alignValue[8]} number={8} setValue={setAlignsValue} block={blockAlignValue[8]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Рубаха. Заголовок 4"} value={alignValue[12]} number={12} setValue={setAlignsValue} block={blockAlignValue[12]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Рубаха. Текст 4"} value={alignValue[9]} number={9} setValue={setAlignsValue} block={blockAlignValue[9]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Рубаха. Подпись"} value={alignValue[5]} number={5} setValue={setAlignsValue} block={blockAlignValue[5]} setBlock={setBlocAlignValue} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Отступы'} targetThis={targetOption[9]} setTarget={setTarget} number={9}>
                        <div>
                            <OptionSize text={"Верхнее поле листа"} size={paddingText[0]} number={0} setSize={setPaddinText} min={0} max={400} block={blockPaddingText[0]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Боковые поля листа"} size={paddingText[1]} number={1} setSize={setPaddinText} min={0} max={400} block={blockPaddingText[1]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Нижнее поле листа"} size={paddingText[2]} number={2} setSize={setPaddinText} min={0} max={400} block={blockPaddingText[2]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Обводка карточки верх"} size={paddingText[3]} number={3} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[3]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Обводка карточки право"} size={paddingText[4]} number={4} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[4]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Обводка карточки низ"} size={paddingText[5]} number={5} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[5]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Обводка карточки лево"} size={paddingText[6]} number={6} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[6]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Заголовок"} size={paddingText[7]} number={7} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[7]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Описание верх"} size={paddingText[8]} number={8} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[8]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Описание право"} size={paddingText[9]} number={9} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[9]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Описание низ"} size={paddingText[10]} number={10} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[10]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Описание лево"} size={paddingText[11]} number={11} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[11]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Подпись"} size={paddingText[12]} number={12} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[12]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Обвод верх"} textAs={"Как лицо"} size={paddingText[13]} number={13} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[13]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Обвод право"} textAs={"Как лицо"} size={paddingText[14]} number={14} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[14]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Обвод низ"} textAs={"Как лицо"} size={paddingText[15]} number={15} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[15]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Обвод лево"} textAs={"Как лицо"} size={paddingText[16]} number={16} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[16]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Между описанием"} size={paddingText[52]} number={52} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[52]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Заголовок"} textAs={"Как лицо"} size={paddingText[17]} number={17} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[17]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Подзаголовок"} size={paddingText[18]} number={18} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[18]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Статы верх"} size={paddingText[19]} number={19} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[19]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Статы право"} size={paddingText[20]} number={20} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[20]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Статы низ"} size={paddingText[21]} number={21} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[21]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Статы лево"} size={paddingText[22]} number={22} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[22]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Стат 1 заголовок право"} size={paddingText[23]} number={23} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[23]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Стат 2 заголовок право"} textAs={"Как 1"} size={paddingText[24]} number={24} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[24]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Стат 3 заголовок право"} textAs={"Как 1"} size={paddingText[25]} number={25} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[25]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Стат 4 заголовок право"} textAs={"Как 1"} size={paddingText[26]} number={26} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[26]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Стат 1 заголовок лево"} size={paddingText[27]} number={27} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[27]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Стат 2 заголовок лево"} textAs={"Как 1"} size={paddingText[28]} number={28} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[28]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Стат 3 заголовок лево"} textAs={"Как 1"} size={paddingText[29]} number={29} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[29]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Стат 4 заголовок лево"} textAs={"Как 1"} size={paddingText[30]} number={30} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[30]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Стат 1 текст право"} size={paddingText[31]} number={31} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[31]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Стат 2 текст право"} textAs={"Как 1"} size={paddingText[32]} number={32} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[32]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Стат 3 текст право"} textAs={"Как 1"} size={paddingText[33]} number={33} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[33]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Стат 4 текст право"} textAs={"Как 1"} size={paddingText[34]} number={34} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[34]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Стат 1 текст лево"} size={paddingText[35]} number={35} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[35]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Стат 2 текст лево"} textAs={"Как 1"} size={paddingText[36]} number={36} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[36]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Стат 3 текст лево"} textAs={"Как 1"} size={paddingText[37]} number={37} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[37]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Стат 4 текст лево"} textAs={"Как 1"} size={paddingText[38]} number={38} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[38]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Скилы верх"} size={paddingText[39]} number={39} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[39]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Скилы право"} size={paddingText[40]} number={40} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[40]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Скилы низ"} size={paddingText[41]} number={41} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[41]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Скилы лево"} size={paddingText[42]} number={42} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[42]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Заголовок верх"} size={paddingText[43]} number={43} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[43]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Заголовок право"} size={paddingText[44]} number={44} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[44]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Заголовок низ"} size={paddingText[45]} number={45} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[45]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Заголовок лево"} size={paddingText[46]} number={46} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[46]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Описание верх"} size={paddingText[47]} number={47} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[47]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Описание право"} size={paddingText[48]} number={48} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[48]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Описание низ"} size={paddingText[49]} number={49} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[49]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Описание лево"} size={paddingText[50]} number={50} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[50]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Подпись"} textAs={"Как лицо"} size={paddingText[51]} number={51} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[51]} setBlock={setBlocPaddingText} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Округлости'} targetThis={targetOption[10]} setTarget={setTarget} number={10}>
                        <div>
                            <OptionSize text={"Лицо. Заголовок ┌"} size={borderRadiusValue[0]} number={0} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[0]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Заголовок ┐"} textAs={"как ┌"} size={borderRadiusValue[1]} number={1} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[1]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Заголовок ┘"} textAs={"как ┌"} size={borderRadiusValue[2]} number={2} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[2]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Заголовок └"} textAs={"как ┌"} size={borderRadiusValue[3]} number={3} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[3]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Внутри ┌"} size={borderRadiusValue[4]} number={4} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[4]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Внутри ┐"} textAs={"как ┌"} size={borderRadiusValue[5]} number={5} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[5]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Внутри ┘"} textAs={"как ┌"} size={borderRadiusValue[6]} number={6} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[6]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Внутри └"} textAs={"как ┌"} size={borderRadiusValue[7]} number={7} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[7]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Подпись ┌"} size={borderRadiusValue[8]} number={8} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[8]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Подпись ┐"} textAs={"как ┌"} size={borderRadiusValue[9]} number={9} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[9]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Подпись ┘"} textAs={"как ┌"} size={borderRadiusValue[10]} number={10} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[10]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Подпись └"} textAs={"как ┌"} size={borderRadiusValue[11]} number={11} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[11]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Заголовок ┌"} size={borderRadiusValue[12]} number={12} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[12]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Заголовок ┐"} textAs={"как ┌"} size={borderRadiusValue[13]} number={13} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[13]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Заголовок ┘"} textAs={"как ┌"} size={borderRadiusValue[14]} number={14} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[14]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Заголовок └"} textAs={"как ┌"} size={borderRadiusValue[15]} number={15} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[15]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Подзаголовок ┌"} size={borderRadiusValue[16]} number={16} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[16]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Подзаголовок ┐"} textAs={"как ┌"} size={borderRadiusValue[17]} number={17} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[17]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Подзаголовок ┘"} textAs={"как ┌"} size={borderRadiusValue[18]} number={18} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[18]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Подзаголовок └"} textAs={"как ┌"} size={borderRadiusValue[19]} number={19} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[19]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Внутри1 ┌"} size={borderRadiusValue[20]} number={20} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[20]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Внутри1 ┐"} textAs={"как ┌"} size={borderRadiusValue[21]} number={21} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[21]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Внутри1 ┘"} textAs={"как ┌"} size={borderRadiusValue[22]} number={22} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[22]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Внутри1 └"} textAs={"как ┌"} size={borderRadiusValue[23]} number={23} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[23]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Внутри2 ┌"} size={borderRadiusValue[28]} number={28} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[28]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Внутри2 ┐"} textAs={"как ┌"} size={borderRadiusValue[29]} number={29} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[29]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Внутри2 ┘"} textAs={"как ┌"} size={borderRadiusValue[30]} number={30} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[30]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Внутри2 └"} textAs={"как ┌"} size={borderRadiusValue[31]} number={31} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[31]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Подпись ┌"} size={borderRadiusValue[24]} number={24} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[24]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Подпись ┐"} textAs={"как ┌"} size={borderRadiusValue[25]} number={25} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[25]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Подпись ┘"} textAs={"как ┌"} size={borderRadiusValue[26]} number={26} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[26]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Подпись └"} textAs={"как ┌"} size={borderRadiusValue[27]} number={27} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[27]} setBlock={setBlocBorderRadius} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Подгонка описания'} targetThis={targetOption[11]} setTarget={setTarget} number={11}>
                        <div>
                            <OptionSize text={"% Высота строки (от 0 до 200)"} size={sizeText[29]} number={29} setSize={setSizeText} min={0} max={200} block={blockSizeText[29]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Минимальный размер"} size={minMax[0]} number={0} setSize={setMinMaxs} min={0} max={blockMinMax ? 99 : minMax[1]} block={false} setBlock={setBlocMinMax} />
                            <OptionSize textAs={"Как минимум"} text={"Максимум"} size={minMax[1]} number={1} setSize={setMinMaxs} min={minMax[0]} max={99} block={blockMinMax} setBlock={setBlocMinMax} />
                            <div className={style.ButtonMinMax} onClick={() => {
                                setStartPerepolnen(startPerepolnen + 1);
                            }}>
                                <div>Подогнать текст под параметры</div>
                            </div>
                            <div className={style.Perepolnen}>
                                {perepolnenText}
                            </div>
                        </div>
                    </OptionCase>
                </div>
            </div>
            {!showRedactor
                ? <Setting className={style.RedactorSetting} onClick={() => { setShowRedactor(true); }} />
                : null}
            <div className={style.RedactorAll + ' ' + (showOptions ? '' : style.BigWidth)}>
                {isCSVRedactor
                    ? <div className={style.CSVLine}>
                        <div className={style.InputPlace}>
                            <div className={style.Title}>Текущая строка</div>
                            <div className={style.CSVText}>
                                <input type="text" name="" id="" value={newCSV} onChange={(e) => { setNewCSV(e.target.value); }} />
                            </div>
                            <div className={style.Buttons}>
                                <div>
                                    <div className={style.Download} onClick={() => {
                                        let R = '';
                                        const A: string[] = [...cards[Number((document.getElementById('CTRLC') as HTMLInputElement)?.value)]];
                                        for (let i = 0; i < 35; i++) R = R + '\"' + A[i].replaceAll('\"', '\"\"').replaceAll('\n', 'Џ') + '\"' + ';';
                                        R = getCardFromCSVLine(R, A, 0, R.length - 1, '');
                                        setNewCSV(R);
                                        setNewCard(A);
                                    }}>
                                        Вставить сюда карточку №
                                    </div>
                                    <input min={0} max={cards.length - 1} type="number" name="" id="CTRLC" defaultValue={0} /></div>
                                <div className={style.Download} onClick={() => { setNewCSV(newConst); }}>Очистить карточку</div>
                                <div>
                                    <div className={style.Download} onClick={() => {
                                        let num = Number((document.getElementById('CTRLV') as HTMLInputElement)?.value);
                                        let afterNum = 0;
                                        while (num >= 0) {
                                            afterNum = CSV.indexOf('\n', afterNum + 1);
                                            num--;
                                        }
                                        if (afterNum == -1) setCSV(CSV + '\n' + newCSV);
                                        else if (afterNum == 0) setCSV(newCSV + '\n' + CSV);
                                        else {
                                            afterNum++;
                                            setCSV(CSV.slice(0, afterNum) + newCSV + '\n' + CSV.slice(afterNum, CSV.length));
                                        }
                                        setMakeCSV(makeCSV + 1);
                                        (document.getElementById('CTRLV') as HTMLInputElement).value = String(cards.length);
                                    }}>Вставить новую карточку после карточки №</div>
                                    <input type="number" min={-1} max={cards.length - 1} name="" id={'CTRLV'} defaultValue={cards.length - 1} />
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
                }
                <div className={style.Redactor + ' ' + (showRedactor ? '' : style.HideWindow)}>
                    <div className={style.Hide}> <div className={style.Text} onClick={() => { setShowRedactor(false); }}>Скрыть</div> </div>
                    <div className={style.RedactorCase}>
                        <div className={style.Base}>
                            <div className={style.Title}>База</div>
                            <div className={style.BaseTips}>
                                <BaseTipCase name={"Dnd5 (dnd.su)"} number={0} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                    <>
                                        <BaseTipCase name={"Все классы"} number={112} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все истоки"} number={116} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, -1], [1, -1], [2, -1], [3, -1], [4, -1], [5, -1], [6, -1], [7, -1], [8, -1], [9, -1]]} nameCard={''} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, -1]]} nameCard={''} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, -1]]} nameCard={''} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, -1]]} nameCard={''} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, -1]]} nameCard={''} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, -1]]} nameCard={''} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, -1]]} nameCard={''} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, -1]]} nameCard={''} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, -1]]} nameCard={''} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, -1]]} nameCard={''} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, -1]]} nameCard={''} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                    </>
                                </BaseTipCase>
                            </div>
                        </div>
                        <div className={style.InputPlace}>
                            <div className={style.Title}>CSV</div>
                            <div className={style.CSVText}>
                                <textarea value={CSV} name="CSVText" id="CSVText" wrap='off' onChange={(e) => { setCSV(e.target.value); }} />
                            </div>
                            <div className={style.Buttons}>
                                <input className={style.DownloadInput} type="file" id="InputFile" onChange={readFile} />
                                <label className={style.Download} htmlFor="InputFile">Загрузить файл</label>
                                <div className={style.Obnova}>
                                    <div className={style.Download} onClick={() => { setMakeCSV(makeCSV + 1); }}>Обновить карточки</div>
                                    {needUpdate ? <div className={style.NeedUpdate}>!</div> : null}
                                </div>
                                <div className={style.Download} onClick={downloadFile}>Скачать файл</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                !isCSVRedactor
                    ? <div className={style.Lists + ' ' + (showRedactor ? style.ListDown : '') + ' ' + (showOptions ? style.ListRigth : '')}> {getCards()} </div>
                    : <div className={style.AroundTwoCards + (showOptions ? ' ' + style.AddPadRig : '')}>
                        <div className={style.TwoCards}>
                            <div className={style.OneCard}><CardCreature targetFont={String(fontMas[targetFont1])} keyt={-1} Pole={newCard} cardImg={String(getBackCardImg(newCard[1]))} svitok={String(getSvitokCardImg(newCard[2]))} /></div>
                            <div className={style.OneCard}><CardCreature doubleBack={doubleBack} targetFont={String(fontMas[targetFont1])} isBack={true} keyt={-1} startPerepolnen={startPerepolnen} plusPerepolnen={plusPerepolnen} minMax={minMax} Pole={newCard} /></div>
                            <div className={style.CardSelection}>
                                <div>
                                    <input placeholder='Заголовок лицо' type="text" value={newCard[0]} onChange={(e) => { const A = newCard; A[0] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Картинка' type="text" value={newCard[1]} onChange={(e) => { const A = newCard; A[1] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Свиток' type="text" value={newCard[2]} onChange={(e) => { const A = newCard; A[2] = e.target.value; setPoles(A) }} />
                                    <textarea placeholder='Краткое описание' rows={4} value={newCard[3]} onChange={(e) => { const A = newCard; A[3] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Подпись лицо' type="text" value={newCard[4]} onChange={(e) => { const A = newCard; A[4] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Заголовок рубаха' type="text" value={newCard[5]} onChange={(e) => { const A = newCard; A[5] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Подзаголовок рубаха' type="text" value={newCard[6]} onChange={(e) => { const A = newCard; A[6] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Стат 1 заголовок' type="text" value={newCard[7]} onChange={(e) => { const A = newCard; A[7] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Стат 1 значение' type="text" value={newCard[8]} onChange={(e) => { const A = newCard; A[8] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Стат 2 заголовок' type="text" value={newCard[9]} onChange={(e) => { const A = newCard; A[9] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Стат 2 значение' type="text" value={newCard[10]} onChange={(e) => { const A = newCard; A[10] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Стат 3 заголовок' type="text" value={newCard[11]} onChange={(e) => { const A = newCard; A[11] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Стат 3 значение' type="text" value={newCard[12]} onChange={(e) => { const A = newCard; A[12] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Стат 4 заголовок' type="text" value={newCard[13]} onChange={(e) => { const A = newCard; A[13] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Стат 4 значение' type="text" value={newCard[14]} onChange={(e) => { const A = newCard; A[14] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Скил 1 заголовок' type="text" value={newCard[15]} onChange={(e) => { const A = newCard; A[15] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Скил 1 значение' type="text" value={newCard[16]} onChange={(e) => { const A = newCard; A[16] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Скил 2 заголовок' type="text" value={newCard[17]} onChange={(e) => { const A = newCard; A[17] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Скил 2 значение' type="text" value={newCard[18]} onChange={(e) => { const A = newCard; A[18] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Скил 3 заголовок' type="text" value={newCard[19]} onChange={(e) => { const A = newCard; A[19] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Скил 3 значение' type="text" value={newCard[20]} onChange={(e) => { const A = newCard; A[20] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Скил 4 заголовок' type="text" value={newCard[21]} onChange={(e) => { const A = newCard; A[21] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Скил 4 значение' type="text" value={newCard[22]} onChange={(e) => { const A = newCard; A[22] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Скил 5 заголовок' type="text" value={newCard[23]} onChange={(e) => { const A = newCard; A[23] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Скил 5 значение' type="text" value={newCard[24]} onChange={(e) => { const A = newCard; A[24] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Скил 6 заголовок' type="text" value={newCard[25]} onChange={(e) => { const A = newCard; A[25] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Скил 6 значение' type="text" value={newCard[26]} onChange={(e) => { const A = newCard; A[26] = e.target.value; setPoles(A) }} />
                                </div>

                                <div>
                                    <textarea placeholder='Текст 1' rows={7} value={newCard[27]} onChange={(e) => { const A = newCard; A[27] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Заголовок 2' type="text" value={newCard[28]} onChange={(e) => { const A = newCard; A[28] = e.target.value; setPoles(A) }} />
                                    <textarea placeholder='Текст 2' rows={7} value={newCard[29]} onChange={(e) => { const A = newCard; A[29] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Заголовок 3' type="text" value={newCard[30]} onChange={(e) => { const A = newCard; A[30] = e.target.value; setPoles(A) }} />
                                    <textarea placeholder='Текст 3' rows={7} value={newCard[31]} onChange={(e) => { const A = newCard; A[31] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Заголовок 4' type="text" value={newCard[32]} onChange={(e) => { const A = newCard; A[32] = e.target.value; setPoles(A) }} />
                                    <textarea placeholder='Текст 4' rows={7} value={newCard[33]} onChange={(e) => { const A = newCard; A[33] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Подпись' type="text" value={newCard[34]} onChange={(e) => { const A = newCard; A[34] = e.target.value; setPoles(A) }} />
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}
export default SpellMain;