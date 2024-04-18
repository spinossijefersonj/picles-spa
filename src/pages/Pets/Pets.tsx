import { Header } from "../../components/common/Header/Header";
import { Grid } from "../../components/layout/Grid";
import styles from './Pets.module.css'
import { Card } from "../../components/common/Card";
import { Skeleton } from "../../components/common/Skeleton";



export function Pets() {
    return (
        <Grid>
            <div className={styles.container}>
            <Header />
            <main className={styles.list}>
                <Skeleton count={5} containerClassName={styles.Skeleton}/>
                <Card href="/pets/1" text="nina" thumb=""/>
                <Card href="/pets/2" text="bob" thumb=""/>
                <Card href="/pets/3" text="joão" thumb=""/>
             </main>
            </div>
        </Grid>
    )
}