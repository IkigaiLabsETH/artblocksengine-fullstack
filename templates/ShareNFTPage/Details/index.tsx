import cn from "classnames";
import styles from "./Details.module.sass";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

type DetailsProps = {};

const Details = ({}: DetailsProps) => (
    <div className={styles.details}>
        <div className={styles.photo}>
            <Image
                src="/images/main-pic-1.jpg"
                layout="fill"
                objectFit="cover"
                alt="Good Vibes"
            />
        </div>
        <div className={cn("h3", styles.title)}>Ikigai</div>
        <div className={styles.item}>
            <div className={styles.preview}>
                <Image
                    src="/images/balls.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Good Vibes"
                />
            </div>
            <div className={styles.wrap}>
                <div className={styles.subtitle}>Good Vibes</div>
                <div className={styles.price}>12 NFTs</div>
            </div>
            <div className={styles.lines}></div>
        </div>
        <div className={styles.field}>
            <input
                className={styles.input}
                type="text"
                value="https://ikigai.livethelife.tv/nft/escape"
            />
            <button className={styles.copy}>
                <Icon name="copy" />
            </button>
        </div>
    </div>
);

export default Details;
