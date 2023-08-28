import { Button, Container, Grid, Typography } from '@mui/material'
import './App.scss'
import { useState } from 'react'
type Props = {}
type CurrencyType = {
    [id: string]: number
}

const App = (props: Props) => {
    const price = {
        'iPhone 12': 750,
        'iPhone 8': 850,
        'iPhone X': 1250,
    }
    const currency = {
        USD: 1.1,
        EUR: 1,
        UAH: 36,
        PLN: 4,
    }
    const [currentCurrency, setCurrentCurrency] = useState<CurrencyType>({
        EUR: 1,
    })
    const changecurrentCurrency = (id: string, index: number) =>
        setCurrentCurrency(() => ({
            [id]: index,
        }))
    // let currencyItem = Object.keys(currency).filter(function (string) {
    //     return string === key
    // })
    let currencyItem = Object.keys(currentCurrency)
    let currencyValue = +Object.values(currentCurrency)
    // let currencyValue = currency.currencyItem

    return (
        <>
            <Container>
                <Typography variant="h4" sx={{ margin: '30px 0' }}>
                    Our shop page
                </Typography>
                <div>
                    <Button
                        variant="outlined"
                        onClick={() => changecurrentCurrency('USD', 1.1)}
                    >
                        USD
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => changecurrentCurrency('EUR', 1)}
                    >
                        EUR
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => changecurrentCurrency('UAH', 36)}
                    >
                        UAH
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => changecurrentCurrency('PLN', 4)}
                    >
                        PLN
                    </Button>
                </div>
                <Grid className="flex">
                    <div>
                        <Typography
                            variant="h4"
                            component={'h2'}
                            sx={{ margin: '30px 0' }}
                        >
                            iPhone 12
                        </Typography>
                        <p className="product-description">This is iPhone</p>
                        <div className="product-price">
                            Price: {currencyItem}
                            <span>{price['iPhone 12'] * currencyValue}</span>
                        </div>
                        <Button variant="outlined">Buy</Button>
                    </div>
                    <div>
                        <Typography
                            variant="h4"
                            component={'h2'}
                            sx={{ margin: '30px 0' }}
                        >
                            iPhone 8{' '}
                        </Typography>
                        <p className="product-description">
                            This is iPhone 8 ...
                        </p>
                        <div className="product-price">
                            Price:{currencyItem}
                            <span>{price['iPhone 8'] * currencyValue}</span>
                        </div>
                        <Button variant="outlined">Buy</Button>
                    </div>
                    <div>
                        <Typography
                            variant="h4"
                            component={'h2'}
                            sx={{ margin: '30px 0' }}
                        >
                            iPhone X
                        </Typography>
                        <p className="product-description">This is iPhone X</p>
                        <div className="product-price">
                            Price:{currencyItem}
                            <span>{price['iPhone X'] * currencyValue}</span>
                        </div>
                        <Button variant="outlined">Buy</Button>
                    </div>
                </Grid>
                <p className="total">total : {0}</p>
            </Container>
        </>
    )
}

export default App
