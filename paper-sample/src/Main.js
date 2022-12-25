import React from "react"
import { ActivityIndicatorBase, SafeAreaView, ScrollView, StyleSheet } from "react-native"
import {
    Headline,
    Title,
    Subheading,
    Paragraph,
    Caption,
    Button,
    Card,
    Avatar,
} from "react-native-paper"

export const Main = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Headline>Paper紹介</Headline>
                <Title>タイトル</Title>

                <Subheading>Typography</Subheading>
                <Paragraph>これが段落です。</Paragraph>
                <Paragraph>
                    じゅげむじゅげむ　ごこうのすりきれ　かいじゃりすいぎょのすいぎょうまつうんらいまつふうらいまつ　くうねるところにすむところ　やぶらこうじのぶらこうじ　ぱいぽぱいぽぱいぽのしゅーりんがん　しゅーりんがんのぐーりんだい　ぐーりんだいのぽんぽこぴーのぽんぽこなのちょうきゅうめいのちょうすけ
                </Paragraph>
                <Caption>キャプションも書けます。</Caption>

                <Subheading>Button</Subheading>
                <Button>ふつうのボタン(Mode: text)</Button>
                <Button mode="contained" style={{ borderRadius: 12 }}>
                    containedなボタン
                </Button>
                <Button mode="outlined">outlinedなボタン</Button>

                <Subheading>Card</Subheading>
                <Card>
                    <Card.Cover source={require("../assets/Dream_TradingCard.jpg")} />
                    <Card.Title
                        title="Biometric SBT"
                        subtitle="ウォレットの本人確認"
                        left={(props) => <Avatar.Text {...props} label="SB" />}
                    />
                    <Card.Content>
                        <Paragraph>
                            安全なSSIを実現
                        </Paragraph>
                    </Card.Content>
                    <Card.Actions style={{ justifyContent: "flex-end"}}>
                        <Button>見ない</Button>
                        <Button>見る</Button>
                    </Card.Actions>
                </Card>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    contentContainer: {
        padding: 16,
    },
    button: {
        marginVertical: 8,
    },
})
