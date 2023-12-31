import cn from "classnames";
import styles from "./DetailsCollection.module.sass";
import Icon from "@/components/Icon";


type DetailsType = {
    label: string;
    value: string;
};

type DetailsProps = {
    details: DetailsType[];
};

const Details = ({ details }: DetailsProps) => {
    return (
        <div className={styles.details}>
            <div className={styles.head}>
                <div className={styles.box}>
                    <div className={cn("h2", styles.user)}>Good Vibes</div>
                    <div className={styles.line}>
                        <div className={styles.category}>GVO</div>
                        <div className={styles.code}>
                            0xE5A1....D0306
                            <button className={styles.copy}>
                                <Icon name="copy" />
                            </button>
                        </div>
                    </div>
                </div>
                <button
                    className={cn(
                        "button-stroke-grey button-medium",
                        styles.button
                    )}
                >
                    <span>edit</span>
                    <Icon name="edit" />
                </button>
            </div>
            <div className={styles.list}>
                {details.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={styles.label}>
                            <Icon name="profile-fat" />
                            {item.label}
                        </div>
                        <div className={cn("h4", styles.value)}>
                            {item.value}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.foot}>
                <div className={styles.stage}>Description</div>
                <div className={styles.content}>
                Art Blocks Engine to build on the momentum of generative minting. Our team can focus on storytelling, community, and culture. Art Blocks Engine does the magic in the backend. Each piece in this collection is a testament to the power of procedural generation, a form of digital alchemy where simple algorithms and parameters are transmuted into intricate, mesmerizing patterns. Drawing inspiration from the demoscene subculture and the generative works of composers like Mozart, this series pushes the boundaries of what is possible with code and creativity. Each artwork is not just a static image, but a snapshot of a dynamic system, a moment frozen in a sea of algorithmic potential. As we explore this series, remember that every swirl of color, every radiant line, and every intricate pattern is the result of a dance between randomness and rules, chaos and order.
                </div>
            </div>
        </div>
    );
};

export default Details;
