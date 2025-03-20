import Heading from "@/components/ui/Heading/Heading";
import styles from "./Main.module.scss";
import Image from "next/image";
import MaskImage from "@/assets/images/mask.jpg";
import Image2 from "@/assets/images/image2.jpg";
import Image3 from "@/assets/images/image3.jpg";

import Marquee from "@/components/shared/Marquee";
import Subtitle from "@/components/ui/Subtitle/Subtitle";
import Heading2 from "@/components/ui/Heading2/Heading2";
import clsx from "clsx";
import { useState } from "react";
import axios from "axios";
import invitationService from "@/services/invitation.service";
import AcceptButton from "./components/Button";

interface IProps {
  fullNameId: string;
  fullName: string;
  isInvitationAccepted: boolean;
}

const MainPage = (props: IProps) => {
  const { fullNameId, fullName, isInvitationAccepted } = props;

  return (
    <div className={styles.page}>
      <div className={styles.mainBlock}>
        <div className={styles.marqueeContainer}>
          <Marquee text="Приглашение" />
        </div>
        <div className="container">
          <div className={styles.mainBlockContent}>
            <Heading>СПО "Высота"</Heading>

            <div className={styles.mainBlockImage}>
              <Image src={MaskImage} alt="Картинка маски" />
            </div>

            <div className={styles.invitation}>
              <Heading2>{`Привет,`}</Heading2>
              <Heading2>{` ${fullName}`}</Heading2>
              <Subtitle className={styles.invitationText}>
                Рады пригласить тебя на открытый день рождения СПО «Высота» 🤍
              </Subtitle>
              <Subtitle className={styles.invitationText}>
                Этот день будет высоким, оставит тебе незабываемые эмоции и
                приятные воспоминания!
              </Subtitle>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondBlock}>
        <div className={styles.secondBlockGrid}>
          <div className={styles.secondBlockContent}>
            <div className={styles.secondBlockImage}>
              <Image src={Image2} alt="asjdc" fill />
            </div>
          </div>
          <div
            className={clsx(
              styles.secondBlockContent,
              styles.secondBlockTexted
            )}
          >
            <Heading2 variant="white" className={styles.whenTitle}>
              Когда?
            </Heading2>
            <Subtitle variant="white" className={styles.whenText}>
              5 апреля 2025 года
            </Subtitle>
          </div>
          <div
            className={clsx(
              styles.secondBlockContent,
              styles.secondBlockTexted
            )}
          >
            <Heading2 variant="white" className={styles.whenTitle}>
              Где?
            </Heading2>
            <Subtitle variant="white" className={styles.whenText}>
              <a
                href="https://yandex.ru/maps/-/CHFjnVzD"
                title="Ссылка на адрес"
              >
                Грайвороновская улица, 25с8
              </a>
            </Subtitle>
          </div>
          <div className={styles.secondBlockContent}>
            <div className={styles.secondBlockImage}>
              <Image src={Image3} alt="asjdc" fill />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thirdBlockWrapper}>
        <div className="container">
          <div className={styles.thirdBlock}>
            <Heading2 className={styles.thirdBlockTitle}>
              О программе мероприятия
            </Heading2>
            <p className={styles.thirdBlockStartTime}>16:00 Сбор гостей</p>
            <p className={styles.thirdBlockStartTime}>16:45 Начало</p>
            <p className={styles.thirdBlockStartTime}>20:00 Конец</p>
            <p className={styles.thirdBlockStartTime}>20:40 Прощаемся</p>
            <Subtitle className={styles.thirdBlockText}>
              Программа будет очень насыщенная и интересная, советуем не
              опаздывать, чтобы максимально насладиться духом нашего праздника.{" "}
            </Subtitle>
          </div>
        </div>
      </div>
      <div className={styles.fourthBlockWrapper}>
        <div className="container">
          <div className={styles.fourthBlock}>
            <Heading2 variant="black" className={styles.fourthBlockTitle}>
              О дресс-коде
            </Heading2>

            <Subtitle variant="black" className={styles.fourthBlockText}>
              Тематика дня рождения — высокое общество. Вечерние образы будут
              выглядеть очень кстати! А также не забудь запастись карнавальной
              маской. Палитра праздника ориентирована на голубой, синий,
              серебристый и белый.
            </Subtitle>
            <Subtitle variant="black" className={styles.fifthBlockText}>
              Все референсы можно найти по{" "}
              <a href="https://pin.it/fy0tBZE45" rel="nofollow">
                ссылке.
              </a>
            </Subtitle>
          </div>
        </div>
      </div>
      <div className={styles.fifthBlockWrapper}>
        <div className={styles.fifthBlock}>
          <Heading2 variant="black" className={styles.fifthhBlockTitle}>
            Ты придешь?
          </Heading2>

          <Subtitle variant="black" className={styles.fifthBlockText}>
            Будем очень рады видеть именно тебя у нас в гостях. Именно поэтому
            просим сообщить, сможешь ли ты присутствовать. И не забудь подарок!
          </Subtitle>
          <AcceptButton
            fullName={fullName}
            fullNameId={fullNameId}
            isInvitationAccepted={isInvitationAccepted}
          />
        </div>
      </div>
      <div className={styles.anotherDevice}>
        <Heading2 className={styles.anotherDeviceText}>
          Открой приглашение с телефона, пожалуйста!
        </Heading2>
      </div>
    </div>
  );
};

export default MainPage;
