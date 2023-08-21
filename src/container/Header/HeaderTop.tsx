import SocialMedia from '../../components/SocialMedia/SocialMedia'
import { Button } from '@mui/material'
import './HeaderTop.scss'
type Props = {}

const HeaderTop = (props: Props) => {
    return (
        <div className="header-top flex-between">
            <div>
                <SocialMedia />
            </div>
            <div>
                <Button variant="outlined">To became a client</Button>
            </div>
        </div>
    )
}

export default HeaderTop
