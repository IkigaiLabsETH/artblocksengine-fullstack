import Link from "next/link";
import cn from "classnames";
import styles from "./Articles.module.sass";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Spinner from "@/components/Spinner";
// import GhostContentAPI from '@tryghost/content-api'
// const {slugify} = require('@tryghost/string');
// const slug = slugify('你好 👋!'); // slug === "ni-hao"

// import {tags, readingTime} from '@tryghost/helpers'
// // Outputs e.g. A 5 minute read.
// posts.forEach((post) => {
//    readingTime(post, {minute: 'A 1 minute read.', minutes: 'A % minute read.'});
// });
// Outputs e.g. Posted in: New Things, Releases, Features.
// posts.forEach((post) => {
//     tags(post, {prefix: 'Posted in: ', suffix: '.'});
// });

// DOCS https://ghost.org/docs/content-api/javascript/


type ArticlesProps = {
    items: any;
};

const Articles = ({ items }: ArticlesProps) => (
    <>
        <div className={styles.articles}>
            {items.map((item: any, index: number) => (
                <Link href={item.url} key={index}>
                    <a className={styles.item}>
                        <div className={styles.preview}>
                            <Image
                                src={item.image}
                                layout="fill"
                                objectFit="cover"
                                alt="Blog"
                            />
                            <div className={cn("button-large", styles.button)}>
                                <span>Continue reading</span>
                                <Icon name="arrow-right" />
                            </div>
                        </div>
                        <div className={styles.details}>
                            <div className={cn("h2", styles.title)}>
                                {item.title}
                            </div>
                            <div className={styles.author}>
                                <div
                                    className={cn(styles.avatar, {
                                        [styles.history]: item.history,
                                    })}
                                >
                                    <Image
                                        src={item.avatar}
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Blog"
                                    />
                                </div>
                                <div className={styles.wrap}>
                                    <div className={styles.name}>
                                        {item.author}
                                    </div>
                                    <div className={styles.date}>
                                        {item.date}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.content}>{item.content}</div>
                        </div>
                    </a>
                </Link>
            ))}
        </div>
        <div className={styles.btns}>
            <button className={cn("button-stroke-grey", styles.button)}>
                <span>load more</span>
                <Spinner className={styles.spinner} dark />
            </button>
        </div>
    </>
);

export default Articles;
