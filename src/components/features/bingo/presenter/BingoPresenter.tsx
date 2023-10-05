import {Button, Statistic, Segment, Grid} from "semantic-ui-react";


type Props = {
    currentNumber?: number;
    onPick: () => void;
}

export const BingoPresenter = ({currentNumber, onPick}: Props) => {
    return (
        <Grid columns={1} padded>
            <Grid.Row>
                <Grid.Column>
                    <Segment raised>
                        <Grid textAlign='center' columns={2} divided>
                            <Grid.Row>
                                <Grid.Column>
                                    {/*<Statistic>*/}
                                    {/*    <Statistic.Value>B</Statistic.Value>*/}
                                    {/*</Statistic>*/}
                                    <Statistic size='huge'>
                                        <Statistic.Value>{currentNumber}</Statistic.Value>
                                    </Statistic>
                                </Grid.Column>
                                <Grid.Column>
                                    <Button onClick={onPick}>PICK</Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column stretched>
                    <Segment raised>
                        ここにリスト
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
