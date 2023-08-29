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
    const [buy, setBuy] = useState<CurrencyType>({})
    const changecurrentCurrency = (id: string, index: number) =>
        setCurrentCurrency(() => ({
            [id]: index,
        }))
    const productInCart = (id: string, productPrice: number) => {
        setBuy((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + productPrice,
        }))
    }
    let currencyItem = Object.keys(currentCurrency)
    let currencyValue = +Object.values(currentCurrency)
    // console.log(buy)
    return (
        <>
            <Container className="main">
                <Typography
                    variant="h3"
                    sx={{ margin: '30px 0', fontWeight: 'bold' }}
                >
                    Our shop page
                </Typography>
                <div>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            changecurrentCurrency('USD', currency['USD'])
                        }
                    >
                        USD
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            changecurrentCurrency('EUR', currency['EUR'])
                        }
                    >
                        EUR
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            changecurrentCurrency('UAH', currency['UAH'])
                        }
                    >
                        UAH
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            changecurrentCurrency('PLN', currency['PLN'])
                        }
                    >
                        PLN
                    </Button>
                </div>
                <Grid className="flex">
                    <div>
                        <Typography
                            variant="h4"
                            component={'h2'}
                            sx={{ margin: '30px 0', fontWeight: 'bold' }}
                        >
                            iPhone 12
                        </Typography>
                        <p className="product-description">
                            This is iPhone 12 ...
                        </p>
                        <div className="product-price">
                            Price: {currencyItem}{' '}
                            <span>
                                {' '}
                                {Math.round(price['iPhone 12'] * currencyValue)}
                            </span>
                        </div>
                        <Button
                            variant="outlined"
                            onClick={() =>
                                productInCart('iPhone 12', price['iPhone 12'])
                            }
                        >
                            Buy
                        </Button>
                    </div>
                    <div>
                        <Typography
                            variant="h4"
                            component={'h2'}
                            sx={{ margin: '30px 0', fontWeight: 'bold' }}
                        >
                            iPhone 8{' '}
                        </Typography>
                        <p className="product-description">
                            This is iPhone 8 ...
                        </p>
                        <div className="product-price">
                            Price: {currencyItem}{' '}
                            <span>
                                {Math.round(price['iPhone 8'] * currencyValue)}
                            </span>
                        </div>
                        <Button
                            variant="outlined"
                            onClick={() =>
                                productInCart('iPhone 8', price['iPhone 8'])
                            }
                        >
                            Buy
                        </Button>
                    </div>
                    <div>
                        <Typography
                            variant="h4"
                            component={'h2'}
                            sx={{ margin: '30px 0', fontWeight: 'bold' }}
                        >
                            iPhone X
                        </Typography>
                        <p className="product-description">
                            This is iPhone X...
                        </p>
                        <div className="product-price">
                            Price: {currencyItem}{' '}
                            <span>
                                {Math.round(price['iPhone X'] * currencyValue)}
                            </span>
                        </div>
                        <Button
                            variant="outlined"
                            onClick={() =>
                                productInCart('iPhone X', price['iPhone X'])
                            }
                        >
                            Buy
                        </Button>
                    </div>
                </Grid>
                <p className="product-price">
                    total :
                    <span>
                        {Object.values(buy).reduce(
                            (total, current) => total + current,
                            0
                        ) * currencyValue}{' '}
                    </span>
                    {currencyItem}
                </p>
            </Container>
        </>
    )
}

export default App
