import Heading from "@/components/ui/Heading/Heading";
import Carousel from "./components/Carousel/Carousel";
import styles from "./Main.module.scss";
import Subtitle from "@/components/ui/Subtitle/Subtitle";

import AboutImage from "@/assets/images/about-1.png";
import Preference3 from "@/assets/images/preference-3.png";
import Carousel2 from "@/assets/images/carousel-2.png";

import MpguLogo from "@/assets/images/mpgu-logo.png";

import Image from "next/image";
import Heading2 from "@/components/ui/Heading2/Heading2";
import Paragraph from "@/components/ui/Paragraph/Paragraph";
import Preferences from "./components/Preferences/Preferences";
import Button from "./components/Button/Button";

interface IProps {
  fullNameId: string;
  fullName: string;
  isInvitationAccepted: boolean;
}

const MainPage = (props: IProps) => {
  const { fullNameId, fullName, isInvitationAccepted } = props;
  return (
    <div className={styles.page}>
      <div className={styles.carouselWrapper}>
        <Carousel />
        <section className={styles.offerBlock}>
          <div className="container">
            <div className={styles.offerBlockContent}>
              <Heading variant="white">Привет, {fullName}!</Heading>
              <Heading2 variant="white">
                Рады пригласить тебя на открытый день рождения{" "}
                <span className={styles.accent}>СПО «Высота»</span>
              </Heading2>
            </div>
          </div>
        </section>
      </div>

      <main className={styles.pageContent}>
        <section className={styles.infoWrapper}>
          <div className="container">
            <div className={styles.info}>
              <div className={styles.infoLabel}>
                <Paragraph variant="white">
                  Мероприятие состоится 5 апреля по адресу{" "}
                  <a
                    href="https://yandex.ru/maps/-/CHFjnVzD"
                    title="Ссылка на адрес"
                  >
                    Грайвороновская улица, 25с8
                  </a>{" "}
                  с 16:00.
                </Paragraph>
              </div>
              <Paragraph variant="white" className={styles.infoText}>
                Вечер будет очень высокий и интересный
              </Paragraph>

              <div className={styles.infoCard}>
                <div className={styles.infoTextContainer}>
                  <p className={styles.infoText}>Развлекательная программа</p>
                </div>
                <div className={styles.infoImageContainer}>
                  <Image
                    src={AboutImage}
                    alt="СПО Высота"
                    className={styles.infoImage}
                  />
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoTextContainer}>
                  <p className={styles.infoText}>Встреча с давними друзьями</p>
                </div>
                <div className={styles.infoImageContainer}>
                  <Image
                    src={Preference3}
                    alt="СПО Высота"
                    className={styles.infoImage}
                  />
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoTextContainer}>
                  <p className={styles.infoText}>Уютная атмосфера</p>
                </div>
                <div className={styles.infoImageContainer}>
                  <Image
                    src={Carousel2}
                    alt="СПО Высота"
                    className={styles.infoImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Preferences />

        <div className="container">
          <div className={styles.question}>
            <Heading2 className={styles.questionHeading} variant="white">
              Будем очень рады видеть именно{" "}
              <span className={styles.questionLink}> тебя</span> у нас в гостях.
              Именно поэтому просим сообщить, сможешь ли ты присутствовать. Не
              забудь про подарок :) До встречи 🕊️
            </Heading2>
          </div>
        </div>
      </main>
      <div className={styles.buttons}>
        <Button
          fullNameId={fullNameId}
          isInvitationAccepted={isInvitationAccepted}
        />
      </div>
    </div>
  );
};

export default MainPage;
